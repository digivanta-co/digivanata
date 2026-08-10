"use client";

import { BiLogo } from "./Nav";
import { BI_NAV_LINKS } from "@/lib/betindia-data";

export default function BiFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#050d1a]">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div>
            <BiLogo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#b7c2d0]/70">
              India&apos;s premium live Teen Patti destination. Crafted for
              players who appreciate the finer game.
            </p>
          </div>

          <nav className="grid gap-5 grid-cols-2 sm:grid-cols-3">
            {BI_NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#b7c2d0]/80 transition-colors hover:text-[#f0d47a]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-[#d4af37]/50 text-sm font-bold text-[#f0d47a]">
            18+
          </span>
        </div>

        <div className="mt-14 border-t border-white/6 pt-8">
          <p className="text-xs leading-relaxed text-[#b7c2d0]/50">
            BetIndia is intended for adult audiences (18+) in jurisdictions
            where real-money card games are permitted. Gambling involves
            financial risk and can be addictive — play responsibly. Deposit
            limits, session reminders and self-exclusion tools are available to
            all players. If you or someone you know struggles with gambling,
            please seek help.
          </p>
          <p className="mt-6 text-xs text-[#b7c2d0]/40">
            © {new Date().getFullYear()} BetIndia. All rights reserved. · Terms
            · Privacy · Responsible Gaming
          </p>
        </div>
      </div>
    </footer>
  );
}
