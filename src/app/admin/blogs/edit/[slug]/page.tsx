"use server";
import { notFound } from "next/navigation";

import EditBlogComponent from "./components/EditBlogComponent";
import { getBlogDataFormSlug } from "@/app/admin/actions/getData";

async function BlogEditPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const blogData = await getBlogDataFormSlug({ slug });
  const body = blogData?.body ? JSON.parse(blogData?.body || "") : "";

  if (!blogData) return notFound();

  return (
    <EditBlogComponent
      id={blogData.id || ""}
      title={blogData?.title || ""}
      shortDescription={blogData?.shortDescription || ""}
      slug={blogData?.slug || ""}
      body={body || {}}
      featuredImage={blogData?.featuredImage || ""}
      seoTags={blogData?.seoTags || []}
    />
  );
}

export default BlogEditPage;
