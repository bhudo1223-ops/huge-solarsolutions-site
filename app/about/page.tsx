import { Metadata } from "next";
import { site } from "@/src/content/site";
import { Section } from "@/src/components/Section";
import { CTA } from "@/src/components/CTA";

export const metadata: Metadata = {
  title: "About | Huge Solar Solutions",
  description:
    "Huge Solar Solutions focuses on commercial and institutional solar development. Clear, no-obligation preliminary evaluations.",
  openGraph: {
    title: "About",
    description:
      "Huge Solar Solutions focuses on commercial and institutional solar development. Clear, no-obligation preliminary evaluations.",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-[var(--brand-blue)] md:text-4xl">
            {site.about.headline}
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-[var(--text)]">
            {site.about.body}
          </p>
          <div className="mt-12">
            <CTA href="/submit" />
          </div>
        </div>
      </Section>
    </main>
  );
}
