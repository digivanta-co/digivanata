"use client";

import { useEffect, useRef } from "react";
import { Heading, Button } from "@/components/app-dev/primitives";
import { useReveal, useParallax } from "@/hooks/animations";
import { initAppHero } from "@/animations/appHero";
import { APP_HERO } from "@/lib/app-data";

/* A 3D phone that "builds up" on load, powers on, then floats. */
function Phone3D() {
  return (
    <div className="relative mx-auto w-[268px] sm:w-[312px]">
      <div className="[perspective:1400px]">
        <div
          data-phone
          className="relative [transform-style:preserve-3d]"
          style={{ willChange: "transform" }}
        >
          {/* device */}
          <div className="relative rounded-[2.6rem] border border-[#E5E7EB] bg-[#0F172A] p-3 shadow-[0_46px_100px_rgba(40,111,171,0.3)]">
            <div className="relative overflow-hidden rounded-[2rem] bg-white">
              {/* notch */}
              <div className="relative flex h-7 items-center justify-center">
                <span className="h-1.5 w-16 rounded-full bg-[#0F172A]/15" />
              </div>

              {/* app header */}
              <div data-screen-el className="bg-[linear-gradient(135deg,#286FAB,#286FAB)] px-5 pb-6 pt-3 text-white">
                <div className="flex items-center justify-between">
                  <p className="text-[0.7rem] uppercase tracking-widest text-white/75">Digivanta</p>
                  <span className="grid size-6 place-items-center rounded-full bg-white/15 text-[0.7rem]">3</span>
                </div>
                <p className="mt-1 text-lg font-bold">Good morning 👋</p>
                <div className="mt-3 flex items-center gap-2 rounded-xl bg-white/12 px-3 py-2 text-[0.72rem] text-white/90">
                  <span className="size-1.5 rounded-full bg-[#C9A227]" />
                  Revenue up 24% this week
                </div>
              </div>

              {/* content */}
              <div className="space-y-3 p-4">
                <div data-screen-el className="grid grid-cols-3 gap-2">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] py-4">
                      <div className="mx-auto h-5 w-5 rounded-md bg-[#286FAB]/15" />
                    </div>
                  ))}
                </div>

                <div data-screen-el className="rounded-2xl border border-[#E5E7EB] p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="h-2 w-20 rounded-full bg-[#0F172A]/10" />
                    <div className="h-2 w-8 rounded-full bg-[#C9A227]/40" />
                  </div>
                  <div className="flex h-24 items-end gap-1.5">
                    {["h-10", "h-16", "h-12", "h-20", "h-14", "h-24", "h-[68px]"].map((h, i) => (
                      <div key={i} className={`w-full rounded-t bg-[linear-gradient(180deg,#286FAB,#286FAB)] ${h}`} />
                    ))}
                  </div>
                </div>

                <div data-screen-el className="flex items-center gap-3 rounded-2xl border border-[#E5E7EB] p-3">
                  <span className="size-9 shrink-0 rounded-full bg-[linear-gradient(135deg,#286FAB,#286FAB)]" />
                  <div className="flex-1">
                    <div className="mb-1.5 h-2 w-24 rounded-full bg-[#0F172A]/12" />
                    <div className="h-2 w-16 rounded-full bg-[#0F172A]/8" />
                  </div>
                  <span className="text-[0.7rem] font-bold text-[#286FAB]">+12%</span>
                </div>

                <div data-screen-el className="rounded-full bg-[#286FAB] py-2.5 text-center text-xs font-semibold text-white">
                  Get Started
                </div>
              </div>

              {/* glare */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-[4] bg-[linear-gradient(115deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_36%)] mix-blend-screen"
              />
              {/* power overlay */}
              <div data-phone-power aria-hidden className="pointer-events-none absolute inset-0 z-[5] bg-[#050506] opacity-0" />
            </div>
          </div>
        </div>
      </div>

      {/* floating badges */}
      <div
        data-phone-badge="a"
        className="absolute -left-8 top-16 hidden rounded-2xl border border-[#E5E7EB] bg-white/90 px-3 py-2 shadow-[0_16px_38px_rgba(40,111,171,0.18)] sm:block"
      >
        <p className="text-base font-bold text-[#C9A227]">4.9★</p>
        <p className="text-[0.62rem] text-[#64748B]">App rating</p>
      </div>
      <div
        data-phone-badge="b"
        className="absolute -right-10 bottom-20 hidden rounded-2xl border border-[#E5E7EB] bg-white/90 px-3 py-2 shadow-[0_16px_38px_rgba(40,111,171,0.18)] sm:block"
      >
        <p className="text-base font-bold text-[#0F172A]">+210%</p>
        <p className="text-[0.62rem] text-[#64748B]">Engagement</p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const scopeRef = useRef<HTMLElement>(null);
  const subRef = useReveal<HTMLParagraphElement>({ variant: "up", delay: 0.5 });
  const ctaRef = useReveal<HTMLDivElement>({ variant: "up", delay: 0.65 });
  const statRef = useReveal<HTMLDivElement>({ variant: "up", delay: 0.8 });
  const blobA = useParallax<HTMLDivElement>({ y: -80 });
  const blobB = useParallax<HTMLDivElement>({ y: 90 });

  useEffect(() => {
    const section = scopeRef.current;
    if (!section) return;
    return initAppHero(section);
  }, []);

  return (
    <section
      ref={scopeRef}
      className="relative overflow-hidden bg-white pt-[7.5rem] pb-20 lg:pt-[9.5rem] lg:pb-28"
    >
      {/* background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:46px_46px] [mask-image:radial-gradient(ellipse_at_50%_30%,black_10%,transparent_70%)]" />
        <div ref={blobA} className="absolute -top-24 right-[6%] h-[44vh] w-[44vh] rounded-full bg-[radial-gradient(circle,rgba(40,111,171,0.14),transparent_70%)] blur-3xl" />
        <div ref={blobB} className="absolute bottom-0 left-[2%] h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle,rgba(40,111,171,0.14),transparent_70%)] blur-3xl" />
        <div className="absolute right-[18%] top-[24%] h-px w-24 bg-[#C9A227]/50" />
      </div>

      <div className="container relative z-[2]">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* copy */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#286FAB]">
              <span className="size-1.5 rounded-full bg-[#C9A227]" />
              {APP_HERO.badge}
            </span>

            <Heading
              as="h1"
              lines={APP_HERO.titleLines}
              gradient={[APP_HERO.gradientLine]}
              className="mt-6 text-[clamp(2.6rem,7vw,5rem)] leading-[1.02]"
            />

            <p ref={subRef} className="mx-auto mt-6 max-w-xl text-[1.08rem] leading-[1.7] text-[#64748B] lg:mx-0">
              {APP_HERO.sub}
            </p>

            <div ref={ctaRef} className="mt-8 flex items-center justify-center gap-2.5 lg:justify-start">
              <Button href="#contact" variant="primary">
                <span className="hidden sm:inline">{APP_HERO.primaryCta}</span>
                <span className="sm:hidden">Build App</span>
              </Button>
              <Button href="#pricing" variant="ghost">
                <span className="hidden sm:inline">{APP_HERO.ghostCta}</span>
                <span className="sm:hidden">Pricing</span>
              </Button>
            </div>

            {/* stat */}
            <div ref={statRef} className="mt-10 flex flex-col items-center gap-4 lg:flex-row lg:items-stretch lg:gap-6">
              <div className="flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-5 py-3">
                <span className="bg-[linear-gradient(120deg,#286FAB,#286FAB)] bg-clip-text text-3xl font-bold text-transparent">{APP_HERO.stat}%</span>
                <p className="max-w-[180px] text-left text-[0.8rem] leading-snug text-[#64748B]">{APP_HERO.statText}</p>
              </div>
            </div>
          </div>

          {/* visual */}
          <Phone3D />
        </div>

        {/* areas served strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-[#E5E7EB] pt-8 text-sm text-[#64748B]">
          <span className="font-semibold text-[#0F172A]">Serving Delhi NCR:</span>
          {APP_HERO.areas.map((a) => (
            <span key={a} className="rounded-full bg-[#F8FAFC] px-3 py-1 text-[0.8rem]">{a}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
