import { useState } from "react";
import PartnerForm from "../components/UI/PartnerForm";

const features = [
  {
    icon: "fas fa-road",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverBg: "group-hover:bg-blue-600",
    title: "Tailored Paths",
    desc: "AI analyzes skill gaps and creates personalized learning journeys for every role, from interns to executives.",
  },
  {
    icon: "fas fa-chart-pie",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
    hoverBg: "group-hover:bg-purple-700",
    title: "Deep Analytics",
    desc: "Forget simple completion rates. Track engagement depth, knowledge retention, and practical skill application.",
  },
  {
    icon: "fas fa-server",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    hoverBg: "group-hover:bg-yellow-400",
    title: "LMS Friendly",
    desc: "We play nice with others. Integrate ULO AI seamlessly via API into Workday, SAP, or your custom intranet.",
  },
];

const workflowSteps = [
  {
    num: "1",
    bg: "bg-[#1e1b4b] text-white",
    title: "Define Objectives",
    desc: "We map your company's competency framework to our AI engine.",
  },
  {
    num: "2",
    bg: "bg-[#1e1b4b] text-white",
    title: "Customize Content",
    desc: "Upload your proprietary PDFs/Videos or use our library.",
  },
  {
    num: "3",
    bg: "bg-[#1e1b4b] text-white",
    title: "Deploy to Teams",
    desc: "Send invites. Employees can access via mobile or desktop.",
  },
  {
    num: "4",
    bg: "bg-yellow-400 text-[#1e1b4b]",
    title: "Measure ROI",
    desc: "Review quarterly impact reports on workforce upskilling.",
  },
];

const plans = [
  {
    badge: "For SMBs & Teams",
    badgeBg: "bg-purple-100 text-purple-700",
    dark: false,
    title: "Team Licensing",
    desc: "Perfect for specific departments or SMBs looking to upskill quickly.",
    bullets: [
      "Up to 500 users",
      "Standard content library",
      "Self-serve dashboard",
    ],
    cta: "Get Team Quote",
  },
  {
    badge: "For Large Orgs",
    badgeBg: "bg-white/10 text-yellow-400",
    dark: true,
    title: "Enterprise Custom",
    desc: "Full-scale deployment with custom content ingestion, white-labeling, and dedicated support.",
    bullets: [
      "Unlimited users",
      "Custom API Integrations",
      "Dedicated Success Manager",
    ],
    cta: "Contact Sales",
    recommended: "Best Value",
  },
];

const faqItems = [
  {
    q: "Can we customize the content?",
    a: "Yes. For Enterprise plans, you can upload your own training materials and our AI will generate quizzes, summaries, and learning paths based on your proprietary content.",
  },
  {
    q: "Is my company data secure?",
    a: "Absolutely. We use enterprise-grade encryption and are happy to sign NDAs and provide security documentation for your IT compliance review.",
  },
  {
    q: "Do you offer Single Sign-On (SSO)?",
    a: "Yes, we support SSO via SAML, Google Workspace, and Microsoft Azure AD to ensure seamless and secure access for your employees.",
  },
];

const formFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "John",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Doe",
    required: true,
  },
  {
    name: "company",
    label: "Company Name",
    type: "text",
    placeholder: "Acme Corp",
    required: true,
  },
  {
    name: "companySize",
    label: "Company Size",
    type: "select",
    required: true,
    options: [
      "1 - 50 Employees",
      "51 - 200 Employees",
      "201 - 1,000 Employees",
      "1,000+ Employees",
    ],
  },
  {
    name: "workEmail",
    label: "Work Email",
    type: "email",
    placeholder: "you@company.com",
    required: true,
    full: true,
  },
  {
    name: "needs",
    label: "Training Needs",
    type: "textarea",
    placeholder:
      "Tell us about your goals (e.g. Compliance, Tech Upskilling)...",
    full: true,
  },
];

const CorporateLearning = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#1e1b4b] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
          }}
        />
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-purple-700 to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-yellow-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <i className="fas fa-briefcase" /> For Enterprise
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              Empowering Your Workforce with{" "}
              <span className="text-yellow-400">Intelligent Learning</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Upskill employees, ensure compliance, and drive productivity with
              AI-driven training paths tailored to your company's goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#partner-form"
                className="bg-yellow-400 text-[#1e1b4b] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition shadow-lg"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="px-8 py-4 rounded-full border border-gray-500 font-semibold hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-gray-800">
              <img
                src="https://placehold.co/800x600/3b0764/FFF?text=Employee+Learning+Dashboard"
                alt="Corporate Dashboard"
                className="w-full"
              />
            </div>
            <div
              className="absolute -bottom-8 -left-8 bg-white text-gray-900 p-5 rounded-lg shadow-xl"
              style={{ animation: "bounce 3s infinite" }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <i className="fas fa-check-double text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Compliance
                  </p>
                  <p className="text-lg font-bold">100% Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transform Learning, Drive Performance
            </h2>
            <p className="text-gray-600">
              Move beyond static slides. ULO AI delivers dynamic, engaging
              content that employees actually use.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-purple-300 hover:shadow-lg transition group"
              >
                <div
                  className={`w-12 h-12 ${f.iconBg} ${f.iconColor} ${f.hoverBg} group-hover:text-white rounded-lg flex items-center justify-center text-xl mb-6 transition`}
                >
                  <i className={f.icon} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Workflow ─── */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="text-purple-700 font-bold uppercase tracking-wider text-sm mb-2 block">
                Workflow
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Seamless Integration in 4 Steps
              </h2>
              <div className="space-y-6">
                {workflowSteps.map((s) => (
                  <div key={s.title} className="flex gap-4">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full ${s.bg} flex items-center justify-center font-bold text-sm`}
                    >
                      {s.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{s.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/600x500/e5e7eb/6b21a8?text=Integration+Flowchart"
                alt="Workflow"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Plans ─── */}
      <section className="py-24 bg-white relative">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Flexible Engagement Models
            </h2>
            <p className="text-gray-600">
              Choose the scale that fits your organization.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
            {plans.map((p) => (
              <div
                key={p.title}
                className={`p-8 rounded-2xl flex flex-col relative overflow-hidden ${
                  p.dark
                    ? "bg-[#1e1b4b] text-white shadow-2xl transform md:scale-105"
                    : "bg-white border-2 border-gray-100 hover:border-purple-700 transition shadow-sm hover:shadow-xl"
                }`}
              >
                {p.recommended && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-[#1e1b4b] text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">
                    {p.recommended}
                  </div>
                )}
                <div
                  className={`${p.badgeBg} w-fit px-3 py-1 rounded-full text-xs font-bold uppercase mb-6`}
                >
                  {p.badge}
                </div>
                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <p
                  className={`mb-8 h-12 ${p.dark ? "text-gray-300" : "text-gray-600"}`}
                >
                  {p.desc}
                </p>
                <ul
                  className={`space-y-3 mb-8 text-sm ${p.dark ? "text-gray-300" : "text-gray-700"}`}
                >
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <i
                        className={`fas fa-check ${p.dark ? "text-yellow-400" : "text-green-500"}`}
                      />{" "}
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#partner-form"
                  className={`block text-center w-full py-3 rounded-lg font-bold transition ${
                    p.dark
                      ? "bg-yellow-400 text-[#1e1b4b] hover:bg-white"
                      : "border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Partner form ─── */}
      <div id="partner-form">
        <PartnerForm
          sidebarTitle="Accelerate your team's growth."
          sidebarItems={[
            {
              icon: "fas fa-quote-left",
              text: '"The analytics helped us identify skill gaps we didn\'t know we had." — Head of L&D, FinTech Corp',
            },
          ]}
          formTitle="Book a Demo"
          fields={formFields}
          submitLabel="Book a Demo"
          accentClass="bg-purple-800"
        />
      </div>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-900">
            Corporate FAQs
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg p-4 cursor-pointer"
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

export default CorporateLearning;
