/* ── CTA Dark Section (App Store Download) ───────────────────────────── */
const CTASection = () => {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Large glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none" />

      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-16 h-16 border-4 border-purple-500/30 rounded-full animate-float-slow" />
      <div className="absolute bottom-20 right-20 w-8 h-8 bg-yellow-400/50 rounded-full animate-float-fast" />
      <div className="absolute top-1/2 left-10 w-4 h-4 bg-pink-500 rounded-full animate-float-medium" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <p className="fade-in-up text-yellow-400 font-bold uppercase tracking-widest text-xs mb-4">
          Try The Application For Free
        </p>

        <h2 className="fade-in-up anim-delay-100 text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
          Start Your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
            Academic Journey
          </span>{" "}
          <span className="text-white">Today</span>
        </h2>

        <p className="fade-in-up anim-delay-200 text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          The ULO AI mobile app is your all-in-one learning assistant. Enjoy the
          flexibility of a personalized tutor and the efficiency of advanced AI
          tools to help you succeed on your own terms.
        </p>

        <div className="fade-in-up anim-delay-300 flex flex-wrap justify-center gap-6">
          <a
            href="#"
            className="group w-full sm:w-auto bg-gray-800 border border-gray-700 hover:border-white rounded-xl p-2 transition duration-300"
          >
            <img
              src="https://apptek.radiantthemes.com/wp-content/uploads/elementor/thumbs/google-play-store-pwcc9vet25ql6m0rulsxpn6xtss3n2nb1azqs929s8.png"
              alt="Google Play"
              className="h-12 md:h-14 mx-auto group-hover:scale-105 transition-transform"
            />
          </a>
          <a
            href="#"
            className="group w-full sm:w-auto bg-gray-800 border border-gray-700 hover:border-white rounded-xl p-2 transition duration-300"
          >
            <img
              src="https://apptek.radiantthemes.com/wp-content/uploads/elementor/thumbs/app-store-pwcc9ugyvbpav02503eb55fh8ewqfdjkp6c9az3nyg.png"
              alt="App Store"
              className="h-12 md:h-14 mx-auto group-hover:scale-105 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
