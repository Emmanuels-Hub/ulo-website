import { useState } from "react";
import { Link } from "react-router-dom";
import { LuArrowRight, LuMegaphone, LuX } from "react-icons/lu";
import { useSiteContent } from "../../content/context";

const DISMISS_KEY = "ulo:announcement-dismissed";

/** Site-wide banner, switched on and written in the admin dashboard. */
const AnnouncementBar = () => {
  const { announcement } = useSiteContent().general;
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(DISMISS_KEY) === announcement?.text;
    } catch {
      return false;
    }
  });

  if (!announcement?.enabled || !announcement.text || dismissed) return null;

  const { text, linkLabel, linkUrl } = announcement;
  const internal = linkUrl?.startsWith("/");
  const linkClass = "inline-flex items-center gap-1 font-extrabold underline underline-offset-4 hover:no-underline";

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, text);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="bg-ink-900 text-white">
      <div className="container-page flex items-center gap-3 py-2.5 text-sm">
        <LuMegaphone className="hidden h-4 w-4 shrink-0 text-brand-400 sm:block" aria-hidden="true" />
        <p className="flex-1 text-center sm:text-left">
          {text}{" "}
          {linkUrl &&
            (internal ? (
              <Link to={linkUrl} className={`${linkClass} text-brand-400`}>
                {linkLabel || "Learn more"} <LuArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : (
              <a href={linkUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} text-brand-400`}>
                {linkLabel || "Learn more"} <LuArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full hover:bg-ink-800"
        >
          <LuX className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
