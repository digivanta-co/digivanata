import { RESULTS_EXPECT, CAMPAIGN_BASED } from "@/lib/site-data";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

const METRICS = [
  { value: 142, prefix: "+", suffix: "%", label: "Organic traffic growth" },
  { static: "3.2×", label: "Return on ad spend" },
  { value: 38, prefix: "−", suffix: "%", label: "Lower cost per lead" },
  { value: 800, suffix: "+", label: "Campaigns delivered" },
] as const;

function StatValue({
  static: staticVal,
  value,
  prefix,
  suffix,
}: {
  static?: string;
  value?: number;
  prefix?: string;
  suffix?: string;
}) {
  if (staticVal) return <>{staticVal}</>;
  return <Counter value={value ?? 0} prefix={prefix} suffix={suffix} />;
}

export default function TrackRecordSection() {
  return (
    <section className="section section--surface">
      <div className="container">
        <Reveal className="section-head section-head--center mx-auto max-w-2xl">
          <span className="eyebrow">
            <i className="dot" /> Proven results
          </span>
          <h2>A Proven Track Record of Driving Real Results</h2>
          <p>
            Success is measured by outcomes, not promises. Here is what working with
            Digivanta delivers.
          </p>
        </Reveal>

        <Reveal className="track-card">
          <aside className="track-card__stats">
            <p className="track-card__stats-label">Performance at a glance</p>
            <ul className="track-card__metrics">
              {METRICS.map((m) => (
                <li key={m.label}>
                  <strong>
                    <StatValue
                      static={"static" in m ? m.static : undefined}
                      value={"value" in m ? m.value : undefined}
                      prefix={"prefix" in m ? m.prefix : undefined}
                      suffix={"suffix" in m ? m.suffix : undefined}
                    />
                  </strong>
                  <span>{m.label}</span>
                </li>
              ))}
            </ul>
            <p className="track-card__stats-note">
              Averages across SEO, paid media, and full-funnel campaigns.
            </p>
          </aside>

          <div className="track-card__content">
            <div className="track-card__col">
              <h3>What you can expect from Digivanta</h3>
              <ul className="track-card__list">
                {RESULTS_EXPECT.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="track-card__col track-card__col--divider">
              <h3>Every campaign we design is based on</h3>
              <ol className="track-card__steps">
                {CAMPAIGN_BASED.map((item, i) => (
                  <li key={item}>
                    <span className="track-card__step-num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
