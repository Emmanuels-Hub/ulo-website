import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import {
  LuArrowRight,
  LuChartLine,
  LuCircleHelp,
  LuCreditCard,
  LuBookOpen,
  LuLifeBuoy,
  LuMail,
  LuPhone,
  LuRocket,
  LuSearch,
  LuSearchX,
  LuShieldCheck,
  LuTrophy,
  LuUserCog,
  LuWrench,
  LuX,
} from "react-icons/lu";
import Seo from "../components/Seo";
import Accordion from "../components/UI/Accordion";
import Button from "../components/UI/Button";
import Reveal from "../components/UI/Reveal";
import SectionHeading from "../components/UI/SectionHeading";
import { useSiteContent } from "../content/context";

const ICONS = {
  rocket: LuRocket,
  account: LuUserCog,
  billing: LuCreditCard,
  learning: LuBookOpen,
  analytics: LuChartLine,
  technical: LuWrench,
  competition: LuTrophy,
  privacy: LuShieldCheck,
  help: LuCircleHelp,
};

const SUGGESTIONS = ["password", "premium", "refund", "AI tutor", "competition"];

const HelpAndSupport = () => {
  const { help, general } = useSiteContent();
  const categories = (help.categories || []).filter((c) => c.title && c.faqs?.length);
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(categories[0]?.id);

  const active = categories.find((c) => c.id === activeId) || categories[0];
  const term = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!term) return [];
    return categories
      .map((c) => ({
        ...c,
        faqs: c.faqs.filter((f) => f.q.toLowerCase().includes(term) || f.a.toLowerCase().includes(term)),
      }))
      .filter((c) => c.faqs.length);
  }, [categories, term]);
  const resultCount = results.reduce((n, c) => n + c.faqs.length, 0);

  const channels = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      line: "Usually the fastest reply",
      href: `https://wa.me/${general.whatsappNumber}`,
    },
    { icon: LuMail, title: "Email", line: general.email, href: `mailto:${general.email}` },
    { icon: LuPhone, title: "Phone", line: general.phone, href: `tel:${general.phone.replace(/[^\d+]/g, "")}` },
  ];

  const allFaqs = categories.flatMap((c) => c.faqs);

  return (
    <>
      <Seo
        title="Help Centre"
        description="Answers to common questions about ULO AI — accounts, Premium and billing, practice and exams, performance tracking, competitions, privacy and troubleshooting."
        jsonLd={
          allFaqs.length
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: allFaqs.map(({ q, a }) => ({
                  "@type": "Question",
                  name: q,
                  acceptedAnswer: { "@type": "Answer", text: a },
                })),
              }
            : undefined
        }
      />

      {/* Hero + search */}
      <section className="relative overflow-hidden border-b-2 border-ink-900 bg-brand-400">
        <div aria-hidden="true" className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-brand-300" />
        <div aria-hidden="true" className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-brand-300" />
        <div className="container-page relative py-16 text-center md:py-20">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-1.5 text-sm font-bold text-brand-400">
            <LuLifeBuoy className="h-4 w-4" aria-hidden="true" /> Help Centre
          </p>
          <h1 className="text-[2.5rem] leading-[1.08] font-extrabold tracking-tight text-balance sm:text-6xl">
            Hi there 👋 How can we help?
          </h1>

          <form role="search" onSubmit={(e) => e.preventDefault()} className="relative mx-auto mt-8 max-w-2xl">
            <label htmlFor="help-search" className="sr-only">
              Search the help centre
            </label>
            <LuSearch
              className="pointer-events-none absolute top-1/2 left-5 h-6 w-6 -translate-y-1/2 text-ink-500"
              aria-hidden="true"
            />
            <input
              id="help-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for answers — e.g. password, premium, refund"
              autoComplete="off"
              className="w-full rounded-full border-2 border-ink-900 bg-white py-4 pr-14 pl-14 text-lg shadow-press placeholder:text-ink-400 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute top-1/2 right-4 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full hover:bg-ink-100"
              >
                <LuX className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
          </form>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="font-semibold text-ink-700">Popular:</span>
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setQuery(s)}
                className="rounded-full bg-white/70 px-3 py-1 font-semibold hover:bg-white"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          {term ? (
            /* Search results */
            <div className="mx-auto max-w-3xl" aria-live="polite">
              <p className="mb-8 text-lg">
                <b>{resultCount}</b> {resultCount === 1 ? "answer" : "answers"} for “{query.trim()}”
              </p>
              {results.length ? (
                <div className="space-y-10">
                  {results.map((c) => {
                    const Icon = ICONS[c.icon] || LuCircleHelp;
                    return (
                      <div key={c.id}>
                        <h2 className="mb-4 flex items-center gap-2 text-lg font-extrabold">
                          <Icon className="h-5 w-5" aria-hidden="true" /> {c.title}
                        </h2>
                        <Accordion items={c.faqs} defaultOpen={null} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-[2rem] border-2 border-dashed border-ink-300 bg-white p-10 text-center">
                  <LuSearchX className="mx-auto h-12 w-12 text-ink-400" aria-hidden="true" />
                  <h2 className="mt-4 text-2xl font-extrabold">No answers found</h2>
                  <p className="mx-auto mt-2 max-w-md text-ink-600">
                    Try a different word — or just ask us. We're happy to help.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <Button variant="soft" onClick={() => setQuery("")}>
                      Clear search
                    </Button>
                    <Button to="/contact?topic=support" variant="dark">
                      Contact support
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Browse by category */
            <div className="grid gap-8 lg:grid-cols-[18rem_1fr] lg:gap-12">
              <nav aria-label="Help topics" className="lg:sticky lg:top-24 lg:self-start">
                <h2 className="mb-3 text-sm font-extrabold tracking-wider text-ink-500 uppercase">Topics</h2>
                <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
                  {categories.map((c) => {
                    const Icon = ICONS[c.icon] || LuCircleHelp;
                    const on = c.id === active?.id;
                    return (
                      <li key={c.id} className="shrink-0">
                        <button
                          type="button"
                          aria-current={on ? "true" : undefined}
                          onClick={() => setActiveId(c.id)}
                          className={`flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left font-bold transition ${
                            on ? "border-ink-900 bg-brand-400" : "border-transparent hover:bg-brand-50"
                          }`}
                        >
                          <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                          <span className="flex-1 whitespace-nowrap lg:whitespace-normal">{c.title}</span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs ${on ? "bg-ink-900 text-brand-400" : "bg-ink-100 text-ink-600"}`}
                          >
                            {c.faqs.length}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {active && (
                <div key={active.id}>
                  <h2 className="mb-6 text-3xl font-extrabold tracking-tight">{active.title}</h2>
                  <Accordion items={active.faqs} defaultOpen={null} />
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Still need help */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Still stuck?"
            icon={LuLifeBuoy}
            title="Talk to a real person"
            intro={`Our team is around ${general.supportHours}. We'll get you sorted.`}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {channels.map(({ icon: Icon, title, line, href }, i) => (
              <Reveal key={title} delay={i * 80}>
                <a
                  href={href}
                  {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  className="group flex h-full items-center gap-4 rounded-[2rem] border-2 border-ink-900 bg-paper p-6 transition hover:-translate-y-1 hover:shadow-press"
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-400">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-extrabold">{title}</span>
                    <span className="block truncate text-ink-600">{line}</span>
                  </span>
                  <LuArrowRight
                    className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-ink-600">
            Prefer to write it all down?{" "}
            <Link
              to="/contact?topic=support"
              className="font-bold underline decoration-brand-400 decoration-4 underline-offset-4 hover:decoration-ink-900"
            >
              Send us a message
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default HelpAndSupport;
