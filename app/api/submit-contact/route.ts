import { NextResponse } from "next/server";

/**
 * Placeholder API route for contact form submission.
 * Returns 501 Not Implemented until Formspree or other backend is configured.
 */
export async function POST() {
  return NextResponse.json(
    { error: "Not implemented", message: "Contact submission not configured" },
    { status: 501 }
  );
}
