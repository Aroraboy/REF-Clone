import { Arrow } from "./Icons";

export function MobilePromo() {
  return (
    <section id="mobile" className="bg-white py-24 px-6">
      <div className="mx-auto max-w-[1280px] rounded-3xl bg-gradient-to-br from-[#1a3fea] to-[#0a1e8f] text-white overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center p-10 md:p-16">
          <div>
            <div className="text-sm font-semibold tracking-[0.25em] text-white/70 uppercase">
              We&apos;re mobile too!
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Your real estate network — anywhere you go.
            </h2>
            <p className="mt-5 text-white/80 text-lg max-w-lg">
              Smart matching, AI insights, chapter feeds and event RSVPs — all in
              your pocket.
            </p>
            <a
              href="#download"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--brand-ink)] px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Download Now
              <Arrow className="h-4 w-4" />
            </a>
          </div>

          <div className="relative flex justify-center">
            <div className="relative h-[480px] w-[240px] rounded-[40px] bg-black/80 ring-8 ring-white/10 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-24 bg-black rounded-b-2xl z-10" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#f5f6fb] to-white p-4 pt-8">
                <div className="text-[color:var(--brand-blue)] font-bold text-lg">
                  REF
                </div>
                <div className="mt-4 h-24 rounded-2xl bg-[color:var(--brand-blue)] text-white p-3 text-xs">
                  Welcome back, Sam
                  <div className="mt-2 text-[10px] opacity-80">
                    3 new matches nearby
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-12 rounded-xl bg-white ring-1 ring-black/5 flex items-center gap-2 p-2"
                    >
                      <div className="h-8 w-8 rounded-full bg-[color:var(--brand-blue)]/20" />
                      <div className="flex-1">
                        <div className="h-2 w-20 bg-black/20 rounded" />
                        <div className="mt-1 h-1.5 w-28 bg-black/10 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
