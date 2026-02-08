import { NextResponse } from "next/server";

/**
 * Placeholder API route for lead submission.
 * Returns 501 Not Implemented until a real backend is configured.
 * Replace with Formspree, Basin, or custom backend logic.
 */
export async function POST() {
  return NextResponse.json(
    { error: "Not implemented", message: "Lead submission not configured" },
    { status: 501 }
  );
}
