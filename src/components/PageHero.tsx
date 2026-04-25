import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
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
      <div className="relative pt-36 pb-24 px-6 mx-auto max-w-[1280px]">
        {eyebrow && (
          <div className="text-sm font-semibold tracking-[0.25em] text-white/80 uppercase">
            {eyebrow}
          </div>
        )}
        <h1 className="mt-4 max-w-5xl text-[clamp(36px,5vw,64px)] font-semibold leading-[1.1] tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-3xl text-lg text-white/85 leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
