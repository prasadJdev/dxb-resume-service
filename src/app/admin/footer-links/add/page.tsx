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
  name: z.string().nonempty("Please enter Title of the Blog").max(25, "Title must be at most 25 characters long"),
  shortDescription: z
    .string()
    .nonempty("Please add short description to the blog")
    .max(500, "Short description must be at most 500 characters long"),
  path: z.string().nonempty("Slug is required"),
  body: jsonContentSchema.refine((d) => d && Object.keys(d).length > 0, "Please add Blog body"),
});

function AddBlogPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", shortDescription: "", path: "", body: {} },
  });

  // const handleImageUpload = async (image: FormData) => {
  //   const promise = fetch("/admin/api/upload", { method: "POST", body: image });

  //   toast.promise(
  //     promise.then(async (res) => {
  //       if (res.status === 200) {
  //         const { url } = (await res.json()) as any;
  //         form.setValue("image", url);
  //         form.clearErrors("image");
  //       } else {
  //         form.resetField("image");
  //         throw new Error("Error uploading image. Please try again.");
  //       }
  //     }),
  //     {
  //       loading: "Uploading Image...",
  //       success: "Successfully Uploaded Image",
  //       error: (e) => {
  //         console.log(e);
  //         return e?.message;
  //       },
  //     }
  //   );
  // };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const promise = fetch("/admin/api/footer-links", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        path: data.path,
        shortDescription: data.shortDescription,
        body: data.body,
      }),
    });

    toast.promise(
      promise.then(async (res) => {
        const { path, message } = await res.json();

        if (res.status === 201) {
          if (path) router.replace(`/admin/footer-links/${path}`);
        } else {
          throw new Error(`Unable to publish: ${message}`);
        }
      }),
      {
        loading: "Publishing...",
        success: "Post is live",
        error: (e) => {
          console.log("POST_PUBLISH_ERROR", e.message);
          return e.message;
        },
      }
    );
  };

  return (
    <div className="container max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between">
            <h2 className="text-xl mb-4 font-bold text-center font-secondary text-primary">Add new Footer Link</h2>
            <Button type="submit">Publish</Button>
          </div>

          <Separator className="my-8 px-8" />

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-8 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name of the blog" className="font-primary" {...field} />
                    </FormControl>
                    <FormDescription className="text-[10px]">
                      This is the name of the{" "}
                      <code className="bg-slate-100 px-1 rounded-sm">
                        <b>Page</b>
                      </code>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="path"
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
                    <FormLabel>Meta Description</FormLabel>
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
                      Short description of the page{" "}
                      <code className="bg-slate-100 px-1 rounded-sm">
                        <b>(Max. length: 500)</b>
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

export default AddBlogPage;
