import React from "react";
import { notFound } from "next/navigation";

import { getBlogDataFormSlug } from "../actions/getData";

import NovelEditor from "@/services/novel/NovelEditor";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface BlogPreviewPageProps {
  params: { slug: string };
}

async function BlogPreviewPage({ params }: BlogPreviewPageProps) {
  const { slug } = params;

  const blogData = await getBlogDataFormSlug({ slug });

  const body = blogData?.body ? JSON.parse(blogData?.body) : {};

  if (!blogData) return notFound();

  return (
    <div className="container max-w-2xl mx-auto flex flex-col gap-7 p-4 py-12">
      <h1 className="text-4xl mb-8 font-bold font-secondary text-primary">{blogData.title}</h1>

      <p className="text-md mb-2 font-normal font-primary">{blogData.shortDescription}</p>

      <div className="flex items-center">
        <div className="flex overflow-hidden border-[1px_solid_rgba(0,0,0,0.05)] h-[44px] w-[44px] rounded-[50%] ">
          <Image
            className="aspect-[auto_44_/_44]"
            height={44}
            width={44}
            src="https://picsum.photos/seed/picsum/620/320"
            alt={blogData.id}
          />
        </div>

        <div className="ml-3 w-full block ">
          <div className="flex">
            <div style={{ flex: "1 1 0%" }}>
              <span className="text-primary text-sm font-primary leading-5 font-normal">
                <div className="flex flex-wrap items-center mb-[2px]">
                  <p className="text-base leading-6 font-primary">Auther Name</p>
                </div>
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <p className="text-muted text-xs inline-flex gap-1">
              Published:
              <time className="text-muted text-xs" dateTime={blogData.createdAt.toDateString()}>
                {blogData.createdAt.toLocaleDateString()}
              </time>
            </p>

            {/* <div className="text-secondary text-xs flex items-center">·</div>

            <p className="text-muted text-xs inline-flex gap-1">
              Updated:
              <time className="text-muted text-xs" dateTime={blogData.createdAt.toDateString()}>
                {blogData.updatedAt.toLocaleDateString()}
              </time>
            </p> */}
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <img src={blogData.featuredImage} alt={blogData.title} className="object-fit" loading="eager" />

      <NovelEditor isReadOnly initialValue={body} />
    </div>
  );
}

export default BlogPreviewPage;
