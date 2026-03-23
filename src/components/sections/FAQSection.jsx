import { useState } from "react";

/* ── FAQ Accordion Section ──────────────────────────────────────────── */
const faqs = [
  {
    q: "Is ULO AI free to use?",
    a: "Yes! We offer a free tier that gives you access to the Exam Simulator and basic AI Chat. We also have a Premium plan for unlimited question generation and advanced analytics.",
  },
  {
    q: "Which exams does the simulator cover?",
    a: "Currently, we support major regional exams including WAEC, JAMB, and NECO, as well as general university entrance aptitude tests.",
  },
  {
    q: "Can I use the app offline?",
    a: "You need an internet connection for the AI features, but downloaded practice exams can be taken offline and synced later.",
  },
  {
    q: "How do I upload my notes?",
    a: "Simply take a picture of your notebook or upload a PDF/Word document directly in the app. Our AI will scan it and generate questions instantly.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Everything you need to know about the ULO AI Platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
              >
                <span className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {faq.q}
                </span>
                <span
                  className={`text-purple-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  <i className="fas fa-plus" />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-gray-600">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
