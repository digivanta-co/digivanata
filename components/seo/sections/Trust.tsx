"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap, reduced } from "@/animations/gsap";
import { TiltCard } from "@/components/agency/primitives";
import { Label } from "@/components/design/primitives";
import { SeoIcon } from "@/components/seo/SeoIcons";
import { useMarquee } from "@/hooks/animations";
import {
  SEO_AREAS,
  SEO_TOOLS,
  SEO_AI_PLATFORMS,
  SEO_TRENDS,
  SEO_BENEFITS,
  SEO_WHY_CHOOSE,
  SEO_TRUST_POINTS,
  SEO_AUTHOR,
} from "@/lib/seo-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function Check() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gd-gold)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* ---- Areas we serve: gold-pin chips ---- */
export function AreasSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".sv-area__item", {
        y: 30,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 82%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-[var(--gd-soft)] py-20" id="seo-areas">
      <div className="container">
        <div className="sv-area__item max-w-2xl">
          <Label>Service Areas</Label>
          <h2 className="gd-display text-[clamp(1.7rem,3.8vw,2.6rem)] text-[var(--gd-ink)]">
            Areas <span className="gd-grad">we serve.</span>
          </h2>
          <p className="mt-4 text-[var(--gd-muted)]">
            Our SEO services are available across Delhi and surrounding regions.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {SEO_AREAS.map((area) => (
            <span
              key={area}
              className="sv-area__item inline-flex items-center gap-2 rounded-full border border-[var(--gd-line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--gd-ink)] transition-colors duration-300 hover:border-[var(--gd-gold)]"
            >
              <span className="text-[var(--gd-gold)]">
                <SeoIcon name="mapPin" width={14} height={14} />
              </span>
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- SEO tools: continuous chip marquee ---- */
export function ToolsSection() {
  const row = useMarquee<HTMLDivElement>({ duration: 30 });
  const doubled = [...SEO_TOOLS, ...SEO_TOOLS];

  return (
    <section className="relative overflow-hidden py-20" id="seo-tools">
      <div className="container mb-10">
        <Label>Our Toolkit</Label>
        <h2 className="gd-display text-[clamp(1.7rem,3.8vw,2.6rem)] text-[var(--gd-ink)]">
          SEO tools <span className="gd-grad">we use.</span>
        </h2>
        <p className="mt-4 max-w-xl text-[var(--gd-muted)]">
          Advanced SEO tools and analytics platforms to improve website performance and track visibility.
        </p>
      </div>
      <div className="[mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] ">
        <div ref={row} className="flex w-max gap-3">
          {doubled.map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-[var(--gd-line)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--gd-ink)] shadow-[0_4px_14px_rgba(12,36,61,0.04)]"
            >
              <span className="text-[var(--gd-blue)]">
                <SeoIcon name="wrench" width={14} height={14} />
              </span>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- SEO for AI platforms: inset navy dark band ---- */
export function AiPlatformsSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".sv-ai__item", {
        y: 50,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-10" id="seo-ai">
      <div className="container">
        <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(150deg,#0C243D_0%,#0a1c30_100%)] px-6 py-16 sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_110%_at_15%_-10%,rgba(40,111,171,0.4),transparent_60%),radial-gradient(40%_60%_at_95%_110%,rgba(176,141,63,0.16),transparent_60%)]"
          />
          <div className="relative z-[1] grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="sv-ai__item">
              <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d5b76a]">
                <span className="h-px w-8 bg-[#d5b76a]/70" />
                AI Search Optimization
              </span>
              <h2 className="gd-display text-[clamp(1.8rem,4vw,2.9rem)] text-white">
                SEO for search engines
                <br />
                <span className="bg-[linear-gradient(120deg,#7db4e0,#d5b76a)] bg-clip-text text-transparent">
                  &amp; AI platforms.
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-[#b9cdec]">{SEO_AI_PLATFORMS.desc}</p>
              <h4 className="mb-3 mt-7 text-sm font-bold uppercase tracking-[0.14em] text-white">
                We optimize websites for:
              </h4>
              <ul className="m-0 grid list-none gap-2.5 p-0 sm:grid-cols-2">
                {SEO_AI_PLATFORMS.optimizeFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-[#dbe7f7]">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d5b76a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sv-ai__item rounded-3xl border border-white/12 bg-white/[0.05] p-7">
              <h3 className="m-0 text-lg font-bold text-white">Visibility Across Platforms</h3>
              <ul className="m-0 mt-5 grid list-none gap-3.5 p-0">
                {SEO_AI_PLATFORMS.visibilityAcross.map((platform, i) => (
                  <li key={platform} className="flex items-center gap-3 border-b border-white/8 pb-3.5 text-[0.95rem] font-medium text-[#dbe7f7] last:border-b-0 last:pb-0">
                    <span className="gd-display text-xs text-[#d5b76a]">0{i + 1}</span>
                    {platform}
                  </li>
                ))}
              </ul>
              <p className="mb-0 mt-5 border-l-2 border-[#d5b76a] pl-3.5 text-[0.82rem] italic leading-relaxed text-[#b9cdec]">
                This future-focused approach helps businesses remain visible as search technology evolves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- SEO trends: tilt cards with ghost numbers ---- */
export function TrendsSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".sv-trend__card").forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          autoAlpha: 0,
          duration: 0.8,
          delay: (i % 4) * 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-24" id="seo-trends">
      <div className="container">
        <div className="max-w-2xl">
          <Label>SEO Trends 2026</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            The future of
            <br />
            <span className="gd-grad">search optimization.</span>
          </h2>
          <p className="mt-5 text-[var(--gd-muted)]">
            Search engines are evolving rapidly. Stay ahead with modern strategies.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SEO_TRENDS.map((t, i) => (
            <TiltCard key={t.title} max={6} className="sv-trend__card gd-card relative p-6">
              <div
                aria-hidden
                className="gd-display pointer-events-none absolute -right-1 -top-4 text-[4.2rem] text-transparent"
                style={{ WebkitTextStroke: "1px rgba(12,36,61,0.08)" }}
              >
                0{i + 1}
              </div>
              <span className="grid size-11 place-items-center rounded-xl bg-[var(--gd-gold-soft)] text-[var(--gd-gold)]">
                <SeoIcon name={t.icon} width={20} height={20} />
              </span>
              <h3 className="mb-0 mt-4 text-[1.05rem] font-bold text-[var(--gd-ink)]">{t.title}</h3>
              <p className="mb-0 mt-2 text-[0.85rem] leading-relaxed text-[var(--gd-muted)]">{t.desc}</p>
              <ul className="m-0 mt-4 grid list-none gap-1.5 border-t border-[var(--gd-line)] p-0 pt-4">
                {t.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-[0.78rem] font-medium text-[var(--gd-ink)]">
                    <span className="size-1.5 shrink-0 rounded-full bg-[var(--gd-gold)]" />
                    {it}
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Benefits: spotlight tilt cards ---- */
export function BenefitsSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".sv-ben__card").forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 ? 80 : -80,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-[var(--gd-soft)] py-24" id="seo-benefits">
      <div className="container grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <Label>Business Impact</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            Benefits of SEO
            <br />
            <span className="gd-grad">for businesses.</span>
          </h2>
          <p className="mt-5 max-w-md text-[var(--gd-muted)]">
            Strategic SEO delivers measurable improvements across traffic, trust, and long-term brand visibility.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {SEO_BENEFITS.map((b, i) => (
            <TiltCard key={b.title} max={6} className="sv-ben__card gd-card p-6">
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl bg-[rgba(40,111,171,0.08)] text-[var(--gd-blue)]">
                  <SeoIcon name={b.icon} width={20} height={20} />
                </span>
                <span className="gd-display text-xs text-[var(--gd-gold)]">0{i + 1}</span>
              </div>
              <h3 className="mb-0 mt-4 text-[1.02rem] font-bold text-[var(--gd-ink)]">{b.title}</h3>
              <p className="mb-0 mt-2 text-[0.85rem] leading-relaxed text-[var(--gd-muted)]">{b.desc}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Why choose Digivanta: numbered checklist ledger ---- */
export function WhyChooseSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".sv-choose__row", {
        y: 30,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-24" id="seo-why-choose">
      <div className="container">
        <div className="sv-choose__row max-w-2xl">
          <Label>Why Digivanta</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            Why choose our SEO
            <br />
            <span className="gd-grad">company in Delhi?</span>
          </h2>
          <p className="mt-5 text-[var(--gd-muted)]">
            We focus on sustainable growth rather than short-term ranking manipulation.
          </p>
        </div>

        <ul className="m-0 mt-10 grid list-none border-t border-[var(--gd-line)] p-0 sm:grid-cols-2">
          {SEO_WHY_CHOOSE.map((item, i) => (
            <li
              key={item}
              className="sv-choose__row flex items-baseline gap-5 border-b border-[var(--gd-line)] py-5 pr-4 transition-colors duration-300 hover:bg-[var(--gd-soft)]"
            >
              <span className="gd-display shrink-0 text-xs text-[var(--gd-gold)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.98rem] font-semibold text-[var(--gd-ink)]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---- Why trust Digivanta: split with photo + gold-stripe card ---- */
export function TrustSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".sv-trust__l", { x: -70, autoAlpha: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: root.current, start: "top 75%" } });
      gsap.from(".sv-trust__r", { x: 70, autoAlpha: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: root.current, start: "top 75%" } });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-[var(--gd-soft)] py-24" id="seo-trust">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="sv-trust__l">
          <Label>Trust Digivanta</Label>
          <h2 className="gd-display text-[clamp(1.8rem,4vw,2.9rem)] text-[var(--gd-ink)]">
            Why businesses choose Digivanta
            <br />
            <span className="gd-grad">for SEO services in Delhi.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[var(--gd-muted)]">
            Whether you want better local rankings, stronger organic traffic, or improved visibility across
            AI-powered search platforms, our SEO specialists can help.
          </p>
          <div className="mt-7 overflow-hidden rounded-3xl border border-[var(--gd-line)] shadow-[0_20px_50px_rgba(12,36,61,0.1)]">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1100"
              alt="Digivanta SEO specialists collaborating in the office"
              width={1100}
              height={620}
              sizes="(max-width: 992px) 90vw, 520px"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="sv-trust__r gd-card relative overflow-hidden p-8">
          <div aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,var(--gd-navy),var(--gd-blue)_55%,var(--gd-gold))]" />
          <h3 className="m-0 text-xl font-bold text-[var(--gd-ink)]">Why Trust Digivanta?</h3>
          <ul className="m-0 mt-6 grid list-none gap-4 p-0">
            {SEO_TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[0.95rem] font-medium text-[var(--gd-ink)]">
                <Check />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---- Author profile (E-E-A-T) ---- */
export function AuthorSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".sv-author__card", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 82%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-20" id="seo-author">
      <div className="container max-w-[860px]">
        <div className="sv-author__card gd-card relative overflow-hidden p-8 sm:p-10">
          <div aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,var(--gd-navy),var(--gd-blue)_55%,var(--gd-gold))]" />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="gd-display m-0 text-xl text-[var(--gd-ink)]">Author Profile</h3>
            <span className="rounded-full border border-[var(--gd-gold)]/40 bg-[var(--gd-gold-soft)] px-3.5 py-1.5 text-[0.72rem] font-bold uppercase tracking-wider text-[var(--gd-gold)]">
              Last Updated: {SEO_AUTHOR.lastUpdated}
            </span>
          </div>
          <p className="mb-0 mt-4 text-[0.98rem] leading-relaxed text-[var(--gd-muted)]">{SEO_AUTHOR.text}</p>
          <h4 className="mb-3 mt-6 text-sm font-bold uppercase tracking-[0.14em] text-[var(--gd-ink)]">
            Areas of Expertise:
          </h4>
          <div className="flex flex-wrap gap-2">
            {SEO_AUTHOR.expertise.map((exp) => (
              <span key={exp} className="rounded-full border border-[var(--gd-line)] bg-[var(--gd-soft)] px-3.5 py-1.5 text-xs font-medium text-[var(--gd-ink)]">
                {exp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Final thoughts prose ---- */
export function FinalThoughtsSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".sv-final__item", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative border-t border-[var(--gd-line)] py-20" id="seo-final">
      <div className="container max-w-[860px]">
        <div className="sv-final__item">
          <Label>Final Thoughts</Label>
          <h2 className="gd-display text-[clamp(1.8rem,4vw,2.9rem)] text-[var(--gd-ink)]">
            SEO is about
            <br />
            <span className="gd-grad">building trust.</span>
          </h2>
        </div>
        <div className="mt-7 space-y-4">
          <p className="sv-final__item m-0 text-[1.05rem] leading-relaxed text-[var(--gd-muted)]">
            SEO is no longer just about rankings. It is about building a trusted online presence that search
            engines, AI systems, and users can understand easily.
          </p>
          <p className="sv-final__item m-0 text-[1.05rem] leading-relaxed text-[var(--gd-muted)]">
            Choosing the right <strong className="text-[var(--gd-ink)]">SEO Company in Delhi</strong> can help
            businesses improve search visibility, generate organic traffic, and create long-term digital growth.
          </p>
          <p className="sv-final__item m-0 text-[1.05rem] leading-relaxed text-[var(--gd-muted)]">
            With strategic keyword optimization, technical SEO, user-focused content, and AI search readiness,
            businesses can stay competitive in the evolving digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
