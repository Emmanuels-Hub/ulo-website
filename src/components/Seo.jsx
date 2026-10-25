import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PAGE_META, pageTitle } from "../config/pageMeta";
import { SITE } from "../config/site";

/* Update (or create) a <meta>/<link> tag already in index.html so we never
   end up with duplicates that confuse crawlers. */
const upsert = (selector, create, attrs) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(create);
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
};

/**
 * Seo — per-page title, description, canonical, Open Graph & Twitter tags,
 * plus optional JSON-LD structured data.
 *
 *   <Seo />                         → uses PAGE_META for the current path
 *   <Seo title="…" description="…" /> → overrides (e.g. dynamic competition info)
 */
const Seo = ({ title, description, image = SITE.ogImage, noindex = false, jsonLd }) => {
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] || {};
  const desc = description ?? meta.description ?? SITE.description;
  const fullTitle = pageTitle(title ?? meta.title);
  const url = `${SITE.url}${pathname === "/" ? "" : pathname}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE.url}${image}`;

  useEffect(() => {
    document.title = fullTitle;
    upsert('meta[name="description"]', "meta", { name: "description", content: desc });
    upsert('meta[name="robots"]', "meta", { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" });
    upsert('link[rel="canonical"]', "link", { rel: "canonical", href: url });

    upsert('meta[property="og:title"]', "meta", { property: "og:title", content: fullTitle });
    upsert('meta[property="og:description"]', "meta", { property: "og:description", content: desc });
    upsert('meta[property="og:url"]', "meta", { property: "og:url", content: url });
    upsert('meta[property="og:image"]', "meta", { property: "og:image", content: imageUrl });

    upsert('meta[name="twitter:title"]', "meta", { name: "twitter:title", content: fullTitle });
    upsert('meta[name="twitter:description"]', "meta", { name: "twitter:description", content: desc });
    upsert('meta[name="twitter:image"]', "meta", { name: "twitter:image", content: imageUrl });
  }, [fullTitle, desc, url, imageUrl, noindex]);

  if (!jsonLd) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export default Seo;
