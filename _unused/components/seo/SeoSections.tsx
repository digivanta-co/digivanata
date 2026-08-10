import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { IndustryIcon } from "@/components/ui/Icons";
import { SeoIcon } from "@/components/seo/SeoIcons";
import { CONTACT } from "@/lib/site-data";
import {
  SEO_DID_YOU_KNOW,
  SEO_WHY_NEED,
  SEO_PROBLEMS,
  SEO_DIFFERENCE,
  SEO_AREAS,
  SEO_TOOLS,
  SEO_AI_PLATFORMS,
  SEO_INDUSTRIES,
  SEO_WHY_CHOOSE,
  SEO_TRUST_POINTS,
  SEO_AUTHOR,
} from "@/lib/seo-data";


export function DidYouKnowSection() {
  return (
    <section className="seo-light-section" id="seo-intro">
      <div className="container">
        <Reveal>
          <div className="seo-prose text-center">
            <p>
              As a trusted Best SEO Company in Delhi, Digivanta focus on creating SEO strategies that improve visibility, strengthen brand authority, and help businesses appear where users are actively searching on search engines, AI platforms, and voice search systems.
              Whether you are a local business, startup, eCommerce brand, service provider, or enterprise company, professional SEO Services in Delhi can help your website attract relevant visitors, improve search performance, and build long-term growth without depending completely on paid advertising.
            </p>

            <p>
              Choosing the right SEO Company in Delhi can help businesses improve search visibility, generate organic traffic, and create long-term digital growth.
            </p>
            <Link href="#contact" className="btn btn--primary btn--lg">Get Your Free SEO Consultation</Link>
            <p>
              With strategic keyword optimization, technical SEO, user-focused content, and AI search readiness, businesses can stay competitive in the evolving digital landscape.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   Why Businesses Need SEO
   ================================================================ */
export function WhyNeedSeoSection() {
  return (
    <section className="seo-light-section" id="why-seo">
      <div className="container">
        <Reveal className="seo-sec-head seo-sec-head--light">
          <p className="seo-sec-label seo-sec-label--dark"><span className="seo-sec-label__line" /> Modern SEO</p>
          <h2>{SEO_WHY_NEED.heading}</h2>
          <p className="seo-sec-desc seo-sec-desc--dark">{SEO_WHY_NEED.desc}</p>
        </Reveal>

        <div className="seo-plat-row">
          {SEO_WHY_NEED.platforms.map((p, i) => (
            <Reveal as="div" className="seo-plat" key={p.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <span className="seo-plat__icon">
                <SeoIcon name={p.icon} />
              </span>
              <h3>{p.name}</h3>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="seo-note2">{SEO_WHY_NEED.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   Common SEO Problems
   ================================================================ */
export function ProblemsSection() {
  return (
    <section className="seo-light-section" id="seo-problems">
      <div className="container">
        <Reveal className="seo-sec-head seo-sec-head--light">
          <p className="seo-sec-label seo-sec-label--dark"><span className="seo-sec-label__line" /> Common Issues</p>
          <h2>Common SEO Problems Businesses Face</h2>
          <p className="seo-sec-desc seo-sec-desc--dark">Many businesses struggle online because their websites are not properly optimized for modern search behavior.</p>
        </Reveal>

        <div className="seo-prob-grid">
          {SEO_PROBLEMS.map((p, i) => (
            <Reveal as="div" className="seo-prob" key={p.text} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <span className="seo-prob__icon">
                <SeoIcon name={p.icon} />
              </span>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   What Makes Us Different
   ================================================================ */
export function DifferenceSection() {
  return (
    <section className="seo-light-section" id="seo-difference">
      <div className="container">
        <div className="seo-split">
          <Reveal className="seo-split__content">
            <p className="seo-sec-label seo-sec-label--dark"><span className="seo-sec-label__line" /> Our Approach</p>
            <h2 className="seo-split__h2 seo-split__h2--dark">{SEO_DIFFERENCE.heading}</h2>
            <p className="seo-split__p seo-split__p--dark">{SEO_DIFFERENCE.desc}</p>
            <h4 className="seo-split__h4">We focus on:</h4>
            <ul className="seo-check-list seo-check-list--dark">
              {SEO_DIFFERENCE.focuses.map((f) => (
                <li key={f}>
                  <span className="seo-check-list__mark">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="btn btn--primary btn--lg mt-5"
            >
              Start Your SEO Journey
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </Reveal>

          <Reveal delay={2}>
            <div className="seo-photo">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1100"
                alt="Digivanta SEO team planning a search strategy"
                width={1100}
                height={825}
                sizes="(max-width: 992px) 90vw, 520px"
                className="seo-photo__img"
              />
              <div className="seo-photo__badge">
                <span className="seo-photo__badge-ic">
                  <SeoIcon name="trendUp" width={18} height={18} />
                </span>
                <div>
                  <strong>Data-driven SEO</strong>
                  <span>Built for long-term growth</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CTA Band — unique editorial style
   ================================================================ */
export function CtaBand({
  heading,
  desc,
  ctaText,
  ctaHref = "#contact",
  id,
}: {
  heading: string;
  desc: string;
  ctaText: string;
  ctaHref?: string;
  id?: string;
}) {
  return (
    <section className="seo-cta-section" id={id}>
      <div className="container">
        <Reveal>
          <div className="seo-cta">
            <div className="seo-cta__glow" />
            <div className="seo-cta__inner">
              <h2>{heading}</h2>
              <p>{desc}</p>
              <Link href={ctaHref} className="btn btn--primary btn--lg">
                {ctaText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   Areas We Serve
   ================================================================ */
export function AreasSection() {
  return (
    <section className="seo-light-section" id="seo-areas">
      <div className="container">
        <Reveal className="seo-sec-head seo-sec-head--light">
          <p className="seo-sec-label seo-sec-label--dark"><span className="seo-sec-label__line" /> Service Areas</p>
          <h2>Areas We Serve</h2>
          <p className="seo-sec-desc seo-sec-desc--dark">Our SEO services are available across Delhi and surrounding regions.</p>
        </Reveal>

        <div className="seo-pill-row seo-pill-row--light">
          {SEO_AREAS.map((area) => (
            <Reveal as="span" className="seo-pill seo-pill--light" key={area}>
              <SeoIcon name="mapPin" className="seo-pill__ic" /> {area}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   SEO Tools
   ================================================================ */
export function ToolsSection() {
  return (
    <section className="seo-light-section" id="seo-tools">
      <div className="container">
        <Reveal className="seo-sec-head seo-sec-head--light">
          <p className="seo-sec-label seo-sec-label--dark"><span className="seo-sec-label__line" /> Our Toolkit</p>
          <h2>SEO Tools We Use</h2>
          <p className="seo-sec-desc seo-sec-desc--dark">Advanced SEO tools and analytics platforms to improve website performance and track visibility.</p>
        </Reveal>

        <div className="seo-pill-row seo-pill-row--light">
          {SEO_TOOLS.map((tool) => (
            <Reveal as="span" className="seo-pill seo-pill--light" key={tool}>
              <SeoIcon name="wrench" className="seo-pill__ic" /> {tool}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   SEO for AI Platforms
   ================================================================ */
export function AiPlatformsSection() {
  return (
    <section className="seo-dark-section" id="seo-ai">
      <div className="container">
        <div className="seo-split">
          <Reveal className="seo-split__content">
            <p className="seo-sec-label"><span className="seo-sec-label__line" /> AI Search Optimization</p>
            <h2 className="seo-split__h2">{SEO_AI_PLATFORMS.heading}</h2>
            <p className="seo-split__p">{SEO_AI_PLATFORMS.desc}</p>
            <h4 className="seo-split__h4">We optimize websites for:</h4>
            <ul className="seo-check-list">
              {SEO_AI_PLATFORMS.optimizeFor.map((item) => (
                <li key={item}>
                  <span className="seo-check-list__mark">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2}>
            <div className="seo-dark-card">
              <h3>Visibility Across Platforms</h3>
              <ul className="seo-dark-card__list">
                {SEO_AI_PLATFORMS.visibilityAcross.map((platform) => (
                  <li key={platform}>
                    <span className="seo-dark-card__dot" />
                    {platform}
                  </li>
                ))}
              </ul>
              <p className="seo-dark-card__note">
                This future-focused approach helps businesses remain visible as search technology evolves.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Industries
   ================================================================ */
export function IndustriesSection() {
  return (
    <section className="seo-light-section" id="seo-industries">
      <div className="container">
        <Reveal className="seo-sec-head seo-sec-head--light">
          <p className="seo-sec-label seo-sec-label--dark"><span className="seo-sec-label__line" /> Industries</p>
          <h2>Industries We Serve</h2>
          <p className="seo-sec-desc seo-sec-desc--dark">Our SEO Services support businesses across multiple industries with customized strategies.</p>
        </Reveal>

        <div className="seo-pill-row seo-pill-row--light">
          {SEO_INDUSTRIES.map((industry) => (
            <Reveal as="span" className="seo-pill seo-pill--light seo-pill--industry" key={industry}>
              <IndustryIcon name={industry} /> {industry}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Why Choose Digivanta (Dark editorial)
   ================================================================ */
export function WhyChooseSection() {
  return (
    <section className="seo-light-section" id="seo-why-choose">
      <div className="container">
        <Reveal className="seo-sec-head seo-sec-head--light">
          <p className="seo-sec-label seo-sec-label--dark"><span className="seo-sec-label__line" /> Why Digivanta</p>
          <h2>Why Choose Our SEO Company in Delhi?</h2>
          <p className="seo-sec-desc seo-sec-desc--dark">We focus on sustainable growth rather than short-term ranking manipulation.</p>
        </Reveal>

        <div className="seo-why-grid">
          {SEO_WHY_CHOOSE.map((item, i) => (
            <Reveal as="div" className="seo-why-item" key={item} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <span className="seo-why-item__ic">✓</span>
              {item}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Why Trust Digivanta
   ================================================================ */
export function TrustSection() {
  return (
    <section className="seo-light-section" id="seo-trust">
      <div className="container">
        <div className="seo-split seo-split--light">
          <Reveal className="seo-split__content">
            <p className="seo-sec-label seo-sec-label--dark"><span className="seo-sec-label__line" /> Trust Digivanta</p>
            <h2 className="seo-split__h2 seo-split__h2--dark">Why Businesses Choose Digivanta for SEO Services in Delhi</h2>
            <p className="seo-split__p seo-split__p--dark">
              Whether you want better local rankings, stronger organic traffic, or improved visibility across AI-powered search platforms, our SEO specialists can help.
            </p>
            <div className="seo-photo seo-photo--wide">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1100"
                alt="Digivanta SEO specialists collaborating in the office"
                width={1100}
                height={620}
                sizes="(max-width: 992px) 90vw, 520px"
                className="seo-photo__img"
              />
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="seo-trust2">
              <div className="seo-trust2__stripe" />
              <h3>Why Trust Digivanta?</h3>
              <ul>
                {SEO_TRUST_POINTS.map((point) => (
                  <li key={point}>
                    <span className="seo-trust2__check">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Author Profile (EEAT)
   ================================================================ */
export function AuthorSection() {
  return (
    <section className="seo-light-section" id="seo-author">
      <div className="container" style={{ maxWidth: "820px" }}>
        <Reveal>
          <div className="seo-author2">
            <div className="seo-author2__stripe" />
            <div className="seo-author2__top">
              <span className="seo-author2__badge">Last Updated: {SEO_AUTHOR.lastUpdated}</span>
              <h3>Author Profile</h3>
            </div>
            <p>{SEO_AUTHOR.text}</p>
            <h4>Areas of Expertise:</h4>
            <div className="seo-author2__tags">
              {SEO_AUTHOR.expertise.map((exp) => (
                <span key={exp}>{exp}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================
   Final Thoughts
   ================================================================ */
export function FinalThoughtsSection() {
  return (
    <section className="seo-light-section" id="seo-final">
      <div className="container" style={{ maxWidth: "820px" }}>
        <Reveal className="seo-sec-head seo-sec-head--light">
          <p className="seo-sec-label seo-sec-label--dark"><span className="seo-sec-label__line" /> Final Thoughts</p>
          <h2>SEO is About Building Trust</h2>
        </Reveal>

        <Reveal>
          <div className="seo-final">
            <p>
              SEO is no longer just about rankings. It is about building a trusted online presence that search engines, AI systems, and users can understand easily.
            </p>
            <p>
              Choosing the right SEO Company in Delhi can help businesses improve search visibility, generate organic traffic, and create long-term digital growth.
            </p>
            <p>
              With strategic keyword optimization, technical SEO, user-focused content, and AI search readiness, businesses can stay competitive in the evolving digital landscape.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
