# Poster Portfolio — Design Spec

Date: 2026-07-25
Repo: `abdallah-hatem/Portfolio2` (branch `master`, replaced in place)
Design reference: [mufeed.tech](https://www.mufeed.tech/) — source repo `saifeldeen911/studio`

## Goal

Replace the Simplefolio-based portfolio with a personal developer portfolio built
in the reference's "distressed software poster" visual system: black ink, off-white
paper, concentrated orange, torn edges, collage motifs, and live technical energy.

Content comes from the existing site (bio, 10 projects, resume, screenshots,
contact links). Design language comes from the reference.

## Decisions

| Decision | Choice |
| --- | --- |
| Location | Replace in place on the repo's default branch (`master`) |
| Framing | Personal portfolio (one developer), not a studio |
| Detail pages | Yes — `/work/[slug]`, one per project |
| Assets | Reuse generic poster motifs/textures from `studio`; skip MUFEED-branded art |
| Deploy | Vercel, served from root (no `basePath`); drop the GitHub Pages workflow |
| Contact email | `abdallahhatem101@gmail.com` |
| Experience line | "3+ years" |
| Projects | The 10 currently live; the 5 commented-out ones stay out |

## Stack

- Next.js 16 App Router, React 19, TypeScript
- Tailwind CSS 4 via `@tailwindcss/postcss` (utility layer; the poster system is
  hand-written CSS in `app/globals.css`, matching the reference's approach)
- `next/font/google` for Anton, Oswald, Inter, Special Elite
- `next/image` for all raster art (Vercel optimizes it; no static export)

Removed: Parcel, SCSS tree, Bootstrap, jQuery, popper, vanilla-tilt, ScrollReveal,
Font Awesome CDN, the Simplefolio attribution files, and `.github/workflows/gh-pages.yml`.

## Design system

Tokens (from the reference's design-system image):

```
--ink        #0D0D0D    --paper        #F8F2E4
--ink-soft   #1A1A1A    --paper-shadow #C9C3B8
--orange     #E64A1E    --muted-ink    #48443D
--orange-deep #BD3513   --white-ink    #FFFAF0
```

Type scale:

- Display — Anton, uppercase, `letter-spacing: -0.02em`, `line-height: 0.9`
- Headings / buttons / nav — Oswald 700, uppercase
- Body — Inter
- Stamped notes, captions, kickers — Special Elite

Surface rules:

- Off-white paper panels on rough black ink backgrounds; never flat fills — every
  large section layers a paper or ink texture over the base color.
- Section boundaries are torn, not straight: `clip-path` polygon rips that overlap
  the next section so the page never reads as stacked rectangles.
- Orange is reserved for CTAs, emphasis words, scribbles, underlines, and
  directional cues.

### Live text instead of baked headings

The reference ships its big headings as pre-rendered distressed PNGs
(`hero-title-reference-v2.png`, `about-title.png`, `about-headline.png`,
`cta-heading-next-white-v2.webp`). Those contain MUFEED's words, so this build
renders equivalent headings as live Anton text with a CSS ink-grain treatment.
Trade-off accepted: marginally less letterpress texture, in exchange for real
selectable, responsive, indexable text.

## Information architecture

### `/` — landing

1. **Ink navbar** — torn bottom edge, orange globe mark + `abdallah.dev` wordmark,
   nav links, "Let's build" CTA, mobile menu.
2. **Hero** (paper) — `I BUILD SOFTWARE THAT WORKS.` in Anton with orange final
   word; Special Elite subtitle with scribble underline; laptop + globe collage;
   CTAs "Start a project" (mailto) and "See the work".
3. **Selected work** (paper) — poster cards for the 10 projects: screenshot in a
   grainy paper frame, Oswald title, stack line, `Case notes →` to `/work/[slug]`.
4. **Ink band** — `I'M AN ENGINEER. A BUILDER.` with a monochrome portrait cutout
   carrying the reference's orange eye-strike motif.
5. **About** (paper + building collage) — bio (3+ years, government platforms,
   marketplaces, mobile apps), capability icons (Frontend / Mobile / Backend /
   Delivery), "View resume" button.
6. **Stack strip** — technologies as stamped paper chips.
7. **Orange CTA band** — `READY TO BUILD WHAT'S NEXT?` with the large white arrow.
8. **Ink footer** — wordmark, link columns, email/phone/Cairo rows, LinkedIn +
   GitHub, orange globe, copyright.

Plus the reference's custom poster scrollbar (client component) with section marks.

### `/work/[slug]` — one static page per project

Ink top + navbar → breadcrumb (Home / Work) → eyebrow (role) → Anton title →
headline → summary → actions ("See live", "Back to work"), with the screenshot in a
taped paper frame plus a Special Elite stamp caption. Then:

- **What it does** — 3–5 specifics pulled from the existing write-up
- **How it's built** — stack notes cards + a delivery list
- **Related work** — links to two sibling projects
- CTA band + footer

`dynamicParams = false` with `generateStaticParams`, so the 10 pages are static and
unknown slugs 404.

### `/not-found`

Poster 404 on paper with a route back home.

## Components and data flow

```
app/site.ts            → single source for name, url, email, phone, socials, location, keywords
app/work/work-content.ts → single source for the 10 projects
    ├── app/page.tsx (WorkSection grid)
    ├── app/work/[slug]/page.tsx (detail pages, generateStaticParams)
    ├── app/components/SiteFooter.tsx (work column)
    └── app/sitemap.ts
```

`work-content.ts` entry shape:

```ts
type WorkProject = {
  slug: string
  title: string
  navLabel: string        // short label for nav/footer/related links
  eyebrow: string         // role on the project
  stamp: string           // Special Elite caption, e.g. "GOV / MLS PLATFORM"
  headline: string        // one strong line
  summary: string         // 2–3 sentences
  cardLine: string        // single line for the landing card
  whatItDoes: string[]    // 3–5 specifics
  stack: string[]
  buildNotes: { title: string; copy: string }[]
  delivery: string[]
  liveUrl: string | null  // null for the admin panel, which has no public URL
  image: { src: string; alt: string; width: number; height: number }
  relatedSlugs: string[]
}
```

Each project's existing single-wall-of-text description is restructured into these
fields and rewritten in the poster voice: direct, specific about systems and
workflows, no agency softeners.

Projects: `egypt-real-estate-platform`, `housing-for-all`,
`housing-for-all-admin-panel`, `sereneus`, `narmer-international-college`, `bask`,
`welyra-vendor-panel`, `keytor`, `polt`, `trash4goods`.

## Assets

Copied from `studio` into `public/assets/poster/` (generic motifs only):

- Textures: `hero-paper.webp`, `services-paper.webp`, `cta-paper.webp`,
  `ink-field-{desktop,mobile}.webp`, `orange-field-{desktop,mobile}.webp`,
  `navbar-ink-v3-{desktop,mobile}.webp`, `footer-ink-v3-{desktop,mobile}.webp`
- Motifs: `navbar-globe.png`, `hero-globe.png`, `hero-laptop.png`,
  `motif-scribble.png`, `motif-underline.png`, `footer-globe.png`,
  `footer-contact-scribble.svg`, `about-collage.png`, `cta-arrow.webp`
- Capability icons: `capability-{strategy,engineering,automation,support}.png`

Heavy paper/ink textures are re-compressed before committing; they are CSS
backgrounds, so `next/image` cannot optimize them.

Not copied: `hero-title-reference-v2.png`, `about-title.png`, `about-headline.png`,
`cta-heading-next-white-v2.webp` (baked MUFEED wording) and
`service-mufeed-cutout.png` (Odoo branding).

Carried over from the old site into `public/`: the 10 project screenshots
(`public/assets/work/`), `resume.pdf`, the portrait, and the favicon.

## Accessibility

WCAG AA contrast on text, visible orange focus rings, semantic heading order, real
alt text on project screenshots, decorative collage marked `aria-hidden`, touch
targets ≥ 44px on nav and CTAs, and a `prefers-reduced-motion` block that disables
transforms and transitions.

## Verification

1. `npm run lint`
2. `npm run build`
3. Run the production server; screenshot `/` and at least one `/work/[slug]` at
   1440px and 390px widths.
4. Confirm no horizontal overflow at 1440 / 820 / 390 / 360.
5. Confirm every asset referenced from CSS exists in `public/`.

Work is committed locally only. No push and no deploy without an explicit request.
