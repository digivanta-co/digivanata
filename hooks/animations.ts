"use client";

/* ================================================================
   Reusable GSAP + ScrollTrigger animation hooks.
   Each hook returns a ref to attach to the target element, registers
   a scoped gsap.context, and reverts (kills triggers) on unmount.
   All hooks no-op under prefers-reduced-motion.
   ================================================================ */
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, reduced, REVEAL_FROM, REVEAL_TO, EASE, type RevealVariant } from "@/animations/gsap";

// run before paint on the client so there's no flash of un-animated content
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Fade / slide / scale / blur / rotate an element in as it enters the viewport. */
export function useReveal<T extends HTMLElement = HTMLDivElement>(opts: {
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  start?: string;
} = {}) {
  const { variant = "up", delay = 0, duration = 0.9, start = "top 95%" } = opts;
  const ref = useRef<T>(null);
  useIso(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(el, REVEAL_FROM[variant], {
        ...REVEAL_TO[variant],
        duration,
        delay,
        ease: EASE,
        scrollTrigger: { trigger: el, start, once: true, toggleActions: "play none none none" },
      });
    }, el);
    // Refresh ScrollTrigger after paint to ensure initial triggers evaluate on first load
    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => ctx.revert();
  }, [variant, delay, duration, start]);
  return ref;
}

/** Reveal direct children (or a selector) one after another with a stagger. */
export function useStagger<T extends HTMLElement = HTMLDivElement>(opts: {
  selector?: string;
  y?: number;
  scale?: number;
  duration?: number;
  stagger?: number;
  start?: string;
} = {}) {
  const { selector, y = 60, scale = 0.95, duration = 0.8, stagger = 0.08, start = "top 95%" } = opts;
  const ref = useRef<T>(null);
  useIso(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const items = selector ? el.querySelectorAll(selector) : el.children;
    if (!items.length) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y, scale },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          stagger,
          ease: EASE,
          scrollTrigger: { trigger: el, start, once: true, toggleActions: "play none none none" },
        }
      );
    }, el);
    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => ctx.revert();
  }, [selector, y, scale, duration, stagger, start]);
  return ref;
}

/** Mask-reveal text line by line. Target should contain `.tr-line` spans. */
export function useTextReveal<T extends HTMLElement = HTMLHeadingElement>(opts: {
  selector?: string;
  stagger?: number;
  start?: string;
} = {}) {
  const { selector = ".tr-line", stagger = 0.1, start = "top 95%" } = opts;
  const ref = useRef<T>(null);
  useIso(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const lines = el.querySelectorAll(selector);
    if (!lines.length) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.95,
          stagger,
          ease: "power4.out",
          // clear the transform once settled so any gradient/clip text on the
          // line can paint normally
          clearProps: "transform",
          scrollTrigger: { trigger: el, start, once: true, toggleActions: "play none none none" },
        }
      );
    }, el);
    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => ctx.revert();
  }, [selector, stagger, start]);
  return ref;
}

/** Count up to a target number when the element enters the viewport. */
export function useCounter<T extends HTMLElement = HTMLSpanElement>(
  target: number,
  opts: { suffix?: string; duration?: number; start?: string; decimals?: number } = {}
) {
  const { suffix = "", duration = 2, start = "top 90%", decimals = 0 } = opts;
  const ref = useRef<T>(null);
  useIso(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced()) {
      el.textContent = `${target.toFixed(decimals)}${suffix}`;
      return;
    }
    const obj = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        v: target,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = `${obj.v.toFixed(decimals)}${suffix}`;
        },
        scrollTrigger: { trigger: el, start, once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [target, suffix, duration, start, decimals]);
  return ref;
}

/** Pointer-driven 3D tilt (rotationX/Y). Put `perspective` on an ancestor.
 *  `global` tracks the pointer across the whole window (nice for hero text). */
export function useTilt<T extends HTMLElement = HTMLDivElement>(opts: {
  max?: number;
  global?: boolean;
} = {}) {
  const { max = 9, global: isGlobal = false } = opts;
  const ref = useRef<T>(null);
  useIso(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    gsap.set(el, { transformPerspective: 900 });
    const rx = gsap.quickTo(el, "rotationX", { duration: 0.8, ease: "power3.out" });
    const ry = gsap.quickTo(el, "rotationY", { duration: 0.8, ease: "power3.out" });
    const move = (e: PointerEvent) => {
      const r = isGlobal
        ? { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight }
        : el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      rx(-py * max * 2);
      ry(px * max * 2);
    };
    const leave = () => {
      rx(0);
      ry(0);
    };
    const target: Window | HTMLElement = isGlobal ? window : el;
    target.addEventListener("pointermove", move as EventListener);
    target.addEventListener("pointerleave", leave);
    return () => {
      target.removeEventListener("pointermove", move as EventListener);
      target.removeEventListener("pointerleave", leave);
    };
  }, [max, isGlobal]);
  return ref;
}

/** Seamless infinite marquee. The element must contain its content TWICE.
 *  Pauses automatically while the marquee is off screen. */
export function useMarquee<T extends HTMLElement = HTMLDivElement>(opts: {
  duration?: number;
  reverse?: boolean;
} = {}) {
  const { duration = 26, reverse = false } = opts;
  const ref = useRef<T>(null);
  useIso(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(
        el,
        { xPercent: reverse ? -50 : 0 },
        { xPercent: reverse ? 0 : -50, duration, ease: "none", repeat: -1, paused: true }
      );
      ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => (self.isActive ? tween.play() : tween.pause()),
      });
    }, el);
    return () => ctx.revert();
  }, [duration, reverse]);
  return ref;
}

/** Subtle scroll-linked parallax drift for floating background shapes. */
export function useParallax<T extends HTMLElement = HTMLDivElement>(opts: { y?: number } = {}) {
  const { y = 80 } = opts;
  const ref = useRef<T>(null);
  useIso(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        y,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
    }, el);
    return () => ctx.revert();
  }, [y]);
  return ref;
}
