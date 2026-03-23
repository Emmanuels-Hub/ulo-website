import { useState, useMemo } from "react";

const faqData = [
  {
    category: "Getting Started",
    icon: "fas fa-rocket",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    faqs: [
      {
        question: "How do I create an account?",
        answer:
          "Click on the Register button, fill in your details (name, email, password), and verify your email address. Once verified, you can log in and start using ULO.",
      },
      {
        question: "Is ULO free to use?",
        answer:
          "ULO offers both free and premium features. Basic practice questions and some exams are free. Premium membership unlocks advanced features, detailed performance analytics, and unlimited access to all content.",
      },
      {
        question: "What exams does ULO support?",
        answer:
          "ULO provides comprehensive preparation for major Nigerian and international exams including WAEC, NECO, JAMB, UTME, Post-UTME, and more.",
      },
      {
        question: "Can I access ULO on mobile?",
        answer:
          "Yes! ULO is fully responsive and works on all mobile devices. For the best experience, you can also access it through your browser on tablet or desktop.",
      },
    ],
  },
  {
    category: "Account & Authentication",
    icon: "fas fa-user-lock",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    faqs: [
      {
        question: "How do I reset my password?",
        answer:
          "Click 'Forgot Password' on the login page, enter your email, and we'll send you a reset link. Follow the link to create a new password.",
      },
      {
        question: "How do I update my profile information?",
        answer:
          "Go to Settings > Profile to update your name, email, profile picture, and other personal information. Changes are saved instantly.",
      },
      {
        question: "Can I delete my account?",
        answer:
          "Yes. Go to Settings > Account, scroll to the danger zone, and click 'Delete Account'. Please note that this action cannot be undone.",
      },
      {
        question: "What should I do if my account is locked?",
        answer:
          "Account locks occur after multiple failed login attempts for security. Wait 30 minutes and try again, or click 'Forgot Password' to regain access.",
      },
      {
        question: "How do I enable two-factor authentication?",
        answer:
          "Go to Settings > Security, enable Two-Factor Authentication, and follow the steps to set up verification via email or authenticator app.",
      },
    ],
  },
  {
    category: "Subscription & Billing",
    icon: "fas fa-credit-card",
    color: "text-green-600",
    bgColor: "bg-green-100",
    faqs: [
      {
        question: "What's included in Premium membership?",
        answer:
          "Premium includes unlimited access to all exam questions, detailed performance analytics, AI chat support, study plans, competition access, and priority customer support.",
      },
      {
        question: "How much does Premium cost?",
        answer:
          "Visit our Pricing page to see current pricing options. We offer monthly, quarterly, and annual subscription plans with flexible payment methods.",
      },
      {
        question: "How do I cancel my subscription?",
        answer:
          "Go to Membership page, find your active subscription, and click 'Cancel Subscription'. You'll retain access until your current billing period ends.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "We offer a 7-day money-back guarantee if you're not satisfied. Contact support@uloai.com with your order details for a refund.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept Paystack, Google Play, and other major payment methods. Your payment information is encrypted and secure.",
      },
      {
        question: "How do I view my subscription status?",
        answer:
          "Go to Membership page under your portal dashboard. You'll see your current plan, expiry date, and auto-renewal status.",
      },
    ],
  },
  {
    category: "Learning & Practice",
    icon: "fas fa-book-open",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    faqs: [
      {
        question: "How do I start practicing?",
        answer:
          "Go to Practice > Select a Category > Choose a Subject > Pick a Topic. You can then start answering questions with instant feedback.",
      },
      {
        question: "Can I save questions for later?",
        answer:
          "Yes! Click the bookmark icon on any question to save it. Access your saved questions from Saved Questions in your dashboard.",
      },
      {
        question: "How does the AI chat feature work?",
        answer:
          "Click on AI Chat in your dashboard. Ask questions about any topic, and our AI will provide detailed explanations, examples, and study tips.",
      },
      {
        question: "What is the Study Plan feature?",
        answer:
          "Study Plan creates a personalized learning schedule based on your goals and available time. It recommends daily topics and tracks your progress.",
      },
      {
        question: "How are my answers graded?",
        answer:
          "Answers are graded instantly as you complete each question. You'll see the correct answer, explanation, and your performance score.",
      },
      {
        question: "Can I retake exams?",
        answer:
          "Yes! You can retake unlimited practice exams. Each attempt is tracked, and you can review your performance history.",
      },
    ],
  },
  {
    category: "Performance & Analytics",
    icon: "fas fa-chart-line",
    color: "text-red-600",
    bgColor: "bg-red-100",
    faqs: [
      {
        question: "How do I track my progress?",
        answer:
          "Visit the Performance page to view detailed analytics including accuracy rate, time spent, subject performance, and improvement trends.",
      },
      {
        question: "What do the ranks and scores mean?",
        answer:
          "Ranks are based on your total points across all activities. Scores reflect your performance in specific exams or quizzes. Higher scores indicate better understanding of topics.",
      },
      {
        question: "How is the leaderboard calculated?",
        answer:
          "The leaderboard ranks users by total points earned from correct answers, competitions, and achievements. Rankings update in real-time.",
      },
      {
        question: "Can I see how I compare to other students?",
        answer:
          "Yes! Visit the Leaderboard to see how you rank globally or by subject. You can also see comparisons with your study group if you've joined one.",
      },
      {
        question: "How do I access my exam history?",
        answer:
          "Click History in your dashboard to see all completed exams, quizzes, and practice sessions. Filter by subject, date, or score.",
      },
    ],
  },
  {
    category: "Technical Issues",
    icon: "fas fa-tools",
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
    faqs: [
      {
        question: "The page is loading slowly. What can I do?",
        answer:
          "Try clearing your browser cache, disabling browser extensions, checking your internet connection, or using a different browser. Contact support if the issue persists.",
      },
      {
        question: "I'm getting an error message. What should I do?",
        answer:
          "Note the exact error message and contact support@uloai.com with details. Include your browser type, device, and when the error occurred.",
      },
      {
        question: "Why was I logged out unexpectedly?",
        answer:
          "Sessions expire after 30 minutes of inactivity for security. You can also be logged out if you log in on another device. Simply log in again.",
      },
      {
        question: "The app is not working on my browser. Why?",
        answer:
          "ULO works best on modern browsers (Chrome, Firefox, Safari, Edge). Update your browser to the latest version and clear cache. Disable VPN/proxy services.",
      },
      {
        question: "How do I report a bug?",
        answer:
          "Email support@uloai.com with details of the bug, steps to reproduce it, your device info, and browser. Include screenshots if possible.",
      },
      {
        question: "My answers aren't being saved. What's happening?",
        answer:
          "Ensure you have a stable internet connection. Refresh the page and try again. If the issue persists, clear your browser cache or try a different browser.",
      },
    ],
  },
  {
    category: "Competitions & Achievements",
    icon: "fas fa-trophy",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    faqs: [
      {
        question: "How do I join a competition?",
        answer:
          "Visit Competitions in your dashboard, browse available competitions, and click Join. Follow the rules and schedule for each competition.",
      },
      {
        question: "What are achievement badges?",
        answer:
          "Badges are awarded for milestones like completing 10 exams, achieving 90% accuracy, or winning competitions. View your achievements in your profile.",
      },
      {
        question: "Can I win prizes?",
        answer:
          "Yes! Active competitions have prizes. Check the Competitions page for details on current prize pools and eligibility criteria.",
      },
      {
        question: "How are competition winners determined?",
        answer:
          "Winners are determined by highest score, fastest time, or accuracy depending on competition type. Rankings update in real-time.",
      },
    ],
  },
  {
    category: "Privacy & Security",
    icon: "fas fa-shield-alt",
    color: "text-green-700",
    bgColor: "bg-green-50",
    faqs: [
      {
        question: "Is my data secure?",
        answer:
          "Yes. We use industry-standard encryption (SSL/TLS) to protect all data. Your passwords are hashed and never stored in plain text. See our Privacy Policy for details.",
      },
      {
        question: "What data does ULO collect?",
        answer:
          "We collect your name, email, learning progress, and performance data to improve your experience. We never sell your data to third parties.",
      },
      {
        question: "Can I download my data?",
        answer:
          "Yes. Go to Settings > Privacy, and click 'Download My Data'. You'll receive a file with all your personal information and learning records.",
      },
      {
        question: "How long is my data kept after account deletion?",
        answer:
          "After account deletion, your personal data is permanently removed within 30 days. Anonymized performance data may be retained for analytics.",
      },
    ],
  },
];

const supportOptions = [
  {
    icon: "fas fa-envelope",
    title: "Email Support",
    description: "Get a response within 24 hours",
    contact: "support@uloai.com",
    badge: "24/7 Available",
  },
  {
    icon: "fas fa-phone-alt",
    title: "Phone Support",
    description: "Talk to our team directly",
    contact: "+234 9061616524",
    badge: "Mon-Fri 8am-5pm",
  },
  {
    icon: "fas fa-comments",
    title: "Live Chat",
    description: "Chat with support agents",
    contact: "Available in dashboard",
    badge: "During business hours",
  },
];

const HelpAndSupport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Getting Started");

  // Filter FAQs based on search term
  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return faqData;

    const search = searchTerm.toLowerCase();
    return faqData
      .map((category) => ({
        ...category,
        faqs: category.faqs.filter(
          (faq) =>
            faq.question.toLowerCase().includes(search) ||
            faq.answer.toLowerCase().includes(search)
        ),
      }))
      .filter((category) => category.faqs.length > 0);
  }, [searchTerm]);

  const activeCategoryData = filteredFaqs.find((c) => c.category === activeCategory);

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl -top-20 -left-20" />
          <div className="absolute w-72 h-72 bg-yellow-300 rounded-full blur-3xl bottom-10 right-10" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-white/20">
              Help Center
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              How Can We Help?
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-light">
              Find answers to common questions, troubleshoot issues, or reach out to our support team
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help... (e.g., password, billing, exam)"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setActiveCategory(null);
                }}
                className="w-full px-6 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
              />
              <i className="fas fa-search absolute right-6 top-1/2 transform -translate-y-1/2 text-white/60 text-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Categories Navigation */}
        {!searchTerm && (
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {faqData.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 ${
                    activeCategory === category.category
                      ? `${category.bgColor} ${category.color} shadow-lg`
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <i className={`${category.icon} mr-2`} />
                  {category.category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FAQs Section */}
        <div className="mb-20">
          {searchTerm ? (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Search Results
              </h2>
              <p className="text-gray-600">
                Found {filteredFaqs.reduce((acc, c) => acc + c.faqs.length, 0)} results for "{searchTerm}"
              </p>
            </div>
          ) : activeCategoryData ? (
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl ${activeCategoryData.bgColor} flex items-center justify-center`}>
                  <i className={`${activeCategoryData.icon} ${activeCategoryData.color} text-2xl`} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {activeCategoryData.category}
                  </h2>
                  <p className="text-gray-600">
                    {activeCategoryData.faqs.length} frequently asked questions
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {/* FAQ Items */}
          <div className="space-y-4">
            {(searchTerm ? filteredFaqs : activeCategoryData ? [activeCategoryData] : []).map(
              (category) =>
                category.faqs.length > 0 && (
                  <div key={category.category}>
                    {searchTerm && (
                      <h3 className="text-lg font-bold text-gray-900 mb-4 mt-8 first:mt-0">
                        {category.category}
                      </h3>
                    )}
                    <div className="space-y-3">
                      {category.faqs.map((faq, idx) => {
                        const faqId = `${category.category}-${idx}`;
                        const isExpanded = expandedFaq === faqId;

                        return (
                          <div
                            key={faqId}
                            className="border border-gray-200 rounded-lg overflow-hidden transition hover:shadow-md bg-white"
                          >
                            <button
                              onClick={() =>
                                setExpandedFaq(isExpanded ? null : faqId)
                              }
                              className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition"
                            >
                              <span className="text-left font-semibold text-gray-900 text-lg">
                                {faq.question}
                              </span>
                              <div
                                className={`text-purple-600 text-xl transition transform ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              >
                                <i className="fas fa-chevron-down" />
                              </div>
                            </button>

                            {isExpanded && (
                              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                <p className="text-gray-700 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
            )}
          </div>

          {filteredFaqs.length === 0 && searchTerm && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-search text-gray-400 text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                We couldn't find any answers matching "{searchTerm}". Try different keywords.
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Support Options */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Didn't find what you're looking for?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our support team is here to help. Reach out using one of these methods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${option.icon} text-purple-600 text-2xl`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {option.badge}
                  </span>
                  <p className="text-gray-900 font-semibold">{option.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Tips */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-2xl border border-blue-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <i className="fas fa-lightbulb text-yellow-500 text-3xl" />
              Quick Tips for Better Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Keep your profile updated
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Accurate information helps us provide better recommendations
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Enable notifications
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Stay updated on new exams, competitions, and achievements
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Use study plans
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Create personalized study schedules for consistent progress
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Clear cache regularly
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Clearing browser cache improves app performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelpAndSupport;
