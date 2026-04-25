import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SocialRail } from "@/components/SocialRail";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "REF membership connects cities, developers, investors, brokers, builders, lenders, and service providers through chapter events and an AI-powered app.",
};

const PERSONAS = [
  {
    title: "City leaders",
    body: "Mayors, council members, and economic development teams shaping the next generation of development in their cities.",
  },
  {
    title: "Developers",
    body: "Residential, commercial, and mixed-use developers looking for capital, partners, and a faster path through entitlements.",
  },
  {
    title: "Investors",
    body: "LPs, GPs, family offices, and funds allocating to real estate and searching for vetted sponsors and deals.",
  },
  {
    title: "Brokers",
    body: "Commercial and residential brokers building deep, long-term relationships with active buyers and sellers.",
  },
  {
    title: "Builders & contractors",
    body: "General contractors and trades looking for repeat developer relationships and early project visibility.",
  },
  {
    title: "Lenders",
    body: "Banks, debt funds, and private lenders looking for bankable sponsors and high-quality deal flow.",
  },
  {
    title: "Service providers",
    body: "Attorneys, architects, title, insurance, and consulting firms serving the real estate ecosystem.",
  },
];

const BENEFITS = [
  {
    title: "Chapter membership",
    body: "Access to your city's chapter — members, events, and the ongoing conversation that defines your local market.",
  },
  {
    title: "AI-powered matching",
    body: "Intelligent intros to people and projects aligned with your focus — no more cold outreach guesswork.",
  },
  {
    title: "Event-first networking",
    body: "Curated chapter events that convene the people who actually move projects in your market.",
  },
  {
    title: "Deal flow visibility",
    body: "Surface opportunities early through the chapter network, before they hit the broader market.",
  },
  {
    title: "Knowledge library",
    body: "Playbooks, postmortems, and real deal numbers from members willing to share what actually worked.",
  },
  {
    title: "Year-round app access",
    body: "Chat, posts, notifications, and resources that keep your network compounding between events.",
  },
  {
    title: "City-leader access",
    body: "Direct conversations with policy-makers, planners, and economic development teams in your chapter.",
  },
  {
    title: "Speaking & panel invites",
    body: "Opportunities to host, speak, and share your expertise with serious operators.",
  },
  {
    title: "Private roundtables",
    body: "Small, invite-only sessions where members go deep on specific deals, markets, and strategies.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <SocialRail />
      <main>
        <PageHero
          eyebrow="Membership"
          title="Find your people. Move your projects forward."
          subtitle="REF is a chapter-based community built for the entire real estate ecosystem. Apply to your city's chapter and get access to events, members, and the REF app."
        >
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--brand-ink)] px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Apply to Join
              <Arrow className="h-4 w-4" />
            </Link>
          </div>
        </PageHero>

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-[1280px]">
            <div className="text-sm font-semibold tracking-[0.25em] text-[color:var(--brand-blue)] uppercase">
              Who REF Is For
            </div>
            <h2 className="mt-3 max-w-3xl text-3xl md:text-4xl font-semibold text-[color:var(--brand-ink)] leading-tight">
              Built for every role that actually moves a project.
            </h2>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PERSONAS.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl bg-[color:var(--brand-surface)] p-7 ring-1 ring-black/5"
                >
                  <h3 className="text-lg font-semibold text-[color:var(--brand-ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--brand-muted)] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--brand-surface)] py-20 px-6">
          <div className="mx-auto max-w-[1280px]">
            <div className="text-sm font-semibold tracking-[0.25em] text-[color:var(--brand-blue)] uppercase">
              What You Get
            </div>
            <h2 className="mt-3 max-w-3xl text-3xl md:text-4xl font-semibold text-[color:var(--brand-ink)] leading-tight">
              Nine reasons members keep showing up.
            </h2>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {BENEFITS.map((b, i) => (
                <div
                  key={b.title}
                  className="rounded-2xl bg-white p-7 ring-1 ring-black/5"
                >
                  <div className="text-sm font-semibold text-[color:var(--brand-blue)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[color:var(--brand-ink)]">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--brand-muted)] leading-relaxed">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#1a3fea] to-[#0a1e8f] p-10 md:p-14 text-white relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-semibold leading-tight max-w-2xl">
                    Ready to join your chapter?
                  </h3>
                  <p className="mt-3 text-white/85 max-w-xl">
                    Apply in a few minutes. Our team will follow up with an
                    invite to the next chapter event in your city.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--brand-ink)] px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors self-start"
                >
                  Apply to Join
                  <Arrow className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
