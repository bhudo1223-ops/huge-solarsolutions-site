interface FeatureGridProps {
  headline: string;
  intro?: string;
  items: readonly string[];
}

export function FeatureGrid({ headline, intro, items }: FeatureGridProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--brand-blue)] md:text-3xl">
        {headline}
      </h2>
      {intro && (
        <p className="mt-4 text-lg text-[var(--text)]">{intro}</p>
      )}
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-white px-5 py-4 shadow-[var(--shadow-sm)]"
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
  );
}
