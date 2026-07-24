"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from "react";
import gsap from "gsap";

// run before paint on the client so there's no flash of un-animated content
const useIsoEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** stagger step (1–5); each step adds ~80ms */
  delay?: number;
  id?: string;
};

export default function Reveal({ children, as, className = "", delay = 0, id }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useIsoEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // hidden until it scrolls into view
    gsap.set(el, { opacity: 0, y: 32 });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            delay: delay * 0.08,
            clearProps: "transform,opacity",
          });
          io.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref as React.Ref<HTMLElement>} id={id} className={className}>
      {children}
    </Tag>
  );
}
