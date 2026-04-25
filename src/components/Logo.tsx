export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
        className="h-8 w-8"
      >
        <path
          d="M20 3 L35 12 V28 L20 37 L5 28 V12 Z"
          fill="#1a3fea"
          stroke="#0a1e8f"
          strokeWidth="1.5"
        />
        <path
          d="M14 14 H23 a5 5 0 0 1 0 10 H14 Z M14 24 L26 32"
          stroke="#fff"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-2xl font-extrabold tracking-tight text-[color:var(--brand-blue)]">
        REF
      </span>
    </div>
  );
}
