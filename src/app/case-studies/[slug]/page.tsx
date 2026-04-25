import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { SocialRail } from "@/components/SocialRail";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Arrow } from "@/components/Icons";
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/content";

export async function generateStaticParams() {
  const studies = await getCaseStudies();
  return studies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = await getCaseStudyBySlug(slug);
  if (!c) return { title: "Case study not found" };
  return { title: c.title, description: c.excerpt };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = await getCaseStudyBySlug(slug);
  if (!c) notFound();

  return (
    <>
      <Navbar />
      <SocialRail />
      <main>
        <PageHero
          eyebrow={new Date(c.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
          title={c.title}
          subtitle={c.excerpt}
        />
        <section className="bg-white py-20 px-6">
          <article className="mx-auto max-w-[720px] text-[color:var(--brand-ink)] leading-relaxed text-lg">
            {c.body?.split("\n\n").map((para, i) => (
              <p key={i} className="mb-6">
                {para}
              </p>
            ))}
            <div className="mt-10 pt-8 border-t border-black/10">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-blue)] hover:gap-3 transition-all"
              >
                <Arrow className="h-4 w-4 rotate-180" />
                All case studies
              </Link>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
