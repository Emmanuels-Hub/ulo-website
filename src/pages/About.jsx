const stats = [
  { value: "50k+", label: "Active Students" },
  { value: "1.2M", label: "Questions Solved" },
  { value: "95%", label: "Exam Pass Rate" },
  { value: "24/7", label: "AI Availability" },
];

const values = [
  {
    icon: "fas fa-lightbulb",
    iconColor: "text-purple-500",
    border: "border-purple-500",
    title: "Innovation",
    desc: "We constantly push the boundaries of what AI can do in education, turning sci-fi into study tools.",
  },
  {
    icon: "fas fa-users",
    iconColor: "text-yellow-400",
    border: "border-yellow-400",
    title: "Inclusivity",
    desc: "We build for everyone. Our tools are designed to be accessible, low-data, and easy to use.",
  },
  {
    icon: "fas fa-shield-alt",
    iconColor: "text-blue-500",
    border: "border-blue-500",
    title: "Integrity",
    desc: "We prioritize data privacy and academic honesty. We help students learn, not just pass.",
  },
];

const team = [
  {
    name: "Emmanuel Audu",
    role: "CEO & Founder",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Amaka Chukwu",
    role: "Head of Product",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

const About = () => (
  <>
    {/* ─── Hero ─── */}
    <section className="relative pt-40 pb-20 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse pointer-events-none" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10 fade-in-up">
        <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-4 block">
          Our Story
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          We Are Building the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-500">
            Brain of Education
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          ULO AI is on a mission to democratize academic success by giving every
          student a personalized AI tutor in their pocket.
        </p>
      </div>
    </section>

    {/* ─── Stats strip ─── */}
    <div className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-700">
          {stats.map((s) => (
            <div key={s.label}>
              <h3 className="text-4xl font-bold text-yellow-400">{s.value}</h3>
              <p className="text-gray-400 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* ─── Mission / Vision ─── */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              className="rounded-2xl shadow-lg mt-8 w-full h-64 object-cover"
              alt="Students collaborating"
            />
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
              alt="Learning"
            />
          </div>

          <div className="fade-in-up anim-delay-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering Africa's Next Generation
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                  <i className="fas fa-rocket text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 mt-2">
                    To revolutionize the learning experience by equipping
                    students with intelligent, affordable tools that simplify
                    complex subjects.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                  <i className="fas fa-eye text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 mt-2">
                    To become the leading AI education platform, ensuring that
                    geography and financial status never dictate a student's
                    academic potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ─── Core Values ─── */}
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 ${v.border} fade-in-up anim-delay-${(i + 1) * 100}`}
            >
              <i className={`${v.icon} text-4xl ${v.iconColor} mb-6`} />
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ─── Team ─── */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Meet The Minds Behind ULO
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {team.map((m, i) => (
            <div
              key={m.name}
              className={`group fade-in-up anim-delay-${(i + 1) * 100}`}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 shadow-lg">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-4 text-white">
                    <a href="#" className="hover:text-yellow-400">
                      <i className="fab fa-linkedin text-xl" />
                    </a>
                    <a href="#" className="hover:text-yellow-400">
                      <i className="fab fa-twitter text-xl" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{m.name}</h3>
              <p className="text-purple-600 font-medium">{m.role}</p>
            </div>
          ))}

          {/* Join card */}
          <div className="flex flex-col justify-center items-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 p-6 hover:border-yellow-400 transition cursor-pointer fade-in-up anim-delay-300">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 mb-4">
              <i className="fas fa-plus text-2xl" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Join Our Team</h3>
            <p className="text-sm text-gray-500 mt-2 mb-4">
              We are hiring developers &amp; designers.
            </p>
            <a href="#" className="text-purple-600 font-bold hover:underline">
              View Openings →
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ─── CTA ─── */}
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
        }}
      />
      <div className="container mx-auto px-6 text-center relative z-10 text-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Learning?
        </h2>
        <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
          Join thousands of students who are acing their exams with ULO AI.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="px-8 py-4 bg-yellow-400 text-gray-900 rounded-full font-bold hover:bg-yellow-300 transition shadow-lg transform hover:-translate-y-1"
          >
            Download App
          </a>
          <a
            href="/contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-purple-600 transition"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  </>
);

export default About;
