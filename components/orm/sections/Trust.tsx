"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap, reduced } from "@/animations/gsap";
import { Label } from "@/components/design/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { ORM_WHY_CHOOSE, ORM_INDUSTRIES, ORM_TOP, ORM_RECOVERY_CTA, ORM_CLOSING } from "@/lib/orm-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ---- Why choose us: dark navy "vault" panel with 8 numbered points ---- */
export function WhyChooseSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".orm-choose__item", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-10" id="orm-why-choose">
      <div className="container">
        <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(150deg,#0C243D_0%,#0a1c30_100%)] px-6 py-16 sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_110%_at_15%_-10%,rgba(40,111,171,0.4),transparent_60%),radial-gradient(40%_60%_at_95%_110%,rgba(176,141,63,0.16),transparent_60%)]"
          />
          <div className="relative z-[1]">
            <div className="orm-choose__item max-w-2xl">
              <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d5b76a]">
                <span className="h-px w-8 bg-[#d5b76a]/70" />
                Why Digivanta
              </span>
              <h2 className="gd-display text-[clamp(1.8rem,4vw,2.9rem)] text-white">
                Why choose our online reputation
                <br />
                <span className="bg-[linear-gradient(120deg,#7db4e0,#d5b76a)] bg-clip-text text-transparent">
                  management agency in Delhi?
                </span>
              </h2>
              <p className="mt-5 text-[#b9cdec]">{ORM_WHY_CHOOSE.intro}</p>
            </div>

            <div className="mt-10 grid gap-x-10 border-t border-white/10 sm:grid-cols-2">
              {ORM_WHY_CHOOSE.points.map((p, i) => (
                <div
                  key={p}
                  className="orm-choose__item flex items-baseline gap-5 border-b border-white/10 py-4.5 transition-colors duration-300 hover:bg-white/[0.03]"
                >
                  <span className="gd-display shrink-0 text-xs text-[#d5b76a]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[0.98rem] font-semibold text-[#dbe7f7]">{p}</span>
                </div>
              ))}
            </div>

            <p className="orm-choose__item mb-0 mt-8 max-w-2xl border-l-2 border-[#d5b76a] pl-4 text-sm italic leading-relaxed text-[#b9cdec]">
              {ORM_WHY_CHOOSE.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Industries: centered chip cloud ---- */
export function IndustriesSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".orm-ind__item", {
        y: 24,
        autoAlpha: 0,
        scale: 0.94,
        duration: 0.55,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 82%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-10 sm:py-14" id="orm-industries">
      <div className="container text-center">
        <div className="orm-ind__item mx-auto max-w-2xl">
          <Label center>Industries we serve</Label>
          <h2 className="gd-display text-[clamp(1.8rem,4vw,2.9rem)] text-[var(--gd-ink)]">
            Reputation care,
            <br />
            <span className="gd-grad">for every industry.</span>
          </h2>
          <p className="mt-4 text-[var(--gd-muted)]">{ORM_INDUSTRIES.intro}</p>
        </div>
        <div className="mx-auto mt-9 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {ORM_INDUSTRIES.items.map((ind) => (
            <span
              key={ind}
              className="orm-ind__item inline-flex items-center gap-2 rounded-full border border-[var(--gd-line)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--gd-ink)] shadow-[0_4px_14px_rgba(12,36,61,0.04)] transition-colors duration-300 hover:border-[var(--gd-gold)]"
            >
              <span className="size-1.5 rounded-full bg-[var(--gd-gold)]" />
              {ind}
            </span>
          ))}
        </div>
        <p className="orm-ind__item mx-auto mb-0 mt-8 max-w-xl text-sm text-[var(--gd-muted)]">
          {ORM_INDUSTRIES.note}
        </p>
      </div>
    </section>
  );
}

/* ---- Top agency prose + recovery CTA band ---- */
export function TopAgencySection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".orm-top__item", {
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
    <section ref={root} className="relative border-t border-[var(--gd-line)] bg-[var(--gd-soft)] py-10 sm:py-14" id="orm-top">
      <div className="container">
        <div className="orm-top__item max-w-3xl">
          <Label>Leading ORM provider</Label>
          <h2 className="gd-display text-[clamp(1.8rem,4vw,2.9rem)] text-[var(--gd-ink)]">
            Top reputation management agency
            <br />
            <span className="gd-grad">for businesses in Delhi.</span>
          </h2>
        </div>
        <div className="mt-7 grid gap-6 md:grid-cols-3">
          {ORM_TOP.paragraphs.map((p, i) => (
            <p key={i} className="orm-top__item m-0 text-[0.95rem] leading-relaxed text-[var(--gd-muted)]">{p}</p>
          ))}
        </div>

        {/* recovery CTA band */}
        <div className="orm-top__item relative mt-12 overflow-hidden rounded-[28px] bg-[linear-gradient(150deg,#0C243D_0%,#0a1c30_100%)] px-6 py-12 text-center sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_130%_at_50%_-10%,rgba(40,111,171,0.45),transparent_60%),radial-gradient(40%_60%_at_90%_110%,rgba(176,141,63,0.18),transparent_60%)]"
          />
          <div className="relative z-[1] mx-auto max-w-2xl">
            <h3 className="gd-display m-0 text-[clamp(1.5rem,3.2vw,2.2rem)] text-white">
              {ORM_RECOVERY_CTA.heading}
            </h3>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="site-cta inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-bold text-[var(--gd-navy)]! transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.3)] [&_svg]:size-4"
              >
                {ORM_RECOVERY_CTA.cta} <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Closing prose + "ready" note ---- */
export function ClosingSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".orm-close__item", {
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
    <section ref={root} className="relative border-t border-[var(--gd-line)] py-8 sm:py-12" id="orm-closing">
      <div className="container max-w-[860px]">
        <div className="orm-close__item">
          <Label>Your most valuable asset</Label>
          <h2 className="gd-display text-[clamp(1.8rem,4vw,2.9rem)] text-[var(--gd-ink)]">
            {ORM_CLOSING.readyHeading.replace("?", "")}
            <span className="gd-grad">?</span>
          </h2>
        </div>
        <div className="mt-7 space-y-4">
          {ORM_CLOSING.paragraphs.map((p, i) => (
            <p key={i} className="orm-close__item m-0 text-[1.02rem] leading-relaxed text-[var(--gd-muted)]">{p}</p>
          ))}
          <p className="orm-close__item m-0 border-l-2 border-[var(--gd-gold)] pl-4 text-[1.02rem] font-semibold leading-relaxed text-[var(--gd-ink)]">
            {ORM_CLOSING.readyText}
          </p>
        </div>
      </div>
    </section>
  );
}
