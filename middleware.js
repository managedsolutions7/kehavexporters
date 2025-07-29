import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // Protect admin dashboard and its API routes
  if (pathname.startsWith("/admin/messages") || pathname.startsWith("/api/messages")) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(token, secret);
      // Token is valid, continue
      return NextResponse.next();
    } catch (error) {
      console.error("JWT Verification Error:", error.code, "Redirecting to login.");
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      // Clear the invalid cookie
      response.cookies.set("token", "", { expires: new Date(0), path: "/" });
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/messages/:path*',
    '/api/messages/:path*',
  ],
};
