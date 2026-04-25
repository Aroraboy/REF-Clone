"use client";

import { useState } from "react";
import { Arrow } from "./Icons";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "submitting" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    // TODO: wire up Firestore contactMessages write when Firebase is live.
    await new Promise((r) => setTimeout(r, 600));
    setState("sent");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-[color:var(--brand-surface)] p-7 md:p-8 ring-1 ring-black/5 space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Phone" name="phone" type="tel" />
      <div>
        <label className="text-sm font-semibold text-[color:var(--brand-ink)]">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-xl bg-white ring-1 ring-black/10 focus:ring-2 focus:ring-[color:var(--brand-blue)] px-4 py-3 text-sm outline-none"
          placeholder="Tell us what you're working on…"
        />
      </div>
      <div className="flex items-center gap-5">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-blue)] hover:bg-[color:var(--brand-blue-dark)] text-white text-sm font-semibold px-6 py-3 transition-colors disabled:opacity-60"
        >
          {state === "submitting" ? "Sending…" : "Send message"}
          <Arrow className="h-4 w-4" />
        </button>
        {state === "sent" && (
          <span className="text-sm font-medium text-[color:var(--brand-blue)]">
            Thanks — we'll be in touch shortly.
          </span>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-[color:var(--brand-ink)]">
        {label}
        {required && <span className="text-[color:var(--brand-blue)]"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl bg-white ring-1 ring-black/10 focus:ring-2 focus:ring-[color:var(--brand-blue)] px-4 py-3 text-sm outline-none"
      />
    </div>
  );
}
