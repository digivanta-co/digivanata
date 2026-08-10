"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight } from "@/components/ui/Icons";
import {
  AppScreen,
  DesignScreen,
  PhoneFrame,
  ScreenLayer,
  WireframeScreen,
} from "@/components/app-dev/story/Phone";
import { APP_EXPERIENCE, APP_HERO, APP_STATS } from "@/lib/app-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* One headline line split into characters for the 3D flip. */
function FlipLine({ text, variant }: { text: string; variant: "solid" | "outline" | "gradient" }) {
  if (!text) return null;
  const words = text.trim().split(/\s+/);
  return (
    <span className="block overflow-hidden [transform-style:preserve-3d]">
      <span
        className={
          "block [transform-style:preserve-3d] " +
          (variant === "gradient" ? "gd-grad" : variant === "outline" ? "text-transparent" : "text-[var(--gd-ink)]")
        }
        style={variant === "outline" ? { WebkitTextStroke: "2px rgba(13,18,41,0.55)" } : undefined}
      >
        {words.map((word, wi) => (
          <span key={wi}>
            <span className="inline-block whitespace-nowrap [transform-style:preserve-3d]">
              {/* no persistent will-change here — it breaks background-clip:text
                  on the .gd-grad line and hides the gradient headline */}
              {Array.from(word).map((ch, i) => (
                <span key={i} className="app-hero__char inline-block">
                  {ch}
                </span>
              ))}
            </span>
            {wi < words.length - 1 && " "}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function AppHeroSection() {
  const root = useRef<HTMLElement | null>(null);
  const phone = useRef<HTMLDivElement | null>(null);
  const [activeStage, setActiveStage] = useState(2);

  useEffect(() => {
    if (reduced()) return;
    const timer = window.setInterval(() => {
      setActiveStage((current) => (current + 1) % APP_HERO.stages.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      /* ---- entrance ---- */
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(".app-hero__eyebrow", { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 })
        .fromTo(
          ".app-hero__char",
          { rotateX: -95, yPercent: 120, autoAlpha: 0 },
          {
            rotateX: 0,
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.9,
            stagger: 0.018,
            ease: "back.out(1.4)",
            clearProps: "transform,willChange",
          },
          "-=0.3"
        )
        .fromTo(".app-hero__sub", { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, "-=0.5")
        .fromTo(".app-hero__ctas > *", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .fromTo(
          ".app-hero__stage",
          { y: 44, autoAlpha: 0, scale: 0.94 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 1 },
          "-=0.7"
        )
        .fromTo(
          ".app-hero__float",
          { scale: 0.5, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 0.55, stagger: 0.1, ease: "back.out(1.8)" },
          "-=0.5"
        )
        .fromTo(".app-hero__meta > *", { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08 }, "-=0.4");

      /* ---- mouse parallax: phone tilts toward the cursor, floats drift ---- */
      const mm = gsap.matchMedia();
      mm.add("(pointer: fine)", () => {
        const rotY = gsap.quickTo(phone.current, "rotationY", { duration: 0.7, ease: "power3.out" });
        const rotX = gsap.quickTo(phone.current, "rotationX", { duration: 0.7, ease: "power3.out" });
        const floats = gsap.utils.toArray<HTMLElement>(".app-hero__float");
        const setters = floats.map((el) => ({
          x: gsap.quickTo(el, "x", { duration: 0.9, ease: "power3.out" }),
          y: gsap.quickTo(el, "y", { duration: 0.9, ease: "power3.out" }),
          depth: Number(el.dataset.depth || 12),
        }));
        const onMove = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          rotY(-12 + nx * 14);
          rotX(5 - ny * 10);
          setters.forEach((s) => {
            s.x(nx * s.depth);
            s.y(ny * s.depth);
          });
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        return () => window.removeEventListener("pointermove", onMove);
      });

      /* gentle float */
      gsap.to(".app-hero__stage", { y: -10, duration: 3.8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.8 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex items-start overflow-hidden pb-16 pt-12 sm:min-h-[92svh] sm:items-center sm:pb-20 sm:pt-24 lg:pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(900px 460px at 85% -10%, rgba(40,111,171,0.10), transparent 60%)",
            "radial-gradient(700px 420px at -10% 110%, rgba(176,141,63,0.08), transparent 55%)",
          ].join(", "),
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--gd-line)]" />

      <div className="container relative z-10 grid items-center gap-12 sm:gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <span className="app-hero__eyebrow mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gd-gold)]">
            <span aria-hidden className="h-px w-8 bg-[var(--gd-gold)]/70" />
            {APP_HERO.badge}
          </span>

          <h1 className="gd-display m-0 text-[clamp(2.4rem,7vw,5.2rem)] [perspective:900px]">
            {APP_HERO.titleLines.map((line, idx) => {
              const variants: ("solid" | "outline" | "gradient")[] = ["solid", "outline", "gradient"];
              return <FlipLine key={idx} text={line} variant={variants[idx % variants.length]} />;
            })}
          </h1>

          <p className="app-hero__sub mt-5 max-w-xl text-[0.95rem] leading-relaxed text-[var(--gd-muted)] sm:mt-7 sm:text-[1.05rem]">
            {APP_HERO.sub}
          </p>

          <div className="app-hero__sub mt-5 flex flex-wrap items-center gap-2">
            {APP_HERO.platforms.map((platform, i) => (
              <span key={platform} className="inline-flex items-center gap-2 border border-[var(--gd-line)] bg-white/65 px-3 py-2 text-[0.67rem] font-semibold uppercase tracking-[0.12em] text-[var(--gd-muted)]">
                <span className={"size-1.5 rounded-full " + (i === activeStage ? "bg-[var(--gd-gold)]" : "bg-[var(--gd-blue)]/35")} />
                {platform}
              </span>
            ))}
          </div>

          <div className="app-hero__ctas mt-6 flex items-center gap-2.5 sm:mt-8 sm:gap-4">
            <MagneticButton href="/contact">
              <span className="hidden sm:inline">{APP_HERO.primaryCta}</span>
              <span className="sm:hidden">Start my app</span>
              <ArrowRight />
            </MagneticButton>
            <MagneticButton href="#app-pricing" className="ag-btn--ghost">
              <span className="hidden sm:inline">{APP_HERO.ghostCta}</span>
              <span className="sm:hidden">Cost estimate</span>
            </MagneticButton>
          </div>

          <div className="app-hero__meta mt-10 grid grid-cols-3 border-t border-[var(--gd-line)] pt-5 sm:mt-14 sm:flex sm:flex-wrap sm:gap-x-12 sm:gap-y-6 sm:pt-8">
            {APP_STATS.map((s) => (
              <div key={s.label} className="px-3 first:pl-0 sm:p-0">
                <div className="gd-display text-xl text-[var(--gd-navy)] sm:text-2xl">
                  {s.value}
                  <span className="text-[var(--gd-gold)]">{s.suffix}</span>
                </div>
                <div className="mt-1 text-[0.68rem] leading-snug text-[var(--gd-muted)] sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── stage: 3D phone + floating UI cards ── */}
        <div className="app-hero__stage relative mx-auto flex w-full max-w-[610px] items-center justify-center py-12 lg:mx-0 lg:min-h-[620px] lg:justify-start lg:py-4">
          <span
            aria-hidden
            className="gd-display pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(9rem,20vw,18rem)] leading-none text-[var(--gd-navy)]/[0.035] lg:left-[42%]"
          >
            APP
          </span>
          {/* backdrop: soft glow + gold ring */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 size-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full sm:size-[27rem]"
            style={{ background: "radial-gradient(circle, rgba(40,111,171,0.16), transparent 66%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 size-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--gd-gold)]/35 sm:size-[24rem]"
          />

          {/* phone — tilts toward the cursor */}
          <div className="relative z-10 [perspective:1200px] lg:ml-[15%]">
            <div ref={phone} className="[transform:rotateY(-12deg)_rotateX(5deg)] [transform-style:preserve-3d]">
              <PhoneFrame>
                {/* default-visible layer is the finished app so reduced-motion
                    users (no GSAP) see the polished screen — JS re-orders this */}
                <div className={"app-hero__screen absolute inset-0 transition-opacity duration-700 " + (activeStage === 0 ? "opacity-100" : "opacity-0")}>
                  <ScreenLayer active>
                    <WireframeScreen />
                  </ScreenLayer>
                </div>
                <div className={"app-hero__screen absolute inset-0 transition-opacity duration-700 " + (activeStage === 1 ? "opacity-100" : "opacity-0")}>
                  <ScreenLayer active>
                    <DesignScreen />
                  </ScreenLayer>
                </div>
                <div className={"app-hero__screen absolute inset-0 transition-opacity duration-700 " + (activeStage === 2 ? "opacity-100" : "opacity-0")}>
                  <ScreenLayer active>
                    <AppScreen />
                  </ScreenLayer>
                </div>
              </PhoneFrame>
            </div>
          </div>

          {/* floating UI cards — drift with the cursor at different depths */}
          <span
            data-depth="26"
            className="app-hero__float absolute left-0 top-8 rounded-[6px] border border-[var(--gd-line)] bg-white px-3.5 py-2.5 shadow-[0_18px_40px_rgba(12,36,61,0.14)] sm:left-2 sm:top-12"
          >
            <span className="block text-[1rem] font-bold text-[var(--gd-gold)]">4.9★</span>
            <span className="block text-[0.62rem] text-[var(--gd-muted)]">App Store rating</span>
          </span>

          <span
            data-depth="18"
            className="app-hero__float absolute right-0 top-1/4 rounded-[6px] border border-[var(--gd-line)] bg-white p-3.5 shadow-[0_18px_40px_rgba(12,36,61,0.14)] lg:right-2"
          >
            <span className="block text-[0.62rem] font-semibold uppercase tracking-wide text-[var(--gd-muted)]">
              Downloads
            </span>
            <span className="mt-2 flex h-9 items-end gap-1">
              {["h-3", "h-5", "h-4", "h-7", "h-5", "h-9"].map((h, i) => (
                <span key={i} className={`w-1.5 rounded-t bg-[linear-gradient(180deg,#286FAB,#0C243D)] ${h}`} />
              ))}
            </span>
            <span className="mt-1.5 block text-[0.72rem] font-bold text-[var(--gd-navy)]">
              +{APP_HERO.stat}% <span className="font-medium text-[var(--gd-muted)]">this quarter</span>
            </span>
          </span>

          <span
            data-depth="32"
            className="app-hero__float absolute bottom-12 left-0 flex items-center gap-2.5 rounded-[6px] border border-[var(--gd-line)] bg-white px-3.5 py-2.5 shadow-[0_18px_40px_rgba(12,36,61,0.14)] sm:bottom-16 sm:-left-3"
          >
            <span className="relative grid size-7 place-items-center rounded-full bg-[#1fb355]/12">
              <span className="size-2 rounded-full bg-[#1fb355]" />
              <span className="absolute size-2 animate-ping rounded-full bg-[#1fb355]/60" />
            </span>
            <span>
              <span className="block text-[0.74rem] font-semibold text-[var(--gd-ink)]">New order received</span>
              <span className="block text-[0.62rem] text-[var(--gd-muted)]">just now · via your app</span>
            </span>
          </span>

          <div className="absolute inset-x-0 -bottom-2 z-20 mx-auto w-full max-w-[380px] border border-[var(--gd-line)] bg-white shadow-[0_18px_45px_rgba(12,36,61,0.12)] sm:bottom-0 lg:bottom-auto lg:left-auto lg:right-0 lg:top-1/2 lg:w-[155px] lg:-translate-y-1/2">
            <p className="m-0 border-b border-[var(--gd-line)] px-4 py-3 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[var(--gd-muted)]">
              {APP_HERO.buildLabel}
            </p>
            <div className="grid grid-cols-3 lg:grid-cols-1">
              {APP_HERO.stages.map((stage, i) => (
                <button
                  key={stage.name}
                  type="button"
                  onClick={() => setActiveStage(i)}
                  onMouseEnter={() => setActiveStage(i)}
                  onFocus={() => setActiveStage(i)}
                  aria-pressed={i === activeStage}
                  className={
                    "group border-[var(--gd-line)] px-3 py-3 text-left transition-colors duration-300 lg:border-t " +
                    (i > 0 ? "border-l lg:border-l-0 " : "") +
                    (i === activeStage ? "bg-[var(--gd-navy)] text-white" : "text-[var(--gd-ink)] hover:bg-[var(--gd-soft)]")
                  }
                >
                  <span className={"gd-display block text-[0.64rem] " + (i === activeStage ? "text-[var(--gd-gold)]" : "text-[var(--gd-blue)]/45")}>0{i + 1}</span>
                  <span className="mt-1 block text-xs font-semibold">{stage.name}</span>
                  <span className={"mt-1 hidden text-[0.6rem] leading-4 lg:block " + (i === activeStage ? "text-white/50" : "text-[var(--gd-muted)]")}>{stage.detail}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[0.65rem] uppercase tracking-[0.3em] text-[var(--gd-muted)] lg:block">
        Scroll
      </div>
    </section>
  );
}
