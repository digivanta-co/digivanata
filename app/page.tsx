import type { Metadata } from "next";
import { RdHeadingFx, ScrollProgress } from "@/components/redesign/primitives";
import RdHero from "@/components/redesign/RdHero";
import RdMarquee from "@/components/redesign/RdMarquee";
import RdStory from "@/components/redesign/RdStory";
import RdIntro from "@/components/redesign/RdIntro";
import RdWhyNeed from "@/components/redesign/RdWhyNeed";
import RdServices from "@/components/redesign/RdServices";
import RdJourney from "@/components/redesign/RdJourney";
import RdBigType from "@/components/redesign/RdBigType";
import RdWhyDigivanta from "@/components/redesign/RdWhyDigivanta";
import RdProcess from "@/components/redesign/RdProcess";
import RdIndustries from "@/components/redesign/RdIndustries";
import RdTools from "@/components/redesign/RdTools";
import RdCounter from "@/components/redesign/RdCounter";
import RdResults from "@/components/redesign/RdResults";
import RdFaq from "@/components/redesign/RdFaq";
import RdFinalCta from "@/components/redesign/RdFinalCta";
import {
  RD_BIGTYPE_1,
  RD_BIGTYPE_2,
} from "@/lib/redesign-data";
import { OrganizationJsonLd, WebPageJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { SEO_PAGES } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: { absolute: `${SEO_PAGES.home.title} | Digivanta` },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="rd">
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <WebPageJsonLd
        name={SEO_PAGES.home.title}
        description={SEO_PAGES.home.description}
        path="/"
      />
      <ScrollProgress />
      <RdHeadingFx />
      <RdHero />
      <RdMarquee />
      <RdStory />
      <RdIntro />
      <RdWhyNeed />
      <RdServices />
      <RdJourney />
      <RdBigType words={RD_BIGTYPE_1} accent={[3, 4, 5]} dark />
      <RdWhyDigivanta />
      <RdProcess />
      <RdIndustries />
      <RdTools />
    
      <RdResults />
      <RdFaq />
      <RdFinalCta />
    </main>
  );
}
