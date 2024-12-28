"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  username: z.string().min(2, { message: "Invalid username" }),
  password: z
    .string()
    .min(2, { message: "Invalid password" })
    .regex(/[0-9]/, { message: "Invalid password" })
    .regex(/[a-z]/, { message: "Invalid password" })
    .regex(/[A-Z]/, { message: "Invalid password" })
    .regex(/[^\w]/, { message: "Invalid password" }),
});

function SignInPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { username: "", password: "" },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const promise = fetch("/admin/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: data.username || "", password: data.password || "" }),
    });

    toast.promise(
      promise.then(async (res) => {
        const { message } = (await res.json()) as any;

        if (res.status === 200) {
          router.replace("/admin");
          return;
        }

        if (res.status === 400) {
          throw new Error(message);
        } else if (res.status === 401) {
          throw new Error("Un authorised");
        } else {
          throw new Error("Error while log in please try again later");
        }
      }),
      { loading: "Validating cerdentials", success: "Successfully logged in", error: (e) => e.message }
    );
  }

  return (
    <Form {...form}>
      <h1 className="text-4xl mb-4 font-bold text-center font-secondary text-primary">Sign In</h1>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-sm mx-auto">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-bold font-secondary">Username</FormLabel>
              <FormControl>
                <Input
                  className="placeholder:text-secondary/85 focus-visible:ring-secondary"
                  placeholder="Enter user name"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-bold font-secondary">Password</FormLabel>
              <FormControl>
                <Input
                  className="placeholder:text-secondary/85 focus-visible:ring-secondary"
                  type="password"
                  placeholder="Enter password"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="default" className="w-full text-lg font-secondary font-bold">
          Login
        </Button>
      </form>
    </Form>
  );
}

export default SignInPage;
