import type { Metadata } from "next";
import { VelocityMarquee } from "@/components/design/sections/Marquee";
import { BigStatement } from "@/components/design/sections/Value";
import { ProcessSection } from "@/components/design/sections/Process";
import { IndustriesSection } from "@/components/design/sections/Trust";
/* page-specific bold/colour sections — not shared with other service pages */
import {
  GdxCost,
  GdxHero,
  GdxImpact,
  GdxServices,
  GdxWhy,
  GdxWork,
} from "@/components/design/gdx/GdxSections";
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
  alternates: { canonical: "https://www.digivanta.com/graphic-designing-company-in-delhi" },
  openGraph: {
    title: "Graphic Designing Company in Delhi — Digivanta",
    description:
      "Your brand is judged before you say a word. Strategic, visually impactful design solutions — logos, branding, social creatives, print and web graphics.",
    type: "website",
    locale: "en_IN",
    url: "https://www.digivanta.com/graphic-designing-company-in-delhi",
  },
};

export default function GraphicDesigningPage() {
  return (
    <main className="gd">
      <GdxHero />
      <VelocityMarquee />
      <GdxCost />
      <GdxServices />
      {/* what we make → what we made */}
      <GdxWork />

      <CtaRibbon
        text="Need consistent social media branding across every platform?"
        cta="Get my creatives designed"
      />

      {/* pans the gallery in 60% of the scroll distance so the pin
          doesn't hold the viewport for ~1,350px */}
      <ProcessSection scrollFactor={0.6} />
      <BigStatement lines={["Every pixel", "tells a story."]} />
      <GdxImpact />
      <GdxWhy />
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
