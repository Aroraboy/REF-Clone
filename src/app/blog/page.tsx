import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { SocialRail } from "@/components/SocialRail";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Arrow } from "@/components/Icons";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "REF Blog",
  description:
    "Insights on real estate strategy, development, investing, and the business of building — from the REF community.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return (
    <>
      <Navbar />
      <SocialRail />
      <main>
        <PageHero
          eyebrow="Blog"
          title="Writing from the people moving real estate."
          subtitle="Market takes, playbooks, and lessons learned — written by operators, for operators."
        />

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-[1080px] grid md:grid-cols-2 gap-6">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block rounded-2xl bg-[color:var(--brand-surface)] p-7 ring-1 ring-black/5 hover:shadow-xl transition-shadow"
              >
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[color:var(--brand-blue)]">
                  {new Date(p.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <h2 className="mt-3 text-xl md:text-2xl font-semibold text-[color:var(--brand-ink)] leading-snug">
                  {p.title}
                </h2>
                {p.excerpt && (
                  <p className="mt-3 text-[color:var(--brand-muted)] leading-relaxed">
                    {p.excerpt}
                  </p>
                )}
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-blue)] group-hover:gap-2.5 transition-all">
                  Read post
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
