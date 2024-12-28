"use client";

import React from "react";
import { toast } from "sonner";
import { JSONContent } from "novel";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import NovelEditor from "@/services/novel/NovelEditor";
import CreatableSelect from "@/components/custom-ui/createable-select";
import ImageUploader from "@/components/custom-ui/image-upload";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const jsonContentSchema: z.ZodType<JSONContent> = z.lazy(() =>
  z
    .object({
      type: z.string().optional(),
      attrs: z.record(z.any()).optional(),
      content: z.array(jsonContentSchema).optional(), // Recursive structure
      marks: z
        .array(
          z.object({
            type: z.string(),
            attrs: z.record(z.any()).optional(),
          })
        )
        .optional(),
      text: z.string().optional(),
    })
    .catchall(z.any())
);

const formSchema = z.object({
  title: z.string().nonempty("Please enter Title of the Blog").max(25, "Title must be at most 25 characters long"),
  shortDescription: z
    .string()
    .nonempty("Please add short description to the blog")
    .max(500, "Short description must be at most 500 characters long"),
  slug: z.string().nonempty("Slug is required"),
  keywords: z.array(z.string()).min(1, "At least one keyword is required"),
  image: z.string().nonempty("Featured image is required"),
  body: jsonContentSchema.refine((d) => d && Object.keys(d).length > 0, "Please add Blog body"),
});

function EditBlogComponent({
  title,
  shortDescription,
  slug,
  seoTags,
  featuredImage,
  body,
  id,
}: {
  id: string;
  title: string;
  shortDescription: string;
  slug: string;
  body: JSONContent;
  featuredImage: string;
  seoTags: string[];
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title,
      shortDescription: shortDescription,
      slug: slug,
      keywords: seoTags,
      image: featuredImage,
      body: body,
    },
  });

  const handleImageUpload = async (image: FormData) => {
    const promise = fetch("/admin/api/upload", { method: "POST", body: image });

    toast.promise(
      promise.then(async (res) => {
        if (res.status === 200) {
          const { url } = (await res.json()) as any;
          form.setValue("image", url);
          form.clearErrors("image");
        } else {
          form.resetField("image");
          throw new Error("Error uploading image. Please try again.");
        }
      }),
      {
        loading: "Uploading Image...",
        success: "Successfully Uploaded Image",
        error: (e) => {
          console.log(e);
          return e?.message;
        },
      }
    );
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const promise = fetch("/admin/api/blogs", {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: data.title,
        shortDescription: data.shortDescription,
        slug: data.slug,
        featuredImage: data.image,
        seoTags: data.keywords,
        body: data.body,
      }),
    });

    toast.promise(
      promise.then(async (res) => {
        const { slug, message } = await res.json();

        if (res.status === 201) {
          if (slug) router.replace(`/admin/blogs/${slug}`);
        } else {
          throw new Error(`Unable to update: ${message}`);
        }
      }),
      {
        loading: "Updating...",
        success: "Post is live",
        error: (e) => {
          console.log("POST_UPDATING_ERROR", e.message);
          return e.message;
        },
      }
    );
  };

  const defaultOptions = form.getValues("keywords").map((d) => ({ label: d, value: d }));

  return (
    <div className="container max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between">
            <h2 className="text-xl mb-4 font-bold text-center font-secondary text-primary">Edit blog</h2>
            <Button type="submit">Publish</Button>
          </div>

          <Separator className="my-8 px-8" />

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-8 w-full">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter title of the blog" className="font-primary" {...field} />
                    </FormControl>
                    <FormDescription className="text-[10px]">
                      This is the title of the{" "}
                      <code className="bg-slate-100 px-1 rounded-sm">
                        <b>Blog</b>
                      </code>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter slug for the blog" className="font-primary" {...field} />
                    </FormControl>
                    <FormDescription className="text-[10px]">
                      Slug to be used in{" "}
                      <code className="bg-slate-100 px-1 rounded-sm">
                        <b>url</b>
                      </code>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="shortDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Description</FormLabel>
                    <FormControl>
                      <Textarea
                        id="short-description"
                        placeholder="Enter short description of the blog"
                        className="font-primary"
                        maxLength={500}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-[10px]">
                      Short description of the blog{" "}
                      <code className="bg-slate-100 px-1 rounded-sm">
                        <b>(Max. length: 500)</b>
                      </code>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="keywords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keywords</FormLabel>
                    <FormControl>
                      <CreatableSelect
                        id="blog-keywords"
                        options={defaultOptions}
                        value={form.getValues("keywords")}
                        onChange={(value) => {
                          form.setValue("keywords", value);
                          form.clearErrors("keywords");
                        }}
                      />
                    </FormControl>
                    <FormDescription className="text-[10px]">
                      Keywords that help with{" "}
                      <code className="bg-slate-100 px-1 rounded-sm">
                        <b>SEO</b>
                      </code>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-8 w-full">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Featured Image</FormLabel>
                    <FormControl>
                      <ImageUploader image={form.getValues("image")} onChange={handleImageUpload} />
                    </FormControl>
                    <FormDescription className="text-[10px]">
                      Image that represents the{" "}
                      <code className="bg-slate-100 px-1 rounded-sm">
                        <b>Blog</b>
                      </code>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </form>

        <div className="flex flex-col gap-8 w-full mt-8">
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Body</FormLabel>

                <FormMessage />
                <FormControl>
                  <div className="border p-6 rounded-xl min-h-80">
                    <NovelEditor initialValue={field.value} onChange={field.onChange} />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </Form>
    </div>
  );
}

export default EditBlogComponent;
