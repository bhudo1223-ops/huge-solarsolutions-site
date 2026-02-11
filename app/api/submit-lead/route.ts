import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/src/lib/rate-limit";

const FORMSPREE_URL = process.env.FORMSPREE_LEAD_ENDPOINT || process.env.NEXT_PUBLIC_FORMSPREE_LEAD_ENDPOINT;

export async function POST(request: Request) {
  if (!FORMSPREE_URL) {
    return NextResponse.json(
      { error: "Lead form not configured" },
      { status: 501 }
    );
  }

  const ip = getClientIp(request);
  const { allowed, retryAfter } = checkRateLimit(ip, "lead");
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429, headers: retryAfter ? { "Retry-After": String(retryAfter) } : undefined }
    );
  }

  try {
    const body = await request.json();
    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Submission failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Submission failed" },
      { status: 502 }
    );
  }
}
