import Link from "next/link";
import { TypingKeyboard } from "@/components/ui/typing-keyboard";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

const KEYWORDS =
  "digital marketing company in delhi   seo services in delhi   performance marketing agency delhi   social media marketing   ";

export default function SearchDemand() {
  return (
    <section className="searchkb section--soft" id="search-demand">
      <div className="container searchkb__inner">
        <Reveal className="searchkb__copy">
          <span className="eyebrow"><i className="dot" /> Search demand</span>
          <h2>
            Your customers are searching{" "}
            <span className="grad-text-gold">right now.</span> Are you showing up?
          </h2>
          <p>
            Thousands of people in Delhi type these queries into Google every month.
            Digivanta makes sure your business is the result they click — with
            data-driven SEO, paid ads and content.
          </p>
          <Link href="#contact" className="btn btn--gold btn--lg">
            Get a Free SEO Audit <ArrowRight />
          </Link>
        </Reveal>

        <Reveal className="searchkb__visual" delay={2}>
          <div className="kb-frame">
            <div className="kb-inner">
              <TypingKeyboard
                scale={1}
                accentColor="#0c0c0e"
                secondaryAccent="#C8A45D"
                autoTypeText={KEYWORDS}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
