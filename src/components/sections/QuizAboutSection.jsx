/* ── Quiz About Section ────────────────────────────────────────────────── */
const QuizAboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              About the Competition
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The ULO AI Monthly Quiz Competition is a premier academic challenge designed to help students sharpen their knowledge and compete at the highest level.
            </p>
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: What is it */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-lightbulb text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What's the Quiz?</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A month-long academic competition held every first week of the month. Test your knowledge, showcase your skills, and compete with thousands of students across multiple subjects. Win prizes and recognition for excellence.
              </p>
            </div>

            {/* Right: Upcoming edition */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border border-yellow-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-calendar-check text-white text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Next Edition</h3>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>April 2026 Edition</strong>
                </p>
                <p className="text-gray-700">
                  <strong>Start Date:</strong> Monday, April 6, 2026
                </p>
                <p className="text-gray-700">
                  <strong>Final Round:</strong> Friday, April 10, 2026
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  ✨ Registration opens soon. Get ready to compete!
                </p>
              </div>
            </div>
          </div>

          {/* Key highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: "fas fa-users", label: "Students", value: "Thousands" },
              { icon: "fas fa-book", label: "Subjects", value: "Multiple" },
              { icon: "fas fa-star", label: "Difficulty", value: "Challenging" },
              { icon: "fas fa-gift", label: "Rewards", value: "₦170,000" },
            ].map((highlight, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 text-center">
                <i className={`${highlight.icon} text-3xl text-purple-600 mb-3`}></i>
                <p className="text-gray-600 text-sm font-medium mb-1">{highlight.label}</p>
                <p className="text-lg font-bold text-gray-900">{highlight.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizAboutSection;
