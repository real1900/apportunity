# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing/web presence for **Apportunity Labs**, built as a Next.js (App Router) site that is **statically exported** and deployed to GitHub Pages. The content is positioning copy for an AI systems/Edge-AI consultancy fronted by founder Suleman Imdad — much of the SEO and JSON-LD is deliberate and load-bearing (see SEO section).

## Commands

```bash
npm run dev      # local dev server (http://localhost:3000)
npm run build    # production build — runs static export, generates /out
npm run start    # serve a non-exported production build (rarely needed here)
npm run lint     # eslint (flat config, eslint-config-next)
```

There is **no test suite** and no test runner configured. "Verifying a change" means `npm run build` succeeds and the page renders in `npm run dev`.

## Critical constraint: static export

`next.config.ts` sets `output: "export"` with `images.unoptimized: true`. The entire site compiles to static HTML in `/out`. This means:

- **No Server Components data fetching at request time, no Route Handlers / API routes, no Server Actions, no middleware, no SSR/ISR.** Anything dynamic must be client-side (`fetch` to an external service from a `"use client"` component).
- Files like `robots.ts` and `sitemap.ts` must stay statically generable — they use `export const dynamic = 'force-static'`. Keep that.
- `next/image` works but is unoptimized; image paths resolve from `public/` (e.g. `/images/...`, `/icons/...`). Client logos live in `public/clients/`.

## Deployment

Pushing to `main` triggers `.github/workflows/github-pages.yml`: `npm ci && npm run build`, then `gh-pages -d out` publishes the `/out` directory. Custom domain `apportunitylabs.ai` is pinned via `public/CNAME`. There is no preview/staging environment — `main` is production.

## Architecture & conventions

- **Routing:** App Router under `src/app/`. Each marketing route is a folder (`solutions/`, `platform/`, `research/`, `about/`, `about/founder/`, `contact/`).
- **Page vs. layout split:** Page components (`page.tsx`) are almost all `"use client"` because they use Framer Motion. Per-route SEO `metadata` cannot be exported from a client component, so each route ships a sibling **server** `layout.tsx` whose only job is to export `metadata`. **When adding a route that needs page-level animations, follow this pattern: client `page.tsx` + thin server `layout.tsx` exporting `metadata`.**
- **Path alias:** `@/*` → `src/*` (see `tsconfig.json`).
- **Components:** Shared UI in `src/components/ui/` (`Header`, `Footer`, `CaseStudyGrid`, `VideoIntro`); `Header` and `Footer` are mounted once in the root `layout.tsx`.

## Styling

- **Tailwind CSS v4**, configured entirely in `src/app/globals.css` via `@theme` (there is **no `tailwind.config.js`**). Custom tokens: `--color-brand-emerald` (#10b981), `--color-brand-blue` (#3b82f6), `--color-dark-zinc` (#09090b), plus custom animations `pulse-slow` and `mesh-gradient`.
- The site is dark-mode only (`<html className="dark">`). Aesthetic is "dark research lab" glassmorphism: `bg-white/5 backdrop-blur-xl border border-white/10` (also available as the `.glass-panel` class and `.bg-mesh-gradient` in `globals.css`).
- Fonts: Geist Sans / Geist Mono via `next/font/google`, exposed as CSS vars in the root layout.

## SEO / structured data (handle with care)

The site's value depends on a deliberately constructed knowledge graph — do not casually edit it:

- `src/components/SchemaMarkup.tsx` injects JSON-LD (`Organization` + `Person`) binding the founder to Johns Hopkins University and Edge-AI topics. It's rendered in the root `layout.tsx` `<head>`.
- Root `layout.tsx` exports a `metadata` object with `metadataBase`, a title template, OpenGraph and Twitter cards. Per-route `layout.tsx` files override title/description.
- `sitemap.ts` enumerates routes explicitly — **add new routes here** when you create them.

When changing copy, URLs, or the founder/org facts, keep `SchemaMarkup.tsx`, the layout `metadata`, and `sitemap.ts` consistent with each other.
