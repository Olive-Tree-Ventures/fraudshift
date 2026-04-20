/**
 * Pre-renders each route to static HTML after vite build.
 * Run via: npm run build:ssg
 *
 * For each route:
 *  1. Calls render(url) from the SSR bundle (dist/server/entry-server.js)
 *  2. Injects page-specific <title> / <meta> / <link> tags from react-helmet-async
 *  3. Injects the rendered HTML into the #root div
 *  4. Writes dist/<route>/index.html
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbs = (p) => path.resolve(__dirname, "..", p);

const routes = [
  "/",
  "/services",
  "/industries",
  "/about",
  "/our-people",
  "/contact",
];

// Dynamically import the SSR bundle produced by `vite build --ssr`
const { render } = await import("../dist/server/entry-server.js");

const template = fs.readFileSync(toAbs("dist/index.html"), "utf-8");

for (const url of routes) {
  const { html, helmetContext } = render(url);
  const helmet = helmetContext?.helmet;

  // Collect page-specific head tags from react-helmet-async
  const headTags = helmet
    ? [
        helmet.title?.toString(),
        helmet.meta?.toString(),
        helmet.link?.toString(),
        helmet.script?.toString(),
      ]
        .filter((s) => s && s.trim().length > 0)
        .join("\n    ")
    : "";

  const pageHtml = template
    .replace("<!--app-head-->", headTags)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const outPath =
    url === "/" ? toAbs("dist/index.html") : toAbs(`dist${url}/index.html`);

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, pageHtml);
  console.log(`  pre-rendered: ${url}`);
}

console.log("Pre-rendering complete.");
