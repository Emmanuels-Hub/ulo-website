/**
 * PageHero — consistent hero banner used across all inner pages.
 *
 * Props:
 *  eyebrow   – small label above title
 *  title     – JSX or string headline
 *  subtitle  – paragraph text
 *  bg        – Tailwind bg class (default 'bg-white')
 *  dark      – boolean; set true for dark background (inverts text)
 *  primaryCta   – { label, href }
 *  secondaryCta – { label, href }
 */
const PageHero = ({
  eyebrow,
  title,
  subtitle,
  bg = "bg-white",
  dark = false,
  primaryCta,
  secondaryCta,
  children,
}) => {
  const textBase = dark ? "text-white" : "text-gray-900";
  const textSub = dark ? "text-gray-300" : "text-gray-600";

  return (
    <section
      className={`relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden ${bg}`}
    >
      {/* decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-300/10 rounded-full filter blur-3xl opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        {eyebrow && (
          <span className="text-purple-500 font-bold tracking-wider uppercase text-sm mb-4 block">
            {eyebrow}
          </span>
        )}

        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 ${textBase}`}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${textSub}`}
          >
            {subtitle}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {primaryCta && (
              <a
                href={primaryCta.href}
                className="bg-yellow-400 text-purple-900 px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-purple-900 hover:text-white transition transform hover:-translate-y-0.5"
              >
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="px-8 py-3.5 rounded-full border border-gray-300 font-semibold hover:border-purple-700 hover:text-purple-700 transition"
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};

export default PageHero;
