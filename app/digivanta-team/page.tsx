import type { Metadata } from "next";
import TeamHero from "@/components/team/TeamHero";
import TeamLeadership from "@/components/team/TeamLeadership";
import TeamGrid from "@/components/team/TeamGrid";
import TeamCta from "@/components/team/TeamCta";
import { BreadcrumbJsonLd, PersonListJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getPageMetadata, SEO_PAGES } from "@/lib/seo-config";
import { TEAM_LEADERS, TEAM_GROUPS } from "@/lib/team-data";

export const metadata: Metadata = getPageMetadata("team");

const TEAM_PEOPLE = [
  ...TEAM_LEADERS.map((m) => ({ name: m.name, role: m.role, image: m.photo })),
  ...TEAM_GROUPS.flatMap((g) => g.members.map((m) => ({ name: m.name, role: m.role, image: m.photo }))),
];

export default function TeamPage() {
  return (
    <main className="dv-grain bg-[var(--bg)] text-[var(--ink)]">
      <WebPageJsonLd name={SEO_PAGES.team.title} description={SEO_PAGES.team.description} path={SEO_PAGES.team.path} type="WebPage" />
      <PersonListJsonLd people={TEAM_PEOPLE} path={SEO_PAGES.team.path} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Team", path: "/digivanta-team" },
        ]}
      />
      <TeamHero />
      <TeamLeadership />
      <TeamGrid />
      <TeamCta />
    </main>
  );
}
