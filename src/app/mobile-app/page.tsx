import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SocialRail } from "@/components/SocialRail";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "REF Mobile App",
  description:
    "The REF mobile app turns city-led chapter events into year-round connections powered by AI-driven matching, chapter feeds, and curated resources.",
};

const STEPS = [
  {
    n: "01",
    title: "Join your chapter",
    body: "Pick the city closest to where you work and apply in under two minutes. Get access to the chapter feed, member directory, and upcoming events.",
  },
  {
    n: "02",
    title: "Complete your profile",
    body: "Tell REF what you build, invest in, or support. The more specific, the better the matches — and the better the deals that find you.",
  },
  {
    n: "03",
    title: "Get matched",
    body: "AI-powered matching surfaces the people and projects most relevant to your focus, with warm intros already primed on both sides.",
  },
  {
    n: "04",
    title: "Connect in person and online",
    body: "Attend chapter events, start conversations in the app, and move from first meeting to real collaboration without the usual lag.",
  },
  {
    n: "05",
    title: "Keep compounding",
    body: "Your network, your pipeline, and your market intelligence grow with every event, post, and connection. REF remembers so you don't have to.",
  },
];

export default function MobileAppPage() {
  return (
    <>
      <Navbar />
      <SocialRail />
      <main>
        <PageHero
          eyebrow="The REF App"
          title="Your chapter, your network, always in your pocket."
          subtitle="REF Mobile turns events into year-round momentum. Smart matching, chapter feeds, and curated resources — all in one place."
        >
          <div className="flex flex-wrap gap-4">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--brand-ink)] px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Join a Chapter
              <Arrow className="h-4 w-4" />
            </Link>
          </div>
        </PageHero>

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-[1080px]">
            <div className="text-sm font-semibold tracking-[0.25em] text-[color:var(--brand-blue)] uppercase">
              How It Works
            </div>
            <h2 className="mt-3 max-w-3xl text-3xl md:text-4xl font-semibold text-[color:var(--brand-ink)] leading-tight">
              Five steps from signup to real collaboration.
            </h2>

            <div className="mt-12 space-y-4">
              {STEPS.map((s) => (
                <div
                  key={s.n}
                  className="rounded-2xl bg-[color:var(--brand-surface)] p-7 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start"
                >
                  <div className="text-4xl font-semibold text-[color:var(--brand-blue)] w-20 shrink-0">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[color:var(--brand-ink)]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[color:var(--brand-muted)] leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--brand-surface)] py-20 px-6">
          <div className="mx-auto max-w-[1080px]">
            <div className="rounded-3xl bg-gradient-to-br from-[#1a3fea] to-[#0a1e8f] text-white p-10 md:p-14 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="relative">
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-white/80">
                  Coming Next — REF 2.0
                </div>
                <h3 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight max-w-3xl">
                  An AI co-pilot for every member.
                </h3>
                <p className="mt-4 text-white/85 leading-relaxed max-w-2xl">
                  REF 2.0 layers a dedicated AI co-pilot on top of the chapter
                  network — market scouting, underwriting shortcuts, intro
                  drafting, and deal-room summaries, all grounded in the
                  context of your chapter and your pipeline.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
