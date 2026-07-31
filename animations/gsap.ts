/* ================================================================
   Central GSAP setup — registers ScrollTrigger once, exposes the
   reveal variant presets and a reduced-motion helper.
   ================================================================ */
import { gsap } from "gsap";
// NOTE: must be "gsap/ScrollTrigger" (not "gsap/dist/...") so the whole site
// shares ONE ScrollTrigger instance — the dist path loads a second copy that
// fights the first (mis-measured pins, dead reveals, mobile jank).
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  // don't re-measure everything when the mobile URL bar shows/hides
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export { gsap, ScrollTrigger };

/** Respect the user's OS-level reduced-motion preference. */
export const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export type RevealVariant = "up" | "left" | "right" | "scale" | "blur" | "rotate";

/** "From" states for each reveal flavour (animates TO the natural state). */
export const REVEAL_FROM: Record<RevealVariant, gsap.TweenVars> = {
  up: { y: 64, opacity: 0 },
  left: { x: -72, opacity: 0 },
  right: { x: 72, opacity: 0 },
  scale: { scale: 0.85, opacity: 0 },
  blur: { y: 26, opacity: 0, filter: "blur(14px)" },
  rotate: { y: 48, rotate: -4, opacity: 0, transformOrigin: "left center" },
};

/** Explicit natural end states — used with fromTo so reveals ALWAYS finish
 *  visible (a plain gsap.from can leave content stuck hidden under React
 *  Strict Mode's double-mount). */
export const REVEAL_TO: Record<RevealVariant, gsap.TweenVars> = {
  up: { y: 0, opacity: 1 },
  left: { x: 0, opacity: 1 },
  right: { x: 0, opacity: 1 },
  scale: { scale: 1, opacity: 1 },
  blur: { y: 0, opacity: 1, filter: "blur(0px)" },
  rotate: { y: 0, rotate: 0, opacity: 1 },
};

export const EASE = "power3.out";
