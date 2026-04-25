import Link from "next/link";
import { Arrow, Calendar, Clock, Close, MapPin } from "./Icons";
import { getUpcomingEvent } from "@/lib/content";

export async function Hero() {
  const event = await getUpcomingEvent();
  return (
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

      <div className="relative pt-32 pb-40 px-6 mx-auto max-w-[1280px]">
        {event && <UpcomingEventCard event={event} />}

        <h1 className="mt-16 max-w-5xl text-[clamp(40px,6vw,78px)] font-semibold leading-[1.05] tracking-tight fade-up">
          One Platform Connecting Cities,
          <br />
          Developers, Service Providers,
          <br />
          and Investors
        </h1>

        <p className="mt-8 max-w-3xl text-[17px] md:text-lg text-white/85 leading-relaxed fade-up">
          REF combines city-led chapter events with an AI-powered mobile app to
          connect the entire real estate ecosystem — in one room and
          continuously online. What starts at in-person events continues
          virtually through smart matching, AI insights, and chapter-based
          collaboration.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 fade-up">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--brand-ink)] px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            How REF Works
            <Arrow className="h-4 w-4" />
          </Link>
          <Link
            href="/membership"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur text-white px-6 py-3 text-sm font-semibold hover:bg-white/20 transition-colors"
          >
            Join a Chapter
            <Arrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function UpcomingEventCard({
  event,
}: {
  event: {
    slug: string;
    title: string;
    startsAt: string;
    endsAt?: string;
    timezone?: string;
    location: string;
  };
}) {
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

  return (
    <div className="relative rounded-2xl bg-[#0b0f1a] text-white shadow-2xl ring-1 ring-white/10 overflow-hidden max-w-5xl">
      <button
        aria-label="Dismiss"
        className="absolute top-4 right-4 text-white/70 hover:text-white"
      >
        <Close className="h-5 w-5" />
      </button>

      <div className="flex flex-col md:flex-row items-stretch">
        <div className="md:w-56 shrink-0 bg-gradient-to-br from-[#1a3fea] to-[#0a1e8f] p-6 flex flex-col items-center justify-center text-center">
          <div className="text-xs font-bold uppercase tracking-widest">
            REF Webinar
          </div>
          <div className="mt-2 text-[11px] font-medium bg-white/15 rounded px-2 py-0.5">
            {event.title}
          </div>
          <div className="mt-4 flex gap-1.5">
            <span className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-1 text-[10px]">
              <Calendar className="h-3 w-3" /> {dateStr}
            </span>
          </div>
          {endTime && (
            <div className="mt-1 flex gap-1.5">
              <span className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-1 text-[10px]">
                <Clock className="h-3 w-3" /> {startTime} – {endTime}{" "}
                {event.timezone}
              </span>
            </div>
          )}
        </div>

        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-pink-500" />
            Upcoming Event
          </span>
          <h3 className="mt-3 text-xl md:text-2xl font-semibold">
            {event.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
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
        </div>

        <div className="p-6 md:p-8 flex items-center">
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white hover:text-[color:var(--brand-ink)] transition-colors"
          >
            RSVP
            <Arrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
