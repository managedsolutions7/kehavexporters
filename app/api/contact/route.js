import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import dbConnect from "@/lib/dbConnect";
import Contact from "@/models/Contact";

export const dynamic = "force-dynamic"; // Force dynamic rendering

// Create a new ratelimiter, that allows 1 request per 60 seconds from a single IP.
const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(1, "60 s"),
  analytics: true,
  prefix: "contact_form_ratelimit",
});

export async function POST(request) {
  // Use the IP address of the requester for rate limiting.
  const ip = request.ip ?? "127.0.0.1";
  const { success, reset } = await ratelimit.limit(ip);

  if (!success) {
    const now = Date.now();
    const retryAfter = Math.floor((reset - now) / 1000);
    return NextResponse.json(
      {
        error: `Too many requests. Please try again in ${retryAfter} seconds.`,
      },
      { status: 429 }
    );
  }

  try {
    await dbConnect();

    const body = await request.json();

    // Create a new contact message document in the database
    await Contact.create(body);

    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 201 }
    );
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json(
        { error: `Validation Error: ${errors.join(", ")}` },
        { status: 400 }
      );
    }

    console.error("API Error:", error);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
