/* ── Quiz WhatsApp Channel Section ─────────────────────────────────────── */
const QuizWhatsAppSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-10 border-2 border-green-200">
            {/* Left: Content */}
            <div>
              <div className="mb-6">
                <span className="inline-block bg-green-200 text-green-800 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
                  💬 Stay Connected
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Join Our WhatsApp Channel
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Get exclusive updates about the quiz competition, important announcements, schedule reminders, and engage with other participants. Join our vibrant community on WhatsApp!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-green-600 text-xl flex-shrink-0 mt-1"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Real-time Updates</p>
                    <p className="text-sm text-gray-600">Get instant notifications about competition dates and schedules</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-green-600 text-xl flex-shrink-0 mt-1"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Community Support</p>
                    <p className="text-sm text-gray-600">Connect with fellow students preparing for the quizzes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-green-600 text-xl flex-shrink-0 mt-1"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Exclusive Content</p>
                    <p className="text-sm text-gray-600">Access tips, resources, and study materials from experts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <i className="fas fa-check-circle text-green-600 text-xl flex-shrink-0 mt-1"></i>
                  <div>
                    <p className="font-semibold text-gray-900">Quick Support</p>
                    <p className="text-sm text-gray-600">Get immediate help with any questions or technical issues</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://whatsapp.com/channel/0029Vb7CoKm1t90g7JR9Po2E"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition transform hover:-translate-y-1"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                <span>Join WhatsApp Channel</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            {/* Right: Visual */}
            <div className="flex justify-center items-center">
              <div className="relative">
                {/* Phone mockup illusion with icon */}
                <div className="w-64 h-96 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center border-8 border-gray-300">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-300 rounded-b-2xl"></div>

                  {/* Content */}
                  <div className="mt-8 text-center">
                    <i className="fab fa-whatsapp text-green-600 text-7xl mb-4"></i>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">ULO AI Quiz</h3>
                    <p className="text-sm text-gray-600">Competition Updates</p>
                  </div>

                  {/* Chat bubbles */}
                  <div className="mt-8 w-48 space-y-3 px-4">
                    <div className="bg-green-100 rounded-lg px-3 py-2 text-xs text-gray-800 text-left">
                      📢 Registration opens now! 🎯
                    </div>
                    <div className="bg-blue-100 rounded-lg px-3 py-2 text-xs text-gray-800 text-right ml-6">
                      Thanks! Registering now 💪
                    </div>
                    <div className="bg-green-100 rounded-lg px-3 py-2 text-xs text-gray-800 text-left">
                      ✨ All the best for the quiz! 🏆
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 font-bold px-4 py-3 rounded-full shadow-lg border-4 border-white">
                  <i className="fas fa-star mr-2"></i>
                  Active Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizWhatsAppSection;
