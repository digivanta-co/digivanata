"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { CONTACT } from "@/lib/site-data";
import { MARQUEE_ITEMS } from "@/lib/home-data";
import { ArrowRight, WhatsApp, Star } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const useIsoEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const H1: { t: string; grad?: boolean }[] = [
  { t: "Digital" },
  { t: "Marketing" },
  { t: "Company" },
  { t: "in" },
  { t: "Delhi" },
  { t: "for" },
  { t: "SEO,", grad: true },
  { t: "Ads", grad: true },
  { t: "&", grad: true },
  { t: "Online", grad: true },
  { t: "Growth", grad: true },
];

/* Navy 4-point sparkle */
function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 0c.6 6 3.4 9 12 12-8.6 3-11.4 6-12 12-.6-6-3.4-9-12-12 8.6-3 11.4-6 12-12Z"
        fill="url(#sparkGrad)"
      />
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b5bd0" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useIsoEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".herox__eyebrow", { y: 16, autoAlpha: 0, duration: 0.6 })
        .from(".herox__word", { yPercent: 120, autoAlpha: 0, duration: 0.8, stagger: 0.05 }, "-=0.25")
        .from(".herox__sub", { y: 18, autoAlpha: 0, duration: 0.6 }, "-=0.35")
        .from(".herox__ctas > *", { y: 18, autoAlpha: 0, duration: 0.5, stagger: 0.1 }, "-=0.35")
        .from(".herox__trust > *", { y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")
        .from(".herox__shot", { y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.12 }, "-=0.9")
        .from(".herox__badge", { scale: 0.6, autoAlpha: 0, duration: 0.6 }, "-=0.4")
        .from(".herox__spark", { scale: 0, autoAlpha: 0, duration: 0.5, stagger: 0.1 }, "-=0.4");
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="hero"
      className={cn(
        "relative overflow-hidden py-[5.5rem] pb-40 lg:py-[7rem] lg:pb-44",
        "bg-[linear-gradient(180deg,#ffffff_0%,#f3f4f7_60%,#eceef2_100%)]"
      )}
    >
      {/* Premium background mesh & floating orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className={cn(
            "absolute inset-0 bg-size-[48px_48px]",
            "bg-[radial-gradient(rgba(30,58,138,0.07)_1px,transparent_1px)]",
            "[mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_40%,transparent_90%)]"
          )}
        />
        {/* soft navy + grey glows */}
        <span
          className="absolute -top-[100px] -right-[50px] size-[500px] rounded-full opacity-60 blur-[100px] bg-[radial-gradient(circle,rgba(30,58,138,0.12),transparent_70%)] animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <span
          className="absolute -bottom-[120px] -left-[100px] size-[460px] rounded-full opacity-50 blur-[90px] bg-[radial-gradient(circle,rgba(120,130,150,0.12),transparent_70%)] animate-pulse"
          style={{ animationDuration: "14s" }}
        />
        <span
          className="absolute top-[30%] right-[16%] size-[300px] rounded-full opacity-40 blur-[85px] bg-[radial-gradient(circle,rgba(59,91,208,0.12),transparent_70%)] [animation:float-y_12s_ease-in-out_infinite]"
        />
      </div>

      <div className="container relative z-1 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ---- Copy column ---- */}
        <div className="text-center lg:text-left">
          <span className="herox__eyebrow mb-6 inline-flex items-center gap-2.5 rounded-full border border-[rgba(30,58,138,0.15)] bg-white/70 px-4 py-2 text-[0.82rem] font-semibold text-[#1e3a8a] shadow-[0_2px_10px_rgba(30,58,138,0.06)] backdrop-blur-sm">
            <span className="inline-flex items-center gap-1">
              <i className="size-2.5 rounded-full bg-[#1e3a8a]" />
              <i className="size-2.5 rounded-full bg-[#1e3a8a]/25" />
            </span>
            Elevate Your Brand With Us
          </span>

          <h1
            className={cn(
              "herox__h1 m-0 flex flex-wrap justify-center gap-x-[0.26em]",
              "font-[family-name:var(--font-display),var(--font)] text-[clamp(2.1rem,4vw,3.6rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[var(--ink)]",
              "lg:justify-start"
            )}
          >
            {H1.map((w, i) => (
              <span
                key={i}
                className="herox__word-mask inline-flex overflow-hidden px-[0.04em] pt-[0.06em] pb-[0.18em] -mx-[0.04em] -mt-[0.06em] -mb-[0.18em]"
              >
                <span
                  className={cn(
                    "herox__word inline-block",
                    w.grad &&
                      "text-[#286FAB]"
                  )}
                >
                  {w.t}
                </span>
              </span>
            ))}
          </h1>

          <p
            className={cn(
              "herox__sub mx-auto mb-8 mt-[1.6rem] max-w-[540px] text-[1.12rem] leading-[1.75] text-[var(--text)] font-medium",
              "lg:mx-0 lg:mb-10 lg:mt-[1.6rem]"
            )}
          >
            A performance-driven digital marketing agency in Delhi helping startups,
            local businesses &amp; enterprises rank higher, generate quality leads and
            scale revenue online.
          </p>

          <div className="herox__ctas mb-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 lg:justify-start">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-800 px-7 py-3.5 text-[0.98rem] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-700"
            >
              Get Your Free Strategy <ArrowRight />
            </Link>
            <a
              href={CONTACT.whatsapp}
              className="inline-flex items-center gap-2 text-[0.98rem] font-semibold text-[var(--ink)] underline decoration-[rgba(30,58,138,0.3)] underline-offset-[6px] transition-all duration-300 hover:text-[#1e3a8a] hover:decoration-[#1e3a8a]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp /> WhatsApp Now
            </a>
          </div>

          <div className="herox__trust flex flex-wrap items-center justify-center gap-x-8 gap-y-5 lg:justify-start">
            <div className="flex items-center gap-2.5 text-[0.88rem] text-[var(--muted)]">
              <span className="inline-flex gap-px text-[#1e3a8a] [&_svg]:size-4">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
              <span>
                <strong className="text-[var(--ink)]">4.9/5</strong> on Google · 800+ reviews
              </span>
            </div>
            <div className="flex gap-6">
              {[
                { n: "16+", l: "Years" },
                { n: "800+", l: "Clients" },
                { n: "1.5K+", l: "Projects" },
              ].map((s) => (
                <div key={s.l} className="flex flex-col">
                  <strong className="font-[family-name:var(--font-display),var(--font)] text-[1.4rem] font-bold leading-none tracking-[-0.02em] text-[var(--ink)]">
                    {s.n}
                  </strong>
                  <span className="text-[0.76rem] text-[var(--muted)]">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Photo collage column ---- */}
        <div className="herox__viz relative mx-auto w-full max-w-[520px]">
          {/* soft navy glow behind collage */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-1 rounded-[40px] bg-[radial-gradient(circle_at_65%_35%,rgba(30,58,138,0.16),transparent_60%)] blur-2xl"
          />

          <div className="flex gap-4">
            {/* tall left image */}
            <div className="herox__shot relative h-[300px] w-1/2 overflow-hidden rounded-[28px] rounded-tl-[70px] border border-black/[0.06] shadow-[0_20px_50px_rgba(20,32,60,0.12)] sm:h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900"
                alt="Digital marketing team collaborating"
                fill
                priority
                sizes="(max-width: 1024px) 45vw, 260px"
                className="object-cover grayscale contrast-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(20,32,60,0.28)_100%)]" />
            </div>

            {/* stacked right images */}
            <div className="flex w-1/2 flex-col gap-4">
              <div className="herox__shot relative h-[142px] overflow-hidden rounded-[28px] rounded-tr-[60px] border border-black/[0.06] shadow-[0_20px_50px_rgba(20,32,60,0.12)] sm:h-[202px]">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                  alt="Strategy meeting with clients"
                  fill
                  sizes="(max-width: 1024px) 45vw, 260px"
                  className="object-cover grayscale contrast-[1.05]"
                />
              </div>
              <div className="herox__shot relative h-[142px] overflow-hidden rounded-[28px] rounded-br-[60px] border border-black/[0.06] shadow-[0_20px_50px_rgba(20,32,60,0.12)] sm:h-[202px]">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
                  alt="Marketing consultant at work"
                  fill
                  sizes="(max-width: 1024px) 45vw, 260px"
                  className="object-cover grayscale contrast-[1.05]"
                />
              </div>
            </div>
          </div>

          {/* rotating HIRE US badge */}
          <div className="herox__badge absolute -bottom-7 left-[36%] size-[104px] -translate-x-1/2 rounded-full border border-black/[0.06] bg-[#14284a] p-1.5 shadow-[0_16px_40px_rgba(20,32,60,0.35)]">
            <svg viewBox="0 0 100 100" className="size-full animate-[spin_18s_linear_infinite]" aria-hidden="true">
              <defs>
                <path id="hxBadgePath" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
              </defs>
              <text className="fill-white/75" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px" }}>
                <textPath href="#hxBadgePath" startOffset="0">
                  HIRE US • DIGIVANTA • HIRE US • DIGIVANTA •
                </textPath>
              </text>
            </svg>
            <span className="absolute inset-0 m-auto grid size-11 place-items-center rounded-full bg-[linear-gradient(135deg,#286FAB,#3b5bd0)] text-white [&_svg]:size-5 [&_svg]:-rotate-45">
              <ArrowRight />
            </span>
          </div>

          {/* navy sparkles */}
          <Sparkle className="herox__spark absolute -right-3 bottom-[26%] size-9 [animation:pulse_2.4s_ease-in-out_infinite]" />
          <Sparkle className="herox__spark absolute -left-4 top-[38%] size-6 [animation:pulse_3s_ease-in-out_infinite]" />
        </div>
      </div>

    </section>
  );
}
