<!-- Referência de espírito do redesign. Fonte: styles.refero.design (Everlane) -->

Everlane — Style Reference
> Minimalist atelier on raw linen. White walls, bare architecture, a single sage-green ribbon of light.

**Theme:** light

Everlane operates as a minimalist editorial fashion catalogue: near-total achromatic palette, one soft sage accent reserved for promotional urgency, and Maison Neue set almost entirely in uppercase with wide tracking. Photography carries nearly all visual weight — full-bleed editorial shots and tightly cropped product images sit on white canvases with zero decoration, zero shadows, and zero chrome. Type is the only ornament: tracked uppercase headings float over imagery, body copy stays minimal and quiet. Components are stripped to their essentials — thin text links, sharp-edged product tiles, no buttons, no cards, no panels. The result reads less like a storefront and more like a printed lookbook translated to screen.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Onyx | `#000000` | `--color-onyx` | Primary text, icons, hairline borders, nav typography, footer text — the dominant ink across every surface |
| Paper White | `#ffffff` | `--color-paper-white` | Page canvas, product card backgrounds, hero text overlays, input fills |
| Soot | `#121212` | `--color-soot` | Dark feature sections, inverted text on light surfaces, high-contrast blocks |
| Ink | `#161912` | `--color-ink` | Near-black body text variant, deep borders — virtually indistinguishable from Onyx but carries a barely-warm cast |
| Graphite | `#4c4c4c` | `--color-graphite` | Secondary body text, muted descriptions, helper copy beneath headlines |
| Slate | `#737373` | `--color-slate` | Tertiary text, captions, price labels, disabled links |
| Ash | `#9b9b9b` | `--color-ash` | Subtle borders, dividers between product tiles, low-emphasis separators |
| Linen | `#c8c0b8` | `--color-linen` | Warm taupe surface for editorial bands, soft section backgrounds — the only chromatic neutral |
| Pistachio Wash | `#d9e9bb` | `--color-pistachio-wash` | Promotional bar fill, seasonal event accent — the single chromatic note in the entire system, used sparingly for time-bound urgency |

## Tokens — Typography

### Maison Neue Book — Primary workhorse for nav, body, labels, prices, and most UI — used at 400 for body, 700 for emphasized inline text and section anchors · `--font-maison-neue-book`
- **Substitute:** Inter, Helvetica Neue, Neue Haas Grotesk
- **Weights:** 400, 700
- **Sizes:** 10px, 12px, 14px, 15px, 16px, 20px, 24px, 32px
- **Line height:** 1.00–2.25
- **Letter spacing:** Ranges from 0.020em at 12px to 0.067em at 32px — tracking widens as size increases, reflecting the uppercase headline convention
- **Role:** Primary workhorse for nav, body, labels, prices, and most UI — used at 400 for body, 700 for emphasized inline text and section anchors

### Maison Neue Demi — Rare mid-weight emphasis for sub-headers and category labels — the half-step between Book and Book Bold · `--font-maison-neue-demi`
- **Substitute:** Inter Semi Bold, Helvetica Neue Medium
- **Weights:** 600
- **Sizes:** 12px
- **Line height:** 1.33
- **Letter spacing:** 0.0200em
- **Role:** Rare mid-weight emphasis for sub-headers and category labels — the half-step between Book and Book Bold

### Maison Neue — Secondary body variant for longer-form descriptive paragraphs in editorial sections · `--font-maison-neue`
- **Substitute:** Inter, Helvetica Neue
- **Weights:** 400
- **Sizes:** 12px, 16px, 24px
- **Line height:** 1.33–1.50
- **Letter spacing:** 0.0200em, 0.0400em
- **Role:** Secondary body variant for longer-form descriptive paragraphs in editorial sections

### Arial — Arial — detected in extracted data but not described by AI · `--font-arial`
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.2
- **Role:** Arial — detected in extracted data but not described by AI

### GTStandard-M — GTStandard-M — detected in extracted data but not described by AI · `--font-gtstandard-m`
- **Weights:** 400
- **Sizes:** 16px
- **Line height:** 1.5
- **Letter spacing:** 0.038
- **Role:** GTStandard-M — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 10px | 1.2 | 0.4px | `--text-caption` |
| heading | 20px | 1.25 | 0.8px | `--text-heading` |
| heading-lg | 24px | 1.2 | 1.2px | `--text-heading-lg` |
| display | 32px | 1.2 | 1.6px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 36 | 36px | `--spacing-36` |
| 48 | 48px | `--spacing-48` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 0px |
| cards | 0px |
| images | 0px |
| inputs | 0px |
| buttons | 0px |

### Layout

- **Section gap:** 64-80px
- **Element gap:** 8px

## Components

### Promo Bar
**Role:** Seasonal sale announcement strip

Full-width band at #d9e9bb (Pistachio Wash), 40-48px tall, centered uppercase text in Onyx at 12px weight 400 with 0.033em tracking. Items separated by 24-32px gaps. No borders, no radius. Single chromatic element in the system — replace or remove for non-promotional periods.

### Primary Navigation
**Role:** Site-wide top navigation

White background, three-zone layout: left-aligned nav links (WOMEN, MEN, SUSTAINABILITY, EVERWORLD) at 12px uppercase with 0.020em tracking in Onyx, centered wordmark in Onyx at ~20px with wide tracking, right-aligned utility links (SEARCH, ACCOUNT, BAG) in same style. ~56px tall. Active nav item gets a thin Onyx underline.

### Hero Overlay
**Role:** Full-bleed editorial homepage hero

Edge-to-edge photograph, minimum 600px tall. Headline in white uppercase 24-32px, weight 400, tracking 0.050-0.067em, positioned lower-left over the image. Subhead in white at 14-15px, weight 400, one or two lines. CTA is a text link in white with thin underline, 12px uppercase, 0.040em tracking — no button chrome. No dark gradient overlay; text sits directly on the photograph relying on contrast zones.

### Editorial Split Section
**Role:** Brand storytelling block

50/50 split: large photograph left, text block right on white. Headline in Onyx uppercase at 20-24px with 0.043-0.060em tracking. Body paragraphs in Graphite at 14-15px, weight 400, generous line-height (1.6-1.8). Text block vertically centered, max-width ~480px. Followed by a text-link CTA with thin Onyx underline.

### Product Card
**Role:** Individual product tile in grid

Sharp-edged rectangle, zero radius. Full-width product photograph with no border or padding. Below image: product name at 12px uppercase Onyx with 0.033em tracking, then price at 12px Onyx directly beneath. No card background, no shadow, no hover state beyond subtle image opacity shift. ~16px vertical gap between image and text.

### Product Grid
**Role:** 4-column product listing

4 equal-width columns on desktop, 2 on tablet, 1 on mobile. Column gap 0px (items separated only by hairline borders). Section title above grid in 12px uppercase Onyx with 0.033em tracking, left-aligned with no decoration. Optional 1px Ash divider beneath the section label.

### Text Link CTA
**Role:** Primary call-to-action element

No button — the system uses underlined text links. 12px uppercase Onyx with 0.040em tracking, 1px solid Onyx underline offset 4px below baseline. Hover darkens to #4c4c4c (Graphite). No fill, no border, no padding, no radius. This is the only interactive component pattern.

### Section Heading
**Role:** Category or collection label

Uppercase Onyx at 12-14px, weight 400, tracking 0.033-0.040em. Left-aligned. No decorative lines, no spacing flourishes. Sits directly above content with 16-24px margin-bottom.

### Price Label
**Role:** Product price dis