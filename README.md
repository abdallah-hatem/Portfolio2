# Portfolio — Abdallah Hatem

Personal portfolio built as a distressed software poster: black ink, off-white
paper, concentrated orange, torn edges, and collage motifs. Fullstack work across
government platforms, marketplaces, admin systems, and mobile apps.

## Tech stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS (utility layer; the poster system lives in `app/globals.css`)

## Local commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

## Important folders

- `app/` — routes, components, metadata routes, and global CSS.
- `app/work/work-content.ts` — single source for every project shown on the site.
- `app/site.ts` — name, contact details, and SEO defaults.
- `public/assets/poster/` — textures and motifs for the poster system.
- `public/assets/work/` — project screenshots.
- `docs/superpowers/specs/` — design spec.

## Adding a project

1. Add an entry to `app/work/work-content.ts`.
2. Drop the screenshot in `public/assets/work/`.
3. The landing grid, `/work/[slug]` page, footer links, and sitemap all pick it up.

## Before pushing

1. `npm run lint`
2. `npm run build`
3. Check `/` and one `/work/[slug]` route in a production server.
4. Check desktop and mobile widths for horizontal overflow.

## Deployment

Targets Vercel, served from the site root — the app is a server-rendered Next.js
build, not a static export, so `next/image` optimization stays on. The previous
Netlify deploy (`kortam.netlify.app`) served the old Parcel build and needs the
Next.js runtime if it is kept.
