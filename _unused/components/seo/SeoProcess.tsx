"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SEO_PROCESS_STEPS } from "@/lib/seo-data";
import Reveal from "@/components/ui/Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SeoProcess() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const steps = section.querySelectorAll(".seop__row");

    gsap.fromTo(
      steps,
      { opacity: 0, x: -28 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 75%", once: true },
      }
    );

    let lineTween: gsap.core.Tween | undefined;
    if (line) {
      lineTween = gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill();
      });
      lineTween?.kill();
    };
  }, []);

  return (
    <section className="seo-light-section" id="seo-process">
      <div className="container">
        <Reveal className="seo-sec-head seo-sec-head--light">
          <p className="seo-sec-label seo-sec-label--dark">
            <span className="seo-sec-label__line" />
            Our Process
          </p>
          <h2>Our SEO Process</h2>
          <p className="seo-sec-desc seo-sec-desc--dark">A strategic, data-driven approach that turns technical optimization into measurable organic growth.</p>
        </Reveal>

        <div ref={sectionRef} className="seop">
          <div ref={lineRef} className="seop__line" aria-hidden="true" />
          {SEO_PROCESS_STEPS.map((step) => (
            <div key={step.step} className="seop__row">
              <span className="seop__num">{step.step}</span>
              <div>
                <h3 className="seop__title">{step.title}</h3>
                <p className="seop__text">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
