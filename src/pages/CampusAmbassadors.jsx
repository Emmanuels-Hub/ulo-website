import { useState } from "react";

const impactCards = [
  {
    icon: "fas fa-bullhorn",
    color: "text-purple-700",
    hoverBg: "hover:bg-yellow-50",
    title: "Lead Initiatives",
    desc: "Organise study sessions, demos, and campus events. Be the face of AI on your campus.",
  },
  {
    icon: "fas fa-network-wired",
    color: "text-purple-700",
    hoverBg: "hover:bg-purple-50",
    title: "Grow Your Network",
    desc: "Connect with other ambitious students, industry mentors, and the ULO AI team.",
  },
  {
    icon: "fas fa-briefcase",
    color: "text-purple-700",
    hoverBg: "hover:bg-yellow-50",
    title: "Career Boost",
    desc: "Gain real-world experience in marketing and leadership. Top performers get internship interviews.",
  },
];

const perks = [
  {
    bg: "bg-yellow-400 text-gray-900",
    icon: "fas fa-tshirt",
    label: "Exclusive Hoodies & Swag",
  },
  {
    bg: "bg-purple-700 border border-white/20 text-white",
    icon: "fas fa-star",
    label: "Pro Version Access (Free)",
  },
  {
    bg: "bg-purple-700 border border-white/20 text-white",
    icon: "fas fa-certificate",
    label: "Completion Certificate",
  },
  {
    bg: "bg-green-500 text-white",
    icon: "fas fa-handshake",
    label: "Internship Opportunities",
  },
];

const perkGridCards = [
  {
    icon: "fas fa-laptop-code",
    color: "text-yellow-400",
    title: "Early Access",
    sub: "Test new features before anyone else.",
  },
  {
    icon: "fas fa-users",
    color: "text-purple-500",
    title: "Mentorship",
    sub: "Chats with ULO founders & team.",
    offset: true,
  },
  {
    icon: "fas fa-gift",
    color: "text-pink-500",
    title: "Gift Cards",
    sub: "Rewards for hitting targets.",
  },
  {
    icon: "fas fa-file-alt",
    color: "text-blue-400",
    title: "Reference",
    sub: "LinkedIn recommendation.",
    offset: true,
  },
];

const journey = [
  {
    num: "1",
    border: "border-gray-100 text-gray-400",
    title: "Apply",
    desc: "Submit your application below. Tell us your story.",
  },
  {
    num: "2",
    border: "border-purple-700 text-purple-700",
    title: "Get Selected",
    desc: "Join the exclusive cohort and get onboarded.",
  },
  {
    num: "3",
    border: null,
    bg: "bg-yellow-400 text-[#1e1b4b]",
    title: "Run Events",
    desc: "Host demos, share content, and gather feedback.",
  },
  {
    num: "4",
    border: "border-green-400 text-green-500",
    title: "Get Rewards",
    desc: "Earn swag, stipends, and career opportunities.",
  },
];

const faqItems = [
  {
    q: "How much time does it take?",
    a: "We recommend about 3–5 hours per week. It's flexible around your studies!",
  },
  {
    q: "Do I need to be a tech expert?",
    a: "Nope! We look for passion, leadership, and communication skills. Whether you study Law, Art, or Engineering, if you love learning, you're a fit.",
  },
  {
    q: "Is this a paid role?",
    a: "This is a volunteer leadership program. However, top performers earn stipends, gift cards, and are fast-tracked for paid internships at ULO AI.",
  },
];

const ApplicationForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    university: "",
    course: "",
    gradYear: "2025",
    phone: "",
    motivation: "",
  });
  const [status, setStatus] = useState("idle");
  const handleChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 900);
  };

  if (status === "success")
    return (
      <div className="flex flex-col items-center py-16 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <i className="fas fa-check text-green-600 text-3xl" />
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">
          Application Submitted! 🚀
        </h4>
        <p className="text-gray-500">
          We'll review your application and reach out to the selected
          candidates.
        </p>
      </div>
    );

  const inputCls =
    "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-700 transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            name: "fullName",
            label: "Full Name",
            type: "text",
            placeholder: "John Doe",
          },
          {
            name: "email",
            label: "Email Address",
            type: "email",
            placeholder: "john@university.edu",
          },
          {
            name: "university",
            label: "University / College",
            type: "text",
            placeholder: "e.g., University of Lagos",
          },
          {
            name: "course",
            label: "Course of Study",
            type: "text",
            placeholder: "e.g., Computer Science",
          },
          {
            name: "phone",
            label: "Phone Number (WhatsApp)",
            type: "text",
            placeholder: "+234...",
          },
        ].map((f) => (
          <div key={f.name}>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              {f.label}
            </label>
            <input
              type={f.type}
              name={f.name}
              value={values[f.name]}
              onChange={handleChange}
              placeholder={f.placeholder}
              required
              className={inputCls}
            />
          </div>
        ))}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Graduation Year
          </label>
          <select
            name="gradYear"
            value={values.gradYear}
            onChange={handleChange}
            className={inputCls}
          >
            {["2025", "2026", "2027", "2028"].map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">
          Why do you want to be a ULO Ambassador?
        </label>
        <textarea
          name="motivation"
          value={values.motivation}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your leadership experience or passion for tech..."
          className={`${inputCls} resize-none`}
          required
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-purple-800 text-white font-bold text-lg py-4 rounded-xl hover:bg-purple-900 transition shadow-lg hover:-translate-y-1 transform duration-200 disabled:opacity-60"
      >
        {status === "sending" ? "Submitting…" : "Submit Application 🚀"}
      </button>
    </form>
  );
};

const CampusAmbassadors = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-purple-800 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 text-center lg:text-left text-white">
            <span className="inline-block bg-yellow-400 text-purple-800 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest transform -rotate-2">
              🚀 Join the movement
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Lead the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white">
                Learning.
              </span>
            </h1>
            <p className="text-xl text-purple-100 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Join the ULO AI Campus Ambassadors program. Build your resume,
              earn exclusive swag, and help students unlock smarter learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <a
                href="#apply"
                className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition shadow-[0_0_20px_rgba(255,222,89,0.5)]"
              >
                Become an Ambassador
              </a>
              <a
                href="#perks"
                className="px-8 py-4 rounded-full border-2 border-white/30 font-semibold hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                View Perks
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 transform lg:rotate-2 hover:rotate-0 transition duration-500">
              <img
                src="https://placehold.co/800x600/1e1b4b/FFF?text=Campus+Leaders"
                alt="Campus Ambassadors"
                className="rounded-3xl shadow-2xl border-4 border-yellow-400"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-xl shadow-xl border border-gray-100 rotate-[-5deg]">
              <div className="flex items-center gap-3">
                <i className="fas fa-certificate text-purple-700 text-2xl" />
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">
                    Reward
                  </p>
                  <p className="font-bold">Official Certificate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Impact cards ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Make an Impact, Build Your Skills
            </h2>
            <p className="text-gray-600">
              More than just a title. It's a launchpad for your career.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {impactCards.map((c) => (
              <div
                key={c.title}
                className={`p-8 rounded-3xl bg-gray-50 ${c.hoverBg} transition duration-300 group text-center`}
              >
                <div className="w-16 h-16 mx-auto bg-white shadow-md rounded-full flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                  <i className={`${c.icon} ${c.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-gray-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Perks ─── */}
      <section
        id="perks"
        className="py-24 bg-gray-900 text-white relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/diagmonds-light.png')",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                Sweet Perks &amp;{" "}
                <span className="text-yellow-400">Exclusive Merch</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                We value our ambassadors. Here is what you get for joining the
                tribe.
              </p>
              <ul className="space-y-6">
                {perks.map((p) => (
                  <li key={p.label} className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full ${p.bg} flex items-center justify-center`}
                    >
                      <i className={p.icon} />
                    </div>
                    <span className="font-bold text-lg">{p.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                {perkGridCards.map((c) => (
                  <div
                    key={c.title}
                    className={`bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-yellow-400 transition ${c.offset ? "translate-y-8" : ""}`}
                  >
                    <i className={`${c.icon} ${c.color} text-4xl mb-4`} />
                    <h4 className="font-bold">{c.title}</h4>
                    <p className="text-xs text-gray-400 mt-2">{c.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Journey steps ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Your Journey Starts Here
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100 z-0" />
            {journey.map((s) => (
              <div key={s.title} className="text-center relative z-10">
                <div
                  className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-6 bg-white ${
                    s.bg ? s.bg : `border-4 ${s.border}`
                  }`}
                >
                  {s.num}
                </div>
                <h4 className="font-bold text-lg mb-2">{s.title}</h4>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Application form ─── */}
      <section id="apply" className="py-24 bg-yellow-400 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                Ready to Lead?
              </h2>
              <p className="text-gray-600">
                Applications are open for the next cohort.
              </p>
            </div>
            <ApplicationForm />
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-900">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-5 cursor-pointer hover:bg-gray-100 transition"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex justify-between items-center font-bold text-gray-800">
                  {item.q}
                  <span
                    className={`transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  >
                    <i className="fas fa-chevron-down text-sm" />
                  </span>
                </div>
                {openFaq === i && (
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CampusAmbassadors;
