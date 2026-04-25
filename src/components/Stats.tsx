const STATS = [
  { value: "2k+", label: "Professionals", copy: "Real estate professionals connected through REF." },
  { value: "40+", label: "Events", copy: "Curated events designed to connect, collaborate, and share insights." },
  { value: "12", label: "Chapters", copy: "Active REF chapters across major U.S. cities." },
  { value: "30+", label: "Sponsors", copy: "Backed by industry leaders strengthening the real estate community." },
];

export function Stats() {
  return (
    <section className="bg-[color:var(--brand-surface)] py-20 px-6">
      <div className="mx-auto max-w-[1280px] grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="text-5xl md:text-6xl font-bold text-[color:var(--brand-blue)] tracking-tight">
              {s.value}
            </div>
            <div className="mt-2 text-lg font-semibold text-[color:var(--brand-ink)]">
              {s.label}
            </div>
            <p className="mt-2 text-sm text-[color:var(--brand-muted)] leading-relaxed">
              {s.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
