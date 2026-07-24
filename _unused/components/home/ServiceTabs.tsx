"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES_DETAIL } from "@/lib/home-data";

export default function ServiceTabs() {
  const [active, setActive] = useState(0);
  const service = SERVICES_DETAIL[active];

  return (
    <div className="svc-tabs">
      <div className="svc-tabs__nav" role="tablist">
        {SERVICES_DETAIL.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={active === i}
            className={`svc-tabs__btn ${active === i ? "svc-tabs__btn--active" : ""}`}
            onClick={() => setActive(i)}
          >
            {s.title
              .replace(" Services in Delhi", "")
              .replace(" Services", "")
              .replace(" Agency Delhi", "")}
          </button>
        ))}
      </div>

      <div className="svc-tabs__panel" role="tabpanel">
        <div className="svc-tabs__head">
          <span className="pill pill--dark">{String(active + 1).padStart(2, "0")}</span>
          <h3>{service.title}</h3>
          <p>{service.intro}</p>
        </div>

        <div className="svc-tabs__body">
          {"helps" in service && service.helps && (
            <div className="svc-block">
              <h4>How we help</h4>
              <ul>
                {service.helps.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          )}

          {"struggles" in service && service.struggles && (
            <div className="svc-block">
              <h4>Common struggles</h4>
              <ul>
                {service.struggles.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          )}

          {"platforms" in service && service.platforms && (
            <div className="svc-block">
              <h4>Platforms</h4>
              <div className="chip-row">
                {service.platforms.map((p) => (
                  <span key={p} className="chip">{p}</span>
                ))}
              </div>
            </div>
          )}

          {"focus" in service && service.focus && (
            <div className="svc-block">
              <h4>Our focus</h4>
              <ul>
                {service.focus.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="svc-block svc-block--includes">
            <h4>What&apos;s included</h4>
            <ul className="includes-grid">
              {service.includes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          {"problems" in service && service.problems && (
            <div className="svc-block svc-block--alert">
              <h4>Problems we solve</h4>
              <ul>
                {service.problems.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {"footer" in service && service.footer && (
          <p className="svc-tabs__footer">{service.footer}</p>
        )}

        {service.id === "seo" && (
          <p className="svc-tabs__trust">
            Trusted <strong>SEO Company in Delhi</strong> — sustainable strategies,
            measurable growth.
          </p>
        )}

        {"cta" in service && service.cta && (
          <div className="svc-tabs__cta">
            <div>
              <strong>{service.cta}</strong>
              <p>{service.ctaSub}</p>
            </div>
            <Link href="#contact" className="btn btn--primary btn--sm">
              Talk to us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
