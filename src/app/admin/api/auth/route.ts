import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/config/prisma/prisma";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const username: string = formData?.username || "";
    const password: string = formData?.password || "";

    if (!username || !password) {
      return NextResponse.json({ message: "Username and password are required" }, { status: 400 });
    }

    const admin = await prisma.admins.findFirst({ where: { username } });

    if (!admin) {
      return NextResponse.json({ message: "Invalid username or password" }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid username or password" }, { status: 401 });
    }

    const token = await new SignJWT({ id: admin.id, username: admin.username })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("1d")
      .sign(new TextEncoder().encode(process.env.JWT_SECRET));

    // Set token as an HTTP-only cookie
    const response = NextResponse.json({ message: "Login successfull" });

    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "development",
      path: "/admin",
      maxAge: 24 * 60 * 60, // 24 hours
    });

    return response;
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ message: "An error occurred during login" }, { status: 500 });
  }
}
