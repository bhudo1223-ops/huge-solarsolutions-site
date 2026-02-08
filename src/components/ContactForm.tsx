"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitContact } from "@/src/lib/submit";
import { Button } from "./Button";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { FormField } from "./FormField";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required"),
  phone: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "failure">("idle");
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
      setStatus("failure");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-900 dark:bg-green-950/30">
        <h3 className="text-xl font-semibold text-green-900 dark:text-green-100">
          Message sent
        </h3>
        <p className="mt-4 text-green-800 dark:text-green-200">
          Thank you. We&apos;ll get back to you shortly.
        </p>
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
