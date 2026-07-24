"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ElementType,
} from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const reduce = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------------------------
   MagneticButton — element leans toward the cursor, springs back.
   Renders an <a>/<Link> so it works as a real CTA.
---------------------------------------------------------------- */
export function MagneticButton({
  children,
  href,
  className,
  strength = 0.4,
  external,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  strength?: number;
  external?: boolean;
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
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn("ag-btn", className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </motion.a>
  );
}

/* ---------------------------------------------------------------
   TiltCard — 3D tilt toward cursor + drives --mx/--my for the
   glass spotlight glow.
---------------------------------------------------------------- */
export function TiltCard({
  children,
  className,
  as = "div",
  max = 10,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), {
    stiffness: 200,
    damping: 20,
  });

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
  function reset() {
    px.set(0.5);
    py.set(0.5);
  }

  const MotionTag = motion[as as "div"] ?? motion.div;
  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/* ---------------------------------------------------------------
   CursorFollower — a soft glowing dot that trails the pointer.
   Mounted once inside the agency page. Hidden on touch / reduced.
---------------------------------------------------------------- */
export function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (reduce() || window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.span
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-60 -ml-4 -mt-4 size-8 rounded-full bg-[#4F7DFD] opacity-40 blur-md mix-blend-screen"
    />
  );
}
