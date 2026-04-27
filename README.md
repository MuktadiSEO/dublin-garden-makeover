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
npm run build    # production build (SSR)
```

## Deployment

> ⚠️ **Important:** This project is built on **TanStack Start**, which produces an **SSR worker bundle** (`dist/server/index.js`) — not a static site. There is no `index.html` in the build output, so plain static hosts (including standard Vercel deployments without an adapter) will return **404** on every route.

Pick one of the supported paths below.

### ✅ Option A — One-click via Lovable (recommended)

Click **Publish** in the Lovable editor. Lovable hosts your site with full SSR on a `*.lovable.app` domain and lets you connect your custom `mjpavingandgardening.ie` domain in **Project Settings → Domains**.

This is the fastest, zero-config path and is what we recommend.

### ✅ Option B — Cloudflare Pages / Workers (GitHub-based)

This template is already configured for the Cloudflare Workers runtime (see `wrangler.jsonc`).

1. Push the repo to GitHub via Lovable's **GitHub → Connect to GitHub** button.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo. Use these build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist/client`
   - Cloudflare picks up the SSR worker from `dist/server/index.js` automatically via `wrangler.jsonc`.
4. Deploy. Add your custom domain in the Pages project's **Custom domains** tab.

### ⚠️ Vercel

Vercel deployment is **not** supported out of the box for this template, because TanStack Start's default build targets the Cloudflare Workers runtime — Vercel's static deploy of `dist/client` has no `index.html` and will 404 on every page (this is the issue you saw).

To deploy on Vercel you would need to swap the build host in `vite.config.ts` from the Cloudflare preset to a **Vercel adapter** for TanStack Start. This is a non-trivial template change. If you specifically need Vercel, ask in the Lovable editor and we can rework the project to target it.

## Editing Content

- **Business info / phone / hours:** `src/lib/site.ts`
- **Services list and page copy:** `src/lib/services.ts`
- **Pages:** `src/routes/*`
- **Design tokens / colours:** `src/styles.css`
- **Images:** `src/assets/`

## License

© M&J Paving and Gardening. All rights reserved.
