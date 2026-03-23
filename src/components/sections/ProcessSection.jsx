/* ── Process / 3-Steps Section ──────────────────────────────────────── */
const steps = [
  {
    img: "https://apptek.radiantthemes.com/wp-content/uploads/2022/08/One.png",
    alt: "Step One",
    bg: "bg-yellow-100",
    title: "Download the App",
    desc: "Get started by downloading the ULO AI mobile app from your preferred app store. Available on iOS and Android.",
  },
  {
    img: "https://apptek.radiantthemes.com/wp-content/uploads/2022/08/Two.png",
    alt: "Step Two",
    bg: "bg-purple-100",
    title: "Create Your Profile",
    desc: "Set up your personalized learning profile to access our suite of tools, including the AI Chat Tutor and Exam Simulator.",
  },
  {
    img: "https://apptek.radiantthemes.com/wp-content/uploads/2022/08/Three.png",
    alt: "Step Three",
    bg: "bg-pink-100",
    title: "Start Learning",
    desc: "Instantly generate questions from your documents or simulate real exam conditions to prepare effectively.",
  },
];

const delayClasses = ["anim-delay-100", "anim-delay-200", "anim-delay-300"];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-white relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-purple-600 font-bold tracking-wider uppercase text-sm">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Start Learning in 3 Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center md:text-left">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`group fade-in-up ${delayClasses[i]} p-6 rounded-2xl hover:bg-gray-50 transition duration-300 border border-transparent hover:border-gray-100`}
            >
              <div className="flex flex-col md:items-start items-center">
                <div className="w-16 h-16 mb-6 relative">
                  <div
                    className={`absolute inset-0 ${step.bg} rounded-full transform group-hover:scale-110 transition duration-300`}
                  />
                  <img
                    src={step.img}
                    alt={step.alt}
                    className="relative z-10 w-full h-full object-contain p-3"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
