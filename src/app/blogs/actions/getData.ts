import { prisma } from "@/config/prisma/prisma";

export const getBlogsData = async () => {
  return await prisma.blogs.findMany({ orderBy: { createdAt: "desc" }, take: 100000 });
};

export const getBlogDataFormSlug = async ({ slug }: { slug: string }) => {
  return await prisma.blogs.findFirst({ where: { slug } });
};

export const getLinksData = async () => {
  return await prisma.otherPages.findMany({ orderBy: { createdAt: "desc" }, take: 100000 });
};

export const getLinkDataFormSlug = async ({ path }: { path: string }) => {
  return await prisma.otherPages.findFirst({ where: { path } });
};
