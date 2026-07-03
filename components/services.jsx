"use client";
import React from "react";
import { Button, Card, Tag, Tabs, Badge, Stat, Icon } from "@/components/ui";
import { useGo } from "@/lib/use-go";

const DETAIL = {
  web: {
    label: "Brand & Web",
    h: "AI-assisted brand and websites, built at startup speed.",
    p: "Custom, responsive websites and brand experiences built with modern AI-assisted workflows. Faster delivery timelines without sacrificing quality or customization. Positioning, architecture, and content, then a site that ships.",
    bullets: ["Brand positioning & messaging", "Website strategy, architecture & content", "Interactive, responsive builds", "Ongoing optimization & digital growth"],
  },
  strategy: {
    label: "Strategy & Growth",
    h: "Strategic planning and scaling roadmaps that hold up.",
    p: "From mission, vision, and values to board and executive-level planning: the strategy and change enablement that let an organization scale without losing coherence.",
    bullets: ["Strategic planning facilitation", "Mission, vision & values development", "Scaling & growth roadmaps", "Fractional Chief of Staff support"],
  },
  ops: {
    label: "Ops & Infrastructure",
    h: "Lean operating systems with minimal technical debt.",
    p: "Business process design, operating models, and AI-enabled systems: documented, scalable, and built to outlast the engagement. Fewer loose ends, not more tools.",
    bullets: ["Business process design & optimization", "Operating models & workflows", "HR policies & organizational foundations", "AI-enabled operational systems"],
  },
};

const MODELS = [
  { name: "Fixed-scope project", dur: "Defined scope", d: "A brand build, a website, or a specific system, start to finish.", featured: false,
    more: { heading: "Examples", items: ["Website builds", "Social media strategy, templates, and branded graphics", "Strategic planning", "Organizational systems", "Policy development", "Process redesign"] } },
  { name: "Fractional operations", dur: "Ongoing", d: "Chief of Staff and operations support, 1–2 clients at a time.", featured: true },
  { name: "Strategy session", dur: "Half / full day", d: "A focused working session, or an advisory retainer.", featured: false,
    more: { note: "Half-day working sessions.", heading: "Deliverables include", items: ["Executive summary", "Prioritized recommendations", "90-day roadmap", "Optional proposal for future work"] } },
];

export function Services() {
  const go = useGo();
  const [tab, setTab] = React.useState("web");
  const d = DETAIL[tab];
  const start = (e) => { e.preventDefault(); go("contact"); };

  return (
    <main>
      <section className="page-hero ac-honeycomb">
        <div className="container">
          <span className="ac-eyebrow">// Services</span>
          <h1 className="page-hero__title">Brand, strategy, and operations. Built to last.</h1>
          <p className="page-hero__sub">Three practices, every engagement customized. These are the foundations they draw from.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Tabs variant="pill" value={tab} onChange={setTab}
            items={Object.keys(DETAIL).map((k) => ({ value: k, label: DETAIL[k].label }))} />
          <div className="detail">
            <div className="detail__main">
              <h2>{d.h}</h2>
              <p className="detail__lead">{d.p}</p>
              <Button variant="primary" iconRight={<Icon n="arrow-right" />} onClick={start}>Discuss this</Button>
            </div>
            <Card variant="raised" padding="lg" className="detail__card">
              <span className="ac-eyebrow">// Included</span>
              <ul className="checklist">
                {d.bullets.map((b) => (
                  <li key={b}><Icon n="check" />{b}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section section--sunk">
        <div className="container">
          <div className="section__head">
            <span className="ac-eyebrow">// How we work together</span>
            <h2>Engagement models</h2>
            <p className="section__lead">Deliberately small. Depth over volume: 1–2 clients at a time, with transparent, practical pricing.</p>
          </div>
          <div className="models">
            {MODELS.map((m) => (
              <Card key={m.name} variant={m.featured ? "raised" : "default"} padding="lg"
                className={"model" + (m.featured ? " model--featured" : "")}>
                {m.featured && <Badge tone="honey" variant="solid" className="model__badge">Most common</Badge>}
                <span className="model__dur">{m.dur}</span>
                <h3 className="model__name">{m.name}</h3>
                <p className="model__d">{m.d}</p>
                {m.more && (
                  <details className="disc">
                    <summary className="disc__summary">What's included <Icon n="chevron-down" /></summary>
                    <div className="disc__body">
                      {m.more.note && <p className="disc__note">{m.more.note}</p>}
                      <span className="disc__h">{m.more.heading}</span>
                      <ul className="disc__list">
                        {m.more.items.map((it) => <li key={it}>{it}</li>)}
                      </ul>
                    </div>
                  </details>
                )}
                <Button variant={m.featured ? "primary" : "outline"} fullWidth onClick={start}>Enquire</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
