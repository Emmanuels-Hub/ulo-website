import { Link } from "react-router-dom";
import { LuArrowDown, LuArrowRight, LuCheck, LuCircleHelp, LuHandshake, LuRoute, LuSparkles } from "react-icons/lu";
import { PARTNER_LINKS, SITE } from "../../config/site";
import Seo from "../Seo";
import Accordion from "../UI/Accordion";
import Button from "../UI/Button";
import PartnerForm from "../UI/PartnerForm";
import Reveal from "../UI/Reveal";
import SectionHeading from "../UI/SectionHeading";

/**
 * PartnerPage — shared layout for every partner audience.
 * Pass a config object (see src/content/partners/*.js):
 *   path, seo { title, description }, hero { eyebrow, title, intro, cta, visual },
 *   benefits { title, intro, items[] }, steps { title, items[] },
 *   models? { title, intro, items[] }, form { topic, title, sidebarTitle, sidebarItems, fields, submitLabel },
 *   faqs[]
 */
const PartnerPage = ({ config: c }) => {
  const Visual = c.hero.visual;
  const others = PARTNER_LINKS.filter((l) => l.to !== c.path);

  return (
    <>
      <Seo
        title={c.seo.title}
        description={c.seo.description}
        jsonLd={
          c.faqs?.length
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: c.faqs.map(({ q, a }) => ({
                  "@type": "Question",
                  name: q,
                  acceptedAnswer: { "@type": "Answer", text: a },
                })),
              }
            : undefined
        }
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div aria-hidden="true" className="absolute top-10 -right-32 h-[30rem] w-[30rem] rounded-full bg-brand-100" />
        <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-50 px-4 py-1.5 text-sm font-semibold">
              <c.hero.icon className="h-4 w-4" aria-hidden="true" /> {c.hero.eyebrow}
            </p>
            <h1 className="text-[2.5rem] leading-[1.08] font-extrabold tracking-tight text-balance sm:text-6xl">
              {c.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-600 md:text-xl">{c.hero.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#apply" size="lg">
                {c.hero.cta || "Become a partner"} <LuArrowDown className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button href="#how-it-works" variant="ghost" size="lg">
                How it works
              </Button>
            </div>
          </div>
          {Visual && (
            <Reveal className="mx-auto w-full max-w-md">
              <Visual />
            </Reveal>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Why ULO" icon={LuSparkles} title={c.benefits.title} intro={c.benefits.intro} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.benefits.items.map(({ icon: Icon, title, desc }, i) => (
              <Reveal
                key={title}
                delay={(i % 3) * 80}
                className="group rounded-[2rem] border border-ink-200 bg-paper p-7 transition hover:-translate-y-1 hover:border-ink-900"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400 transition-transform group-hover:-rotate-6">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-extrabold">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink-600">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="how-it-works" className="scroll-mt-24 bg-ink-900 py-20 text-white md:py-28">
        <div className="container-page">
          <SectionHeading tone="dark" eyebrow="How it works" icon={LuRoute} title={c.steps.title} />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.steps.items.map(({ title, desc }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={i * 90}
                className="rounded-[2rem] border border-ink-700 bg-ink-800 p-7"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-400 text-lg font-extrabold text-ink-900">
                  {i + 1}
                </span>
                <h3 className="text-xl font-extrabold">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink-300">{desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Partnership models */}
      {c.models && (
        <section className="py-20 md:py-28">
          <div className="container-page">
            <SectionHeading
              eyebrow="Ways to work together"
              icon={LuHandshake}
              title={c.models.title}
              intro={c.models.intro}
            />
            <div className="grid gap-6 md:grid-cols-3">
              {c.models.items.map(({ title, desc, points }, i) => (
                <Reveal
                  key={title}
                  delay={i * 100}
                  className={`flex flex-col rounded-[2rem] border-2 p-8 ${
                    i === 1 ? "border-ink-900 bg-brand-400 shadow-press" : "border-ink-200 bg-white"
                  }`}
                >
                  <h3 className="text-2xl font-extrabold">{title}</h3>
                  <p className={`mt-2 leading-relaxed ${i === 1 ? "text-ink-800" : "text-ink-600"}`}>{desc}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-3 font-semibold">
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                            i === 1 ? "bg-ink-900 text-brand-400" : "bg-brand-400"
                          }`}
                        >
                          <LuCheck className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Application form */}
      <section id="apply" className={`scroll-mt-24 py-20 md:py-28 ${c.models ? "bg-white" : ""}`}>
        <div className="container-page">
          <PartnerForm {...c.form} />
        </div>
      </section>

      {/* FAQs */}
      {c.faqs?.length > 0 && (
        <section className={`py-20 md:py-28 ${c.models ? "" : "bg-white"}`}>
          <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              align="left"
              eyebrow="FAQs"
              icon={LuCircleHelp}
              title={c.faqTitle || "Questions partners ask"}
              intro="Anything else on your mind? Just ask in the form — we read every message."
            />
            <Accordion items={c.faqs} />
          </div>
        </section>
      )}

      {/* Other partner types */}
      <section className="border-t border-ink-200 py-16">
        <div className="container-page">
          <h2 className="mb-6 text-center text-xl font-extrabold">Other ways to work with {SITE.name}</h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {others.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-ink-900 bg-white px-5 py-2.5 font-bold transition hover:-translate-y-0.5 hover:bg-brand-400"
                >
                  {l.label}
                  <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default PartnerPage;
