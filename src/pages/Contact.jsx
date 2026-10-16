import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import {
  LuArrowRight,
  LuCircleAlert,
  LuCircleCheck,
  LuCircleHelp,
  LuClock3,
  LuLoaderCircle,
  LuMail,
  LuMapPin,
  LuMessagesSquare,
  LuPhone,
  LuSend,
} from "react-icons/lu";
import Seo from "../components/Seo";
import Button from "../components/UI/Button";
import PageHero from "../components/UI/PageHero";
import Reveal from "../components/UI/Reveal";
import { useSiteContent } from "../content/context";
import { SITE } from "../config/site";

/* ?topic=<id> preselects a topic, e.g. /contact?topic=partnerships */
const TOPICS = [
  { id: "general", label: "General question" },
  { id: "support", label: "App support" },
  { id: "competition", label: "Quiz competition" },
  { id: "partnerships", label: "Partnerships" },
  { id: "schools", label: "Schools" },
  { id: "careers", label: "Careers" },
];

const inputClass =
  "w-full rounded-2xl border-2 border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 transition focus:border-ink-900 focus:outline-none aria-[invalid=true]:border-danger-600";

const EMPTY = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const { general } = useSiteContent();
  const [params] = useSearchParams();
  const initialTopic = TOPICS.some((t) => t.id === params.get("topic")) ? params.get("topic") : "general";

  const [topic, setTopic] = useState(initialTopic);
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const phoneHref = `tel:${general.phone.replace(/[^\d+]/g, "")}`;
  const whatsappHref = `https://wa.me/${general.whatsappNumber}`;

  const channels = [
    {
      icon: FaWhatsapp,
      title: "Chat on WhatsApp",
      line: "Fastest way to reach us",
      href: whatsappHref,
      cta: "Start a chat",
    },
    { icon: LuMail, title: "Email us", line: general.email, href: `mailto:${general.email}`, cta: "Send an email" },
    { icon: LuPhone, title: "Call us", line: general.phone, href: phoneHref, cta: "Call now" },
  ];

  const update = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = "Please enter a valid email so we can reply.";
    if (form.message.trim().length < 10) er.message = "Please write a little more so we can help.";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    const topicLabel = TOPICS.find((t) => t.id === topic)?.label;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/web/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: `[${topicLabel}] ${form.subject.trim() || "New message"}`,
          message: form.message.trim(),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Seo
        title="Contact us"
        description={`Get in touch with the ULO AI team by WhatsApp, email (${general.email}) or phone. We're happy to help with the app, the quiz competition, schools and partnerships.`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${SITE.url}/contact`,
          mainEntity: {
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: general.email,
              telephone: general.phone.replace(/\s/g, ""),
              areaServed: "NG",
              availableLanguage: "English",
            },
          },
        }}
      />

      <PageHero
        eyebrow="Contact"
        icon={LuMessagesSquare}
        title={
          <>
            We'd love to <span className="highlight">hear from you.</span>
          </>
        }
        intro="Questions about the app, the quiz competition or working together? Pick whatever's easiest — a real person will get back to you."
      />

      {/* Quick channels */}
      <section className="pb-8">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {channels.map(({ icon: Icon, title, line, href, cta }, i) => (
            <Reveal key={title} delay={i * 80}>
              <a
                href={href}
                {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex h-full flex-col rounded-[2rem] border-2 border-ink-900 bg-white p-7 transition hover:-translate-y-1 hover:shadow-press"
              >
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400 transition-transform group-hover:-rotate-6">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <span className="text-xl font-extrabold">{title}</span>
                <span className="mt-1 break-all text-ink-600">{line}</span>
                <span className="mt-5 inline-flex items-center gap-1.5 font-bold">
                  {cta}
                  <LuArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + details */}
      <section className="py-16 md:py-24">
        <div className="container-page grid items-start gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal className="rounded-[2.5rem] border border-ink-200 bg-white p-7 shadow-soft md:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center py-14 text-center" role="status">
                <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-400">
                  <LuCircleCheck className="h-10 w-10" aria-hidden="true" />
                </span>
                <h2 className="text-2xl font-extrabold">Message sent — thank you!</h2>
                <p className="mt-3 max-w-sm leading-relaxed text-ink-600">
                  We usually reply within one working day. Keep an eye on your inbox (and spam folder, just in case).
                </p>
                <Button variant="soft" className="mt-6" onClick={() => setStatus("idle")}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-6">
                <div>
                  <h2 className="text-2xl font-extrabold">Send us a message</h2>
                  <p className="mt-1 text-ink-600">All fields except subject are required.</p>
                </div>

                <fieldset>
                  <legend className="mb-3 text-sm font-bold text-ink-800">What's it about?</legend>
                  <div className="flex flex-wrap gap-2">
                    {TOPICS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        aria-pressed={topic === t.id}
                        onClick={() => setTopic(t.id)}
                        className={`rounded-full border-2 px-4 py-2 text-sm font-bold transition ${
                          topic === t.id
                            ? "border-ink-900 bg-brand-400"
                            : "border-ink-200 bg-white hover:border-ink-900"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                {status === "error" && (
                  <p
                    role="alert"
                    className="flex items-start gap-2 rounded-2xl bg-danger-50 p-4 text-sm font-semibold text-danger-600"
                  >
                    <LuCircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    Sorry, your message didn't go through. Please try again, or reach us on WhatsApp.
                  </p>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    { name: "name", label: "Your name", auto: "name", placeholder: "e.g. Ada Okafor" },
                    {
                      name: "email",
                      label: "Email address",
                      auto: "email",
                      placeholder: "you@example.com",
                      type: "email",
                    },
                  ].map((f) => (
                    <div key={f.name}>
                      <label htmlFor={f.name} className="mb-2 block text-sm font-bold text-ink-800">
                        {f.label} <span className="text-danger-600">*</span>
                      </label>
                      <input
                        id={f.name}
                        name={f.name}
                        type={f.type || "text"}
                        autoComplete={f.auto}
                        value={form[f.name]}
                        onChange={update}
                        placeholder={f.placeholder}
                        aria-invalid={!!errors[f.name]}
                        aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
                        className={inputClass}
                      />
                      {errors[f.name] && (
                        <p id={`${f.name}-error`} className="mt-1.5 text-sm font-semibold text-danger-600">
                          {errors[f.name]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-bold text-ink-800">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={update}
                    placeholder="A quick summary"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-bold text-ink-800">
                    Message <span className="text-danger-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={update}
                    placeholder="Tell us how we can help…"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${inputClass} resize-y`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-sm font-semibold text-danger-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "sending"}>
                  {status === "sending" ? (
                    <>
                      <LuLoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…
                    </>
                  ) : (
                    <>
                      Send message <LuSend className="h-5 w-5" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </Reveal>

          {/* Side details */}
          <div className="space-y-5">
            <Reveal delay={100} className="rounded-[2rem] bg-ink-900 p-7 text-white">
              <h2 className="text-lg font-extrabold">Good to know</h2>
              <ul className="mt-5 space-y-4">
                <li className="flex gap-3">
                  <LuClock3 className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
                  <span>
                    <span className="block font-bold">Support hours</span>
                    <span className="text-ink-300">{general.supportHours}</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <LuMapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
                  <span>
                    <span className="block font-bold">Where we are</span>
                    <span className="text-ink-300">{general.location}</span>
                  </span>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={180} className="rounded-[2rem] border border-brand-200 bg-brand-50 p-7">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400">
                <LuCircleHelp className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="text-lg font-extrabold">Looking for a quick answer?</h2>
              <p className="mt-2 leading-relaxed text-ink-600">
                Our help centre covers accounts, the app, payments and the quiz competition.
              </p>
              <Link
                to="/help"
                className="mt-4 inline-flex items-center gap-1.5 font-bold underline decoration-brand-400 decoration-4 underline-offset-8 hover:decoration-ink-900"
              >
                Visit the help centre <LuArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
