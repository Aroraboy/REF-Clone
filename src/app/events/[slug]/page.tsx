import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { SocialRail } from "@/components/SocialRail";
import { Footer } from "@/components/Footer";
import { Arrow, Calendar, Clock, MapPin } from "@/components/Icons";
import { getEventBySlug, getEvents } from "@/lib/content";

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = await getEventBySlug(slug);
  if (!e) return { title: "Event not found" };
  return { title: e.title, description: e.tagline };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) notFound();

  const date = new Date(event.startsAt);
  const dateStr = date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const startTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const endTime = event.endsAt
    ? new Date(event.endsAt).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    : undefined;
  const isUpcoming = event.status === "upcoming";

  return (
    <>
      <Navbar />
      <SocialRail />
      <main>
        <section className="relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a3fea] via-[#1937d4] to-[#1129a8]" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden
          />
          <div className="relative pt-36 pb-20 px-6 mx-auto max-w-[1080px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs">
              <span
                className={`h-2 w-2 rounded-full ${
                  isUpcoming ? "bg-pink-500" : "bg-white/60"
                }`}
              />
              {isUpcoming ? "Upcoming Event" : "Past Event"}
            </div>
            <h1 className="mt-4 max-w-4xl text-[clamp(32px,5vw,58px)] font-semibold leading-[1.1] tracking-tight">
              {event.title}
            </h1>
            {event.tagline && (
              <p className="mt-4 text-lg md:text-xl text-white/85 max-w-2xl">
                {event.tagline}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {dateStr}
              </span>
              {endTime && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {startTime} – {endTime} {event.timezone}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {event.location}
              </span>
            </div>
            {isUpcoming && (
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--brand-ink)] px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  RSVP
                  <Arrow className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-[1080px] grid md:grid-cols-[1.6fr_1fr] gap-12">
            <div>
              <div className="text-sm font-semibold tracking-[0.25em] text-[color:var(--brand-blue)] uppercase">
                About this event
              </div>
              {event.body && (
                <p className="mt-4 text-[color:var(--brand-ink)] leading-relaxed text-lg">
                  {event.body}
                </p>
              )}

              {event.highlights && event.highlights.length > 0 && (
                <>
                  <h2 className="mt-12 text-2xl font-semibold text-[color:var(--brand-ink)]">
                    What you'll learn
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {event.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-[color:var(--brand-ink)] leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-blue)]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl bg-[color:var(--brand-surface)] p-6 ring-1 ring-black/5">
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[color:var(--brand-blue)]">
                  Event details
                </div>
                <div className="mt-4 space-y-3 text-sm text-[color:var(--brand-ink)]">
                  <div className="flex gap-3">
                    <Calendar className="h-4 w-4 mt-0.5 text-[color:var(--brand-blue)]" />
                    <div>{dateStr}</div>
                  </div>
                  {endTime && (
                    <div className="flex gap-3">
                      <Clock className="h-4 w-4 mt-0.5 text-[color:var(--brand-blue)]" />
                      <div>
                        {startTime} – {endTime} {event.timezone}
                      </div>
                    </div>
                  )}
                  <div className="flex gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 text-[color:var(--brand-blue)]" />
                    <div>{event.location}</div>
                  </div>
                </div>
              </div>

              {event.speaker && (
                <div className="rounded-2xl bg-[color:var(--brand-surface)] p-6 ring-1 ring-black/5">
                  <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[color:var(--brand-blue)]">
                    Speaker
                  </div>
                  <div className="mt-4 font-semibold text-[color:var(--brand-ink)]">
                    {event.speaker.name}
                  </div>
                  <div className="text-sm text-[color:var(--brand-muted)]">
                    {event.speaker.title}
                  </div>
                </div>
              )}

              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-blue)] hover:gap-3 transition-all"
              >
                <Arrow className="h-4 w-4 rotate-180" />
                All events
              </Link>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
