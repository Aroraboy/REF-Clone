import Link from "next/link";
import { Logo } from "./Logo";

const NAV = [
  { label: "About Us", href: "/about" },
  { label: "Mobile App", href: "/mobile-app" },
  { label: "Events", href: "/events" },
  { label: "Membership", href: "/membership" },
  { label: "Blog", href: "/blog" },
  { label: "Case Study", href: "/case-studies" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[min(1280px,95%)]">
      <nav className="flex items-center justify-between rounded-full bg-white/95 backdrop-blur px-6 py-3 shadow-[0_10px_40px_-15px_rgba(11,18,64,0.35)] ring-1 ring-black/5">
        <Link href="/" aria-label="REF Home">
          <Logo />
        </Link>
        <ul className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[color:var(--brand-ink)]">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className="hover:text-[color:var(--brand-blue)] transition-colors"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/membership"
          className="rounded-full bg-[color:var(--brand-blue)] hover:bg-[color:var(--brand-blue-dark)] text-white text-sm font-semibold px-5 py-2.5 transition-colors"
        >
          Go to app
        </Link>
      </nav>
    </header>
  );
}
