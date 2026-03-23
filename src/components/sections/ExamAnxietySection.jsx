/* ── Overcome Exam Anxiety Section ──────────────────────────────────── */
const ExamAnxietySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50 overflow-hidden relative">
      {/* Background blob */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* ── Left: Text ── */}
        <div className="fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm font-bold tracking-wide text-gray-700 uppercase">
              #1 Best Performance
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Overcome Exam Anxiety <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Master Your Preparation
            </span>
          </h2>

          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Students often go into exams without proper practice of the format,
            time pressure, or question structure, which leads to high levels of
            anxiety. ULO AI mimics real exam conditions to build your
            confidence.
          </p>

          {/* Feature rows */}
          <div className="group flex items-start mb-8 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
            <div className="flex-shrink-0 mt-1 mr-5">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <i className="fas fa-check-circle text-xl" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition">
                Realistic Practice
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                The Exam Simulator allows you to practice under timed, realistic
                conditions to build your time management and question-solving
                skills.
              </p>
            </div>
          </div>

          <div className="group flex items-start p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
            <div className="flex-shrink-0 mt-1 mr-5">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <i className="fas fa-chart-pie text-xl" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition">
                Performance Tracking
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our dashboard tracks your progress over time, so you can see
                your strengths and weaknesses and know exactly what to study to
                improve.
              </p>
            </div>
          </div>
        </div>

        {/* ── Right: Illustration ── */}
        <div className="relative fade-in-up anim-delay-200">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-3xl opacity-50 transform scale-90 animate-pulse" />
          <img
            src="https://apptek.radiantthemes.com/wp-content/uploads/2022/11/image-section-3.webp"
            alt="App Dashboard"
            className="relative z-10 w-full max-w-lg mx-auto lg:mx-0 animate-float-slow drop-shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ExamAnxietySection;
