---
name: brand-first-design-principles
description: Design and vibe-code apps, websites, and games for any brand and any device using Apple HIG-grade principles (typography, spacing, layout, color, branding, accessibility, motion) without copying Apple's look — the brand brief decides the visual style and layout.
---

# Brand-First Design Principles (HIG-grade craft, your brand's look)

> **Core rule: Apple's guidelines give you the *quality bar*, not the *look*.**
> Take the principles from Apple: hierarchy, legibility, spacing rhythm, contrast, consistency, accessibility, purposeful motion and clear writing.
> Never take Apple's visual signature: SF fonts on brand websites, #F5F5F7 gray bands, centered "product floating on white" heroes, blue pill buttons, frosted glass on everything, "Learn more ›" links, or Apple's copy rhythm.
> **The brand brief decides fonts, colors, shapes, imagery, layout and motion.** The principles decide whether those choices are executed well.

**How this file is organized:**
- **Part A (§A1–§A9): the brand-to-design-system method.** Always start here.
- **Part B (§0–§3): universal principles** for every brand.
- **Part C (§4–§7): device and component specs** for native apps and device-specific UI.
- **§8–§11: craft pass, anti-patterns, a brand-parametric token kit and the ship checklist.**

**Source:** every page of Apple's Human Interface Guidelines (173 pages, October 2026). Wherever this file quotes "the HIG", it means a principle or spec from there, not a visual style to copy.

---

# PART A — FROM BRAND BRIEF TO DESIGN SYSTEM

## A1. Brand brief (fill it in before any code; ask the person for anything missing)

| Question | Example answer |
|---|---|
| Brand name and one-line promise | "FERAL: energy for people who skate after dark" |
| Audience (age, culture, context of use) | 18–30, street and skate culture, mostly on phones at night |
| 3 personality words | Raw, loud, rebellious |
| What it must **not** feel like | Corporate, clinical, wellness-spa |
| Existing brand assets | Logo, colors, fonts, photography, voice guide (always use these first) |
| Primary goal of this page or app | First purchase, sign-up, booking, trial… |
| Competitors and how to differ | "Everyone does neon-on-black gamer vibes, so go hand-made and zine-like" |
| Content inventory | Products, proof (stats, press, reviews), FAQ, legal |
| Devices and platforms | Mobile web first, plus a native app later |

## A2. Map personality to a visual direction

Score the brand on these axes (1–5). The scores drive every downstream choice.

| Axis | 1 ← → 5 |
|---|---|
| Energy | Calm ← → Loud |
| Formality | Playful ← → Serious |
| Era | Classic ← → Futuristic |
| Texture | Polished ← → Raw/hand-made |
| Density | Airy ← → Dense/maximal |
| Warmth | Cool/technical ← → Warm/human |

Then pick one direction (blending two is the limit):

| Direction | Axis profile | Type | Color | Shape and separation | Layout archetype | Motion |
|---|---|---|---|---|---|---|
| **Swiss / Precise** | serious, cool, airy | Neo-grotesk (Inter, Manrope, Archivo) | 1 accent + neutrals | 0–4 px radius, hairlines | Strict 12-column grid, asymmetric text blocks | Minimal, linear |
| **Editorial / Luxury** | serious, classic, warm | High-contrast serif (Playfair, Fraunces, Cormorant) + quiet sans | Deep neutrals, ink or metallic accent | Square, thin rules | Magazine columns, big margins, numbered sections | Slow fades |
| **Brutalist / Zine** | loud, raw, playful | Condensed or grotesque display (Anton, Archivo Black, Bricolage) + mono or grotesk | 1–2 acid or saturated colors on black or paper | Hard edges, thick outlines, offset shadows, stickers, rotation | Poster grid, overlapping type, collage, marquee | Snappy, stepped |
| **Friendly / Rounded** | playful, warm, calm | Rounded sans (Nunito, DM Sans, Quicksand) | Pastels or warm brights | 16–32 px radius, soft shadows, blobs | Card stacks, illustration-led | Bouncy springs |
| **Bold Tech / Futuristic** | loud, futuristic, cool | Geometric or mono (Space Grotesk, Sora, JetBrains Mono) | Dark base, electric gradients | Chamfers, grid lines, glows | Bento grid, data-viz | Glides, text scramble |
| **Organic / Natural** | calm, warm, hand-made | Humanist sans + soft serif (Lora, Source Serif) | Earth tones, muted greens | Irregular, soft, paper texture | Flowing full-bleed photo sections | Gentle parallax |
| **Retro / Nostalgic** | playful, classic | Display slab or 70s type (Bungee, Shrikhand) + clean sans | Warm faded palette | Pills, badges, halftone | Symmetric blocks, badges, stripes | Wobble, stepped |
| **Premium Minimal** | calm, serious, polished | One elegant sans with a tight scale | Monochrome + 1 accent | Medium radius | Big whitespace, product-led | Subtle, precise |

> Apple's own look is roughly "Premium Minimal". Use that direction only when the brief truly calls for it, and even then change the fonts, colors and layout rhythm.

## A3. Typography system (principles from the HIG, fonts from the brand)

1. **At most 2 families:** a display face that carries the personality, and a text face built for legibility. Never pair two fonts with the same role.
2. **Type scale ratio matches the energy:**
   - calm or editorial: 1.2
   - balanced: 1.25
   - bold or marketing: 1.333–1.5
   - posters and zines: 1.618 or hand-picked dramatic jumps

   Base size is 16–18 px for web body text, or the platform default (§2.1) in native apps.
3. **Keep the HIG roles even if the names change:** display, title 1–3, headline, body, callout, subhead, footnote and caption. Every piece of text maps to a role, with no one-off sizes.
4. **Line height:** body 1.4–1.6; headings 1.0–1.2; condensed display faces 0.85–1.0.
5. **Tracking:** tighten large text (−0.01 to −0.04 em) and loosen small uppercase labels (+0.04 to +0.12 em). Keep body text near 0.
6. **Weights:** body is Regular or Medium. Don't use Thin or Light below 24 px (HIG legibility rule).
7. **Measure:** 45–75 characters per line for reading text.
8. **Scaling:** use rem and `clamp()`, and test at 200% zoom and at the largest text size (§2.2).
9. **Licensing:** use fonts the brand owns, or free ones (Google Fonts, Fontshare). SF Pro is for native Apple apps only, never brand websites.

## A4. Color system (principles from the HIG, palette from the brand)

1. **Start from brand colors.** If there are none, derive them from the personality and the competitor gap.
2. **Define roles, not swatches:**
   - `--brand`: identity color for art, headlines and moments.
   - `--action`: the interactive color, with **one meaning only**. If it means "clickable", never put it on static text.
   - `--bg`, `--surface-1/2/3` (elevation), `--ink`, `--ink-2/3` (text hierarchy), `--line` (separators).
   - `--success`, `--warning`, `--danger` (status). Always pair them with an icon or text.
3. **Generate a 10-step tonal scale** (50–950) for brand and neutrals, using OKLCH for even lightness steps. Tint neutrals slightly toward the brand hue so they don't feel generic gray.
4. **Contrast gates (non-negotiable):** text up to 17–18 px needs 4.5:1; large or bold text and essential icons need 3:1; focus indicators need 3:1.
   - Bright brand colors (yellow, lime, cyan, orange) usually **fail as text on white**. Make a darker "ink" variant for text and keep the bright one for fills and art.
5. **Light and dark are both designed, never inverted.** Dark surfaces get lighter as they rise in elevation, saturation gets tuned, and pure white gets softened. Add an increased-contrast variant.
6. **Proportion:** use 60-30-10 (base / surfaces / brand+accent). Loud brands can run 60% brand color as long as text contrast holds.
7. **Culture check:** make sure color meanings work in the target markets.

## A5. Spacing and shape system

1. **Base unit:** 4 px with an 8-pt rhythm (4, 8, 12, 16, 24, 32, 48, 64, 96, 128).
   - Airy brands use 96–160 px between sections.
   - Dense brands use 48–80 px between sections.
2. **Proximity:** space inside a group must be clearly smaller than space between groups, at roughly 1:2 to 1:3.
3. **Radius personality:**
   - sharp (0–2 px): technical, brutalist, luxury
   - medium (6–12 px): neutral
   - large (16–32 px or pills): friendly
   - Use **one radius family**, with nested radii concentric (inner = outer − padding).
4. **One primary separation technique per brand:**
   - hairlines (Swiss)
   - soft shadows (friendly)
   - thick 2–3 px outlines with hard offset shadows (brutalist)
   - tonal surfaces (minimal)
5. **Targets:** ≥ 44×44 px on touch in every style (§2.1).

## A6. Layout archetypes (choose by brand and goal, not habit)

| Archetype | Best for | Structure |
|---|---|---|
| **Split hero** | SaaS, services | Text on one side, visual on the other, proof bar below |
| **Poster / zine** | Youth, streetwear, events, beverages | Viewport-filling type, rotated stickers, overlapping cutouts, marquee |
| **Editorial** | Luxury, fashion, publishing | Asymmetric columns, large serif, wide margins, numbered sections |
| **Bento grid** | Tech, multi-feature products | Mixed-size tiles, one idea each |
| **Product-led minimal** | Premium hardware, cosmetics | Imagery dominant, sparse copy |
| **Storytelling scroll** | Origin or process stories | Sticky visual with stepping text, chapters |
| **Catalog / commerce** | Many SKUs | Filter rail and grid with quick add |
| **Dashboard / app** | Products, tools | Sidebar or tab bar, toolbar, panes (§5) |
| **Immersive** | Travel, film, games | Full-screen media, minimal overlay UI |

**Section recipe** (reorder by goal):
1. Hook (promise)
2. Proof (numbers, reviews, press)
3. Product or offer
4. Why or how it works
5. Social proof
6. Objections (FAQ)
7. Final call to action
8. Footer

**Rules that hold in every archetype (from HIG Layout):**
- Order content by importance.
- Align to a grid, and break it only on purpose.
- Group by proximity.
- Use progressive disclosure.
- Keep one primary action per view.
- Keep the same functionality at every screen size.

## A7. Imagery, icons and voice

- **One image style per brand:** studio cutouts, flash photography, 3D renders, flat illustration, or collage. Don't mix them.
- **Icons:** one set, with stroke weight matched to text weight and corner style matched to the shape system.
- **Logo:** use it sparingly. Never on launch or loading screens, and branding defers to content (HIG Branding).
- **Voice:** write in the brand's voice (A1) while keeping §2.11's clarity rules: verb buttons, specific and blame-free errors, no vague "we".

## A8. Motion personality

| Energy | Duration | Easing | Typical effects |
|---|---|---|---|
| Calm | 300–600 ms | ease-out | Fades, gentle rise |
| Balanced | 200–350 ms | Standard ease or light spring | Slide and fade |
| Loud | 120–250 ms | Snappy spring or `steps()` | Marquee, scale pops, jitter |

The HIG rules hold at every energy level: motion is purposeful, interruptible and never the only signal, and it switches off under Reduce Motion (§2.9). A looping marquee also needs a pause control.

## A9. Anti-clone guardrails (run before shipping)

- [ ] The layout **isn't** a centered hero + floating product + gray/white alternating bands, unless the brief demands it.
- [ ] Fonts were chosen for this brand (§A3), not SF or Inter by default.
- [ ] Colors come from the brand, and the action color isn't Apple blue (#0071E3 / #007AFF) unless that's the brand.
- [ ] None of Apple's signatures appear: "Learn more ›" links, glass nav by default, Apple-style copy cadence, or product shots that imitate Apple's.
- [ ] **Logo test:** with the logo hidden, the brand is still recognizable from its type, color, shape and voice.
- [ ] The principles still pass the checklist in §11.

---

# PART B — UNIVERSAL PRINCIPLES (apply to every brand)

## 0. Decision flow (do this first)

1. **Purpose:** one sentence. Who is it for, and what is the one thing they must get done?
2. **Emotion:** energize, calm, thrill, reassure? This sets motion, color and tone.
3. **Device targets:** mark every one you support. Each needs the same level of care, so don't do iOS and then "port" it.

   | Device | Viewing distance | Primary input | Session length | Design mantra |
   |---|---|---|---|---|
   | iPhone | ≤ 1–2 ft | Touch, voice | 1 min → 1 hr | One-handed, bottom-reachable, focused |
   | iPad | ≤ ~3 ft | Touch, Pencil, keyboard, trackpad | minutes → hours | Big canvas, less modality, multi-input |
   | iPhone Duo | ≤ 1–2 ft | Touch | any | Resize seamlessly across poses/displays, vertical bars |
   | Mac | 1–3 ft | Keyboard, pointer | minutes → hours | Dense but comfortable, menus, windows, shortcuts |
   | Apple Watch | ≤ 1 ft, glance | Touch, Digital Crown, Action button | < 1 min | Glanceable, single-screen, shallow |
   | Apple TV | ≥ 8 ft | Siri Remote, controller | hours | Focus system, cinematic, edge-to-edge |
   | Vision Pro | Spatial | Eyes + indirect pinch | any | Comfort first, windows in field of view, minimal immersion |
   | Web | 1–3 ft (any) | Pointer, touch, keyboard | any | Responsive by space, accessible, fast |

4. **Do the brand brief and visual direction first (Part A).** Then build tokens (§10): type, color (light, dark and increased contrast), spacing, radius, motion. Never hard-code values.
5. **Content before chrome:** content fills the canvas, and controls float above it on a functional layer.
6. **Design every state:** empty, loading, error, offline, first run, 0/1/many items, longest string, largest text.

---

## 1. The 8 design principles (HIG, June 2026)

| Principle | Core line | Rules (Apple) → what to code |
|---|---|---|
| **Purpose** | Make something meaningful | *Create value · Keep focused · Find new ways to solve the problem.* One primary task per screen, and cut what doesn't serve it. |
| **Agency** | Let people do things their own way | *Stay out of the way · Give freedom to explore · Help people recover from mistakes.* No locked flows, and every guided flow is skippable. Support undo. |
| **Responsibility** | Act in people's best interest | *Be fully transparent · Keep information safe.* Explain why before asking, and collect the minimum. |
| **Familiarity** | Build on what people know | *Use known concepts · Keep visuals and interactions consistent · Provide clear feedback.* Use standard patterns, and once something behaves a certain way, keep it that way everywhere. |
| **Flexibility** | Adapt to diverse contexts | *Design for everyone · Preserve context · Support many inputs · Approach every platform with intention.* |
| **Simplicity** | Be clear and direct | *"Simplicity isn't minimalism." Include just what's necessary · Be concise · Establish hierarchy.* |
| **Craft** | Care about every detail | *Quality sets the tone · Experiment and iterate · Maintain your craft* (shipping isn't the finish line). |
| **Delight** | Make it human | *Identify the emotion · Create defining moments · Don't mistake delight for decoration · Consider the whole.* |

---

## 2. Universal foundations (apply on every device)

### 2.1 Accessibility (non-negotiable)

**Text sizes** (apply to custom fonts too; thin weights need larger sizes):

| Platform | Default | Minimum |
|---|---|---|
| iOS / iPadOS | 17 pt | 11 pt |
| macOS | 13 pt | 10 pt |
| tvOS | 29 pt | 23 pt |
| visionOS | 17 pt | 12 pt |
| watchOS | 16 pt | 12 pt |

**Control (hit-target) sizes:**

| Platform | Default | Minimum |
|---|---|---|
| iOS / iPadOS | 44×44 pt | 28×28 pt |
| macOS | 28×28 pt | 20×20 pt |
| tvOS | 66×66 pt | 56×56 pt |
| visionOS | 60×60 pt (centers ≥ 60 pt apart) | 28×28 pt |
| watchOS | 44×44 pt | 28×28 pt |

**Spacing between controls:** about 12 pt of padding around bezeled elements and about 24 pt around borderless ones.

**Contrast (WCAG AA, used by Accessibility Inspector):** text up to 17 pt needs 4.5:1. Text 18 pt and up, or any bold text, needs 3:1. Check both light and dark mode, and provide a higher-contrast scheme when Increase Contrast is on.

**Vision:** let people enlarge text at least 200% (140% on watchOS). Never use color as the only signal (red/green and blue/orange pairs are risky), so add shapes, icons or labels. Label every element for VoiceOver.

**VoiceOver:** label every key element. Describe meaningful images, hide decorative ones, and make charts fully accessible. Use headings for navigation, define grouping and order, and announce layout changes. Support the rotor.

**Hearing:** offer captions, subtitles, audio descriptions and transcripts. Pair audio cues with haptics and with visual cues.

**Mobility:** use the simplest gestures, and give every gesture an on-screen alternative (swipe-to-delete plus an Edit button). Support Voice Control, Siri/Shortcuts, Switch Control, Full Keyboard Access and AssistiveTouch.

**Cognitive:**
- Keep interactions simple and familiar.
- Minimize UI that dismisses itself on a timer.
- Don't autoplay media without controls, and respect Dim Flashing Lights.
- Assistive Access: core features only, one interaction per screen, and confirm twice before hard-to-undo actions.

**Reduce Motion:** tighten springs (less bounce), track gestures directly, and don't animate z-depth. Replace x/y/z slides with fades, and avoid animating into or out of blurs.

### 2.2 Typography

- **System fonts:** SF Pro (iOS, iPadOS, macOS, tvOS, visionOS), SF Compact (watchOS; complications use SF Compact Rounded), New York (serif), and SF Mono. All are variable fonts with dynamic optical sizes. **Never embed system fonts.** SF fonts belong to native Apple apps. **On brand websites, use the brand's fonts (§A3)**, and treat the specs below as proven role and size relationships to borrow, not fonts to copy.
- **Weights:** prefer Regular, Medium, Semibold or Bold. Avoid Ultralight, Thin and Light, especially at small sizes.
- **Use as few typefaces as possible.** Build hierarchy with size, weight and color.
- **Leading:** use loose leading for long passages and tight leading for constrained rows. Never use tight leading with 3+ lines.
- **Dynamic Type:** the layout must adapt at every size.
  - Stack side-by-side items vertically, let rows grow, and reduce columns.
  - Minimize truncation and scale meaningful icons with the text.
  - Keep primary elements at the top at every size.
  - Prioritize: people enlarging text want *content* bigger, not tab titles.

**iOS/iPadOS text styles, default "Large" size** (pt size / leading):

| Style | Weight | Size/Leading | Emphasized |
|---|---|---|---|
| Large Title | Regular | 34/41 | Bold |
| Title 1 | Regular | 28/34 | Bold |
| Title 2 | Regular | 22/28 | Bold |
| Title 3 | Regular | 20/25 | Semibold |
| Headline | Semibold | 17/22 | Semibold |
| Body | Regular | 17/22 | Semibold |
| Callout | Regular | 16/21 | Semibold |
| Subhead | Regular | 15/20 | Semibold |
| Footnote | Regular | 13/18 | Semibold |
| Caption 1 | Regular | 12/16 | Semibold |
| Caption 2 | Regular | 11/13 | Semibold |

Body text across Dynamic Type sizes: xS 14, S 15, M 16, **L 17**, xL 19, xxL 21, xxxL 23. Accessibility sizes AX1–AX5: 28, 33, 40, 47, 53. Large Title at AX5 is 60.

**macOS:** Large Title 26/32, Title 1 22/26, Title 2 17/22, Title 3 15/20, Headline **Bold** 13/16, Body 13/16, Callout 12/15, Subheadline 11/14, Footnote, Caption 1 and Caption 2 10/13. macOS has no Dynamic Type.

**tvOS:** Title 1 76/96, Title 2 57/66, Title 3 48/56, Headline 38/46, Subtitle 1 38/46, Callout 31/38, **Body 29/36 Medium**, Caption 1 25/32, Caption 2 23/30.

**watchOS** (Large, the default for 40–42 mm): Large Title 36, Title 1 34, Title 2 28, Title 3 19, Headline and Body 16, Caption 1 15, Caption 2 14, Footnote 1 13, Footnote 2 12. For 44/45/49 mm (xLarge), Body is 17.

**visionOS:** uses bolder Body and Title styles and adds Extra Large Title 1 and 2. Prefer 2D text (no depth), white text on glass, bold text when there's no background, and billboard labels that turn to face the viewer.

**Tracking (SF Pro, iOS/macOS/tvOS):**

| Size (pt) | Tracking |
|---|---|
| 6 | +0.24 pt |
| 10 | +0.12 |
| 11 | +0.06 |
| 12 | 0 |
| 13 | −0.08 |
| 15 | −0.23 |
| **17** | **−0.43 (−0.026 em)** |
| 20 | −0.45 |
| 22 | −0.26 |
| 24 | +0.07 |
| 28 | +0.38 |
| 34 | +0.40 |
| 48 | +0.35 |
| 60 | +0.26 |
| 80+ | 0 |

watchOS SF Compact goes increasingly negative from 17 pt: −0.07 at 17, −0.42 at 30, −0.96 at 48, −1.99 at 80. Native SF tracks itself, so these values are for mockups. With web fonts like Inter, large display text usually needs −0.01 to −0.03 em.

### 2.3 Color

- **One color, one meaning.** If the accent color marks interactive elements, never use it on static text.
- **Every color needs 4 variants:** light, dark, increased-contrast light and increased-contrast dark. Supply light and dark versions even if you ship only one appearance, because Liquid Glass adapts.
- **Use semantic colors by purpose, never by value**, and don't hard-code system values (they shift between releases). Don't redefine meanings: separator isn't a text color, and secondaryLabel isn't a background.
- **Test** in sunlight and dim light, with True Tone, on P3 and sRGB displays, and on real TVs.
- **Culture matters:** in China's Stocks app, red means up.
- **Backgrounds:** on iOS there are system and grouped sets, each with primary (the whole view), secondary (groups) and tertiary (groups within groups).
- **Foreground:** label, secondaryLabel, tertiaryLabel, quaternaryLabel, placeholderText, separator, opaqueSeparator, link.
- **System palette:** red, orange, yellow, green, mint, teal, cyan, blue, indigo, purple, pink, brown, plus gray through gray6.
- **Liquid Glass color:** glass is colorless by default and picks up the content behind it.
  - Tint only the *background* of primary actions (the Done button) and status indicators, and never several controls at once.
  - Over colorful content, keep bars monochrome.
  - Keep the resting state (top of the scroll) legible.
- **Wide color:** use Display P3 at 16 bits per channel, exported as PNG. Provide sRGB variants where very close P3 colors or gradients might clip.
- **Platform notes:**
  - **tvOS:** use a limited palette matched to your logo, and never show focus by color alone.
  - **visionOS:** use color sparingly on glass, and prefer it in bold text and large areas. In full immersion, balance brightness (no bright objects on black).
  - **watchOS:** use background color to communicate, not decorate. Avoid full-screen color in long-running views, and support tinted complications.
  - **CarPlay:** never use the same color for interactive and non-interactive elements.

**Apple system palette, for native Apple apps only** (approximations). On brand work, **don't reuse these hex codes**; generate brand roles with §A4. They're listed so you can see how Apple separates roles: primary/secondary/tertiary labels, grouped backgrounds, and tuned dark variants.
- **Light:** blue #007AFF, green #34C759, red #FF3B30, orange #FF9500, yellow #FFCC00, indigo #5856D6, purple #AF52DE, pink #FF2D55, gray #8E8E93. Background #FFF, secondary/grouped #F2F2F7.
- **Dark:** blue #0A84FF, green #30D158, red #FF453A, orange #FF9F0A, yellow #FFD60A, indigo #5E5CE6, purple #BF5AF2, pink #FF375F. Backgrounds #000, #1C1C1E, #2C2C2E.
- **Labels:** primary is 100% black or white. Secondary is rgba(60,60,67,.6) in light and rgba(235,235,245,.6) in dark. Tertiary is .3, quaternary .18 / .16. Separator is rgba(60,60,67,.29) in light and rgba(84,84,88,.6) in dark.

### 2.4 Dark Mode

- Don't offer an app-specific appearance setting; follow the system. Look good in both modes. Use dark-only only in rare cases, such as media and pro apps.
- Use adaptive colors and meet contrast in every appearance. **Soften white backgrounds.**
- Use SF Symbols, and design separate light and dark icons if needed. Check that full-color images work on both.
- Use system label colors and system text fields. On iOS prefer the system backgrounds, where elevated surfaces get *lighter*. On macOS add slight transparency to custom component backgrounds.

### 2.5 Materials and Liquid Glass

- **Liquid Glass is for the control layer only** (bars, toolbars, tab bars, floating buttons, sheets). **Never use it in the content layer.** Use it sparingly.
- **Clear glass** only goes over visually rich backgrounds. If what's underneath is bright, add a **35% dark dimming layer**.
- **Standard materials:** choose by meaning, put vibrant colors on top for legibility, and consider contrast with blur and vibrancy.
- **Platform notes:**
  - **tvOS:** ultraThin for full-screen light views, thin and regular for overlays, thick for dark overlays.
  - **visionOS:** there's no Dark Mode; glass adapts to its surroundings. Prefer translucency to opaque colors in windows.
  - **watchOS:** use materials to give context in full-screen modals.
- **Scroll edge effect** (instead of solid bar backgrounds): prefer the automatic style. Use it only behind floating UI, and only one per view (keep heights consistent across split panes).
- **Background extension effect:** mirror and blur full-bleed artwork under sidebars and inspectors.

### 2.6 Layout

- **Hierarchy:**
  - Order content by importance, in reading order (top, then the leading edge).
  - Align elements to make them scannable, and indent to show hierarchy.
  - Group with space, container shapes or separators.
  - Use progressive disclosure: disclosure triangles, menus, nested views and scrolling sections.
- **Separate controls from content:** controls sit on Liquid Glass with a scroll edge effect, and full-screen backgrounds extend under the sidebar, toolbar and tab bar.
- **Adaptability:** handle size classes, screen sizes, orientations, the Dynamic Island, external displays, Display Zoom, resizable windows, text-size changes and locales (RTL, date and number formats, text length).
- **Size classes:** decide layout by size class, never by device or orientation. Consider all four combinations (compact or regular, by width and height).
  - **Keep functionality identical across sizes**; only change how much is visible (a tab bar becomes a sidebar, an overflow menu becomes inline buttons).
  - The idiom (device type) stays the same, so keep the layout recognizable for that platform.
- Respect safe areas, margins and layout guides. Test the smallest and largest layouts first, plus localizations and text sizes.
- **Scale background artwork** to fill, never distort the aspect ratio, and plan for very wide or very tall windows.
- **Platform notes:**
  - **macOS:** no controls or critical information at the bottom of a window (people drag windows off-screen), and no content behind the camera housing.
  - **tvOS:** safe area is 60 pt top and bottom, 80 pt left and right. Pad focusable elements so the growth on focus doesn't overlap anything. Partially hidden offscreen content should be symmetrical.
    - **tvOS grids (horizontal gap 40 pt, vertical gap ≥ 100 pt), item width by column count:** 2 → 860 · 3 → 560 · 4 → 410 · 5 → 320 · 6 → 260 · 7 → 217 · 8 → 184 · 9 → 160 pt.
  - **visionOS:** support resizing and keep content centered at large sizes. Use 3D in windows sparingly and inset it. Put supplemental content in an adjacent window, not an ornament. Button centers ≥ 60 pt apart.
  - **watchOS:** at most 3 glyph buttons or 2 text buttons side by side. Autorotate content meant to be shown to others (a QR code, a photo).

### 2.7 Icons, SF Symbols and app icons

**Interface icons:**
- Simplified and recognizable, visually consistent, and **weight-matched to adjacent text**.
- Add padding for optical alignment.
- Provide a selected-state version only if necessary.
- Use vector formats (PDF or SVG), give each one an alt label, and never use replicas of Apple hardware.

**Standard symbols:**

| Action | Symbol |
|---|---|
| Cut | `scissors` |
| Copy | `document.on.document` |
| Paste | `document.on.clipboard` |
| Done | `checkmark` |
| Cancel / Close | `xmark` |
| Delete | `trash` |
| Undo / Redo | `arrow.uturn.backward` / `arrow.uturn.forward` |
| Compose | `square.and.pencil` |
| Duplicate | `plus.square.on.square` |
| Rename | `pencil` |
| Move | `folder` |
| Attach | `paperclip` |
| Add | `plus` |
| More | `ellipsis` |
| Select | `checkmark.circle` |
| Search | `magnifyingglass` |
| Filter | `line.3.horizontal.decrease` |
| Share | `square.and.arrow.up` |
| Print | `printer` |
| Account | `person.crop.circle` |
| Like / Dislike | `hand.thumbsup` / `hand.thumbsdown` |
| Archive | `archivebox` |
| Calendar | `calendar` |

On the web, use Lucide or Phosphor icons with matched stroke weights.

**SF Symbols:**
- **Rendering modes:** monochrome, hierarchical, palette, multicolor. Check that the mode works in every context.
- **Variable color** communicates change, not depth.
- **Animations:** Appear, Disappear, Bounce, Scale, Pulse, Variable color, Replace, Magic Replace, Wiggle, Breathe, Rotate, Draw On/Off. Use them judiciously and with a clear purpose that fits your app's tone.
- **Custom symbols:** start from the template, give them alt text, don't add enclosure or badge variants yourself, and don't depict Apple products.

**App icons** (Liquid Glass, layered; build them in Icon Composer):
- Foreground layers have clear edges and varied opacity, over a background that makes them stand out. Use vector art and unmasked layers, with primary content centered.
- Build from filled, overlapping shapes. Include text only when it's essential. Prefer illustration to photos, and never copy UI or Apple hardware.
- Let the system add blur and other effects.
- Keep features consistent across appearances: default, dark, clear light/dark and tinted light/dark. Base the dark icon on the light one.

| Platform | Canvas | Masked shape |
|---|---|---|
| iOS, iPadOS, macOS | 1024×1024 px | Rounded rectangle |
| tvOS | 800×480 px, layered parallax, keep a safe zone | Rounded rectangle |
| visionOS | 1024×1024 px, 3D layers | Circle (no "hole" shapes) |
| watchOS | 1088×1088 px | Circle (never a black background) |

### 2.8 Images

| Platform | Scale factors |
|---|---|
| iOS | @2x and @3x |
| iPadOS, watchOS | @2x |
| macOS, tvOS | @1x and @2x |
| visionOS | @2x or higher |

- **Formats:** de-interlaced PNG for bitmaps, 8-bit palette PNG where full color isn't needed, JPEG or HEIC for photos, stereo HEIC for spatial photos, PDF or SVG for flat and interface art.
- Embed a color profile, design at the lowest resolution and scale up, and test on real devices.
- **tvOS:** layered parallax images with text in the foreground, an opaque background and a safe zone.
- **watchOS:** avoid transparency and use autoscaling PDFs.

### 2.9 Motion

- Use motion **purposefully**, never just to have it. **Make motion optional**: never the only carrier of information, so pair it with haptics or audio.
- Feedback motion should be **realistic**: it follows the gesture, and something revealed from the top dismisses toward the top.
- Make feedback **brief and precise**, and avoid animating frequent interactions.
- **Let people cancel motion**; never make them wait for an animation.
- Use animated SF Symbols where they help.
- **Games:** hold a steady 30–60 fps by default, and offer power and performance modes.
- **visionOS:**
  - No motion at the edges of the field of view.
  - Make large moving objects translucent or lower their contrast.
  - Fade out, move, then fade in when relocating something.
  - Never rotate the world, and always keep a stationary frame of reference.
  - Avoid sustained oscillation, especially around 0.2 Hz.
- **watchOS:** easing is built in and can't be customized.

### 2.10 Haptics

- Use system patterns according to their meanings, consistently, as a complement to visual and audio feedback (not a replacement), and sparingly.
- In apps, use short haptics for discrete events. Make haptics optional and be aware they can affect other experiences (like the camera or the mic).
- **iOS:** Notification (success, warning, error), Impact (light, medium, heavy, soft, rigid) and Selection.
- **macOS:** Alignment, Level change, Generic.
- **watchOS:** notification, up, down, success, failure, retry, start, stop, click.

### 2.11 Writing (UX copy)

- **Voice and tone:** define a voice and keep a list of terms, then match tone to the moment (serious for errors, celebratory for goals). Be clear, cut words, and read it aloud. Write for everyone in plain language, with no jargon and no gendered terms.
- **Each screen:** most important information first. Split complex ideas across screens.
- **Actions:**
  - Button labels are verbs: "Send", not "Let's do it!".
  - Never write "Click here"; use descriptive link text.
  - In flows, use "Get Started", then "Continue"/"Next" consistently, then "Done".
- **Capitalization:** pick title case or sentence case per element type and apply it consistently.
- **Pronouns:** use possessives sparingly ("Favorites", not "Your Favorites"). **Avoid "we"**: "Unable to load content", not "We're having trouble…".
- **Device verbs:** say "tap" on touch devices and "click" on Mac. Keep text brief on Watch and TV, and remember TVs have shared audiences.
- **Empty states:** welcome people, give the next step, and include a button. Never put crucial information there.
- **Errors:**
  - Show them next to the problem, without blame, and say how to fix it ("Choose a password with at least 8 characters").
  - Never write "Oops!" or "Invalid name".
  - Phrase rules positively: "Use only letters for your name".
- **Settings:** say what a setting does when it's on, and link directly to it.
- **Text fields:** visible labels plus hint text ("name@example.com").

### 2.12 Branding

- Express your voice in copy and use the accent color judiciously. A custom font is optional.
- Express the brand through familiar components. **Branding defers to content.**
- Don't scatter the logo everywhere, and **never use the launch screen for branding**. Follow Apple's trademark guidelines.

### 2.13 Inclusion

- Use welcoming, people-first language. Define technical terms and replace colloquialisms with plain language. Be careful with humor.
- Avoid stereotypes, and represent a range of genders, people and settings.
- Keep things simple and perceivable, and plan for localization.

### 2.14 Privacy

- Request only what you need, explain how you use it, process on-device where possible, and use system protections.
- **Ask permission only when it's needed, not at launch** (unless the app can't work without it).
- **Purpose strings** are active, specific sentences: "The app records during the night to detect snoring sounds." Not a vague passive line, and not a bare command.
- **Pre-alert screens:** one button that clearly opens the system alert, and no extra actions. Never put a misleading screen before the tracking prompt.
- Prefer passkeys or Sign in with Apple over passwords alone. Use the keychain, never plain text, and no custom authentication schemes.

### 2.15 Right to left

- Align text to the interface direction, and align each paragraph by its own language. Keep list alignment consistent.
- **Numbers:** never reverse the digits within a number. Do reverse the order of progress sequences.
- **Flip:** progress controls, ordered navigation, and icons for text direction or forward/back motion.
- **Don't flip:** photos, logos, universal signs, real-world object icons, or controls that point in a real direction.

---

## 3. Patterns (behaviors that apply everywhere)

- **Launching:**
  - Launch instantly and restore the previous state.
  - The launch screen should be nearly identical to the first screen, with no text and no ads. Downplay the launch.
  - If you need a splash screen, show it at the start of onboarding. Live-viewing tvOS apps can start playback automatically.
- **Onboarding:**
  - Teach through interaction, and prefer context-specific tips to one long flow.
  - Required flows should be brief and enjoyable, and tutorials optional.
  - Don't make large downloads block onboarding, and don't show licensing details.
  - Postpone nonessential setup, and let people experience the app before asking for ratings or purchases.
- **Loading:** "The best loading experience finishes before people become aware of it."
  - Show something immediately, let people do other things meanwhile, and keep long waits interesting.
  - Download in the background, and state progress and duration.
  - On watchOS, avoid loading indicators.
- **Feedback:**
  - Make all feedback accessible, and build status into the UI.
  - Alerts are for critical, actionable information.
  - Warn before unexpected, irreversible data loss, confirm significant completions, and explain when an action can't be done.
- **Modality:**
  - Use it only when it clearly helps. Keep it simple, short and streamlined, not "an app within your app".
  - Full-screen modals are for deep tasks.
  - Always offer an obvious way out, and confirm before discarding data.
  - Make the modal's task clear, and close one modal before presenting another.
- **Entering data:**
  - Get what you can from the system. Be clear about required data.
  - Use secure fields, **never prefill passwords**, offer choices instead of typing, and allow paste and drag.
  - Validate dynamically, and on macOS show expansion tooltips for clipped text.
- **Searching:**
  - Give search a primary position when it matters, with a single location for searching.
  - Show the scope, offer suggestions, and respect privacy in search history.
  - Index content in Spotlight.
- **Settings:**
  - Choose great defaults and keep settings few.
  - Don't ask for setup information you can get elsewhere, and don't duplicate systemwide settings.
  - Put task options in context.
  - On macOS: Settings in the App menu, dimmed minimize and zoom buttons, a fixed toolbar, and a title that matches the pane.
- **Undo/redo:**
  - Make results predictable and visible, with multiple levels and an option to revert many changes.
  - Describe the action ("Undo Paste and Match Style").
  - On macOS: Edit menu with ⌘Z and ⇧⌘Z. On iOS: shake or 3-finger swipe.
- **Notifications:**
  - Concise and high-value, with no duplicates and no "go do X in the app" nudges. Errors belong in alerts.
  - No sensitive data, and don't include your app name or icon.
  - Actions should be useful and non-destructive, each with an icon, and never just "Open app".
  - Badges count unread items only.
  - **Interruption levels:**
    - Passive and Active don't break through.
    - Time Sensitive breaks through Focus; **never use it for marketing**.
    - Critical also overrides the silent switch and requires an entitlement.
  - Marketing notifications need opt-in and in-app controls.
- **Managing accounts:**
  - Explain the benefits and delay sign-in. Prefer a passkey or Sign in with Apple, and don't call it a "passcode".
  - Account deletion must be possible in-app, consistent with the web, optionally scheduled, and confirmed when done. Explain how billing and cancellation work.
  - tvOS: sign in using another device.
- **Ratings:** ask only after engagement, never mid-task, and don't pester. Use the system prompt.
- **Help:**
  - Fit help to the task and don't explain standard controls.
  - Tips should be short, actionable and engaging, with a filled symbol.
  - Tooltips (macOS, visionOS): brief, in sentence case, describing the action without repeating the control's name.
- **Undo-friendly destructive actions:** prefer undo to confirmation for common actions, and reserve confirmations for rare, irreversible ones.
- **File management:**
  - People should be confident work is always saved. Hide file extensions by default.
  - Use Quick Look previews. On Mac, provide Open/Save panels and show unsaved state when autosave is off.
- **Full screen:**
  - Support it when it fits, and never resize the window programmatically.
  - Keep essential controls reachable, and let people reveal the Dock (except in games).
  - Resume where people left off, and let them choose when to enter and exit.
- **Drag and drop:**
  - Support it widely, and always offer an alternative.
  - Be clear whether it moves or copies, support multiple items and undo, and offer rich-to-plain content versions.
  - Show the drag image after about **3 pt** of movement, mark valid and invalid targets, and give feedback on failure.
- **Multitasking:** pause attention-requiring activities when people switch away, handle audio interruptions smoothly, finish user-started tasks in the background, and send notifications sparingly.
- **Charts:**
  - Use them to highlight something specific, and keep them simple with details on demand.
  - Use familiar types, descriptive text and a summary of the main message, with consistency across charts.
  - Every chart must be accessible (labels per element, Audio Graphs).
  - Never rely on color alone, and separate adjacent color areas.
  - Choose fixed or dynamic axes deliberately, with familiar tick values.
- **Collaboration and sharing:** Share button in the toolbar, simple permission summaries, and a prominent Collaboration button once collaboration starts.
- **Generative AI:**
  - Be responsible, keep people in control and be inclusive, and make sure the app works without AI.
  - Say where AI is used and what it can and can't do.
  - Ask before using personal data. Reduce hallucinations, and confirm before irreversible tasks.
  - Make refining and reverting easy. Avoid copyrighted output.
  - Design for processing time with reassuring progress feedback, offer alternatives, and collect feedback.
- **Machine learning:** explicit feedback is voluntary and acted on immediately. Show confidence in actionable terms, list the most likely option first, keep corrections easy, and set realistic expectations.
- **Playing audio:** respect silence, volume and headphones, adjust levels (not the system volume), use the system volume view, choose the right audio category, and resume after interruptions only when appropriate.
- **Playing video:** use the system player and the original aspect ratio, start immediately, and resume from the previous end time without asking. Space toggles play/pause.
- **Workouts (watchOS):** give the active workout a distinct look, use big and easy controls, show a summary at the end, discard very short sessions, and keep text legible in motion.
- **Live viewing (TV):** live content first, one tap (or none) to play, instant feedback on channel changes, and an EPG you can browse without leaving playback.

---

# PART C — DEVICE AND COMPONENT SPECS (for native apps and device-specific UI)

## 4. Platform playbooks

### 4.1 iPhone (iOS)

- **Characteristics:**
  - Medium-size, high-resolution display, held in one or both hands, both orientations.
  - Inputs: Multi-Touch, keyboard, voice, gyroscope and accelerometer.
  - Sessions from a quick check to an hour or more, with frequent app switching.
- **Best practices:**
  - Limit on-screen controls, and make secondary actions discoverable.
  - Adapt to orientation, Dark Mode and Dynamic Type.
  - Keep controls in the **middle or bottom of the screen**, and support swipe-back and row swipe actions.
  - Use system capabilities (Apple Pay, Face ID, location) instead of making people type.
- **Navigation:**
  - Tab bar for top-level sections. Large title that collapses as you scroll. Standard Back and Close buttons.
  - Sheets with medium/large detents, a grabber and swipe-to-dismiss.
  - **Search at the bottom** if there's room; at the top if bottom content matters or there's no bottom toolbar.
- **System surfaces:** Widgets, Live Activities (Dynamic Island, Lock Screen, StandBy), Home Screen quick actions, Controls (Control Center, Lock Screen, Action button), Spotlight, Shortcuts, share sheet.
- **Status bar:** don't hide it permanently; hide it temporarily for full-screen media.

### 4.2 iPad (iPadOS)

- **Characteristics:** large display used within about 3 ft, held, propped or on a stand. Inputs: touch, Pencil, keyboard and trackpad combined. Multitasking with multiple windows and drag and drop.
- **Best practices:**
  - Raise content up, minimize modals and full-screen transitions, and keep controls reachable but out of the way.
  - Set density by viewing distance and input.
  - Support combined inputs, and adapt to multitasking sizes (narrow, compact and intermediate widths).
  - Make the move to the Mac seamless.
- **Navigation:**
  - Prefer a tab bar that can turn into a sidebar, and let people customize it.
  - Split views on regular widths with a persistent selection highlight.
  - Search on the trailing side of the toolbar, or at the top of the sidebar.
  - Window controls must never overlap toolbar items.
- **Pointer:**
  - Use system pointer effects and padded, contiguous hit regions.
  - Specify the corner radius for lift effects, avoid gratuitous effects, and never use instructional text in the pointer.
- **Apple Pencil:**
  - Ink instantly on contact.
  - Hover previews only (never actions), and respect the person's double-tap setting.
  - Squeeze is one discrete, non-destructive, undoable action, with its UI shown near the pencil.
  - Barrel roll only modifies marking.
  - Scribble everywhere text is entered: the field stays still, doesn't autoscroll, and has room to write.
- **Keyboard:** iPadOS keyboard navigation covers text fields, sidebars and collections, **not buttons or switches**. The menu bar is hidden until revealed, so make every function reachable in the UI too.

### 4.3 iPhone Duo (two displays, folding; new Sept 2026)

- Build the app to resize, with a consistent experience across displays. **Keep the same functionality in every pose.** Games must be playable in every pose.
- Adapt the layout when the device folds, without extreme changes. Respect reserved regions.
- Use split views or arrangement views when the layout already looks like one, and keep navigation outside arrangement views.
- **Vertical bars:**
  - Follow the system's vertical layout for toolbars and tab bars, and account for asymmetry.
  - Keep controls consistent across poses, in the standard order, with frequent items first. Don't override the default placement.
  - Use the full width when no bars are needed. Group related items instead of hand-spacing them, and keep controls near the content they affect.
  - **Give every non-text toolbar item both a title and a symbol.** Keep text buttons to a minimum.
  - When space is tight, keep either the toolbar or the tab bar based on the view's purpose, and use the system overflow menu.

### 4.4 Mac (macOS)

- **Characteristics:** large displays, often several (iPad can be one), used at a desk at 1–3 ft. Keyboard, mouse, trackpad and controllers. Sessions from minutes to hours, many apps at once.
- **Best practices:**
  - More content with fewer nesting levels and less modality, at a comfortable density.
  - Resizable, hideable, movable windows and full-screen mode. **Every command lives in the menu bar.**
  - Support pixel-precise input, full keyboard shortcuts, and personalization (toolbars, colors, fonts).
- **Menu bar order:** App menu (About first, then Settings…, Services, Hide, Quit), then File, Edit, Format, View, app-specific menus, Window, Help.
  - Show the same items every time, with icons for familiar actions and the standard shortcuts.
  - Use short, one-word menu titles. Use an ellipsis "…" when more input is needed.
  - Dynamic (Option-key) items need only a single modifier and are never the only path to a task.
- **Menu bar extras:** use a symbol, open a menu (not a popover), and let people decide whether to show the extra.
- **Windows:** use the system appearances. Never put critical controls in a bottom bar. Title windows by their content, not your app's name.
- **Toolbars:** make every toolbar item available in the menus too, and let people customize the toolbar.
- **Controls:**
  - Switches, checkboxes and radio buttons go in the window body. Prefer checkboxes for single settings, and use a checkbox hierarchy for related settings.
  - Push buttons get a trailing "…" when they open another window.
  - The help button sits in a lower corner, at most one per window.
- **Tables:** sort by clicking column headings, resizable columns, alternating row colors, and outline views for hierarchical data (with a centered-ellipsis truncation).
- **Split views:** reasonable minimum and maximum pane sizes, hideable panes, the thin divider style, and auto-hiding the sidebar when the window narrows.
- **Pointer:** primary click selects, secondary click opens a context menu; use the standard cursors (arrow, closed hand, crosshair and so on).
- **Sign** the app with a Developer ID and use the sandbox.

### 4.5 Apple Watch (watchOS)

- **Characteristics:** small display used within 1 ft, Always On. Digital Crown for vertical navigation, plus the Action button and sensors. Interactions under a minute; complications and notifications get used more than the app itself.
- **Best practices:**
  - Glanceable, single-screen interactions with one or two gestures and shallow hierarchy.
  - Navigation anchored to the Crown.
  - Proactive, personal content.
  - Complications on the watch face, rich notifications, and backgrounds and materials that carry meaning.
  - The app should work independently.
- **Layout:**
  - Prefer full-width buttons for primary actions; put corner buttons in the toolbar.
  - Vertical scrolling and vertical tab pages, each about one screen tall.
  - Avoid indeterminate loading indicators.
- **Complications:**
  - Show essential, dynamic, glanceable data. Support all families, with a deep link for each.
  - Mind privacy, update data thoughtfully, and use line widths of 2 pt or more.
  - Look good tinted, and provide placeholders.
- **Always On:** hide sensitive information, dim nonessential content, keep the layout, and ease motion to rest instead of stopping it.
- **Digital Crown:** apps don't get Crown presses. Give visual feedback that matches turn speed, and use the default haptics.
- **Action button:** use subsequent presses for more functions (not to stop). Pressing Action and side together pauses.
- **Workouts:** see §3.
- **Video:** short clips, H.264 at 160 kbps, 208×260 px portrait.

### 4.6 Apple TV (tvOS)

- **Characteristics:** very large display viewed from 8 ft or more, often by several people. Siri Remote, controllers, voice and other devices. Long, immersive sessions with picture-in-picture.
- **Best practices:**
  - Fluid remote gestures.
  - **Embrace the focus system**: gentle highlight and scale on focus. Never move focus without the person's action, and never show a pointer.
  - Edge-to-edge artwork, subtle animation and great audio, legible from across the room.
  - Easy, infrequent sign-in (using another device), shared accounts, and automatic profile switching.
- **Focus states:** unfocused, focused (elevated, lit, animated), highlighted (pressed), selected and unavailable. Design them all.
- **Remote:**
  - Swipe moves focus; press activates. **Back opens the parent screen.**
  - Play/Pause controls media (or acts as the secondary button in games).
  - Tell a press from a tap, and ignore accidental taps.
- **Layout:** safe area of 60 pt top and bottom and 80 pt at the sides, the grid widths in §2.6, and Body text at 29 pt.
- **Top Shelf:** jump straight into content, feature new and personalized items, no ads or prices. Static fallback is 2320×720 pt. Sectioned rows should be complete.

### 4.7 Apple Vision Pro (visionOS)

- **Characteristics:** infinite canvas. Shared Space vs. Full Space, and passthrough controlled by the Crown. Spatial Audio. **Eyes look, then indirect pinch.** Comfort is paramount.
- **Best practices:**
  - Use the **minimum immersion** each moment needs; start in the Shared Space or with mixed immersion.
  - Use windows for UI tasks.
  - Keep content in the field of view and relative to the head. People should be able to use the app with their hands at rest.
  - Support SharePlay with spatial Personas.
- **Eyes:**
  - Always offer multiple input methods, at a comfortable viewing distance.
  - Leave generous space around targets, and make interactive items round. Give compound components one containing shape the system can highlight.
  - No full-field repeating patterns.
  - Custom hover effects only for special moments, with the right delay, keeping one view unchanged.
- **Windows:**
  - Keep the glass background. Choose an initial size and shape that fit the content, with minimum and maximum sizes.
  - Limit 3D depth in windows, and use volumes for rich 3D.
  - Ornaments hold controls (toolbars, playback): no wider than the window and generally visible. Don't use a pull-down in the toolbar, and don't use vertical toolbars.
- **Spatial layout:** center important content, never anchor content to the head, and show depth with accurate cues. Use depth for hierarchy, but no depth on text. Keep few windows, minimize physical movement, and use the floor to place large experiences.
- **Immersion:**
  - Smooth, person-initiated transitions with a clear exit.
  - Subtle passthrough tints, and a grounded, expansive environment without flat 360° images.
  - Virtual hands should match the person's and fade out when tracking is lost.
  - Don't encourage moving around.
- **Gestures:** standard indirect gestures first. Avoid gestures that need a specific hand, rolling motions or multiple fingers. The space around the hand is reserved for system overlays.
- **Scroll:** support Look to Scroll in reading and browsing views (not for controls), with clear full-width scroll areas.
- **SharePlay:** start from a window. Seats at least 1 m apart, and roles independent of seats.

### 4.8 Web and cross-device sites

The HIG's web-specific guidance covers **Apple Pay on the web** and **Sign in with Apple**. Everything else carries over:

- **Breakpoints by available space** (size classes): compact < 600 px; regular ≥ 600–900 px, where a tab bar becomes a sidebar. Use container queries for components.
- **Map tokens:** 1 pt ≈ 1 CSS px. Use iOS sizes for touch-first and phone widths, and macOS density for pointer-first, wide desktop layouts (`@media (pointer: fine)`).
- **Respect** `prefers-color-scheme`, `prefers-contrast`, `prefers-reduced-motion`, `prefers-reduced-transparency` and `forced-colors`.
- **Safe areas:** `viewport-fit=cover` plus `env(safe-area-inset-*)`.
- **RTL:** use logical properties (`margin-inline-start`) and `dir="auto"`.
- **Keyboard:** full keyboard path, a visible `:focus-visible` ring, and **never override standard shortcuts** (⌘C, ⌘F and so on).
- **Hit areas:** 44 px for touch, 28 px minimum for fine pointers.

### 4.9 Games (any device)

- **Jump into play:** let people play as soon as installation finishes, set great defaults, teach through play, and ask for things later.
- **Display:**
  - Legible text (the §2.1 sizes) and easy buttons, with resolution-independent assets.
  - Account for device features (the notch, the Dynamic Island).
  - Menus that adapt to the aspect ratio, and full-screen play.
- **Input:** support the platform default (touch on iOS, keyboard and mouse on Mac, the remote on tvOS) plus controllers.
- **Touch controls:** easy to reach and large, with visible and tactile press states and symbols. Show and hide them with gameplay, and combine functions into one control.
- **Controllers:** detect them automatically and show glyphs that match the controller. **A = activate, B = back/cancel**, shoulder buttons = switch sections. Support multiple controllers.
- **Keyboard:** single-key commands, comfortable key proximity, and customizable bindings.
- **Inclusion:** customizable difficulty and representation, no stereotypes.
- **Apple technologies:** Game Center (access point on menus only, correct terms: Achievements, Leaderboards, Challenges), iCloud saves, haptics, Spatial Audio.

---

## 5. Components (cross-platform rules + key specs)

**Buttons**
- Make them easy to use and **always give custom buttons a press state**.
- Give the **most likely action** the prominent style. **Distinguish the preferred choice with style, not size.**
- Never use the same color for button labels and the content background.
- Purpose must be clear: use familiar icons for familiar actions, and text when it's clearer.
- **Never give a destructive button the primary role.** On iOS, show an activity indicator on the button for actions that don't finish instantly.
- **visionOS sizes:** 28, 32, 44, 52, 64 pt. Prefer circular or capsule shapes with a filled background, never white with black text.
- **watchOS:** full-width primary buttons. Vertical button stacks share the same height.
- **macOS:** image buttons get about 10 px of internal padding.

**Toolbars**
- Choose items deliberately, and never add an overflow menu by hand (the system adds one); use a More menu for extra actions.
- Use fewer backgrounds and tints, and system symbols without borders.
- Give **Done and Submit the `.prominent` style.**
- Group by function and frequency, keep groups few, and keep navigation and critical actions (Done, Close, Save) in their own distinct groups. Keep text-labeled actions separate.
- Titles are short and useful, and never just the app name.
- Use the standard Back and Close buttons. Toolbars can hide temporarily for focus.

**Tab bars**
- Use them for **navigation, not actions**. Keep them visible across sections.
- No overflow tabs, and never disable or hide a tab.
- Give every tab a label and an SF Symbol. Badges are only for critical information.
- On iPad, let the tab bar turn into a sidebar and be customized.

**Sidebars**
- Leading edge; let rich content extend beneath.
- Customizable and hideable, **at most 2 levels deep** with succinct group labels and familiar symbols.
- Icon colors must have a purpose. On iPhone and iPad, consider a tab bar first.
- On Mac, auto-hide when the window narrows, and never put critical items at the bottom.

**Split views**
- Keep the selection highlighted in each pane, and allow drag between panes.
- On iOS, only in regular widths.
- On macOS, thin dividers, minimum and maximum pane sizes, hideable panes with several ways to reveal them.

**Lists and tables**
- Prefer them for text. Make them editable when it makes sense, with selection feedback.
- Keep row text succinct and avoid clipping, with descriptive headings.
- On iOS, the info button only reveals more about the row. Don't add an index when rows have trailing controls.
- On Mac, sortable, resizable columns with alternating rows.
- On Watch, limit the number of rows.

**Collections**
- Use the standard row and grid layouts, and a table instead for text.
- Make items easy to choose, and animate insert, delete and reorder.
- Be careful with dynamic layout changes.

**Menus**
- Labels are clear, succinct and in title case, without articles ("Add Bookmark").
- Show unavailable items as dimmed in main menus, and add "…" when more input is needed.
- Use icons sparingly but consistently within a group.
- Most-used items first, related items grouped, and an eye on length.
- Submenus are sparing and shallow, and stay available.
- Toggled items: use a changeable label ("Show/Hide Sidebar") or a checkmark.

**Context menus**
- Small, relevant and consistent everywhere.
- **Every item must also exist in the main UI.**
- One submenu level at most. **Hide unavailable items** (don't dim them).
- Show shortcuts in main menus only. Warn about destructive items.
- On iOS, use a context menu or an edit menu, not both, with a graphical preview.

**Pull-down buttons** hold commands related to the button (not every action), with confirmation for destructive items. **Pop-up buttons** hold mutually exclusive options with a useful default.

**Edit menus:** use the system menu with relevant commands, put custom commands near related system ones, and let people select and copy static text.

**Alerts**
- Use them **sparingly**: not for information alone, not for common undoable actions, and **never at launch**.
- Direct, neutral tone. The title states the situation, and the body appears only if it adds value. Don't explain the buttons.
- Button titles are logical verbs, **not "OK"** (unless the alert is purely informational).
- Use the destructive style plus a Cancel button. Allow Esc or ⌘. to cancel. Don't let alerts scroll.

**Action sheets**
- Use them, not alerts, for choices about something the person started.
- Sparing, with a one-line title. Destructive choices are prominent, with Cancel.
- No scrolling. On watchOS, at most 4 buttons.

**Sheets**
- For scoped tasks tied to the current context; use something else for long flows.
- One at a time, with an alternative to Done.
- **iPhone:** medium detent, grabber, swipe-to-dismiss. **iPad:** page or form styles.
- **Mac:** sensible default size, and let people use other windows meanwhile.
- **visionOS:** never emerging from the bottom edge.

**Popovers**
- For small amounts of information, positioned near the control.
- **Save work when one closes automatically.**
- One at a time, nothing shown over a popover, and a single tap to switch between them.
- Not too big, and **never for warnings**. Not in compact iPhone views.

**Text fields**
- For small amounts of input, with hint text and secure fields where needed.
- Size them to the expected content, space them evenly, and keep a logical Tab order.
- Validate, use number formatters, and show the right keyboard type.
- On iOS, add a trailing Clear button. Minimize text entry on Watch and TV.

**Search fields:** placeholder that says what can be searched, live results as people type, suggestions, simple results, filters, scope bars (default to the broadest scope) and tokens.

**Toggles**
- For two opposing states, with obvious visual differences and a clear target.
- **On iOS, use switches only in list rows**; elsewhere use a toggle-style button.
- On Mac: checkbox for a single setting, radio buttons for more than two exclusive options, never a switch in place of a checkbox.

**Sliders**
- Use familiar directions, optionally with a text field or stepper.
- **Never for audio volume on iOS** (use the system volume view).
- Mac: tick marks and labels. visionOS: horizontal only.

**Segmented controls**
- For closely related choices. Keep segments few and of equal size.
- Text **or** images, not mixed, with **noun labels**.
- On Mac, use a tab view, not a segmented control, for switching views.

**Steppers:** make the value obvious. Pair with a text field for big changes.

**Pickers:** for medium-to-long lists in a logical order, without switching views. Offer coarser minute steps, and use the compact date picker on iOS.

**Progress indicators**
- Prefer determinate ones with accurate progress, and keep them moving.
- Switch from indeterminate to determinate when possible, but **never from circular to bar**.
- Keep them in a consistent spot, and let people cancel (warning about consequences).
- On Mac, use a spinner for background work, without a label.

**Page controls:** centered at the bottom, not too many dots, no colored indicators, and at most 2 custom indicator images. On Watch, vertical pages.

**Scroll views**
- Use default gestures and shortcuts, and make scrollability obvious (show partial content at the edge).
- **Never nest scroll views on the same axis.** Use paging where it fits, with some overlap.
- Scroll automatically only as far as needed to keep context, and set sensible zoom limits.

**Disclosure controls** hide details until they're relevant, with descriptive labels; at most 1 disclosure button per view. **Labels** use the system label colors and selectable text.

**Image views:** be careful putting text over images, and use symbols for icons. **Text views:** legible and selectable.

**Web views:** support back and forward, and never build a browser out of one.

**Tab views (Mac):** closely related panes, each with a label, at most 6 tabs, inset from the window edges.

**Boxes:** small relative to their container, titled only if it clarifies the contents.

**Windows (all platforms):**
- Adapt fluidly, open new windows at sensible moments, no custom window UI, and call them "window" in copy.
- iPad: controls never overlap the toolbar.
- Mac: no critical bottom bar.
- visionOS: see §4.7.

**Charts components:** choose marks by meaning, label axes with familiar values, maximize the plot width in compact views, and make interaction optional for critical information.

**Gauges** label the value and both ends, optionally with a gradient fill. **Rating indicators** are easy to change.

**Widgets**
- Simple ideas tied to the app's purpose, with dynamic, glanceable content and balanced density.
- Thoughtful branding, and don't mirror the widget inside the app.
- Standard margins, **corner radius concentric with the widget**, system fonts, no tiny text and no rasterized text.
- Support full-color, accented and vibrant modes, with realistic gallery previews.
- Interactions are simple and deep-link correctly.
- **iPhone sizes** (430×932 screen): small 170², medium 364×170, large 364×382. Accessories: circular 76², rectangular 172×76, inline 257×26.
- **visionOS:** paper or glass style, elevated or recessed mounting.

**Live Activities**
- Only for tasks with a defined start and end, showing only the most important information.
- No ads and no sensitive data. Use the logo without a container.
- Consistent margins with **concentric placement**, and fit snugly around the TrueDepth camera.
- Animate updates, but alert only for essential ones. **End immediately** when the event ends.
- Lock Screen heights 84–160 pt. Compact presentation 52–62 pt wide.

**Controls (Control Center and Action button):** high-value actions with descriptive symbols, animated state changes, a brand tint, hidden sensitive information when locked, and authentication for security-related actions.

**Status bar:** dim or obscure content beneath it. Never hide it permanently.

**Activity view (share sheet):** don't duplicate system actions. Custom actions get a symbol and a short title, opened from the Share button.

**Home Screen quick actions:** high-value, predictable, with succinct titles and symbols, **never emoji**.

---

## 6. Inputs

**Standard gestures:**

| Gesture | Action | Platforms |
|---|---|---|
| Tap | Activate or select | All |
| Swipe | Reveal actions, dismiss, scroll | All |
| Drag | Move | All |
| Touch/pinch and hold | More options | All except macOS |
| Double tap | Zoom (primary action on newer Watches) | All |
| Zoom / Rotate | Magnify / rotate | All except watchOS |

- iOS adds a 3-finger swipe (undo/redo), 3-finger pinch (copy/paste) and shake (undo).
- Always offer more than one way to do something. Respond instantly, and show when a gesture isn't available.
- Custom gestures only when necessary, easy to learn, as shortcuts rather than replacements, and **never conflicting with system gestures**.

**Keyboards**
- Support Full Keyboard Access and **never repurpose standard shortcuts**.
- Custom shortcuts only for frequent commands. **⌘ is the main modifier, ⇧ secondary, ⌥ sparingly, and avoid ⌃.**
- List modifiers in the order ⌃⌥⇧⌘. Don't add ⇧ to an upper-character key, and let the system localize and mirror shortcuts.
- visionOS: descriptive shortcut titles.

**Virtual keyboards:** match the keyboard type to the content (email, number, URL), customize the Return key, and place controls above the keyboard thoughtfully. Custom keyboards need an obvious switcher.

**Pointing devices:** respond consistently, don't redefine system gestures, keep one experience across input types, reveal auto-hidden controls on hover, and keep modifier-key behavior consistent.

**Focus and selection:** use the system focus effects, and never move focus without the person's action. Use a focus ring for fields and a highlight for lists.

**Gyroscope and accelerometer:** use them only for real benefit, explain why, and don't manipulate the UI with motion outside gameplay.

**Nearby interactions:** continuous feedback in several forms, never the only way to do something, held in portrait orientation.

**Camera Control:** SF Symbols, short names, units on values, room for the overlay in the viewfinder, and a clutter-free viewfinder.

**Eyes, Digital Crown, Remote, Pencil, Action button, game controllers:** see the platform playbooks in §4.

---

## 7. Apple technologies (quick rules)

- **Apple Pay:** for physical goods, services and donations. Offer it everywhere it's supported, as the primary option when credentials exist.
  - Use the API-provided buttons only. Minimum 100×30 pt, or 140×30 for "Book/Buy/Check Out/Donate/Subscribe/Set Up with Apple Pay". Margin is 1/10 of the height, and match your corner radius.
  - Don't require an account, and collect options before the payment sheet. Report results in the sheet, then show a confirmation.
  - Never translate "Apple Pay", and never use the  logo in place of "Apple".
- **Apple In-App Purchase:** for digital goods.
  - Let people try first, show the total billing price, and use the default confirmation sheet.
  - Subscriptions: clear options and free-trial terms, prompts at relevant moments, and **easy cancellation**. Refund action labeled "Refund" or "Request a Refund".
- **Sign in with Apple:** ask only in exchange for value, and as late as possible (after purchase in commerce apps). Prominent button, minimum **140×30 pt**, margin 1/10 of height. Never ask for a password.
- **Siri / App Shortcuts:**
  - Expose popular actions with familiar terms, and never advertise.
  - Responses are succinct, device-independent, work both spoken and visual, and omit the app name.
  - Use brief activation phrases. Write "Shortcuts" plural in title case, and refer to Siri by name.
- **Widgets, Live Activities, Controls, Complications, Watch faces:** see §5 and §4.
- **Wallet:** offer to add passes, keep them up to date, keep the pass front uncluttered with good contrast, and ask before deleting. Order tracking keeps status current. Identity: ask only at the moment you need it, and only for what you need.
- **HealthKit / CareKit / ResearchKit:** coherent privacy policy, request data only when needed. Activity rings are for Move, Exercise and Stand only, never decoration or branding.
- **HomeKit:** use the system setup flow and offer good name suggestions; say "Apple Home" for the app.
- **AirPlay:** prefer the system player. Use "AirPlay" as a noun ("Use AirPlay to…").
- **Maps:** interactive, cluster points of interest, keep the Apple logo and legal link visible, and give custom controls enough contrast.
- **AR:** use the whole display, minimize on-screen text, and coach with approachable language ("Try turning on more lights", not "Insufficient features").
- **App Clips:** finish a task in seconds, no account required, small, no web views, and recommend the full app politely.
- **CarPlay:** never require input on the iPhone. Scannable from the driver's seat, tested in a real car. Icons at 120 and 180 px.
- **iCloud:** sync silently, respect storage, resolve conflicts promptly, and work offline.
- **SharePlay, Game Center, Live Photos, NFC** ("Scan the [object]", never "NFC tag"), **ShazamKit, Tap to Pay on iPhone, ID Verifier, iMessage apps:** follow their specific trademark and terminology rules.

---

## 8. The craft pass (what makes any brand feel premium and intentional)

1. **Concentric corners:** inner radius = outer radius − padding, whatever the brand's radius (even 0 → 0).
2. **One corner and shape language** across cards, buttons, inputs, images and icons, taken from §A5 (sharp, soft or pill — never mixed at random).
3. **Weight-matched icons and text**, with optical alignment nudges.
4. **One separation technique** (§A5), applied the same way everywhere: hairlines inset to the text, tonal surfaces, soft shadows, or hard outlines.
5. **Tabular numbers** for anything that changes.
6. **One primary action per view**, in the brand's action color.
7. **Every state designed** (§0.6), with skeletons that match the final layout.
8. **Copy** in the brand voice, following §2.11: verbs, no "we", no "Oops", device-correct verbs.
9. **Press, hover, focus, selected and disabled states** for every control, styled in the brand's language, with visible focus rings.
10. **Clear content/control layering:** sticky bars stay legible over any content (solid, tinted or blurred, as the brand dictates).
11. **No layout shift**, images at the right scale factors, 60 fps scrolling.
12. **Defining moment:** one well-crafted delight tied to the core task and expressed in the brand's personality.
13. **Platform-correct details:** "…" on Mac buttons and menu items that need more input, title case on menus, bottom-reachable controls on iPhone, the focus system on TV, round targets on Vision.

---

## 9. Anti-patterns (instant "low-craft" tells, in any brand)

- Branding on the launch screen, logos everywhere, ads in widgets, Top Shelf or Live Activities.
- Permission requests at launch, vague purpose strings, dark patterns before the tracking prompt.
- Alerts at launch, "OK/Cancel" where verbs belong, modal on top of modal, tours you can't skip.
- Color as the only signal, accent color on static text, Liquid Glass in the content layer, tinting every control.
- Thin fonts at small sizes, truncation at large text sizes, side-by-side layouts that break with Dynamic Type.
- Hidden or disabled tabs, overflow tabs, actions in a tab bar, nested scroll views on the same axis.
- Repurposed system shortcuts or gestures, hover that triggers actions, custom gestures without alternatives.
- Layout decided by device type instead of available space, functionality that changes with window size.
- Critical controls at the bottom of Mac windows, content anchored to the head in visionOS, moving focus on TV without the person's action.
- Animations that block input, loop forever or bounce on every tap, ignoring Reduce Motion.
- Hard-coded system color values, an inverted-light "dark mode", unsoftened white backgrounds in dark contexts.

---

## 10. Brand-parametric token kit (fill the values from Part A)

The **structure** follows the HIG roles. The **values** come from your brand. Swap the example values (shown for a fictional "loud zine" brand) with yours.

```css
:root{
  color-scheme: light dark;
  /* ---- 1. Brand inputs (change these) ---- */
  --font-display: "Anton", "Archivo Black", Impact, sans-serif;     /* personality face (A3) */
  --font-text: "Space Grotesk", "Inter", system-ui, sans-serif;     /* legibility face (A3) */
  --ratio: 1.5;                                                     /* scale ratio by energy (A3) */
  --brand-h: 120;                                                   /* brand hue (OKLCH) (A4) */
  --radius: 0px;                                                    /* shape personality (A5) */
  --section-space: clamp(64px, 10vw, 128px);                        /* density (A5) */
  --dur: 180ms; --ease: cubic-bezier(.2,.9,.3,1.2);                 /* motion personality (A8) */

  /* ---- 2. Type roles (HIG roles, brand scale) ---- */
  --t-body: 1.0625rem;                                  /* 17px base, rem so it scales */
  --t-callout: calc(var(--t-body) / 1.0625);
  --t-footnote: calc(var(--t-body) / var(--ratio) * 1.15);
  --t-title3: calc(var(--t-body) * var(--ratio));
  --t-title2: calc(var(--t-title3) * var(--ratio));
  --t-title1: calc(var(--t-title2) * var(--ratio));
  --t-display: clamp(3rem, 12vw, 10rem);

  /* ---- 3. Color roles (generated from the brand, contrast-checked) ---- */
  --brand:   oklch(92% .23 var(--brand-h));            /* bright: fills and art only */
  --brand-ink: oklch(45% .15 var(--brand-h));          /* text-safe on light (≥4.5:1) */
  --action:  var(--brand);  --on-action: #0b0b0a;      /* one meaning: "tap me" */
  --bg:      oklch(97% .01 var(--brand-h));            /* neutrals tinted toward brand */
  --surface-1: oklch(93% .015 var(--brand-h));
  --surface-2: oklch(89% .02 var(--brand-h));
  --ink:     oklch(18% .01 var(--brand-h));
  --ink-2:   oklch(38% .01 var(--brand-h));            /* ≥4.5:1 on --bg */
  --line:    oklch(18% .01 var(--brand-h));            /* brutalist: solid lines; Swiss: 15% alpha */
  --danger:  oklch(55% .2 25);  --success: oklch(55% .15 150);

  /* ---- 4. Spacing (8-pt rhythm) and targets ---- */
  --s1:4px; --s2:8px; --s3:12px; --s4:16px; --s6:24px; --s8:32px; --s12:48px; --s16:64px; --s24:96px;
  --tap: 44px;
}
@media (prefers-color-scheme: dark){ :root{
  --bg: oklch(14% .01 var(--brand-h)); --surface-1: oklch(19% .012 var(--brand-h)); --surface-2: oklch(24% .015 var(--brand-h));
  --ink: oklch(96% .01 var(--brand-h)); --ink-2: oklch(78% .01 var(--brand-h)); --line: oklch(96% .01 var(--brand-h));
  --brand-ink: var(--brand);   /* bright brand color is text-safe on dark */
}}
@media (prefers-contrast: more){ :root{ --ink-2: var(--ink); } }

body{ background:var(--bg); color:var(--ink); font:400 var(--t-body)/1.5 var(--font-text); }
h1,h2,h3{ font-family:var(--font-display); line-height:.95; letter-spacing:-0.01em; text-wrap:balance; }
.btn{ min-height:var(--tap); padding:0 var(--s6); border-radius:var(--radius); font-weight:700;
      transition:transform var(--dur) var(--ease); }
.btn:active{ transform:translate(2px,2px); }
.btn-primary{ background:var(--action); color:var(--on-action); }          /* one per view */
:focus-visible{ outline:3px solid var(--ink); outline-offset:3px; }       /* ≥3:1 against neighbors */
.num{ font-variant-numeric:tabular-nums; }
@media (prefers-reduced-motion: reduce){ *{ animation:none!important; transition-duration:.01ms!important; scroll-behavior:auto!important; } }
```

**For native Apple apps:** keep the brand's color roles and voice, but use the **system** text styles (`.font(.body)`), Dynamic Type, system components (`NavigationSplitView`, `TabView`, sheets with detents) and semantic colors, tinted with your brand accent. On Apple platforms, the platform's conventions beat brand novelty for controls (HIG Branding: "express your brand with familiar components").

---

## 11. Ship checklist (all devices)

**Brand fit (Part A)**
- [ ] Brand brief filled in; visual direction chosen from the personality scores
- [ ] Fonts, colors, radius, separation technique and motion all come from the brand
- [ ] Layout archetype chosen for the brand and goal, and the anti-clone guardrails (§A9) pass
- [ ] Logo test: with the logo hidden, the brand is still recognizable

**Principles**
- [ ] One clear purpose and one prominent action per view
- [ ] Every flow is skippable or escapable, and undo exists
- [ ] Permissions requested in context, with active, specific purpose strings

**Accessibility**
- [ ] Text at or above the platform minimum, and the layout survives AX5 / 200%
- [ ] Contrast ≥ 4.5:1 (≤ 17 pt) or 3:1 (≥ 18 pt or bold), in light, dark and increased contrast
- [ ] Hit targets at platform defaults, with 12/24 pt spacing
- [ ] VoiceOver labels and headings, no color-only meaning, gesture alternatives, full keyboard path
- [ ] Reduce Motion, Reduce Transparency and Dim Flashing Lights respected

**Visual**
- [ ] System or semantic tokens only, a single typeface family, no light weights at small sizes
- [ ] Liquid Glass only in the control layer, accent used sparingly
- [ ] Concentric radii, aligned edges, hairline separators, icons weight-matched to text
- [ ] App icon in every appearance (default, dark, clear, tinted), at the right canvas for each platform

**Adaptivity**
- [ ] Layout by available space (size classes / container queries), same functionality at every size
- [ ] Safe areas respected (Dynamic Island, camera housing, tvOS 60/80 pt), iPhone Duo poses
- [ ] RTL mirrored correctly, longest localization fits

**Platform fit**
- [ ] iPhone: bottom-reachable controls, swipe back, sheets with detents
- [ ] iPad: sidebar or tab bar, multitasking widths, pointer, Pencil, keyboard
- [ ] Mac: full menu bar, shortcuts, resizable windows, nothing critical at the bottom
- [ ] Watch: glanceable single screen, Crown navigation, complications, Always On
- [ ] TV: focus states, Back opens the parent, 29 pt body, safe area
- [ ] Vision: comfort, minimum immersion, ≥ 60 pt target spacing, nothing head-anchored

**Copy and states**
- [ ] Verb buttons, no "we" or "Oops", device-correct verbs, consistent capitalization
- [ ] Empty, loading, error, offline and first-run states designed, with next steps

**Polish and performance**
- [ ] Instant launch with state restoration, launch screen identical to the first screen
- [ ] Interruptible motion at 60 fps, no layout shift, assets at the right scale factors and formats

---

*Notes:*
- *Specs are from the Apple HIG as published in October 2026.*
- *Apple's hex values are reference approximations for native apps only; brand work generates its own palette (§A4).*
- *Don't copy Apple logos, product imagery, Activity rings, or SF font files into non-Apple projects.*
- *Follow Apple's trademark guidelines when you name Apple technologies.*
