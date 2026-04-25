import { Facebook, Instagram, Linkedin, Youtube } from "./Icons";

const SOCIALS = [
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "YouTube", href: "#", Icon: Youtube },
];

export function SocialRail() {
  return (
    <div className="hidden md:flex fixed right-3 top-1/2 -translate-y-1/2 z-30 flex-col gap-3">
      {SOCIALS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="grid place-items-center h-10 w-10 rounded-full bg-white/90 text-[color:var(--brand-blue)] ring-1 ring-black/5 shadow-sm hover:bg-[color:var(--brand-blue)] hover:text-white transition-colors"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
