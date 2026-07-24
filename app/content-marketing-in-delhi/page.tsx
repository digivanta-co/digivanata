import type { Metadata } from "next";
import HeroSection, { IntroSection } from "@/components/content/sections/Hero";
import { VelocityMarquee } from "@/components/content/sections/Marquee";
import { MattersSection, ApproachSection } from "@/components/content/sections/Value";
import { ServicesSection } from "@/components/content/sections/Services";
import { ProcessSection } from "@/components/content/sections/Process";
import { WhySection, GrowthSection, AudienceSection } from "@/components/content/sections/Trust";
import { BigStatement } from "@/components/content/sections/BigStatement";
import { FAQSection } from "@/components/content/sections/Faq";
import { CTASection } from "@/components/content/sections/Cta";
import { CtaRibbon } from "@/components/content/primitives";
import { CM_RIBBON } from "@/lib/content-data";

export const metadata: Metadata = {
  title: "Content Marketing Services in Delhi | SEO Content, Blog & Website Writing — Digivanta",
  description:
    "Digivanta offers strategic content marketing and content writing services in Delhi — SEO content, website copy, blogs and articles that improve search visibility, build trust and drive qualified leads across Delhi NCR.",
  keywords: [
    "Content Marketing Services in Delhi",
    "Content Writing Services in Delhi",
    "Content Marketing Company in Delhi",
    "SEO Content Writing Services in Delhi",
    "Website Content Writing Services in Delhi",
    "Blog Writing Services in Delhi",
    "Article Writing Services in Delhi",
  ],
  openGraph: {
    title: "Content Marketing Services in Delhi — Digivanta",
    description:
      "Content is the voice of your brand when you are not in the room. SEO-focused, user-driven content that ranks, reads and converts.",
    type: "website",
    locale: "en_IN",
  },
};

export default function ContentMarketingPage() {
  return (
    <main className="cm">
      <HeroSection />
      <IntroSection />
      <VelocityMarquee />
      <MattersSection />
      <ApproachSection />

      <CtaRibbon text={CM_RIBBON.first} cta={CM_RIBBON.firstCta} />

      <ServicesSection />
      <ProcessSection />
      <WhySection />

      <BigStatement />

      <GrowthSection />
      <AudienceSection />

      <CtaRibbon text={CM_RIBBON.second} cta={CM_RIBBON.secondCta} />

      <FAQSection />
      <CTASection />
    </main>
  );
}
