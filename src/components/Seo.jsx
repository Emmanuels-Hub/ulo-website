import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
 *   <Seo title="Features" description="…" jsonLd={{ … }} />
 */
const Seo = ({ title, description = SITE.description, image = SITE.ogImage, noindex = false, jsonLd }) => {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
  const url = `${SITE.url}${pathname === "/" ? "" : pathname}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE.url}${image}`;

  useEffect(() => {
    document.title = fullTitle;
    upsert('meta[name="description"]', "meta", { name: "description", content: description });
    upsert('meta[name="robots"]', "meta", { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" });
    upsert('link[rel="canonical"]', "link", { rel: "canonical", href: url });

    upsert('meta[property="og:title"]', "meta", { property: "og:title", content: fullTitle });
    upsert('meta[property="og:description"]', "meta", { property: "og:description", content: description });
    upsert('meta[property="og:url"]', "meta", { property: "og:url", content: url });
    upsert('meta[property="og:image"]', "meta", { property: "og:image", content: imageUrl });

    upsert('meta[name="twitter:title"]', "meta", { name: "twitter:title", content: fullTitle });
    upsert('meta[name="twitter:description"]', "meta", { name: "twitter:description", content: description });
    upsert('meta[name="twitter:image"]', "meta", { name: "twitter:image", content: imageUrl });
  }, [fullTitle, description, url, imageUrl, noindex]);

  if (!jsonLd) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export default Seo;
