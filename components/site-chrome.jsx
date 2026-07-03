"use client";
import React from "react";
import { Button, Icon } from "@/components/ui";
import { useGo } from "@/lib/use-go";

function Wordmark({ onDark=false, onClick }) {
  return (<a href="/" onClick={onClick} className="wm" data-dark={onDark} aria-label="Agile Consulting home">Agile<span className="wm__dot">.</span>Consulting</a>);
}

export function Nav() {
  const go = useGo();
  const [open,setOpen] = React.useState(false);
  const links = [
    {id:"approach",label:"Approach",href:"/#approach"},
    {id:"services",label:"Services",href:"/services"},
    {id:"about",label:"About",href:"/about"},
    {id:"proof",label:"Proof",href:"/#proof"},
  ];
  const nav = (id)=>(e)=>{ e.preventDefault(); setOpen(false); go(id); };
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Wordmark onClick={nav("home")} />
        <nav className="nav__links" aria-label="Primary navigation">{links.map((l)=><a key={l.id} href={l.href} className="nav__link" onClick={nav(l.id)}>{l.label}</a>)}</nav>
        <div className="nav__cta"><Button variant="primary" size="sm" iconRight={<Icon n="arrow-right" />} onClick={nav("contact")}>Start</Button></div>
        <button className="nav__burger" type="button" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen((o)=>!o)}><Icon n={open?"x":"menu"} /></button>
      </div>
      {open && (
        <nav className="nav__mobile" aria-label="Mobile navigation">
          {links.map((l)=><a key={l.id} href={l.href} className="nav__link" onClick={nav(l.id)}>{l.label}</a>)}
          <Button variant="primary" fullWidth onClick={nav("contact")}>Start an engagement</Button>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const go = useGo();
  const nav = (id)=>(e)=>{ e.preventDefault(); go(id); };
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Wordmark onDark onClick={nav("home")} />
          <p className="footer__tag">Build like a startup. Operate like an institution.</p>
        </div>
        <nav className="footer__cols" aria-label="Footer navigation">
          <div className="footer__col"><span className="footer__h">Practice</span><a href="/#approach" onClick={nav("approach")}>Approach</a><a href="/services" onClick={nav("services")}>Services</a><a href="/about" onClick={nav("about")}>About</a><a href="/#proof" onClick={nav("proof")}>Proof</a></div>
          <div className="footer__col"><span className="footer__h">Engage</span><a href="/contact" onClick={nav("contact")}>Start a conversation</a><a href="/contact" onClick={nav("contact")}>Availability</a></div>
          <div className="footer__col"><span className="footer__h">Contact</span><a href="mailto:agileconsultingil@gmail.com">agileconsultingil@gmail.com</a></div>
        </nav>
      </div>
      <div className="container footer__base"><span>&copy; 2026 Agile Consulting</span><span className="footer__mono">Built correctly from the beginning.</span></div>
    </footer>
  );
}

export function SiteChrome({ children }) {
  return (<><Nav />{children}<Footer /></>);
}
