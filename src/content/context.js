import { createContext, useContext } from "react";
import { DEFAULT_CONTENT } from "./defaults";

export const SiteContentContext = createContext(DEFAULT_CONTENT);

/** Admin-managed content: { general, competition, testimonials, faqs } */
export const useSiteContent = () => useContext(SiteContentContext);

/* ─── Formatting helpers shared by pages ─── */

const LAGOS = "Africa/Lagos";

export const formatNaira = (amount) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(amount || 0);

/** "Monday, 2 November 2026" (always in Nigerian time) */
export const formatDate = (iso, opts = {}) =>
  iso
    ? new Intl.DateTimeFormat("en-NG", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: LAGOS,
        ...opts,
      }).format(new Date(iso))
    : "";

export const formatShortDate = (iso) => formatDate(iso, { weekday: "short", year: undefined, month: "short" });
