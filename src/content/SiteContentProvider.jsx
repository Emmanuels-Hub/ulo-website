import { useEffect, useState } from "react";
import { DEFAULT_CONTENT } from "./defaults";
import { fetchCollection } from "./firestore";
import { SiteContentContext } from "./context";

const CACHE_KEY = "ulo:site_content:v1";

/* Remote values win, but empty strings/arrays never wipe out a default. */
const isPlainObject = (v) => v && typeof v === "object" && !Array.isArray(v);
const merge = (base, remote) => {
  if (!isPlainObject(remote)) return base;
  const out = { ...base };
  for (const [key, value] of Object.entries(remote)) {
    if (value === "" || value === null || value === undefined) continue;
    if (Array.isArray(value) && value.length === 0 && Array.isArray(base?.[key]) && base[key].length) continue;
    out[key] = isPlainObject(value) && isPlainObject(base?.[key]) ? merge(base[key], value) : value;
  }
  return out;
};

const build = (remote) =>
  Object.fromEntries(Object.entries(DEFAULT_CONTENT).map(([doc, base]) => [doc, merge(base, remote?.[doc])]));

const readCache = () => {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY));
  } catch {
    return null;
  }
};

/**
 * Loads admin-managed content once per visit.
 * Renders immediately with cached/default content, then refreshes from Firestore
 * (stale-while-revalidate), so pages never wait on the network.
 */
export const SiteContentProvider = ({ children }) => {
  const [content, setContent] = useState(() => build(readCache()));

  useEffect(() => {
    const controller = new AbortController();
    fetchCollection("site_content", { signal: controller.signal })
      .then((remote) => {
        setContent(build(remote));
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(remote));
        } catch {
          /* storage full or blocked — fine, we just won't cache */
        }
      })
      .catch((err) => {
        if (err.name !== "AbortError") console.warn("[site content] using defaults:", err.message);
      });
    return () => controller.abort();
  }, []);

  return <SiteContentContext.Provider value={content}>{children}</SiteContentContext.Provider>;
};
