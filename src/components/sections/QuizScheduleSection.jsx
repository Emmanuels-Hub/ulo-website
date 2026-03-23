const QuizScheduleSection = () => {
  const schedule = [
    {
      day: "Monday",
      date: "April 6",
      title: "Round 1",
      color: "from-blue-500 via-blue-600 to-blue-700",
      highlight: "Kickoff",
      tasks: [
        { quiz: "English Language", type: "Mandatory", time: "8:00 PM - 10:00 PM" },
        { quiz: "Optional Subject 1", type: "Optional", time: "8:00 PM - 10:00 PM" },
        { quiz: "Optional Subject 2", type: "Optional", time: "8:00 PM - 10:00 PM" },
      ],
    },
    {
      day: "Wednesday",
      date: "April 8",
      title: "Round 2",
      color: "from-purple-500 via-purple-600 to-purple-700",
      highlight: "Elimination Stage",
      tasks: [
        { quiz: "English Language", type: "Mandatory", time: "8:00 PM - 10:00 PM" },
        { quiz: "Optional Subject 1", type: "Optional", time: "8:00 PM - 10:00 PM" },
        { quiz: "Optional Subject 2", type: "Optional", time: "8:00 PM - 10:00 PM" },
      ],
    },
    {
      day: "Friday",
      date: "April 10",
      title: "Grand Final",
      color: "from-yellow-400 via-yellow-500 to-yellow-600",
      highlight: "Final Battle",
      tasks: [
        { quiz: "English Language", type: "Mandatory", time: "8:00 PM - 10:00 PM" },
        { quiz: "Optional Subject 1", type: "Optional", time: "8:00 PM - 10:00 PM" },
        { quiz: "Optional Subject 2", type: "Optional", time: "8:00 PM - 10:00 PM" },
      ],
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Competition Timeline 📅
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Your journey from qualification to final victory. Stay on track and don’t miss any round.
          </p>
        </div>

        {/* Timeline line (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-[220px] h-[60%] w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-yellow-400 opacity-30"></div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
          {schedule.map((round, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden border border-gray-100"
            >
              {/* Top gradient */}
              <div className={`bg-gradient-to-r ${round.color} p-6 text-white`}>
                <p className="text-sm uppercase tracking-wide opacity-80">
                  {round.highlight}
                </p>

                <h3 className="text-2xl font-extrabold mt-1">
                  {round.title}
                </h3>

                <p className="text-sm mt-2">
                  {round.day}, {round.date} 2026
                </p>
              </div>

              {/* Tasks */}
              <div className="p-6 space-y-4">
                {round.tasks.map((task, j) => (
                  <div
                    key={j}
                    className="flex items-start justify-between gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
                  >
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {task.quiz}
                      </p>

                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        ⏰ {task.time}
                      </p>
                    </div>

                    <span
                      className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                        task.type === "Mandatory"
                          ? "bg-red-100 text-red-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {task.type}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step indicator */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold shadow-lg">
                {i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Key Dates */}
        <div className="mt-24 max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-8">
            Important Dates 🚀
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { date: "Now", event: "Registration Opens" },
              { date: "April 7", event: "Registration Closes" },
              { date: "April 6 - 10", event: "Competition Period" },
              { date: "April 13", event: "Results Announced" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                  {i + 1}
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    {item.event}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 text-lg mb-4">
            Don’t miss your chance to compete 🚀
          </p>

          <a
            href="#register"
            className="inline-block bg-purple-900 hover:bg-purple-800 text-white px-10 py-4 rounded-xl font-bold shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
          >
            Secure Your Spot Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuizScheduleSection;