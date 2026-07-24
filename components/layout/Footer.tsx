"use client";

import Link from "next/link";
import { CONTACT, FOOTER_LINKS, SOCIAL } from "@/lib/site-data";
import { RD_FOOTER, RD_FOOTER_SERVICES } from "@/lib/redesign-data";
import { Phone, Mail, MapPin, SocialIcon, ArrowRight } from "@/components/ui/Icons";

/* Animated-underline link (self-contained, no scoped CSS needed). */
function AniLink({ href, children }: { href: string; children: React.ReactNode }) {
  const handleClick = (e: React.MouseEvent) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const currentPath = window.location.pathname;
      if (currentPath === path || (path === "/" && currentPath === "/") || !path) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="relative inline-block text-white/60 transition-colors hover:text-white after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[#C9A227] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b0b0d] pt-20 text-white">
      {/* glow */}
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 size-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(40,111,171,0.18),transparent_70%)] blur-3xl" />

      <div className="container relative">
        {/* CTA row */}
        <div className="mb-16 grid items-center gap-8 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_auto]">
          <div>
            <h2 className="font-[family-name:var(--font-display),var(--font)] text-3xl font-bold tracking-tight sm:text-4xl">
              {RD_FOOTER.ctaTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-white/60">{RD_FOOTER.ctaText}</p>
          </div>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#286FAB] px-7 py-4 font-semibold text-white shadow-[0_12px_34px_rgba(40,111,171,0.35)] transition-transform hover:-translate-y-0.5"
          >
            {RD_FOOTER.consult} <ArrowRight />
          </a>
        </div>

        {/* big brand wordmark */}
        <div className="mb-14">
          <div className="font-[family-name:var(--font-display),var(--font)] text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.9] tracking-tight text-white">
           <img src="/digi-vanta-logo.png" alt="" />
          </div>
          <p className="mt-4 max-w-2xl text-white/60">{RD_FOOTER.brandLine}</p>
          <p className="mt-2 max-w-2xl text-white/50">{RD_FOOTER.about}</p>
        </div>

        {/* link columns */}
        <div className="grid gap-10 border-t border-white/10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A227]">Quick Links</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}><AniLink href={l.href}>{l.label}</AniLink></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A227]">Our Services</h4>
            <ul className="space-y-3">
              {RD_FOOTER_SERVICES.map((s) => {
                let href = "/#services";
                if (s === "SEO Services") {
                  href = "/seo-services-in-delhi";
                } else if (s === "Social Media Marketing") {
                  href = "/social-media-marketing-in-delhi";
                } else if (s === "Website Development") {
                  href = "/web-development-company-in-delhi";
                } else if (s === "App Development") {
                  href = "/mobile-app-development-in-delhi";
                } else if (s === "Graphic Design") {
                  href = "/graphic-designing-company-in-delhi";
                }
                return (
                  <li key={s}>
                    <AniLink href={href}>{s}</AniLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A227]">Get in Touch</h4>
            <ul className="space-y-3 text-white/60">
              <li><a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-white [&_svg]:size-4"><Phone /> {CONTACT.phone}</a></li>
              <li><a href={CONTACT.emailHref} className="inline-flex items-center gap-2 transition-colors hover:text-white [&_svg]:size-4"><Mail /> {CONTACT.email}</a></li>
              <li className="inline-flex items-center gap-2 [&_svg]:size-4"><MapPin /> {CONTACT.location}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A227]">Follow Us</h4>
            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#C9A227] hover:text-white [&_svg]:size-4"
                >
                  <SocialIcon name={s.label} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="mt-16 border-t border-white/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-2 text-sm text-white/40 sm:flex-row">
          <p>{RD_FOOTER.copyright}</p>
          <p>Digital Marketing Company in Delhi</p>
        </div>
      </div>
    </footer>
  );
}
