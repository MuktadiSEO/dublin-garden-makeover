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
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
```

## Deploying via GitHub

This project is built on **TanStack Start** which is configured for an edge SSR runtime (Cloudflare Workers by default). You have two great deployment options once the repo is on GitHub:

### Option A — One-click via Lovable (recommended)

Click **Publish** in the Lovable editor. Lovable hosts your live site on a `*.lovable.app` domain (and lets you connect your custom `mjpavingandgardening.ie` domain in Project Settings → Domains). This is the simplest path and supports full SSR out of the box.

### Option B — Push to GitHub and deploy on Vercel

1. In Lovable, click **GitHub → Connect to GitHub** to push this repo to your account.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel will auto-detect the Vite project. Use these settings if prompted:
   - **Framework preset:** *Vite*
   - **Build command:** `npm run build`
   - **Output directory:** `dist/client`
   - **Install command:** `npm install`
4. Click **Deploy**.

> Because this template targets an edge runtime, full SSR on Vercel may require switching the build target to a Vercel adapter. If you only need the marketing pages (which is all this site contains), the static client output works perfectly. For full SSR on Vercel ask your developer to swap the host preset in `vite.config.ts`.

### Option C — Deploy on Cloudflare Pages

This template is already configured for Cloudflare Workers (see `wrangler.jsonc`). Connect the GitHub repo to Cloudflare Pages with:
- **Build command:** `npm run build`
- **Output directory:** `dist/client`
- Cloudflare auto-deploys the SSR worker from `dist/server`.

## Editing Content

- **Business info / phone / hours:** `src/lib/site.ts`
- **Services list and page copy:** `src/lib/services.ts`
- **Pages:** `src/routes/*`
- **Design tokens / colours:** `src/styles.css`
- **Images:** `src/assets/`

## License

© M&J Paving and Gardening. All rights reserved.
