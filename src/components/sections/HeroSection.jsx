/* ── Hero Section ─────────────────────────────────────────────────────── */
const HeroSection = () => {
  return (
    <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* ── Left Content ── */}
        <div className="z-10">
          {/* Badge */}
          <div className="fade-in-up flex items-center space-x-3 mb-6">
            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              #1 EdTech App
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-in-up anim-delay-100 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            AI-Powered <br />
            <span className="text-yellow-400 relative inline-block">
              Learning
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-yellow-200 opacity-60"
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
            </span>{" "}
            App.
          </h1>

          {/* Description */}
          <p className="fade-in-up anim-delay-200 text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
            ULO AI transforms how you study. Your personalized, AI-driven
            companion for revision, exam prep, and mastering complex topics
            instantly.
          </p>

          {/* CTA Buttons */}
          <div className="fade-in-up anim-delay-300 flex flex-col sm:flex-row items-center gap-4 mb-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.axogenesis.ulo_ai"
              className="w-full sm:w-auto bg-purple-900 hover:bg-purple-800 text-white px-8 py-3.5 rounded-xl shadow-lg font-bold transition flex justify-center items-center gap-3"
            >
              <span>Download App</span>
              <i className="fas fa-download" />
            </a>
            <a
              href="#"
              className="w-full sm:w-auto text-gray-600 font-semibold hover:text-purple-700 flex items-center gap-2 px-6 py-3 transition"
            >
              <i className="fas fa-play-circle text-2xl text-yellow-400" />
              <span>See how it works</span>
            </a>
          </div>

          {/* Star rating */}
          <div className="fade-in-up anim-delay-300 flex items-center gap-4 border-t pt-6 border-gray-100">
            <div className="flex text-yellow-400 text-sm">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <span className="text-gray-500 text-sm font-medium">
              <strong>4.8/5</strong> based on 10k+ reviews
            </span>
          </div>
        </div>

        {/* ── Right: Phone Mockup ── */}
        <div className="relative fade-in-up anim-delay-200 mt-10 md:mt-0 flex justify-center">
          {/* Phone image */}
          <div className="relative z-10 w-72 sm:w-80 md:w-96 lg:w-[28rem]">
            <img
              src="https://apptek.radiantthemes.com/wp-content/uploads/2022/12/mobile-device-banner.png"
              alt="ULO AI Mobile App"
              className="w-full drop-shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>

          {/* Floating circle */}
          <div className="absolute top-0 left-0 md:left-10 animate-float-slow z-0">
            <svg width="60" height="60" viewBox="0 0 50 50" fill="none">
              <circle
                cx="25"
                cy="25"
                r="20"
                stroke="#8E34CF"
                strokeWidth="4"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Floating triangle */}
          <div className="absolute bottom-10 right-0 md:right-12 animate-float-fast z-20">
            <svg width="40" height="40" viewBox="0 0 30 30" fill="none">
              <path d="M15 0L28 25H2L15 0Z" fill="#24ABF5" />
            </svg>
          </div>

          {/* Floating dot */}
          <div className="absolute top-1/2 left-0 animate-float-medium z-20">
            <div className="w-6 h-6 bg-pink-500 rounded-full shadow-lg" />
          </div>

          {/* Background gradient blob */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-yellow-100 to-purple-100 rounded-full blur-3xl opacity-40 -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
