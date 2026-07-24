"use client";

import Image from "next/image";
import { RD_TOOLS_HEADING } from "@/lib/redesign-data";
import { TOOLS } from "@/lib/home-data";

/** Infinite horizontal logo carousel — grayscale, reveals color on hover. */
export default function RdTools() {
  const items = TOOLS.filter((t) => t.name);
  const loop = [...items, ...items];

  return (
    <section className="relative overflow-hidden border-y border-[var(--rd-border)] bg-[var(--rd-gray)] py-12">
      <div className="container mb-8 text-center">
        <span className="rd-eyebrow mb-3 justify-center">Our stack</span>
        <h2 className="rd-h2 text-[var(--rd-ink)]">{RD_TOOLS_HEADING}</h2>
      </div>

      <div className="relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--rd-gray)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--rd-gray)] to-transparent" />

        <div className="flex mt-4 w-max animate-[marquee_38s_linear_infinite] gap-4 hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <div
              key={i}
              className="group flex h-20 w-40 shrink-0 items-center justify-center gap-3 rounded-2xl border border-[var(--rd-border)] bg-white px-5"
            >
              <Image
                src={t.icon}
                alt={t.name}
                width={28}
                height={28}
                className="size-7 object-contain  transition-all duration-300"
              />
              <span className="text-sm font-medium text-[var(--rd-muted)] transition-colors group-hover:text-[var(--rd-ink)]">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
