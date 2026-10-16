import Reveal from "./Reveal";

/**
 * SectionHeading — eyebrow pill + h2 + optional intro.
 *   align: "center" | "left"
 *   tone:  "light" (default, on paper/white/cream) | "dark" (on ink)
 */
const SectionHeading = ({ eyebrow, icon: Icon, title, intro, align = "center", tone = "light", as: Tag = "h2" }) => {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <Reveal className={`mb-12 md:mb-16 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}`}>
      {eyebrow && (
        <span
          className={`mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wider uppercase ${
            dark ? "bg-ink-800 text-brand-400" : "bg-brand-100 text-brand-800"
          }`}
        >
          {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
          {eyebrow}
        </span>
      )}
      <Tag
        className={`text-3xl leading-tight font-extrabold tracking-tight text-balance md:text-[2.75rem] ${
          dark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed text-pretty ${dark ? "text-ink-300" : "text-ink-600"}`}>{intro}</p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
