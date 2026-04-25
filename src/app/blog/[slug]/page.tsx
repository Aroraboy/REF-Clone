import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { SocialRail } from "@/components/SocialRail";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Arrow } from "@/components/Icons";
import { getBlogBySlug, getBlogPosts } from "@/lib/content";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <SocialRail />
      <main>
        <PageHero
          eyebrow={new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
          title={post.title}
          subtitle={post.excerpt}
        />
        <section className="bg-white py-20 px-6">
          <article className="mx-auto max-w-[720px] text-[color:var(--brand-ink)] leading-relaxed text-lg">
            {post.body?.split("\n\n").map((para, i) => (
              <p key={i} className="mb-6">
                {para}
              </p>
            ))}
            <div className="mt-10 pt-8 border-t border-black/10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-blue)] hover:gap-3 transition-all"
              >
                <Arrow className="h-4 w-4 rotate-180" />
                All posts
              </Link>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
