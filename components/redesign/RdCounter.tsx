"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { METRICS } from "@/lib/site-data";

/** Parses "+142%", "3.2×", "−38%", "800+" into {prefix, num, decimals, suffix}. */
function parse(raw: string) {
  const m = raw.match(/^([^\d.-]*)(-?\d+(?:\.\d+)?)(.*)$/);
  if (!m) return { prefix: raw, num: 0, decimals: 0, suffix: "" };
  const decimals = m[2].includes(".") ? m[2].split(".")[1].length : 0;
  return { prefix: m[1], num: parseFloat(m[2]), decimals, suffix: m[3] };
}

function Metric({ raw, label, index }: { raw: string; label: string; index: number }) {
  const { prefix, num, decimals, suffix } = parse(raw);
  const ref = useRef<HTMLDivElement | null>(null);
  const [val, setVal] = useState(0);
  const [finished, setFinished] = useState(false);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      if (done.current) return;
      done.current = true;
      if (window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)").matches) {
        setVal(num);
        return;
      }
      const start = performance.now();
      const dur = 1500;
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(num * eased);
        if (p < 1) requestAnimationFrame(tick);
        else setFinished(true);
      };
      requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [num]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <motion.div
        animate={finished ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="rd-display text-[clamp(1.85rem,5.5vw,4.6rem)] leading-none text-[var(--rd-ink)]"
      >
        {prefix}
        {val.toFixed(decimals)}
        {suffix}
      </motion.div>
      <motion.span
        aria-hidden
        animate={finished ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-2.5 block h-0.5 w-8 origin-center rounded bg-[var(--rd-gold)]"
      />
      <div className="mt-2 text-xs sm:text-sm uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[var(--rd-muted)]">
        {label}
      </div>
    </motion.div>
  );
}

export default function RdCounter() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16">
      <div aria-hidden className="rd-blob rd-blob--blue rd-blob--float left-1/2 top-1/2 size-[40vw] max-w-[560px] -translate-x-1/2 -translate-y-1/2 opacity-40" />
      <div className="container relative z-10 grid grid-cols-2 gap-y-12 md:grid-cols-4">
        {METRICS.map((m, i) => (
          <Metric key={m.label} raw={m.value} label={m.label} index={i} />
        ))}
      </div>
    </section>
  );
}
