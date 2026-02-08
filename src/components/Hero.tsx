"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/src/content/site";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
      <Image
        src="/hero/hero-placeholder.png"
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Full overlay */}
      <div
        className="absolute inset-0 bg-black/45"
        aria-hidden
      />
      {/* Dark banner behind navbar: glassy transparent nav stays legible */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-[80px] bg-gradient-to-b from-black/75 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {site.hero.headline}
          </h1>
          <p className="mt-6 text-xl text-white/90">
            {site.hero.subhead}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/submit"
              className="cta-amber inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              {site.hero.cta}
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              {site.hero.ctaSecondary}
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/80">
            {site.hero.trustLine}
          </p>
        </div>
      </div>
    </section>
  );
}
