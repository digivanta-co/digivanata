"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV, SERVICES, CONTACT } from "@/lib/site-data";
import { ServiceIcon, ArrowRight } from "@/components/ui/Icons";
import { Mail, Phone, ChevronDown, X } from "lucide-react";

/* Brand palette (matches the site: white · navy #0C243D · blue #286FAB · gold #b08d3f) */

type MenuChild = { label: string; href: string; desc?: string; icon?: string };
type MenuItem = { label: string; href: string; children?: MenuChild[] };

/* Only services with a real page route appear in the dropdown. */
const SERVICE_PAGES: MenuChild[] = [
  ...SERVICES.filter((s): s is (typeof SERVICES)[number] & { href: string } => Boolean(s.href)).map((s) => ({
    label: s.title,
    href: `/${s.href}`,
    desc: s.desc,
    icon: s.icon,
  })),
  {
    label: "Graphic Designing",
    href: "/graphic-designing-company-in-delhi",
    desc: "Branding, UI/UX designs, and marketing creatives",
    icon: "web",
  },
];

const NAV_ITEMS: MenuItem[] = NAV.map((item) =>
  item.label === "Services"
    ? { label: item.label, href: item.href, children: SERVICE_PAGES }
    : { label: item.label, href: item.href }
);

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const progressRef = useRef<HTMLDivElement>(null);

  /* compact header + hide-on-scroll-down + scroll progress hairline */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      /* 6px dead zone so tiny scroll jitter doesn't flicker the header */
      if (Math.abs(y - lastY.current) > 6) {
        setHidden(y > lastY.current && y > 96);
        lastY.current = y;
      }
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(y / max, 1) : 0;
      progressRef.current?.style.setProperty("transform", `scaleX(${p})`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeAll = () => {
    setOpen(false);
    setMobileServices(false);
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const currentPath = window.location.pathname;
      if (currentPath === path || (path === "/" && currentPath === "/") || !path) {
        e.preventDefault();
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (href: string) => !href.includes("#") && pathname === href;

  return (
    <header
      className={
        "sticky top-0 z-50 w-full transition-transform duration-300 " +
        (hidden && !open ? "-translate-y-full" : "")
      }
    >
      {/* Glass background lives on an inner overlay, NOT on <header>:
          backdrop-filter on the header itself would make it the containing
          block for position:fixed children — trapping the mobile drawer
          inside the header and widening the page (pinch-zoom-out bug).
          Same reason the hide-on-scroll transform above is only applied
          while hidden AND the drawer is closed — a transform would also
          become the containing block for the fixed drawer. */}
      <div
        aria-hidden
        className={
          "absolute inset-0 -z-10 backdrop-blur-xl transition-all duration-300 " +
          (scrolled
            ? "bg-white/95 shadow-[0_8px_30px_rgba(13,18,41,0.06)]"
            : "bg-white/80")
        }
      />
      <div
        className={
          "mx-auto grid w-full max-w-350 grid-cols-[1fr_auto] items-center gap-6 px-4 transition-all duration-300 lg:grid-cols-[1fr_auto_1fr] lg:px-8 " +
          (scrolled ? "py-2" : "py-3.5")
        }
      >
        {/* Left — logo */}
        <Link href="/" className="justify-self-start transition-transform duration-300 hover:-translate-y-0.5" onClick={closeAll}>
          <Image
            src="/digivanta.png"
            alt="Digivanta"
            width={220}
            height={60}
            priority
            className={"w-auto transition-all duration-300 " + (scrolled ? "max-h-11" : "max-h-13")}
          />
        </Link>

        {/* Center — menu */}
        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="m-0 flex list-none items-center gap-1 p-0">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                /* Services — mega dropdown */
                <li key={item.label} className="group relative">
                  <button
                    type="button"
                    className="flex cursor-pointer items-center gap-1.5 rounded-full border-none bg-transparent px-4 py-2.5 text-[0.95rem] font-semibold text-[#3a4155] transition-colors duration-200 group-hover:text-[#0C243D]"
                  >
                    {item.label}
                    <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* mega panel */}
                  <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition-all duration-300 [transition-timing-function:cubic-bezier(.22,1,.36,1)] group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="w-[620px] overflow-hidden rounded-2xl border border-[rgba(13,18,41,0.08)] bg-white p-2.5 shadow-[0_24px_60px_rgba(13,18,41,0.14)]">
                      {/* gold hairline */}
                      <div aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#0C243D,#286FAB_55%,#b08d3f)]" />
                      <div className="grid grid-cols-2 gap-1">
                        {item.children.map((child, ci) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={(e) => handleNavClick(child.href, e)}
                            style={{ transitionDelay: `${ci * 35}ms` }}
                            className="group/card flex translate-y-1.5 items-center gap-3 rounded-xl p-3 opacity-0 transition-all duration-300 hover:bg-[#f5f7fc] group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
                          >
                            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[rgba(40,111,171,0.08)] text-[#286FAB] transition-all duration-300 group-hover/card:-rotate-6 group-hover/card:scale-105 group-hover/card:bg-[linear-gradient(120deg,#0C243D,#286FAB)] group-hover/card:text-white [&_svg]:size-5">
                              {child.icon && <ServiceIcon name={child.icon} />}
                            </span>
                            <span className="min-w-0">
                              <span className="block truncate text-[0.85rem] font-bold text-[#0d1229]">
                                {child.label}
                              </span>
                              <span className="block truncate text-[0.72rem] text-[#6b7280]">
                                {child.desc}
                              </span>
                            </span>
                            <span className="ml-auto shrink-0 -translate-x-1 text-[#b08d3f] opacity-0 transition-all duration-300 group-hover/card:translate-x-0 group-hover/card:opacity-100 [&_svg]:size-4">
                              <ArrowRight />
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={
                      "group/link relative block px-4 py-2.5 text-[0.95rem] font-semibold transition-colors duration-200 " +
                      (isActive(item.href) ? "text-[#0C243D]!" : "text-[#3a4155]! hover:text-[#0C243D]!")
                    }
                  >
                    {item.label}
                    {/* animated underline */}
                    <span
                      aria-hidden
                      className={
                        "absolute inset-x-4 bottom-1 h-[2px] origin-left rounded-full bg-[linear-gradient(90deg,#0C243D,#286FAB_60%,#b08d3f)] transition-transform duration-300 [transition-timing-function:cubic-bezier(.22,1,.36,1)] " +
                        (isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover/link:scale-x-100")
                      }
                    />
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Right — actions */}
        <div className="flex items-center gap-2.5 justify-self-end">
          <Link
            href={CONTACT.emailHref}
            className="hidden size-10 items-center justify-center rounded-full border border-[rgba(13,18,41,0.1)] text-[#3a4155]! transition-all duration-200 hover:-translate-y-0.5 hover:border-[#b08d3f] hover:text-[#0C243D]! md:flex"
            aria-label="Email Us"
          >
            <Mail className="size-4" />
          </Link>
          <Link
            href={CONTACT.phoneHref}
            className="hidden size-10 items-center justify-center rounded-full border border-[rgba(13,18,41,0.1)] text-[#3a4155]! transition-all duration-200 hover:-translate-y-0.5 hover:border-[#b08d3f] hover:text-[#0C243D]! md:flex"
            aria-label="Call Us"
          >
            <Phone className="size-4" />
          </Link>

          {/* CTA — navy gradient pill with shine sweep */}
          <Link
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta relative hidden items-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(120deg,#0C243D,#286FAB)] px-5 py-2.5 text-[0.82rem] font-bold text-white! shadow-[0_10px_24px_rgba(10,31,102,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(10,31,102,0.36)] md:inline-flex"
          >
            <span aria-hidden className="absolute inset-0 -translate-x-[120%] bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.45),transparent)] transition-transform duration-700 group-hover/cta:translate-x-[120%]" />
            <span aria-hidden className="relative size-1.5 rounded-full bg-[#e8c574]" />
            <span className="relative">Chat with Expert</span>
            <span className="relative transition-transform duration-300 group-hover/cta:translate-x-0.5 [&_svg]:size-3.5">
              <ArrowRight />
            </span>
          </Link>

          {/* burger (mobile) */}
          <button
            type="button"
            className={`nav__burger ${open ? "is-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* scroll progress hairline */}
      <div aria-hidden className="h-[2px] w-full bg-transparent">
        <div
          ref={progressRef}
          className="h-full w-full origin-left scale-x-0 bg-[linear-gradient(90deg,#0C243D,#286FAB_55%,#b08d3f)]"
        />
      </div>

      {/* Mobile drawer — clipped to the viewport so its off-screen resting
          position can never widen the page (pinch-zoom-out bug) */}
      {open && <div className="nav__backdrop" onClick={closeAll} aria-hidden="true" />}
      <div className="drawer-clip" aria-hidden={!open}>
      <div className={`drawer ${open ? "drawer--open" : ""}`}>
        <button type="button" className="drawer__close" aria-label="Close menu" onClick={closeAll}>
          <X />
        </button>
        <nav className="drawer__nav" aria-label="Mobile">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  type="button"
                  className={`drawer__link drawer__link--toggle ${mobileServices ? "is-open" : ""}`}
                  onClick={() => setMobileServices(!mobileServices)}
                  aria-expanded={mobileServices}
                >
                  {item.label}
                  <svg viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
                <div className={`drawer__sub ${mobileServices ? "drawer__sub--open" : ""}`}>
                  <div className="drawer__sub-inner">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={(e) => {
                          closeAll();
                          handleNavClick(child.href, e);
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="drawer__link"
                onClick={(e) => {
                  closeAll();
                  handleNavClick(item.href, e);
                }}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="drawer__cta mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(120deg,#0C243D,#286FAB)] px-6 py-3 text-sm font-bold text-white!"
            onClick={closeAll}
          >
            Chat with Expert
          </Link>
        </nav>
      </div>
      </div>
    </header>
  );
}
