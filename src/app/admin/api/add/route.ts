import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/config/prisma/prisma";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const username = formData?.username?.trim() || "";
    const password = formData?.password || "";

    if (!username || !password) {
      return NextResponse.json({ message: "Username and password are required" }, { status: 400 });
    }

    const admin = await prisma.admins.findFirst({ where: { username }, orderBy: { id: "asc" } });

    if (admin) {
      return NextResponse.json({ message: "User already exits" }, { status: 409 });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await prisma.admins.create({
      data: {
        username: username || "",
        password: hashedPassword || "",
      },
    });

    return NextResponse.json({ message: "Admin Created successfully" }, { status: 200 });
  } catch (error) {
    // console.log("Error during Creating Adim:", error);
    return NextResponse.json({ message: "An error occurred during Creating admin", error }, { status: 500 });
  }
}
