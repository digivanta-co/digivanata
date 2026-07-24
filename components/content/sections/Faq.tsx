"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { Kicker } from "@/components/content/primitives";
import { CM_FAQS } from "@/lib/content-data";
import type { FaqItem } from "@/components/ui/faq-accordion";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Minimal dark accordion — hairlines, blue numbers, plus/rotate toggle. */
export function FAQSection({ items = CM_FAQS }: { items?: FaqItem[] }) {
  const root = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState<number | null>(0);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".cm-faq__item", {
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
    <section ref={root} className="relative py-24">
      <div className="container grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28">
          <Kicker>Frequently asked questions</Kicker>
          <h2 className="cm-display text-[clamp(1.9rem,4.2vw,3.1rem)] text-[var(--cm-ink)]">
            Questions,
            <br />
            <span className="cm-grad">answered.</span>
          </h2>
        </div>

        <div className="border-t border-[var(--cm-line)]">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="cm-faq__item border-b border-[var(--cm-line)]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-baseline gap-5 bg-transparent py-5 text-left"
                >
                  <span
                    className={
                      "cm-display shrink-0 text-xs transition-colors duration-300 " +
                      (isOpen ? "text-[var(--cm-blue)]" : "text-[var(--cm-faint)]")
                    }
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={
                      "flex-1 text-[0.95rem] font-semibold transition-colors duration-300 sm:text-base " +
                      (isOpen ? "text-[var(--cm-ink)]" : "text-[var(--cm-muted)]")
                    }
                  >
                    {f.question}
                  </span>
                  <span
                    aria-hidden
                    className={
                      "relative top-0.5 grid size-6 shrink-0 place-items-center text-lg leading-none transition-all duration-300 " +
                      (isOpen ? "rotate-45 text-[var(--cm-blue)]" : "text-[var(--cm-muted)]")
                    }
                  >
                    +
                  </span>
                </button>
                <div
                  className={
                    "grid transition-[grid-template-rows] duration-400 ease-out " +
                    (isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")
                  }
                >
                  <div className="overflow-hidden">
                    <p className="mb-5 mt-0 pl-[calc(1.5rem+0.75rem)] pr-10 text-[0.92rem] leading-relaxed text-[var(--cm-muted)]">
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
