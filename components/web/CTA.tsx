"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { registerGSAP } from "@/hooks/useGSAPAnimations";

type CTAProps = {
  heading: string;
  desc?: string;
  ctaText?: string;
  ctaHref?: string;
  id?: string;
  variant?: "dark" | "light";
};

export default function CTA({
  heading,
  desc,
  ctaText = "Get a Free Website Strategy Consultation",
  ctaHref = "#web-contact",
  id,
  variant = "dark",
}: CTAProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGSAP();
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from(el.querySelectorAll("[data-cta-item]"), {
      y: 36,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 80%", once: true },
    });

    const line = el.querySelector("[data-cta-line]");
    if (line) {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        }
      );
    }
  }, []);

  const isDark = variant === "dark";

  return (
    <section
      ref={ref}
      id={id}
      className={`web-section border-t border-black/10 py-12 sm:py-20 lg:py-28 ${isDark ? "bg-[#0a0a0a] text-white" : "bg-white"}`}
    >
      <div className="container text-center">
        <h2
          data-cta-item
          className="mx-auto max-w-3xl font-[family-name:var(--font-display),var(--font)] text-[clamp(2rem,5vw,3.5rem)] font-[800] leading-[1.08] tracking-[-0.03em]"
        >
          {heading}
        </h2>
        <span
          data-cta-line
          className="mx-auto mt-5 block h-px w-24 origin-center bg-[#C9A227]"
          aria-hidden
        />
        {desc && (
          <p
            data-cta-item
            className={`mx-auto mt-6 max-w-2xl text-[1.05rem] font-light leading-relaxed ${isDark ? "text-[#bbb]" : "text-[#555]"}`}
          >
            {desc}
          </p>
        )}
        <Link
          data-cta-item
          href={ctaHref}
          className={`web-btn web-btn--primary mt-10 ${isDark ? "" : ""}`}
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
