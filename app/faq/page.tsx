import type { Metadata } from "next";
import FaqAccordion from "@/components/ui/faq-accordion";
import { FAQS } from "@/lib/home-data";
import { FaqJsonLd, WebPageJsonLd } from "@/components/seo/JsonLd";
import { getPageMetadata, SEO_PAGES } from "@/lib/seo-config";

export const metadata: Metadata = getPageMetadata("faq");

export default function FaqPage() {
  const items = FAQS.map((item) => ({
    question: item.q,
    answer: item.a,
  }));

  return (
    <>
      <WebPageJsonLd name={SEO_PAGES.faq.title} description={SEO_PAGES.faq.description} path={SEO_PAGES.faq.path} type="FAQPage" />
      <FaqJsonLd items={items} />
      <main className="section section--soft dv-grain">
        <div className="container container--narrow">
          <div className="section-head section-head--center">
            <span className="eyebrow"><i className="dot" /> FAQs</span>
            <h1>Frequently Asked <span className="gold-text">Questions</span></h1>
            <p>Everything you need to know about working with Digivanta.</p>
          </div>

          <FaqAccordion items={items} title="" />
        </div>
      </main>
    
    </>
  );
}
