import { useState } from "react";

/* ── Quiz FAQ Section ──────────────────────────────────────────────────── */
const quizFaqs = [
  {
    q: "Who can participate in the ULO AI Quiz Competition?",
    a: "Any student interested in academic competition can participate! Whether you're in secondary school, university, or preparing for entrance exams, you're welcome to register. All you need is internet access to take the quizzes.",
  },
  {
    q: "How do I register?",
    a: "Simply fill out our registration form with your name, email, phone number, and school. Select your preferred subjects (English is mandatory, choose 2 optional subjects), and submit. You'll then be directed to the App or website portal to complete payment. You'll receive immediate confirmation once registration is complete.",
  },
  {
    q: "How are winners selected?",
    a: "Winners are determined by cumulative performance across all three rounds (Monday, Wednesday, Friday). Each quiz you take contributes to your total score. The student with the highest cumulative score wins 1st place (₦100,000), second place wins ₦50,000, and third place wins ₦20,000.",
  },
  {
    q: "Can I choose my own quiz subjects?",
    a: "Yes! English Language is mandatory for all participants. You must then choose 2 additional subjects from our list (Mathematics, Physics, Chemistry, Biology, Civic Education, Economics, Government, Literature in English, or History) that interest you.",
  },
  {
    q: "What happens if I miss one of the quiz days?",
    a: "While we encourage participation in all three rounds, missing a day will affect your cumulative score. Your final ranking is based on your total performance across available rounds. Plan ahead and ensure you can attend at least two rounds.",
  },
  {
    q: "How will results be announced?",
    a: "Official results and announcements will be made on April 13, 2026. Winners will be notified via email and SMS. Results will also be published on the ULO AI website with a leaderboard featuring top 100 performers.",
  },
  {
    q: "Can I take the quizzes on my phone?",
    a: "Yes! The ULO AI platform is fully mobile-responsive. You can take quizzes on your phone, tablet, or computer. Ensure you have a stable internet connection for the best experience.",
  },
  {
    q: "What if I have technical difficulties during a quiz?",
    a: "Contact our support team immediately at support@uloai.com or via WhatsApp at +234 906 161 6524. We'll help troubleshoot the issue. If you lose connection, don't worry—your responses are auto-saved.",
  },
  {
    q: "Will there be monthly competitions after April?",
    a: "Yes! The ULO AI Quiz Competition runs every month. If you register for April, you'll have the opportunity to compete in future editions and build your ranking over time.",
  },
];

const QuizFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about the ULO AI Monthly Quiz Competition.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {quizFaqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition hover:shadow-md"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group hover:bg-gray-50"
              >
                <span className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors text-lg">
                  {faq.q}
                </span>
                <span
                  className={`text-purple-600 transition-transform duration-300 flex-shrink-0 ml-4 text-2xl ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  <i className="fas fa-plus"></i>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-64" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-yellow-50 rounded-2xl p-10 text-center border-2 border-purple-200">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-700 mb-6">
            Can't find the answer you're looking for? Our support team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:support@uloai.com"
              className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition"
            >
              <i className="fas fa-envelope"></i>
              support@uloai.com
            </a>
            <span className="hidden sm:inline text-gray-400">•</span>
            <a
              href="https://wa.me/2349061616524"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-800 transition"
            >
              <i className="fas fa-phone"></i>
              WhatsApp: +234 906 161 6524
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizFAQSection;
