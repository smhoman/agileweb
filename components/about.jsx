"use client";
import React from "react";
import { Button, Card, Icon } from "@/components/ui";
import { useGo } from "@/lib/use-go";

const WORKS_WITH = [
  "Startups building their operational foundations",
  "Nonprofits moving from volunteer-led efforts to sustainable growth",
  "Founder-led organizations ready to scale without adding unnecessary complexity",
  "Small and mid-sized businesses that have outgrown their current systems",
  "Teams that need a builder, not just another advisor",
];

const HOW = [
  { n: "01", t: "Foundations first.", d: "Understand what exists today, identify the loose ends, and establish the structural bedrock that everything else depends on." },
  { n: "02", t: "Systems second.", d: "Create lean, documented systems for operations, infrastructure, branding, and execution, with minimal technical debt and processes people can actually maintain." },
  { n: "03", t: "Momentum last.", d: "Leave organizations with systems that run smoothly on their own and keep supporting growth long after the engagement ends." },
];

export function About() {
  const go = useGo();
  const start = (e) => { e.preventDefault(); go("contact"); };
  const toServices = (e) => { e.preventDefault(); go("services"); };

  return (
    <main>
      {/* HERO */}
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__copy">
            <span className="ac-eyebrow">// About</span>
            <h1 className="about-hero__title">Builder. Operator. Systems thinker.</h1>
            <p className="about-hero__lead">I help startups, nonprofits, and growing organizations build the systems, infrastructure, and strategy they need to scale successfully.</p>
            <p className="about-hero__body">My work sits at the intersection of operations, organizational design, AI-assisted execution, and practical problem-solving. Whether I'm facilitating strategic planning, building a website and brand experience, designing workflows, or helping leaders navigate growth, the goal is always the same: strong foundations that let organizations grow quickly, without growing messy.</p>
            <div className="about-hero__actions">
              <Button variant="primary" size="lg" iconRight={<Icon n="arrow-right" />} onClick={start}>Start a conversation</Button>
              <Button variant="outline" size="lg" onClick={toServices}>See services</Button>
            </div>
          </div>
          <div className="about-hero__photo">
            <div className="about-photo">
              <img src="/assets/headshot.jpg" alt="Sarah Homan, founder of Agile Consulting" />
            </div>
            <div className="about-photo__plate">
              <span className="about-photo__name">Sarah Homan</span>
              <span className="about-photo__role">Founder · Agile Consulting</span>
            </div>
          </div>
        </div>
      </section>

      {/* PULL STATEMENT */}
      <section className="about-band">
        <div className="container">
          <p className="about-band__text">I don't just recommend solutions. I help build the systems, processes, and infrastructure that make them sustainable.</p>
        </div>
      </section>

      {/* MY PATH */}
      <section className="section about-path">
        <div className="container about-prose">
          <span className="ac-eyebrow">// My path here</span>
          <h2>Growth outpaces systems. That's the problem I love to solve.</h2>
          <p>My experience spans small business ownership, nonprofit leadership, enterprise program management, and organizational operations. I've built and sold a service business, led large-scale programs supporting secure growth at FedEx, facilitated strategic planning efforts, and founded a nonprofit from the ground up.</p>
          <p>Those experiences taught me that most organizations don't struggle because they lack ambition. They struggle because growth outpaces their systems. The organizations that scale well aren't necessarily the biggest or best funded. They're the ones that build the right foundations early, stay lean, and create infrastructure that supports future growth.</p>
          <p>That's the work I love most: helping organizations establish the credibility, systems, and operational maturity that often take years to develop.</p>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section className="section section--sunk">
        <div className="container">
          <div className="section__head">
            <span className="ac-eyebrow">// Who I work best with</span>
            <h2>A builder, not just another advisor.</h2>
          </div>
          <div className="about-fit">
            <ul className="checklist about-fit__list">
              {WORKS_WITH.map((w) => <li key={w}><Icon n="check" />{w}</li>)}
            </ul>
            <Card variant="depth" padding="lg" className="about-fit__note">
              <p>I intentionally work with only one or two clients at a time, so every engagement gets deep attention, practical implementation support, and highly customized solutions.</p>
              <p className="about-fit__not"><Icon n="info" /> I may not be the right fit if you're looking for a large consulting team, generic recommendations, or long reports that never become reality.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* WHY THE HONEYCOMB */}
      <section className="section">
        <div className="container about-why">
          <div className="about-why__art" aria-hidden="true">
            <img src="/assets/honeycomb-cluster.svg" alt="" />
          </div>
          <div className="about-why__copy">
            <span className="ac-eyebrow">// Why the honeycomb?</span>
            <h2>Nature's most efficient structure.</h2>
            <p>The honeycomb is the visual foundation of Agile Consulting because it mirrors what makes organizations successful. Honeycombs are one of nature's most efficient structures: strong, adaptable, and built without wasted space. Every cell supports the whole while staying flexible enough to grow and evolve.</p>
            <p>Bees are remarkably agile. They build collaboratively, respond quickly to changing environments, and relocate entire colonies when necessary, all without sacrificing the integrity of the system they've created.</p>
            <p className="about-why__close">That's how organizations should be built. Strong foundations. Lean operations. Infrastructure designed to scale without unnecessary complexity. Built correctly from the beginning.</p>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="section section--depth ac-honeycomb about-how">
        <div className="container">
          <div className="section__head section__head--dark">
            <span className="ac-eyebrow" style={{ color: "var(--honey-300)" }}>// How I work</span>
            <h2>Foundations. Systems. Momentum.</h2>
          </div>
          <div className="steps">
            {HOW.map((s) => (
              <div key={s.n} className="step">
                <span className="step__n">{s.n}</span>
                <h3 className="step__t">{s.t}</h3>
                <p className="step__d">{s.d}</p>
              </div>
            ))}
          </div>
          <p className="about-how__close">People hire me for judgment, experience, and a builder's instinct. What they keep are the systems.</p>
        </div>
      </section>

      {/* A NOTE ON AI */}
      <section className="section">
        <div className="container about-ai">
          <div className="about-ai__icon" aria-hidden="true"><Icon n="sparkles" /></div>
          <div className="about-ai__copy">
            <span className="ac-eyebrow">// A note on AI</span>
            <h2>AI to accelerate, not to replace.</h2>
            <p>I use modern AI tools extensively, not to replace expertise but to accelerate execution and create better outcomes. Whether building websites, developing brand systems, documenting processes, or supporting strategy, AI lets me deliver highly customized work more quickly while keeping direct collaboration and thoughtful implementation.</p>
            <p>The result: faster timelines, lower overhead, and solutions designed specifically for your organization, not templates pulled off a shelf.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta ac-honeycomb">
        <div className="container cta__inner">
          <h2 className="cta__title">Ready to operate like an institution, sooner?</h2>
          <p className="cta__sub">Let's start with a conversation. No sales sequence, no pressure. Just two questions and a practical discussion about what you're building.</p>
          <Button variant="primary" size="lg" iconRight={<Icon n="arrow-right" />} onClick={start}>Start a conversation</Button>
        </div>
      </section>
    </main>
  );
}
