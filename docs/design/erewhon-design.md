# Erewhon (ship.erewhon.com) — DESIGN.md

> Design system pulled from the live site's computed styles on 2026-10-25 (desktop, 1372px viewport).
> Values are measured, not guessed. Where a token name is mine (not Erewhon's), it's marked *(inferred)*.

---

## 1. Brand Feel

- **Quiet luxury grocery.** Warm off-white canvas, near-black type, almost no color in the UI. The product photography supplies all the color.
- **One typeface, used everywhere.** Sharp Sans in three weights carries the whole site.
- **Uppercase does the shouting.** Section titles, CTAs and hero captions are uppercase. Body text and product names are sentence case.
- **Flat and soft.** Corners are at most 3px, shadows are barely there, and borders are hairline warm greys.

---

## 2. Color

### Core palette

| Token *(inferred)* | Hex | RGB | Usage |
|---|---|---|---|
| `--color-ink` | `#212121` | 33, 33, 33 | Primary text, header bar, icons. Most-used color on the site |
| `--color-black` | `#000000` | 0, 0, 0 | Secondary text and inline elements |
| `--color-muted` | `#636262` | 99, 98, 98 | Prices, secondary and meta text |
| `--color-ink-alt` | `#282C2E` | 40, 44, 46 | Slider arrow and icon buttons |
| `--color-white` | `#FFFFFF` | 255, 255, 255 | Text on imagery (hero captions), arrow button fills |

### Surfaces

| Token *(inferred)* | Hex | Usage |
|---|---|---|
| `--bg-page` | `#FCFBF9` | Page canvas (warm off-white) |
| `--bg-card` | `#F5F2EC` | Product-image tiles (warm cream) |
| `--bg-button` | `#E8E7E3` | Secondary buttons ("VIEW COLLECTION", "SHOP NOW") |
| `--bg-neutral` | `#FAFAFA` | Rare neutral fill |
| `--bg-dark` | `#444444` | Dark accents and dots |
| `--bg-disabled` | `#CCCCCC` | Inactive slider dots, placeholders |
| `--overlay` | `rgba(0,0,0,0.4)` | Modal and drawer scrim |
| `--overlay-subtle` | `rgba(0,0,0,0.05)` | Hover tint |

### Lines

| Token *(inferred)* | Hex | Usage |
|---|---|---|
| `--border-light` | `#E8E7E3` | Default 1px divider |
| `--border-warm` | `#D1CDC4` | Inputs and inset outlines (also used as a `0 0 0 1px` ring) |
| `--border-faint` | `#F7F4EF` | Very subtle separators |
| `--border-strong` | `#212121` | Focused or active outlines |

### Feedback

| State | Text | Background | Border |
|---|---|---|---|
| Error | `#721C24` | `#F8D7DA` | `#F5C6CB` |

---

## 3. Typography

### Font family

```css
--font-medium:   "sharp_sansmedium",   Helvetica, Arial, sans-serif;  /* default / body / nav */
--font-semibold: "sharp_sanssemibold", Helvetica, Arial, sans-serif;  /* buttons, uppercase labels */
--font-bold:     "sharp_sansbold",     Helvetica, Arial, sans-serif;  /* headings */
/* italic variants exist: sharp_sansmedium_italic, sharp_sanssemibold_italic, sharp_sansbold_italic */
```

Each weight ships as a separate family, so `font-weight` stays at 400 and you switch the *family* instead. Sharp Sans is a licensed geometric grotesk; good free stand-ins are **Manrope**, **Plus Jakarta Sans** or **Inter**. The site also loads Inter and "Super Sans VF" for third-party widgets.

### Type scale

| Role | Family | Size | Line-height | Letter-spacing | Case | Color |
|---|---|---|---|---|---|---|
| Section title (H2), e.g. "CURATED BY EREWHON" | Bold | 30px | 36px (1.2) | normal | UPPERCASE | `#212121` |
| Sub-heading (H1/H2 in content), e.g. "SHOP EREWHON FROM ANYWHERE…" | Bold | 20px | 24px (1.2) | normal | UPPERCASE | `#212121` / `#FFF` on image |
| Large text / quotes | Medium | 20px | 26.6px (1.33) | normal | none | `#212121` |
| Accordion / menu row | Medium | 19px (19.008px) | normal | normal | none | `#212121` |
| Hero caption | Medium | 16px | normal | 1px | UPPERCASE | `#FFFFFF` |
| Body / nav / product name | Medium | 16px | 22.4px (1.4) | normal | none | `#212121` |
| Price / meta | Medium | 14px | 16.8px (1.2) | normal | none | `#636262` |
| Button / CTA label | Semibold | 13px | 17.875px (1.375) | **1.3px** | UPPERCASE | `#212121` |
| Micro label / badge ("Sold Out", "4 colors") | Medium | 12px | 13.92px (1.16) | 1.68px | UPPERCASE | `#212121` |

**Rules**
- Uppercase text always gets positive tracking (1–1.7px). Mixed-case text never does.
- Headings are bold but small. Nothing on the homepage goes above 30px; scale comes from imagery, not type.

---

## 4. Layout & Spacing

| Token | Value |
|---|---|
| Page max-width | `1855px` (full-bleed; inner content caps around `1126–1191px` on text blocks) |
| Side gutter (desktop) | ~`48px` |
| Header height | ~`78px` |
| Product card width | `~362px` max (`max-width: 362.04px`) |
| Product image | ~`364 × 473` (≈ 3:4 portrait), `object-fit: contain` |
| Carousel gap | ~`32px` between cards |
| Section heading → grid | ~`32px` |
| Between sections | ~`64–80px` |

**Grid pattern:** each collection is a horizontal **carousel row** (heading on the left, "VIEW COLLECTION" button on the right) showing about 3.5 cards so the row looks scrollable.

Spacing follows a loose **8px base** *(inferred)*: 4 / 8 / 16 / 24 / 32 / 48 / 64 / 80.

---

## 5. Shape, Elevation & Borders

| Token | Value |
|---|---|
| `--radius-sm` | `3px` (buttons, inputs, arrow buttons; the only radius in common use) |
| `--radius-xs` | `2px` |
| `--radius-round` | `50%` (slider dots, a11y button) |
| `--shadow-card` | `0 2px 6px rgba(0,0,0,.04), 0 2px 2px rgba(0,0,0,.02)` |
| `--shadow-pop` | `0 5px 10px rgba(0,0,0,.10)` (dropdowns, popovers) |
| `--ring-warm` | `0 0 0 1px #D1CDC4` (inset or outset; input outline) |
| Border default | `1px solid #E8E7E3` |

Product tiles have **no radius and no border**; the cream `#F5F2EC` fill alone defines them.

---

## 6. Components

### Header
- Solid `#212121` bar, ~78px tall, white text.
- Left: text nav (Shop · About · Smoothie Kit Instructions) in Medium 16px, sentence case.
- Center: **EREWHON** wordmark (wide-tracked, monoline).
- Right: Account, Search and Cart line icons (~24px, white).

### Hero carousel
- Full-bleed photo or video, ~580px tall.
- Centered caption: Medium 16px, uppercase, 1px tracking, white.
- CTA under the caption uses the secondary button style.
- Prev/next: 38px white squares with 3px radius and a thin chevron, inset ~20px from the edges.
- Dots: 8px circles, active `#FFF` filled, inactive outlined.

### Buttons

```css
.btn {
  font-family: var(--font-semibold);
  font-size: 13px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  color: #212121;
  background: #E8E7E3;
  border: 0;
  border-radius: 3px;
  padding: 12px 22px;      /* ≈ 42px tall */
}
.btn:hover { background: #D1CDC4; }   /* inferred */
```

The CTA can carry a trailing `›` chevron ("SHOP NOW ›").

### Product card

```
┌───────────────────┐
│                   │  bg #F5F2EC, no radius, ~3:4
│      [image]      │  product shot centered, contain
│                   │
└───────────────────┘
  Product Name | Variant     ← Medium 14–16px, #212121, centered
  $95.00                     ← Medium 14px, #636262, centered
```

- Name and price are **center-aligned**.
- The "|" pipe separates product from variant (e.g. `Erewhon Market Hat | Olive`).
- "Sold Out" badge: 12px uppercase, tracked.
- Swatch count ("4 colors") sits under the price.

### Category tiles
Image tiles labeled GROCERY, WELLNESS, HOME & BODY, GIFTS and ACCESSORIES, with a bold uppercase label.

### Footer / SEO block
Centered paragraph in Medium 14px, `#212121`, with a generous top margin.

---

## 7. Imagery

- Tight, macro-style food shots (smoothie texture, glossy surfaces) in natural light with soft pink, cream and green tones.
- Products are shot on seamless cream or white, centered, with lots of breathing room.
- Imagery carries the color; the UI stays neutral.

---

## 8. Voice

- Short and declarative. All-caps for headlines: *"CURATED BY EREWHON"*, *"EREWHON IS MORE THAN A GROCERY STORE"*.
- Key words: organic, ethically sourced, wellness, community, "raising the standards since 1968".

---

## 9. Ready-to-use CSS tokens

```css
:root {
  /* color */
  --color-ink: #212121;
  --color-black: #000000;
  --color-muted: #636262;
  --color-white: #FFFFFF;
  --bg-page: #FCFBF9;
  --bg-card: #F5F2EC;
  --bg-button: #E8E7E3;
  --bg-disabled: #CCCCCC;
  --border-light: #E8E7E3;
  --border-warm: #D1CDC4;
  --error-text: #721C24;
  --error-bg: #F8D7DA;
  --error-border: #F5C6CB;
  --overlay: rgba(0,0,0,.4);

  /* type */
  --font-medium: "sharp_sansmedium", Helvetica, Arial, sans-serif;
  --font-semibold: "sharp_sanssemibold", Helvetica, Arial, sans-serif;
  --font-bold: "sharp_sansbold", Helvetica, Arial, sans-serif;
  --fs-h2: 30px;   --lh-h2: 1.2;
  --fs-h3: 20px;   --lh-h3: 1.2;
  --fs-lg: 19px;
  --fs-body: 16px; --lh-body: 1.4;
  --fs-sm: 14px;
  --fs-btn: 13px;  --ls-btn: 1.3px;
  --fs-xs: 12px;   --ls-xs: 1.68px;

  /* shape */
  --radius: 3px;
  --shadow-card: 0 2px 6px rgba(0,0,0,.04), 0 2px 2px rgba(0,0,0,.02);
  --shadow-pop: 0 5px 10px rgba(0,0,0,.10);

  /* layout */
  --max-width: 1855px;
  --gutter: 48px;
  --header-h: 78px;
  --card-w: 362px;
}

body {
  background: var(--bg-page);
  color: var(--color-ink);
  font: 16px/1.4 var(--font-medium);
  -webkit-font-smoothing: antialiased;
}
h1, h2, h3 { font-family: var(--font-bold); text-transform: uppercase; font-weight: 400; }
```
