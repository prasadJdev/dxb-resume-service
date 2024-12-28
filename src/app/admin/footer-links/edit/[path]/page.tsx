"use server";
import { notFound } from "next/navigation";

import { getLinkDataFormSlug } from "@/app/admin/actions/getData";

import EditLinkComponent from "./components/EditLinkComponent";

async function BlogEditPage({ params }: { params: { path: string } }) {
  const { path } = params;

  const linkData = await getLinkDataFormSlug({ path });

  const body = linkData?.body ? JSON.parse(linkData?.body || "") : {};

  if (!linkData) return notFound();

  return (
    <EditLinkComponent
      id={linkData.id || ""}
      name={linkData?.name || ""}
      shortDescription={linkData?.shortDescription || ""}
      path={linkData?.path || ""}
      body={body || {}}
    />
  );
}

export default BlogEditPage;
