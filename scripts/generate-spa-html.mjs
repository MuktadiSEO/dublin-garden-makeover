// Postbuild step for static hosts (Vercel, Netlify, GitHub Pages).
// TanStack Start ships an SSR build that does not emit an index.html.
// For static deployment we generate a SPA shell that boots the client bundle.

import { readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const clientDir = join(process.cwd(), "dist", "client");
const assetsDir = join(clientDir, "assets");

if (!existsSync(assetsDir)) {
  console.error("[generate-spa-html] dist/client/assets not found — run `npm run build` first.");
  process.exit(1);
}

const files = readdirSync(assetsDir);
const mainEntry = files.find((f) => /^main-[\w-]+\.js$/.test(f));
const cssFile = files.find((f) => /^styles-[\w-]+\.css$/.test(f));

if (!mainEntry) {
  console.error("[generate-spa-html] Could not locate main-*.js entry in dist/client/assets.");
  process.exit(1);
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>M&amp;J Paving and Gardening | Driveways &amp; Landscaping Dublin</title>
    <meta name="description" content="Trusted paving, driveways, patios, fencing, decking and landscaping across Dublin and all Leinster. Free quotes — call 085 283 4956." />
    <meta property="og:title" content="M&amp;J Paving and Gardening | Driveways &amp; Landscaping Dublin" />
    <meta property="og:description" content="Trusted paving, driveways, patios, fencing, decking and landscaping across Dublin and all Leinster. Free quotes — call 085 283 4956." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
    ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ""}
    <script type="module" crossorigin src="/assets/${mainEntry}"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

writeFileSync(join(clientDir, "index.html"), html);
console.log(`[generate-spa-html] Wrote dist/client/index.html (entry: ${mainEntry}${cssFile ? ", css: " + cssFile : ""})`);
