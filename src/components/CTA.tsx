import { Arrow } from "./Icons";

export function CTA() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-[1280px] rounded-3xl bg-gradient-to-br from-[#1a3fea] via-[#1937d4] to-[#0a1e8f] text-white text-center px-8 py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        <h2 className="relative text-4xl md:text-6xl font-semibold tracking-tight">
          Ready to Connect?
          <br />
          Join REF Today.
        </h2>
        <a
          href="#join"
          className="relative mt-10 inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--brand-ink)] px-7 py-3.5 text-sm font-semibold hover:bg-white/90 transition-colors"
        >
          Become a Member
          <Arrow className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
