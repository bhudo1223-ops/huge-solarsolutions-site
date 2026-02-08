import { site } from "@/src/content/site";

/**
 * Form submission adapter. Supports lead (building EOI) and contact forms.
 * Reads endpoints from env vars. Falls back to API route, then mailto.
 *
 * Env vars (optional):
 * - NEXT_PUBLIC_FORMSPREE_LEAD_ENDPOINT
 * - NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT
 */

export interface LeadFormData {
  fullName: string;
  email: string;
  buildingAddress: string;
  buildingType: string;
  phone?: string;
  company?: string;
  roofSize?: string;
  roofAge?: string;
  roofType?: string;
  utilityProvider?: string;
  utilityUsage?: string;
  willingToShareBills?: string;
  motivations?: string[];
  batteryInterest?: string;
  communitySolarInterest?: string;
  contactMethod?: string;
  preferredTime?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
}

export type SubmitResult =
  | { success: true }
  | { success: false; mailtoFallback: string };

const LEAD_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_LEAD_ENDPOINT || "/api/submit-lead";
const CONTACT_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT || "/api/submit-contact";

async function trySubmit(
  endpoint: string,
  payload: Record<string, unknown>
): Promise<boolean> {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    return res.ok;
  } catch {
    return false;
  }
}

export async function submitLead(formData: LeadFormData): Promise<SubmitResult> {
  const payload = {
    type: "lead",
    ...formData,
  };

  if (await trySubmit(LEAD_ENDPOINT, payload)) {
    return { success: true };
  }

  return {
    success: false,
    mailtoFallback: buildLeadMailto(formData),
  };
}

export async function submitContact(
  formData: ContactFormData
): Promise<SubmitResult> {
  const payload = {
    type: "contact",
    ...formData,
  };

  if (await trySubmit(CONTACT_ENDPOINT, payload)) {
    return { success: true };
  }

  return {
    success: false,
    mailtoFallback: buildContactMailto(formData),
  };
}

function buildLeadMailto(data: LeadFormData): string {
  const email = site.contact.email;
  const subject = encodeURIComponent(
    `Building Submission: ${data.buildingAddress || "New EOI"}`
  );

  const lines: (string | null)[] = [
    "HUGE Solar Solutions - Building Submission (EOI)",
    "",
    "--- Contact ---",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.company ? `Company: ${data.company}` : null,
    "",
    "--- Building ---",
    `Address: ${data.buildingAddress}`,
    `Type: ${data.buildingType}`,
    data.roofSize ? `Roof size: ${data.roofSize}` : null,
    data.roofAge ? `Roof age: ${data.roofAge}` : null,
    data.roofType ? `Roof type: ${data.roofType}` : null,
    data.utilityProvider ? `Utility: ${data.utilityProvider}` : null,
    data.utilityUsage ? `Usage/bill: ${data.utilityUsage}` : null,
    data.willingToShareBills ? `Willing to share bills: ${data.willingToShareBills}` : null,
    "",
    "--- Interest ---",
    data.motivations?.length ? `Motivations: ${data.motivations.join(", ")}` : null,
    data.batteryInterest ? `Battery interest: ${data.batteryInterest}` : null,
    data.communitySolarInterest ? `Community solar: ${data.communitySolarInterest}` : null,
    data.contactMethod ? `Contact method: ${data.contactMethod}` : null,
    data.preferredTime ? `Preferred time: ${data.preferredTime}` : null,
  ];

  const body = encodeURIComponent(
    lines.filter((l): l is string => l != null).join("\n")
  );

  return `mailto:${email}?subject=${subject}&body=${body}`;
}

function buildContactMailto(data: ContactFormData): string {
  const email = site.contact.email;
  const subject = encodeURIComponent("Contact: Huge Solar Solutions");
  const body = encodeURIComponent(
    [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
      "",
      data.message,
    ]
      .filter((l): l is string => l != null)
      .join("\n")
  );

  return `mailto:${email}?subject=${subject}&body=${body}`;
}
