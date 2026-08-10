"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { Label } from "@/components/design/primitives";
import { GD_FAQS } from "@/lib/design-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Minimal accordion — thin lines, gold numbers, plus toggle. */
export function FAQSection({ items = GD_FAQS }: { items?: typeof GD_FAQS }) {
  const root = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState<number | null>(0);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".gd-faq__item", {
        y: 30,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="gd-faq relative py-10 sm:py-14">
      <div className="container grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28">
          <Label>Good to know</Label>
          <h2 className="gd-display text-[clamp(1.9rem,4.2vw,4.1rem)] text-[var(--gd-ink)]">
            Faqs,
            <br />
            
          </h2>
        </div>

        <div className="border-t border-[var(--gd-line)]">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="gd-faq__item border-b border-[var(--gd-line)]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-baseline gap-5 bg-transparent py-5 text-left"
                >
                  <span className={"gd-display shrink-0 text-xs transition-colors duration-300 " + (isOpen ? "text-[var(--gd-gold)]" : "text-[var(--gd-muted)]")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={"flex-1 text-[0.95rem] font-semibold transition-colors duration-300 sm:text-base " + (isOpen ? "text-[var(--gd-ink)]" : "text-[var(--gd-muted)]")}>
                    {f.question}
                  </span>
                  <span
                    aria-hidden
                    className={"relative top-0.5 grid size-6 shrink-0 place-items-center text-lg leading-none transition-all duration-300 " + (isOpen ? "rotate-45 text-[var(--gd-gold)]" : "text-[var(--gd-muted)]")}
                  >
                    +
                  </span>
                </button>
                <div className={"grid transition-[grid-template-rows] duration-400 ease-out " + (isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <p className="mb-5 mt-0 pl-[calc(1.5rem+0.75rem)] pr-10 text-[0.92rem] leading-relaxed text-[var(--gd-muted)]">
                      {f.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
