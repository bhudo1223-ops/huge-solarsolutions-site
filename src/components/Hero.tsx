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
      <div className="absolute inset-0 bg-black/45" aria-hidden />
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-[80px] bg-gradient-to-b from-black/75 to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="max-w-3xl text-[2rem] font-bold leading-tight tracking-tight text-white sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]">
            {site.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            {site.hero.subhead}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/submit"
              className="btn-cta cta-amber shrink-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              {site.hero.cta}
            </Link>
            <Link
              href="#how-it-works"
              className="btn-cta shrink-0 border-2 border-white text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              {site.hero.ctaSecondary}
            </Link>
          </div>
          {site.hero.trustLine && (
            <p className="mt-6 text-sm text-white/80">
              {site.hero.trustLine}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
