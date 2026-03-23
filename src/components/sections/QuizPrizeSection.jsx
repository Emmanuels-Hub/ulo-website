const QuizPrizeSection = () => {
  const prizes = [
    {
      rank: "🥇 1st Place",
      amount: "₦100,000",
      color: "from-yellow-400 via-yellow-500 to-yellow-600",
      glow: "shadow-yellow-400/40",
      badge: "TOP WINNER",
      description: "Highest overall score across all rounds",
      perks: [
        "Cash Reward",
        "Certificate of Excellence",
        "Leaderboard Spotlight",
        "Exclusive ULO AI Merch",
      ],
    },
    {
      rank: "🥈 2nd Place",
      amount: "₦50,000",
      color: "from-gray-300 via-gray-400 to-gray-500",
      glow: "shadow-gray-400/30",
      description: "Second highest cumulative score",
      perks: [
        "Cash Reward",
        "Recognition Certificate",
        "Leaderboard Feature",
        "Special Mention",
      ],
    },
    {
      rank: "🥉 3rd Place",
      amount: "₦20,000",
      color: "from-orange-400 via-orange-500 to-orange-600",
      glow: "shadow-orange-400/30",
      description: "Third highest cumulative score",
      perks: [
        "Cash Reward",
        "Participation Certificate",
        "Leaderboard Listing",
        "Recognition Badge",
      ],
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,0,0.3),transparent)]"></div>

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            Win Big 💰
          </h2>

          <p className="text-lg text-gray-300 mb-4">
            Total Prize Pool
          </p>

          <div className="text-5xl font-black text-yellow-400 drop-shadow-lg mb-6">
            ₦170,000
          </div>

          <p className="max-w-2xl mx-auto text-gray-400">
            Compete with top students, prove your knowledge, and walk away with
            cash prizes, recognition, and exclusive rewards.
          </p>
        </div>

        {/* Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {prizes.map((prize, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 bg-gradient-to-br ${prize.color} text-white transform transition duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl ${prize.glow} ${
                i === 0 ? "md:scale-110 md:-translate-y-6 z-10" : ""
              }`}
            >
              {/* Badge for 1st */}
              {prize.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-yellow-400 text-xs px-4 py-1 rounded-full font-bold tracking-wide shadow-lg">
                  {prize.badge}
                </div>
              )}

              {/* Rank */}
              <h3 className="text-2xl font-extrabold mb-2">
                {prize.rank}
              </h3>

              {/* Amount */}
              <div className="text-5xl font-black mb-4 drop-shadow-xl">
                {prize.amount}
              </div>

              {/* Description */}
              <p className="text-white/90 mb-6 leading-relaxed">
                {prize.description}
              </p>

              {/* Perks */}
              <div className="bg-black/20 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <p className="text-xs font-bold uppercase tracking-wide mb-3 text-white/80">
                  Includes:
                </p>

                <ul className="space-y-2">
                  {prize.perks.map((perk, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span className="text-white">✔</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-20 max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center shadow-lg">
          <h4 className="text-xl font-bold mb-3 text-yellow-400">
            How Winners Are Selected
          </h4>
          <p className="text-gray-300 leading-relaxed">
            Your performance across Monday, Wednesday, and Friday quizzes is
            combined into a final score. The higher your cumulative score, the
            higher your ranking — and your chance to win big.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-4">
            ⚡ Limited slots available — don’t miss out!
          </p>

          <a
            href="#register"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-4 rounded-xl font-extrabold text-lg shadow-xl transition transform hover:-translate-y-1 hover:scale-105"
          >
            Register Now for ₦1,000
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuizPrizeSection;