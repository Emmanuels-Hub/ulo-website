/* ── Quiz How It Works Section ─────────────────────────────────────────── */
const QuizHowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: "fas fa-pencil-alt",
      title: "Register",
      description: "Sign up with your details and choose your preferred quiz subjects. Complete your registration to get started.",
    },
    {
      number: "2",
      icon: "fas fa-book-open",
      title: "Take Quizzes",
      description: "Compete across 3 rounds (Monday, Wednesday, Friday). Each day, take 1 mandatory English quiz + 2 optional subjects.",
    },
    {
      number: "3",
      icon: "fas fa-chart-line",
      title: "Progress & Score",
      description: "Your performance across rounds determines advancement. Top performers advance to the final round.",
    },
    {
      number: "4",
      icon: "fas fa-trophy",
      title: "Win Prizes",
      description: "Final winners are crowned in three tiers: 1st Place (₦100,000), 2nd Place (₦50,000), 3rd Place (₦20,000).",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A simple 4-step process to get you competing and winning.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 h-full">
                {/* Step number circle */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-purple-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-4xl text-yellow-400 mb-4 mt-2">
                  <i className={step.icon}></i>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (except last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Daily structure detail */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-yellow-50 rounded-2xl p-10 border border-purple-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            📅 Daily Quiz Structure
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Monday - Round 1", "Wednesday - Round 2", "Friday - Final"].map(
              (day, i) => (
                <div key={i} className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">{day}</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span className="text-gray-700">
                        <strong>1 Mandatory:</strong> English Language
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-500 font-bold">✓</span>
                      <span className="text-gray-700">
                        <strong>2 Optional:</strong> Choose your subjects
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 font-bold">✓</span>
                      <span className="text-gray-700">
                        <strong>Score:</strong> Performance counts
                      </span>
                    </li>
                  </ul>
                </div>
              )
            )}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-900 text-center">
              <i className="fas fa-info-circle mr-2"></i>
              <strong>Advancement:</strong> Your cumulative scores across all three rounds determine who advances to the final rankings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizHowItWorksSection;
