import { BUSINESS_CHALLENGES } from "@/lib/home-data";
import Reveal from "@/components/ui/Reveal";
import { AlertTriangle } from "@/components/ui/Icons";

export default function ChallengesSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow"><i className="dot" /> The problem</span>
          <h2>Why Businesses Need a Digital Marketing Agency in Delhi</h2>
          <p>
            Delhi is one of India&apos;s most competitive markets — thousands of
            businesses compete online every day. Without the right strategy, even great
            companies stay invisible. These are the challenges we fix.
          </p>
        </Reveal>

        <div className="grid grid--3">
          {BUSINESS_CHALLENGES.map((c, i) => (
            <Reveal as="article" className="prob-card" key={c} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <span className="prob-card__ic"><AlertTriangle /></span>
              <p>{c}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="section-head section-head--center" delay={2}>
          <p style={{ marginTop: "2.5rem" }}>
          A professional Digital Marketing Agency in Delhi helps solve these challenges using proven online marketing strategies.
At Digivanta, we understand that every business is different. We create customized digital marketing plans based on your business goals, industry competition, audience behavior, and market trends.

          </p>
        </Reveal>
      </div>
    </section>
  );
}
