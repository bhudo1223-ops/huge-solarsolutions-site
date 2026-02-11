"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContact } from "@/src/lib/submit";
import { Button } from "./Button";
import { Input } from "./Input";
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
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required"),
  phone: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "failure" | "rate-limited">("idle");
  const [mailtoFallback, setMailtoFallback] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    const result = await submitContact(data);

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
              Message sent
            </h2>
            <p className="mt-1 text-[var(--text-muted)]">
              We&apos;ll get back to you shortly.
            </p>
          </div>
        </div>
        <div className="pt-2">
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
          Message could not be sent automatically
        </h3>
        <p className="mt-4 text-amber-800 dark:text-amber-200">
          Please use the button below to send your message via email.
        </p>
        <a
          href={mailtoFallback}
          className="cta-amber mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold"
        >
          Send via Email
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-lg space-y-6 text-left">
      <FormField label="Name" htmlFor="name" required error={errors.name?.message}>
        <Input id="name" {...register("name")} placeholder="Your name" autoComplete="name" />
      </FormField>
      <FormField label="Email" htmlFor="email" required error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="you@example.com"
          autoComplete="email"
        />
      </FormField>
      <FormField label="Phone" htmlFor="phone">
        <Input id="phone" type="tel" {...register("phone")} placeholder="(555) 123-4567" autoComplete="tel" />
      </FormField>
      <FormField label="Message" htmlFor="message" required error={errors.message?.message}>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Your message..."
          rows={5}
        />
      </FormField>
      <Button type="submit" loading={status === "loading"}>
        Send message
      </Button>
    </form>
  );
}
