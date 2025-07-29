// app/api/admin/messages/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";

export const dynamic = "force-dynamic"; // ✅ Force it to always run server-side

export async function GET() {
  console.log("Fetching fresh messages"); // 🧪 Test log

  await dbConnect();

  try {
    const messages = await Contact.find({}).sort({ createdAt: -1 });

    return new NextResponse(JSON.stringify(messages), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate", // ✅ disable all caching
      },
    });
  } catch (error) {
    console.error("Fetch Messages API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages." },
      { status: 500 }
    );
  }
}
