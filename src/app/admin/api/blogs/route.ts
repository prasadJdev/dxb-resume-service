import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/config/prisma/prisma";

export async function GET(request: NextRequest) {
  try {
    const data = await prisma.blogs.findMany({ orderBy: { createdAt: "desc" }, take: 100000 });

    return NextResponse.json({ message: "Retrived blogs", data }, { status: 200 });
  } catch (error) {
    console.log(error, "ERROR While retriveing blogs");
    return NextResponse.json({ message: "Unable to retieve blogs...!" }, { status: 400 });
  }
}

// const blogSchema = z.object({
//   title: z.string().nonempty("Please enter Title of the Blog").max(25, "Title must be at most 25 characters long"),
//   shortDescription: z
//     .string()
//     .nonempty("Please add short description to the blog")
//     .max(500, "Short description must be at most 500 characters long"),
//   slug: z.string().nonempty("Slug is required"),
//   seoTags: z.array(z.string()).min(1, "At least one keyword is required"),
//   featuredImage: z.string().nonempty("Featured image is required"),
//   body: z.object({})
// });

export async function POST(request: NextRequest) {
  const formData = await request.json();

  //   const validatations = blogSchema.safeParse(formData);

  try {
    const isDuplicate = await prisma.blogs.findFirst({ where: { slug: formData?.slug } });

    if (isDuplicate) return NextResponse.json({ message: "Duplicate Slug" }, { status: 409 });

    const data = {
      title: formData?.title,
      shortDescription: formData?.shortDescription,
      body: JSON.stringify(formData?.body || {}),
      slug: formData?.slug,
      featuredImage: formData?.featuredImage,
      seoTags: formData?.seoTags,
    };

    const blog = await prisma.blogs.create({ data });

    console.log("Published blog successfully");
    return NextResponse.json({ message: "Published Blog succesfully", slug: blog.slug }, { status: 201 });
  } catch (error) {
    console.log(error, "ERROR While publishing blog");
    return NextResponse.json({ message: "Something went wrong while publishing the blog" }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  const formData = await request.json();

  //   const validatations = blogSchema.safeParse(formData);

  try {
    const oldBlog = await prisma.blogs.findFirst({ where: { slug: formData?.slug } });

    const data = {
      title: formData?.title,
      shortDescription: formData?.shortDescription,
      body: JSON.stringify(formData?.body || {}),
      slug: formData?.slug,
      featuredImage: formData?.featuredImage,
      seoTags: formData?.seoTags,
    };

    if (!formData?.id) return NextResponse.json({ message: "Incomplete information" }, { status: 400 });

    const blog = await prisma.blogs.update({ where: { id: formData?.id }, data });

    console.log("Updated blog successfully");

    return NextResponse.json({ message: "Updated Blog succesfully", slug: blog.slug }, { status: 201 });
  } catch (error) {
    console.log(error, "ERROR While updating blog");

    return NextResponse.json({ message: "Something went wrong while updating the blog" }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  if (id) {
    await prisma.blogs.delete({ where: { id } });
    return NextResponse.json({ message: "Successfully deleted" }, { status: 200 });
  }

  return NextResponse.json({ message: "Incomplete information" }, { status: 400 });
}
