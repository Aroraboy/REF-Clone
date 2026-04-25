"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus } from "./Icons";

export function FAQClient({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-[color:var(--brand-surface)] py-24 px-6">
      <div className="mx-auto max-w-[1024px]">
        <div className="text-sm font-semibold tracking-[0.25em] text-[color:var(--brand-blue)] uppercase">
          FAQs
        </div>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-[color:var(--brand-ink)] leading-tight">
            All the basics, answered.
          </h2>
          <Link
            href="/contact"
            className="text-sm font-semibold text-[color:var(--brand-blue)] hover:underline"
          >
            Got questions still? Contact us →
          </Link>
        </div>

        <div className="mt-10 divide-y divide-black/10 rounded-2xl bg-white ring-1 ring-black/5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-6 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-[color:var(--brand-blue)] w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-lg font-medium text-[color:var(--brand-ink)]">
                    {f.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 text-[color:var(--brand-blue)] transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pl-20 -mt-2 text-[color:var(--brand-muted)] leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
