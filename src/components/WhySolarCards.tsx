import { site } from "@/src/content/site";

function IconBulb() {
  return (
    <svg className="h-6 w-6 shrink-0 text-[var(--brand-amber)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

export function WhySolarCards() {
  return (
    <div>
      <h2 className="max-w-3xl text-[2.2rem] font-bold text-[var(--brand-blue)] md:text-[2.31rem] lg:text-[2.48rem]">
        {site.whySolar.headline}
      </h2>
      {site.whySolar.intro && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--text)]">
          {site.whySolar.intro}
        </p>
      )}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {site.whySolar.items.map((item, i) => (
          <div
            key={i}
            className="rounded-lg border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow)]"
          >
            <div className="flex items-start gap-3">
              <IconBulb />
              <div>
                <h3 className="font-semibold text-[var(--text)]">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-[var(--text)]">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
