"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap, reduced } from "@/animations/gsap";
import { ArrowRight, Phone, Mail, MapPin, Clock, Spark, SocialIcon, WhatsApp } from "@/components/ui/Icons";
import ContactForm from "@/components/contact/ContactForm";
import { CONTACT, SOCIAL } from "@/lib/site-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ── Top banner — dark navy band, centered title + breadcrumb ─────── */
export function ContactBanner() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power4.out" } })
        .fromTo(
          ".cx-ban__char",
          { yPercent: 110, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1, duration: 0.9, stagger: 0.035 }
        )
        .fromTo(".cx-ban__crumb", { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6 }, "-=0.45");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden  pb-14 pt-10 text-black sm:pb-16 sm:pt-16">
      
      <div className="container relative z-10 text-center">
        <h1 className="gd-display m-0 overflow-hidden text-[clamp(2.4rem,6.5vw,4.2rem)] text-black">
          {Array.from("Contact Us").map((ch, i) => (
            <span key={i} className="cx-ban__char inline-block" style={{ whiteSpace: ch === " " ? "pre" : "normal" }}>
              {ch === " " ? " " : ch}
            </span>
          ))}
        </h1>
      
      </div>
    </section>
  );
}

/* ── Service marquee — infinite band with gold spark separators ───── */
const MARQUEE_ITEMS = [
  "Website Design",
  "SEO Services",
  "Google Ads",
  "Social Media Marketing",
  "App Development",
  "Graphics Design",
  "Content Marketing",
  "Digital Marketing",
];

export function ContactMarquee({ dark = false }: { dark?: boolean }) {
  const root = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cx-mq__inner",
        { xPercent: 0 },
        { xPercent: -50, duration: 34, ease: "none", repeat: -1 }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={root}
      className={
        "overflow-hidden border-y py-4 sm:py-5 " +
        (dark ? "border-white/10 bg-[var(--gd-navy)]" : "border-[var(--gd-line)] bg-white")
      }
    >
      <div className="cx-mq__inner flex w-max items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-8 sm:gap-12">
            <span
              className={
                "gd-display whitespace-nowrap text-[clamp(1.1rem,2.4vw,1.6rem)] " +
                (dark ? "text-white" : "text-[var(--gd-ink)]")
              }
            >
              {item}
            </span>
            <Spark aria-hidden className="size-5 shrink-0 text-[var(--gd-gold)] sm:size-6" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Main — heading + rotating badge, form left, info card right ──── */
const INFO_BLOCKS = [
  {
    icon: <MapPin />,
    title: "Address",
    body: (
      <p className="m-0 text-[0.88rem] leading-relaxed text-white/75">
        Digivanta
        <br />
        Delhi NCR, India
      </p>
    ),
  },
  {
    icon: <Phone />,
    title: "Contact",
    body: (
      <p className="m-0 text-[0.88rem] leading-relaxed text-white/75">
        Phone :{" "}
        <a href="tel:+918800585867" className="transition-colors hover:text-[#e4c766]">
          +91 88005 85867
        </a>
        <br />
        Email :{" "}
        <a href={CONTACT.emailHref} className="transition-colors hover:text-[#e4c766]">
          {CONTACT.email}
        </a>
      </p>
    ),
  },
  {
    icon: <Clock />,
    title: "Open Time",
    body: (
      <p className="m-0 text-[0.88rem] leading-relaxed text-white/75">
        Monday – Saturday : 9:00 – 19:00
        <br />
        Sunday : Closed
      </p>
    ),
  },
];

/* Rotating circular "Hire us" badge, like the reference. */
function HireBadge() {
  const ref = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const tween = gsap.to(ref.current, { rotation: 360, duration: 14, ease: "none", repeat: -1 });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hire us — chat on WhatsApp"
      className="relative grid size-28 shrink-0 place-items-center sm:size-32"
    >
      <div ref={ref} className="absolute inset-0">
        <svg viewBox="0 0 100 100" className="size-full">
          <defs>
            <path id="cx-badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text className="fill-[var(--gd-navy)] text-[10.5px] font-bold uppercase tracking-[0.24em]">
            <textPath href="#cx-badge-circle">Hire us · Digivanta · Hire us ·</textPath>
          </text>
        </svg>
      </div>
      <span className="grid size-14 place-items-center rounded-full bg-[linear-gradient(120deg,#0C243D,#286FAB)] text-white shadow-[0_14px_32px_rgba(12,36,61,0.3)] transition-transform duration-300 hover:scale-110 [&_svg]:size-5 [&_svg]:-rotate-45">
        <ArrowRight />
      </span>
    </a>
  );
}

export function ContactMain() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cx-main__rev",
        { y: 44, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 76%", once: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-14 sm:py-20">
      <div className="container">
        {/* head row: kicker + heading left, rotating badge right */}
        <div className="cx-main__rev flex items-start justify-between gap-6">
          <div>
            <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gd-gold)]">
              <span aria-hidden className="h-px w-8 bg-[var(--gd-gold)]/70" />
              Contact Us
            </span>
            <h2 className="gd-display m-0 text-[clamp(1.9rem,4.4vw,3.2rem)] text-[var(--gd-ink)]">
              Join Us in Creating
              <br />
              <span className="gd-grad">Something Great</span>
            </h2>
          </div>
          <div className="hidden sm:block">
            <HireBadge />
          </div>
        </div>

        {/* form + info card */}
        <div className="mt-10 grid gap-5 items-start lg:grid-cols-[1.55fr_1fr]">
          <div className="cx-main__rev">
            <ContactForm />
          </div>

          <aside className="cx-main__rev relative overflow-hidden rounded-[22px] bg-[var(--gd-navy)] p-7 text-white shadow-[0_36px_80px_rgba(12,36,61,0.35)] sm:p-8">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: "radial-gradient(420px 260px at 90% -15%, rgba(125,180,224,0.28), transparent 65%)",
              }}
            />

            <div className="relative grid gap-5">
              {INFO_BLOCKS.map((b) => (
                <div key={b.title}>
                  <h3 className="gd-display m-0 mb-2.5 flex items-center gap-2.5 text-[1.05rem] text-white [&_svg]:size-4 [&_svg]:text-[#e4c766]">
                    {b.icon}
                    {b.title}
                  </h3>
                  {b.body}
                </div>
              ))}

              <div>
                <h3 className="gd-display m-0 mb-3.5 text-[1.05rem] text-white">Stay Connected</h3>
                <div className="flex items-center gap-2.5">
                  {SOCIAL.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e4c766] hover:text-[var(--gd-navy)] [&_svg]:size-4"
                    >
                      <SocialIcon name={s.label} />
                    </a>
                  ))}
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1fb355] hover:text-white [&_svg]:size-4"
                  >
                    <WhatsApp />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ── Full-width grayscale map ─────────────────────────────────────── */
export function ContactMap() {
  return (
    <section className="relative border-t border-[var(--gd-line)]">
      <iframe
        title="Digivanta — Delhi NCR, India"
        src="https://www.google.com/maps?q=Delhi%2C%20India&z=11&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-[380px] w-full border-0  sm:h-[440px]"
      />
      {/* floating contact chip over the map */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
      
      </div>
    </section>
  );
}
