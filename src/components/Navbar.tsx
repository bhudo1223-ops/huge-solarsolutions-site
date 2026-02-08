"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { site } from "@/src/content/site";

const SCROLL_THRESHOLD = 80;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navLinks = site.nav.main.filter((n) => n.href !== "/submit");
  const submitLink = site.nav.main.find((n) => n.href === "/submit");

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        isTransparent
          ? "bg-black/50 backdrop-blur-[8px]"
          : "border-b border-[var(--brand-blue)]/20 bg-[var(--brand-blue)]"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3 min-w-0">
          <Image
            src="/brand/HUGELOGOWhite.png"
            alt={site.brand}
            width={140}
            height={48}
            className="h-10 w-auto min-w-[100px] object-contain object-left sm:h-12 sm:min-w-[120px]"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden shrink-0 items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white drop-shadow-md transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          {submitLink && (
            <Link
              href={submitLink.href}
              className="cta-amber inline-flex shrink-0 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--brand-blue)]"
            >
              {submitLink.label}
            </Link>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white drop-shadow-md md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className={`border-t px-4 py-4 md:hidden ${
            isTransparent
              ? "border-white/20 bg-[var(--brand-blue)]/95"
              : "border-white/20 bg-[var(--brand-blue-hover)]"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {site.nav.main.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    item.href === "/submit"
                      ? "cta-amber block rounded-lg px-4 py-3 text-center font-semibold"
                      : "block text-base font-medium text-white hover:text-white"
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
