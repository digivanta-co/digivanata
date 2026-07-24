import { WHY_CHOOSE, WHY_CHOOSE_DESC } from "@/lib/home-data";
import Reveal from "@/components/ui/Reveal";
import { WhyIcon } from "@/components/ui/Icons";

export default function WhyChooseSection() {
  return (
    <section className="section section--soft">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow"><i className="dot" /> Why Digivanta</span>
          <h2>Why Choose Digivanta as Your Digital Marketing Company in Delhi</h2>
          <p>
            Businesses choose Digivanta because we focus on real business growth instead
            of vanity metrics. Here is what makes us different.
          </p>
        </Reveal>

        <div className="why-grid">
          {WHY_CHOOSE.map((w, i) => (
            <Reveal as="article" className="why-card" key={w} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <span className="why-card__ic"><WhyIcon index={i} /></span>
              <div>
                <h3>{w}</h3>
                <p>{WHY_CHOOSE_DESC[w]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
