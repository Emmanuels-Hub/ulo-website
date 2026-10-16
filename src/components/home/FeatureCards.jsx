import { Link } from "react-router-dom";
import { LuArrowRight, LuChartLine, LuSparkles, LuTimer, LuTrophy, LuZap } from "react-icons/lu";
import Reveal from "../UI/Reveal";
import SectionHeading from "../UI/SectionHeading";
import AgeTag from "../UI/AgeTag";

const features = [
  {
    icon: LuTimer,
    title: "Exam practice",
    desc: "Practise with WAEC, JAMB and NECO-style questions and sit timed mock exams, so the real thing already feels familiar.",
    points: ["WAEC, JAMB & NECO", "Timed like the real exam", "Builds speed & calm"],
  },
  {
    icon: LuTrophy,
    title: "Quizzes & competitions",
    desc: "Join friendly quiz competitions, keep your streak going and see how you rank against other students.",
    points: ["Monthly competitions", "Leaderboards", "Badges & streaks"],
  },
  {
    icon: LuChartLine,
    title: "Progress tracker",
    desc: "See your strengths and weak spots at a glance, so every study session goes where it counts most.",
    points: ["Scores by subject", "Spot weak areas", "Watch yourself improve"],
  },
  {
    icon: LuSparkles,
    title: "AI study tools",
    adult: true,
    desc: "Chat or talk with a patient AI tutor, and turn your notes or documents into practice exams in seconds.",
    points: ["Chat & voice tutor", "Exams from your notes", "Step-by-step help"],
  },
];

const FeatureCards = () => (
  <section className="bg-white py-20 md:py-28">
    <div className="container-page">
      <SectionHeading
        eyebrow="What ULO does"
        icon={LuZap}
        title={
          <>
            Everything you need to <span className="highlight">ace it</span>
          </>
        }
        intro="Simple tools that work together — like having a question bank, an exam hall and a study coach in your pocket."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {features.map(({ icon: Icon, title, desc, points, adult }, i) => (
          <Reveal
            key={title}
            delay={i * 80}
            className="group rounded-[2rem] border border-ink-200 bg-paper p-7 transition duration-300 hover:-translate-y-1 hover:border-ink-900 hover:shadow-press md:p-9"
          >
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400 text-ink-900 transition-transform duration-300 ease-[var(--ease-bounce)] group-hover:-rotate-6 group-hover:scale-110">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <h3 className="flex flex-wrap items-center gap-2 text-2xl font-extrabold text-ink-900">
              {title}
              {adult && <AgeTag />}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-600">{desc}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {points.map((p) => (
                <li key={p} className="rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-ink-800">
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <Link
          to="/features"
          className="group inline-flex items-center gap-2 font-bold text-ink-900 underline decoration-brand-400 decoration-4 underline-offset-8 hover:decoration-ink-900"
        >
          Explore all features
          <LuArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default FeatureCards;
