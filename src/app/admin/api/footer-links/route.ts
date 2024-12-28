import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/config/prisma/prisma";

export async function GET() {
  try {
    const data = await prisma.otherPages.findMany({ orderBy: { createdAt: "desc" }, take: 100000 });

    return NextResponse.json({ message: "Retrived Links", data }, { status: 200 });
  } catch (error) {
    console.log(error, "ERROR While retriveing links");
    return NextResponse.json({ message: "Unable to retieve links...!" }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  const formData = await request.json();

  //   const validatations = blogSchema.safeParse(formData);

  try {
    const isDuplicate = await prisma.otherPages.findFirst({ where: { path: formData?.path } });

    if (isDuplicate) return NextResponse.json({ message: "Duplicate Slug" }, { status: 409 });

    const data = {
      name: formData?.name,
      path: formData?.path,
      shortDescription: formData?.shortDescription,
      body: JSON.stringify(formData?.body || {}),
    };

    const blog = await prisma.otherPages.create({ data });

    console.log("Created link successfully");
    return NextResponse.json({ message: "Created new Link succesfully", path: blog.path }, { status: 201 });
  } catch (error) {
    console.log(error, "ERROR While publishing blog");
    return NextResponse.json({ message: "Something went wrong while creating link" }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  const formData = await request.json();

  //   const validatations = blogSchema.safeParse(formData);

  try {
    if (!formData?.id) return NextResponse.json({ message: "Incomplete information" }, { status: 400 });

    const oldBlog = await prisma.otherPages.findFirst({ where: { id: formData?.id } });

    if (!oldBlog) return NextResponse.json({ message: "Incomplete information" }, { status: 400 });

    const data = {
      name: formData?.title,
      path: formData?.path,
      shortDescription: formData?.shortDescription,
      body: JSON.stringify(formData?.body || {}),
    };

    const blog = await prisma.otherPages.update({ where: { id: formData?.id }, data });

    console.log("Updated Link successfully");

    return NextResponse.json({ message: "Updated Link succesfully", path: blog.path }, { status: 201 });
  } catch (error) {
    console.log(error, "ERROR While updating link");

    return NextResponse.json({ message: "Something went wrong while updating the Link" }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  if (id) {
    await prisma.otherPages.delete({ where: { id } });
    return NextResponse.json({ message: "Successfully deleted link" }, { status: 200 });
  }

  return NextResponse.json({ message: "Incomplete information" }, { status: 400 });
}
