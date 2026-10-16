import { Link } from "react-router-dom";
import {
  LuArrowRight,
  LuCheck,
  LuChartLine,
  LuCloudOff,
  LuFileText,
  LuGraduationCap,
  LuLayers,
  LuMessageCircle,
  LuSchool,
  LuSmartphone,
  LuTimer,
  LuTrophy,
  LuWandSparkles,
} from "react-icons/lu";
import Seo from "../components/Seo";
import CtaBand from "../components/home/CtaBand";
import { ChatMock, GeneratorMock, ProgressMock, SimulatorMock } from "../components/features/FeatureMocks";
import Reveal from "../components/UI/Reveal";
import SectionHeading from "../components/UI/SectionHeading";
import { EXAMS } from "../config/site";

const features = [
  {
    id: "ai-tutor",
    icon: LuMessageCircle,
    eyebrow: "AI Chat Tutor",
    title: "A patient tutor who's always awake",
    body: "Stuck at midnight before a test? Ask ULO. It breaks hard topics into small, friendly steps and keeps explaining until it clicks — no question is too basic.",
    points: [
      "Covers your school subjects",
      "Step-by-step working, not just answers",
      "Ask follow-ups in your own words",
    ],
    Mock: ChatMock,
  },
  {
    id: "question-generator",
    icon: LuFileText,
    eyebrow: "Question Generator",
    title: "Turn your notes into a personal quiz",
    body: "Snap a photo of your notebook or upload a PDF or Word document. ULO reads it and creates exam-style questions on exactly what you studied.",
    points: ["Photos, PDFs and Word documents", "Exam-style questions in seconds", "Check your answers instantly"],
    Mock: GeneratorMock,
  },
  {
    id: "exam-simulator",
    icon: LuTimer,
    eyebrow: "Exam Simulator",
    title: "Rehearse the real exam before exam day",
    body: "Practise with the format, the timer and the pressure of WAEC, JAMB and NECO. By the time you sit the real thing, it already feels familiar.",
    points: ["Timed like the real exam", "Realistic question styles", "Practise offline once downloaded"],
    Mock: SimulatorMock,
  },
  {
    id: "progress",
    icon: LuChartLine,
    eyebrow: "Progress Tracker",
    title: "Know exactly what to study next",
    body: "ULO keeps track of every test you take, shows your strong and weak topics, and points you to where a little practice will make the biggest difference.",
    points: ["Scores by subject and topic", "Spot weak areas at a glance", "See your improvement over time"],
    Mock: ProgressMock,
  },
];

const extras = [
  {
    icon: LuSmartphone,
    title: "Made for your phone",
    desc: "Everything works from the app — study on the bus, at break or at home.",
  },
  {
    icon: LuCloudOff,
    title: "Offline practice",
    desc: "Download practice exams and take them without data. They sync when you're back online.",
  },
  {
    icon: LuTrophy,
    title: "Monthly quiz competition",
    desc: "Test yourself against students across Nigeria and win cash prizes.",
    to: "/competition",
  },
  {
    icon: LuLayers,
    title: "Free to start",
    desc: "Core tools are free. Upgrade to Premium for unlimited questions and deeper analytics.",
  },
  {
    icon: LuGraduationCap,
    title: "Every major exam",
    desc: `${EXAMS.slice(0, 3).join(", ")}, Post-UTME and university entrance tests.`,
  },
  {
    icon: LuSchool,
    title: "For schools too",
    desc: "Teachers and institutions can manage students, exams and results in one place.",
    to: "/institutional-partners",
  },
];

const Features = () => (
  <>
    <Seo
      title="Features"
      description="See everything ULO AI can do: a 24/7 AI chat tutor, a question generator that turns your notes into quizzes, realistic WAEC/JAMB/NECO exam simulations and progress tracking."
    />

    {/* Hero */}
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-brand-100"
      />
      <div className="container-page relative text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-50 px-4 py-1.5 text-sm font-semibold">
          <LuWandSparkles className="h-4 w-4" aria-hidden="true" /> Features
        </p>
        <h1 className="mx-auto max-w-4xl text-[2.5rem] leading-[1.08] font-extrabold tracking-tight text-balance sm:text-6xl">
          One app. Every tool you need to <span className="highlight">ace your exams.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 md:text-xl">
          Learn it, practise it, rehearse it, track it. ULO brings your tutor, your question bank and your exam hall
          together in your pocket.
        </p>

        <nav aria-label="Jump to feature" className="mt-10 flex flex-wrap justify-center gap-3">
          {features.map(({ id, icon: Icon, eyebrow }) => (
            <a
              key={id}
              href={`#${id}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 bg-white px-5 py-2.5 font-bold transition hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-press"
            >
              <Icon className="h-5 w-5" aria-hidden="true" /> {eyebrow}
            </a>
          ))}
        </nav>
      </div>
    </section>

    {/* Feature deep-dives */}
    {features.map(({ id, icon: Icon, eyebrow, title, body, points, Mock }, i) => (
      <section key={id} id={id} className={`scroll-mt-24 py-16 md:py-24 ${i % 2 ? "bg-white" : "bg-brand-50"}`}>
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className={i % 2 ? "lg:order-2" : ""}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-1.5 text-sm font-bold text-brand-400">
              <Icon className="h-4 w-4" aria-hidden="true" /> {eyebrow}
            </span>
            <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-balance md:text-[2.75rem]">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">{body}</p>
            <ul className="mt-7 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 font-semibold">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-400">
                    <LuCheck className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className={`flex justify-center ${i % 2 ? "lg:order-1" : ""}`}>
            <Mock />
          </Reveal>
        </div>
      </section>
    ))}

    {/* Extras */}
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="And there's more" icon={LuLayers} title="Little things that make a big difference" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {extras.map(({ icon: Icon, title, desc, to }, i) => {
            const inner = (
              <>
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 transition-colors group-hover:bg-brand-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="flex items-center gap-2 text-lg font-extrabold">
                  {title}
                  {to && (
                    <LuArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  )}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-600">{desc}</p>
              </>
            );
            const cls =
              "group block h-full rounded-[2rem] border border-ink-200 bg-white p-7 transition hover:-translate-y-1 hover:border-ink-900";
            return (
              <Reveal key={title} delay={(i % 3) * 80}>
                {to ? (
                  <Link to={to} className={cls}>
                    {inner}
                  </Link>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>

    <CtaBand />
  </>
);

export default Features;
