# CreateBud Landing Page — Development Plan

## Live Reference
This file tracks progress for the CreateBud website build.
Mark steps [x] as they are completed. Come back here to pick up where we left off.

---

## File Structure (Modular Approach)

```
createbud-website/
├── index.html          # All sections, clearly separated by comments
├── styles/
│   ├── tokens.css      # Design tokens: colors, fonts, spacing, breakpoints
│   ├── base.css        # Reset, body, typography defaults
│   ├── navbar.css
│   ├── hero.css
│   ├── stakes.css
│   ├── how-it-works.css
│   ├── tracks.css
│   ├── why-createbud.css
│   ├── team.css
│   ├── cta.css
│   └── footer.css
├── scripts/
│   └── main.js         # Navbar scroll effect, fade-in animations, form handling
├── assets/
│   ├── images/         # Team photos, any illustrations
│   └── favicon.ico
├── data-source.txt     # Source of truth for copy
└── PLAN.md             # This file
```

Each CSS file is standalone for its section. To change a section's styles, open only that file.
To change layout or content, edit only `index.html` — each section is wrapped in a clear comment block.

---

## Design System (Locked Before Any HTML)

### Color Palette
| Token             | Value       | Usage                        |
|-------------------|-------------|------------------------------|
| `--color-bg`      | `#0A0A0A`   | Page background              |
| `--color-surface` | `#141414`   | Cards, elevated surfaces     |
| `--color-border`  | `#2A2A2A`   | Borders, dividers            |
| `--color-accent`  | `#6EE7B7`   | CTAs, highlights (teal)      |
| `--color-text`    | `#F5F5F5`   | Primary text                 |
| `--color-muted`   | `#888888`   | Secondary text, captions     |

### Typography
- Font: `Inter` (Google Fonts)
- Scale: `--text-xs` through `--text-7xl`
- Hero headline: `clamp(3rem, 7vw, 6rem)` — fluid sizing

### Spacing
- Base unit: `0.5rem` (8px)
- Section padding: `7rem 0` vertical, `1.5rem` horizontal
- Max content width: `1100px` centered

---

## Page Sections — ASCII Map

```
+----------------------------------------------------------+
|  NAVBAR: Logo | How It Works, Tracks, Team | [Apply ->]  |
+----------------------------------------------------------+
|  HERO: Bold thesis headline + subtext + dual CTA         |
|        [Join Waitlist] + [Book a Call ->]                |
+----------------------------------------------------------+
|  THE STAKES: Pull quote + 4 pain point cards             |
+----------------------------------------------------------+
|  HOW IT WORKS: 3-step horizontal flow                    |
|  [1. Discover] --> [2. Build] --> [3. Validate]          |
+----------------------------------------------------------+
|  TRACKS: 3 sprint cards (Venture | Research | Creative)  |
+----------------------------------------------------------+
|  WHY CREATEBUD: 2x2 differentiator grid                  |
|  [Safe Sandbox] [10x Execution] [Neuroscience] [Vetted]  |
+----------------------------------------------------------+
|  TEAM: Asma card + Azad card, side by side               |
+----------------------------------------------------------+
|  FINAL CTA: Big headline + email input + Calendly link   |
+----------------------------------------------------------+
|  FOOTER: Logo | Links | (c) 2025                         |
+----------------------------------------------------------+
```

---

## Build Steps

### Phase 1 — Foundation
- [x] **Step 1: Project scaffold**
  - Create `index.html` with all section skeletons (empty `<section>` tags with IDs and comments)
  - Create `styles/` folder and all CSS files (empty for now)
  - Create `scripts/main.js` (empty for now)
  - Link all CSS files and the JS file in `index.html` `<head>`
  - Add Google Fonts (Inter) import

- [x] **Step 2: Design tokens + base styles**
  - Populate `tokens.css` with all CSS custom properties (colors, fonts, spacing, breakpoints)
  - Populate `base.css`: CSS reset, `box-sizing`, `body` background/color/font, smooth scroll, selection color

---

### Phase 2 — Section by Section (HTML + CSS together per step)

- [x] **Step 3: Navbar**
  - Logo (text-based for now)
  - Nav links: `How It Works`, `Tracks`, `Team`
  - CTA button: `Apply Now`
  - Behavior: transparent by default, frosted-glass (`backdrop-filter: blur`) on scroll
  - File: `navbar.css`

- [x] **Step 4: Hero section**
  - Full viewport height (`100dvh`)
  - Large fluid headline: *"The future belongs to students who know how to lead AI — not just use it."*
  - Sub-headline: positioning statement (1-2 lines)
  - Dual CTA: primary `[Join Waitlist]` button + secondary `[Book a 15-min call →]` text link
  - Subtle background: dark with very faint grid or grain texture
  - File: `hero.css`

- [x] **Step 5: The Stakes section**
  - Dark section with a large pull-quote
  - 4 pain point cards in a row (or 2x2 on mobile): Blurring Paths, Skill Dilemma, Validation Void, Obsolescence Fear
  - Cards: border-only, no fill — text + short description
  - File: `stakes.css`

- [x] **Step 6: How It Works section**
  - Section title + subtle label
  - 3 columns connected by an arrow or line
  - Each step: number, title, 2-line description, outcome tag
  - Steps: Discover (Identity → Blueprint), Build (Blueprint → Output), Validate (Output → Signal)
  - File: `how-it-works.css`

- [x] **Step 7: Tracks section**
  - Section title
  - 3 cards: Venture Sprint, Research Sprint, Creative Sprint
  - Card: track name, one-liner, bullet list of 3 outcomes, `[Learn More]` or `[Apply]` link
  - Hover: border lights up in accent color
  - File: `tracks.css`

- [x] **Step 8: Why CreateBud section**
  - Section title: "Human-First. Not Tool-First."
  - 2x2 grid of differentiator tiles
  - Tiles: Safe Sandbox, 10x Execution, Neuroscience-Backed, Expert Validation
  - Each tile: icon (SVG or emoji), title, 1-line description
  - File: `why-createbud.css`

- [x] **Step 9: Team section**
  - Section title
  - 2 cards side by side: Asma + Azad
  - Each card: photo placeholder, name, role title (e.g., "The Privacy Mom & Trust Architect"), 2-3 line bio
  - File: `team.css`

- [x] **Step 10: Final CTA section**
  - Full-width dark section, high contrast
  - Big headline: *"Your student's future is being written. Help them hold the pen."*
  - Email input + `[Join Waitlist]` button wired to Formspree
  - Secondary line: *"Already convinced?"* + `[Book a 15-min discovery call →]` (Calendly link)
  - File: `cta.css`

- [x] **Step 11: Footer**
  - Logo, copyright, Privacy Policy link, Contact email
  - Minimal — one row on desktop, stacked on mobile
  - File: `footer.css`

---

### Phase 3 — Interactivity + Polish

- [x] **Step 12: JavaScript — navbar scroll effect**
  - Add `scrolled` class to navbar after 60px scroll → triggers frosted glass style

- [x] **Step 13: JavaScript — scroll animations**
  - Use `IntersectionObserver` to add `visible` class to sections as they enter the viewport
  - CSS handles the fade-up transition (no library needed)

- [x] **Step 14: Responsive design pass**
  - Go section by section, test at: 375px (mobile), 768px (tablet), 1200px+ (desktop)
  - Adjust grid columns, font sizes, padding using existing breakpoint tokens

- [x] **Step 15: Accessibility pass**
  - Check color contrast ratios (AA minimum)
  - Add `aria-label` to icon-only buttons
  - Ensure keyboard navigation works for all interactive elements

---

### Phase 4 — Integrations
> ⚠️ Requires external accounts — complete when ready.

- [ ] **Step 16: Wire up Formspree (waitlist form)**
  - Create account at formspree.io
  - Create a new form, copy the form ID
  - Replace `YOUR_FORM_ID` in `index.html` CTA form action URL
  - Test a submission — confirm email arrives

- [ ] **Step 17: Wire up Calendly (discovery call)**
  - Create account at calendly.com
  - Set up a 15-min event type
  - Replace `YOUR_LINK` in `index.html` Calendly href (appears in both hero + CTA)
  - Optional: embed the Calendly widget inline instead of a redirect

---

### Phase 5 — Launch

- [x] **Step 18: Assets + copy finalization**
  - Final copy review — ensure all text matches brand voice
  - Real photos are already in place (asma.jpg, azad.jpg)
  - Real favicon already wired (icon.png)

- [x] **Step 19: Meta + SEO**
  - Page title, meta description, Open Graph tags (`og:title`, `og:description`, `og:image`)
  - Controls how the link previews on Twitter, iMessage, LinkedIn

- [x] **Step 20: Deploy**
  - GitHub Pages
  - Point custom domain if available

---

## Notes & Decisions Log
_Use this section to track decisions made during the build._

- Contact strategy: dual CTA — Formspree waitlist (passive) + Calendly booking link (high-intent)
- Design direction: dark background, teal accent, Inter font, minimalist/no-shadow card style
- No JavaScript frameworks — plain HTML/CSS/JS for simplicity and speed
- CSS architecture: one file per section for easy isolated editing
- Never add Claude Co-Authorship messages in commit messages

## Build Status

| Phase | Steps | Status |
|-------|-------|--------|
| Phase 1 — Foundation | Steps 1–2 | ✅ Complete |
| Phase 2 — Sections | Steps 3–11 | ✅ Complete |
| Phase 3 — Interactivity | Steps 12–15 | ✅ Complete |
| Phase 4 — Integrations | Steps 16–17 | ⏳ Needs accounts (Formspree, Calendly) |
| Phase 5 — Launch | Steps 18–20 | 🔄 In Progress (18 ✅, 19 ✅, 20 ⏳) |

**Remaining placeholders to replace before launch:**
- `YOUR_FORM_ID` in `index.html` line ~394 → Formspree form ID
- `YOUR_LINK` in `index.html` line ~415 → Calendly event URL (also in hero `btn--ghost` href)
