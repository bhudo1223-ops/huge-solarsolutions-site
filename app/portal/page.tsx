import { Metadata } from "next";
import { site } from "@/src/content/site";

export const metadata: Metadata = {
  title: "Partner Portal | Huge Solar Solutions",
  description: "Partner login and performance dashboard. Coming soon.",
};

/**
 * Scaffold: Future partner login & performance dashboard.
 * Not implemented yet.
 */
export default function PortalPage() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Partner Portal
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Coming soon. Partner login and performance dashboard for {site.brand}.
      </p>
    </main>
  );
}
