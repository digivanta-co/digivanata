import type { Metadata } from "next";
import TeamHero from "@/components/team/TeamHero";
import TeamLeadership from "@/components/team/TeamLeadership";
import TeamGrid from "@/components/team/TeamGrid";
import TeamCta from "@/components/team/TeamCta";

export const metadata: Metadata = {
  title: "Meet The Team | Digivanta — Digital Growth Partner",
  description:
    "Meet the passionate minds behind Digivanta — our leadership, graphic designers, digital marketing executives, and developers driving real digital growth.",
  openGraph: {
    title: "Meet The Team — Digivanta",
    description:
      "Passionate minds. Creative thinkers. Digital experts driving real growth. Meet the Digivanta team.",
    type: "website",
    locale: "en_IN",
  },
};

export default function TeamPage() {
  return (
    <main className="dv-grain bg-[var(--bg)] text-[var(--ink)]">
      <TeamHero />
      <TeamLeadership />
      <TeamGrid />
      <TeamCta />
    </main>
  );
}
