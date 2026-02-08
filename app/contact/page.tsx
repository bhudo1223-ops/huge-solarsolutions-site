import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/src/content/site";
import { Section } from "@/src/components/Section";
import { ContactForm } from "@/src/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Huge Solar Solutions. Submit a building for evaluation or reach out with questions.",
  openGraph: {
    title: "Contact",
    description:
      "Contact Huge Solar Solutions. Submit a building for evaluation or reach out with questions.",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-[var(--brand-blue)] md:text-4xl lg:text-5xl">
                {site.contactPage.headline}
              </h1>
              <p className="mt-6 text-lg text-[var(--text)]">
                {site.contactPage.body}
              </p>
              {site.contactPage.reassurance && (
                <p className="mt-2 text-sm text-[var(--text)]">
                  {site.contactPage.reassurance}
                </p>
              )}
              <div className="mt-10 overflow-hidden rounded-lg border border-[var(--border)] shadow-[var(--shadow-sm)]">
                <Image
                  src="/images/banking-meeting.png"
                  alt="Professional partnership"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="rounded-xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow)]">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href={`mailto:${site.contact.email}`}
              className="rounded-lg border border-[var(--border)] bg-white px-8 py-4 font-medium text-[var(--text)] shadow-[var(--shadow-sm)] transition-colors hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
            >
              {site.contact.email}
            </a>
            <a
              href={`tel:${site.contact.phone.replace(/\D/g, "")}`}
              className="rounded-lg border border-[var(--border)] bg-white px-8 py-4 font-medium text-[var(--text)] shadow-[var(--shadow-sm)] transition-colors hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
            >
              {site.contact.phone}
            </a>
          </div>

          <p className="mt-12 text-center text-[var(--text)]">
            Ready to{" "}
            <Link
              href="/submit"
              className="font-semibold text-[var(--brand-blue)] hover:underline"
            >
              submit a building
            </Link>
            ?
          </p>
        </div>
      </Section>
    </main>
  );
}
