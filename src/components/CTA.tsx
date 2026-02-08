import Link from "next/link";
import { site } from "@/src/content/site";

interface CTAProps {
  text?: string;
  href?: string;
  variant?: "primary" | "outline";
}

export function CTA({
  text = site.hero.cta,
  href = "/submit",
  variant = "primary",
}: CTAProps) {
  const base =
    "btn-cta shrink-0 focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "cta-amber"
      : "border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/5 transition-colors";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {text}
    </Link>
  );
}
