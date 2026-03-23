import { useState } from "react";
import PartnerForm from "../components/UI/PartnerForm";

const benefits = [
  {
    icon: "fas fa-brain",
    bg: "bg-purple-100",
    color: "text-purple-700",
    title: "AI-Powered Learning",
    desc: "Personalized study paths adapt to every student's pace, ensuring no one is left behind.",
  },
  {
    icon: "fas fa-laptop-code",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
    title: "Exam Simulation",
    desc: "Access thousands of past questions and AI-generated quizzes for JAMB, WAEC, and internal exams.",
  },
  {
    icon: "fas fa-chart-pie",
    bg: "bg-blue-100",
    color: "text-blue-600",
    title: "Analytics & Insights",
    desc: "Administrators and teachers get real-time dashboards to track engagement and academic progress.",
  },
  {
    icon: "fas fa-plug",
    bg: "bg-green-100",
    color: "text-green-600",
    title: "Seamless Integration",
    desc: "Connects easily with your existing Learning Management System (LMS) or works standalone.",
  },
  {
    icon: "fas fa-layer-group",
    bg: "bg-red-100",
    color: "text-red-600",
    title: "Scalable Deployment",
    desc: "Whether you are a single campus or a network of schools, ULO scales with your needs instantly.",
  },
  {
    icon: "fas fa-user-shield",
    bg: "bg-teal-100",
    color: "text-teal-600",
    title: "Secure & Compliant",
    desc: "We prioritize student data privacy and comply with all local educational data regulations.",
  },
];

const howSteps = [
  {
    num: "1",
    label: "Sign Up",
    desc: "Create your institutional account and verify your details.",
    border: "border-yellow-400 shadow-yellow-500/20",
  },
  {
    num: "2",
    label: "Customize",
    desc: "Upload your curriculum, exams, or student data securely.",
    border: "border-purple-700 shadow-purple-500/20",
  },
  {
    num: "3",
    label: "Deploy",
    desc: "Invite teachers and students via email or LMS integration.",
    border: "border-blue-500 shadow-blue-500/20",
  },
  {
    num: "4",
    label: "Analyze",
    desc: "Monitor progress via the dashboard and improve outcomes.",
    border: "border-green-500 shadow-green-500/20",
  },
];

const features = [
  {
    eyebrow: "For Administrators",
    eyebrowColor: "text-purple-700",
    title: "Complete Oversight Dashboard",
    body: "Get a bird's-eye view of your entire institution. Track teacher activity, student attendance, and overall academic performance metrics in real-time.",
    bullets: [
      "Department-level analytics",
      "Easy student onboarding",
      "Report generation",
    ],
    img: "https://placehold.co/600x400/white/e2e8f0?text=Admin+Dashboard+Preview",
    reverse: false,
  },
  {
    eyebrow: "For Teachers",
    eyebrowColor: "text-yellow-600",
    title: "Automated Lesson Plans & Grading",
    body: "Reduce administrative burden. ULO AI assists teachers in generating lesson plans, grading quizzes automatically, and identifying students who need extra help.",
    bullets: [
      "AI-assisted grading",
      "Resource library access",
      "Student progress tracking",
    ],
    img: "https://placehold.co/600x400/white/e2e8f0?text=Teacher+Tools+Preview",
    reverse: true,
  },
];

const faqItems = [
  {
    q: "How does ULO AI integrate with our current LMS?",
    a: "We offer API integrations for Moodle, Blackboard, and Canvas. Alternatively, you can use ULO AI as a standalone web portal.",
  },
  {
    q: "Is student data secure?",
    a: "Yes. We use bank-level encryption and comply with GDPR and local data protection regulations to ensure data is never compromised.",
  },
  {
    q: "What is the cost for a school partnership?",
    a: "Pricing depends on the number of students and modules required. Fill out the form above for a custom quote.",
  },
  {
    q: "Do you provide training for teachers?",
    a: "Yes! Every institutional partnership includes a dedicated onboarding session and training materials for staff.",
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
    name: "institution",
    label: "Institution Name",
    type: "text",
    placeholder: "University of ...",
    required: true,
    full: true,
  },
  {
    name: "role",
    label: "Role / Job Title",
    type: "select",
    required: true,
    full: true,
    options: [
      "Principal / Dean",
      "Administrator",
      "Teacher / Professor",
      "IT Department",
      "Other",
    ],
  },
  {
    name: "email",
    label: "Institutional Email",
    type: "email",
    placeholder: "admin@school.edu",
    required: true,
    full: true,
  },
  {
    name: "message",
    label: "Message (Optional)",
    type: "textarea",
    placeholder: "Tell us about your needs...",
    full: true,
  },
];

const InstitutionalPartners = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 rounded-l-full blur-3xl transform translate-x-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl transform -translate-x-10 translate-y-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-white/10 text-yellow-400">
              For Schools &amp; Universities
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              Empowering Institutions with{" "}
              <span className="text-yellow-400">Intelligent Learning</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Partner with ULO AI to provide your students with AI-driven
              personalized learning paths, exam preparation, and real-time
              performance analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#partner-form"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition shadow-lg"
              >
                Partner With Us
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 rounded-full border border-gray-400 font-semibold hover:bg-white/10 hover:border-white transition"
              >
                How It Works
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
              <img
                src="https://placehold.co/800x600/2a1b3d/FFF?text=Student+Performance+Dashboard"
                alt="ULO AI Dashboard"
                className="rounded-xl w-full h-auto shadow-inner"
              />
              <div
                className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-xl shadow-xl flex items-center gap-3"
                style={{ animationDuration: "3s" }}
              >
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <i className="fas fa-chart-line" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">
                    Performance
                  </p>
                  <p className="text-lg font-bold">+30% Improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits grid ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Institutions Choose ULO AI
            </h2>
            <p className="text-gray-600">
              Give your institution the competitive edge with tools designed for
              modern education.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition border border-transparent hover:border-gray-100 group"
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

      {/* ─── How it works ─── */}
      <section
        id="how-it-works"
        className="py-20 bg-gray-900 text-white relative overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Seamless Integration
            </h2>
            <p className="text-gray-400">
              Get your institution running on ULO AI in four simple steps.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {howSteps.map((s) => (
              <div key={s.label}>
                <div
                  className={`w-24 h-24 bg-gray-800 border-4 ${s.border} rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg`}
                >
                  {s.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.label}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Feature split sections ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {features.map((f) => (
            <div
              key={f.title}
              className={`flex flex-col ${f.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
            >
              <div className="lg:w-1/2">
                <span
                  className={`${f.eyebrowColor} font-bold uppercase text-sm tracking-wider mb-2 block`}
                >
                  {f.eyebrow}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {f.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6">{f.body}</p>
                <ul className="space-y-2 text-gray-700">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <i className="fas fa-check text-green-500" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={f.img}
                  alt={f.title}
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Partner form ─── */}
      <div id="partner-form">
        <PartnerForm
          sidebarTitle="Partner with us"
          sidebarItems={[
            { icon: "fas fa-envelope", text: "partners@uloai.com" },
            { icon: "fas fa-phone", text: "+1 (888) 123-4567" },
            {
              icon: "fas fa-quote-left",
              text: '"The best decision we made for our students." — Green Valley High',
            },
          ]}
          formTitle="Request a Demo"
          fields={formFields}
          submitLabel="Request Demo"
          accentClass="bg-purple-900"
        />
      </div>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm p-4 cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex justify-between items-center font-semibold text-gray-800">
                  {item.q}
                  <span
                    className={`transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  >
                    <i className="fas fa-chevron-down" />
                  </span>
                </div>
                {openFaq === i && (
                  <p className="text-gray-600 mt-4 leading-relaxed">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InstitutionalPartners;
