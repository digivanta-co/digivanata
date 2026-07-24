"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WEB_STATS } from "@/lib/web-data";
import { registerGSAP } from "@/hooks/useGSAPAnimations";
import { StatIcon, SectionDecor } from "@/components/web/WebGraphics";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    registerGSAP();
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = `${value}${suffix}`;
      return;
    }

    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: value,
      duration: 1.6,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onUpdate: () => {
        el.textContent = `${Math.round(obj.val)}${suffix}`;
      },
    });

    return () => {
      tween.kill();
    };
  }, [value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from(el.querySelectorAll("[data-stat]"), {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 80%", once: true },
    });
  }, []);

  return (
    <section ref={ref} className="web-section relative overflow-hidden border-t border-black/10 bg-white py-20 lg:py-24">
      <SectionDecor />
      <div className="container relative z-[1]">
        <p className="mb-12 text-center text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#286FAB]">
          Trusted by Businesses Across Delhi NCR
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {WEB_STATS.map((s, i) => (
            <div key={s.label} data-stat className="text-center">
              <StatIcon index={i} />
              <strong className="block font-[family-name:var(--font-display),var(--font)] text-[clamp(3rem,6vw,4.5rem)] font-[800] leading-none tracking-[-0.04em] text-[#0a0a0a]">
                <Counter value={s.value} suffix={s.suffix} />
              </strong>
              <span className="mt-3 block text-[0.95rem] font-light text-[#555]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
