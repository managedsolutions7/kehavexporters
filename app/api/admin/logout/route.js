import { serialize } from "cookie";
import { NextResponse } from "next/server";

export async function POST() {
  // Expire the cookie by setting its maxAge to 0 or a past date
  const serializedCookie = serialize("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: -1, // Or expires: new Date(0)
    path: "/",
  });

  return new NextResponse(JSON.stringify({ message: "Logout successful" }), {
    status: 200,
    headers: { "Set-Cookie": serializedCookie },
  });
}
