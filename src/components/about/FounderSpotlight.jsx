import { FaFacebookF, FaInstagram, FaLinkedinIn, FaThreads, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { LuGlobe, LuQuote } from "react-icons/lu";
import Reveal from "../UI/Reveal";

const FOUNDER_SOCIALS = {
  linkedin: { Icon: FaLinkedinIn, label: "LinkedIn" },
  x: { Icon: FaXTwitter, label: "X" },
  threads: { Icon: FaThreads, label: "Threads" },
  instagram: { Icon: FaInstagram, label: "Instagram" },
  facebook: { Icon: FaFacebookF, label: "Facebook" },
  tiktok: { Icon: FaTiktok, label: "TikTok" },
  website: { Icon: LuGlobe, label: "Website" },
};

/** Profile link list in display order, skipping empty ones. */
const founderLinks = (socials = {}) =>
  Object.keys(FOUNDER_SOCIALS)
    .filter((key) => socials[key])
    .map((key) => ({ key, url: socials[key], ...FOUNDER_SOCIALS[key] }));

/* Show "@handle" for social URLs, the domain for websites. */
const handleFrom = (key, url) => {
  try {
    const u = new URL(url);
    if (key === "website") return u.hostname.replace(/^www\./, "");
    const last = u.pathname.split("/").filter(Boolean).pop();
    if (!last) return u.hostname;
    // LinkedIn slugs carry random suffixes — show the network name instead
    return key === "linkedin" ? "LinkedIn" : `@${last.replace(/^@/, "")}`;
  } catch {
    return url;
  }
};

/** Large founder profile for the About page. */
const FounderSpotlight = ({ founder }) => {
  const links = founderLinks(founder.socials);
  const firstName = founder.name.split(" ")[0];

  return (
    <section className="py-20 md:py-28" aria-labelledby="founder-heading">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Portrait */}
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] bg-brand-400"
          />
          <figure className="relative overflow-hidden rounded-[2.5rem] border-2 border-ink-900 bg-white">
            <picture>
              {founder.photo?.endsWith(".jpg") && (
                <source srcSet={founder.photo.replace(/\.jpg$/, ".webp")} type="image/webp" />
              )}
              <img
                src={founder.photo}
                alt={`Portrait of ${founder.name}, ${founder.role}`}
                width="900"
                height="1125"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </picture>
            <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-soft backdrop-blur">
              <img src="/img/icon-bg.png" alt="" className="h-10 w-10 rounded-xl" />
              <span className="leading-tight">
                <span className="block font-extrabold">{founder.name}</span>
                <span className="block text-sm text-ink-500">{founder.role}</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Story */}
        <Reveal delay={120}>
          <span className="mb-5 inline-flex rounded-full bg-ink-900 px-4 py-1.5 text-sm font-bold text-brand-400">
            Meet our founder
          </span>
          <h2 id="founder-heading" className="text-4xl leading-tight font-extrabold tracking-tight md:text-5xl">
            {founder.name}
          </h2>
          <p className="mt-2 text-lg font-semibold text-ink-500">{founder.role}</p>

          {founder.bio && <p className="mt-6 text-lg leading-relaxed text-ink-700">{founder.bio}</p>}

          {founder.quote && (
            <blockquote className="relative mt-8 rounded-[2rem] bg-brand-50 p-6 pl-16 text-lg leading-relaxed font-semibold text-ink-800">
              <LuQuote className="absolute top-6 left-6 h-6 w-6 text-brand-600" aria-hidden="true" />“{founder.quote}”
            </blockquote>
          )}

          {links.length > 0 && (
            <div className="mt-8">
              <p className="mb-3 text-sm font-bold text-ink-700">Connect with {firstName}</p>
              <ul className="flex flex-wrap gap-2.5">
                {links.map(({ key, url, Icon, label }) => (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer me"
                      aria-label={`${founder.name} on ${label}`}
                      className="group inline-flex items-center gap-2.5 rounded-full border-2 border-ink-900 bg-white py-2 pr-4 pl-2 font-bold transition hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-press"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-900 text-white">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="text-sm">{handleFrom(key, url)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default FounderSpotlight;
