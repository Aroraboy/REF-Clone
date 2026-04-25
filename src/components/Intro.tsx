export function Intro() {
  return (
    <section id="about" className="relative bg-white py-24 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <div className="text-sm font-semibold tracking-[0.25em] text-[color:var(--brand-blue)] uppercase">
          Real Estate Forum
        </div>
        <p className="mt-6 text-[clamp(22px,3vw,34px)] leading-[1.4] font-medium text-[color:var(--brand-ink)]">
          The Real Estate Forum (REF) is a chapter-based platform uniting cities,
          counties, developers, investors, builders, and service providers
          through curated in-person events and a smart{" "}
          <span className="text-[color:var(--brand-blue)]">AI-powered app.</span>
        </p>
      </div>
    </section>
  );
}
