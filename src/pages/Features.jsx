const featureSections = [
  {
    icon: "fas fa-brain",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
    glowFrom: "from-yellow-300",
    glowTo: "to-orange-300",
    title: "AI-Powered Insights",
    body: "Stop guessing and start knowing. ULO analyzes your workflow patterns to suggest optimisations, predict bottlenecks, and automate mundane tasks.",
    bullets: [
      "Smart Task Prioritization",
      "Automated Reporting",
      "Workflow Suggestions",
    ],
    img: "https://placehold.co/600x400/white/e2e8f0?text=AI+Feature+Screenshot",
    imgAlt: "AI Features",
    reverse: false,
    bg: "bg-white",
  },
  {
    icon: "fas fa-users-cog",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    glowFrom: "from-purple-600",
    glowTo: "to-blue-500",
    title: "Seamless Collaboration",
    body: "Keep everyone on the same page. Whether your team is in the office or remote, ULO provides real-time updates, chat, and file sharing in one place.",
    learnMore: "#",
    img: "https://placehold.co/600x400/white/e2e8f0?text=Collaboration+Screenshot",
    imgAlt: "Collaboration Features",
    reverse: true,
    bg: "bg-gray-50",
  },
  {
    icon: "fas fa-mobile-alt",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    glowFrom: "from-pink-400",
    glowTo: "to-yellow-300",
    title: "Mobile Freedom",
    body: "Work doesn't stop when you leave your desk. Our mobile app gives you full access to your projects, tasks, and team communications on the go.",
    img: "https://placehold.co/600x400/white/e2e8f0?text=Mobile+App+Screenshot",
    imgAlt: "Mobile App",
    reverse: false,
    bg: "bg-white",
  },
];

const scaleCards = [
  {
    icon: "fas fa-lock",
    bg: "bg-yellow-400",
    text: "text-gray-900",
    title: "Enterprise Security",
    desc: "Bank-level encryption to keep your company data safe and compliant.",
  },
  {
    icon: "fas fa-bolt",
    bg: "bg-purple-700",
    text: "text-white",
    title: "Instant Sync",
    desc: "Changes made on one device appear everywhere instantly.",
  },
  {
    icon: "fas fa-plug",
    bg: "bg-blue-500",
    text: "text-white",
    title: "200+ Integrations",
    desc: "Connect with Slack, Google Drive, Zoom, and more.",
  },
];

const Features = () => (
  <>
    {/* ─── Hero ─── */}
    <section className="pt-32 pb-20 bg-gradient-to-br from-yellow-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight fade-in-up">
          More than just a tool.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-purple-600">
            It's your Intelligent Partner.
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 fade-in-up anim-delay-100">
          Discover the features that make ULO AI the ultimate platform for
          organising your team, automating workflows, and boosting productivity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in-up anim-delay-200">
          <a
            href="#signup"
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition transform"
          >
            Try for Free
          </a>
          <a
            href="#demo"
            className="px-8 py-3 rounded-full border border-gray-300 font-semibold hover:border-purple-700 hover:text-purple-700 transition"
          >
            Watch Demo
          </a>
        </div>

        {/* Mock browser frame */}
        <div className="mt-16 fade-in-up anim-delay-300">
          <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[260px] md:h-[500px] w-[90%] md:w-[80%] shadow-2xl overflow-hidden">
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
              <img
                src="https://placehold.co/1200x800/EEE/31343C?text=Main+App+Dashboard+Screenshot"
                className="w-full h-full object-cover"
                alt="App Dashboard"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ─── Alternating feature sections ─── */}
    {featureSections.map((f) => (
      <section key={f.title} className={`py-20 overflow-hidden ${f.bg}`}>
        <div
          className={`max-w-7xl mx-auto px-6 flex flex-col ${f.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-16`}
        >
          <div className="md:w-1/2 space-y-6">
            <div
              className={`w-12 h-12 ${f.iconBg} ${f.iconColor} rounded-xl flex items-center justify-center text-2xl`}
            >
              <i className={f.icon} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {f.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">{f.body}</p>
            {f.bullets && (
              <ul className="space-y-3 text-gray-600">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-yellow-400" /> {b}
                  </li>
                ))}
              </ul>
            )}
            {f.learnMore && (
              <a
                href={f.learnMore}
                className="text-purple-700 font-bold hover:underline"
              >
                See how it works →
              </a>
            )}
          </div>

          <div className="md:w-1/2 relative">
            <div
              className={`absolute -inset-4 bg-gradient-to-r ${f.glowFrom} ${f.glowTo} rounded-2xl blur-lg opacity-30`}
            />
            <img
              src={f.img}
              alt={f.imgAlt}
              className="relative rounded-2xl shadow-2xl border border-gray-100 transform hover:scale-[1.02] transition duration-500"
            />
          </div>
        </div>
      </section>
    ))}

    {/* ─── Scale grid ─── */}
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Everything you need to scale
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {scaleCards.map((c) => (
            <div
              key={c.title}
              className="p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition"
            >
              <div
                className={`w-12 h-12 ${c.bg} ${c.text} rounded-full flex items-center justify-center mx-auto mb-4 text-xl`}
              >
                <i className={c.icon} />
              </div>
              <h3 className="text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-gray-400 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── CTA Banner ─── */}
    <section className="py-24 bg-yellow-400 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Ready to transform your workflow?
        </h2>
        <p className="text-xl text-gray-800 mb-10">
          Join 10,000+ teams using ULO AI to work smarter, not harder.
        </p>
        <a
          href="#signup"
          className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-900 hover:scale-105 transition transform shadow-xl"
        >
          Start Your Free Trial
        </a>
        <p className="mt-4 text-sm text-gray-700">
          No credit card required. 14-day free trial.
        </p>
      </div>
    </section>
  </>
);

export default Features;
