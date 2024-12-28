import React from "react";
import { notFound } from "next/navigation";

import { getLinkDataFormSlug } from "../../actions/getData";

import NovelEditor from "@/services/novel/NovelEditor";
import { Separator } from "@/components/ui/separator";

interface BlogPreviewPageProps {
  params: { path: string };
}

async function BlogPreviewPage({ params }: BlogPreviewPageProps) {
  const { path } = params;

  const blogData = await getLinkDataFormSlug({ path });

  const body = blogData?.body ? JSON.parse(blogData?.body) : {};

  if (!blogData) return notFound();

  return (
    <div className="container max-w-2xl mx-auto">
      <h1 className="text-4xl mb-8 font-bold font-secondary text-primary">{blogData.name}</h1>

      <p className="text-md mb-2 font-normal font-primary">{blogData.shortDescription}</p>

      <div className="flex gap-2 justify-end">
        <p className="text-muted text-xs font-semibold">Published:</p>
        <time className="text-muted text-xs font-semibold" dateTime={blogData.createdAt.toDateString()}>
          {blogData.createdAt.toLocaleDateString()}
        </time>
      </div>

      <div className="flex gap-2 justify-end">
        <p className="text-muted text-xs font-semibold">Updated At:</p>
        <time className="text-muted text-xs font-semibold" dateTime={blogData.updatedAt.toDateString()}>
          {blogData.updatedAt.toLocaleDateString()}
        </time>
      </div>

      <Separator className="my-8" />

      <NovelEditor isReadOnly initialValue={body} />
    </div>
  );
}

export default BlogPreviewPage;
