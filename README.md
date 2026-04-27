# M&J Paving and Gardening — mjpavingandgardening.ie

A high-converting marketing website for M&J Paving and Gardening, built with **React 19 + TanStack Router + Vite 7** (SPA) and Tailwind CSS v4.

- 📞 Phone: +353 85 283 4956
- 📍 Service area: Dublin and all Leinster, Ireland

## Local Development

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # production build → dist/
```

## Deploy to Vercel (via GitHub)

1. In Lovable, click **GitHub → Connect to GitHub** to push this repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite. The included `vercel.json` sets:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **SPA rewrites:** every route falls back to `index.html` so deep links work.
4. Click **Deploy**. Add your custom `mjpavingandgardening.ie` domain in **Project Settings → Domains**.

## Editing Content

- **Business info / phone / hours:** `src/lib/site.ts`
- **Services list and copy:** `src/lib/services.ts`
- **Pages:** `src/routes/*`
- **Design tokens:** `src/styles.css`
- **Images:** `src/assets/`

## License

© M&J Paving and Gardening. All rights reserved.
