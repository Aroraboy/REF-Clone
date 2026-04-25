import Link from "next/link";
import { Arrow } from "./Icons";
import { getUpcomingEvent } from "@/lib/content";
import { UpcomingEventCard } from "./UpcomingEventCard";

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
        {event && (
          <UpcomingEventCard
            event={{
              slug: event.slug,
              title: event.title,
              startsAt: event.startsAt,
              endsAt: event.endsAt,
              timezone: event.timezone,
              location: event.location,
            }}
          />
        )}

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
