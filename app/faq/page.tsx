import type { Metadata } from "next";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import FaqAccordion from "@/components/ui/faq-accordion";
import { FAQS } from "@/lib/home-data";

export const metadata: Metadata = {
  title: "FAQ | Digivanta — Digital Marketing Company in Delhi",
  description: "Answers to common questions about SEO, ads, social media, and working with Digivanta.",
  alternates: { canonical: "https://www.digivanta.com/faq" },
  openGraph: {
    title: "FAQ — Digivanta",
    description: "Answers to common questions about SEO, ads, social media, and working with Digivanta.",
    url: "https://www.digivanta.com/faq",
  },
};

export default function FaqPage() {
  const items = FAQS.map((item) => ({
    question: item.q,
    answer: item.a,
  }));

  return (
    <>
     
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
