<<<<<<< HEAD
# Agileweb - Agile Consulting Website

Marketing site for Agile Consulting. Built with **Next.js (App Router)** and exported as a **static site**, optimized for fast builds and deployment on **Cloudflare Pages**.

> Build like a startup. Operate like an institution.

## Stack
- Next.js 16 (App Router) with `output: "export"` - pure static HTML/CSS/JS, no server runtime.
- React 19
- lucide-react for icons
- Plain CSS with design-system tokens.

## Getting started
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site -> ./out
```

## Deploy to Cloudflare Pages
Connect the GitHub repo, then set:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npx next build` |
| Build output directory | `out` |
| Node version | 20 or 22 |

## Structure
```
app/            App Router routes (/, /services, /about, /contact) + layout + globals.css
components/ui/  Design-system primitives (button, card, stat, tag, badge, tabs, input, select, radio, checkbox, toast, icon)
components/     Page bodies + site chrome (nav/footer)
lib/use-go.js   Router-aware nav helper (routes + hash-scroll)
styles/         tokens, app.css, components.css
public/assets/  favicon, headshot, honeycomb-cluster
```

## Notes
- Filenames are lowercase (shadcn-style); component identifiers stay PascalCase.
- Fonts load from Google Fonts (no brand files supplied); swap in styles/tokens/fonts.css when licensed.
- The contact form is a front-end mock (success toast on submit) - wire to an endpoint before launch.
- Approach & Proof are home-page sections (scroll into view); everything else is a real route.
