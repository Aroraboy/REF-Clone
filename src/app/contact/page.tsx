import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { SocialRail } from "@/components/SocialRail";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact REF",
  description: "Get in touch with the REF team about chapters, partnerships, speaking, and membership.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <SocialRail />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Let's talk."
          subtitle="Questions about a chapter, membership, or partnering with REF? Send us a note — we read every message."
        />

        <section className="bg-white py-20 px-6">
          <div className="mx-auto max-w-[1080px] grid md:grid-cols-[1.2fr_1fr] gap-12">
            <ContactForm />
            <div className="space-y-6">
              <div className="rounded-2xl bg-[color:var(--brand-surface)] p-7 ring-1 ring-black/5">
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[color:var(--brand-blue)]">
                  Email
                </div>
                <a
                  href="mailto:info@reforum.net"
                  className="mt-2 block text-lg font-semibold text-[color:var(--brand-ink)] hover:text-[color:var(--brand-blue)]"
                >
                  info@reforum.net
                </a>
              </div>
              <div className="rounded-2xl bg-[color:var(--brand-surface)] p-7 ring-1 ring-black/5">
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[color:var(--brand-blue)]">
                  Phone
                </div>
                <a
                  href="tel:4695982558"
                  className="mt-2 block text-lg font-semibold text-[color:var(--brand-ink)] hover:text-[color:var(--brand-blue)]"
                >
                  469-598-2558
                </a>
              </div>
              <div className="rounded-2xl bg-[color:var(--brand-surface)] p-7 ring-1 ring-black/5">
                <div className="text-xs font-semibold tracking-[0.25em] uppercase text-[color:var(--brand-blue)]">
                  Chapters
                </div>
                <p className="mt-2 text-sm text-[color:var(--brand-muted)] leading-relaxed">
                  Currently active in Dallas–Fort Worth and Austin, with new
                  chapters launching across Texas. Interested in bringing REF
                  to your city? Let us know.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
