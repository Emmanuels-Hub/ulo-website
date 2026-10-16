import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  LuBriefcase,
  LuBookOpen,
  LuChevronDown,
  LuGraduationCap,
  LuHeartHandshake,
  LuMegaphone,
  LuMenu,
  LuSchool,
  LuX,
} from "react-icons/lu";
import { PARTNER_LINKS } from "../../config/site";
import { useSiteContent } from "../../content/context";
import Button from "../UI/Button";

const partnerIcons = {
  "/institutional-partners": LuSchool,
  "/content-partners": LuBookOpen,
  "/ngos": LuHeartHandshake,
  "/corporate-learning": LuBriefcase,
  "/campus-ambassadors": LuMegaphone,
};

const mainLinks = [
  { to: "/features", label: "Features" },
  { to: "/competition", label: "Quiz Competition" },
  { to: "/about", label: "About" },
  { to: "/help", label: "Help" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) =>
  `relative rounded-full px-3.5 py-2 text-[15px] font-semibold transition-colors ${
    isActive ? "bg-brand-100 text-ink-900" : "text-ink-700 hover:bg-ink-100 hover:text-ink-900"
  }`;

const Navbar = () => {
  const { pathname } = useLocation();
  const { general } = useSiteContent();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const [lastPath, setLastPath] = useState(pathname);

  const partnersActive = PARTNER_LINKS.some((l) => l.to === pathname);

  /* Close everything when the route changes */
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setPartnersOpen(false);
  }

  /* Elevate header once the page scrolls */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Outside click + Escape close the dropdown / drawer */
  useEffect(() => {
    const onDown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setPartnersOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setPartnersOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  /* Lock body scroll while the drawer is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition duration-300 ${
          scrolled ? "border-ink-200 bg-paper/90 shadow-soft backdrop-blur-md" : "border-transparent bg-paper"
        }`}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
          <Link to="/" className="shrink-0" aria-label="ULO AI home">
            <img src="/img/cropped.png" alt="ULO AI" width="72" height="44" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            <NavLink to="/features" className={linkClass}>
              Features
            </NavLink>
            <NavLink to="/competition" className={linkClass}>
              Quiz Competition
            </NavLink>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                aria-expanded={partnersOpen}
                aria-controls="partners-menu"
                onClick={() => setPartnersOpen((v) => !v)}
                className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-semibold transition-colors ${
                  partnersActive || partnersOpen
                    ? "bg-brand-100 text-ink-900"
                    : "text-ink-700 hover:bg-ink-100 hover:text-ink-900"
                }`}
              >
                Partners
                <LuChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${partnersOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              {partnersOpen && (
                <div
                  id="partners-menu"
                  className="absolute top-full left-1/2 mt-3 w-80 -translate-x-1/2 rounded-3xl border border-ink-200 bg-white p-2 shadow-lift"
                >
                  {PARTNER_LINKS.map(({ to, label, blurb }) => {
                    const Icon = partnerIcons[to];
                    return (
                      <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                          `group flex items-center gap-3 rounded-2xl p-3 transition-colors ${
                            isActive ? "bg-brand-50" : "hover:bg-brand-50"
                          }`
                        }
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-ink-900 transition-colors group-hover:bg-brand-400">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-sm font-bold text-ink-900">{label}</span>
                          <span className="block text-xs text-ink-500">{blurb}</span>
                        </span>
                      </NavLink>
                    );
                  })}
                </div>
              )}
            </div>

            {mainLinks.slice(2).map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={general.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full px-4 py-2 text-[15px] font-semibold text-ink-700 transition-colors hover:bg-ink-100 hover:text-ink-900 sm:inline-flex"
            >
              Sign up
            </a>
            <Button href={general.playStoreUrl} size="sm" className="hidden sm:inline-flex">
              <LuGraduationCap className="h-4 w-4" aria-hidden="true" />
              Get the app
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink-900 hover:bg-ink-100 lg:hidden"
            >
              <LuMenu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-50 bg-ink-900/40 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!mobileOpen}
        className={`fixed top-0 right-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-paper shadow-lift transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink-100 px-5 py-4">
          <img src="/img/cropped.png" alt="ULO AI" className="h-9 w-auto" />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink-900 hover:bg-ink-100"
          >
            <LuX className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 space-y-1 overflow-y-auto px-3 py-4 text-lg font-semibold">
          {[{ to: "/", label: "Home" }, ...mainLinks.slice(0, 2)].map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) =>
                `block rounded-2xl px-4 py-3 ${isActive ? "bg-brand-100" : "hover:bg-ink-100"}`
              }
            >
              {l.label}
            </NavLink>
          ))}

          <button
            type="button"
            aria-expanded={mobilePartnersOpen}
            onClick={() => setMobilePartnersOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-2xl px-4 py-3 hover:bg-ink-100"
          >
            Partners
            <LuChevronDown
              className={`h-5 w-5 transition-transform ${mobilePartnersOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
          {mobilePartnersOpen && (
            <div className="space-y-1 pb-2 pl-3">
              {PARTNER_LINKS.map(({ to, label }) => {
                const Icon = partnerIcons[to];
                return (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-2xl px-4 py-2.5 text-base ${
                        isActive ? "bg-brand-100" : "text-ink-700 hover:bg-ink-100"
                      }`
                    }
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    {label}
                  </NavLink>
                );
              })}
            </div>
          )}

          {mainLinks.slice(2).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `block rounded-2xl px-4 py-3 ${isActive ? "bg-brand-100" : "hover:bg-ink-100"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="space-y-3 border-t border-ink-100 p-5">
          <Button href={general.playStoreUrl} className="w-full">
            <LuGraduationCap className="h-5 w-5" aria-hidden="true" />
            Get the app
          </Button>
          <Button href={general.portalUrl} variant="outline" className="w-full">
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
