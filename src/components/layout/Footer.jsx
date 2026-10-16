import { Link } from "react-router-dom";
import { LuMail, LuPhone } from "react-icons/lu";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { PARTNER_LINKS, SITE } from "../../config/site";
import { useSiteContent } from "../../content/context";
import StoreButtons from "../UI/StoreButtons";

const socialIcons = {
  facebook: { Icon: FaFacebookF, label: "Facebook" },
  x: { Icon: FaXTwitter, label: "X (Twitter)" },
  instagram: { Icon: FaInstagram, label: "Instagram" },
  linkedin: { Icon: FaLinkedinIn, label: "LinkedIn" },
  tiktok: { Icon: FaTiktok, label: "TikTok" },
  youtube: { Icon: FaYoutube, label: "YouTube" },
};

const buildColumns = (general) => [
  {
    title: "Product",
    links: [
      { to: "/features", label: "Features" },
      { to: "/competition", label: "Quiz Competition" },
      { href: general.playStoreUrl, label: "Download the app" },
      { href: general.portalUrl, label: "Sign up" },
    ],
  },
  {
    title: "Partners",
    links: PARTNER_LINKS.map(({ to, label }) => ({ to, label })),
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About us" },
      { to: "/contact", label: "Contact" },
      { to: "/help", label: "Help & FAQs" },
      { to: "/privacy", label: "Privacy policy" },
      { to: "/privacy#terms", label: "Terms of use" },
    ],
  },
];

const linkStyle = "text-ink-600 transition-colors hover:text-ink-900 hover:underline underline-offset-4";

const Footer = () => {
  const { general } = useSiteContent();
  const columns = buildColumns(general);
  const socials = Object.entries(general.socials || {}).filter(([key, url]) => url && socialIcons[key]);
  const phoneHref = `tel:${general.phone.replace(/[^\d+]/g, "")}`;

  return (
    <footer className="border-t border-brand-200 bg-brand-50">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" aria-label="ULO AI home">
              <img src="/img/cropped.png" alt="ULO AI" className="h-12 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs leading-relaxed text-ink-600">
              Your friendly AI study buddy — helping Nigerian students prepare smarter and walk into every exam with
              confidence.
            </p>
            <StoreButtons className="mt-6" />

            {socials.length > 0 && (
              <div className="mt-6 flex gap-2">
                {socials.map(([key, url]) => {
                  const { Icon, label } = socialIcons[key];
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition hover:-translate-y-0.5 hover:border-ink-900 hover:bg-brand-400 hover:text-ink-900"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="mb-4 text-sm font-extrabold tracking-wider text-ink-900 uppercase">{col.title}</h2>
                <ul className="space-y-3 text-[15px]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.to ? (
                        <Link to={l.to} className={linkStyle}>
                          {l.label}
                        </Link>
                      ) : (
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkStyle}>
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact card */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-brand-200 bg-white p-6">
              <h2 className="mb-4 text-sm font-extrabold tracking-wider text-ink-900 uppercase">Talk to us</h2>
              <ul className="space-y-4 text-[15px]">
                <li>
                  <a
                    href={`mailto:${general.email}`}
                    className="group flex items-center gap-3 text-ink-700 hover:text-ink-900"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 group-hover:bg-brand-400">
                      <LuMail className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {general.email}
                  </a>
                </li>
                <li>
                  <a href={phoneHref} className="group flex items-center gap-3 text-ink-700 hover:text-ink-900">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 group-hover:bg-brand-400">
                      <LuPhone className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {general.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={general.whatsappChannel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-ink-700 hover:text-ink-900"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 group-hover:bg-brand-400">
                      <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                    </span>
                    Join our WhatsApp channel
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-brand-200 pt-8 text-sm text-ink-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Made with care for students in Nigeria 💛</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
