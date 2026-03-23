/* ── Why Choose ULO Section ─────────────────────────────────────────── */
const floatingCards = [
  {
    border: "border-l-4 border-pink-400",
    iconBg: "bg-pink-50 text-pink-500",
    icon: "fas fa-comments",
    title: "AI Chat Assistant",
    subtitle: "24/7 personalized academic support.",
    animation: "animate-float-slow",
  },
  {
    border: "border-l-4 border-yellow-400",
    iconBg: "bg-yellow-50 text-yellow-500",
    icon: "fas fa-hourglass-half",
    title: "Exam Simulator",
    subtitle: "Real-time practice for WAEC & JAMB.",
    animation: "animate-float-fast",
    extra: "lg:-mr-12",
  },
  {
    border: "border-l-4 border-purple-500",
    iconBg: "bg-purple-50 text-purple-500",
    icon: "fas fa-magic",
    title: "Magic Question Gen",
    subtitle: "Turn notes into quizzes instantly.",
    animation: "animate-float-medium",
  },
];

const coreFeatures = [
  {
    num: "1",
    bg: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    title: "Instant Support",
    desc: "Get immediate help with difficult concepts without waiting for office hours.",
  },
  {
    num: "2",
    bg: "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white",
    title: "Exam Readiness",
    desc: "Reduce anxiety by practicing with realistic simulations before the big day.",
  },
  {
    num: "3",
    bg: "bg-pink-100 text-pink-600 group-hover:bg-pink-500 group-hover:text-white",
    title: "Smart Analytics",
    desc: "Visualize your learning curve and focus exactly on what needs improvement.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Right background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-50 to-transparent opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── Left: Floating cards ── */}
          <div className="relative flex flex-col items-center lg:items-end space-y-6">
            {/* Background blob */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink-100 rounded-full blur-3xl opacity-50 -z-10" />

            {floatingCards.map((card, i) => (
              <div
                key={i}
                className={`${card.animation} bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 w-full max-w-sm ${card.border} z-${i === 1 ? "10" : "20"} ${card.extra ?? ""}`}
              >
                <div
                  className={`w-12 h-12 flex-shrink-0 ${card.iconBg} rounded-full flex items-center justify-center text-xl`}
                >
                  <i className={card.icon} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{card.title}</h4>
                  <p className="text-xs text-gray-500">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: Text content ── */}
          <div className="space-y-8 fade-in-up anim-delay-200">
            <div>
              <span className="text-yellow-500 font-bold uppercase tracking-wide text-sm">
                Why Choose ULO?
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 leading-tight">
                Core Features That <br />
                <span className="text-purple-700">Empower Your Learning</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              ULO AI is designed to solve major academic challenges by providing
              intelligent and accessible tools right on your mobile phone.
            </p>

            <div className="space-y-6">
              {coreFeatures.map((f, i) => (
                <div key={i} className="flex group">
                  <div className="flex-shrink-0 mr-4">
                    <span
                      className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition duration-300 ${f.bg}`}
                    >
                      {f.num}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition">
                      {f.title}
                    </h4>
                    <p className="text-gray-500 mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#"
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-800 transition transform hover:-translate-y-1"
              >
                Explore All Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
