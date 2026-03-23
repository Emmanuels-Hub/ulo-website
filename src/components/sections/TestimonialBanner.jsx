/* ── Testimonial Banner (Top-Rated App) ─────────────────────────────── */
const TestimonialBanner = () => {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-medium" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: phone image */}
          <div className="flex justify-center md:justify-end fade-in-up">
            <div className="relative w-full max-w-2xl">
              <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-60" />
              <img
                src="https://apptek.radiantthemes.com/wp-content/uploads/2022/11/installed-app-img.webp"
                alt="Mobile Device"
                className="relative z-10 w-full drop-shadow-2xl transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Right: content */}
          <div className="space-y-8 text-center md:text-left fade-in-up anim-delay-200">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white shadow-sm px-4 py-2 rounded-full border border-gray-100">
              <span className="text-yellow-500">
                <i className="fas fa-trophy" />
              </span>
              <span className="text-gray-800 font-bold text-sm tracking-wide">
                TOP RATED APP
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Your Ultimate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                Academic Assistant
              </span>
            </h2>

            {/* Quote card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-yellow-400 relative">
              <i className="fas fa-quote-left text-4xl text-gray-100 absolute top-4 left-4 -z-10" />
              <p className="text-gray-700 text-lg italic leading-relaxed mb-4">
                "ULO AI makes me feel so much more prepared and less anxious
                before my exams. The best part is that it's designed to be an
                affordable alternative to private tutoring."
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  <i className="fas fa-user" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Student User
                  </p>
                  <p className="text-xs text-gray-500">University of Lagos</p>
                </div>
                <div className="ml-auto text-yellow-400 text-xs flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star" />
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center text-purple-700 font-bold hover:text-purple-900 transition group"
            >
              Read more success stories
              <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialBanner;
