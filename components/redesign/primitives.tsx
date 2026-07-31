"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
  type ElementType,
} from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

const reduce = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)").matches;

/* Magnetic CTA — renders a real <a>, leans toward the cursor. */
export function RdMagnetic({
  children,
  href,
  className,
  external,
  strength = 0.4,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  external?: boolean;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  function onMove(e: React.MouseEvent) {
    if (reduce() || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      className={cn("rd-btn", className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </motion.a>
  );
}

/* 3D tilt + spotlight-glow driver for .rd-glass cards. */
export function RdTilt({
  children,
  className,
  as = "div",
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 200, damping: 20 });

  function onMove(e: React.MouseEvent) {
    if (reduce() || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    px.set(nx);
    py.set(ny);
    ref.current.style.setProperty("--mx", `${nx * 100}%`);
    ref.current.style.setProperty("--my", `${ny * 100}%`);
  }

  const MotionTag = (motion[as as "div"] ?? motion.div) as typeof motion.div;
  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900, willChange: "transform" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/* Splits every plain-text .rd-h2 into masked words and reveals them on scroll. */
export function RdHeadingFx() {
  useEffect(() => {
    if (reduce()) return;
    let ctx: gsap.Context | undefined;
    let cancelled = false;
    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const heads = document.querySelectorAll<HTMLElement>(
          ".rd .rd-h2:not(.rd-story__line):not([data-fx])"
        );
        heads.forEach((h) => {
          // only split simple text headings — skip anything with markup inside
          if (h.children.length > 0 || !h.textContent?.trim()) return;
          h.setAttribute("data-fx", "");
          const words = h.textContent.trim().split(/\s+/);
          h.textContent = "";
          words.forEach((w, i) => {
            const mask = document.createElement("span");
            mask.className = "rd-word";
            const inner = document.createElement("span");
            inner.className = "rd-word__in";
            inner.textContent = w;
            mask.appendChild(inner);
            h.appendChild(mask);
            if (i < words.length - 1) h.appendChild(document.createTextNode(" "));
          });
          gsap.from(h.querySelectorAll(".rd-word__in"), {
            yPercent: 115,
            rotate: 4,
            transformOrigin: "0% 100%",
            duration: 0.65,
            ease: "power4.out",
            stagger: 0.04,
            scrollTrigger: { trigger: h, start: "top 95%", once: true },
          });
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);
  return null;
}

/* Top scroll-progress bar — lightweight GPU accelerated transform. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden
      style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%", willChange: "transform" }}
      className="rd-progress"
    />
  );
}
