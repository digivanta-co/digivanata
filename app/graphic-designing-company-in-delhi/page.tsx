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
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { getPageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = getPageMetadata("design");

export default function GraphicDesigningPage() {
  return (
    <main className="gd">
      <ServiceJsonLd
        name="Graphic Design & Branding"
        description={`Digivanta is a professional graphic designing company in Delhi offering logo design, brand identity, social media creatives, brochure and web graphics for startups and businesses across Delhi NCR.`}
        path="/graphic-designing-company-in-delhi"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Graphic Design & Branding", path: "/graphic-designing-company-in-delhi" },
        ]}
      />
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
