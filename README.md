# Agileweb - Agile Consulting Website

Marketing site for Agile Consulting. Built with **Next.js (App Router)** and configured for deployment to Cloudflare with OpenNext.

> Build like a startup. Operate like an institution.

## Stack
- Next.js 16 (App Router) with `output: "standalone"`
- React 19
- lucide-react for icons
- OpenNext for Cloudflare and Wrangler for Cloudflare builds/deploys
- Plain CSS with design-system tokens.

## Getting started
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production Next.js build
npm run preview    # OpenNext Cloudflare preview
```

## Deploy to Cloudflare
Connect the GitHub repo, then set:

| Setting | Value |
| --- | --- |
| Build command | `npx opennextjs-cloudflare build` |
| Deploy command | `npx opennextjs-cloudflare deploy` |
| Worker config | `wrangler.jsonc` |
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
