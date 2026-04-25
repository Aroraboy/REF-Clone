import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SocialRail } from "@/components/SocialRail";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About REF",
  description:
    "REF (Real Estate Forum) connects cities, developers, investors, and service providers through chapter events and an AI-powered platform.",
};

const GOALS = [
  {
    n: "01",
    title: "Strengthen chapter networks",
    body: "Grow city-led chapters that convene the people who actually move projects — developers, investors, city officials, and service providers.",
  },
  {
    n: "02",
    title: "Accelerate entitlements",
    body: "Shorten the distance between vision and approval by creating shared context between cities and developers.",
  },
  {
    n: "03",
    title: "Surface trusted capital",
    body: "Connect deal sponsors with aligned capital partners who understand the market and the plan.",
  },
  {
    n: "04",
    title: "Raise the quality bar",
    body: "Share playbooks, postmortems, and real numbers so the bar for project execution keeps rising.",
  },
  {
    n: "05",
    title: "Expand access to expertise",
    body: "Make legal, construction, and operational knowledge accessible to emerging developers and first-time sponsors.",
  },
  {
    n: "06",
    title: "Build an AI layer that helps",
    body: "Put AI-powered matching, insights, and context in the hands of members — continuously, not just at events.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <SocialRail />
      <main>
        <PageHero
          eyebrow="About REF"
          title="Built to move real estate forward — together."
          subtitle="REF is a chapter-based platform uniting cities, developers, investors, and service providers. We combine in-person events with a year-round AI-powered app so relationships compound instead of fading after the room empties."
        >
          <div className="flex flex-wrap gap-4">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--brand-ink)] px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Join a Chapter
              <Arrow className="h-4 w-4" />
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur text-white px-6 py-3 text-sm font-semibold hover:bg-white/20 transition-colors"
            >
              See Upcoming Events
              <Arrow className="h-4 w-4" />
            </Link>
          </div>
        </PageHero>

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-[1080px] grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-sm font-semibold tracking-[0.25em] text-[color:var(--brand-blue)] uppercase">
                Our Vision
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[color:var(--brand-ink)] leading-tight">
                One connected ecosystem for the built world.
              </h2>
              <p className="mt-5 text-[color:var(--brand-muted)] leading-relaxed">
                A future where cities, developers, investors, and service
                providers move as one network — where information travels
                faster than friction, and where every chapter event compounds
                into year-round momentum.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.25em] text-[color:var(--brand-blue)] uppercase">
                Our Mission
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[color:var(--brand-ink)] leading-tight">
                Reduce friction. Accelerate trust.
              </h2>
              <p className="mt-5 text-[color:var(--brand-muted)] leading-relaxed">
                REF exists to remove the coordination tax from real estate. We
                build the rooms, the relationships, and the tools that let
                serious people find each other and work together faster.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--brand-surface)] py-20 px-6">
          <div className="mx-auto max-w-[1080px] grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
            <div className="rounded-2xl bg-gradient-to-br from-[#1a3fea] to-[#0a1e8f] aspect-[4/5] relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 40%, #fff 2px, transparent 2px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-white/70">
                  Founder
                </div>
                <div className="mt-2 text-2xl font-semibold">
                  Ravi Polishetty
                </div>
                <div className="text-sm text-white/80">Founder & CEO, REF</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.25em] text-[color:var(--brand-blue)] uppercase">
                Founder's Note
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[color:var(--brand-ink)] leading-tight">
                "Real estate doesn't break because people aren't trying — it
                breaks because they're not connected."
              </h2>
              <p className="mt-5 text-[color:var(--brand-muted)] leading-relaxed">
                Ravi Polishetty founded REF after years of watching promising
                projects stall on misalignment between cities, developers, and
                capital. REF is his answer: a chapter-based network where the
                right people actually meet, and an AI-powered app that keeps
                the work moving long after the event ends.
              </p>
              <p className="mt-4 text-[color:var(--brand-muted)] leading-relaxed">
                REF is built in the open with the community it serves. Every
                feature, every chapter, every resource is shaped by the
                members who show up.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-[1280px]">
            <div className="text-sm font-semibold tracking-[0.25em] text-[color:var(--brand-blue)] uppercase">
              Strategic Goals
            </div>
            <h2 className="mt-3 max-w-3xl text-3xl md:text-4xl font-semibold text-[color:var(--brand-ink)] leading-tight">
              Six priorities guiding everything we build.
            </h2>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GOALS.map((g) => (
                <div
                  key={g.n}
                  className="rounded-2xl bg-[color:var(--brand-surface)] p-7 ring-1 ring-black/5"
                >
                  <div className="text-sm font-semibold text-[color:var(--brand-blue)]">
                    {g.n}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[color:var(--brand-ink)]">
                    {g.title}
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--brand-muted)] leading-relaxed">
                    {g.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
