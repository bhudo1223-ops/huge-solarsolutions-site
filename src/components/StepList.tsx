import { site } from "@/src/content/site";

export function StepList() {
  return (
    <ol className="space-y-4">
      {site.process.steps.map((step, i) => (
        <li
          key={i}
          className="flex gap-4 rounded-lg border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow)]"
        >
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-amber)] text-sm font-bold text-[var(--text)]"
            aria-hidden
          >
            {i + 1}
          </span>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-[var(--brand-blue)]">
              {step.title}
            </h3>
            <p className="mt-1 text-[var(--text)]">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
