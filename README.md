# Advantage Networks — Marketing Website (Foundation)

Phase 1 marketing site for Advantage Networks — the company's front door, not the shop
itself. Next.js 14 (App Router) + TypeScript + Tailwind CSS, structured for Vercel
deployment via GitHub.

## Getting started

```bash
npm install
npm run dev
```

## Structure

- `app/` — routes. `page.tsx` is the home one-pager; `channels/`, `case-studies/`,
  `about/`, `contact/`, `shop/` are the supporting pages from the brief.
- `components/` — shared shell (`Header`, `Footer`) and the home-page sections under
  `components/sections/`.
- `components/NetworkGraph.tsx` — the hero's animated node/graph canvas.
- `components/Reveal.tsx` — the shared scroll-reveal wrapper used across sections.
- `lib/content/` — EN/DE copy dictionaries (`en.ts`, `de.ts`) behind a shared `Dictionary`
  type. All product copy lives here, not inline in components.
- `lib/i18n/LanguageProvider.tsx` — client-side EN/DE switcher (persists to
  `localStorage`, no routing split yet).
- `brand-spec.md` — token derivation notes (color, type, layout posture). See the "v2 —
  reskin" section for why the canvas went from dark to light.
- `lib/scroll/SmoothScrollProvider.tsx` — Lenis-driven weighted inertial scroll, wraps the
  app in `layout.tsx`. No-ops under `prefers-reduced-motion`.
- `public/brand/logo/` — the four provided logo SVGs. Header/Footer now use the **Black**
  variants (light canvas); the White variants are unused but kept in case a future dark
  section needs them.

## Status / what's still open

- **Shop is a placeholder.** Every "Enter the Shop" / nav "Shop" CTA routes to
  `/shop`, a coming-soon screen. The real login-gated shop is a later phase.
- **Partner names are placeholders.** "Sony" / "Cherry" in copy are internal
  development placeholders per the brief — confirm real partner names before public
  launch (see comments in `lib/content/en.ts` / `de.ts`).
- **`/channels`, `/case-studies`, `/about`, `/contact` are first-pass pages.** They're
  real, populated pages (not empty stubs), but intentionally lighter than the home
  page — structured so each can grow into a deeper experience.
- **Contact form has no backend yet.** Submitting opens a prefilled `mailto:` to
  `hello@advantage-networks.com`. Swap in a real handler (API route, form service) when
  ready.
- **i18n is client-state, not routed.** `/de` URLs don't exist yet — the switcher just
  toggles the dictionary in place. Worth moving to `next-intl` or route-based locales
  if SEO per-language matters later.
- **No backend yet.** The shop, contact form, and any future auth are all later-phase
  work — this build is intentionally front-end only.
