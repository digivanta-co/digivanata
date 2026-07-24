"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { WhatsApp } from "@/components/ui/Icons";
import { SeoIcon } from "@/components/seo/SeoIcons";

/* ---------------------------------------------------------------- */
/*  Word-by-word GSAP reveal for the headline                       */
/* ---------------------------------------------------------------- */
function HeroQuote() {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const words = "SEO Services That Build Long-Term Online Visibility".split(" ");

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const spans = ref.current.querySelectorAll("span.shw");
    gsap.fromTo(
      spans,
      { opacity: 0, y: 20, filter: "blur(6px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, stagger: 0.06, ease: "power3.out", delay: 0.15 }
    );
  }, []);

  return (
    <h1
      ref={ref}
      className={cn(
        "font-[family-name:var(--font-display),var(--font)]",
        "text-[clamp(2.3rem,5vw,3.9rem)] font-[800] leading-[1.07] tracking-[-0.035em] text-[var(--ink)]"
      )}
    >
      {words.map((w, i) => {
        const isGold = ["Long-Term", "Visibility"].includes(w);
        return (
          <span
            key={i}
            className={cn(
              "shw mr-[0.26em] inline-block",
              isGold &&
                "text-[#a27702]"
            )}
          >
            {w}
          </span>
        );
      })}
    </h1>
  );
}

/* ---------------------------------------------------------------- */
/*  Hero — light, photo-driven                                      */
/* ---------------------------------------------------------------- */
export default function SeoHero() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".sh__eyebrow", { y: 14, autoAlpha: 0, duration: 0.5, delay: 0.05 });
      gsap.from(".sh__sub", { y: 18, autoAlpha: 0, duration: 0.6, delay: 0.55 });
      gsap.from(".sh__ctas > *", { y: 18, autoAlpha: 0, duration: 0.5, stagger: 0.1, delay: 0.7 });
      gsap.from(".sh__trust", { y: 16, autoAlpha: 0, duration: 0.5, delay: 0.9 });
      gsap.from(".sh__visual", { scale: 0.96, autoAlpha: 0, duration: 0.8, delay: 0.35, ease: "power3.out" });
      gsap.from(".sh__float", { y: 18, autoAlpha: 0, duration: 0.6, stagger: 0.15, delay: 1 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="seo-hero"
      className="relative overflow-hidden bg-[var(--bg)] pt-[7.5rem] pb-[4.5rem] lg:pt-[9rem] lg:pb-[6rem]"
    >
      {/* Light background — minimal, warm accents only */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,var(--bg)_100%)]" />
        <div className="absolute -top-[10%] right-[-5%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(201,169,97,0.16),transparent_65%)] blur-2xl" />
        <div className="absolute bottom-[-15%] left-[-8%] h-[45vh] w-[45vh] rounded-full bg-[radial-gradient(circle,rgba(12,36,61,0.06),transparent_65%)] blur-2xl" />
        <div className="absolute inset-0 opacity-[0.5] [background-image:linear-gradient(rgba(12,36,61,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(12,36,61,0.04)_1px,transparent_1px)] [background-size:46px_46px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="container relative z-[2]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* ---- Text column ---- */}
          <div className="text-center lg:text-left">
            <span className="sh__eyebrow inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-[0.42rem] text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[var(--navy)] shadow-[var(--shadow-sm)]">
              <i className="block size-[7px] rounded-full bg-[var(--gold)] shadow-[0_0_0_4px_rgba(201,169,97,0.18)]" />
              Best SEO Company in Delhi
            </span>

            <div className="mt-6">
              <HeroQuote />
            </div>

            <p className="sh__sub mx-auto mt-5 max-w-[560px] text-[1.06rem] leading-[1.7] text-[var(--muted)] lg:mx-0">
              Digivanta builds SEO strategies that improve visibility, strengthen brand authority, and help
              businesses appear where customers are actively searching — across Google, AI platforms, and voice search.
            </p>

            <div className="sh__ctas mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link href="#contact" className="btn btn--primary btn--lg">
                Request an SEO Consultation
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white px-7 py-[0.95rem] text-[0.95rem] font-bold text-[var(--navy)] transition-all hover:-translate-y-[3px] hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                <WhatsApp width={18} height={18} className="text-[#25d366]" />
                WhatsApp Now
              </a>
            </div>

            {/* Trust row */}
            <div className="sh__trust mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="flex text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <SeoIcon key={i} name="star" width={17} height={17} />
                  ))}
                </span>
                <span className="text-[0.86rem] font-semibold text-[var(--ink)]">4.9/5 Google rating</span>
              </div>
              <span className="hidden h-5 w-px bg-[var(--border-strong)] sm:block" />
              <div className="flex items-center gap-5">
                <div className="text-left">
                  <strong className="block text-[1.15rem] font-[800] leading-none text-[var(--ink)]">800+</strong>
                  <span className="text-[0.74rem] text-[var(--muted)]">Clients served</span>
                </div>
                <div className="text-left">
                  <strong className="block text-[1.15rem] font-[800] leading-none text-[var(--ink)]">16+</strong>
                  <span className="text-[0.74rem] text-[var(--muted)]">Years experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* ---- Visual column ---- */}
          <div className="sh__visual relative mx-auto w-full max-w-[540px]">
            {/* glow behind the photo */}
            <div aria-hidden className="absolute -inset-4 -z-[1] rounded-[32px] bg-[radial-gradient(circle_at_70%_30%,rgba(201,169,97,0.22),transparent_60%)] blur-xl" />

            <div className="relative overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-[var(--shadow-lg)]">
              <div className="relative aspect-[4/3.5]">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1100"
                  alt="SEO analytics dashboard showing organic traffic growth"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 540px"
                  className="object-cover"
                />
                {/* subtle navy tint at the bottom for legibility of overlay cards */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(12,36,61,0.18)_100%)]" />
              </div>
            </div>

            {/* Floating stat — top left */}
            <div className="sh__float absolute -top-5 -left-4 hidden rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-3 shadow-[var(--shadow)] backdrop-blur-md sm:block">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-[var(--gold-soft)] text-[var(--gold)]">
                  <SeoIcon name="trendUp" width={20} height={20} />
                </span>
                <div className="text-left">
                  <strong className="block text-[1.25rem] font-[800] leading-none text-[var(--ink)]">+210%</strong>
                  <span className="text-[0.72rem] text-[var(--muted)]">Organic traffic</span>
                </div>
              </div>
            </div>

            {/* Floating stat — bottom right */}
            <div className="sh__float absolute -bottom-5 -right-4 hidden rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-3 shadow-[var(--shadow)] backdrop-blur-md sm:block">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-[rgba(12,36,61,0.06)] text-[var(--navy)]">
                  <SeoIcon name="target" width={20} height={20} />
                </span>
                <div className="text-left">
                  <strong className="block text-[1.25rem] font-[800] leading-none text-[var(--ink)]">Top 3</strong>
                  <span className="text-[0.72rem] text-[var(--muted)]">Keyword rankings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
