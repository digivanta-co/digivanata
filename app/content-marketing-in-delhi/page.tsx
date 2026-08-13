import type { Metadata } from "next";
import HeroSection, { IntroSection } from "@/components/content/sections/Hero";
import { VelocityMarquee } from "@/components/content/sections/Marquee";
import { MattersSection, ApproachSection } from "@/components/content/sections/Value";
import { ServicesSection } from "@/components/content/sections/Services";
import { ProcessSection } from "@/components/content/sections/Process";
import { WhySection, GrowthSection, AudienceSection } from "@/components/content/sections/Trust";
import { FAQSection } from "@/components/content/sections/Faq";
import { CTASection } from "@/components/content/sections/Cta";
import { CtaRibbon } from "@/components/content/primitives";
import { CM_RIBBON } from "@/lib/content-data";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { getPageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = getPageMetadata("content");

export default function ContentMarketingPage() {
  return (
    <main className="cm">
      <ServiceJsonLd
        name="Content Marketing"
        description={`Digivanta offers strategic content marketing and content writing services in Delhi — SEO content, website copy, blogs and articles that improve search visibility, build trust and drive qualified leads across Delhi NCR.`}
        path="/content-marketing-in-delhi"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Content Marketing", path: "/content-marketing-in-delhi" },
        ]}
      />
      <HeroSection />
      <IntroSection />
      <VelocityMarquee />
      <MattersSection />
      <ApproachSection />

      <CtaRibbon text={CM_RIBBON.first} cta={CM_RIBBON.firstCta} />

      <ServicesSection />
      <ProcessSection />
      <WhySection />

      <GrowthSection />
      <AudienceSection />

      <CtaRibbon text={CM_RIBBON.second} cta={CM_RIBBON.secondCta} />

      <FAQSection />
      <CTASection />
    </main>
  );
}
