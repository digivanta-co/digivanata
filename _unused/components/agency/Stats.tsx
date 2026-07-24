"use client";

import { AG_STATS } from "@/lib/agency-data";
import Counter from "@/components/ui/Counter";

export default function Stats() {
  return (
    <section id="stats" className="ag-grain relative border-y border-[var(--ag-line)] py-24">
      <div aria-hidden className="ag-blob ag-blob--purple left-1/2 top-1/2 size-[40vw] max-w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-25" />
      <div className="container relative z-10 grid grid-cols-2 gap-y-12 md:grid-cols-4">
        {AG_STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="ag-display text-[clamp(3rem,7vw,5.5rem)] text-white">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--ag-muted)]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
