"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitLead, type LeadFormData } from "@/src/lib/submit";
import { site } from "@/src/content/site";
import { Button } from "./Button";
import { Input } from "./Input";
import { Select } from "./Select";
import { Textarea } from "./Textarea";
import { FormField } from "./FormField";

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Valid email is required"),
  buildingAddress: z.string().min(1, "Building address is required"),
  buildingType: z.string().min(1, "Building type is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  roofSize: z.string().optional(),
  roofAge: z.string().optional(),
  roofType: z.string().optional(),
  utilityProvider: z.string().optional(),
  utilityUsage: z.string().optional(),
  willingToShareBills: z.string().optional(),
  motivations: z.array(z.string()).optional(),
  batteryInterest: z.string().optional(),
  communitySolarInterest: z.string().optional(),
  contactMethod: z.string().optional(),
  preferredTime: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function SubmitBuildingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "failure" | "rate-limited">("idle");
  const [mailtoFallback, setMailtoFallback] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const motivations = watch("motivations") ?? [];

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    const payload: LeadFormData = {
      fullName: data.fullName,
      email: data.email,
      buildingAddress: data.buildingAddress,
      buildingType: data.buildingType,
      phone: data.phone,
      company: data.company,
      roofSize: data.roofSize,
      roofAge: data.roofAge,
      roofType: data.roofType,
      utilityProvider: data.utilityProvider,
      utilityUsage: data.utilityUsage,
      willingToShareBills: data.willingToShareBills,
      motivations: data.motivations?.length ? data.motivations : undefined,
      batteryInterest: data.batteryInterest,
      communitySolarInterest: data.communitySolarInterest,
      contactMethod: data.contactMethod,
      preferredTime: data.preferredTime,
    };

    const result = await submitLead(payload);

    if (result.success) {
      setStatus("success");
    } else {
      setMailtoFallback(result.mailtoFallback);
      setStatus(result.rateLimited ? "rate-limited" : "failure");
    }
  };

  if (status === "success") {
    return (
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40">
            <CheckIcon />
          </span>
          <div>
            <h2 className="text-xl font-semibold text-[var(--text)]">
              Submission received
            </h2>
            <p className="mt-1 text-[var(--text-muted)]">
              We&apos;ll review the details and reach out shortly.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button
            type="button"
            onClick={() => setStatus("idle")}
          >
            Submit another building
          </Button>
          <Link
            href="/"
            className="inline-flex h-11 items-center rounded-xl border border-[var(--border)] bg-transparent px-6 py-3 text-[var(--text)] hover:bg-[var(--bg-alt)]"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  if (status === "rate-limited") {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/30">
        <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100">
          Too many submissions
        </h3>
        <p className="mt-2 text-amber-800 dark:text-amber-200">
          Please try again in a few minutes.
        </p>
        <Link href="/" className="mt-4 inline-block text-[var(--brand-blue)] hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  if (status === "failure") {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-950/30">
        <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100">
          Submission could not be sent automatically
        </h3>
        <p className="mt-4 text-amber-800 dark:text-amber-200">
          Please use the button below to send your submission via email.
        </p>
        <a
          href={mailtoFallback}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--brand-blue)] px-6 py-3 font-semibold text-white hover:bg-[var(--brand-blue-hover)]"
        >
          Send via Email
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Required */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-[var(--text)]">
          Contact Information
        </h2>
        <FormField label="Full name" htmlFor="fullName" required error={errors.fullName?.message}>
          <Input id="fullName" {...register("fullName")} placeholder="Jane Doe" autoComplete="name" />
        </FormField>
        <FormField label="Email" htmlFor="email" required error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="jane@example.com"
            autoComplete="email"
          />
        </FormField>
        <FormField label="Phone" htmlFor="phone">
          <Input id="phone" type="tel" {...register("phone")} placeholder="(555) 123-4567" autoComplete="tel" />
        </FormField>
        <FormField label="Company / Organization" htmlFor="company">
          <Input id="company" {...register("company")} placeholder="Acme Corp" />
        </FormField>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-[var(--text)]">
          Building Details
        </h2>
        <FormField label="Building address" htmlFor="buildingAddress" required error={errors.buildingAddress?.message}>
          <Textarea
            id="buildingAddress"
            {...register("buildingAddress")}
            placeholder="123 Main St, City, State ZIP"
            rows={2}
          />
        </FormField>
        <FormField label="Building type" htmlFor="buildingType" required error={errors.buildingType?.message}>
          <Select id="buildingType" {...register("buildingType")}>
            <option value="">Select...</option>
            {site.form.buildingTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField
          label="Approximate roof size"
          htmlFor="roofSize"
          help="Square feet or &quot;unknown&quot;"
        >
          <Input id="roofSize" {...register("roofSize")} placeholder="e.g. 50,000 sq ft or unknown" />
        </FormField>
        <FormField label="Roof age" htmlFor="roofAge">
          <Select id="roofAge" {...register("roofAge")}>
            <option value="">Select...</option>
            {site.form.roofAge.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Roof type" htmlFor="roofType">
          <Select id="roofType" {...register("roofType")}>
            <option value="">Select...</option>
            {site.form.roofType.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-[var(--text)]">
          Utility & Usage
        </h2>
        <FormField label="Utility provider" htmlFor="utilityProvider">
          <Input id="utilityProvider" {...register("utilityProvider")} placeholder="e.g. Xcel Energy" />
        </FormField>
        <FormField
          label="Estimated monthly bill or annual usage"
          htmlFor="utilityUsage"
          help="e.g. $5,000/mo or 500,000 kWh/year"
        >
          <Input id="utilityUsage" {...register("utilityUsage")} placeholder="Optional" />
        </FormField>
        <FormField label="Willing to share utility bills?" htmlFor="willingToShareBills">
          <Select id="willingToShareBills" {...register("willingToShareBills")}>
            <option value="">Select...</option>
            {site.form.willingToShare.map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-[var(--text)]">
          Interest
        </h2>
        <FormField label="Primary motivation(s)" htmlFor="motivations">
          <div className="space-y-2">
            {site.form.motivations.map((m) => (
              <label key={m} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value={m}
                  {...register("motivations")}
                  className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 dark:border-zinc-600 dark:focus:ring-zinc-100"
                />
                <span className="text-sm text-[var(--text)]">{m}</span>
              </label>
            ))}
          </div>
        </FormField>
        <FormField label="Battery interest" htmlFor="batteryInterest">
          <Select id="batteryInterest" {...register("batteryInterest")}>
            <option value="">Select...</option>
            {site.form.batteryInterest.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Community solar hosting interest" htmlFor="communitySolarInterest">
          <Select id="communitySolarInterest" {...register("communitySolarInterest")}>
            <option value="">Select...</option>
            {site.form.communitySolarInterest.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-[var(--text)]">
          Contact Preference
        </h2>
        <FormField label="Preferred contact method" htmlFor="contactMethod">
          <Select id="contactMethod" {...register("contactMethod")}>
            <option value="">Select...</option>
            {site.form.contactMethod.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Preferred time" htmlFor="preferredTime">
          <Select id="preferredTime" {...register("preferredTime")}>
            <option value="">Select...</option>
            {site.form.preferredTime.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <Button type="submit" loading={status === "loading"}>
        Submit Building
      </Button>
    </form>
  );
}
