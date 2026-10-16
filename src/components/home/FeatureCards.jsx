import { Link } from "react-router-dom";
import { LuArrowRight, LuChartLine, LuFileText, LuMessageCircle, LuTimer, LuZap } from "react-icons/lu";
import Reveal from "../UI/Reveal";
import SectionHeading from "../UI/SectionHeading";

const features = [
  {
    icon: LuMessageCircle,
    title: "AI Chat Tutor",
    desc: "Ask anything, any time. Get patient, step-by-step explanations that actually make sense — no judgement, no waiting for office hours.",
    points: ["All your school subjects", "Explains like a friend", "Available 24/7"],
  },
  {
    icon: LuFileText,
    title: "Question Generator",
    desc: "Snap your notebook or upload a PDF, and ULO turns it into exam-style questions so you can test yourself on exactly what you studied.",
    points: ["Photos, PDFs & docs", "Objective & theory", "Instant answers"],
  },
  {
    icon: LuTimer,
    title: "Exam Simulator",
    desc: "Practise under real exam conditions — the format, the timer, the pressure — so the real thing feels familiar.",
    points: ["WAEC, JAMB & NECO", "Timed like the real exam", "Builds speed & calm"],
  },
  {
    icon: LuChartLine,
    title: "Progress Tracker",
    desc: "See your strengths and weak spots at a glance, so every study session goes where it counts most.",
    points: ["Topic-by-topic scores", "Spot weak areas", "Watch yourself improve"],
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
        intro="Four simple tools that work together — like having a tutor, a question bank and an exam hall in your pocket."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {features.map(({ icon: Icon, title, desc, points }, i) => (
          <Reveal
            key={title}
            delay={i * 80}
            className="group rounded-[2rem] border border-ink-200 bg-paper p-7 transition duration-300 hover:-translate-y-1 hover:border-ink-900 hover:shadow-press md:p-9"
          >
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400 text-ink-900 transition-transform duration-300 ease-[var(--ease-bounce)] group-hover:-rotate-6 group-hover:scale-110">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <h3 className="text-2xl font-extrabold text-ink-900">{title}</h3>
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
