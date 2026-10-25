/**
 * Post-build step: give every page its own HTML file with the right <title>,
 * description, canonical URL and Open Graph / Twitter tags.
 *
 * Social apps (WhatsApp, X, Facebook, LinkedIn) don't run JavaScript, so without
 * this every shared link would preview with the home page's text.
 *
 * Also writes sitemap.xml (from the same page list, so it never goes stale)
 * and a noindex 404.html.
 *
 * Runs automatically after `vite build` (see package.json).
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { PAGE_META, pageTitle } from "../src/config/pageMeta.js";
import { SITE } from "../src/config/site.js";

const DIST = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Replace the content/href of an existing tag; fail loudly if index.html changed shape. */
const setAttr = (html, pattern, value) => {
  if (!pattern.test(html)) throw new Error(`prerender-meta: tag not found in index.html: ${pattern}`);
  return html.replace(pattern, (_, before, after) => `${before}${escape(value)}${after}`);
};

const render = (template, { title, description, url, noindex = false }) => {
  const fullTitle = pageTitle(title);
  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(fullTitle)}</title>`);
  html = setAttr(html, /(<meta name="description" content=")[^"]*(")/, description);
  html = setAttr(html, /(<meta name="robots" content=")[^"]*(")/, noindex ? "noindex, nofollow" : "index, follow");
  html = setAttr(html, /(<link rel="canonical" href=")[^"]*(")/, url);
  html = setAttr(html, /(<meta property="og:title" content=")[^"]*(")/, fullTitle);
  html = setAttr(html, /(<meta property="og:description" content=")[^"]*(")/, description);
  html = setAttr(html, /(<meta property="og:url" content=")[^"]*(")/, url);
  html = setAttr(html, /(<meta name="twitter:title" content=")[^"]*(")/, fullTitle);
  html = setAttr(html, /(<meta name="twitter:description" content=")[^"]*(")/, description);
  html = html.replace(/(<noscript>)[\s\S]*?(<\/noscript>)/, `$1${escape(description)}$2`);
  return html;
};

const template = await readFile(join(DIST, "index.html"), "utf8");
const urlFor = (path) => (path === "/" ? `${SITE.url}/` : `${SITE.url}${path}`);

for (const [path, meta] of Object.entries(PAGE_META)) {
  const html = render(template, { ...meta, url: urlFor(path) });
  const file = path === "/" ? join(DIST, "index.html") : join(DIST, path.slice(1), "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}

await writeFile(
  join(DIST, "404.html"),
  render(template, {
    title: "Page not found",
    description: "We couldn't find that page.",
    url: SITE.url,
    noindex: true,
  }),
);

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(PAGE_META)
  .map((p) => `  <url><loc>${urlFor(p)}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n")}
</urlset>
`;
await writeFile(join(DIST, "sitemap.xml"), sitemap);

console.log(`prerender-meta: wrote ${Object.keys(PAGE_META).length} pages, 404.html and sitemap.xml`);
