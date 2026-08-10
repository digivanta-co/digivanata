"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { Label } from "@/components/design/primitives";
import { MagneticButton, TiltCard } from "@/components/agency/primitives";
import { ArrowRight, Check, Instagram, Facebook, LinkedIn } from "@/components/ui/Icons";
import { SeoIcon } from "@/components/seo/SeoIcons";
import { SMM_PLATFORMS } from "@/lib/smm-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ServicesSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const cards = root.current?.querySelectorAll<HTMLElement>(".smm-svc__card");
      if (!cards?.length) return;

      // Ensure cards are visible first, then animate
      gsap.set(cards, { autoAlpha: 1 });

      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 50,
          autoAlpha: 0,
          duration: 0.8,
          delay: i * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="services" className="relative py-10 sm:py-14">
      <div className="container">
        {/* 2-Column Header Layout */}
        <div className="mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          {/* Left Column: Heading & Intro */}
          <div className="max-w-2xl">
            <Label>Platforms We Master</Label>
            <h2 className="gd-display text-[clamp(2rem,4.6vw,3.4rem)] text-[var(--gd-ink)]">
              Platform-specific strategies,
              <br />
              <span className="gd-grad">not generic posting.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[var(--gd-muted)]">
              Each platform has its own audience, format, and language. We tailor content and paid campaigns to where your customers actually spend their time.
            </p>
          </div>

          {/* Right Column: Interactive Audit & Growth Luxury Card */}
          <div className="w-full shrink-0 lg:max-w-md">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(145deg,#0C243D_0%,#163a5f_100%)] p-6 text-white shadow-[0_20px_50px_rgba(12,36,61,0.22)] sm:p-7">
              {/* Top Gold Gradient Stripe */}
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,var(--gd-navy),#286FAB_55%,#b08d3f)]"
              />

              {/* Radial Light Accent */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 size-40 bg-[radial-gradient(circle,rgba(40,111,171,0.35),transparent_70%)]"
              />

              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-wider text-[#7db4e0]">
                    <span className="size-2 rounded-full bg-[#7db4e0] animate-pulse" />
                    SMM Growth Engine
                  </span>
                  <span className="text-xs font-bold text-[#d5b76a]">Free Consult</span>
                </div>

                <h3 className="m-0 text-xl font-bold text-white">
                  Ready for Real Social Growth?
                </h3>

                <p className="mt-2.5 text-xs leading-relaxed text-[#b9cdec]">
                  Get a comprehensive audit of your social profiles, competitor analysis &amp; a custom 90-day engagement roadmap.
                </p>

                {/* Mini metrics bar */}
                <div className="my-5 flex items-center gap-5 border-y border-white/10 py-3.5">
                  <div>
                    <strong className="block text-lg font-extrabold text-[#d5b76a]">+340%</strong>
                    <span className="text-[0.68rem] text-[#b9cdec]">Engagement</span>
                  </div>
                  <div className="h-7 w-px bg-white/10" />
                  <div>
                    <strong className="block text-lg font-extrabold text-white">5M+</strong>
                    <span className="text-[0.68rem] text-[#b9cdec]">Impressions</span>
                  </div>
                  <div className="h-7 w-px bg-white/10" />
                  <div className="flex items-center gap-2 text-white/80">
                    <Instagram width={15} height={15} />
                    <Facebook width={15} height={15} />
                    <LinkedIn width={15} height={15} />
                  </div>
                </div>

                <div>
                  <MagneticButton href="/contact" className="w-full justify-center">
                    Get Free Social Audit <ArrowRight />
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Card Platform Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SMM_PLATFORMS.map((p, i) => (
            <TiltCard
              key={p.name}
              max={7}
              className="smm-svc__card gd-card relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[var(--gd-line)] bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--gd-gold)]/60 hover:shadow-xl"
            >
              {/* Ghost watermark index number */}
              <div
                aria-hidden
                className="gd-display pointer-events-none absolute -right-1 -top-4 text-[4.2rem] text-transparent"
                style={{ WebkitTextStroke: "1px rgba(12,36,61,0.08)" }}
              >
                0{i + 1}
              </div>

              <div>
                {/* Platform Icon Badge */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-[rgba(40,111,171,0.08)] text-[var(--gd-blue)] shadow-xs transition-colors duration-300 group-hover:bg-[var(--gd-gold-soft)] group-hover:text-[var(--gd-gold)]">
                    {p.icon === "instagram" ? (
                      <Instagram width={22} height={22} className="text-[#e4405f]" />
                    ) : p.icon === "facebook" ? (
                      <Facebook width={22} height={22} className="text-[#1877f2]" />
                    ) : p.icon === "linkedin" ? (
                      <LinkedIn width={22} height={22} className="text-[#0a66c2]" />
                    ) : (
                      <SeoIcon name="sparkles" width={22} height={22} className="text-[var(--gd-gold)]" />
                    )}
                  </span>
                  <span className="size-1.5 rounded-full bg-[var(--gd-gold)]" />
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[var(--gd-ink)]">
                  {p.name}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-[var(--gd-muted)] sm:text-sm">
                  {p.desc}
                </p>
              </div>

              {p.items && p.items.length > 0 && (
                <ul className="mt-6 grid list-none gap-2.5 border-t border-[var(--gd-line)] p-0 pt-5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-xs font-semibold text-[var(--gd-ink)]">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-[var(--gd-gold-soft)] text-[var(--gd-gold)] [&_svg]:size-2.5">
                        <Check />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
