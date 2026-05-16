# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Czech-language single-page marketing site for **ČtvrtCON** — a one-day conference of the Čtvrtkon community covering DEV / MKT / DSN tracks. Based on the commercial Tailwind UI "Keynote" template (see `LICENSE.md`). User-facing copy is in Czech.

## Commands

```bash
npm run dev      # next dev — local server at http://localhost:3000
npm run build    # next build && next export — produces a static export
npm run start    # next start — serve a built production bundle
npm run lint     # next lint (eslint-config-next/core-web-vitals)
```

There is no test suite.

## Stack & conventions

- **Next.js 14 App Router**, **React 18**, **Tailwind CSS 3.4**, **Headless UI v2** (`@headlessui/react`, `@headlessui/tailwindcss`). All source is **JSX** (no TypeScript).
- **Path alias**: `@/*` → `./src/*` (configured in `jsconfig.json`). Always import via `@/components/...`, `@/images/...`, `@/styles/...`.
- **Prettier**: single quotes, no semicolons, `prettier-plugin-tailwindcss` sorts Tailwind classes — preserve that ordering when editing class lists.
- **Deployment**: Netlify (`@netlify/plugin-nextjs`). `next.config.js` keeps `basePath` / `output: "export"` commented out; uncomment only when producing a fully static build for non-Netlify hosting.
- **Fonts** are loaded in `src/app/layout.jsx` via `next/font/google` (Inter as body, Montserrat Alternates as display) and exposed as CSS vars `--font-inter` / `--font-montserrat_alternates`, wired into Tailwind's `fontFamily.sans` / `fontFamily.display`.
- **Theme colors**: a custom `primary` palette (50–950) is defined in `tailwind.config.js`. Prefer `text-primary-*` / `bg-primary-*` etc. over arbitrary hex.
- Components that use Headless UI or React hooks declare `'use client'` at the top (see `Speakers.jsx`, `Schedule.jsx`). Pure layout/markup components stay as Server Components.

## Architecture

Single landing page composed from section components:

```
src/app/layout.jsx               # root <html>, fonts, global metadata
src/app/(main)/layout.jsx        # wraps children in <Layout> (adds <Footer/>)
src/app/(main)/page.jsx          # renders Hero → Speakers → Schedule → Sponsors
src/components/                  # all section + primitive components
src/images/avatars/              # speaker WebP portraits
src/images/partners/             # partner PNG logos
src/styles/tailwind.css          # Tailwind entry
```

`(main)` is a Next.js [route group](https://nextjs.org/docs/app/building-your-application/routing/route-groups) — it scopes a layout (with footer) without adding a URL segment. `src/app/not-found.jsx` provides the 404 page.

### Where content lives

All editorial content is **hardcoded as JS data arrays inside the section components** — there is no CMS, JSON, or markdown. When the user asks to add/edit a speaker, talk, partner, or hero copy, edit the relevant array in place:

- **Speakers** → `days[0].speakers` in `src/components/Speakers.jsx`. Each entry needs an imported portrait from `@/images/avatars/<slug>.webp` and a `url: '#<anchor>'` that matches the corresponding talk's `id` in the schedule.
- **Program / schedule** → `program` array in `src/components/Schedule.jsx`. Time slots are grouped into `block`s; entries with two parallel talks have two items per `block` (Stage 1 / Stage 2). Talk `id` values are the anchor targets that speaker cards link to.
- **Partners / sponsors** → `generalSponsors` and `sponsors` arrays in `src/components/Sponsors.jsx`, each with an imported logo from `@/images/partners/` and an external `url`.
- **Hero copy & stats** (date, location, intro paragraphs, the four stat tiles) → inline JSX in `src/components/Hero.jsx`. The date appears both as visible text and as a `<time dateTime="YYYY-MM-DD">` — keep them in sync.

When adding a speaker, the typical change touches three files: place the image under `src/images/avatars/`, append to `days[0].speakers` in `Speakers.jsx`, and add the corresponding talk slot to `program` in `Schedule.jsx` (use the same `#anchor` ↔ `id` pair so the speaker card links to their talk).
