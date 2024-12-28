import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;
  const redirectURL = `${origin}/admin/sign-in`;

  // Check if the route is under /admin but not the sign-in page
  if (pathname.startsWith("/admin") && !["/admin/api/auth", "/admin/sign-in", "/admin/api/add"].includes(pathname)) {
    const encryptedToken = request.cookies.get("auth_token")?.value;

    if (!encryptedToken) {
      console.log("No token found. Redirecting to sign-in...");
      return NextResponse.redirect(redirectURL);
    }

    try {
      // Verify the token
      await jwtVerify(encryptedToken, new TextEncoder().encode(process.env.JWT_SECRET));

      // const { payload } = await jwtVerify(encryptedToken, new TextEncoder().encode(process.env.JWT_SECRET));
      // const user = await prisma.admins.findFirst({ where: { id: payload?.id || "" } });
      // if (!user) {
      //   console.log("Invalid Token. Redirecting to sign-in...");
      //   return NextResponse.redirect(redirectURL);
      // }
    } catch (error) {
      console.error("Token verification error:", error);
      // Redirect on invalid or expired token
      const response = NextResponse.redirect(redirectURL);
      response.cookies.set("auth_token", "", { expires: new Date(0) });

      return response;
    }
  }

  // Allow the request to proceed if no issues
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"], // Protect all admin routes
};
