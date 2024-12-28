"use client";
import React from "react";
import { toast } from "sonner";
import { Edit2Icon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export function EditBlog({ slug }: { slug: string }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/admin/blogs/edit/${slug}`);
  };

  return (
    <Button onClick={() => handleClick()} size="sm" className="w-4 h-8 px-0 p-3" variant="secondary">
      <Edit2Icon />
    </Button>
  );
}

export function DeleteBlog({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    const promise = fetch("admin/api/blogs/", { method: "DELETE", body: JSON.stringify({ id }) });

    toast.promise(
      promise.then(async (res) => {
        if (res.status === 200) {
          router.refresh();
          return;
        }

        const { message } = await res.json();

        throw new Error(`Unable to delete: ${message}`);
      }),
      {
        loading: "Deleting...Please wait",
        success: "Successfully deleted",
        error: (res) => {
          console.log(res);
          return res.message;
        },
      }
    );
  };

  return (
    <Button size="sm" onClick={handleDelete} className="w-4 h-8 px-0 p-3" variant="destructive">
      <Trash2Icon />
    </Button>
  );
}

export function EditLink({ slug }: { slug: string }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/admin/footer-links/edit/${slug}`);
  };

  return (
    <Button onClick={() => handleClick()} size="sm" className="w-4 h-8 px-0 p-3" variant="secondary">
      <Edit2Icon />
    </Button>
  );
}

export function DeleteLink({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    const promise = fetch("admin/api/footer-links/", { method: "DELETE", body: JSON.stringify({ id }) });

    toast.promise(
      promise.then(async (res) => {
        if (res.status === 200) {
          router.refresh();
          return;
        }

        const { message } = await res.json();

        throw new Error(`Unable to delete: ${message}`);
      }),
      {
        loading: "Deleting...Please wait",
        success: "Successfully deleted",
        error: (res) => {
          console.log(res);
          return res.message;
        },
      }
    );
  };

  return (
    <Button size="sm" onClick={handleDelete} className="w-4 h-8 px-0 p-3" variant="destructive">
      <Trash2Icon />
    </Button>
  );
}
