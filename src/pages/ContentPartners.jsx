import { useState } from "react";
import PartnerForm from "../components/UI/PartnerForm";

const benefits = [
  {
    icon: "fas fa-money-bill-wave",
    bg: "bg-green-100",
    color: "text-green-600",
    title: "Monetize Your Content",
    desc: "Unlock new revenue streams through licensing deals, premium subscriptions, and royalty-based models.",
  },
  {
    icon: "fas fa-robot",
    bg: "bg-purple-100",
    color: "text-purple-700",
    title: "AI-Enhanced Learning",
    desc: "We automatically transform your static PDFs and videos into interactive quizzes, summaries, and flashcards.",
  },
  {
    icon: "fas fa-globe",
    bg: "bg-blue-100",
    color: "text-blue-600",
    title: "Reach Millions",
    desc: "Instantly distribute your curriculum to ULO AI's growing user base of students and institutions across Africa.",
  },
];

const steps = [
  {
    num: "1",
    label: "Sign Up",
    desc: "Register your organization as a content partner.",
    bg: "bg-purple-800 text-white",
    active: true,
  },
  {
    num: "2",
    label: "Upload / Integrate",
    desc: "Upload files or connect via API for seamless sync.",
    bg: "bg-white border-2 border-purple-800 text-purple-800",
    active: false,
  },
  {
    num: "3",
    label: "AI Enhancement",
    desc: "Our engine converts your content into adaptive lessons.",
    bg: "bg-white border-2 border-purple-800 text-purple-800",
    active: false,
  },
  {
    num: "4",
    label: "Launch & Track",
    desc: "Go live and track usage via your partner dashboard.",
    bg: "bg-yellow-400 text-gray-900",
    active: false,
  },
];

const models = [
  {
    badge: "Most Popular",
    badgeBg: "bg-gray-100 text-gray-600",
    title: "Content Licensing",
    desc: "Perfect for publishers with existing libraries of books, videos, or questions.",
    bullets: [
      "Revenue share on views/usage",
      "Brand attribution on all content",
      "Quarterly royalty payouts",
    ],
    dark: false,
    recommended: false,
    cta: "Select Licensing",
  },
  {
    badge: "Recommended",
    badgeBg:
      "bg-yellow-400 text-gray-900 absolute top-0 right-0 rounded-bl-lg px-3 py-1 text-xs font-bold",
    title: "Co-Creation",
    desc: "Collaborate with ULO to build exclusive AI-first courses.",
    bullets: [
      "Joint IP ownership",
      "Access to advanced AI studios",
      "Premium placement on dashboard",
    ],
    dark: true,
    recommended: true,
    cta: "Start Co-Creating",
  },
  {
    badge: "For Tech",
    badgeBg: "bg-gray-100 text-gray-600",
    title: "Platform Integration",
    desc: "Connect your EdTech platform or LMS directly via API.",
    bullets: [
      "Seamless API/LTI connection",
      "Bi-directional data sync",
      "White-label options available",
    ],
    dark: false,
    recommended: false,
    cta: "View API Docs",
  },
];

const faqItems = [
  {
    q: "What types of content can we integrate?",
    a: "We support PDFs, ePubs, Word documents, MP4 videos, and SCORM packages. Our AI can process almost any digital educational format.",
  },
  {
    q: "How do we track revenue?",
    a: "Partners get access to a dedicated dashboard showing real-time views, quiz completions, and estimated revenue earnings based on your specific agreement.",
  },
  {
    q: "Does ULO AI own our content?",
    a: "No. You retain 100% ownership of your IP. ULO AI simply acts as a distribution and enhancement platform. You can remove your content at any time.",
  },
];

const formFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Your name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
    required: true,
  },
  {
    name: "organization",
    label: "Organization / Company",
    type: "text",
    placeholder: "Company name",
    required: true,
    full: true,
  },
  {
    name: "partnerType",
    label: "Partner Type",
    type: "select",
    required: true,
    full: true,
    options: [
      "Book Publisher / Author",
      "EdTech Company",
      "Video Content Creator",
      "Exam Body / Institution",
      "Other",
    ],
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Tell us about your content...",
    full: true,
  },
];

const ContentPartners = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-purple-700/40 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
              For Creators &amp; EdTech
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              Powering Education Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Content Innovation
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Collaborate with ULO AI to bring your content to millions of
              learners using our AI-powered distribution and interactive
              learning engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#partner-form"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition shadow-lg"
              >
                Become a Partner
              </a>
              <a
                href="#models"
                className="px-8 py-4 rounded-full border border-gray-500 font-semibold hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                View Models
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <img
              src="https://placehold.co/800x600/1f2937/FFF?text=Content+Transformation+Flow"
              alt="Content AI Flow"
              className="rounded-2xl shadow-2xl border border-gray-700"
            />
            <div className="absolute top-10 -right-4 bg-white text-gray-900 p-3 rounded-lg shadow-lg flex items-center gap-3 animate-pulse">
              <i className="fas fa-file-pdf text-red-500 text-xl" />
              <span className="font-bold text-sm">PDF Uploaded</span>
            </div>
            <div className="absolute bottom-10 -left-4 bg-purple-800 text-white p-3 rounded-lg shadow-lg flex items-center gap-3">
              <i className="fas fa-magic text-yellow-400 text-xl" />
              <span className="font-bold text-sm">AI Quiz Generated</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Content Providers Choose ULO AI
            </h2>
            <p className="text-gray-600">
              Scale your reach and modernize your content without building the
              technology yourself.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition group"
              >
                <div
                  className={`w-14 h-14 ${b.bg} ${b.color} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition`}
                >
                  <i className={b.icon} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {b.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4 Steps ─── */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Integrate Your Content in 4 Steps
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {steps.map((s) => (
              <div key={s.label}>
                <div
                  className={`w-16 h-16 ${s.bg} rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4`}
                >
                  {s.num}
                </div>
                <h4 className="font-bold text-lg mb-2">{s.label}</h4>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Partnership models ─── */}
      <section id="models" className="py-24 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#6b21a8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Partnership Model
            </h2>
            <p className="text-gray-600">
              Flexible options designed for solo creators, publishers, and tech
              platforms.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {models.map((m) => (
              <div
                key={m.title}
                className={`p-8 rounded-2xl flex flex-col relative overflow-hidden hover:-translate-y-1 transition duration-300 ${
                  m.dark
                    ? "bg-gray-900 text-white shadow-2xl"
                    : "bg-white border border-gray-200 shadow-sm hover:shadow-xl"
                }`}
              >
                {m.recommended && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Recommended
                  </div>
                )}
                {!m.recommended && (
                  <div className="mb-6 bg-gray-100 w-fit px-3 py-1 rounded text-xs font-bold uppercase text-gray-600">
                    {m.badge}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{m.title}</h3>
                <p
                  className={`mb-6 text-sm ${m.dark ? "text-gray-400" : "text-gray-600"}`}
                >
                  {m.desc}
                </p>
                <ul
                  className={`space-y-3 text-sm mb-8 flex-1 ${m.dark ? "text-gray-300" : "text-gray-700"}`}
                >
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <i
                        className={`fas fa-check mt-1 ${m.dark ? "text-yellow-400" : "text-green-500"}`}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#partner-form"
                  className={`block w-full text-center font-bold py-2 rounded-lg transition ${
                    m.dark
                      ? "bg-yellow-400 text-gray-900 hover:bg-white"
                      : "border-2 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white"
                  }`}
                >
                  {m.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Partner form ─── */}
      <div id="partner-form" className="bg-yellow-400 py-24">
        <PartnerForm
          sidebarTitle="Ready to amplify your content?"
          sidebarItems={[
            { icon: "fas fa-check-circle", text: "Quick onboarding" },
            { icon: "fas fa-check-circle", text: "Monthly analytics reports" },
            { icon: "fas fa-check-circle", text: "Dedicated partner support" },
          ]}
          formTitle="Apply as Partner"
          fields={formFields}
          submitLabel="Apply as Partner"
          accentClass="bg-gray-900"
        />
      </div>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Partner FAQs
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm p-4 cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex justify-between items-center font-semibold text-gray-800">
                  {item.q}
                  <span
                    className={`transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  >
                    <i className="fas fa-chevron-down text-sm" />
                  </span>
                </div>
                {openFaq === i && (
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentPartners;
