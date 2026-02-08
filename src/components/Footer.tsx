import Link from "next/link";
import Image from "next/image";
import { site } from "@/src/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[var(--brand-blue)] bg-[var(--brand-blue)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/brand/HUGELOGOWhite.png"
              alt={site.brand}
              width={220}
              height={72}
              className="h-14 w-auto object-contain opacity-95 sm:h-16 lg:h-20"
            />
          </Link>
          <p className="mt-2 text-sm text-white/80">
            Operated by {site.legalEntity}
          </p>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-8">
            <a
              href={`mailto:${site.contact.email}`}
              className="text-sm text-white/90 hover:text-white"
            >
              {site.contact.email}
            </a>
            <a
              href={`tel:${site.contact.phone.replace(/\D/g, "")}`}
              className="text-sm text-white/90 hover:text-white"
            >
              {site.contact.phone}
            </a>
          </div>

          <p className="mt-6 max-w-xl text-xs text-white/70">
            {site.footer.disclaimer}
          </p>

          <p className="mt-4 text-xs text-white/70">
            © {year} {site.legalEntity}
          </p>
        </div>
      </div>
    </footer>
  );
}
