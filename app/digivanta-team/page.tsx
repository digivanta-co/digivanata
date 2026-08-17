import type { Metadata } from "next";
import TeamHero from "@/components/team/TeamHero";
import TeamLeadership from "@/components/team/TeamLeadership";
import TeamGrid from "@/components/team/TeamGrid";
import TeamCta from "@/components/team/TeamCta";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getPageMetadata, SEO_PAGES } from "@/lib/seo-config";

export const metadata: Metadata = getPageMetadata("team");

export default function TeamPage() {
  return (
    <main className="dv-grain bg-[var(--bg)] text-[var(--ink)]">
      <WebPageJsonLd name={SEO_PAGES.team.title} description={SEO_PAGES.team.description} path={SEO_PAGES.team.path} type="ProfilePage" />
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
