import { Arrow } from "./Icons";

const BENEFITS = [
  {
    title: "Global Connections",
    copy: "Meet and collaborate with developers, investors, city leaders, service providers, and decision-makers across markets — while staying rooted in your local REF chapter.",
  },
  {
    title: "Targeted Insights",
    copy: "Gain strategic advice from experienced professionals solving the same development, financing, entitlement, and execution challenges you face.",
  },
  {
    title: "Thought Leadership",
    copy: "Learn directly from guest speakers, policy-makers, city officials, and innovators shaping the future of real estate.",
  },
  {
    title: "Real Relationships",
    copy: "REF prioritizes meaningful relationships over surface-level networking — peers, partners, and mentors who speak your language.",
  },
  {
    title: "Accelerated Growth",
    copy: "Discover new financing models, technology tools, and partnership opportunities to scale projects faster and more strategically.",
  },
  {
    title: "Smart Exposure",
    copy: "Leverage REF's chapter events and technology-driven platform to stay visible, relevant, and connected throughout the year.",
  },
];

export function WhyJoin() {
  return (
    <section id="membership" className="bg-white py-24 px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-sm font-semibold tracking-[0.25em] text-[color:var(--brand-blue)] uppercase">
              Why join REF?
            </div>
            <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl font-semibold text-[color:var(--brand-ink)] leading-tight">
              More than a network — a catalyst for real estate success.
            </h2>
          </div>
          <a
            href="#chapters"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-blue)] hover:bg-[color:var(--brand-blue-dark)] text-white px-5 py-3 text-sm font-semibold transition-colors"
          >
            Explore Our Chapters
            <Arrow className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b, i) => (
            <article
              key={b.title}
              className="group relative rounded-2xl bg-[color:var(--brand-surface)] p-8 transition-all hover:bg-[color:var(--brand-blue)] hover:text-white"
            >
              <div className="text-sm font-semibold text-[color:var(--brand-blue)] group-hover:text-white/80">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 text-2xl font-semibold">{b.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--brand-muted)] group-hover:text-white/85">
                {b.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
