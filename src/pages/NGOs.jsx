import { useState } from "react";
import PartnerForm from "../components/UI/PartnerForm";

const benefits = [
  {
    icon: "fas fa-hand-holding-heart",
    bg: "bg-green-100",
    color: "text-green-600",
    title: "Expand Access",
    desc: "Bring world-class AI tutoring to students who lack access to qualified teachers.",
  },
  {
    icon: "fas fa-chart-line",
    bg: "bg-blue-100",
    color: "text-blue-600",
    title: "Data-Driven Impact",
    desc: "Generate automated reports on student progress to satisfy donor requirements.",
  },
  {
    icon: "fas fa-wifi",
    bg: "bg-purple-100",
    color: "text-purple-700",
    title: "Low Bandwidth",
    desc: "Optimized for areas with poor connectivity. Works offline and syncs when online.",
  },
  {
    icon: "fas fa-users",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
    title: "Scalable",
    desc: "Deploy to 50 or 50,000 students instantly. The platform grows with your program.",
  },
];

const collab = [
  {
    num: "1",
    color: "bg-yellow-400 text-gray-900",
    title: "Co-Design",
    desc: "We align our AI tools with your specific curriculum goals and regional languages.",
  },
  {
    num: "2",
    color: "bg-purple-800 border border-white/20 text-white",
    title: "Deploy & Train",
    desc: "We provide onboarding for local facilitators and set up student accounts.",
  },
  {
    num: "3",
    color: "bg-purple-800 border border-white/20 text-white",
    title: "Monitor & Measure",
    desc: "Access real-time dashboards to track usage, improvements, and outcomes.",
  },
];

const tiers = [
  {
    border: "border-gray-300",
    badge: null,
    title: "Pilot Program",
    desc: "Test ULO AI in a single community or school cluster to validate impact before scaling.",
    bullets: ["Up to 500 students", "3–6 month duration", "Basic reporting"],
    cta: {
      label: "Start a Pilot →",
      style: "text-purple-700 font-bold text-sm hover:underline",
    },
    scale: "",
  },
  {
    border: "border-yellow-400",
    badge: "Most Common",
    title: "Grant / CSR Initiative",
    desc: "Jointly funded programs designed for measurable educational outcomes over a fiscal year.",
    bullets: [
      "1,000+ students",
      "Co-branded interface",
      "Detailed impact analytics",
    ],
    cta: {
      label: "Collaborate",
      style:
        "bg-purple-800 text-white px-6 py-2 rounded-lg font-bold text-sm block text-center hover:bg-purple-900 transition",
    },
    scale: "transform scale-105 z-10 shadow-xl relative",
  },
  {
    border: "border-purple-700",
    badge: null,
    title: "Regional Scale",
    desc: "Full deployment across a state, region, or entire beneficiary network.",
    bullets: ["Unlimited students", "Custom curriculum dev", "API integration"],
    cta: {
      label: "Discuss Scaling →",
      style: "text-purple-700 font-bold text-sm hover:underline",
    },
    scale: "",
  },
];

const faqItems = [
  {
    q: "Can ULO AI work without internet?",
    a: "Yes. We have low-bandwidth modes and offline-sync capabilities specifically designed for rural deployments. Students can complete assignments offline, and data syncs when connectivity is restored.",
  },
  {
    q: "How do we measure impact?",
    a: "We provide a Partner Dashboard that tracks granular metrics: time spent learning, quiz scores, improvement over time, and completion rates. These can be exported for donor reports.",
  },
  {
    q: "Can the content be localized?",
    a: "Yes. ULO AI supports multiple African languages and can adapt exercises and explanations to regional dialects where applicable.",
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
    name: "organization",
    label: "Organization",
    type: "text",
    placeholder: "NGO / Foundation",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "you@org.org",
    required: true,
    full: true,
  },
  {
    name: "interest",
    label: "Partnership Interest",
    type: "select",
    required: true,
    full: true,
    options: [
      "Grant / CSR Project",
      "Pilot Program",
      "Technical Integration",
      "Other",
    ],
  },
  {
    name: "goals",
    label: "Tell us about your goals",
    type: "textarea",
    placeholder: "Describe your program goals...",
    full: true,
  },
];

const NGOs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-yellow-50" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <i className="fas fa-globe-africa" /> Social Impact
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Transforming Education for{" "}
              <span className="text-purple-700">Every Learner</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Partner with ULO AI to deliver accessible, AI-driven learning
              solutions to underserved communities across Africa. Bridge the
              digital divide with technology that scales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#partner-form"
                className="bg-purple-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-900 hover:scale-105 transition shadow-lg"
              >
                Collaborate With Us
              </a>
              <a
                href="#impact"
                className="px-8 py-4 rounded-full border border-gray-300 font-semibold hover:border-purple-700 hover:text-purple-700 transition"
              >
                See Impact
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://placehold.co/800x600/16a34a/FFF?text=Community+Learning+Initiative"
                alt="Students using ULO AI"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-yellow-400 max-w-xs">
                <p className="text-xs text-gray-500 uppercase font-bold mb-1">
                  Real-time Impact
                </p>
                <p className="text-gray-800 text-sm font-semibold">
                  "This tool has doubled our student engagement in rural
                  districts."
                </p>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-50 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ─── Benefits ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why NGOs Choose ULO AI
            </h2>
            <p className="text-gray-600">
              We build technology specifically designed to solve the challenges
              of educational access and quality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition text-center group"
              >
                <div
                  className={`w-14 h-14 ${b.bg} ${b.color} rounded-full flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition`}
                >
                  <i className={b.icon} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Collaboration model + impact bars ─── */}
      <section
        id="impact"
        className="py-20 bg-gray-900 text-white relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/stardust.png')",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-2 block">
                Collaboration Model
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How We Work Together
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                We don't just provide software; we act as your technology
                partner from pilot to full-scale deployment.
              </p>
              <div className="space-y-8">
                {collab.map((c) => (
                  <div key={c.title} className="flex gap-4">
                    <div
                      className={`w-10 h-10 rounded-full ${c.color} flex items-center justify-center font-bold shrink-0`}
                    >
                      {c.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{c.title}</h4>
                      <p className="text-sm text-gray-400">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Impact report */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <i className="fas fa-file-invoice text-yellow-400" /> Impact
                Report Example
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Literacy Improvement",
                    value: "+34%",
                    barWidth: "75%",
                    barColor: "bg-green-500",
                  },
                  {
                    label: "Student Engagement",
                    value: "92%",
                    barWidth: "92%",
                    barColor: "bg-yellow-400",
                  },
                  {
                    label: "Assignments Completed",
                    value: "15,400+",
                    barWidth: "60%",
                    barColor: "bg-blue-500",
                  },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{row.label}</span>
                      <span
                        className={`font-bold ${row.barColor === "bg-green-500" ? "text-green-400" : row.barColor === "bg-yellow-400" ? "text-yellow-400" : "text-blue-400"}`}
                      >
                        {row.value}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`${row.barColor} h-2 rounded-full`}
                        style={{ width: row.barWidth }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Tiers ─── */}
      <section
        className="py-20"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Partnership Opportunities
            </h2>
            <p className="text-gray-600">
              Flexible models to suit your funding structure and timeline.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {tiers.map((t) => (
              <div
                key={t.title}
                className={`bg-white p-8 rounded-2xl shadow-sm border-t-4 ${t.border} hover:-translate-y-1 transition duration-300 ${t.scale} relative`}
              >
                {t.badge && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 uppercase rounded-bl-lg">
                    {t.badge}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-4">{t.title}</h3>
                <p className="text-gray-600 text-sm mb-6 min-h-[60px]">
                  {t.desc}
                </p>
                <ul className="text-sm space-y-3 mb-6">
                  {t.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <i className="fas fa-check text-green-500" /> {b}
                    </li>
                  ))}
                </ul>
                <a href="#partner-form" className={t.cta.style}>
                  {t.cta.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Partner form ─── */}
      <div id="partner-form">
        <PartnerForm
          sidebarTitle="Let's make a difference."
          sidebarItems={[
            { icon: "fas fa-envelope", text: "impact@uloai.com" },
            { icon: "fas fa-map-marker-alt", text: "Lagos, Nigeria" },
          ]}
          formTitle="Submit Inquiry"
          fields={formFields}
          submitLabel="Submit Inquiry"
          accentClass="bg-purple-800"
        />
      </div>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-900">
            Questions NGOs Ask
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

export default NGOs;
