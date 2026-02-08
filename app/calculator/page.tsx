import { Metadata } from "next";
import { site } from "@/src/content/site";

export const metadata: Metadata = {
  title: "Solar Calculator | Huge Solar Solutions",
  description: "Solar potential calculator. Coming soon.",
};

/**
 * Scaffold: Future solar potential calculator.
 * Not implemented yet.
 */
export default function CalculatorPage() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        Solar Calculator
      </h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Coming soon. Solar potential calculator for {site.brand}.
      </p>
    </main>
  );
}
