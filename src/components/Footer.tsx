import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contact" className="bg-[color:var(--brand-ink)] text-white pt-16 pb-8 px-6">
      <div className="mx-auto max-w-[1280px] grid md:grid-cols-3 gap-10">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            A chapter-based platform uniting cities, developers, investors, and
            service providers.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-widest text-white/50">
            Company
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { l: "About", href: "/about" },
              { l: "Contact", href: "/contact" },
              { l: "Privacy Policy", href: "/contact" },
              { l: "Disclaimer", href: "/contact" },
            ].map((x) => (
              <li key={x.l}>
                <Link href={x.href} className="text-white/80 hover:text-white">
                  {x.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-widest text-white/50">
            Contact
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href="tel:4695982558" className="hover:text-white">
                469-598-2558
              </a>
            </li>
            <li>
              <a href="mailto:info@reforum.net" className="hover:text-white">
                info@reforum.net
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-[1280px] mt-12 pt-6 border-t border-white/10 text-sm text-white/60 flex flex-wrap justify-between gap-4">
        <div>© {new Date().getFullYear()} Real Estate Forum (REF). All rights reserved.</div>
        <div>Built on the Sparks ecosystem</div>
      </div>
    </footer>
  );
}
