import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuArrowRight, LuCheck, LuGavel, LuInfo, LuMessagesSquare, LuShieldCheck } from "react-icons/lu";
import Seo from "../components/Seo";
import PageHero from "../components/UI/PageHero";

/* ⚠️ Legal text — change wording only with care, and bump LAST_UPDATED when you do. */
const LAST_UPDATED = "January 25, 2024";

const privacy = {
  id: "privacy",
  icon: LuShieldCheck,
  title: "Privacy Policy",
  intro:
    "We value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use ULO AI.",
  sections: [
    {
      title: "Information We Collect",
      body: "We may collect personal details such as your name, email address, phone number, and payment information, as well as non-personal data such as device information, browser type, and usage statistics to ensure proper functionality of our apps.",
    },
    {
      title: "How We Use Your Information",
      list: [
        "To provide, operate, and maintain our services.",
        "To improve user experience and personalize content.",
        "To process transactions and send confirmations.",
        "To communicate updates, security alerts, and support messages.",
      ],
    },
    {
      title: "Data Protection",
      note: "We implement industry-standard security measures (SSL, Encryption) to protect your data. However, no method of transmission over the Internet is 100% secure.",
    },
  ],
};

const terms = {
  id: "terms",
  icon: LuGavel,
  title: "Terms & Conditions",
  intro:
    "By accessing or using our services, you agree to be bound by these Terms & Conditions. Please read them carefully before using our platform.",
  sections: [
    {
      title: "Acceptance of Terms",
      body: "By using ULO AI, you acknowledge that you have read, understood, and agree to comply with these Terms & Conditions. If you do not agree, you should not use our services.",
    },
    {
      title: "User Responsibilities",
      checks: [
        "You agree not to misuse our services for illegal activities.",
        "You are responsible for maintaining the confidentiality of your account password.",
        "You must provide accurate and up-to-date information during registration.",
      ],
    },
    {
      title: "Limitation of Liability",
      body: "We are not responsible for indirect or consequential damages resulting from the use or inability to use our services. Our liability is limited to the maximum extent permitted by applicable law.",
    },
    {
      title: "AI Features",
      checks: [
        "The AI tutor, voice tutor and Image Studio are powered by Google's Gemini models through Google Firebase. What you type, say or upload to these features is sent to Google to produce a response.",
        "You must be 18 years of age or older to use the AI features.",
        "Do not share personal or sensitive information (such as passwords, ID numbers or health details) with the AI features.",
        "AI answers can be wrong. Check important information, and do not use the AI to cheat in exams or assessments.",
        "You must not use the AI features to create harmful, sexual, hateful, violent or illegal content, or to try to get around their safety filters. We may limit or suspend access for misuse.",
        "Use of the AI features is also subject to Google's Generative AI Prohibited Use Policy.",
      ],
    },
    {
      title: "Changes to Terms",
      body: "We may update these Terms & Conditions from time to time. Continued use of our services after any changes means you accept the updated terms.",
    },
  ],
};

const DOCS = [privacy, terms];

const Doc = ({ doc }) => {
  const Icon = doc.icon;
  return (
    <section id={doc.id} aria-labelledby={`${doc.id}-title`} className="scroll-mt-28">
      <div className="mb-6 flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        <h2 id={`${doc.id}-title`} className="text-3xl font-extrabold tracking-tight md:text-4xl">
          {doc.title}
        </h2>
      </div>
      <p className="mb-10 text-lg leading-relaxed text-ink-700">{doc.intro}</p>

      <ol className="space-y-6">
        {doc.sections.map((s, i) => (
          <li
            key={s.title}
            id={`${doc.id}-${i + 1}`}
            className="scroll-mt-28 rounded-[2rem] border border-ink-200 bg-white p-6 md:p-8"
          >
            <h3 className="mb-4 flex items-center gap-3 text-xl font-extrabold">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-900 text-sm text-brand-400">
                {i + 1}
              </span>
              {s.title}
            </h3>
            {s.body && <p className="leading-relaxed text-ink-700">{s.body}</p>}
            {s.list && (
              <ul className="list-disc space-y-2 pl-6 leading-relaxed text-ink-700 marker:text-brand-600">
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {s.checks && (
              <ul className="space-y-3">
                {s.checks.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed text-ink-700">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-400">
                      <LuCheck className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {s.note && (
              <p className="flex items-start gap-3 rounded-2xl bg-brand-50 p-4 leading-relaxed text-ink-800">
                <LuInfo className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <span>
                  <b>Note:</b> {s.note}
                </span>
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

const Privacy = () => {
  const [current, setCurrent] = useState("privacy");

  /* Highlight the section currently in view */
  useEffect(() => {
    const els = DOCS.map((d) => document.getElementById(d.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Seo
        title="Privacy Policy & Terms"
        description="How ULO AI collects, uses and protects your information, and the terms for using our app, website and AI features."
      />

      <PageHero
        eyebrow={`Last updated: ${LAST_UPDATED}`}
        icon={LuShieldCheck}
        title={
          <>
            Privacy policy <span className="highlight">&amp; terms</span>
          </>
        }
        intro="We believe in transparency. Here's how we protect your data and the rules for using our platform."
      />

      <div className="container-page grid gap-10 pb-20 md:pb-28 lg:grid-cols-[16rem_1fr] lg:gap-16">
        {/* Table of contents */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <nav aria-label="On this page" className="rounded-[2rem] border border-ink-200 bg-white p-5">
            <p className="mb-3 text-sm font-extrabold tracking-wider text-ink-500 uppercase">On this page</p>
            <ul className="space-y-1">
              {DOCS.map((d) => (
                <li key={d.id}>
                  <a
                    href={`#${d.id}`}
                    aria-current={current === d.id ? "true" : undefined}
                    className={`block rounded-xl px-3 py-2 font-bold transition ${
                      current === d.id ? "bg-brand-400" : "hover:bg-brand-50"
                    }`}
                  >
                    {d.title}
                  </a>
                  <ul className="mt-1 mb-2 ml-3 hidden border-l-2 border-ink-100 pl-3 lg:block">
                    {d.sections.map((s, i) => (
                      <li key={s.title}>
                        <a
                          href={`#${d.id}-${i + 1}`}
                          className="block py-1 text-sm text-ink-600 hover:text-ink-900 hover:underline"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="space-y-20">
          {DOCS.map((d) => (
            <Doc key={d.id} doc={d} />
          ))}

          <div className="flex flex-col items-start gap-4 rounded-[2rem] bg-ink-900 p-8 text-white sm:flex-row sm:items-center sm:justify-between">
            <span className="flex items-center gap-3">
              <LuMessagesSquare className="h-6 w-6 text-brand-400" aria-hidden="true" />
              <span className="text-lg font-bold">Still have questions about our policies?</span>
            </span>
            <Link
              to="/contact?topic=general"
              className="inline-flex items-center gap-2 rounded-full bg-brand-400 px-6 py-3 font-bold text-ink-900 transition hover:-translate-y-0.5"
            >
              Contact our team <LuArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
