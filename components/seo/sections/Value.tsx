"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton, TiltCard } from "@/components/agency/primitives";
import { Label, StatBig } from "@/components/design/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { SeoIcon } from "@/components/seo/SeoIcons";
import { SEO_DID_YOU_KNOW, SEO_WHY_NEED, SEO_PROBLEMS, SEO_DIFFERENCE } from "@/lib/seo-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ---- Did You Know: giant counter callout + the intro prose ---- */
export function DidYouKnowIntro() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".sv-dyk__item", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative border-y border-[var(--gd-line)] bg-[var(--gd-soft)] py-8 sm:py-12" id="seo-intro">
      <div className="container">
        <div className="grid gap-5 items-center lg:grid-cols-[0.75fr_1.25fr]">
          {/* 60% stat */}
          <div className="sv-dyk__item">
            <Label>{SEO_DID_YOU_KNOW.label}</Label>
            <StatBig value={60} suffix="%" label={SEO_DID_YOU_KNOW.text} />
          </div>

          {/* intro prose — full original copy */}
          <div className="sv-dyk__item space-y-4 border-[var(--gd-line)] lg:border-l lg:pl-14">
            <p className="m-0 text-[1.02rem] leading-relaxed text-[var(--gd-muted)]">
              As a trusted Best SEO Company in Delhi, Digivanta focus on creating SEO strategies that improve
              visibility, strengthen brand authority, and help businesses appear where users are actively searching
              on search engines, AI platforms, and voice search systems. Whether you are a local business, startup,
              eCommerce brand, service provider, or enterprise company, professional SEO Services in Delhi can help
              your website attract relevant visitors, improve search performance, and build long-term growth without
              depending completely on paid advertising.
            </p>
            <p className="m-0 text-[1.02rem] leading-relaxed text-[var(--gd-muted)]">
              Choosing the right SEO Company in Delhi can help
              businesses improve search visibility, generate organic traffic, and create long-term digital growth.
            </p>
            <p className="m-0 text-[1.02rem] leading-relaxed text-[var(--gd-muted)]">
              With strategic keyword optimization, technical SEO, user-focused content, and AI search readiness,
              businesses can stay competitive in the evolving digital landscape.
            </p>
            <div className="pt-2">
              <MagneticButton href="/contact">
                Get Your Free SEO Consultation <ArrowRight />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PLATFORM_DETAILS: Record<string, { tag: string; metric: string }> = {
  "Google": { tag: "Organic Search", metric: "90%+ Market Share" },
  "OpenAI ChatGPT": { tag: "AEO & LLMs", metric: "SearchGPT Answers" },
  "Google Gemini": { tag: "AI Overviews", metric: "Generative Search" },
  "AI Tools": { tag: "Voice & Smart", metric: "Smart Discovery" },
};

/* ---- Why businesses need SEO: platform tilt cards ---- */
export function WhyNeedSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".sv-why__item", {
        y: 50,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-10 sm:py-14 overflow-hidden" id="why-seo">
      <div className="container flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-center">
        
        {/* Text block — left side */}
        <div className="sv-why__item max-w-2xl text-left">
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,4.5rem)] text-[var(--gd-ink)]">
            Why businesses
            <br />
            <span className="gd-grad">need SEO today.</span>
          </h2>
          <p className="mt-4 text-[var(--gd-muted)] sm:mt-5">{SEO_WHY_NEED.desc}</p>

          <p className="sv-why__item mb-0 mt-5 max-w-2xl border-l-2 border-[var(--gd-gold)] pl-4 text-left text-sm italic leading-relaxed text-[var(--gd-muted)] sm:mt-8">
            {SEO_WHY_NEED.note}
          </p>
        </div>

        {/* Platform Panel — right side */}
        <div className="sv-why__item w-full lg:max-w-[540px] shrink-0">
          <div className="relative overflow-hidden rounded-[28px] border border-[var(--gd-line)] bg-gradient-to-br from-white via-[#f8fafc] to-[#eef4fb] p-6 sm:p-8 shadow-[0_20px_50px_rgba(12,36,61,0.07)]">
            {/* Background glows */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-[rgba(40,111,171,0.12)] blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-12 -bottom-12 size-48 rounded-full bg-[rgba(176,141,63,0.1)] blur-3xl"
            />

            {/* Header inside right panel */}
            <div className="relative z-10 mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--gd-line)] pb-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gd-blue)]/20 bg-[var(--gd-blue)]/8 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-[var(--gd-blue)]">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  Modern Search Channels
                </span>
                <h4 className="mt-2 text-sm font-bold text-[var(--gd-ink)]">Optimized Ecosystem</h4>
              </div>
              <span className="rounded-xl border border-[var(--gd-line)] bg-white px-3 py-1 text-[0.72rem] font-semibold text-[var(--gd-muted)] shadow-xs">
                4 Key Networks
              </span>
            </div>

            {/* 2x2 Platform Cards Grid */}
            <div className="relative z-10 grid gap-5 grid-cols-2">
              {SEO_WHY_NEED.platforms.map((p) => {
                const info = PLATFORM_DETAILS[p.name] ?? { tag: "Search Engine", metric: "Targeted Audience" };
                return (
                  <TiltCard
                    key={p.name}
                    max={8}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gd-blue)]/40 hover:shadow-[0_12px_28px_rgba(40,111,171,0.14)]"
                  >
                    <div>
                      <div className="mb-3 flex items-center justify-between">
                        <span className="grid size-11 place-items-center rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 shadow-[0_4px_14px_rgba(12,36,61,0.06)] transition-transform duration-300 group-hover:scale-110">
                          <Image src={p.image} alt={p.name} width={24} height={24} className="h-6 w-6 object-contain" />
                        </span>
                        <span className="rounded-full bg-[rgba(40,111,171,0.08)] px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-[var(--gd-blue)]">
                          {info.tag}
                        </span>
                      </div>

                      <h3 className="text-[0.92rem] font-bold text-[var(--gd-ink)] transition-colors duration-300 group-hover:text-[var(--gd-blue)]">
                        {p.name}
                      </h3>
                    </div>

                    <div className="mt-3 border-t border-slate-100 pt-2.5">
                      <span className="block text-[0.72rem] font-semibold text-[var(--gd-muted)]">
                        {info.metric}
                      </span>
                    </div>
                  </TiltCard>
                );
              })}
            </div>

            {/* Bottom Footer inside right panel */}
            <div className="relative z-10 mt-5 flex items-center gap-2.5 rounded-xl border border-[var(--gd-line)] bg-white/80 px-3.5 py-2.5 backdrop-blur-xs">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[var(--gd-blue)] text-white">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <p className="m-0 text-[0.76rem] font-medium leading-tight text-[var(--gd-ink)]">
                Full visibility across traditional search engines &amp; generative AI platforms.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---- Common SEO problems: numbered icon ledger ---- */
export function ProblemsSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const rows = root.current?.querySelectorAll<HTMLElement>(".sv-prob__row");
      if (!rows?.length) return;
      rows.forEach((row, i) => {
        gsap.from(row, {
          y: 40,
          autoAlpha: 0,
          duration: 0.7,
          delay: i * 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 92%", toggleActions: "play none none none" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-[var(--gd-soft)] py-10 sm:py-14" id="seo-problems">
      <div className="container">
        <div className="sv-prob__row max-w-2xl">
          <Label>Common Issues</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            Common SEO problems
            <br />
            <span className="gd-grad">businesses face.</span>
          </h2>
          <p className="mt-5 text-[var(--gd-muted)]">
            Many businesses struggle online because their websites are not properly optimized for modern search
            behavior.
          </p>
        </div>

        <div className="mt-10 grid border-t border-[var(--gd-line)] sm:grid-cols-2 lg:grid-cols-3">
          {SEO_PROBLEMS.map((p, i) => (
            <div
              key={p.text}
              className="sv-prob__row group flex items-center gap-4 border-b border-[var(--gd-line)] py-5 pr-4 transition-colors duration-300 hover:bg-white"
            >
              <span className="gd-display shrink-0 text-xs text-[var(--gd-gold)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-[var(--gd-blue)] shadow-[0_4px_12px_rgba(12,36,61,0.06)] transition-colors duration-300 group-hover:bg-[linear-gradient(120deg,var(--gd-navy),var(--gd-blue))] group-hover:text-white">
                <SeoIcon name={p.icon} width={18} height={18} />
              </span>
              <p className="m-0 text-[0.92rem] font-semibold text-[var(--gd-ink)]">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- What makes us different: sticky split + photo ---- */
export function DifferenceSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".sv-diff__l", {
        x: -70,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
      gsap.from(".sv-diff__r", {
        x: 70,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-10 sm:py-14" id="seo-difference">
      <div className="container grid gap-5 items-center lg:grid-cols-[1.05fr_0.95fr]">
        <div className="sv-diff__l">
          <Label>Our Approach</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            What makes our SEO
            <br />
            <span className="gd-grad">services different?</span>
          </h2>
          <p className="mt-5 max-w-xl text-[var(--gd-muted)]">{SEO_DIFFERENCE.desc}</p>
          <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-[0.14em] text-[var(--gd-ink)]">
            We focus on:
          </h4>
          <ul className="m-0 grid gap-5 list-none p-0 sm:grid-cols-2">
            {SEO_DIFFERENCE.focuses.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm font-medium text-[var(--gd-ink)]">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gd-gold)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <MagneticButton href="/contact">
              Start Your SEO Journey <ArrowRight />
            </MagneticButton>
          </div>
        </div>

        <div className="sv-diff__r relative">
          <div className="overflow-hidden rounded-3xl border border-[var(--gd-line)] shadow-[0_30px_70px_rgba(12,36,61,0.12)]">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1100"
              alt="Digivanta SEO team planning a search strategy"
              width={1100}
              height={825}
              sizes="(max-width: 992px) 90vw, 520px"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl border border-[var(--gd-line)] bg-white/95 px-4 py-3 shadow-[0_14px_34px_rgba(12,36,61,0.14)]">
            <span className="grid size-10 place-items-center rounded-xl bg-[var(--gd-gold-soft)] text-[var(--gd-gold)]">
              <SeoIcon name="trendUp" width={18} height={18} />
            </span>
            <div>
              <strong className="block text-sm font-bold text-[var(--gd-ink)]">Data-driven SEO</strong>
              <span className="text-[0.72rem] text-[var(--gd-muted)]">Built for long-term growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Mid-page CTA band (gd panel style) ---- */
export function SeoCtaBand({
  heading,
  desc,
  ctaText,
  ctaHref = "/contact",
  id,
}: {
  heading: string;
  desc: string;
  ctaText: string;
  ctaHref?: string;
  id?: string;
}) {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".sv-cta__panel", {
        y: 40,
        autoAlpha: 0,
        scale: 0.98,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 82%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-6 sm:py-10" id={id}>
      <div className="container">
        <div className="sv-cta__panel relative overflow-hidden rounded-[28px] bg-[linear-gradient(150deg,#0C243D_0%,#0a1c30_100%)] px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_130%_at_50%_-10%,rgba(40,111,171,0.45),transparent_60%),radial-gradient(40%_60%_at_90%_110%,rgba(176,141,63,0.18),transparent_60%)]"
          />
          <div className="relative z-[1] mx-auto max-w-2xl">
            <h2 className="gd-display m-0 text-[clamp(1.6rem,3.6vw,2.5rem)] text-white">{heading}</h2>
            <p className="mx-auto mb-0 mt-4 max-w-xl text-[0.98rem] leading-relaxed text-[#b9cdec]">{desc}</p>
            <div className="mt-7 flex justify-center">
              <Link
                href={ctaHref}
                className="site-cta inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-bold text-[var(--gd-navy)]! transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.3)] [&_svg]:size-4"
              >
                {ctaText} <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
