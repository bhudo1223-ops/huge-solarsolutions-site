"use client";

import { useRef, useEffect, useState } from "react";
import { site } from "@/src/content/site";

const IMAGE_PATH = "/images/hardhat-on-panels.png";

export function WhatWeEvaluateSection() {
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <section
      id="what-we-evaluate"
      className="min-h-[110vh] bg-white lg:grid lg:grid-cols-2"
      aria-labelledby="what-we-evaluate-heading"
    >
      <div className="relative h-64 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${IMAGE_PATH})` }}
          role="img"
          aria-label="Commercial solar panel array assessment"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
          aria-hidden
        />
      </div>

      <div className="flex flex-col justify-center px-5 py-12 sm:px-7 md:py-16 lg:px-14 lg:py-24 xl:px-16">
        <h2
          id="what-we-evaluate-heading"
          className="max-w-3xl text-[2.2rem] font-bold text-[var(--brand-blue)] md:text-[2.31rem] lg:text-[2.48rem]"
        >
          {site.whatWeEvaluate.headline}
        </h2>
        {site.whatWeEvaluate.intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text)]">
            {site.whatWeEvaluate.intro}
          </p>
        )}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {site.whatWeEvaluate.items.map((item, i) => (
            <li
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={`flex items-start gap-3 rounded-lg border border-[var(--border)] bg-white px-6 py-4 shadow-[var(--shadow-sm)] transition-all duration-500 ${
                reducedMotion
                  ? ""
                  : "opacity-0 translate-y-6 [&[data-visible=true]]:opacity-100 [&[data-visible=true]]:translate-y-0"
              }`}
            >
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-amber)]"
                aria-hidden
              />
              <span className="text-[var(--text)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
