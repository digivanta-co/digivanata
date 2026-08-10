"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { WEB_TECH, WEB_TECH_SECTION } from "@/lib/web-data";
import { Spark } from "@/components/ui/Icons";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function WebTechStackSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 800px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".web-tech-card");
        const orbitState = { rotation: 0 };

        const positionCards = () => {
          cards.forEach((card, index) => {
            const angle = (index / cards.length) * Math.PI * 2 - Math.PI / 2 + orbitState.rotation;
            const radius = Math.min(400, window.innerWidth * 0.3);
            const depth = (Math.sin(angle) + 1) / 2;

            gsap.set(card, {
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * 205,
              rotate: (index % 2 ? 1 : -1) * (2 + depth * 3),
              scale: 0.78 + depth * 0.25,
              autoAlpha: 0.58 + depth * 0.42,
              zIndex: Math.round(depth * 100),
              "--tech-focus": depth,
            });
          });
        };

        gsap.set(cards, { x: 0, y: 0, rotate: 0, scale: 0.45, autoAlpha: 0 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=1900",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(".web-tech-copy", { autoAlpha: 0, y: -16, duration: 0.16 }, 0.06)
          .to(".web-tech-heading", { scale: 0.88, duration: 0.24, ease: "power2.inOut" }, 0.08)
          .to(
            cards,
            {
              x: (index) => {
                const angle = (index / cards.length) * Math.PI * 2 - Math.PI / 2;
                const radius = Math.min(400, window.innerWidth * 0.3);
                return Math.cos(angle) * radius;
              },
              y: (index) => {
                const angle = (index / cards.length) * Math.PI * 2 - Math.PI / 2;
                return Math.sin(angle) * 205;
              },
              rotate: (index) => (index % 2 ? 1 : -1) * 4,
              scale: (index) => {
                const angle = (index / cards.length) * Math.PI * 2 - Math.PI / 2;
                return 0.78 + ((Math.sin(angle) + 1) / 2) * 0.25;
              },
              autoAlpha: 1,
              stagger: { amount: 0.2, from: "center" },
              duration: 0.38,
              ease: "back.out(1.2)",
            },
            0.18,
          )
          .to(
            orbitState,
            {
              rotation: Math.PI * 2,
              duration: 0.72,
              ease: "none",
              onUpdate: positionCards,
            },
            0.56,
          )
          .to(".web-tech-stage-glow", { scale: 1.18, autoAlpha: 0.8, duration: 0.62 }, 0.22)
          .to({}, { duration: 0.18 });
      });

      mm.add("(max-width: 899px)", () => {
        gsap.from(".web-tech-card", {
          y: 38,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: ".web-tech-mobile-grid", start: "top 78%" },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden border-y border-[var(--gd-line)] bg-[var(--gd-soft)] text-[var(--gd-ink)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(40,111,171,0.12),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(12,36,61,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(12,36,61,0.8)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--gd-gold)] to-transparent" />

      <div className="relative mx-auto min-h-screen max-w-[1400px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="web-tech-intro pointer-events-none mx-auto flex min-h-[50vh] max-w-4xl flex-col items-center justify-center text-center lg:min-h-[66vh]">
          <span className="web-tech-copy mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[var(--gd-gold)]">
            <Spark /> {WEB_TECH_SECTION.eyebrow}
          </span>
          <h2 className="web-tech-heading gd-display m-0 text-[clamp(2.2rem,4.4vw,4rem)] leading-[0.9] tracking-[-0.055em] text-[var(--gd-navy)]">
            {WEB_TECH_SECTION.title.map((line) => <span className="block" key={line}>{line}</span>)}
          </h2>
          <p className="web-tech-copy mt-7 max-w-2xl text-sm leading-relaxed text-[var(--gd-muted)] sm:text-base">
            {WEB_TECH_SECTION.description}
          </p>
        </div>

        <div className="web-tech-stage-glow pointer-events-none absolute left-1/2 top-[55%] hidden size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gd-blue)]/10 opacity-0 blur-3xl lg:block" />

        <div className="web-tech-mobile-grid grid gap-5 grid-cols-2 lg:absolute lg:left-1/2 lg:top-1/2 lg:block lg:h-px lg:w-px lg:-translate-x-1/2 lg:-translate-y-1/2 motion-reduce:lg:static motion-reduce:lg:grid motion-reduce:lg:h-auto motion-reduce:lg:w-auto motion-reduce:lg:translate-x-0 motion-reduce:lg:translate-y-0 motion-reduce:lg:grid-cols-4">
          {WEB_TECH.map((item, index) => (
            <article
              key={item.name}
              className="web-tech-card group relative flex min-h-36 flex-col overflow-hidden rounded-2xl border border-[var(--gd-line)] bg-white p-3.5 shadow-[0_18px_48px_rgba(12,36,61,0.13)] transition-colors duration-300 [will-change:transform,opacity] hover:border-[var(--gd-blue)]/45 sm:min-h-44 sm:p-4 lg:absolute lg:left-1/2 lg:top-1/2 lg:-ml-[77px] lg:-mt-[104px] lg:h-[208px] lg:w-[154px] motion-reduce:lg:static motion-reduce:lg:m-0 motion-reduce:lg:h-auto motion-reduce:lg:w-auto"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-[var(--gd-gold)]/70 opacity-[var(--tech-focus,0)] shadow-[inset_0_0_28px_rgba(176,141,63,0.1),0_18px_48px_rgba(176,141,63,0.18)]" />
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_50%_0%,rgba(176,141,63,0.18),transparent_58%)] opacity-[var(--tech-focus,0)]" />
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gd-gold)]/70 to-transparent" />
              <div className="flex items-start justify-between">
                <div className="flex size-11 items-center justify-center rounded-lg border border-[var(--gd-line)] bg-[var(--gd-soft)] sm:size-13 sm:rounded-xl">
                  <Image src={item.image} alt={`${item.name} logo`} width={72} height={72} className="size-7 object-contain sm:size-8" />
                </div>
                <span className="font-mono text-[0.65rem] text-[var(--gd-muted)]/50">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-auto pt-5">
                <h3 className="text-base font-bold tracking-[-0.03em] text-[var(--gd-navy)]">{item.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--gd-muted)]">{item.category}</p>
                <div className="mt-3 h-px w-6 bg-[var(--gd-gold)]/70" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
