"use client";
import React from "react";
import { Button, Card, Stat, Badge, Tag, Icon } from "@/components/ui";
import { useGo } from "@/lib/use-go";

const SERVICES = [
  { icon: "monitor", title: "AI-Assisted Brand & Website Development", desc: "Custom, responsive websites and brand experiences built with modern AI-assisted workflows. Faster delivery, no loss of quality or customization.", tags: ["Web", "Brand", "AI"] },
  { icon: "route", title: "Organizational Strategy & Growth", desc: "Strategic planning, scaling roadmaps, and change enablement, from mission and values to board and executive support.", tags: ["Strategy", "Scaling", "Change"] },
  { icon: "layers", title: "Operations & Infrastructure", desc: "Business process design, operating models, and AI-enabled systems. Lean, documented, minimal technical debt.", tags: ["Ops", "Process", "Systems"] },
];

const STEPS = [
  { n: "01", t: "Foundations", d: "Map what exists, find the loose ends, and set the structural bedrock everything else rests on." },
  { n: "02", t: "Systems", d: "Install lean, documented systems for operations, infrastructure, and execution. Low debt by design." },
  { n: "03", t: "Momentum", d: "Leave you with systems that run smoothly on their own, and stay in reach as you grow." },
];

const WORK = [
  "Founded and scaled a services business to <strong>$420K</strong> revenue in four years.",
  "Built an arts nonprofit from concept to <strong>501(c)(3)</strong>: board governance, fundraising infrastructure, branding, and a modern website in under <strong>six months</strong>.",
  "Facilitated strategic planning for a nonprofit serving affordable-housing initiatives.",
  "Led enterprise-scale programs supporting secure growth and operational excellence within information-security teams.",
  "Built AI-assisted websites that deliver custom experiences without traditional agency timelines or costs.",
];

const PROOF_CASES = [
  {
    eyebrow: "Digital program",
    title: "GraceNote Collective 2026 season program",
    summary: "Featured artifact: the Program page from a full organizational buildout for a new interfaith gospel choir.",
    link: "https://gracenotecollective.org/program",
    linkLabel: "View the live Program page",
    images: [
      { src: "/assets/proof/gracenote-program-preview.png", alt: "GraceNote Collective 2026 season Program page", caption: "Desktop Program page preview", frame: "web", width: 1350, height: 5526 },
    ],
    details: [
      "Built the organization from concept to 501(c)(3), including board formation, operating structure, and governance framework.",
      "Created the fundraising foundation for the inaugural season, including donor tiers, sponsor recognition, and supporter communications.",
      "Designed and built the full website, with the Program page shown here as one public-facing example of the broader brand and digital infrastructure.",
    ],
  },
  {
    eyebrow: "Print collateral",
    title: "HODC 2026-2028 strategic plan trifold",
    summary: "Featured artifact: a strategic plan pamphlet from a broader planning, governance, and community-engagement initiative.",
    images: [
      { src: "/assets/proof/hodc-trifold-outside.png", alt: "Outside panels of the HODC 2026-2028 strategic plan trifold", caption: "Outside panels", frame: "sheet", width: 900, height: 695 },
      { src: "/assets/proof/hodc-trifold-inside.png", alt: "Inside panels of the HODC 2026-2028 strategic plan trifold", caption: "Inside spread", frame: "sheet", width: 900, height: 695 },
    ],
    details: [
      "Facilitated the strategic planning cycle, including a refreshed mission, vision, values, priorities, and implementation direction.",
      "Created an Associate Board model to expand volunteer leadership and build a stronger pathway for community involvement.",
      "Developed new community programming focused on resident belonging and more meaningful volunteer engagement.",
    ],
  },
];

export function Home() {
  const go = useGo();
  const start = (e) => { e.preventDefault(); go("contact"); };

  return (
    <main>
      {/* HERO */}
      <section className="hero ac-honeycomb">
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="ac-eyebrow">// Organizational maturity, accelerated</span>
            <h1 className="hero__title">Build like a startup. <em>Operate like an institution.</em></h1>
            <p className="hero__sub">I help startups, nonprofits, and growing organizations build the systems, infrastructure, and strategy to reach the operational maturity that usually takes years to earn, without growing messy.</p>
            <div className="hero__actions">
              <Button variant="primary" size="lg" iconRight={<Icon n="arrow-right" />} onClick={start}>Start an engagement</Button>
              <Button variant="outline" size="lg" onClick={(e)=>{e.preventDefault();go("services");}}>See services</Button>
            </div>
            <div className="hero__meta">
              <span><Icon n="check" /> 1–2 clients at a time</span>
              <span><Icon n="check" /> Transparent pricing</span>
              <span><Icon n="check" /> Founder-led</span>
            </div>
          </div>
          <div className="hero__panel">
            <Card variant="depth" padding="lg" className="hero__card">
              <span className="ac-eyebrow" style={{color:"var(--honey-300)"}}>// The shift</span>
              <div className="hero__stats">
                <Stat value="< 6 mo" label="concept to an operational org, vs 1–2 years typical" onDark />
                <Stat value="Days" label="to a launched custom site, not an agency quarter" onDark />
              </div>
              <p className="hero__benchmark">Vs. industry norms: 12–24 months to stand up a nonprofit; 8–16 weeks for an agency site build.</p>
              <div className="hero__cluster" aria-hidden="true"></div>
              <p className="hero__cardnote">Modular cells, one ordered structure. Build fast; hold together.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="strip">
        <div className="container strip__inner">
          <span className="strip__label">Built for</span>
          <div className="strip__tags">
            <Tag>Startups</Tag>
            <Tag>Nonprofits</Tag>
            <Tag>Small &amp; mid-size</Tag>
            <Tag>Scale-ups</Tag>
            <Tag>Founder-led teams</Tag>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <div className="section__head">
            <span className="ac-eyebrow">// What I build</span>
            <h2>Three services, one operating system.</h2>
            <p className="section__lead">Every engagement is customized, but it always comes back to these three. What you keep is systems and infrastructure, not a deck.</p>
          </div>
          <div className="grid-services">
            {SERVICES.map((s) => (
              <Card key={s.title} variant="raised" padding="lg" interactive className="svc">
                <span className="svc__icon"><Icon n={s.icon} /></span>
                <h3 className="svc__title">{s.title}</h3>
                <p className="svc__desc">{s.desc}</p>
                <div className="svc__tags">{s.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="section section--depth ac-honeycomb">
        <div className="container">
          <div className="section__head section__head--dark">
            <span className="ac-eyebrow" style={{color:"var(--honey-300)"}}>// The approach</span>
            <h2>Foundations first. Then speed.</h2>
            <p className="section__lead">A coordinated sequence. Each phase builds on the last, no wasted motion.</p>
          </div>
          <div className="steps">
            {STEPS.map((s) => (
              <div key={s.n} className="step">
                <span className="step__n">{s.n}</span>
                <h3 className="step__t">{s.t}</h3>
                <p className="step__d">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section id="proof" className="section">
        <div className="container">
          <div className="section__head">
            <span className="ac-eyebrow">// Proof</span>
            <h2>Built, shipped, and still running.</h2>
          </div>
          <div className="work">
            {WORK.map((w, i) => (
              <div className="work__item" key={i}>
                <span className="work__hex" aria-hidden="true"></span>
                <p className="work__text" dangerouslySetInnerHTML={{ __html: w }} />
              </div>
            ))}
          </div>
          <div className="proof-cases" aria-label="Selected client work examples">
            {PROOF_CASES.map((item) => (
              <details className="proof-case" key={item.title}>
                <summary className="proof-case__summary">
                  <span>
                    <span className="proof-case__eyebrow">{item.eyebrow}</span>
                    <span className="proof-case__title">{item.title}</span>
                    <span className="proof-case__intro">{item.summary}</span>
                  </span>
                  <Icon n="chevron-down" />
                </summary>
                <div className="proof-case__body">
                  <div className="proof-case__gallery">
                    {item.images.map((image) => (
                      <figure className="proof-case__figure" key={image.src}>
                        <div className={`proof-case__preview proof-case__preview--${image.frame}`}>
                          <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
                        </div>
                        <figcaption>{image.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                  {item.link && (
                    <a className="proof-case__link" href={item.link} target="_blank" rel="noreferrer">
                      {item.linkLabel}
                      <Icon n="external-link" />
                    </a>
                  )}
                  <ul>
                    {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </div>
              </details>
            ))}
          </div>
          <div className="proof__subhead">
            <span className="ac-eyebrow">// In their words</span>
          </div>
          <div className="proof__grid">
            <Card padding="lg" className="quote">
              <p className="quote__mark">"</p>
              <p className="quote__text">We never would have grown this quickly or built this level of credibility without this partnership.</p>
              <p className="quote__by">Founder, seed-stage startup</p>
            </Card>
            <Card padding="lg" className="quote">
              <p className="quote__mark">"</p>
              <p className="quote__text">Within a few months, we looked and operated like a 10+ year organization.</p>
              <p className="quote__by">Executive Director, nonprofit</p>
            </Card>
          </div>
          <div className="proof__stats">
            <Stat eyebrow="Built & sold" value="$420K" label="services business, grown over four years" />
            <Stat eyebrow="Focus" value="1–2" label="clients at a time, deeply hands-on" />
            <Stat eyebrow="Continuity" value="Ongoing" label="retainers and follow-up, when you want them" />
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section founder">
        <div className="container founder__grid">
          <div className="founder__mark" aria-hidden="true"><img src="/assets/honeycomb-cluster.svg" alt="" loading="lazy" decoding="async" /></div>
          <div className="founder__copy">
            <span className="ac-eyebrow">// Founder-led</span>
            <h2>You hire judgment. You keep the systems.</h2>
            <p>People bring me in for experience and a builder's instinct. You're left with infrastructure, process, and execution that hold up on their own, plus a partner who stays in reach when you need one. Founder-led, never a personality brand.</p>
            <Button variant="depth" iconRight={<Icon n="arrow-right" />} onClick={start}>Start a conversation</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta ac-honeycomb">
        <div className="container cta__inner">
          <h2 className="cta__title">Ready to operate like an institution, sooner?</h2>
          <p className="cta__sub">Two questions to start. I reply within a business day. No sales sequence.</p>
          <Button variant="primary" size="lg" iconRight={<Icon n="arrow-right" />} onClick={start}>Start an engagement</Button>
        </div>
      </section>
    </main>
  );
}
