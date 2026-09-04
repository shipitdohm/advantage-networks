# Advantage Networks — Brand Spec

Source: user-provided brief (`docs/build-prompt.md`, `docs/brief.md`) + logo files in
`brand/logo/` (linked reference folder).

## v2 — reskin, 2026-09-01

The user asked for a full design/feel rebuild (content unchanged) matching three ranked
references, extracted from real CSS/HTML — not guessed:

1. **fora.so** (favorite) — warm cream/peach canvas (`#fff3f0`, `#fae6e1`, `#ebd5be`), near-black
   ink text, one saturated sky-blue accent (`#09f`), Inter body + Fragment Mono labels, runs
   **Lenis** for weighted inertial scroll.
2. **finseo.ai** — cream canvas (`#faf9f5`, `#f4f2f0`), dark charcoal text, one saturated
   emerald accent (`#0eca7b`), geometric display + Geist body, shadcn-style radius tokens
   (small functional radii on cards, near-full pill radii on buttons), subtle grain texture.
3. **trylevel2.com** — lighter/grayer canvas (`#f5f5f5`), blue accent family (`#4b7ce5`), Geist
   Sans, same large-pill-button + rounded-card language.

Common DNA across all three: **light, warm-neutral canvas** (none are dark-mode), **one**
saturated accent used sparingly, generous whitespace, pill buttons via a radius-token system,
inertial scroll, and a barely-there grain texture.

**What carried over vs. what stayed put:** canvas flipped from the original dark-mode-first
spec to warm-ivory-light (the strongest, most consistent signal across all three references).
The AN brand accent (`#2596be`), logo files, and Space Grotesk/Inter pairing did **not**
change — none of the references implied a rebrand, only a mood shift, and `#2596be` already
sits in the same blue family as two of the three references' own accents.

## Color tokens (OKLCh)

```css
:root {
  --bg:            oklch(97.5% 0.01 75);    /* warm ivory canvas */
  --surface:       oklch(99.2% 0.005 75);   /* card surface, near-white */
  --surface-2:     oklch(95% 0.013 75);     /* input / secondary surface */
  --fg:            oklch(18% 0.015 70);     /* dark warm ink */
  --muted:         oklch(45% 0.014 70);     /* secondary text */
  --border:        oklch(20% 0.02 70 / 9%);  /* hairline ink border */
  --border-strong: oklch(20% 0.02 70 / 16%);

  --accent:        oklch(64% 0.112 227);    /* #2596be — unchanged brand accent */
  --accent-on:     oklch(14% 0.02 70);      /* dark-ink label on filled accent (best contrast) */
  --accent-hover:  oklch(58% 0.118 227);    /* darkens on hover — standard light-UI pattern */
  --accent-active: oklch(52% 0.12 227);
  --accent-soft:   oklch(64% 0.112 227 / 10%);
  --accent-soft-2: oklch(64% 0.112 227 / 5%);

  --success: oklch(58% 0.15 150);
  --warn:    oklch(62% 0.15 90);
  --danger:  oklch(56% 0.19 25);
}
```

`--accent` still resolves to `#2596be`. Used at most twice per screen: one primary CTA + one
graph/highlight moment. Never a dominant fill. **Contrast note:** dark-ink label
(`--accent-on`) on the filled accent button measures ~6.2:1 — meaningfully better than white
label (~3.4:1) at this accent lightness, so buttons keep dark-ink labels even though the page
itself is light, not dark.

## Typography

- Display / headings: `"Space Grotesk", ui-sans-serif, system-ui, sans-serif` — geometric,
  slightly technical, close in spirit to Fora's Fragment Mono / Finseo's geometric display.
- Body / UI: `"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif`.
- Mono (eyebrows, stats, tags): `ui-monospace, "SF Mono", "JetBrains Mono", monospace` —
  mirrors Fora's Fragment Mono label treatment.

## Layout posture

1. **Warm ivory canvas, not stark white.** `--bg` at 97.5% lightness with a faint warm cast —
   avoids both the sterile pure-white AI default and the previous near-black canvas.
2. **Hairline ink borders + soft card shadow.** Light UI reads depth through a combination of
   a faint border and a very soft shadow (`.card`), not borders alone — matches how all three
   references handle card elevation on light backgrounds.
3. **Radius:** 16px on cards/panels, full pill (999px) on buttons and tags — the shadcn-style
   radius-token pattern all three references share.
4. **Accent budget:** ≤2 visible accent uses per screen. Button hover/active states darken
   (not lighten) the accent — the standard light-UI direction.
5. **Node/graph motif as ink linework, not illustration.** The hero canvas now draws dark-ink
   connection lines/nodes on the cream background (previously white-on-dark), with the accent
   reserved for a handful of highlighted nodes/edges near the cursor.
6. **Weighted inertial scroll (Lenis).** Slight resistance, then momentum, then a soft settle —
   matches fora.so exactly and a scroll feel the user has asked for on other projects
   independently. Reduced-motion disables it, falling back to native scrolling.
7. **Restrained grain texture.** A ~3.5% opacity noise overlay on the page body, multiply
   blend — keeps the flat cream surfaces from feeling sterile without becoming a texture.

## Logo

`brand/logo/{IconBlack,IconWhite,Logo-Black,Logo-White}.svg` — angular "AN" monogram +
"Advantage Networks" wordmark. On the new light canvas, the **Black** variants
(`IconBlack.svg` / `Logo-Black.svg`) are the ones in use — they were unused dead weight
in v1 (dark-mode-only) and are now the primary marks.
