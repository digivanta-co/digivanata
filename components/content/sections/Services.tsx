"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { ServiceIcon, Check } from "@/components/ui/Icons";
import { TiltCard } from "@/components/agency/primitives";
import { Kicker } from "@/components/content/primitives";
import { CM_SERVICES } from "@/lib/content-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function ServicesSection() {
  const root = useRef<HTMLElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".cm-serv__head", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
      gsap.from(".cm-serv__card", {
        y: 60,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".cm-serv__grid", start: "top 82%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={root} className="relative py-5 sm:py-14">
      <div className="container">
        <div className="cm-serv__head max-w-2xl">
          <Kicker>{CM_SERVICES.label}</Kicker>
          <h2 className="cm-display text-[clamp(2rem,4.8vw,3.6rem)] text-[var(--cm-ink)]">
            {CM_SERVICES.heading[0]}{" "}
            <span className="cm-grad">{CM_SERVICES.heading[1]}</span>
            <br />
            {CM_SERVICES.heading[2]}
          </h2>
          <p className="mt-5 text-[var(--cm-muted)]">{CM_SERVICES.intro}</p>
        </div>

        <div className="cm-serv__grid mt-14 grid gap-6 lg:grid-cols-2">
          {CM_SERVICES.items.map((s, i) => (
            <TiltCard
              key={s.title}
              max={5}
              className="cm-serv__card cm-card flex flex-col p-8 sm:p-10"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-14 place-items-center rounded-2xl border border-[var(--cm-line)] bg-[var(--cm-blue-soft)] text-[var(--cm-blue)] [&_svg]:size-7">
                  <ServiceIcon name={s.icon} />
                </span>
                <span
                  className="cm-display text-[2.6rem] leading-none cm-outline"
                  style={{ WebkitTextStroke: "1px rgba(12,36,61,0.18)" }}
                >
                  0{i + 1}
                </span>
              </div>

              <h3 className="mt-7 text-[1.3rem] font-semibold leading-tight text-[var(--cm-ink)] sm:text-[1.45rem]">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--cm-muted)]">{s.desc}</p>

              <div className="mt-6 cm-rule" />

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--cm-blue)]">
                {s.listLabel}
              </p>
              <ul className="mt-4 grid list-none grid-cols-1 gap-x-6 gap-y-2.5 p-0 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-[0.92rem] text-[var(--cm-ink)]">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[var(--cm-violet-soft)] text-[var(--cm-violet)] [&_svg]:size-3">
                      <Check />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <p className="mb-0 mt-7 text-[0.9rem] leading-relaxed text-[var(--cm-muted)]">{s.note}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
