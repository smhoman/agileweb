"use client";
import React from "react";
import { Button, Card, Input, Textarea, Select, Radio, Checkbox, Stat, Toast, Icon } from "@/components/ui";
import { useGo } from "@/lib/use-go";

export function Contact() {
  const go = useGo();
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <main>
      <section className="page-hero ac-honeycomb">
        <div className="container">
          <span className="ac-eyebrow">// Start an engagement</span>
          <h1 className="page-hero__title">Two questions. One business day.</h1>
          <p className="page-hero__sub">Tell me what you're building. If it's a fit, we'll talk. No sales sequence, no pressure.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact__grid">
          <Card variant="raised" padding="lg" className="contact__form">
            <form onSubmit={submit} className="form">
              <div className="form__row">
                <Input label="Name" placeholder="Your name" required id="c-name" />
                <Input label="Work email" type="email" placeholder="you@org.com" required id="c-email" />
              </div>
              <div className="form__row">
                <Select label="Organization type" placeholder="Select one" id="c-org"
                  options={["Startup", "Nonprofit", "Small business", "Scale-up", "Other"]} />
                <Select label="Project budget" placeholder="Select a range" required id="c-budget"
                  options={["Less than $1k", "$1k–$5k", "$5k–$10k", "$10k–$25k", "Over $25k"]} />
              </div>
              <div className="form__field">
                <span className="form__label">What kind of engagement?</span>
                <div className="form__radios">
                  <Radio name="engagement" value="fixed" label="Fixed-scope project" description="A brand, website, or specific system, start to finish" defaultChecked />
                  <Radio name="engagement" value="fractional" label="Fractional operations" description="Chief of Staff & ops support, ongoing" />
                  <Radio name="engagement" value="session" label="Strategy session" description="Half / full day, or an advisory retainer" />
                </div>
              </div>
              <Textarea label="What are you building?" rows={4} id="c-msg"
                placeholder="A sentence or two about the organization and where the loose ends are." />
              <Checkbox label="Email me occasional, practical tips" description="A few times a year on running a smoother organization. Unsubscribe anytime." />
              <div className="form__actions">
                <Button variant="primary" size="lg" type="submit" iconRight={<Icon n="send" />}>Send</Button>
                <span className="form__note">Typical reply: within one business day.</span>
              </div>
            </form>
          </Card>

          <aside className="contact__aside">
            <Card variant="depth" padding="lg" className="contact__depth">
              <span className="ac-eyebrow" style={{color:"var(--honey-300)"}}>// What to expect</span>
              <ul className="expect">
                <li><Icon n="message-square" /><div><b>A real reply</b><span>From me, not a form autoresponder.</span></div></li>
                <li><Icon n="calendar" /><div><b>A 30-min call</b><span>If it looks like a fit, we talk.</span></div></li>
                <li><Icon n="file-text" /><div><b>A scoped plan</b><span>Transparent pricing, clear deliverables.</span></div></li>
              </ul>
            </Card>
            <div className="contact__stats">
              <Stat value="1–2" label="clients at a time" />
              <Stat value="< 1 day" label="to first reply" />
            </div>
          </aside>
        </div>
      </section>

      {sent && (
        <div className="toast-stack">
          <Toast tone="success" title="Message sent" description="Thanks. I'll reply within a business day." onClose={() => setSent(false)} />
        </div>
      )}
    </main>
  );
}
