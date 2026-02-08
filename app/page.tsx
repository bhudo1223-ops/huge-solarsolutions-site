import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/src/content/site";
import { Hero } from "@/src/components/Hero";
import { Section } from "@/src/components/Section";
import { WhatWeEvaluateSection } from "@/src/components/WhatWeEvaluateSection";
import { StepList } from "@/src/components/StepList";
import { WhySolarCards } from "@/src/components/WhySolarCards";
import { CTA } from "@/src/components/CTA";

export const metadata: Metadata = {
  title: "Huge Solar Solutions",
  description:
    "Commercial and institutional solar development. Preliminary feasibility evaluations for warehouses, schools, offices, retail, and multifamily.",
  openGraph: {
    title: "Huge Solar Solutions",
    description:
      "Commercial and institutional solar development. Preliminary feasibility evaluations for warehouses, schools, offices, retail, and multifamily.",
  },
};

export default function HomePage() {
  return (
    <main>
      {/* A) Hero - Full-bleed with background image */}
      <Hero />

      {/* B) How it works - White, two-column */}
      <Section id="how-it-works" className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-3xl text-[2.2rem] font-bold text-[var(--brand-blue)] md:text-[2.31rem] lg:text-[2.48rem]">
              {site.process.headline}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text)]">
              {site.process.intro}
            </p>
            <div className="mt-8 overflow-hidden rounded-lg border border-[var(--border)] shadow-[var(--shadow)]">
              <Image
                src="/images/workers-solar-panels.png"
                alt="Solar panel installation in progress"
                width={600}
                height={400}
                className="h-64 w-full object-cover transition-transform hover:scale-[1.02]"
              />
            </div>
            <div className="mt-10">
              <CTA href="/submit" />
            </div>
          </div>
          <div>
            <StepList />
          </div>
        </div>
      </Section>

      {/* C) What we evaluate - Sticky image + scroll content */}
      <WhatWeEvaluateSection />

      {/* D) Why owners & tenants - White, 3-column cards */}
      <Section className="bg-white">
        <WhySolarCards />
      </Section>

      {/* E) CTA band - Submit a Building card with warehouse-solar background */}
      <Section className="relative min-h-[420px] bg-[var(--bg-alt)]">
        <Image
          src="/images/warehouse-rooftop-submit.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          unoptimized
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="relative mx-auto flex justify-center px-4 py-12 sm:py-16">
          <div className="w-full max-w-2xl rounded-xl border-2 border-[var(--brand-blue)]/20 bg-white/95 px-6 py-12 text-center shadow-[var(--shadow-sm)] backdrop-blur-sm sm:px-8 sm:py-16">
            <h2 className="max-w-3xl mx-auto text-[2.2rem] font-bold text-[var(--brand-blue)] md:text-[2.31rem] lg:text-[2.48rem]">
              {site.ctaBand.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[var(--text)]">
              {site.ctaBand.subhead}
            </p>
            <div className="mt-8">
              <CTA href="/submit" />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
