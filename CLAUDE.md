# CLAUDE.md — murva Landing Page

> Entry point for AI agents working in this repo.
> Always read this file before making any changes.

---

## 0. Source of Truth — Read Before Touching Content

**ก่อนแก้ไข copy, branding, หรือ design ทุกครั้ง ให้อ่าน Notion ก่อนเสมอ** — ข้อมูลใน repo นี้อาจ outdated

| งานประเภท | อ่าน Notion หน้านี้ก่อน |
|-----------|------------------------|
| แก้สี, font, logo, visual identity ใดๆ | [CI & Visual Identity](https://app.notion.com/p/37435e4f83d2819d87c0c0ec6aa72cae) |
| เขียนหรือแก้ copy, tagline, tone of voice | [Brand Voice & Tone](https://app.notion.com/p/37435e4f83d281de8f74d9c057b142dd) |
| เพิ่ม/แก้ section ที่เกี่ยวกับ product, feature, positioning | [Product Strategy](https://app.notion.com/p/37435e4f83d281d78cdde9d4507c79f1) |
| แก้ landing page copy, campaign, SEO | [Marketing](https://app.notion.com/p/37435e4f83d28114a4cceedc0c0ccbd8) |
| ไม่แน่ใจว่า decision ไหน confirmed แล้ว | [Decisions Log](https://app.notion.com/p/37435e4f83d2814c8960c1e5bcd02d5d) |
| ภาพรวมทั้งหมด | [murva — Brand & Product Hub](https://app.notion.com/p/37435e4f83d281e29a69cfc78f1d4703) |

**Notion คือ source of truth สำหรับ content ทุกชิ้น** — repo นี้คือ implementation, Notion คือ decisions

---

## 1. What Is This Repo?

**murva Landing Page** (`collab-landing-page`) is the Next.js marketing site for **murva** — a real-time collaborative music platform.

- **Live URL** (this landing page): `https://murva.themiddnight.dev` (`SITE_URL`)
- **App URL** (the actual murva app, beta): `https://murva-beta.themiddnight.dev` (`APP_URL`)
- Both URLs are defined in `src/components/constants/navigation.ts` — edit there, not in individual components. They can also be overridden via `NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_APP_URL` env vars (e.g. preview deploys).
- The full (non-beta) app domain is not decided yet — likely `murva.themiddnight.dev` or a dedicated domain; update `APP_URL` when chosen.

**Brand name:** `murva` (all lowercase in copy, logo uses `font-brand` styling).
Do not write "COLLAB", "Jam Band", or "collab-landing-page" in any user-visible content.

---

## 2. Stack

| Layer | Tech |
|-------|------|
| Framework | **Next.js 15** — App Router, TypeScript |
| Styling | **Tailwind CSS v4** (`@theme` in `globals.css`) + custom config in `tailwind.config.ts` |
| Animation | `framer-motion` |
| Icons | `lucide-react` |
| Forms | `react-hook-form` + `zod` |
| OG images | `@vercel/og` |
| DB | **Prisma** + PostgreSQL (Railway) — used only for feedback form |
| Package manager | `npm` (this repo only — monorepo uses `bun`) |

---

## 3. Brand & CI

> **Full spec → Notion: [CI & Visual Identity](https://app.notion.com/p/37435e4f83d2819d87c0c0ec6aa72cae)**
> ส่วนด้านล่างนี้คือ summary สำหรับ quick reference เท่านั้น — Notion คือ source of truth

### Fonts

| Variable | Font | Purpose |
|----------|------|---------|
| `--font-figtree` | Figtree (Google Fonts, variable) | Primary — all headings and body |
| `--font-anuphan` | Anuphan (Google Fonts, Thai subset) | Thai language fallback |

- `font-sans`, `font-display`, `font-brand` all resolve to Figtree + Anuphan
- `font-brand` utility class = Figtree bold (`font-weight: 700`)
- Loaded in `src/app/layout.tsx` via `next/font/google`

### Color Palette (`brand` scale)

| Token | Hex | Usage |
|-------|-----|-------|
| `brand` / `brand-600` | `#3D3A6B` | Primary CTA, icons, active states |
| `brand-700` | `#2e2b52` | Hover state for primary |
| `brand-300` | `#9896c8` | Muted accents, dark mode text |
| `brand-100` | `#D8D0F0` | Light tint, dark mode headings |
| `brand-900` | `#12152A` | Dark surface |
| `brand-950` | `#0D0F1A` | Dark background |

**Rule:** Never use raw `#hex` colors in components. Use `brand-*` Tailwind tokens or CSS variables (`--color-brand`, etc.).
**Rule:** Do not use `purple-*` or `blue-*` as primary brand colors — these were the old palette. Use `brand-*`.

### CSS Variables (defined in `globals.css` via `@theme`)

```
--color-brand, --color-brand-light, --color-brand-dark
--color-bg, --color-surface, --color-border, --color-text-primary
--font-sans, --font-display, --font-brand
```

---

## 4. Project Structure

```
collab-landing-page/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout — fonts, metadata, ThemeProvider
│   │   ├── globals.css             # Tailwind v4 @theme + base styles
│   │   ├── page.tsx                # Home page (/ ) — assembles landing sections
│   │   ├── about/page.tsx          # About murva page
│   │   ├── feedback/
│   │   │   ├── layout.tsx          # Feedback page metadata
│   │   │   └── page.tsx            # Feedback form page
│   │   ├── instructions/page.tsx   # Instructions/docs page
│   │   └── api/
│   │       ├── feedback/route.ts   # POST /api/feedback — saves to DB
│   │       └── dashboard/feedback/route.ts  # GET — internal feedback dashboard
│   ├── components/
│   │   ├── constants/navigation.ts # APP_URL, SITE_URL, nav items — single source of truth
│   │   ├── Navigation.tsx          # Top nav with dropdown and mobile menu
│   │   ├── Footer.tsx              # Site footer
│   │   ├── HeroSection.tsx         # Hero with dual-image interaction
│   │   ├── AIFeaturesSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FeedbackForm.tsx
│   │   ├── InstrumentsSection.tsx
│   │   ├── MusicTheorySection.tsx
│   │   ├── PricingBetaSection.tsx
│   │   ├── RoadmapSection.tsx
│   │   ├── TechnicalRequirementsSection.tsx
│   │   ├── UseCasesSection.tsx
│   │   └── instructions/           # Instructions page sections (per-instrument/feature)
│   │       ├── InstructionsPage.tsx
│   │       └── sections/           # OverviewSection, KeyboardSection, etc.
│   └── lib/
│       ├── prisma.ts               # Prisma client singleton
│       └── validations/feedback.ts # Zod schema for feedback form
├── tailwind.config.ts              # Extends @theme: brand colors, fonts, animations
├── package.json
└── CLAUDE.md                       # This file
```

### Pages & Routing

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Landing page — all marketing sections |
| `/about` | `app/about/page.tsx` | Brand story, team, tech stack, roadmap |
| `/feedback` | `app/feedback/page.tsx` + `layout.tsx` | User feedback form |
| `/instructions` | `app/instructions/page.tsx` | App instruction docs (tabbed UI) |
| `POST /api/feedback` | `app/api/feedback/route.ts` | Saves feedback to DB |

---

## 5. Key Conventions

### Metadata

Every page/layout must define `export const metadata: Metadata` with:
- `title` — page-specific, format: `"Page Name | murva"` (root layout uses template)
- `description`
- `openGraph.title` + `openGraph.description`
- Twitter/OG social fields where relevant

Root layout (`app/layout.tsx`) sets the default template and fallback metadata.

> **Do NOT add `openGraph.images` / `twitter.images` to metadata.** OG images are
> generated dynamically by the `opengraph-image.tsx` file convention (see below), which
> auto-injects the correct `og:image` + `twitter:image` tags. Adding manual `images`
> would produce duplicate tags.

### Open Graph (social share) Images

OG / Twitter card images are **generated dynamically at build time** with `next/og`
(`ImageResponse`) via Next.js's file convention — there are no static `.webp`/`.png`
cover files to maintain.

**File layout**

| File | Role |
|------|------|
| `src/lib/og.tsx` | Shared renderer `renderOgImage({ title, subtitle, eyebrow })` + the visual layout (brand gradient, wordmark, pill, stacked app screenshots). **Edit here to change the design.** |
| `src/app/opengraph-image.tsx` | Home card — passes its own `title` / `subtitle` / `eyebrow`. |
| `src/app/about/opengraph-image.tsx` | About card. |
| `src/app/feedback/opengraph-image.tsx` | Feedback card. |

**To change the copy on a card** (the common future task): edit the `title` / `subtitle`
/ `eyebrow` strings in that page's `opengraph-image.tsx`. Each file also exports an `alt`
string — keep it in sync with the title for accessibility/SEO. The home copy currently
mirrors the hero (`HeroSection.tsx`): *"Jam Live. Produce Together."* — when the hero copy
changes, update the home card to match.

**To change the design / layout** (fonts, colours, screenshot arrangement): edit the JSX
in `src/lib/og.tsx`. All three cards share it, so one edit updates every card.

**Assets used by the renderer** (paths are read from disk via `process.cwd()`):
- Fonts: `src/assets/fonts/Figtree-{400,700}.ttf` — **static** instances. Satori (the engine
  behind `next/og`) **cannot read variable fonts** (throws `Cannot read properties of
  undefined (reading '256')`). If you swap fonts, instance a static weight first, e.g.
  `python3 -m fontTools.varLib.instancer Figtree[wght].ttf wght=700 -o Figtree-700.ttf`.
- Screenshots: `public/images/og/app-{arrange,perform}.jpg` — optimized app captures
  (resized ~1500px, JPEG). Source screenshots live in the app project, not this repo.
- Logo: `public/images/logo/logo_color.svg` (embedded as a base64 data URI).

**Verify a change**: run `npm run dev` and open `/opengraph-image`, `/about/opengraph-image`,
`/feedback/opengraph-image` — each must return `200 image/png`. The bound `og:image` URL
resolves against `metadataBase` (`SITE_URL`) in production.

### Structured Data

Pages that need SEO structured data use `<Script>` with `type="application/ld+json"` — see `about/page.tsx` for reference pattern.

### Dark Mode

Dark mode uses the `class` strategy (`darkMode: 'class'` in Tailwind config).
Always provide both light and dark variants for interactive or colored elements:
- `text-gray-700 dark:text-gray-300`
- `bg-white dark:bg-gray-800`
- `text-brand dark:text-brand-300`

`ThemeProvider` and `ThemeToggle` handle the toggle logic — do not reimplement.

### Navigation Constants

All nav items, URLs, and section anchors are defined in `src/components/constants/navigation.ts`.
If you add a new page section or change an anchor ID, update the constants there — not inline in JSX.

### Instructions Page

`/instructions` is a tabbed knowledge base. To add a new section:
1. Create `src/components/instructions/sections/YourSection.tsx`
2. Add it to the `categories` array in `InstructionsPage.tsx`
3. Import the component at the top of `InstructionsPage.tsx`

---

## 6. Linear Issue Tracking

Issues for **this repo** belong to the **murva - landing page** project in Linear.
Both projects share the same two teams (`BIZ` + `DEV`):

| Team | Key | Scope |
|------|-----|-------|
| **Business** | `BIZ` | Copy, design, marketing, SEO, brand decisions |
| **Developer** | `DEV` | Technical tasks, bugs, component changes |

| Linear Project | Scope | URL |
|----------------|-------|-----|
| **murva - landing page** | This repo — marketing site, copy, SEO, beta funnel | https://linear.app/pathompong-thitithan/project/murva-landing-page-65ef918bd122 |
| **murva - app** | The murva app (monorepo) — realtime platform, Perform/Arrange rooms, backend | https://linear.app/pathompong-thitithan/project/murva-app-cc69e94f6179 |

- BIZ issues: content changes, copy edits, design updates, SEO — ใช้ label `marketing` หรือ `design`
- DEV issues: component bugs, routing, API, build — ใช้ label ตาม discipline
- ทุก issue ที่สรุป decision แล้ว → เขียนลง Notion section ที่เกี่ยวข้อง + Decisions Log ก่อน mark Done

> **Note:** โปรเจกต์ทั้งสองเพิ่งถูกแยกออกจากกัน — งานเก่าบางอย่างที่ relate กับ landing page (เช่น DEV-86 SEO/metadata) อาจยังค้างอยู่ใน **murva - app** project ก่อนแยก ถ้าหา issue ของงาน landing ไม่เจอในโปรเจกต์ landing page ให้ลองเช็คใน murva - app ด้วย

---

## 7. Running Locally

```bash
npm install
npm run dev       # http://localhost:3000 (Turbopack)
npm run build     # Requires DATABASE_URL in .env
npm run lint
```

`.env` must have `DATABASE_URL` pointing to the Railway PostgreSQL instance (same as monorepo dev DB or a separate one). See `.env.example` if present.

---

## 8. Related Repos & Docs

### Notion (content & decisions — source of truth)

| Notion Page | What's Inside |
|-------------|--------------|
| [Brand & Product Hub](https://app.notion.com/p/37435e4f83d281e29a69cfc78f1d4703) | Top-level index of all brand/product docs |
| [CI & Visual Identity](https://app.notion.com/p/37435e4f83d2819d87c0c0ec6aa72cae) | Colors, fonts, logo, themes, design tokens |
| [Brand Voice & Tone](https://app.notion.com/p/37435e4f83d281de8f74d9c057b142dd) | Personality, writing style, terminology, dos/don'ts |
| [Product Strategy](https://app.notion.com/p/37435e4f83d281d78cdde9d4507c79f1) | ICP, positioning, features, evolution plan |
| [Marketing](https://app.notion.com/p/37435e4f83d28114a4cceedc0c0ccbd8) | Landing page strategy, beta funnel, campaigns, SEO |
| [Decisions Log](https://app.notion.com/p/37435e4f83d2814c8960c1e5bcd02d5d) | All confirmed decisions + rationale (decided items only) |

### Code

| Resource | Location |
|----------|---------|
| **murva app (monorepo)** | `~/Sites/Personal/collab-monorepo/` |
| **Monorepo CLAUDE.md** | `collab-monorepo/CLAUDE.md` — full product/tech context |
| **murva - app (Linear project)** | https://linear.app/pathompong-thitithan/project/murva-app-cc69e94f6179 |

> When a task spans both the landing page and the app (e.g. shared domains, SEO, brand, cross-linking), check the monorepo code + the **murva - app** Linear project for related/in-flight work before starting.

> **Rule:** Content decisions (copy, messaging, brand) → Notion always wins.
> Technical decisions (routing, components, APIs) → this repo's code and CLAUDE.md.

---

*Last updated: June 18, 2026*
