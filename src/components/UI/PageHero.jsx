/**
 * PageHero — consistent intro for inner pages.
 *   eyebrow / icon : small pill above the title
 *   title          : h1 (string or JSX — use <span className="highlight"> for emphasis)
 *   intro          : supporting paragraph
 *   children       : optional CTAs or extras under the intro
 */
const PageHero = ({ eyebrow, icon: Icon, title, intro, children }) => (
  <section className="relative overflow-hidden py-16 md:py-24">
    <div
      aria-hidden="true"
      className="absolute -top-24 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-brand-100"
    />
    <div className="container-page relative text-center">
      {eyebrow && (
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-50 px-4 py-1.5 text-sm font-semibold">
          {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
          {eyebrow}
        </p>
      )}
      <h1 className="mx-auto max-w-4xl text-[2.5rem] leading-[1.08] font-extrabold tracking-tight text-balance sm:text-6xl">
        {title}
      </h1>
      {intro && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-ink-600 md:text-xl">{intro}</p>
      )}
      {children && <div className="mt-10">{children}</div>}
    </div>
  </section>
);

export default PageHero;
