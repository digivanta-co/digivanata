"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Spade } from "lucide-react";
import { cn } from "@/lib/utils";
import { BI_NAV_LINKS } from "@/lib/betindia-data";
import { PlayButton } from "./primitives";

export function BiLogo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("flex items-center gap-2.5", className)}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-[#d4af37]/40 bg-gradient-to-b from-[#16305083] to-[#0b1c34] shadow-[0_8px_24px_rgba(3,8,16,0.6)]">
        <Spade className="h-4.5 w-4.5 text-[#d4af37]" fill="currentColor" />
      </span>
      <span className="bi-serif text-xl font-semibold tracking-wide">
        BET<span className="bi-gold-text">INDIA</span>
      </span>
    </a>
  );
}

export default function BiNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-[#d4af37]/15 bg-[#081426]/85 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <BiLogo />

        <nav className="hidden items-center gap-8 lg:flex">
          {BI_NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#b7c2d0] transition-colors duration-300 hover:text-[#f0d47a]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#"
            className="text-sm font-semibold text-white/90 transition-colors hover:text-[#f0d47a]"
          >
            Sign In
          </a>
          <PlayButton size="md" href="#cta" />
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-[#081426]/95 px-6 py-6 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {BI_NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-[#b7c2d0] hover:bg-white/5 hover:text-[#f0d47a]"
              >
                {l.label}
              </a>
            ))}
            <PlayButton className="mt-4 w-full" href="#cta" />
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
