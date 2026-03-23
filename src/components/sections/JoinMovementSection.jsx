/* ── Join the Movement Section ──────────────────────────────────────── */
const JoinMovementSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-stretch bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
          {/* ── Left: Text ── */}
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <span className="text-white tracking-wider uppercase text-xs mb-2 block">
              Join the Movement
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be Part of the Future of Education
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Whether you are a student, a teacher, or an institution, there is
              a place for you in the ULO ecosystem. Let's build a smarter world
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/campus-ambassadors"
                className="bg-yellow-300 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-white transition shadow-lg text-center transform hover:-translate-y-0.5"
              >
                Partner With Us
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-lg border border-gray-600 text-white font-bold hover:border-yellow-400 hover:text-yellow-400 transition text-center"
              >
                View Careers
              </a>
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
              alt="ULO Community"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMovementSection;
