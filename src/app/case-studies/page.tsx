import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SocialRail } from "@/components/SocialRail";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Arrow } from "@/components/Icons";
import { getCaseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real stories from REF members — deals closed, relationships built, and wins made possible through the chapter network.",
};

export default async function CaseStudiesPage() {
  const studies = await getCaseStudies();
  return (
    <>
      <Navbar />
      <SocialRail />
      <main>
        <PageHero
          eyebrow="Case Studies"
          title="Real wins from the REF network."
          subtitle="See how members use chapter events, AI matching, and the REF app to move projects forward and close deals."
        />

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-[1080px] grid md:grid-cols-2 gap-6">
            {studies.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="group block rounded-2xl bg-[color:var(--brand-surface)] p-7 ring-1 ring-black/5 hover:shadow-xl transition-shadow"
              >
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[color:var(--brand-blue)]">
                  {new Date(c.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <h2 className="mt-3 text-xl md:text-2xl font-semibold text-[color:var(--brand-ink)] leading-snug">
                  {c.title}
                </h2>
                {c.excerpt && (
                  <p className="mt-3 text-[color:var(--brand-muted)] leading-relaxed">
                    {c.excerpt}
                  </p>
                )}
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-blue)] group-hover:gap-2.5 transition-all">
                  Read case study
                  <Arrow className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
