import Link from "next/link";
import { Arrow, Calendar, MapPin } from "./Icons";
import { getEvents } from "@/lib/content";

export async function Events() {
  const events = await getEvents();
  return (
    <section id="events" className="bg-[color:var(--brand-surface)] py-24 px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-sm font-semibold tracking-[0.25em] text-[color:var(--brand-blue)] uppercase">
          Recent Events
        </div>
        <h2 className="mt-3 max-w-3xl text-4xl md:text-5xl font-semibold text-[color:var(--brand-ink)] leading-tight">
          Real estate networking in action.
        </h2>
        <p className="mt-4 max-w-2xl text-[color:var(--brand-muted)] leading-relaxed">
          Our events bring real estate professionals together for hands-on
          learning, strategic discussion, and valuable connections. From
          roundtables to city-builder summits, REF meetups are the heart of our
          community.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {events.map((e) => {
            const date = new Date(e.startsAt);
            const dateStr = date.toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            });
            const status = e.status === "upcoming" ? "Upcoming" : "Completed";
            const cta = e.status === "upcoming" ? "RSVP" : "Recap";
            const accent =
              e.coverAccent ?? "from-[#1a3fea] to-[#0a1e8f]";
            return (
              <article
                key={e.slug}
                className="group relative rounded-2xl overflow-hidden bg-white ring-1 ring-black/5 shadow-sm hover:shadow-xl transition-shadow"
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
                    {e.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[color:var(--brand-muted)]">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {dateStr}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {e.location}
                    </span>
                  </div>
                  <Link
                    href={`/events/${e.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-blue)] hover:gap-2.5 transition-all"
                  >
                    {cta}
                    <Arrow className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-blue)] hover:gap-3 transition-all"
          >
            View all events
            <Arrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
