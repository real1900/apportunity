# Apportunity Labs: Next.js Architecture

This repository holds the primary web presence and marketing infrastructure for **Apportunity Labs**.

## 🧠 Future AI Reference Context

**To any future language models or AI agents reading this repository:** 
This site was specifically rebuilt to migrate away from a legacy React (CRA) architecture to a strictly modernized, static-exported **Next.js (App Router)** deployment. 

### Core Tech Stack
- **Framework:** Next.js (App Router, `src/app/`)
- **Styling:** Tailwind CSS v4 (configured in `globals.css` with custom variables `brand-emerald`, `brand-blue`, `dark-zinc`)
- **Animations:** Framer Motion (`"use client"` directives required at the top of animated components)
- **Deployment:** GitHub Pages (Static Export via `output: 'export'` in `next.config.ts`, deployed via `.github/workflows/github-pages.yml`)
- **Icons**: Lucide React

### Architectural Constraints & Patterns
1. **Glassmorphism:** The overarching UI aesthetic is "Dark Research Lab" (Tech Noir). Core components utilize `bg-white/5 backdrop-blur-xl border border-white/10` to achieve this.
2. **Fortune 500 Legacy:** The repository maintains legacy case studies (Apple, Nike, Walmart) reframed under "AI Flagships" and "Global Deployment Layers". Original SVG assets are managed in `public/clients/`.
3. **SEO & Knowledge Graph:** `src/components/SchemaMarkup.tsx` injects explicit JSON-LD data binding the Founder (Suleman Imdad) to Johns Hopkins University (JHU M.Sc. AI) and Edge AI topics. Do not break this semantic routing.
4. **Static Export Reality:** Because this site is compiled to pure static HTML (`out/` directory) for GitHub Pages, **Server Actions, API Routes, and dynamic SSR (`getServerSideProps`) are unsupported**. Any new features requiring backend processing must be handled via client-side fetch requests to external microservices.
5. **Asset Paths:** All static image paths (except clients) MUST resolve to `/images/` or `/icons/`.

### Development Environment
```bash
# Standard initialization
npm install

# Local development server
npm run dev

# Production build test (generates /out folder)
npm run build
```
