"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, Check, Plus } from "lucide-react";
import { SiAndroid, SiApple, SiFlutter, SiReact } from "react-icons/si";
import { gsap, ScrollTrigger, reduced } from "@/animations/gsap";
import { AppIcon } from "@/components/app-dev/AppIcon";
import {
  AppScreen,
  DesignScreen,
  PhoneFrame,
  ShowcaseScreen,
  WireframeScreen,
} from "@/components/app-dev/story/Phone";
import {
  APP_AI,
  APP_CUSTOM,
  APP_DEDICATED,
  APP_ENTERPRISE,
  APP_EXPERIENCE,
  APP_FAQS,
  APP_GLANCE,
  APP_HERO,
  APP_INDUSTRIES,
  APP_PLATFORMS,
  APP_PRICING,
  APP_PROBLEM,
  APP_PROCESS,
  APP_STATS,
  APP_SUPPORT,
  APP_TECH,
  APP_WHY_CHOOSE,
} from "@/lib/app-data";
import { CONTACT } from "@/lib/site-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* ── Digivanta palette ──────────────────────────────────────────────── */
const NAVY = "#0C243D";
const BLUE = "#286FAB";
const GOLD = "#C9A227";
const INK = "#0F172A";
const MIST = "#F4F7FB"; /* very light blue-grey */
const LINE = "#E3E9F0";
const MUTED = "#5A6B80";

const PLATFORM_LOGOS: Record<string, typeof SiAndroid> = {
  Android: SiAndroid,
  iOS: SiApple,
  Flutter: SiFlutter,
  "React Native": SiReact,
};

/* ── atoms ──────────────────────────────────────────────────────────── */

function Kicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className="fx-up m-0 mb-5 flex items-center gap-3 text-[0.75rem] font-bold uppercase tracking-[0.22em]"
      style={{ color: light ? GOLD : BLUE }}
    >
      <span aria-hidden className="h-px w-8" style={{ background: GOLD }} />
      {children}
    </p>
  );
}

/* display headline — lines mask-reveal (wrap parent in .fx-head) */
function Title({
  lines,
  light = false,
  as: Tag = "h2",
  className = "",
  size = "text-[clamp(1.9rem,4.4vw,3.4rem)]",
}: {
  lines: readonly string[];
  light?: boolean;
  as?: "h1" | "h2";
  className?: string;
  size?: string;
}) {
  return (
    <Tag
      className={"m-0 font-bold leading-[1.06] tracking-[-0.035em] " + size + " " + className}
      style={{ color: light ? "#ffffff" : NAVY }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <span className="fx-line inline-block will-change-transform" style={i === lines.length - 1 ? { color: light ? GOLD : BLUE } : undefined}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

function Lead({ children, light = false, className = "" }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <p
      className={"fx-up mt-6 max-w-2xl text-[1rem] leading-[1.75] " + className}
      style={{ color: light ? "rgba(255,255,255,0.66)" : MUTED }}
    >
      {children}
    </p>
  );
}

/* CTA — min 48px touch target */
function Cta({
  href,
  children,
  tone = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  tone?: "primary" | "gold" | "outline" | "outlineLight";
  external?: boolean;
}) {
  const styles: Record<string, React.CSSProperties> = {
    primary: { background: BLUE, color: "#fff", boxShadow: "0 14px 30px -12px rgba(40,111,171,0.75)" },
    gold: { background: GOLD, color: NAVY, boxShadow: "0 14px 30px -12px rgba(201,162,39,0.75)" },
    outline: { border: `1.5px solid ${LINE}`, color: NAVY, background: "#fff" },
    outlineLight: { border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff" },
  };
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="appx-cta group inline-flex min-h-[48px] items-center justify-center gap-2 px-6 text-[0.9rem] font-semibold transition-transform duration-300 hover:-translate-y-0.5 sm:px-7"
      style={styles[tone]}
    >
      {children}
      <ArrowRight aria-hidden className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

/* section shell */
function Band({
  children,
  tone = "white",
  id,
  label,
  className = "",
}: {
  children: ReactNode;
  tone?: "white" | "mist" | "navy" | "ink";
  id?: string;
  label?: string;
  className?: string;
}) {
  const bg = tone === "mist" ? MIST : tone === "navy" ? NAVY : tone === "ink" ? INK : "#ffffff";
  return (
    <section
      id={id}
      aria-label={label}
      className={"relative overflow-hidden py-14 sm:py-20 lg:py-28 " + className}
      style={{ background: bg }}
    >
      {children}
    </section>
  );
}

const STEP_SCREENS = [
  <WireframeScreen key="w" />,
  <DesignScreen key="d" />,
  <AppScreen key="a" />,
  <ShowcaseScreen key="s1" kind="shop" />,
  <ShowcaseScreen key="s2" kind="health" />,
  <ShowcaseScreen key="s3" kind="ride" />,
];

/* ── page ───────────────────────────────────────────────────────────── */

export default function MobileAppExperience() {
  const root = useRef<HTMLDivElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

      /* ── hero intro ── */
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(".hero-eyebrow", { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6 })
        .fromTo(".hero-word", { yPercent: 112, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.9, stagger: 0.07 }, "-=0.3")
        .fromTo(".hero-sub", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, "-=0.5")
        .fromTo(".hero-cta > *", { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08 }, "-=0.45")
        .fromTo(
          ".hero-device",
          { yPercent: 10, autoAlpha: 0, scale: 0.94 },
          { yPercent: 0, autoAlpha: 1, scale: 1, duration: 1.1, ease: "power3.out" },
          "-=0.9"
        )
        .fromTo(".hero-power", { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.7, ease: "power2.inOut" }, "-=0.4")
        .fromTo(".hero-float", { autoAlpha: 0, scale: 0.6 }, { autoAlpha: 1, scale: 1, duration: 0.55, stagger: 0.09, ease: "back.out(1.8)" }, "-=0.45")
        .fromTo(".hero-stat", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08 }, "-=0.4");

      /* gentle float — transform only */
      gsap.to(".hero-device", { y: -12, duration: 3.6, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.5 });
      gsap.to(".hero-float", { y: -9, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1, stagger: 0.4, delay: 1.6 });

      /* desktop-only depth parallax */
      if (isDesktop) {
        gsap.to(".hero-visual", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: ".hero-band", start: "top top", end: "bottom top", scrub: 0.6 },
        });
      }

      /* ── section reveals ── */
      gsap.utils.toArray<HTMLElement>(".fx-head").forEach((el) => {
        gsap.fromTo(
          el.querySelectorAll(".fx-line"),
          { yPercent: 112, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });
      gsap.utils.toArray<HTMLElement>(".fx-up").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 24, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 92%", once: true } }
        );
      });
      gsap.utils.toArray<HTMLElement>(".fx-stagger").forEach((group) => {
        gsap.fromTo(
          group.children,
          { y: 32, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 90%", once: true },
          }
        );
      });

      /* ── counters ── */
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count) || 0;
        const o = { v: 0 };
        gsap.to(o, {
          v: end,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(o.v));
          },
        });
      });

      /* ── process: screen swaps per step (desktop sticky, mobile inline) ──
         steps render at full opacity so reduced-motion users get full contrast;
         the dimmed "inactive" look is only applied when motion is allowed. */
      gsap.utils.toArray<HTMLElement>(".build-step").forEach((step, i) => {
        if (i > 0) gsap.set(step, { opacity: 0.38 });
        ScrollTrigger.create({
          trigger: step,
          start: "top 65%",
          end: "bottom 65%",
          onToggle: (self) => {
            if (!self.isActive) return;
            gsap.to(".build-screen", { autoAlpha: 0, duration: 0.4 });
            gsap.to(`.build-screen[data-i="${i}"]`, { autoAlpha: 1, duration: 0.5 });
            gsap.to(".build-step", { opacity: 0.38, duration: 0.35 });
            gsap.to(step, { opacity: 1, duration: 0.35 });
            gsap.to(".build-bar", { scaleY: (i + 1) / APP_PROCESS.length, duration: 0.5, ease: "power2.out" });
          },
        });
      });

      /* ── industries: horizontal pin on desktop only ── */
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const el = track.current;
        if (!el) return;
        const dist = () => Math.max(0, el.scrollWidth - window.innerWidth + 96);
        const t = gsap.to(el, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: ".fx-gallery",
            start: "top top",
            end: () => "+=" + dist(),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        return () => {
          t.scrollTrigger?.kill();
          t.kill();
        };
      });

      /* ── micro-interaction: magnetic CTAs, pointer devices only ── */
      if (canHover) {
        root.current?.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((btn) => {
          const move = (e: MouseEvent) => {
            const r = btn.getBoundingClientRect();
            gsap.to(btn, {
              x: (e.clientX - (r.left + r.width / 2)) * 0.2,
              y: (e.clientY - (r.top + r.height / 2)) * 0.3,
              duration: 0.6,
              ease: "power3.out",
            });
          };
          const leave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "power3.out" });
          btn.addEventListener("mousemove", move);
          btn.addEventListener("mouseleave", leave);
        });
      }

      ScrollTrigger.refresh();
    }, root);
    return () => ctx.revert();
  }, []);


  return (
    <div ref={root} className="appx w-full overflow-x-hidden" style={{ color: INK }}>
      {/* ══════ 1. CINEMATIC HERO ══════ */}
      <section
        className="hero-band relative overflow-hidden pt-24 sm:pt-28 lg:pt-32"
        style={{ background: `linear-gradient(180deg, ${MIST} 0%, #ffffff 72%)` }}
        aria-label="Mobile app development in Delhi"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(12,36,61,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(12,36,61,.05)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_18%,black_5%,transparent_72%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-24 hidden size-[36rem] rounded-full lg:block"
          style={{ background: "radial-gradient(circle, rgba(201,162,39,0.16), transparent 68%)" }}
        />

        <div className="container relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
            {/* copy — first on mobile */}
            <div className="text-center lg:text-left">
              <p
                className="hero-eyebrow m-0 inline-flex items-center gap-2 rounded-full border bg-white px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] sm:text-[0.7rem]"
                style={{ borderColor: LINE, color: BLUE }}
              >
                <span aria-hidden className="size-1.5 rounded-full" style={{ background: GOLD }} />
                {APP_HERO.badge}
              </p>

              <h1
                className="mt-6 text-[clamp(2.1rem,7.5vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.04em]"
                style={{ color: NAVY }}
              >
                {APP_HERO.titleLines.map((line, li) => (
                  <span key={li} className="block overflow-hidden pb-[0.06em]">
                    <span
                      className="hero-word inline-block will-change-transform"
                      style={li === APP_HERO.gradientLine ? { color: BLUE } : undefined}
                    >
                      {line}
                    </span>
                  </span>
                ))}
              </h1>

              <p className="hero-sub mx-auto mt-5 max-w-xl text-[0.98rem] leading-[1.7] sm:text-[1.05rem] lg:mx-0" style={{ color: MUTED }}>
                {APP_HERO.sub}
              </p>

              <div className="hero-cta mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <span data-magnetic className="inline-flex">
                  <Cta href="#app-contact">{APP_HERO.primaryCta}</Cta>
                </span>
                <Cta href="#app-pricing" tone="outline">
                  {APP_HERO.ghostCta}
                </Cta>
              </div>
            </div>

            {/* device composition */}
            <div className="hero-visual relative flex justify-center pt-4 lg:pt-0">
              <div
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-1/2 size-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full sm:size-[24rem]"
                style={{ background: "radial-gradient(circle, rgba(40,111,171,0.16), transparent 68%)" }}
              />
              <div className="hero-device relative">
                <PhoneFrame>
                  <AppScreen />
                  {/* power-on overlay: hidden by default so reduced-motion users never see a black screen */}
                  <span aria-hidden className="hero-power absolute inset-0 z-30 bg-[#050A12]" style={{ opacity: 0 }} />
                </PhoneFrame>

                {/* floating indicators */}
                <span
                  className="hero-float absolute -left-4 top-16 rounded-2xl border bg-white px-3 py-2 shadow-[0_16px_34px_-14px_rgba(12,36,61,0.45)] sm:-left-10"
                  style={{ borderColor: LINE }}
                >
                  <span className="block text-[0.95rem] font-bold" style={{ color: GOLD }}>4.9★</span>
                  <span className="block text-[0.6rem]" style={{ color: MUTED }}>App rating</span>
                </span>
                <span
                  className="hero-float absolute -right-4 bottom-24 rounded-2xl border bg-white px-3 py-2 shadow-[0_16px_34px_-14px_rgba(12,36,61,0.45)] sm:-right-10"
                  style={{ borderColor: LINE }}
                >
                  <span className="block text-[0.95rem] font-bold" style={{ color: NAVY }}>+210%</span>
                  <span className="block text-[0.6rem]" style={{ color: MUTED }}>Engagement</span>
                </span>
              </div>
            </div>
          </div>

          {/* compact stat strip */}
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 border-t py-8 sm:mt-12 md:grid-cols-4" style={{ borderColor: LINE }}>
            {[
              { n: APP_HERO.stat, suf: "%", l: APP_EXPERIENCE.heroMetric },
              ...APP_STATS.map((s) => ({ n: s.value, suf: s.suffix ?? "", l: s.label })),
            ].map((s) => (
              <div key={s.l} className="hero-stat">
                <p className="m-0 text-[clamp(1.7rem,4.5vw,2.6rem)] font-bold leading-none tracking-[-0.04em]" style={{ color: NAVY }}>
                  <span data-count={s.n}>0</span>
                  <span style={{ color: GOLD }}>{s.suf}</span>
                </p>
                <p className="m-0 mt-2 text-[0.74rem] font-medium leading-snug" style={{ color: MUTED }}>
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* service / location strip */}
        <div className="border-t" style={{ borderColor: LINE, background: "#fff" }}>
          <div className="container flex flex-wrap items-center justify-center gap-x-3 gap-y-2 py-4 lg:justify-start">
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.16em]" style={{ color: NAVY }}>
              {APP_EXPERIENCE.areasLabel}
            </span>
            {APP_HERO.areas.map((a) => (
              <span key={a} className="rounded-full border px-3 py-1 text-[0.74rem]" style={{ borderColor: LINE, color: MUTED }}>
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 2. WHY BUSINESSES NEED APPS ══════ */}
      <Band label="Why businesses need mobile apps">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
          <div>
            <Kicker>{APP_EXPERIENCE.labels.opportunity}</Kicker>
            <div className="fx-head">
              <Title lines={APP_PROBLEM.titleLines} />
            </div>
            <Lead>{APP_PROBLEM.intro}</Lead>
            <div className="fx-up mt-8">
              <span data-magnetic className="inline-flex">
                <Cta href="#app-pricing">{APP_PROBLEM.cta}</Cta>
              </span>
            </div>
          </div>

          {/* [display:grid] not `grid` — globals.css has an unlayered
              `.grid { gap: 1.25rem }` that beats gap-px, which would turn
              these 1px hairline dividers into 20px slabs */}
          <ul className="fx-stagger m-0 [display:grid] list-none gap-px self-start overflow-hidden rounded-2xl border p-0" style={{ borderColor: LINE, background: LINE }}>
            {APP_PROBLEM.solutions.map((s, i) => (
              <li key={s} className="flex items-center gap-4 bg-white px-5 py-4">
                <span className="text-[0.7rem] font-bold" style={{ color: GOLD }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.95rem] font-semibold" style={{ color: NAVY }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* ══════ 3. CUSTOM APPS ══════ */}
      <Band tone="mist" label="Custom apps built around your business">
        <div className="container">
          <div className="max-w-3xl">
            <Kicker>{APP_EXPERIENCE.labels.why}</Kicker>
            <div className="fx-head">
              <Title lines={APP_CUSTOM.titleLines} />
            </div>
            <Lead>{APP_CUSTOM.intro}</Lead>
          </div>
          <ul className="fx-stagger m-0 mt-10 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {APP_CUSTOM.focus.map((f, i) => (
              <li
                key={f}
                className="flex items-center gap-3 rounded-xl border bg-white px-4 py-4"
                style={{ borderColor: LINE }}
              >
                <span
                  className="grid size-8 shrink-0 place-items-center rounded-lg text-[0.7rem] font-bold"
                  style={{ background: "rgba(40,111,171,0.1)", color: BLUE }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.92rem] font-medium" style={{ color: NAVY }}>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* ══════ 4. WHY CHOOSE — bento ══════ */}
      <Band label="Why choose Digivanta">
        <div className="container">
          <div className="max-w-3xl">
            <Kicker>{APP_EXPERIENCE.labels.why}</Kicker>
            <div className="fx-head">
              <Title lines={["Built by a team", "that ships"]} />
            </div>
          </div>
          <div className="fx-stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {APP_WHY_CHOOSE.map((r, i) => (
              <article
                key={r.title}
                className={
                  "group relative overflow-hidden rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-1.5 " +
                  (i === 0 ? "sm:col-span-2" : "")
                }
                style={{ borderColor: LINE, background: i === 0 ? MIST : "#fff" }}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, ${BLUE}, ${GOLD})` }}
                />
                <span
                  className="grid size-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "rgba(40,111,171,0.1)", color: BLUE }}
                >
                  <AppIcon name={r.icon} size={20} />
                </span>
                <h3 className="m-0 mt-5 text-[1.08rem] font-bold" style={{ color: NAVY }}>{r.title}</h3>
                <p className="m-0 mt-2 text-[0.92rem] leading-relaxed" style={{ color: MUTED }}>{r.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </Band>

      {/* ══════ 5. TECH STACK — dark editorial ══════ */}
      <Band tone="navy" label="Technology stack">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(80% 100% at 80% 0%, rgba(40,111,171,0.4), transparent 60%)" }}
        />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Kicker light>{APP_EXPERIENCE.labels.stack}</Kicker>
            <div className="fx-head">
              <Title lines={APP_EXPERIENCE.stackTitle} light />
            </div>
            <Lead light>{APP_EXPERIENCE.stackIntro}</Lead>
          </div>

          <div className="fx-stagger mt-10 border-t border-white/12">
            {APP_TECH.map((g) => (
              <div key={g.group} className="grid gap-4 border-b border-white/12 py-6 md:grid-cols-[15rem_1fr] md:items-center md:gap-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl" style={{ background: "rgba(201,162,39,0.16)", color: GOLD }}>
                    <AppIcon name={g.icon} size={19} />
                  </span>
                  <h3 className="m-0 text-[1.05rem] font-bold text-white">{g.group}</h3>
                </div>
                <ul className="m-0 flex list-none flex-wrap items-center gap-2 p-0">
                  {g.items.map((it) => (
                    <li key={it} className="rounded-lg border border-white/12 px-3 py-1.5 text-[0.84rem] text-slate-300">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Band>

      {/* ══════ 6. PLATFORMS ══════ */}
      <Band label="Platforms we build for">
        <div className="container">
          <div className="max-w-3xl">
            <Kicker>{APP_EXPERIENCE.labels.platforms}</Kicker>
            <div className="fx-head">
              <Title lines={APP_EXPERIENCE.platformTitle} />
            </div>
            <Lead>{APP_EXPERIENCE.platformIntro}</Lead>
          </div>
          <div className="fx-stagger mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {APP_PLATFORMS.map((p) => {
              const PlatformLogo = PLATFORM_LOGOS[p.name];
              return (
                <article
                  key={p.name}
                  className="group rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-1.5"
                  style={{ borderColor: LINE, background: "#fff" }}
                >
                  <span
                    className="grid size-12 place-items-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `linear-gradient(140deg, ${NAVY}, ${BLUE})` }}
                  >
                    <PlatformLogo aria-hidden size={24} />
                  </span>
                  <h3 className="m-0 mt-5 text-[1.08rem] font-bold" style={{ color: NAVY }}>{p.name}</h3>
                  <p className="m-0 mt-2 text-[0.9rem] leading-relaxed" style={{ color: MUTED }}>{p.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Band>

      {/* ══════ 7. INDUSTRIES — pinned on desktop ══════ */}
      <section className="fx-gallery relative overflow-hidden py-14 sm:py-20 lg:py-24" style={{ background: MIST }} aria-label="Industry app solutions">
        <div className="container">
          <div className="max-w-3xl">
            <Kicker>{APP_EXPERIENCE.labels.industries}</Kicker>
            <div className="fx-head">
              <Title lines={APP_EXPERIENCE.industryTitle} />
            </div>
          </div>
        </div>
        <div className="mt-10 overflow-hidden max-lg:container">
          <div
            ref={track}
            className="fx-stagger grid gap-4 sm:grid-cols-2 lg:flex lg:w-max lg:gap-6 lg:pl-[max(1rem,calc((100vw-1280px)/2))] lg:pr-[8vw]"
          >
            {APP_INDUSTRIES.map((ind) => (
              <article
                key={ind.name}
                className="group overflow-hidden rounded-2xl border bg-white transition-shadow duration-300 hover:shadow-[0_28px_60px_-28px_rgba(12,36,61,0.5)] lg:w-[320px] lg:shrink-0"
                style={{ borderColor: LINE }}
              >
                <div className="relative h-40 overflow-hidden">
                  <div className={"absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-105 " + ind.grad} />
                  <div aria-hidden className="absolute inset-0 grid place-items-center text-white/90">
                    <AppIcon name={ind.icon} size={42} strokeWidth={1.4} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="m-0 text-[1.08rem] font-bold" style={{ color: NAVY }}>{ind.name}</h3>
                  <p className="m-0 mt-2 text-[0.9rem] leading-relaxed" style={{ color: MUTED }}>{ind.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 8. INLINE CTA — typography moment ══════ */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ background: "#fff" }} aria-label="Discuss your app idea">
        <div className="container text-center">
          <div className="fx-head mx-auto max-w-4xl">
            <Title lines={[APP_EXPERIENCE.band.title]} size="text-[clamp(1.8rem,5vw,3.6rem)]" className="mx-auto" />
          </div>
          <p className="fx-up mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed" style={{ color: MUTED }}>
            {APP_EXPERIENCE.band.desc}
          </p>
          <div className="fx-up mt-8 flex justify-center">
            <span data-magnetic className="inline-flex">
              <Cta href="#app-contact" tone="gold">{APP_EXPERIENCE.band.button}</Cta>
            </span>
          </div>
        </div>
      </section>

      {/* ══════ 9. PROCESS — sticky device storytelling ══════ */}
      <Band tone="mist" label="App development process">
        <div className="container">
          <div className="max-w-3xl">
            <Kicker>{APP_EXPERIENCE.labels.process}</Kicker>
            <div className="fx-head">
              <Title lines={APP_EXPERIENCE.processTitle} />
            </div>
            <Lead>{APP_EXPERIENCE.processIntro}</Lead>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* device — sticky on desktop only */}
            <div className="hidden lg:sticky lg:top-24 lg:block lg:h-[78vh] lg:self-start">
              <div className="flex h-full items-center justify-center">
                <div className="relative">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute top-1/2 left-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(40,111,171,0.16), transparent 68%)" }}
                  />
                  <PhoneFrame className="relative">
                    {STEP_SCREENS.map((screen, i) => (
                      <div key={i} data-i={i} className="build-screen absolute inset-0" style={{ opacity: i === 0 ? 1 : 0 }}>
                        {screen}
                      </div>
                    ))}
                  </PhoneFrame>
                </div>
              </div>
            </div>

            {/* steps */}
            <ol className="relative m-0 list-none space-y-8 p-0 lg:space-y-16">
              <span aria-hidden className="absolute bottom-2 left-[22px] top-2 w-0.5" style={{ background: LINE }} />
              <span
                aria-hidden
                className="build-bar absolute bottom-2 left-[22px] top-2 w-0.5 origin-top"
                style={{ background: `linear-gradient(180deg, ${BLUE}, ${GOLD})`, transform: "scaleY(0.16)" }}
              />
              {APP_PROCESS.map((s) => (
                <li key={s.step} className="build-step relative flex gap-5">
                  <span
                    className="relative z-[1] grid size-11 shrink-0 place-items-center rounded-full text-[0.82rem] font-bold text-white"
                    style={{ background: BLUE }}
                  >
                    {s.step}
                  </span>
                  <div className="pt-1">
                    <h3 className="m-0 text-[1.08rem] font-bold" style={{ color: NAVY }}>{s.title}</h3>
                    <p className="m-0 mt-2 text-[0.92rem] leading-relaxed" style={{ color: MUTED }}>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Band>

      {/* ══════ 10. SUPPORT ══════ */}
      <Band label="Post-launch support">
        <div className="container">
          <div className="max-w-3xl">
            <Kicker>{APP_EXPERIENCE.labels.support}</Kicker>
            <div className="fx-head">
              <Title lines={APP_EXPERIENCE.supportTitle} />
            </div>
            <Lead>{APP_EXPERIENCE.supportIntro}</Lead>
          </div>
          <ul className="fx-stagger m-0 mt-10 grid list-none gap-3 p-0 sm:grid-cols-2">
            {APP_SUPPORT.map((s) => (
              <li key={s} className="flex items-center gap-3 rounded-xl border px-4 py-4" style={{ borderColor: LINE }}>
                <span className="grid size-7 shrink-0 place-items-center rounded-lg text-white" style={{ background: BLUE }}>
                  <Check aria-hidden size={14} strokeWidth={3} />
                </span>
                <span className="text-[0.92rem] font-medium" style={{ color: NAVY }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* ══════ 11. AI ══════ */}
      <Band tone="ink" label="AI-powered applications">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(70% 100% at 20% 0%, rgba(40,111,171,0.35), transparent 60%)" }}
        />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Kicker light>{APP_EXPERIENCE.labels.ai}</Kicker>
            <div className="fx-head">
              <Title lines={APP_AI.titleLines} light />
            </div>
            <Lead light>{APP_AI.intro}</Lead>
          </div>
          <ul className="fx-stagger m-0 mt-10 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {APP_AI.features.map((f) => (
              <li
                key={f.title}
                className="group flex items-center gap-4 rounded-2xl border border-white/12 p-5 transition-colors duration-300 hover:border-white/25"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <span
                  className="grid size-11 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "rgba(201,162,39,0.16)", color: GOLD }}
                >
                  <AppIcon name={f.icon} size={20} />
                </span>
                <h3 className="m-0 text-[0.98rem] font-bold text-white">{f.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* ══════ 12. ENTERPRISE — asymmetric ══════ */}
      <Band label="Enterprise app development">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <Kicker>{APP_EXPERIENCE.labels.enterprise}</Kicker>
            <div className="fx-head">
              <Title lines={APP_ENTERPRISE.titleLines} />
            </div>
            <Lead>{APP_ENTERPRISE.intro}</Lead>
          </div>
          <ul className="fx-stagger m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
            {APP_ENTERPRISE.points.map((p, i) => (
              <li
                key={p}
                className="rounded-2xl border p-5"
                style={{ borderColor: LINE, background: i % 3 === 0 ? MIST : "#fff" }}
              >
                <span className="text-[0.7rem] font-bold" style={{ color: GOLD }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="m-0 mt-4 text-[0.98rem] font-semibold leading-snug" style={{ color: NAVY }}>{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* ══════ 13. PRICING ══════ */}
      <Band tone="mist" id="app-pricing" label="Pricing approach">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Kicker>{APP_EXPERIENCE.labels.pricing}</Kicker>
            </div>
            <div className="fx-head">
              <Title lines={APP_PRICING.titleLines} className="mx-auto" />
            </div>
            <Lead className="mx-auto">{APP_PRICING.intro}</Lead>
          </div>

          <div className="fx-stagger mt-10 grid gap-5 lg:grid-cols-3">
            {APP_PRICING.plans.map((plan) => (
              <article
                key={plan.name}
                className={"relative rounded-2xl border p-6 sm:p-7 " + (plan.featured ? "lg:-translate-y-3" : "")}
                style={
                  plan.featured
                    ? { borderColor: BLUE, background: NAVY, boxShadow: "0 30px 60px -30px rgba(12,36,61,0.8)" }
                    : { borderColor: LINE, background: "#fff" }
                }
              >
                {plan.featured && (
                  <span
                    className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[0.66rem] font-bold uppercase tracking-wide"
                    style={{ background: GOLD, color: NAVY }}
                  >
                    Most popular
                  </span>
                )}
                <h3 className="m-0 text-[1.25rem] font-bold" style={{ color: plan.featured ? "#fff" : NAVY }}>{plan.name}</h3>
                <p className="m-0 mt-3 text-[0.92rem] leading-6" style={{ color: plan.featured ? "rgba(255,255,255,0.62)" : MUTED }}>
                  {plan.desc}
                </p>
                <ul className="m-0 mt-6 grid list-none gap-3 p-0">
                  {plan.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-[0.9rem]" style={{ color: plan.featured ? "rgba(255,255,255,0.85)" : NAVY }}>
                      <Check aria-hidden className="size-4 shrink-0" style={{ color: GOLD }} strokeWidth={3} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <a
                    href="#app-contact"
                    className="inline-flex min-h-[44px] items-center gap-2 text-[0.8rem] font-bold uppercase tracking-[0.12em]"
                    style={{ color: plan.featured ? GOLD : BLUE }}
                  >
                    {APP_EXPERIENCE.estimateCta}
                    <ArrowRight aria-hidden className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Band>

      {/* ══════ 14. DEDICATED DEVELOPERS ══════ */}
      <Band label="Hire dedicated app developers">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <Kicker>{APP_EXPERIENCE.labels.dedicated}</Kicker>
            <div className="fx-head">
              <Title lines={APP_DEDICATED.titleLines} />
            </div>
            <Lead>{APP_DEDICATED.intro}</Lead>
            <div className="fx-up mt-8">
              <span data-magnetic className="inline-flex">
                <Cta href="#app-contact">{APP_EXPERIENCE.dedicatedCta}</Cta>
              </span>
            </div>
          </div>
          <ul className="fx-stagger m-0 grid list-none grid-cols-2 gap-3 p-0 sm:gap-4">
            {APP_DEDICATED.supports.map((item, i) => (
              <li key={item} className="rounded-2xl border p-4 sm:p-5" style={{ borderColor: LINE, background: i % 2 === 0 ? "#fff" : MIST }}>
                <span className="text-[0.7rem] font-bold" style={{ color: GOLD }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="m-0 mt-4 text-[0.92rem] font-semibold leading-snug" style={{ color: NAVY }}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* ══════ 15. RESULTS ══════ */}
      <Band tone="navy" label="Results and statistics">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(70% 110% at 50% 0%, rgba(40,111,171,0.4), transparent 62%)" }}
        />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Kicker light>{APP_EXPERIENCE.labels.results}</Kicker>
            </div>
            <div className="fx-head">
              <Title lines={APP_EXPERIENCE.resultsTitle} light className="mx-auto" />
            </div>
          </div>

          <div className="mt-12 grid gap-8 border-y border-white/12 py-10 sm:grid-cols-3">
            {APP_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="m-0 text-[clamp(2.4rem,7vw,4rem)] font-bold leading-none tracking-[-0.05em] text-white">
                  <span data-count={s.value}>0</span>
                  <span style={{ color: GOLD }}>{s.suffix}</span>
                </p>
                <p className="m-0 mt-3 text-[0.86rem] text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>

          <ul className="fx-stagger m-0 mt-8 flex list-none flex-wrap justify-center gap-2 p-0">
            {APP_GLANCE.map((g) => (
              <li key={g} className="rounded-full border border-white/15 px-4 py-2 text-[0.82rem] text-slate-300">
                {g}
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* ══════ 16. FAQ ══════ */}
      <Band label="Frequently asked questions">
        <div className="container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Kicker>{APP_EXPERIENCE.labels.faq}</Kicker>
            <div className="fx-head">
              <Title lines={APP_EXPERIENCE.faqTitle} />
            </div>
          </div>
          <div className="fx-up border-t" style={{ borderColor: LINE }}>
            {APP_FAQS.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.question} className="border-b" style={{ borderColor: LINE }}>
                  <h3 className="m-0">
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full min-h-[56px] items-start justify-between gap-4 py-5 text-left"
                    >
                      <span className="flex items-start gap-3">
                        <span className="pt-0.5 text-[0.7rem] font-bold" style={{ color: GOLD }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[0.98rem] font-semibold leading-snug" style={{ color: NAVY }}>
                          {item.question}
                        </span>
                      </span>
                      <Plus
                        aria-hidden
                        className={"size-5 shrink-0 transition-transform duration-300 " + (open ? "rotate-45" : "")}
                        style={{ color: MUTED }}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-button-${i}`}
                    hidden={!open}
                    className="pb-6 pl-9 pr-6"
                  >
                    <p className="m-0 max-w-2xl text-[0.92rem] leading-7" style={{ color: MUTED }}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Band>

      {/* ══════ 17. FINAL CTA ══════ */}
      <section
        id="app-contact"
        className="relative overflow-hidden py-16 text-center sm:py-20 lg:py-28"
        style={{ background: NAVY }}
        aria-label="Contact Digivanta"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(700px 420px at 50% 0%, rgba(40,111,171,0.5), transparent 64%)" }}
        />
        <div className="container relative z-10">
          <p className="fx-up m-0 text-[0.72rem] font-bold uppercase tracking-[0.24em]" style={{ color: GOLD }}>
            {APP_EXPERIENCE.cta.eyebrow}
          </p>
          <div className="fx-head mt-5">
            <Title lines={APP_EXPERIENCE.cta.titleLines} light className="mx-auto max-w-4xl" size="text-[clamp(2rem,6vw,4.4rem)]" />
          </div>
          <p className="fx-up mx-auto mt-6 max-w-2xl text-[0.98rem] leading-7 text-white/60">{APP_EXPERIENCE.cta.desc}</p>
          <div className="fx-up mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <span data-magnetic className="inline-flex justify-center">
              <Cta href={CONTACT.whatsapp} tone="gold" external>
                {APP_EXPERIENCE.cta.primary}
              </Cta>
            </span>
            <Cta href={CONTACT.phoneHref} tone="outlineLight">
              {APP_EXPERIENCE.cta.secondary}
            </Cta>
          </div>
        </div>
      </section>
    </div>
  );
}
