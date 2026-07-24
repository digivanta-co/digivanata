import type { Metadata } from "next";
import HeroSection from "@/components/design/sections/Hero";
import { VelocityMarquee } from "@/components/design/sections/Marquee";
import { ProblemSection, BigStatement } from "@/components/design/sections/Value";
import { ServicesSection } from "@/components/design/sections/Services";
import { ProcessSection } from "@/components/design/sections/Process";
import { ImpactSection, WhySection, IndustriesSection } from "@/components/design/sections/Trust";
import { FAQSection } from "@/components/design/sections/Faq";
import { CTASection } from "@/components/design/sections/Cta";
import { CtaRibbon } from "@/components/design/primitives";

export const metadata: Metadata = {
  title: "Graphic Designing Company in Delhi | Logo, Branding & Creative Design — Digivanta",
  description:
    "Digivanta is a professional graphic designing company in Delhi offering logo design, brand identity, social media creatives, brochure and web graphics for startups and businesses across Delhi NCR.",
  keywords: [
    "Graphic designing company in Delhi",
    "Graphic design agency in Delhi",
    "Logo design services Delhi",
    "Brand identity design Delhi",
    "Social media creative design services",
    "Brochure design company in Delhi",
    "Creative design agency Delhi NCR",
  ],
  openGraph: {
    title: "Graphic Designing Company in Delhi — Digivanta",
    description:
      "Your brand is judged before you say a word. Strategic, visually impactful design solutions — logos, branding, social creatives, print and web graphics.",
    type: "website",
    locale: "en_IN",
  },
};

export default function GraphicDesigningPage() {
  return (
    <main className="gd">
      <HeroSection />
      <VelocityMarquee />
      <ProblemSection />
      <ServicesSection />

      <CtaRibbon
        text="Need consistent social media branding across every platform?"
        cta="Get my creatives designed"
      />

      <ProcessSection />
      <BigStatement lines={["Every pixel", "tells a story."]} />
      <ImpactSection />
      <WhySection />
      <IndustriesSection />

      <CtaRibbon
        text="Looking to improve your brand identity? Book a free creative consultation."
        cta="Schedule a consult"
      />

      <FAQSection />
      <CTASection />
    </main>
  );
}
