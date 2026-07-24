import { PARTNER_POINTS, APPROACH_POINTS, CONTACT } from "@/lib/site-data";
import Reveal from "@/components/ui/Reveal";
import { WhatsApp } from "@/components/ui/Icons";

export default function PartnerSection() {
  return (
    <section className="section section--surface" id="about">
      <div className="container split">
        <Reveal className="split__content">
          <span className="eyebrow"><i className="dot" /> Your partner</span>
          <h2>Your Trusted Digital Growth Partner</h2>
          <p>
            We go beyond basic marketing services — we become an extension of your
            team, combining data, creativity and strategy to grow your business
            sustainably.
          </p>
          <h4>We are committed to:</h4>
          <ul className="check-list check-list--cols">
            {PARTNER_POINTS.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <h4>Our approach combines:</h4>
          <ul className="check-list check-list--cols">
            {APPROACH_POINTS.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <p className="highlight-text">
            Our goal is simple: reach the right people at the right time and convert
            them into loyal customers.
          </p>
          <a href={CONTACT.whatsapp} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
            <WhatsApp /> Talk to an expert
          </a>
        </Reveal>

        <Reveal className="split__visual" delay={2}>
          <div className="visual-3d">
            <div className="visual-3d__inner">
              <h3>Growth, by the numbers</h3>
              <p>Outcomes we consistently deliver for our clients.</p>
              <div className="visual-stats">
                <div className="visual-stat"><strong>800+</strong><span>Happy clients</span></div>
                <div className="visual-stat"><strong>16+ yrs</strong><span>Experience</span></div>
                <div className="visual-stat"><strong>4.9★</strong><span>Avg. rating</span></div>
                <div className="visual-stat"><strong>100+</strong><span>Tools &amp; channels</span></div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
