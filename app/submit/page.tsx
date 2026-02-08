import { Metadata } from "next";
import { site } from "@/src/content/site";
import { Section } from "@/src/components/Section";
import { SubmitBuildingForm } from "@/src/components/SubmitBuildingForm";

export const metadata: Metadata = {
  title: "Submit a Building",
  description:
    "Submit your building for a preliminary solar evaluation. Non-binding, no obligation.",
  openGraph: {
    title: "Submit a Building",
    description:
      "Submit your building for a preliminary solar evaluation. Non-binding, no obligation.",
  },
};

export default function SubmitPage() {
  return (
    <main className="bg-white">
      <Section className="pb-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="max-w-3xl text-[2rem] font-bold text-[var(--brand-blue)] md:text-[2.5rem]">
            Submit a Building
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--text)]">
            Provide building details for a preliminary solar evaluation. Your submission is non-binding and we&apos;ll follow up shortly.
          </p>
          <div className="mt-10">
            <SubmitBuildingForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
