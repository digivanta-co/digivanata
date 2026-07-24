"use client";

import { type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TrendUp, Check, Star } from "@/components/ui/Icons";

/**
 * Hero3D — a floating, mouse-reactive 3D analytics panel.
 * Real perspective depth (preserve-3d + translateZ layers) that tilts toward the cursor.
 */
export default function Hero3D() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 110, damping: 16, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 110, damping: 16, mass: 0.5 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-15, 15]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [11, -11]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="hero__scene" onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div
        className="h3d"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="h3d__glow" />

        <div className="h3d__card">
          <div className="h3d__head">
            <b>Campaign Performance</b>
            <span className="badge-live"><i /> Live</span>
          </div>

          <div className="h3d__chart">
            <svg viewBox="0 0 320 120" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="h3dFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#286FAB" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#286FAB" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="h3dLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#286FAB" />
                  <stop offset="100%" stopColor="#9fc0ff" />
                </linearGradient>
              </defs>
              <path
                d="M0 96 C40 90 60 60 100 64 C140 68 158 32 200 38 C242 44 280 14 320 10 L320 120 L0 120 Z"
                fill="url(#h3dFill)"
              />
              <path
                className="h3d__chart-line"
                d="M0 96 C40 90 60 60 100 64 C140 68 158 32 200 38 C242 44 280 14 320 10"
                fill="none"
                stroke="url(#h3dLine)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="h3d__kpis">
            <div className="h3d__kpi"><strong>+142%</strong><span>Traffic</span></div>
            <div className="h3d__kpi"><strong>3.2×</strong><span>ROAS</span></div>
            <div className="h3d__kpi"><strong>847</strong><span>Leads</span></div>
          </div>
        </div>

        {/* Floating depth chips */}
        <div className="h3d__chip h3d__chip--a">
          <TrendUp /> +142% <span>organic</span>
        </div>
        <div className="h3d__chip h3d__chip--b">
          <Check /> SEO Score <strong>92</strong>
        </div>
        <div className="h3d__chip h3d__chip--c">
          <Star /> 4.9 <span>rating</span>
        </div>
      </motion.div>
    </div>
  );
}
