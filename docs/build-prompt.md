# Build Prompt — Advantage Networks Website (Foundation, Phase 1)

> Draft for use in Open Design. Review together before sending. See [`brief.md`](brief.md) for
> full background/context.

---

Build the foundational marketing website for **Advantage Networks**, a company that distributes
consumer electronics products (monitors, mice, peripherals, networking accessories, etc.)
exclusively through private, invite-only communities instead of the public market.

## The business, in one breath

Advantage Networks partners with electronics brands (e.g. Sony, Cherry — placeholder names,
subject to confirmation before public launch) to distribute their products exclusively inside
private member networks: the **Helium Network** (the original, largest decentralized network —
where the company's origin story starts), the **Founders League**, and the **Alumni Network**.
Because distribution happens in a closed, login-gated shop, prices never leak into public
comparison sites — which lets Advantage Networks negotiate stronger deals, and lets brands pour
marketing budget directly into better pricing and community activations (e.g. the "Founder Paddle
Treff" event sponsored with Garmin watches). Community members get access to strong deals they
can't find publicly; brands get exclusive, trusted distribution with real marketing upside;
network operators get a distribution partner for their community.

There are three audiences this site needs to speak to: **brands/manufacturers** considering a
distribution partnership, **community members/consumers** who buy through a network, and
**network/community operators** who could become a new distribution channel.

## What this site is for

This is the company's front door — the thing you show someone you just met at a trade fair to
make them understand, in under a minute, what Advantage Networks does and why it matters. It is
NOT the shop itself. The shop is a later phase; for now, every CTA ("Enter the Shop", nav "Shop"
button) should be visually real and prominent but functionally a placeholder / coming-soon state.

## Structure

**Home** (single scrolling landing page, the primary experience):
1. **Hero** — bold, confident headline + sub-headline that captures the private-network
   distribution model in one line. Primary CTA: "Enter the Shop" (placeholder).
2. **What we do** — tight summary, 1–2 sentences + 3 key points.
3. **How it works** — the value exchange, shown side-by-side for the two sides: Brands vs.
   Community. What each side gets.
4. **The Networks** — three cards/tiles: Helium Network, Founders League, Alumni Network. Short
   description each, link out to a detail page.
5. **Track record** — case studies, e.g. Founder Paddle Treff × Garmin. Built to extend with more
   entries later.
6. **Why this matters now** — brief context on why private/decentralized network distribution is
   relevant today.
7. **Final CTA** — "Join the Network" / "Enter the Shop".
8. **Footer** — nav links, contact, social/legal.

**Additional pages** (can be lightweight/stub for this first pass, structured so they're easy to
flesh out later):
- `/channels` — deeper dive per network
- `/case-studies` — full project list
- `/about` — company story (consulting → Helium mining → the network insight → today)
- `/contact`

**Navigation:** Logo · Home · Channels · Case Studies · About · Contact — right side: language
switcher (EN default / DE) + a visually distinct "Shop" button (placeholder link).

## Visual direction

Dark-mode-first, clean, premium software/startup aesthetic — the level of polish you'd expect
from the best-designed SaaS and tech startup landing pages being made right now. This must NOT
read as a generic, fast, AI-templated site — every section should feel intentional and crafted.

Weave in a **network/nodes motif** throughout (connection lines, nodes, decentralized graph
imagery) as a nod to the company's Helium Network origin — used tastefully, not literally as a
crypto/blockchain site. It should also feel grounded in commerce/trade, not purely abstract-tech.

The site should feel alive: include one or two standout, high-quality animations/interactions
(e.g. an animated network/node graph in the hero, subtle scroll-triggered reveals, a hover
interaction on the network cards) — motion should feel premium and intentional, never gimmicky or
excessive.

### Brand

- Logo files: `brand/logo/IconBlack.svg`, `IconWhite.svg` (mark only — preferred for compact
  use), `Logo-Black.svg`, `Logo-White.svg` (mark + "Advantage Networks" wordmark).
- Accent color: `#2596be` — use sparingly (buttons, links, key accents, node/graph highlights),
  not as a dominant fill.
- Base palette: dark neutrals (near-black backgrounds, off-white text) — define a small,
  disciplined neutral scale around the accent.
- Headline font: **Space Grotesk**.
- Body/UI font: **Inter**.

## Language

English is the default/primary language. Build with a language switcher to German (EN/DE) from
the start — structure content so it's straightforward to localize even if only English copy is
filled in for this first pass.

## Technical notes

- Framework: React-based, Next.js preferred (deployment target is Vercel via GitHub).
- Styling: Tailwind CSS preferred, using the color/type tokens above.
- Structure output as clean, componentized code (not one monolithic page) — this will be pulled
  into a Claude Code project afterward for continued development, so favor clarity and
  conventional project structure over cleverness.
- Shop-related CTAs should route to a simple placeholder/coming-soon target, not a dead `#` link
  or broken route.
