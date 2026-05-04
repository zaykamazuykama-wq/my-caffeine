# Mongolian Car Flashcard App — Design Brief

**Purpose**: Child-friendly educational car recognition app with country-coded visual system.
**Tone**: Playful maximalism, vibrant & structured, engaging & clear.
**Differentiation**: Country-color-coded cards, oversized typography, interactive flashcard grid, image upload per car.

## Palette (OKLCH)

| Token          | Light L    | Light C | Light H | Dark L    | Dark C | Dark H | Usage           |
|:---------------|:-----------|:--------|:--------|:----------|:-------|:-------|:-----------|
| Background     | 0.97 0.02  | 60      | 0.14    | 0.01      | 60     | Page bg |
| Primary        | 0.65 0.18  | 240     | 0.72    | 0.20      | 240    | Cyan button/filter |
| Accent         | 0.68 0.18  | 80      | 0.75    | 0.18      | 80     | Gold highlight |
| Destructive    | 0.55 0.20  | 15      | 0.62    | 0.22      | 15     | Red alert |
| Japan          | 0.60 0.22  | 40      | —       | —         | —      | Coral card border |
| Korea          | 0.65 0.18  | 240     | —       | —         | —      | Cyan card border |
| Russia         | 0.55 0.20  | 15      | —       | —         | —      | Crimson card border |
| Germany        | 0.78 0.20  | 100     | —       | —         | —      | Yellow card border |
| UK             | 0.55 0.18  | 290     | —       | —         | —      | Purple card border |
| USA            | 0.55 0.16  | 140     | —       | —         | —      | Green card border |
| China          | 0.68 0.18  | 80      | —       | —         | —      | Gold card border |
| Luxury         | 0.60 0.22  | 280     | —       | —         | —      | Violet card border |

## Typography

- **Display**: Bricolage Grotesque 700 (heading, car names, nicknames) — bold, friendly, distinctive
- **Body**: DM Sans 400/500 (labels, features, UI text) — warm, readable, approachable
- **Scale**: 32px (title), 24px (car name), 14px (nickname), 12px (labels)

## Elevation & Depth

- **Base**: White background (`bg-background`), neutral borders
- **Card**: Raised shadow `shadow-card` (4px 12px 0 rgba(0,0,0,0.08)), rounded 24px
- **Hover**: `shadow-elevated` (8px 24px 0 rgba(0,0,0,0.12)), slight scale transform

## Structural Zones

| Zone                | Treatment                          | Details                  |
|:-------------------|:----------------------------------|:------------------------|
| Header              | Sticky, Mongolian title + 8 country tabs | 16px padding, tab badges with country colors |
| Grid Container      | 3-4 column responsive layout       | Gap 20px, padding 24px |
| Flashcard           | Rounded 24px, country-color left border, shadow | Image placeholder, car name, nickname |
| Detail Modal        | Overlay with rounded 24px panel   | Car image, logo, features list, upload zone |
| Upload Zone         | Dashed border, drag-and-drop ready | Rounded 12px, muted bg |

## Spacing & Rhythm

- **Padding**: 24px (card interior), 16px (section), 12px (element)
- **Gap**: 20px (grid cards), 16px (flex rows)
- **Border Radius**: 24px (cards), 12px (buttons/inputs), 6px (small elements)
- **Shadow Density**: Only 2 levels (card / elevated), never 3+

## Component Patterns

- **Tabs**: Flat design, full-width, country-color underline on active
- **Cards**: Image + country badge + car name + nickname + action buttons
- **Buttons**: Rounded 12px, semantic colors (primary cyan, accent gold, destructive red)
- **Inputs**: Rounded 12px, border `border-input`, focus ring `ring-primary`

## Motion

- **Fade-in**: 0.3s ease-out on card load
- **Gentle Bounce**: 0.6s infinite on hover (optional)
- **Smooth Transition**: 0.3s cubic-bezier(0.4, 0, 0.2, 1) on all interactive elements

## Constraints

- No dark mode (light-only for children's clarity)
- Max 8 countries per set
- Card grid scales 3→2→1 column on responsive breakpoints
- All text in Mongolian
- No blur/glassmorphism — clarity first

## Signature Detail

Each car card has a vibrant country-color left border (4px) that immediately identifies origin region and creates visual rhythm across the grid. Country tabs mirror these colors, reinforcing the taxonomy.
