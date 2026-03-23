/* ── Quiz Hero Section ─────────────────────────────────────────────────── */
const QuizHeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        {/* ── Left Content ── */}
        <div>
          {/* Badge */}
          <div className="fade-in-up flex items-center space-x-3 mb-6">
            <span className="bg-yellow-400 text-purple-900 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              🎯 Monthly Competition
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-in-up anim-delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
            ULO AI Monthly
            <br />
            <span className="text-yellow-400 relative inline-block">
              Quiz Challenge
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-yellow-300 opacity-40"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="fade-in-up anim-delay-200 text-gray-200 text-lg mb-4 leading-relaxed max-w-lg">
            Test your knowledge, compete with peers, and win prizes! Join thousands of students in a thrilling academic competition.
          </p>

          {/* Key metrics */}
          <div className="fade-in-up anim-delay-200 mb-8 space-y-2 text-gray-100">
            <p className="flex items-center gap-3">
              <i className="fas fa-calendar-alt text-yellow-400 text-xl"></i>
              <strong>Starts Monday, April 6, 2026</strong>
            </p>
            <p className="flex items-center gap-3">
              <i className="fas fa-trophy text-yellow-400 text-xl"></i>
              <strong>Total Prize Pool: ₦170,000</strong>
            </p>
            <p className="flex items-center gap-3">
              <i className="fas fa-users text-yellow-400 text-xl"></i>
              <strong>Multi-day Competition (Mon, Wed, Fri)</strong>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-up anim-delay-300 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#register"
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-8 py-3.5 rounded-xl shadow-lg font-bold transition transform hover:-translate-y-0.5 flex justify-center items-center gap-3"
            >
              <span>Register Now</span>
              <i className="fas fa-arrow-right" />
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto text-yellow-300 font-semibold hover:text-yellow-200 flex items-center gap-2 px-6 py-3 transition border-2 border-yellow-400 rounded-xl"
            >
              <i className="fas fa-info-circle text-lg" />
              <span>Learn More</span>
            </a>
          </div>
        </div>

        {/* ── Right: Visual Content ── */}
        <div className="relative fade-in-up anim-delay-200 mt-10 md:mt-0 flex justify-center">
          {/* Icon / Illustration */}
          <div className="relative z-10">
            <div className="w-72 h-72 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-105 transition duration-500">
              <i className="fas fa-graduation-cap text-white text-8xl opacity-80"></i>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute top-10 right-10 bg-white rounded-2xl px-6 py-4 shadow-xl z-20 transform animate-bounce">
            <p className="text-sm font-bold text-purple-900">🥇 Top Prize</p>
            <p className="text-lg font-black text-yellow-500">₦100,000</p>
          </div>

          <div className="absolute bottom-10 left-10 bg-white rounded-2xl px-6 py-4 shadow-xl z-20 transform animate-bounce animation-delay-1000">
            <p className="text-sm font-bold text-purple-900">Subjects</p>
            <p className="text-lg font-black text-purple-600">Multiple</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizHeroSection;
