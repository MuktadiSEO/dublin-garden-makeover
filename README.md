# M&J Paving and Gardening — mjpavingandgardening.ie

A high-converting marketing website for M&J Paving and Gardening, built with **TanStack Start** (React 19 + Vite 7) and Tailwind CSS v4.

- 📞 Phone: +353 85 283 4956
- 📍 Service area: Dublin and all Leinster, Ireland

## Tech Stack

- React 19, TanStack Router/Start (SSR)
- Vite 7, Tailwind CSS v4
- shadcn/ui components, Lucide icons
- Earthy green / charcoal / warm-stone design system

## Local Development

```bash
bun install     # or: npm install
bun run dev     # http://localhost:5173
bun run build   # production build
```

## Deploying to Vercel via GitHub

This project is built on TanStack Start. The easiest, most reliable way to deploy on Vercel is as a static prerendered site, since the marketing pages are fully static.

### 1. Push to GitHub

In Lovable, click **GitHub → Connect to GitHub** to push this repo to your account. Then on Vercel:

### 2. Import the repo on Vercel

- Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
- **Framework preset:** *Other* (Vite).
- **Build command:** `npm run build`
- **Output directory:** `dist/client`
- **Install command:** `npm install`

### 3. Click Deploy

Vercel will build the site and serve it from `dist/client`. The included `vercel.json` adds an SPA fallback so deep links like `/services/block-paving` work on refresh.

> If you want full SSR on Vercel, you can swap the host preset to Vercel's adapter — but for a marketing site the static build is faster, cheaper and SEO-friendly.

## Editing Content

- **Business info / phone / hours:** `src/lib/site.ts`
- **Services list and page content:** `src/lib/services.ts`
- **Pages:** `src/routes/*`
- **Design tokens / colours:** `src/styles.css`
- **Images:** `src/assets/`

## License

© M&J Paving and Gardening. All rights reserved.
