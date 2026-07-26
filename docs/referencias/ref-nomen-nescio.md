<!-- Referência estrutural do redesign. Fonte: styles.refero.design (Nomen Nescio) -->

Nomen Nescio — Style Reference
> ink on warm paper

**Theme:** light

Nomen Nescio is an editorial paper-and-ink system for a conceptual fashion label: a warm off-white canvas (#fdfdfa) holds oversized fashion photography while every interface element recedes into a single near-black ink (#2b2b2e). The entire typography stack uses one custom sans-serif at one weight (400) — no bold, no light, no italic — so hierarchy is built purely through size and negative letter-spacing rather than contrast. Components are flat rectangles, no shadows, no rounded corners, no color: identity comes from the restraint, the warm neutrals, and the photography bleeding edge-to-edge. The system feels like a printed zine reproduced as a website — whitespace is the layout grid, and every UI surface could be cut from the same sheet of paper.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper | `#fdfdfa` | `--color-paper` | Page canvas and card surfaces — warm off-white reads as aged paper, not digital white |
| Bone | `#f5f3ee` | `--color-bone` | Elevated surface and subtle washes — used for card backgrounds and hover states, one step warmer than canvas |
| Ink | `#2b2b2e` | `--color-ink` | Primary text, navigation, borders, and outlined actions — near-black with a warm undertone, never pure #000 |
| Ash | `#bebcb4` | `--color-ash` | Muted text and secondary borders — warm gray for metadata, subtitles, and hairline dividers |
| Pebble | `#deddd8` | `--color-pebble` | Light dividers and structural borders — barely visible rules between sections |
| Mist | `#d9d7c9` | `--color-mist` | Form input borders — slightly warmer than pebble to read as a distinct UI surface |

## Tokens — Typography

### Nomen Nescio (custom) — Single-weight display and body sans-serif — a monoline custom face used for every text element on the site. No bold, no light, no italic variants exist; hierarchy is achieved through size and negative letter-spacing only. Substitutes with a similar monoline character: 'Neue Haas Grotesk Display Pro' or 'Söhne' at weight 400. · `--font-nomen-nescio-custom`
- **Substitute:** Söhne or Inter at 400
- **Weights:** 400
- **Sizes:** 14, 15, 16, 18, 19, 28, 36
- **Line height:** 1.05–1.43
- **Letter spacing:** -0.036em at 36px, -0.028em at 28px, -0.021em at 19px, -0.017em at 18px, -0.016em at 16px, -0.008em at 14–15px, +0.007em for small uppercase labels
- **Role:** Single-weight display and body sans-serif — a monoline custom face used for every text element on the site. No bold, no light, no italic variants exist; hierarchy is achieved through size and negative letter-spacing only. Substitutes with a similar monoline character: 'Neue Haas Grotesk Display Pro' or 'Söhne' at weight 400.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| caption | 14px | 1.43 | -0.112px | `--text-caption` |
| body | 16px | 1.43 | -0.256px | `--text-body` |
| subheading | 18px | 1.25 | -0.306px | `--text-subheading` |
| heading | 28px | 1.11 | -0.784px | `--text-heading` |
| heading-lg | 36px | 1.05 | -1.296px | `--text-heading-lg` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 6 | 6px | `--spacing-6` |
| 8 | 8px | `--spacing-8` |
| 9 | 9px | `--spacing-9` |
| 14 | 14px | `--spacing-14` |
| 15 | 15px | `--spacing-15` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 47 | 47px | `--spacing-47` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 0px |
| badges | 0px |
| images | 0px |
| buttons | 0px |

### Layout

- **Page max-width:** 1440px
- **Section gap:** 39-47px
- **Card padding:** 20px
- **Element gap:** 20px

## Components

### Full-Bleed Hero Image
**Role:** Opening viewport visual

Edge-to-edge photograph with no padding, no border, no radius. Navigation text overlays directly on the image in #fdfdfa (white) for legibility. Aspect ratio fills the full viewport width; the image bleeds to the page edges with no container.

### Text Navigation Bar
**Role:** Primary site navigation

Text-only nav links at 15px in Ink (#2b2b2e) for light backgrounds or Paper (#fdfdfa) when overlaid on dark hero. No backgrounds, no borders, no padding blocks — just spaced words separated by ~20px gaps. Left-aligned logo, right-aligned utility links (EUR, Search, Bag).

### Announcement Bar
**Role:** Site-wide top banner

Single-line centered text at 14px in Paper (#fdfdfa) on Ink (#2b2b2e) background. Full-bleed, 1px or minimal vertical padding, contains a dismiss 'Close' action right-aligned.

### Editorial Feature Card
**Role:** Large content card for collections, articles, and installations

Two-column card: full-width photograph on top, title and subtitle stacked below on Paper canvas. Title at 18–19px Ink, subtitle at 14–15px Ash. No border, no padding container around the image, 20px vertical spacing between image and text block.

### Product Grid Card
**Role:** Individual product listing

Square or portrait product photo (no radius, no border) with optional discount tag overlay in top-left corner. No text below the image in the visible grid; product details appear on interaction. Image fills its grid cell edge-to-edge.

### Discount Badge
**Role:** Sale indicator on product images

Plain text '-50%' at 14px in Ink (#2b2b2e), no background, no border, no pill shape. Positioned absolutely in the top-left of a product image. Relies on whitespace and position for emphasis.

### Ghost Link
**Role:** Default interactive text element

Ink-colored text link with 1px Ink underline or hairline border-bottom. No background fill, no padding, no hover background change. Inherits body font size and weight (always 400).

### Text Input
**Role:** Form fields for search, email, checkout

Borderless or 1px Mist (#d9d7c9) bottom border, Paper (#fdfdfa) background, Ink text. No focus ring color shift — focus state uses a thicker Ink bottom border instead. Placeholder text in Ash (#bebcb4).

### Outlined Action Button
**Role:** Primary interactive button

1px Ink (#2b2b2e) border, Paper (#fdfdfa) background, Ink text at 14–16px. 6–8px vertical padding, 20px horizontal padding. No radius. On dark/image backgrounds, inverts to Paper border with Paper text. This is the only button variant — there is no filled button.

### Section Heading
**Role:** Editorial section titles

Ink text at 28–36px, weight 400, negative letter-spacing (-0.028em to -0.036em). Left-aligned with no decorative element. Generous whitespace above and below (39–47px section gap).

### Product Grid
**Role:** Collection display layout

4-column grid of product cards on desktop, 2-column on tablet, 1-column on mobile. No gutters between cards — images touch edge-to-edge, creating a seamless editorial wall. Section sits directly on Paper canvas with no card container.

### Side Label (Explore)
**Role:** Vertical or edge-anchored category label

Small Ink text at 14–15px, vertically centered or left-edge anchored. Functions as a section divider label (e.g., 'Explore' on the left edge). No background, no border.

## Do's and Don'ts

### Do
- Use the custom 'Nomen Nescio' font at weight 400 exclusively — never introduce bold, light, or italic weights for hierarchy; build contrast through size and negative letter-spacing alone
- Set all borders to 0px radius — every corner is sharp, every image bleeds edge-to-edge without rounding
- Reach for #fdfdfa as the page canvas and #f5f3ee only when you need subtle surface elevation; never use white (#ffffff) or pure black (#000000)
- Apply letter-spacing of -0.036em at display sizes (36px) down to -0.008em at body sizes; reserve the positive +0.007em tracking exclusively for small uppercase micro-labels
- Keep all buttons ghost/outlined with a 1px Ink border on Paper background — there is no filled button variant in this system
- Let photography fill the entire viewport or grid cell; never pad, frame, or containerize images with backgrounds or borders
- Use 20px for element gaps, 39–47px for section breaks, and 4px as the base spacing unit for all micro-adjustments

### Don't
- Do not introduce any color outside the six neutrals (Paper, Bone, Ink, Ash, Pebble, Mist) — the system is 2% colorful by design and any accent will break the editorial paper language
- Do not use box-shadows, drop-shadows, or glow effects — elevation comes from surface color shifts and borders, never from shadow
- Do not use border-radius on any element — 0px everywhere, no exceptions for badges, buttons, or images
- Do not set backgrounds to pure white (#ffffff) or text to pure black (#000000) — always use the warm off-white (#fdfdfa) and warm near-black (#2b2b2e) variants
- Do not add a bold or semibold weight for emphasis — if something needs more visual weight, increase its size and tighten its letter-spacing further
- Do not contai