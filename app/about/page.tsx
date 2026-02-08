import { Metadata } from "next";
import { site } from "@/src/content/site";
import { Section } from "@/src/components/Section";
import { CTA } from "@/src/components/CTA";

export const metadata: Metadata = {
  title: "About | Huge Solar Solutions",
  description:
    "Huge Solar Solutions focuses on commercial and institutional solar development. Clear, no-obligation evaluations.",
  openGraph: {
    title: "About",
    description:
      "Huge Solar Solutions focuses on commercial and institutional solar development. Clear, no-obligation evaluations.",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="max-w-3xl text-[2rem] font-bold text-[var(--brand-blue)] md:text-[2.5rem]">
            {site.about.headline}
          </h1>
          {Array.isArray(site.about.body) ? (
            site.about.body.map((para, i) => (
              <p key={i} className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text)] first:mt-8">
                {para}
              </p>
            ))
          ) : (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--text)]">
              {site.about.body}
            </p>
          )}
          <div className="mt-12 flex flex-wrap gap-4">
            <CTA href="/submit" />
            <CTA href="/contact" text="Get in contact" variant="outline" />
          </div>
        </div>
      </Section>
    </main>
  );
}
