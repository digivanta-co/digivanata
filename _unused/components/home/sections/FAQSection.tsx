import { FAQS } from "@/lib/home-data";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/ui/faq-accordion";

export default function FAQSection() {
  const items = FAQS.map((item) => ({
    question: item.q,
    answer: item.a,
  }));

  return (
    <section className="section section--soft" id="faq">
      <div className="container container--narrow">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow"><i className="dot" /> FAQs</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about working with Digivanta.</p>
        </Reveal>

        <Reveal>
          <FaqAccordion items={items} title="" />
        </Reveal>
      </div>
    </section>
  );
}
