import { getTestimonials } from "@/lib/content";

export async function Testimonials() {
  const quotes = await getTestimonials();
  const loop = [...quotes, ...quotes, ...quotes];
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-sm font-semibold tracking-[0.25em] text-[color:var(--brand-blue)] uppercase">
          Testimonials
        </div>
        <h2 className="mt-3 max-w-3xl text-4xl md:text-5xl font-semibold text-[color:var(--brand-ink)] leading-tight">
          Highlights from events.
        </h2>
      </div>

      <div className="mt-12 relative">
        <div className="flex gap-6 animate-marquee w-max pl-6">
          {loop.map((q, i) => (
            <figure
              key={`${q.id}-${i}`}
              className="w-[420px] shrink-0 rounded-2xl bg-[color:var(--brand-surface)] p-8"
            >
              <svg viewBox="0 0 32 32" className="h-8 w-8 text-[color:var(--brand-blue)]">
                <path
                  fill="currentColor"
                  d="M10 8C6 8 3 11 3 15v9h9v-9H7c0-3 2-4 3-4V8zm16 0c-4 0-7 3-7 7v9h9v-9h-5c0-3 2-4 3-4V8z"
                />
              </svg>
              <blockquote className="mt-4 text-[color:var(--brand-ink)] leading-relaxed">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-semibold text-[color:var(--brand-ink)]">
                  {q.name}
                </div>
                <div className="text-sm text-[color:var(--brand-muted)]">
                  {q.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
