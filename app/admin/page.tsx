import { Metadata } from "next";
import { site } from "@/src/content/site";

export const metadata: Metadata = {
  title: "Admin | Huge Solar Solutions",
  description: "Internal admin tools. Coming soon.",
};

/**
 * Scaffold: Future internal admin tools.
 * Not implemented yet.
 */
export default function AdminPage() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Admin
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Coming soon. Internal admin tools for {site.brand}.
      </p>
    </main>
  );
}
