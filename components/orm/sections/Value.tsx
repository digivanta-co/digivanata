"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap, reduced } from "@/animations/gsap";
import { Label, StatBig } from "@/components/design/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { SeoIcon } from "@/components/seo/SeoIcons";
import { ORM_DYK, ORM_ALERT_CTA, ORM_WHY, ORM_BEST, ORM_SERVICES, ORM_AFFORDABLE } from "@/lib/orm-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function Check() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gd-gold)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* ---- Did-you-know 90% + alert-style audit ribbon ---- */
export function DykAlertSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".orm-dyk__item", {
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
    <section ref={root} className="relative bg-[var(--gd-soft)] py-8 sm:py-12">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="orm-dyk__item">
            <Label>{ORM_DYK.label}</Label>
            <StatBig value={ORM_DYK.value} suffix={ORM_DYK.suffix} label={ORM_DYK.text} />
          </div>

          {/* alert ribbon — reputation risk warning */}
          <div className="orm-dyk__item relative overflow-hidden rounded-[24px] border border-[var(--gd-gold)]/40 bg-white p-8 shadow-[0_20px_50px_rgba(12,36,61,0.08)] sm:p-10">
            <div aria-hidden className="absolute inset-y-0 left-0 w-1.5 bg-[linear-gradient(180deg,var(--gd-gold),#e0655a)]" />
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-md">
                <span className="mb-2 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#c05a50]">
                  <SeoIcon name="shield" width={14} height={14} /> Reputation risk
                </span>
                <h2 className="gd-display m-0 text-[clamp(1.3rem,2.6vw,1.8rem)] leading-tight text-[var(--gd-ink)]">
                  {ORM_ALERT_CTA.heading}
                </h2>
              </div>
              <Link
                href="/contact"
                className="site-cta inline-flex items-center gap-2 bg-[linear-gradient(120deg,var(--gd-navy),var(--gd-blue))] px-6 py-3.5 text-sm font-bold text-white! shadow-[0_10px_26px_rgba(12,36,61,0.28)] transition-all duration-300 hover:-translate-y-0.5 [&_svg]:size-4"
              >
                {ORM_ALERT_CTA.cta} <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Why ORM matters: sticky prose + shield ledger ---- */
export function WhyMattersSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".orm-why__row", {
        y: 40,
        autoAlpha: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-10 sm:py-14" id="why-orm">
      <div className="container grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="lg:sticky lg:top-28">
          <Label>Why it matters</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            Why online reputation
            <br />
            <span className="gd-grad">management matters.</span>
          </h2>
          <div className="mt-5 space-y-4">
            {ORM_WHY.paragraphs.map((p, i) => (
              <p key={i} className="m-0 max-w-xl text-[0.98rem] leading-relaxed text-[var(--gd-muted)]">{p}</p>
            ))}
          </div>
          <p className="mb-0 mt-6 border-l-2 border-[var(--gd-gold)] pl-4 text-sm italic leading-relaxed text-[var(--gd-muted)]">
            {ORM_WHY.closing}
          </p>
        </div>

        <div>
          <h3 className="orm-why__row m-0 mb-4 text-sm font-bold uppercase tracking-[0.14em] text-[var(--gd-ink)]">
            {ORM_WHY.helpsLead}
          </h3>
          <div className="border-t border-[var(--gd-line)]">
            {ORM_WHY.helps.map((h, i) => (
              <div
                key={h}
                className="orm-why__row group flex items-center gap-5 border-b border-[var(--gd-line)] py-5 transition-colors duration-300 hover:bg-[var(--gd-soft)]"
              >
                <span className="gd-display shrink-0 text-xs text-[var(--gd-gold)]">0{i + 1}</span>
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[rgba(40,111,171,0.08)] text-[var(--gd-blue)] transition-colors duration-300 group-hover:bg-[linear-gradient(120deg,var(--gd-navy),var(--gd-blue))] group-hover:text-white">
                  <SeoIcon name="shield" width={17} height={17} />
                </span>
                <span className="text-[0.98rem] font-semibold text-[var(--gd-ink)]">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Best ORM company: editorial band + strategy pillars ---- */
export function BestOrmSection() {
  const root = useRef<HTMLElement | null>(null);

  const pillarSubtitles: Record<string, string> = {
    SEO: "Search & Keyword Authority",
    "Content Marketing": "Positive Narrative Control",
    "Social Media Management": "Active Audience Engagement",
    "Review Management": "Trust & Rating Enhancement",
  };

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".orm-best__item", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative border-y border-[var(--gd-line)] bg-[var(--gd-soft)] py-10 sm:py-14">
      <div className="container">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          {/* left column: header + paragraphs */}
          <div className="orm-best__item lg:sticky lg:top-28">
            <Label>Result-driven solutions</Label>
            <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
              Best ORM company in Delhi
              <br />
              <span className="gd-grad">for result-driven solutions.</span>
            </h2>
            <div className="mt-6 space-y-4">
              {ORM_BEST.paragraphs.map((p, i) => (
                <p key={i} className="m-0 text-[0.98rem] leading-relaxed text-[var(--gd-muted)]">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* right column: strategy disciplines grid */}
          <div className="orm-best__item">
            <div className="overflow-hidden rounded-3xl border border-[var(--gd-line)] bg-white p-6 shadow-[0_20px_50px_rgba(12,36,61,0.06)] sm:p-7">
              <div className="mb-5 border-b border-[var(--gd-line)] pb-4">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gd-muted)]">
                  One Strategy, Four Disciplines
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {ORM_BEST.pillars.map((p, i) => (
                  <div
                    key={p}
                    className="group relative overflow-hidden rounded-2xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-4 transition-all duration-300 hover:border-[var(--gd-navy)]/30 hover:bg-white hover:shadow-[0_8px_25px_rgba(12,36,61,0.08)]"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="flex size-8 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#235EA7,#4f93d4)] text-xs font-bold text-white shadow-[0_4px_12px_rgba(35,94,167,0.25)]">
                        0{i + 1}
                      </span>
                      <svg
                        className="size-4 text-[var(--gd-line)] transition-colors duration-300 group-hover:text-[var(--gd-navy)]"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M4 12 L12 4 M12 4 L5 4 M12 4 L12 11" />
                      </svg>
                    </div>
                    <h3 className="m-0 text-[0.95rem] font-semibold text-[var(--gd-ink)] transition-transform duration-300 group-hover:translate-x-1">
                      {p}
                    </h3>
                    <p className="m-0 mt-1 text-[0.72rem] text-[var(--gd-muted)]">
                      {pillarSubtitles[p] || "Targeted Strategy"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Key ORM services: scroll-stacking card deck (unique to this page).
   Each card is position:sticky with a small stepped offset, so as you
   scroll the next service slides up and stacks over the previous one. ---- */
export function ServicesStackSection() {
  return (
    <section className="relative py-10 sm:py-14" id="orm-services">
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <Label>What we do</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            Our key ORM
            <br />
            <span className="gd-grad">services include.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {ORM_SERVICES.map((s, i) => (
            <div key={s.num} className="sticky" style={{ top: `${88 + i * 18}px` }}>
              <div className="relative overflow-hidden rounded-[26px] border border-[var(--gd-line)] bg-white p-7 shadow-[0_-10px_40px_rgba(12,36,61,0.06)] sm:p-10">
                <div
                  aria-hidden
                  className="gd-display pointer-events-none absolute -right-2 -top-8 text-[7rem] text-transparent sm:text-[9rem]"
                  style={{ WebkitTextStroke: "1px rgba(12,36,61,0.07)" }}
                >
                  {s.num}
                </div>
                <div className="relative grid items-start gap-6 md:grid-cols-[auto_1fr]">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(120deg,var(--gd-navy),var(--gd-blue))] text-white">
                    <SeoIcon name={s.icon} width={24} height={24} />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="gd-display text-sm text-[var(--gd-gold)]">{s.num}</span>
                      <h3 className="gd-display m-0 text-[clamp(1.3rem,2.8vw,2rem)] text-[var(--gd-ink)]">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mb-0 mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-[var(--gd-muted)]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Affordable ORM: copy + who-it-fits card ---- */
export function AffordableSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".orm-aff__l", { x: -70, autoAlpha: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: root.current, start: "top 78%" } });
      gsap.from(".orm-aff__r", { x: 70, autoAlpha: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: root.current, start: "top 78%" } });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-[var(--gd-soft)] py-10 sm:py-14" id="orm-affordable">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="orm-aff__l">
          <Label>Fair pricing</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            Affordable ORM services
            <br />
            <span className="gd-grad">in Delhi NCR.</span>
          </h2>
          <div className="mt-5 space-y-4">
            {ORM_AFFORDABLE.paragraphs.map((p, i) => (
              <p key={i} className="m-0 max-w-xl text-[0.98rem] leading-relaxed text-[var(--gd-muted)]">{p}</p>
            ))}
          </div>
        </div>

        <div className="orm-aff__r gd-card relative overflow-hidden p-8">
          <div aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,var(--gd-navy),var(--gd-blue)_55%,var(--gd-gold))]" />
          <h3 className="m-0 text-lg font-bold text-[var(--gd-ink)]">Built for every stage</h3>
          <ul className="m-0 mt-5 grid list-none gap-4 p-0">
            {ORM_AFFORDABLE.fits.map((f) => (
              <li key={f} className="flex items-center gap-3 border-b border-[var(--gd-line)] pb-4 text-[0.98rem] font-semibold text-[var(--gd-ink)] last:border-b-0 last:pb-0">
                <Check />
                {f}
              </li>
            ))}
          </ul>
          <p className="mb-0 mt-5 border-l-2 border-[var(--gd-gold)] pl-3.5 text-[0.85rem] italic leading-relaxed text-[var(--gd-muted)]">
            Flexible pricing · customized strategies · maximum ROI without compromising quality.
          </p>
        </div>
      </div>
    </section>
  );
}
