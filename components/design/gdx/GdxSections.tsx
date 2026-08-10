"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import Image from "next/image";
import { Poster, PosterDeck } from "@/components/design/gdx/PosterDeck";
import { GD_DECK, GD_HERO, GD_WORK, GD_IMPACT, GD_PROBLEM, GD_SERVICES, GD_WHY } from "@/lib/design-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Strictly the brand palette used across the other service pages —
   navy / blue / gold, plus deeper tints of the same hues for range.
   Backgrounds use --gd-soft so this page matches the rest of the site. */
const NAVY = "#0C243D";
const BLUE = "#286FAB";
const GOLD = "#b08d3f";
const DEEP_BLUE = "#1B4F7A";
const DEEP_GOLD = "#8A6F31";
const SOFT = "var(--gd-soft)";
/* on-dark tints of the same navy/blue/gold — lightened for contrast
   against the hero panel, never a new hue */
const LIGHT_GOLD = "#e4c766";
const LIGHT_BLUE = "#7fb4dc";

const SERVICE_COLORS = [NAVY, BLUE, GOLD, DEEP_BLUE, DEEP_GOLD];

/* Two posters from the hero deck, reused as fanned accents so text-only
   sections get some material without faking client work. */
const POSTER_ACCENTS = [
  { i: 3, right: "9rem", rot: -7, z: 10 },
  { i: 1, right: "0.5rem", rot: 6, z: 20 },
];

/* Readable ink for a solid colour block — gold is too light to carry
   white body text, so it flips to navy. */
function inkOn(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  const lum = (0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
  return lum > 0.55 ? NAVY : "#ffffff";
}

/* ── shared bits ─────────────────────────────────────────────────── */

function Kicker({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className="gdx-up m-0 mb-6 flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.3em]"
      style={{ color: light ? "#e4c766" : GOLD }}
    >
      <span aria-hidden className="h-px w-10" style={{ background: light ? "#e4c766" : GOLD }} />
      {children}
    </p>
  );
}

/* Oversized display heading — solid line + outline line, mask-revealed. */
function Mega({
  lines,
  light,
  className = "",
  size = "text-[clamp(2.4rem,7vw,5.6rem)]",
}: {
  lines: readonly string[];
  light?: boolean;
  className?: string;
  size?: string;
}) {
  return (
    <h2 className={"gdx-mega m-0 font-bold uppercase leading-[0.92] tracking-[-0.045em] " + size + " " + className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <span
            className="gdx-line inline-block will-change-transform"
            style={
              i === lines.length - 1
                ? { color: "transparent", WebkitTextStroke: `2px ${light ? "rgba(255,255,255,.65)" : NAVY}` }
                : { color: light ? "#fff" : NAVY }
            }
          >
            {line}
          </span>
        </span>
      ))}
    </h2>
  );
}

/* ── 1. HERO — the 0.05s idea told as a giant graphic ────────────── */
export function GdxHero() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(".gdx-hero__eyebrow", { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6 })
        .fromTo(".gdx-hero__line > span", { yPercent: 118, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 1, stagger: 0.1 }, "-=0.25")
        .fromTo(".gdx-hero__sub", { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, "-=0.6")
        .fromTo(".gdx-hero__ctas > *", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1 }, "-=0.45")
        .fromTo(".gdx-hero__arc", { scale: 0.82, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1.2, stagger: 0.08 }, "-=0.7")
        .fromTo(".gdx-hero__meta > *", { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08 }, "-=0.4")
        .fromTo(".gdx-hero__lab", { y: 34, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9 }, "-=1.1");
    }, root);
    return () => ctx.revert();
  }, []);

  /* inset card: the top gap matches the side gutters (mx-3/sm:mx-5),
     so it tucks straight under the sticky header */
  return (
    <section ref={root} className="relative mx-3 mt-3 overflow-hidden rounded-[28px] bg-[#07111d] pb-10 pt-12 text-white sm:mx-5 sm:mt-5 sm:pt-14 lg:mx-auto lg:mt-6 lg:max-w-[calc(100%-48px)] lg:pb-14 lg:pt-16">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div aria-hidden className="pointer-events-none absolute -bottom-[24rem] -right-[22rem] size-[46rem] sm:-bottom-[29rem] sm:-right-[20rem] sm:size-[58rem] lg:-bottom-[30rem] lg:-right-[16rem] lg:size-[64rem]">
        {[0, 1, 2, 3, 4, 5, 6].map((ring) => (
          <span key={ring} className="gdx-hero__arc absolute rounded-full border border-white/[0.13]" style={{ inset: `${ring * 6.5}%` }} />
        ))}
      </div>

      {/* [display:grid] instead of `grid`: globals.css has an unlayered
          `.grid { gap: 1.25rem }` that outranks Tailwind's gap utilities */}
      <div className="container relative z-10 [display:grid] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] xl:gap-20">
        <div>
          <p className="gdx-hero__eyebrow m-0 inline-flex items-center gap-3 text-[0.66rem] font-bold uppercase tracking-[0.24em] text-white/70">
            <span aria-hidden className="h-px w-9" style={{ background: LIGHT_GOLD }} />
            {GD_HERO.badge}
          </p>

          {/* solid → outline → colour: the headline demonstrates range
              rather than just stating it */}
          <h1 className="m-0 mt-5 font-bold uppercase leading-[0.94] text-[clamp(2.15rem,4.6vw,4rem)]">
            {GD_HERO.titleLines.map((line, i) => (
              <span key={i} className="gdx-hero__line block overflow-hidden pb-[0.06em]">
                <span
                  className="inline-block will-change-transform"
                  style={
                    i === 1
                      ? { color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.62)" }
                      : i === 2
                        ? { color: LIGHT_BLUE, letterSpacing: "-0.02em" }
                        : { color: "#ffffff" }
                  }
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="gdx-hero__sub m-0 mt-6 max-w-xl text-[0.92rem] leading-[1.7] text-white/65 sm:text-[1rem]">
            {GD_HERO.sub}
          </p>

          <div className="gdx-hero__ctas mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <MagneticButton href="#contact" className="!bg-[#e4c766] !text-[#07111d]">
              {GD_HERO.primaryCta} <ArrowRight />
            </MagneticButton>
            <a
              href="#process"
              className="inline-flex min-h-12 items-center gap-3 border-b border-white/40 px-1 text-sm font-bold text-white transition-colors hover:border-[#e4c766] hover:text-[#e4c766]"
            >
              {GD_HERO.ghostCta} <ArrowRight />
            </a>
          </div>

          <div className="gdx-hero__meta mt-9 [display:grid] grid-cols-3 gap-x-5 border-t border-white/15 pt-6">
            {GD_HERO.meta.map((m) => (
              <div key={m.l}>
                <div className="font-bold leading-none text-[clamp(1.3rem,3.2vw,2.15rem)] text-white">{m.n}</div>
                <div className="mt-2 text-[0.66rem] leading-snug text-white/45 sm:text-[0.76rem]">{m.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* abstract poster art — the real work lives in GdxWork below */}
        <div className="gdx-hero__lab flex flex-col items-center lg:items-end">
          <PosterDeck />
          <p className="m-0 mt-5 max-w-[460px] border-l pl-5 text-sm leading-relaxed text-white/45" style={{ borderColor: "rgba(228,199,102,0.5)" }}>
            {GD_HERO.sideNote}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── 2. COST OF POOR DESIGN — rows flood with colour ─────────────── */
export function GdxCost() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gdx-line",
        { yPercent: 116, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.95,
          stagger: 0.09,
          ease: "power4.out",
          scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
        }
      );
      gsap.fromTo(
        ".gdx-cost__row",
        { yPercent: 40, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gdx-cost__list", start: "top 82%", once: true },
        }
      );
      gsap.utils.toArray<HTMLElement>(".gdx-up").forEach((el) =>
        gsap.fromTo(
          el,
          { y: 26, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } }
        )
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden py-12 sm:py-16" style={{ background: "#fff" }}>
      <div className="container">
        {/* heading left, poster accents filling the empty top-right */}
        <div className="[display:grid] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Kicker>The cost of poor design</Kicker>
            <Mega lines={["Bad design", "is expensive."]} />
            <p className="gdx-up mt-6 max-w-2xl text-[1rem] leading-[1.8]" style={{ color: "#5b6478" }}>
              {GD_PROBLEM.intro}
            </p>
          </div>

          <div aria-hidden className="gdx-up relative hidden h-[19rem] lg:block">
            {POSTER_ACCENTS.map((a) => {
              const p = GD_DECK.posters[a.i];
              return (
                <div
                  key={p.id}
                  className="absolute top-1/2 w-[13.5rem] overflow-hidden rounded-[12px] shadow-[0_26px_56px_rgba(12,36,61,0.22)]"
                  style={{
                    right: a.right,
                    aspectRatio: "3 / 4",
                    transform: `translateY(-50%) rotate(${a.rot}deg)`,
                    zIndex: a.z,
                  }}
                >
                  <Poster id={p.id} lines={p.lines} label={p.label} n={`0${a.i + 1}`} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="gdx-cost__list mt-8">
          {GD_PROBLEM.pains.map((p, i) => {
            const c = SERVICE_COLORS[i % SERVICE_COLORS.length];
            return (
              <div key={p.title} className="border-t" style={{ borderColor: "rgba(12,36,61,.14)" }}>
                {/* Colour lives in the number chip and a light tint, never
                    behind the copy — a full-saturation flood put navy text
                    on a navy ground and made the row unreadable. */}
                <div
                  className="gdx-cost__row group relative [display:grid] items-center gap-x-5 gap-y-2 rounded-[10px] px-3 py-4 transition-colors duration-400 hover:bg-[var(--tint)] md:grid-cols-[3.6rem_1.1fr_1fr]"
                  style={{ ["--c" as string]: c, ["--tint" as string]: `${c}12` }}
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-1/2 h-0 w-[3px] -translate-y-1/2 rounded-full transition-all duration-400 group-hover:h-[68%]"
                    style={{ background: c }}
                  />

                  <span
                    className="grid size-[3.1rem] shrink-0 place-items-center rounded-[10px] text-[1rem] font-bold transition-transform duration-400 group-hover:scale-105"
                    style={{ background: c, color: inkOn(c) }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3
                    className="m-0 font-bold uppercase leading-none tracking-[-0.03em] text-[clamp(1.2rem,3vw,2rem)] transition-transform duration-400 group-hover:translate-x-1.5"
                    style={{ color: NAVY }}
                  >
                    {p.title}
                  </h3>

                  <p className="m-0 max-w-sm text-[0.94rem] leading-relaxed" style={{ color: "#5b6478" }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="border-t" style={{ borderColor: "rgba(12,36,61,.14)" }} />
        </div>

        <div className="gdx-up mt-9">
          <MagneticButton href="#contact">
            {GD_PROBLEM.cta} <ArrowRight />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

/* ── 3. SERVICES — solid colour blocks, one hue per service ──────── */
export function GdxServices() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gdx-line",
        { yPercent: 116, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.95,
          stagger: 0.09,
          ease: "power4.out",
          scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
        }
      );
      gsap.fromTo(
        ".gdx-serv__card",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gdx-serv__grid", start: "top 85%", once: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="services" className="relative overflow-hidden py-12 sm:py-16" style={{ background: SOFT }}>
      <div className="container">
        <Kicker>What we create</Kicker>
        <Mega lines={GD_SERVICES.titleLines} />
        <p className="gdx-up mt-6 max-w-2xl text-[1rem] leading-[1.8]" style={{ color: "#5b6478" }}>
          {GD_SERVICES.intro}
        </p>

        {/* first card spans two columns so the five services fill two
            rows exactly (2+1 / 1+1+1) with no ragged gap */}
        <div className="gdx-serv__grid mt-8 [display:grid] gap-3 sm:gap-4 md:grid-cols-3">
          {GD_SERVICES.items.map((s, i) => {
            const c = SERVICE_COLORS[i % SERVICE_COLORS.length];
            const ink = inkOn(c);
            return (
              <article
                key={s.title}
                className={
                  "gdx-serv__card group relative overflow-hidden rounded-[18px] p-6 transition-transform duration-500 hover:-translate-y-1.5 sm:p-7 " +
                  (i === 0 ? "md:col-span-2" : "")
                }
                style={{ background: c }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 -top-6 font-bold leading-none tracking-[-0.05em] text-[6rem] transition-transform duration-700 group-hover:scale-110 sm:text-[8rem]"
                  style={{ color: ink, opacity: 0.13 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3
                  className="relative m-0 max-w-[15ch] font-bold uppercase leading-[0.98] tracking-[-0.03em] text-[clamp(1.25rem,2.4vw,1.9rem)]"
                  style={{ color: ink }}
                >
                  {s.title}
                </h3>
                <p className="relative mb-0 mt-2.5 max-w-md text-[0.9rem] leading-relaxed" style={{ color: ink, opacity: 0.75 }}>
                  {s.desc}
                </p>
                <ul className="relative m-0 mt-4 flex list-none flex-wrap gap-1.5 p-0">
                  {s.points.map((pt) => (
                    <li
                      key={pt}
                      className="rounded-full px-3 py-1 text-[0.72rem] font-semibold"
                      style={{ background: ink === "#ffffff" ? "rgba(255,255,255,0.16)" : "rgba(12,36,61,0.14)", color: ink }}
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --- 3b. SELECTED WORK - big type, image reveals on hover ---------
   One row per PROJECT, discipline shown as a tag. Adding work is just
   another entry in GD_WORK.projects; the filter chips derive themselves
   from the distinct type values and appear once the list is long
   enough to need them. */
export function GdxWork() {
  const root = useRef<HTMLElement | null>(null);
  const preview = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(-1);
  const [filter, setFilter] = useState("All");
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  const all = GD_WORK.projects;
  const types = Array.from(new Set(all.map((p) => p.type)));
  /* chips only earn their space once there is a real list to sift */
  const showFilters = types.length > 1 && all.length >= 4;
  const shown = filter === "All" ? all : all.filter((p) => p.type === filter);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gdx-line",
        { yPercent: 116, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.95,
          stagger: 0.09,
          ease: "power4.out",
          scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
        }
      );
      gsap.fromTo(
        ".gdx-work__row",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gdx-work__list", start: "top 85%", once: true },
        }
      );

      /* the reveal panel trails the cursor - pointer-fine only, since a
         hover preview is meaningless on touch */
      const el = preview.current;
      const list = root.current?.querySelector<HTMLElement>(".gdx-work__list");
      if (!el || !list || window.matchMedia("(pointer: coarse)").matches) return;
      const xTo = gsap.quickTo(el, "x", { duration: 0.55, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.55, ease: "power3.out" });
      const onMove = (e: PointerEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };
      list.addEventListener("pointermove", onMove);
      return () => list.removeEventListener("pointermove", onMove);
    }, root);
    return () => ctx.revert();
  }, []);

  /* rows swapped in by a filter never met the scroll trigger, so fade
     them in here instead of letting them pop */
  useEffect(() => {
    if (reduced() || filter === "All") return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gdx-work__row",
        { y: 18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.06, ease: "power3.out" }
      );
    }, root);
    return () => ctx.revert();
  }, [filter]);

  return (
    <section ref={root} className="relative overflow-hidden py-12 sm:py-16" style={{ background: "#fff" }}>
      <div className="container">
        <Kicker>{GD_WORK.label}</Kicker>
        <Mega lines={GD_WORK.titleLines} size="text-[clamp(2rem,5vw,3.8rem)]" />

        {showFilters && (
          <div className="mt-8 flex flex-wrap gap-2">
            {["All", ...types].map((t) => {
              const on = filter === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setFilter(t);
                    setHover(-1);
                  }}
                  className="rounded-full border px-4 py-2 text-[0.76rem] font-semibold transition-colors duration-300"
                  style={{
                    borderColor: on ? NAVY : "rgba(12,36,61,.16)",
                    background: on ? NAVY : "transparent",
                    color: on ? "#ffffff" : "#5b6478",
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>
        )}

        <div
          className="gdx-work__list mt-8 border-t"
          style={{ borderColor: "rgba(12,36,61,.14)" }}
          onPointerLeave={() => setHover(-1)}
        >
          {shown.map((p, i) => {
            const dim = hover !== -1 && hover !== i;
            return (
              <div
                key={p.id}
                className="gdx-work__row group border-b"
                style={{ borderColor: "rgba(12,36,61,.14)" }}
                onPointerEnter={() => setHover(i)}
              >
                <div className="flex items-center gap-5 py-7 sm:gap-8 sm:py-9">
                  <span
                    className="shrink-0 text-[0.72rem] font-bold tracking-[0.16em] transition-colors duration-400"
                    style={{ color: hover === i ? GOLD : "rgba(12,36,61,.3)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3
                    className="m-0 flex-1 font-bold uppercase leading-none tracking-[-0.035em] text-[clamp(1.6rem,5.5vw,3.6rem)] transition-all duration-400 group-hover:translate-x-3"
                    style={{ color: NAVY, opacity: dim ? 0.25 : 1 }}
                  >
                    {p.name}
                  </h3>

                  <span
                    className="hidden shrink-0 rounded-full px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] transition-opacity duration-400 sm:block"
                    style={{ background: "rgba(12,36,61,.06)", color: "#5b6478", opacity: dim ? 0.25 : 1 }}
                  >
                    {p.type}
                  </span>
                  <ArrowRight />
                </div>

                {/* touch devices get the shot inline - no hover to trigger on */}
                <div
                  className="relative mb-7 w-full overflow-hidden rounded-[14px] md:hidden"
                  style={{ aspectRatio: "4 / 3", background: p.bg }}
                >
                  <WorkShot p={p} failed={!!failed[p.id]} onFail={() => setFailed((f) => ({ ...f, [p.id]: true }))} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* cursor-trailing reveal */}
      <div
        ref={preview}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden w-[22rem] -translate-x-1/2 -translate-y-1/2 md:block"
        style={{ opacity: hover === -1 ? 0 : 1, transition: "opacity .35s ease" }}
      >
        {shown.map((p, i) => (
          <div
            key={p.id}
            className="absolute inset-0 overflow-hidden rounded-[14px] shadow-[0_30px_70px_rgba(12,36,61,0.3)] transition-all duration-400"
            style={{
              background: p.bg,
              aspectRatio: p.contain ? "16 / 6.5" : "16 / 10",
              opacity: hover === i ? 1 : 0,
              transform: hover === i ? "scale(1)" : "scale(0.92)",
            }}
          >
            <WorkShot p={p} failed={!!failed[p.id]} onFail={() => setFailed((f) => ({ ...f, [p.id]: true }))} />
          </div>
        ))}
        {/* spacer that gives the absolutely-positioned shots their box */}
        <div style={{ aspectRatio: hover !== -1 && shown[hover]?.contain ? "16 / 6.5" : "16 / 10" }} />
      </div>
    </section>
  );
}

function WorkShot({
  p,
  failed,
  onFail,
}: {
  p: (typeof GD_WORK.projects)[number];
  failed: boolean;
  onFail: () => void;
}) {
  if (failed) {
    /* asset not added yet - name the slot rather than show a broken tile */
    return (
      <span className="flex size-full items-center justify-center p-4 text-center text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white/70">
        {p.name}
      </span>
    );
  }
  return (
    <div className="relative flex size-full items-center justify-center p-3.5 sm:p-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={p.src}
        alt={p.alt}
        className={p.contain ? "max-h-full max-w-full object-contain" : "h-full w-full object-cover object-top"}
        onError={onFail}
      />
    </div>
  );
}




/* ── 4. IMPACT — navy block, huge counters ───────────────────────── */
export function GdxImpact() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gdx-line",
        { yPercent: 116, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.95,
          stagger: 0.09,
          ease: "power4.out",
          scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
        }
      );
      gsap.fromTo(
        ".gdx-imp__item",
        { y: 34, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 74%", once: true },
        }
      );
      root.current?.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count) || 0;
        const o = { v: 0 };
        gsap.to(o, {
          v: end,
          duration: 1.9,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
          onUpdate: () => (el.textContent = String(Math.round(o.v))),
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden py-16 text-white sm:py-24" style={{ background: NAVY }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(700px 420px at 85% -10%, rgba(40,111,171,.5), transparent 62%)" }}
      />
      <div className="container relative">
        <Kicker light>Why design matters</Kicker>
        <Mega lines={GD_IMPACT.titleLines} light size="text-[clamp(2rem,5.4vw,4.2rem)]" />
        <p className="gdx-imp__item mt-8 max-w-2xl text-[1rem] leading-[1.8] text-white/60">{GD_IMPACT.intro}</p>

        {/* benefits as colour-tagged rows */}
        <ul className="m-0 mt-12 grid list-none gap-x-10 p-0 p-0 md:grid-cols-2">
          {GD_IMPACT.benefits.map((b, i) => (
            <li key={b} className="gdx-imp__item flex items-center gap-4 border-b border-white/12 py-5">
              <span className="size-2.5 shrink-0 rounded-full" style={{ background: SERVICE_COLORS[i % SERVICE_COLORS.length] }} />
              <span className="text-[1rem] font-semibold">{b}</span>
            </li>
          ))}
        </ul>

        {/* stats */}
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {GD_IMPACT.stats.map((s) => (
            <div key={s.label} className="gdx-imp__item">
              <p className="m-0 font-bold leading-none tracking-[-0.05em] text-[clamp(2.6rem,7vw,4.4rem)]">
                <span data-count={s.value}>0</span>
                <span style={{ color: "#e4c766" }}>{s.suffix}</span>
              </p>
              <p className="m-0 mt-3 text-[0.88rem] text-white/55">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 5. WHY US — checkerboard of solid colour and outline cells ──── */
/* Reordered so the three solid cells (0, 2, 4) never repeat a hue. */
const WHY_COLORS = [NAVY, BLUE, GOLD, DEEP_GOLD, DEEP_BLUE, BLUE];

export function GdxWhy() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gdx-line",
        { yPercent: 116, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.95,
          stagger: 0.09,
          ease: "power4.out",
          scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
        }
      );
      gsap.fromTo(
        ".gdx-why__intro",
        { y: 26, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        }
      );
      gsap.fromTo(
        ".gdx-why__cell",
        { y: 44, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.75,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gdx-why__grid", start: "top 85%", once: true },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden py-12 sm:py-16" style={{ background: SOFT }}>
      <div className="container">
        <Kicker>Why choose us</Kicker>
        <Mega lines={GD_WHY.titleLines} size="text-[clamp(2rem,5.4vw,4.2rem)]" />
        <p className="gdx-why__intro mt-6 max-w-2xl text-[1rem] leading-[1.8]" style={{ color: "#5b6478" }}>
          {GD_WHY.intro}
        </p>

        {/* [display:grid] not `grid` — globals.css has an unlayered
            `.grid { gap: 1.25rem }` that overrides gap utilities */}
        <div className="gdx-why__grid mt-10 [display:grid] gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {GD_WHY.points.map((p, i) => {
            const c = WHY_COLORS[i % WHY_COLORS.length];
            const solid = i % 2 === 0;
            const ink = solid ? inkOn(c) : NAVY;
            return (
              <article
                key={p.title}
                className="gdx-why__cell group relative flex min-h-[15rem] flex-col overflow-hidden rounded-[18px] p-7 transition-transform duration-500 hover:-translate-y-1.5"
                style={{
                  background: solid ? c : "#ffffff",
                  border: solid ? "1px solid transparent" : "1px solid rgba(12,36,61,.1)",
                }}
              >
                <span
                  className="font-bold leading-none tracking-[-0.04em] text-[2.6rem]"
                  style={solid ? { color: ink, opacity: 0.32 } : { color: c }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3
                  className="m-0 mt-auto pt-8 font-bold uppercase leading-tight tracking-[-0.02em] text-[1.15rem]"
                  style={{ color: ink }}
                >
                  {p.title}
                </h3>
                <p
                  className="m-0 mt-2.5 text-[0.92rem] leading-relaxed"
                  style={solid ? { color: ink, opacity: 0.75 } : { color: "#5b6478" }}
                >
                  {p.desc}
                </p>

                {/* outline cells get a colour rule that fills on hover */}
                {!solid && (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: c }}
                  />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
