"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SEO_BENEFITS } from "@/lib/seo-data";
import Reveal from "@/components/ui/Reveal";
import { SeoIcon } from "@/components/seo/SeoIcons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SeoBenefits() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = el.querySelectorAll(".seob");
    const tween = gsap.fromTo(
      cards,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="seo-light-section" id="seo-benefits">
      <div className="container">
        <Reveal className="seo-sec-head seo-sec-head--light">
          <p className="seo-sec-label seo-sec-label--dark">
            <span className="seo-sec-label__line" />
            Benefits
          </p>
          <h2>Benefits of SEO for Businesses</h2>
          <p className="seo-sec-desc seo-sec-desc--dark">Strategic SEO delivers measurable improvements across traffic, trust, and long-term brand visibility.</p>
        </Reveal>

        <div ref={gridRef} className="seob-grid">
          {SEO_BENEFITS.map((b) => (
            <article key={b.title} className="seob">
              <span className="seob__icon">
                <SeoIcon name={b.icon} />
              </span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
