"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton, TiltCard } from "@/components/agency/primitives";
import { ArrowRight, WhatsApp } from "@/components/ui/Icons";
import { SeoIcon } from "@/components/seo/SeoIcons";
import { CONTACT } from "@/lib/site-data";
import { CM_HERO, CM_INTRO } from "@/lib/content-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ── typed headline inside the editor mock ── */
const ED_TITLE = "Content that ranks, reads & converts.";
const ED_KEYWORDS = ["SEO content", "Delhi NCR", "Leads"];
const ED_BARS = ["w-full", "w-11/12", "w-4/5", "w-full", "w-2/3"];
/* score ring geometry */
const RING_R = 26;
const RING_C = 2 * Math.PI * RING_R;
const RING_END = RING_C * (1 - 0.98);

export default function HeroSection() {
  const root = useRef<HTMLElement | null>(null);
  const title = useRef<HTMLHeadingElement | null>(null);
  const scoreEl = useRef<HTMLSpanElement | null>(null);
  const ringEl = useRef<SVGCircleElement | null>(null);

  /* steel-blue spotlight follows the cursor across the headline */
  useEffect(() => {
    const el = title.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      /* ---- entrance ---- */
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(".cm-hero__eyebrow", { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 })
        .fromTo(
          ".cm-hero__word",
          { rotateX: -80, yPercent: 120, autoAlpha: 0 },
          { rotateX: 0, yPercent: 0, autoAlpha: 1, duration: 0.9, stagger: 0.06, ease: "back.out(1.4)" },
          "-=0.3"
        )
        .fromTo(".cm-hero__sub", { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, "-=0.5")
        .fromTo(".cm-hero__ctas > *", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .fromTo(
          ".cm-hero__editor",
          { y: 40, autoAlpha: 0, rotate: 2 },
          { y: 0, autoAlpha: 1, rotate: 0, duration: 0.9 },
          "-=0.6"
        )
        .fromTo(".cm-hero__trust > *", { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08 }, "-=0.5");

      /* ---- looping "writing → ranking" story inside the editor ---- */
      const loop = gsap.timeline({ repeat: -1, repeatDelay: 0.2, delay: 2.4 });
      loop
        // type the draft title
        .fromTo(
          ".cm-ed__char",
          { display: "none" },
          { display: "inline", duration: 0.01, stagger: 0.045, ease: "none" }
        )
        // paragraph skeleton draws in
        .fromTo(
          ".cm-ed__bar",
          { scaleX: 0 },
          { scaleX: 1, transformOrigin: "left center", duration: 0.45, stagger: 0.14, ease: "power2.out" },
          "-=0.2"
        )
        // keywords get detected
        .fromTo(
          ".cm-ed__kw",
          { y: 10, autoAlpha: 0, scale: 0.9 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.4, stagger: 0.12, ease: "back.out(2)" },
          "-=0.1"
        )
        // the SERP result pops up at #1
        .fromTo(
          ".cm-ed__serp",
          { y: 22, autoAlpha: 0, scale: 0.94 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.55, ease: "back.out(1.6)" },
          "+=0.2"
        );
      // SEO score ring + counter fill alongside the SERP pop
      const counter = { v: 0 };
      loop.fromTo(
        ringEl.current,
        { strokeDashoffset: RING_C },
        { strokeDashoffset: RING_END, duration: 1.1, ease: "power2.inOut" },
        "<"
      );
      loop.fromTo(
        counter,
        { v: 0 },
        {
          v: 98,
          duration: 1.1,
          ease: "power2.inOut",
          onUpdate: () => {
            if (scoreEl.current) scoreEl.current.textContent = String(Math.round(counter.v));
          },
        },
        "<"
      );
      // hold the finished state, fade out, reset everything while
      // invisible, then fade back in so the next loop types cleanly
      loop.to(".cm-hero__editor", { autoAlpha: 0, duration: 0.5, ease: "power2.in" }, "+=2.8");
      loop.set(".cm-ed__char", { display: "none" });
      loop.set(".cm-ed__bar", { scaleX: 0 });
      loop.set([".cm-ed__kw", ".cm-ed__serp"], { autoAlpha: 0 });
      loop.set(ringEl.current, { strokeDashoffset: RING_C });
      loop.call(() => {
        if (scoreEl.current) scoreEl.current.textContent = "0";
      });
      loop.to(".cm-hero__editor", { autoAlpha: 1, duration: 0.35 });

      // gentle drift on the scroll cue
      gsap.to(".cm-hero__cue", { y: 10, repeat: -1, yoyo: true, duration: 1.4, ease: "sine.inOut" });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="ag-grain relative flex min-h-0 sm:min-h-[88svh] items-center overflow-hidden pt-24 pb-4 lg:pt-28 lg:pb-10"
    >
      {/* <Aura /> */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--cm-line)]" />

      <div className="container relative z-10">
        <div className="grid gap-5 items-center lg:grid-cols-[1.02fr_0.98fr]">
          {/* ── left: copy ── */}
          <div>
            <span className="cm-hero__eyebrow inline-flex items-center gap-2.5 rounded-full border border-[var(--gd-line)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gd-muted)] shadow-[0_4px_14px_rgba(12,36,61,0.05)]">
              <span className="size-2 rounded-full bg-[var(--gd-gold)] shadow-[0_0_10px_rgba(176,141,63,0.8)]" />
              {CM_HERO.eyebrow}
            </span>

            <p className="mt-5 max-w-2xl text-[clamp(1rem,1.6vw,1.15rem)] font-medium text-[var(--gd-blue)]">
              {CM_HERO.tagline}
            </p>

            <h1
              ref={title}
              className="gd-display mt-4 text-[clamp(2.2rem,5.4vw,3.9rem)] leading-[1.02] text-[var(--gd-ink)] [perspective:900px]"
            >
              {CM_HERO.h1.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-top">
                  <span className={"cm-hero__word mr-[0.28em] inline-block whitespace-nowrap will-change-transform " + (w.grad ? "gd-grad" : "")}>
                    {w.t}
                  </span>
                </span>
              ))}
            </h1>

            <p className="cm-hero__sub mt-6 max-w-xl text-[1.02rem] leading-relaxed text-[var(--gd-muted)]">
              {CM_HERO.sub}
            </p>

            <div className="cm-hero__ctas mt-8 flex items-center gap-2.5 sm:gap-4">
              <MagneticButton href="/contact">
                <span className="hidden sm:inline">{CM_HERO.ctaPrimary}</span>
                <span className="sm:hidden">Content Strategy</span>
                <ArrowRight />
              </MagneticButton>
              <MagneticButton href={CONTACT.whatsapp} external className="ag-btn--ghost">
                <WhatsApp width={17} height={17} className="hidden text-[#25d366] sm:inline" /> {CM_HERO.ctaGhost}
              </MagneticButton>
            </div>

            {/* trust row */}
            <div className="cm-hero__trust mt-8 grid gap-5 grid-cols-2 border-t border-[var(--gd-line)] pt-6 sm:mt-12 sm:grid-cols-4 sm:pt-7">
              <div className="flex flex-col items-start gap-1">
                <span className="flex text-[var(--gd-gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <SeoIcon key={i} name="star" width={16} height={16} />
                  ))}
                </span>
                <span className="text-[0.82rem] font-semibold text-[var(--gd-ink)]">4.9/5 Google rating</span>
              </div>
              {CM_HERO.meta.map((m) => (
                <div key={m.l} className="flex flex-col items-start">
                  <strong className="gd-display text-2xl text-[var(--gd-navy)]">{m.n}</strong>
                  <span className="text-[0.72rem] leading-snug text-[var(--gd-muted)]">{m.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── right: live editor — writing → keywords → rank #1 ── */}
          <div className="cm-hero__editor relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
            <TiltCard max={6} className="cm-card p-0">
              {/* chrome bar */}
              <div className="flex items-center gap-2 border-b border-[var(--cm-line)] px-5 py-3.5">
                <span className="size-2.5 rounded-full bg-[#f87171]/70" />
                <span className="size-2.5 rounded-full bg-[#fbbf24]/70" />
                <span className="size-2.5 rounded-full bg-[#34d399]/70" />
                <span className="ml-3 text-[0.72rem] font-medium text-[var(--cm-faint)]">
                  digivanta — content-draft.md
                </span>
                <span className="ml-auto rounded-full bg-[var(--cm-violet-soft)] px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wide text-[var(--cm-violet)]">
                  Live draft
                </span>
              </div>

              {/* document body */}
              <div className="px-6 pb-7 pt-6 sm:px-7">
                <p className="m-0 min-h-[3.4em] text-[1.05rem] font-semibold leading-snug text-[var(--cm-ink)] sm:text-[1.15rem]">
                  {Array.from(ED_TITLE).map((ch, i) => (
                    <span key={i} className="cm-ed__char" style={{ whiteSpace: ch === " " ? "pre" : "normal" }}>
                      {ch === " " ? " " : ch}
                    </span>
                  ))}
                  <span aria-hidden className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.18em] animate-pulse bg-[var(--cm-blue)]" />
                </p>

                <div className="mt-5 space-y-2.5">
                  {ED_BARS.map((w, i) => (
                    <div key={i} className={`cm-ed__bar h-2.5 rounded-full bg-[rgba(12,36,61,0.08)] ${w}`} />
                  ))}
                </div>

                <p className="mb-2.5 mt-6 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--cm-faint)]">
                  Keywords detected
                </p>
                <div className="flex flex-wrap gap-2">
                  {ED_KEYWORDS.map((k) => (
                    <span
                      key={k}
                      className="cm-ed__kw rounded-full border border-[rgba(176,141,63,0.35)] bg-[var(--cm-violet-soft)] px-3 py-1 text-[0.74rem] font-semibold text-[var(--cm-violet)]"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>

            {/* SERP result — pops up once the draft is "published" */}
            <div className="cm-ed__serp absolute -bottom-8 -left-3 w-[78%] rounded-2xl border border-[var(--cm-line)] bg-white p-4 shadow-[0_24px_60px_rgba(12,36,61,0.18)] sm:-left-8">
              <div className="flex items-center gap-2">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[var(--cm-blue-soft)] text-[0.6rem] font-bold text-[var(--cm-blue)]">
                  
                </span>
                <span className="truncate text-[0.68rem] text-[var(--cm-muted)]">digivanta.co › content-marketing</span>
                <span className="ml-auto shrink-0 rounded-full bg-[var(--cm-violet)] px-2 py-0.5 text-[0.6rem] font-bold text-white">
                  #1
                </span>
              </div>
              <p className="m-0 mt-1.5 truncate text-[0.85rem] font-semibold text-[var(--cm-blue)]">
                Content Marketing Services in Delhi — Digivanta
              </p>
              <p className="m-0 mt-0.5 text-[0.7rem] leading-snug text-[var(--cm-muted)]">
                SEO-focused content that ranks, reads and converts…
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cm-hero__cue absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--cm-faint)]">
        Scroll
      </div>
    </section>
  );
}

/* Editorial intro — the manifesto under the hero, revealed word by word
   as the reader scrolls (scrubbed, so it tracks the scroll position). */
export function IntroSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cm-intro__word",
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.06,
          ease: "none",
          scrollTrigger: {
            trigger: ".cm-intro__lead",
            start: "top 82%",
            end: "bottom 45%",
            scrub: 0.6,
          },
        }
      );
      gsap.fromTo(
        ".cm-intro__item",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ".cm-intro__grid", start: "top 82%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-5 sm:py-14">
      <div className="container">
        <p className="cm-intro__lead m-0 text-[clamp(1.3rem,2.6vw,1.9rem)] font-medium leading-snug text-[var(--cm-ink)]">
          {CM_INTRO.lead.split(" ").map((w, i) => (
            <span key={i} className="cm-intro__word">
              {w}{" "}
            </span>
          ))}
        </p>
        <div className="cm-intro__grid mt-10 grid gap-5 border-t border-[var(--cm-line)] pt-10 md:grid-cols-2">
          {CM_INTRO.paragraphs.map((p, i) => (
            <p key={i} className="cm-intro__item m-0 text-[0.95rem] leading-relaxed text-[var(--cm-muted)]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
