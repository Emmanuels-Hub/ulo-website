/* ── Features Grid (4 Cards) ─────────────────────────────────────────── */
const features = [
  {
    icon: "fas fa-robot",
    iconBg: "bg-purple-100 text-purple-600",
    imgBorder: "border-purple-50",
    title: "AI Chat Assistance",
    desc: "Your 24/7 personal tutor. Get instant, accurate answers and break down complex topics into simple explanations.",
    img: "https://img.freepik.com/free-photo/portrait-smiling-young-woman_23-2148859448.jpg",
    delay: "anim-delay-100",
  },
  {
    icon: "fas fa-file-alt",
    iconBg: "bg-yellow-100 text-yellow-600",
    imgBorder: "border-yellow-50",
    title: "Question Generator",
    desc: "Upload any textbook or note, and ULO AI automatically generates exam-style questions to test your knowledge.",
    img: "https://img.freepik.com/free-photo/chess-concept-business-strategy-leadership-success_53876-12038.jpg",
    delay: "anim-delay-200",
  },
  {
    icon: "fas fa-clock",
    iconBg: "bg-pink-100 text-pink-600",
    imgBorder: "border-pink-50",
    title: "Exam Simulator",
    desc: "Practice under realistic, timed conditions for exams like WAEC and JAMB to build confidence and speed.",
    img: "https://img.freepik.com/free-photo/excited-woman-using-smartphone_23-2148859475.jpg",
    delay: "anim-delay-300",
  },
  {
    icon: "fas fa-chart-line",
    iconBg: "bg-blue-100 text-blue-600",
    imgBorder: "border-blue-50",
    title: "Performance Tracker",
    desc: "Track your progress over time with detailed analytics. Identify strengths and weaknesses to study smarter.",
    img: "https://img.freepik.com/free-photo/excited-businessman-laptop_23-2148859432.jpg",
    delay: "anim-delay-300",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-20 fade-in-up">
          <span className="text-purple-600 font-bold tracking-wider uppercase text-sm">
            Empower Your Education
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 leading-tight">
            What ULO AI Can Do For <br />
            <span className="relative inline-block z-10">
              <span className="relative z-10">Your Success</span>
              <span className="absolute left-0 bottom-1 w-full h-3 bg-yellow-300 opacity-60 -z-10 transform -rotate-1" />
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in-up ${f.delay} border border-gray-100`}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div
                  className={`w-16 h-16 ${f.iconBg} rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-inner`}
                >
                  <i className={f.icon} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {f.desc}
                </p>
                <div
                  className={`mt-auto w-24 h-24 rounded-full overflow-hidden border-4 ${f.imgBorder} shadow-md`}
                >
                  <img
                    src={f.img}
                    alt={f.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
