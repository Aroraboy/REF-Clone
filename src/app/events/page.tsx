import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SocialRail } from "@/components/SocialRail";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Arrow, Calendar, MapPin } from "@/components/Icons";
import { getEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming and past REF chapter events, webinars, and roundtables connecting the real estate ecosystem.",
};

export default async function EventsPage() {
  const events = await getEvents();
  const upcoming = events.filter((e) => e.status === "upcoming");
  const completed = events.filter((e) => e.status === "completed");

  return (
    <>
      <Navbar />
      <SocialRail />
      <main>
        <PageHero
          eyebrow="Events"
          title="Chapter events, webinars, and roundtables."
          subtitle="REF convenes the people who actually move real estate — in one room and continuously online."
        />

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="text-2xl md:text-3xl font-semibold text-[color:var(--brand-ink)]">
              Upcoming
            </h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {upcoming.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
              {upcoming.length === 0 && (
                <p className="text-[color:var(--brand-muted)]">
                  No upcoming events right now — check back soon.
                </p>
              )}
            </div>

            <h2 className="mt-20 text-2xl md:text-3xl font-semibold text-[color:var(--brand-ink)]">
              Past Events
            </h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {completed.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function EventCard({
  event,
}: {
  event: {
    slug: string;
    title: string;
    startsAt: string;
    location: string;
    status: "upcoming" | "completed";
    coverAccent?: string;
  };
}) {
  const date = new Date(event.startsAt);
  const dateStr = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const accent = event.coverAccent ?? "from-[#1a3fea] to-[#0a1e8f]";
  const status = event.status === "upcoming" ? "Upcoming" : "Completed";
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group rounded-2xl overflow-hidden bg-white ring-1 ring-black/5 shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className={`h-44 bg-gradient-to-br ${accent} relative`}>
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, #fff 2px, transparent 2px)",
            backgroundSize: "22px 22px",
          }}
        />
        <span className="absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-widest bg-white/20 text-white rounded-full px-3 py-1 backdrop-blur">
          {status}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-[color:var(--brand-ink)] leading-snug">
          {event.title}
        </h3>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[color:var(--brand-muted)]">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {dateStr}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            {event.location}
          </span>
        </div>
        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-blue)] group-hover:gap-2.5 transition-all">
          {event.status === "upcoming" ? "RSVP" : "Recap"}
          <Arrow className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
