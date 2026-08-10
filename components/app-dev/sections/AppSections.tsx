"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Check } from "lucide-react";
import { gsap, reduced } from "@/animations/gsap";
import { Label } from "@/components/design/primitives";
import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import { AppIcon } from "@/components/app-dev/AppIcon";
import { TechLogo } from "@/components/app-dev/TechLogo";
import {
  AppScreen,
  DesignScreen,
  PhoneFrame,
  ScreenLayer,
  ShowcaseScreen,
  WireframeScreen,
} from "@/components/app-dev/story/Phone";
import {
  APP_AI,
  APP_CUSTOM,
  APP_DEDICATED,
  APP_ENTERPRISE,
  APP_EXPERIENCE,
  APP_GLANCE,
  APP_INDUSTRIES,
  APP_PLATFORMS,
  APP_PRICING,
  APP_PROBLEM,
  APP_STATS,
  APP_SUPPORT,
  APP_TECH,
  APP_WHY_CHOOSE,
} from "@/lib/app-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Shared scroll-in for a section's children — same feel as the other
   service pages (stagger up on enter, reduced-motion safe). */
function useSectionReveal(selector: string) {
  const root = useRef<HTMLElement | null>(null);
  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { y: 56, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, [selector]);
  return root;
}

function Head({
  label,
  top,
  accent,
  intro,
  center,
}: {
  label: string;
  top: string;
  accent: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={"mb-12 max-w-3xl " + (center ? "mx-auto text-center" : "")}>
      <Label center={center}>{label}</Label>
      <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--gd-ink)]">
        {top}
        <br />
        <span className="gd-grad">{accent}</span>
      </h2>
      {intro && <p className={"mt-5 max-w-xl text-[var(--gd-muted)] " + (center ? "mx-auto" : "")}>{intro}</p>}
    </div>
  );
}

function Section({
  children,
  id,
  soft,
  rootRef,
}: {
  children: ReactNode;
  id?: string;
  soft?: boolean;
  rootRef?: React.RefObject<HTMLElement | null>;
}) {
  return (
    <section
      ref={rootRef}
      id={id}
      className={"relative py-5 " + (soft ? "bg-[var(--gd-soft)]" : "")}
    >
      <div className="container">{children}</div>
    </section>
  );
}

/* ── Why businesses need apps ─────────────────────────────────────── */
export function OpportunitySection() {
  const root = useSectionReveal(".app-opp__row");

  const solutionSubtitles: Record<string, string> = {
    "Simplify customer interactions": "Frictionless UI & Quick Actions",
    "Improve visibility & accessibility": "24/7 Home Screen Presence",
    "Automate business operations": "Real-time Sync & Workflows",
    "Increase repeat customers & sales": "Push Notifications & Loyalty",
    "Deliver personalized experiences": "Tailored User Dashboards",
    "Build stronger brand trust": "Secure, Enterprise-Grade Core",
  };

  return (
    <Section rootRef={root}>
      <div className="grid gap-5 items-start lg:grid-cols-[1fr_1.1fr]">
        {/* left column: copy & cta */}
        <div className="app-opp__row lg:sticky lg:top-28">
          <Label>{APP_EXPERIENCE.labels.opportunity}</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--gd-ink)]">
            {APP_PROBLEM.titleLines[0]}
            <br />
            <span className="gd-grad">{APP_PROBLEM.titleLines[1]}.</span>
          </h2>
          <p className="mt-5 max-w-lg text-[var(--gd-muted)]">{APP_PROBLEM.intro}</p>
          <div className="mt-8">
            <MagneticButton href="/contact">
              {APP_PROBLEM.cta} <ArrowRight />
            </MagneticButton>
          </div>
        </div>

        {/* right column: solution cards grid */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
          {APP_PROBLEM.solutions.map((s, i) => (
            <div
              key={s}
              className="app-opp__row group relative overflow-hidden rounded-2xl border border-[var(--gd-line)] bg-white p-5 transition-all duration-300 hover:border-[var(--gd-navy)]/30 hover:shadow-[0_8px_30px_rgba(12,36,61,0.08)]"
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
                {s}
              </h3>
              <p className="m-0 mt-1 text-[0.72rem] text-[var(--gd-muted)]">
                {solutionSubtitles[s] || "Mobile Opportunity"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── Custom apps + why choose ─────────────────────────────────────── */
export function CustomSection() {
  const root = useSectionReveal(".app-custom__reveal");
  const [activeStage, setActiveStage] = useState(0);

  return (
    <Section id="custom-apps" soft rootRef={root}>
      <div className="app-custom__reveal grid gap-5 items-end lg:grid-cols-[1.1fr_0.72fr]">
        <div>
          <Label>{APP_EXPERIENCE.labels.why}</Label>
          <h2 className="gd-display max-w-[15ch] text-[clamp(2.5rem,5.7vw,5.4rem)] leading-[0.9] text-[var(--gd-ink)]">
            {APP_CUSTOM.titleLines[0]}
            <br />
            <span className="text-[var(--gd-blue)]">{APP_CUSTOM.titleLines[1]}</span>
          </h2>
        </div>
        <div className="pb-1 lg:pb-2">
          <p className="m-0 max-w-[34rem] text-[1.02rem] leading-7 text-[var(--gd-muted)]">{APP_CUSTOM.intro}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <MagneticButton href="/contact">
              {APP_CUSTOM.primaryCta} <ArrowRight />
            </MagneticButton>
            <a
              href="/contact"
              className="ag-link inline-flex min-h-11 items-center gap-2 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-[var(--gd-navy)] [&_svg]:size-4 [&_svg]:text-[var(--gd-gold)]"
            >
              {APP_CUSTOM.secondaryCta} <ArrowRight />
            </a>
          </div>
        </div>
      </div>

      <div className="app-custom__reveal relative mt-12 overflow-hidden bg-[var(--gd-navy)] text-white shadow-[0_36px_90px_rgba(12,36,61,0.24)] lg:mt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:linear-gradient(to_right,black,transparent_70%)]"
        />
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-24 size-[30rem] rounded-full border border-white/10" />
        <div aria-hidden className="pointer-events-none absolute -right-2 top-10 size-[21rem] rounded-full border border-[var(--gd-gold)]/25" />

        <div className="relative border-b border-white/10 px-5 py-5 sm:px-8 lg:flex lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.12)]" />
            <span className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-white/60">{APP_CUSTOM.lab.eyebrow}</span>
          </div>
          <p className="m-0 mt-3 max-w-xl text-sm text-white/55 lg:mt-0">{APP_CUSTOM.lab.title}</p>
        </div>

        <div className="relative grid lg:min-h-[620px] lg:grid-cols-[0.72fr_1fr_1.08fr]">
          <div className="flex flex-col justify-between border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <div>
              <p className="m-0 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[var(--gd-gold)]">{APP_CUSTOM.lab.activeLabel}</p>
              <div className="gd-display mt-5 text-[clamp(5rem,11vw,9rem)] leading-none text-white/[0.09]">
                {String(activeStage + 1).padStart(2, "0")}
              </div>
              <h3 className="gd-display m-0 -mt-5 max-w-[10ch] text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.05] text-white">
                {APP_CUSTOM.focus[activeStage]}
              </h3>
              <p className="m-0 mt-5 max-w-xs text-sm leading-6 text-white/55">{APP_CUSTOM.focusDetails[activeStage]}</p>
            </div>
            <div className="mt-9 border-t border-white/10 pt-6">
              <span className="text-[0.64rem] font-bold uppercase tracking-[0.16em] text-white/35">{APP_CUSTOM.lab.footer}</span>
            </div>
          </div>

          <div className="relative flex min-h-[540px] items-center justify-center overflow-hidden border-b border-white/10 px-6 py-12 lg:min-h-0 lg:border-b-0 lg:border-r">
            <div aria-hidden className="absolute size-[23rem] rounded-full border border-white/10 sm:size-[27rem]" />
            <div aria-hidden className="absolute size-[17rem] rotate-45 border border-[var(--gd-gold)]/20 sm:size-[20rem]" />
            <span className="absolute left-5 top-5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white/30 sm:left-8 sm:top-8">
              {APP_CUSTOM.lab.prototypeLabel}
            </span>

            <PhoneFrame className="relative z-10 w-[205px] shadow-[0_55px_120px_rgba(0,0,0,0.48)] sm:w-[235px]">
              <ScreenLayer active={activeStage === 0} className="transition-opacity duration-500">
                <WireframeScreen />
              </ScreenLayer>
              <ScreenLayer active={activeStage === 1} className="transition-opacity duration-500">
                <DesignScreen />
              </ScreenLayer>
              <ScreenLayer active={activeStage >= 2} className="transition-opacity duration-500">
                <AppScreen />
              </ScreenLayer>
            </PhoneFrame>

            {APP_CUSTOM.lab.orbit.map((item, i) => (
              <span
                key={item}
                className={
                  "absolute z-20 hidden border border-white/15 bg-[var(--gd-navy)]/85 px-3 py-2 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/70 backdrop-blur sm:block " +
                  (i === 0 ? "left-5 top-[28%] " : i === 1 ? "bottom-[23%] left-7 " : "right-4 top-[36%] ")
                }
              >
                <span className="mr-2 text-[var(--gd-gold)]">+</span>{item}
              </span>
            ))}
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            <ol className="m-0 list-none border-t border-white/10 p-0">
              {APP_CUSTOM.focus.map((focus, i) => {
                const active = i === activeStage;
                return (
                  <li key={focus} className="border-b border-white/10">
                    <button
                      type="button"
                      onMouseEnter={() => setActiveStage(i)}
                      onFocus={() => setActiveStage(i)}
                      onClick={() => setActiveStage(i)}
                      aria-pressed={active}
                      className="group flex w-full items-center gap-4 py-5 text-left"
                    >
                      <span
                        className={
                          "grid size-10 shrink-0 place-items-center border transition-all duration-300 " +
                          (active
                            ? "border-[var(--gd-gold)] bg-[var(--gd-gold)] text-[var(--gd-navy)]"
                            : "border-white/15 text-white/40 group-hover:border-white/35 group-hover:text-white")
                        }
                      >
                        <AppIcon name={APP_CUSTOM.focusIcons[i]} size={17} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className={"block text-sm font-semibold transition-colors " + (active ? "text-white" : "text-white/55 group-hover:text-white/85")}>
                          {focus}
                        </span>
                        <span
                          className={
                            "grid overflow-hidden text-xs leading-5 text-white/40 transition-all duration-300 " +
                            (active ? "mt-1.5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
                          }
                        >
                          <span className="min-h-0">{APP_CUSTOM.focusDetails[i]}</span>
                        </span>
                      </span>
                      <span className={"gd-display text-xs transition-colors " + (active ? "text-[var(--gd-gold)]" : "text-white/20")}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <div className="relative grid border-t border-white/10 sm:grid-cols-[1fr_1fr_1fr_1.7fr]">
          {APP_CUSTOM.metrics.map((metric) => (
            <div key={metric.label} className="border-b border-white/10 px-6 py-5 sm:border-b-0 sm:border-r sm:px-8">
              <strong className="gd-display block text-lg text-white">{metric.value}</strong>
              <span className="mt-1 block text-xs text-white/40">{metric.label}</span>
            </div>
          ))}
          <div className="flex items-center px-6 py-5 sm:px-8">
            <p className="m-0 text-xs leading-5 text-white/45">{APP_CUSTOM.lab.footer}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function WhyChooseSection() {
  const root = useSectionReveal(".app-why__card");
  return (
    <Section rootRef={root}>
      <Head label={APP_EXPERIENCE.labels.why} top="Built by a team" accent="that ships." />
      {/* bento: first card dark + wide, last card gold + wide, rest standard */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {APP_WHY_CHOOSE.map((r, i) => {
          const dark = i === 0;
          const gold = i === APP_WHY_CHOOSE.length - 1;
          const wide = dark || gold;
          return (
            <article
              key={r.title}
              className={
                "app-why__card group relative overflow-hidden p-7 " +
                (wide ? "sm:col-span-2 " : "") +
                (dark
                  ? "rounded-[20px] bg-[var(--gd-navy)] text-white shadow-[0_24px_60px_rgba(12,36,61,0.35)]"
                  : gold
                    ? "rounded-[20px] border border-[rgba(176,141,63,0.35)] bg-[var(--gd-gold-soft)]"
                    : "gd-card")
              }
            >
              {dark && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "radial-gradient(420px 220px at 88% -20%, rgba(125,180,224,0.35), transparent 65%)" }}
                />
              )}
              <span
                className={
                  "relative mb-5 inline-grid size-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 " +
                  (dark ? "bg-white/10 text-[#e4c766]" : "bg-[var(--gd-gold-soft)] text-[var(--gd-gold)]")
                }
              >
                <AppIcon name={r.icon} size={21} />
              </span>
              <h3 className={"gd-display relative m-0 text-[1.15rem] " + (dark ? "text-white" : "text-[var(--gd-ink)]")}>
                {r.title}
              </h3>
              <p
                className={
                  "relative m-0 mt-2 text-[0.92rem] leading-relaxed " + (dark ? "text-white/65" : "text-[var(--gd-muted)]")
                }
              >
                {r.desc}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

/* ── Industries — big-type list, phone reveals on hover ───────────── */
export function IndustryShowcaseSection() {
  const root = useRef<HTMLElement | null>(null);
  const stage = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const current = APP_INDUSTRIES[active];

  /* entrance: rows mask up */
  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".app-ind__row",
        { yPercent: 108, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.85,
          stagger: 0.07,
          ease: "power4.out",
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        }
      );
      gsap.fromTo(
        ".app-ind__stage",
        { autoAlpha: 0, scale: 0.94 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  /* swap the device whenever the highlighted industry changes */
  useEffect(() => {
    if (reduced() || !stage.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".app-ind__screen",
        { autoAlpha: 0, y: 22, rotate: -3, scale: 0.96 },
        { autoAlpha: 1, y: 0, rotate: 0, scale: 1, duration: 0.55, ease: "power3.out" }
      );
    }, stage);
    return () => ctx.revert();
  }, [active]);

  return (
    <Section soft rootRef={root}>
      <Head
        label={APP_EXPERIENCE.labels.industries}
        top={APP_EXPERIENCE.industryTitle[0]}
        accent={APP_EXPERIENCE.industryTitle[1]}
      />

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        {/* device — above the list on mobile, sticky beside it on desktop */}
        <div
          ref={stage}
          id="app-ind-panel"
          aria-live="polite"
          className="app-ind__stage order-first flex flex-col items-center lg:order-last lg:sticky lg:top-28"
        >
          <div className="app-ind__screen relative">
            <span
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-1/2 size-[17rem] -translate-x-1/2 -translate-y-1/2 rounded-full sm:size-[21rem]"
              style={{ background: "radial-gradient(circle, rgba(40,111,171,0.18), transparent 68%)" }}
            />
            <PhoneFrame className="relative w-[190px] shadow-[0_40px_90px_rgba(12,36,61,0.32)] sm:w-[220px]">
              <ShowcaseScreen kind={current.kind} />
            </PhoneFrame>
          </div>
          <p className="app-ind__screen mt-6 max-w-sm text-center text-[0.92rem] leading-relaxed text-[var(--gd-muted)]">
            {current.desc}
          </p>
        </div>

        {/* the list */}
        <ul className="m-0 list-none border-t border-[var(--gd-line)] p-0">
          {APP_INDUSTRIES.map((ind, i) => {
            const on = i === active;
            return (
              <li key={ind.name} className="overflow-hidden border-b border-[var(--gd-line)]">
                <button
                  type="button"
                  aria-controls="app-ind-panel"
                  aria-current={on ? "true" : undefined}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="app-ind__row group flex w-full items-center gap-5 py-5 text-left transition-colors duration-300 sm:py-6"
                >
                  <span className="gd-display w-8 shrink-0 text-sm text-[var(--gd-gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={
                      "gd-display flex-1 text-[clamp(1.5rem,4.4vw,2.9rem)] leading-none transition-all duration-400 " +
                      (on
                        ? "translate-x-2 text-[var(--gd-ink)] sm:translate-x-3"
                        : "text-[var(--gd-muted)]/45")
                    }
                  >
                    {ind.name}
                  </span>
                  <span
                    className={
                      "grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-400 sm:size-10 " +
                      (on
                        ? "border-[var(--gd-navy)] bg-[var(--gd-navy)] text-white"
                        : "border-[var(--gd-line)] text-[var(--gd-muted)]")
                    }
                  >
                    <AppIcon name={ind.icon} size={17} />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
/* ── Technology stack — 3D tunnel fly-through ─────────────────────── */

/* Every technology we work with, flattened — no Frontend/Backend grouping. */
const STACK = APP_TECH.flatMap((g) => g.items).filter(
  (t) =>
    !t.includes("&") &&
    !t.includes("Integrations") &&
    !t.includes("Chat") &&
    !t.includes("Gateways") &&
    !t.includes("Infrastructure")
);

/* Fake-but-plausible package names for the terminal install log. */
const PKG: Record<string, string> = {
  Flutter: "flutter@3.22.0",
  "React Native": "react-native@0.74.1",
  "Swift (iOS)": "swift@5.10",
  "Kotlin (Android)": "kotlin@2.0.0",
  Java: "java@21-lts",
  "Node.js": "node@22.3.0",
  Laravel: "laravel@11.x",
  Python: "python@3.12",
  PHP: "php@8.3",
  Firebase: "firebase@10.12",
  MongoDB: "mongodb@7.0",
  MySQL: "mysql@8.4",
  PostgreSQL: "postgres@16.3",
  AWS: "aws-sdk@3.590",
  "Google Cloud": "gcloud@478.0",
};

const TERM_CMD = "npm install your-next-app";

export function StackSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".app-term__line");
      const tiles = gsap.utils.toArray<HTMLElement>(".app-term__tile");
      const pctEl = root.current?.querySelector(".app-term__pct");

      const START = 1.15; // after the command finishes typing
      const STEP = 0.24; // per installed package
      const total = START + lines.length * STEP;

      /* one build sequence, fired when the section scrolls into view */
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top 60%", once: true },
      });

      /* type the command */
      tl.fromTo(
        ".app-term__cmdchar",
        { display: "none" },
        { display: "inline", duration: 0.01, stagger: 0.045, ease: "none" },
        0.15
      );

      /* install log streams + logo tiles snap in as packages finish */
      lines.forEach((line, i) => {
        tl.fromTo(line, { display: "none" }, { display: "flex", duration: 0.01 }, START + i * STEP);
        if (tiles[i]) {
          tl.fromTo(
            tiles[i],
            { autoAlpha: 0, scale: 0.4, y: 16 },
            { autoAlpha: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(2)" },
            START + i * STEP + 0.05
          );
        }
      });

      /* progress bar + percentage run across the whole install */
      tl.fromTo(".app-term__bar", { scaleX: 0 }, { scaleX: 1, duration: total - 0.15, ease: "none" }, 0.15);
      const counter = { v: 0 };
      tl.fromTo(
        counter,
        { v: 0 },
        {
          v: 100,
          duration: total - 0.15,
          ease: "none",
          onUpdate: () => {
            if (pctEl) pctEl.textContent = `${Math.round(counter.v)}%`;
          },
        },
        0.15
      );

      /* done line + category chips */
      tl.fromTo(".app-term__done", { display: "none" }, { display: "flex", duration: 0.01 }, total + 0.25);
      tl.fromTo(
        ".app-term__chips > *",
        { y: 16, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.07, ease: "power3.out" },
        total + 0.35
      );

      gsap.fromTo(
        ".app-term__head",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        }
      );
      gsap.fromTo(
        ".app-term__window",
        { y: 44, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 68%", once: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-[var(--gd-soft)] py-14 sm:py-20">
      <div className="container relative">
        <div className="app-term__head relative">
          <Head
            label={APP_EXPERIENCE.labels.stack}
            top={APP_EXPERIENCE.stackTitle[0]}
            accent={APP_EXPERIENCE.stackTitle[1]}
            intro={APP_EXPERIENCE.stackIntro}
          />
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          {/* ── terminal window ── */}
          <div className="app-term__window overflow-hidden rounded-2xl border border-white/10 bg-[#0A1930] shadow-[0_40px_90px_rgba(12,36,61,0.35)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
              <span className="size-2.5 rounded-full bg-[#f87171]/80" />
              <span className="size-2.5 rounded-full bg-[#fbbf24]/80" />
              <span className="size-2.5 rounded-full bg-[#34d399]/80" />
              <span className="ml-3 font-mono text-[0.72rem] text-slate-400">digivanta — zsh</span>
              <span className="ml-auto rounded-full bg-[#286FAB]/20 px-2.5 py-0.5 font-mono text-[0.62rem] font-bold uppercase tracking-wide text-[#7db4e0]">
                build
              </span>
            </div>

            <div className="px-5 pb-5 pt-4 sm:px-6">
              {/* typed command */}
              <p className="m-0 font-mono text-[0.82rem] text-white">
                <span className="text-[#e4c766]">$ </span>
                {Array.from(TERM_CMD).map((ch, i) => (
                  <span key={i} className="app-term__cmdchar" style={{ whiteSpace: ch === " " ? "pre" : "normal" }}>
                    {ch === " " ? " " : ch}
                  </span>
                ))}
                <span
                  aria-hidden
                  className="ml-1 inline-block h-[1em] w-[7px] translate-y-[2px] animate-pulse bg-[#4ade80]"
                />
              </p>

              {/* install log — bottom-anchored so new lines push old ones up */}
              <div className="mt-3 flex h-[236px] flex-col justify-end overflow-hidden sm:h-[260px]">
                {STACK.map((name) => (
                  <div key={name} className="app-term__line flex items-center gap-2 font-mono text-[0.78rem] leading-6">
                    <span className="text-[#4ade80]">✓</span>
                    <span className="text-slate-400">installed</span>
                    <span className="text-slate-100">{PKG[name] ?? name.toLowerCase()}</span>
                  </div>
                ))}
                <div className="app-term__done flex items-center gap-2 font-mono text-[0.78rem] leading-7">
                  <span>✨</span>
                  <span className="text-[#e4c766]">Done in 4.2s — {STACK.length} packages ready for launch.</span>
                </div>
              </div>

              {/* progress */}
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                <span className="app-term__bar block h-full w-full origin-left rounded-full bg-[linear-gradient(90deg,#286FAB,#4ade80)]" />
              </div>
              <div className="mt-2 flex items-center justify-between font-mono text-[0.66rem] text-slate-400">
                <span>installing dependencies…</span>
                <span className="app-term__pct">100%</span>
              </div>
            </div>
          </div>

          {/* ── packages land here as they install ── */}
          <div>
            <div className="grid gap-5 grid-cols-3 sm:grid-cols-4 lg:grid-cols-5">
              {STACK.map((name) => (
                <div
                  key={name}
                  className="app-term__tile flex flex-col items-center gap-2 rounded-xl border border-[var(--gd-line)] bg-white p-3.5 shadow-[0_10px_26px_rgba(12,36,61,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(12,36,61,0.15)]"
                >
                  <TechLogo name={name} size={26} />
                  <span className="text-center text-[0.66rem] font-semibold leading-tight text-[var(--gd-ink)]">
                    {name}
                  </span>
                </div>
              ))}
            </div>

            <div className="app-term__chips mt-6 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-[0.88rem] text-[var(--gd-muted)]">
                <span className="gd-display text-[1.2rem] text-[var(--gd-navy)]">{STACK.length}</span> technologies —
              </span>
              {APP_TECH.map((g) => (
                <span
                  key={g.group}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--gd-line)] bg-white px-3 py-1.5 text-[0.72rem] font-semibold text-[var(--gd-ink)] [&_svg]:size-3.5 [&_svg]:text-[var(--gd-gold)]"
                >
                  <AppIcon name={g.icon} size={14} />
                  {g.group}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
/* ── Platforms — split rows with oversized real brand marks ───────── */
export function PlatformSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".app-plat__row").forEach((row, i) => {
        gsap.fromTo(
          row,
          { y: 48, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 88%", once: true },
          }
        );
        /* the big watermark logo slides opposite the scroll for depth */
        gsap.fromTo(
          row.querySelector(".app-plat__mark"),
          { xPercent: i % 2 ? -8 : 8 },
          {
            xPercent: i % 2 ? 8 : -8,
            ease: "none",
            scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: 0.8 },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden py-14 sm:py-20">
      <div className="container">
        <Head
          label={APP_EXPERIENCE.labels.platforms}
          top={APP_EXPERIENCE.platformTitle[0]}
          accent={APP_EXPERIENCE.platformTitle[1]}
          intro={APP_EXPERIENCE.platformIntro}
        />

        <div className="border-t border-[var(--gd-line)]">
          {APP_PLATFORMS.map((p, i) => (
            <article
              key={p.name}
              className="app-plat__row group relative grid gap-5 items-center overflow-hidden border-b border-[var(--gd-line)] py-8 transition-colors duration-300 hover:bg-[var(--gd-soft)] sm:grid-cols-[auto_1fr]"
            >
              {/* oversized ghost brand mark */}
              <span
                aria-hidden
                className="app-plat__mark pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 opacity-[0.07] lg:block"
              >
                <TechLogo name={p.name} size={150} mono />
              </span>

              <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-[var(--gd-line)] bg-white transition-transform duration-300 group-hover:scale-110 sm:size-16">
                <TechLogo name={p.name} size={30} />
              </span>

              <div className="relative">
                <div className="flex items-baseline gap-3">
                  <span className="gd-display text-sm text-[var(--gd-gold)]">0{i + 1}</span>
                  <h3 className="gd-display m-0 text-[clamp(1.3rem,3vw,2.1rem)] text-[var(--gd-ink)] transition-transform duration-400 group-hover:translate-x-2">
                    {p.name}
                  </h3>
                </div>
                <p className="m-0 mt-2 max-w-xl text-[0.92rem] leading-relaxed text-[var(--gd-muted)]">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Post-launch support ──────────────────────────────────────────── */
export function SupportSection() {
  const root = useSectionReveal(".app-support__item");
  return (
    <Section soft rootRef={root}>
      <Head
        label={APP_EXPERIENCE.labels.support}
        top={APP_EXPERIENCE.supportTitle[0]}
        accent={APP_EXPERIENCE.supportTitle[1]}
        intro={APP_EXPERIENCE.supportIntro}
      />
      {/* numbered two-column rows — deliberately not another card grid */}
      <ul className="m-0 grid gap-5 list-none p-0 md:grid-cols-2">
        {APP_SUPPORT.map((s, i) => (
          <li
            key={s}
            className="app-support__item group flex items-baseline gap-4 border-b border-[var(--gd-line)] py-4 transition-colors duration-300 hover:border-[var(--gd-gold)]/60"
          >
            <span className="gd-display shrink-0 text-sm text-[var(--gd-gold)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[0.95rem] font-medium text-[var(--gd-ink)] transition-transform duration-300 group-hover:translate-x-1.5">
              {s}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ── AI-powered apps — dark band, orbiting glow tiles ─────────────── */
export function AISection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".app-ai__card",
        { y: 44, autoAlpha: 0, scale: 0.94 },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
        }
      );
      gsap.to(".app-ai__glow", {
        scale: 1.15,
        opacity: 0.75,
        duration: 3.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden py-16 sm:py-24" style={{ background: "var(--gd-navy)" }}>
      <span
        aria-hidden
        className="app-ai__glow pointer-events-none absolute left-1/2 top-0 size-[38rem] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, rgba(125,180,224,0.34), transparent 66%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_72%)]"
      />

      <div className="container relative z-10">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#e4c766]">
            <span aria-hidden className="h-px w-8 bg-[#e4c766]/70" />
            {APP_EXPERIENCE.labels.ai}
          </span>
          <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-white">
            {APP_AI.titleLines[0]}
            <br />
            <span className="bg-[linear-gradient(105deg,#7db4e0_0%,#e4c766_100%)] bg-clip-text text-transparent">
              {APP_AI.titleLines[1]}
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/60">{APP_AI.intro}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {APP_AI.features.map((f) => (
            <div
              key={f.title}
              className="app-ai__card group flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[0.05] p-5 transition-colors duration-300 hover:border-[#e4c766]/45 hover:bg-white/[0.09]"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-[#e4c766] transition-transform duration-300 group-hover:scale-110">
                <AppIcon name={f.icon} size={20} />
              </span>
              <h3 className="gd-display m-0 text-[1rem] text-white">{f.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Enterprise ───────────────────────────────────────────────────── */
export function EnterpriseSection() {
  const root = useSectionReveal(".app-ent__item");
  return (
    <Section soft rootRef={root}>
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <Label>{APP_EXPERIENCE.labels.enterprise}</Label>
          <h2 className="gd-display text-[clamp(2rem,4.4vw,3.1rem)] text-[var(--gd-ink)]">
            {APP_ENTERPRISE.titleLines[0]}
            <br />
            <span className="gd-grad">{APP_ENTERPRISE.titleLines[1]}</span>
          </h2>
          <p className="mt-5 max-w-xl text-[var(--gd-muted)]">{APP_ENTERPRISE.intro}</p>
        </div>
        <ul className="m-0 grid gap-5 list-none p-0 sm:grid-cols-2">
          {APP_ENTERPRISE.points.map((p, i) => (
            <li key={p} className="app-ent__item gd-card p-6">
              <span className="gd-display text-sm text-[var(--gd-gold)]">0{i + 1}</span>
              <p className="m-0 mt-4 text-[0.98rem] font-semibold leading-snug text-[var(--gd-ink)]">{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ── Pricing ──────────────────────────────────────────────────────── */
export function PricingSection() {
  const root = useSectionReveal(".app-price__card");
  return (
    <Section id="app-pricing" rootRef={root}>
      <Head
        label={APP_EXPERIENCE.labels.pricing}
        top={APP_PRICING.titleLines[0]}
        accent={APP_PRICING.titleLines[1]}
        intro={APP_PRICING.intro}
        center
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {APP_PRICING.plans.map((plan) => (
          <article
            key={plan.name}
            className={
              "app-price__card relative p-7 " +
              (plan.featured
                ? "overflow-hidden rounded-[20px] bg-[var(--gd-navy)] text-white shadow-[0_30px_70px_rgba(12,36,61,0.4)] lg:-translate-y-3"
                : "gd-card")
            }
          >
            {plan.featured && (
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{ background: "radial-gradient(420px 240px at 90% -20%, rgba(125,180,224,0.32), transparent 65%)" }}
              />
            )}
            {/* badge sits INSIDE the card — the card is overflow:hidden, so a
                negatively-positioned badge would be clipped in half */}
            {plan.featured && (
              <span className="relative mb-3 inline-flex rounded-full bg-[var(--gd-gold)] px-3 py-1 text-[0.64rem] font-bold uppercase tracking-wide text-white">
                Most popular
              </span>
            )}
            <h3 className={"gd-display relative m-0 text-[1.3rem] " + (plan.featured ? "text-white" : "text-[var(--gd-ink)]")}>
              {plan.name}
            </h3>
            <p className={"relative m-0 mt-3 text-[0.92rem] leading-6 " + (plan.featured ? "text-white/65" : "text-[var(--gd-muted)]")}>
              {plan.desc}
            </p>
            <ul className="relative m-0 mt-6 grid gap-5 list-none p-0">
              {plan.points.map((pt) => (
                <li
                  key={pt}
                  className={"flex items-center gap-3 text-[0.9rem] " + (plan.featured ? "text-white/90" : "text-[var(--gd-ink)]")}
                >
                  <Check
                    aria-hidden
                    className={"size-4 shrink-0 " + (plan.featured ? "text-[#e4c766]" : "text-[var(--gd-gold)]")}
                    strokeWidth={3}
                  />
                  {pt}
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className={
                "ag-link relative mt-7 inline-flex min-h-[44px] items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] [&_svg]:size-4 " +
                (plan.featured ? "text-white [&_svg]:text-[#e4c766]" : "text-[var(--gd-navy)] [&_svg]:text-[var(--gd-gold)]")
              }
            >
              {APP_EXPERIENCE.estimateCta} <ArrowRight />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ── Dedicated developers ─────────────────────────────────────────── */
export function DedicatedSection() {
  const root = useSectionReveal(".app-ded__item");
  return (
    <Section soft rootRef={root}>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Label>{APP_EXPERIENCE.labels.dedicated}</Label>
          <h2 className="gd-display text-[clamp(2rem,4.4vw,3.1rem)] text-[var(--gd-ink)]">
            {APP_DEDICATED.titleLines[0]}
            <br />
            <span className="gd-grad">{APP_DEDICATED.titleLines[1]}</span>
          </h2>
          <p className="mt-5 max-w-xl text-[var(--gd-muted)]">{APP_DEDICATED.intro}</p>
          <div className="mt-8">
            <MagneticButton href="/contact">
              {APP_EXPERIENCE.dedicatedCta} <ArrowRight />
            </MagneticButton>
          </div>
        </div>
        <ul className="m-0 grid gap-5 list-none grid-cols-2 p-0">
          {APP_DEDICATED.supports.map((item, i) => (
            <li key={item} className="app-ded__item gd-card p-5">
              <span className="gd-display text-sm text-[var(--gd-gold)]">0{i + 1}</span>
              <p className="m-0 mt-4 text-[0.92rem] font-semibold leading-snug text-[var(--gd-ink)]">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ── Results ──────────────────────────────────────────────────────── */
export function ResultsSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".app-res__item",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        }
      );
      /* count up */
      root.current?.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count) || 0;
        const o = { v: 0 };
        gsap.to(o, {
          v: end,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(o.v));
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <Section rootRef={root}>
      <Head
        label={APP_EXPERIENCE.labels.results}
        top={APP_EXPERIENCE.resultsTitle[0]}
        accent={APP_EXPERIENCE.resultsTitle[1]}
        center
      />
      <div className="grid gap-5 border-y border-[var(--gd-line)] py-10 sm:grid-cols-3">
        {APP_STATS.map((s) => (
          <div key={s.label} className="app-res__item text-center">
            <div className="gd-display text-[clamp(2.4rem,6vw,3.8rem)] text-[var(--gd-navy)]">
              <span data-count={s.value}>0</span>
              <span className="text-[var(--gd-gold)]">{s.suffix}</span>
            </div>
            <p className="m-0 mt-2 text-sm text-[var(--gd-muted)]">{s.label}</p>
          </div>
        ))}
      </div>
      <ul className="m-0 mt-8 flex list-none flex-wrap justify-center gap-2 p-0">
        {APP_GLANCE.map((g) => (
          <li
            key={g}
            className="app-res__item rounded-full border border-[var(--gd-line)] px-4 py-2 text-[0.82rem] text-[var(--gd-muted)]"
          >
            {g}
          </li>
        ))}
      </ul>
    </Section>
  );
}
