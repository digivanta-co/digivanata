"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  MonitorSmartphone,
  Search,
  Megaphone,
  Share2,
  Palette,
  PenTool,
  ShoppingCart,
  Target,
  Rocket,
  FileText,
  Boxes,
  type LucideIcon,
} from "lucide-react";
import { ABOUT_SERVICES } from "@/lib/about-data";

const ICONS: Record<string, LucideIcon> = {
  Code2, MonitorSmartphone, Search, Megaphone, Share2, Palette,
  PenTool, ShoppingCart, Target, Rocket, FileText, Boxes,
};

// gold-accented cards add hierarchy to the masonry grid
const GOLD = new Set([2, 5, 9]);

const gradText: React.CSSProperties = {
  backgroundImage: "linear-gradient(100deg,#235EA7,#4f93d4)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-32">
      {/* soft radial glow + subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "radial-gradient(55% 40% at 50% 0%, rgba(35,94,167,0.07), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(72% 60% at 50% 38%, #000, transparent 82%)",
          WebkitMaskImage: "radial-gradient(72% 60% at 50% 38%, #000, transparent 82%)",
        }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[700px] text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#235EA7]/20 bg-[#235EA7]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#235EA7]">
            <span className="size-1.5 rounded-full bg-[#D4AF37]" /> What we do
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-display),var(--font)] text-[clamp(2.2rem,5vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0C243D]">
            Everything you need to <span style={gradText}>grow online</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[1.05rem] leading-relaxed text-slate-500">
            At Digivanta, we provide complete digital solutions tailored to your business goals.
          </p>
        </motion.div>

        {/* masonry */}
        <div className="mt-14 gap-6 sm:columns-2 lg:columns-3">
          {ABOUT_SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Boxes;
            const gold = GOLD.has(i);
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.08 }}
                className="group mb-6 break-inside-avoid rounded-[24px] border border-slate-200/70 bg-white/95 p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-16px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-[#235EA7]/30 hover:shadow-[0_28px_60px_-24px_rgba(35,94,167,0.45)]"
              >
                <span
                  className={
                    "mb-5 inline-grid size-14 place-items-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 " +
                    (gold
                      ? "bg-[linear-gradient(135deg,#D4AF37,#eacb66)] shadow-[#D4AF37]/30"
                      : "bg-[linear-gradient(135deg,#235EA7,#4f93d4)] shadow-[#235EA7]/30")
                  }
                >
                  <Icon size={30} strokeWidth={2} />
                </span>
                <h3 className="text-[1.15rem] font-bold leading-snug text-[#0C243D]">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-500">{s.desc}</p>
                <Link
                  href={s.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#235EA7] transition-colors hover:text-[#D4AF37]"
                >
                  Learn More
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
