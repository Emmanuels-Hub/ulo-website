import { Link } from "react-router-dom";
import {
  LuArrowRight,
  LuCheck,
  LuChartLine,
  LuFlame,
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
import { ChatMock, GeneratorMock, LeaderboardMock, ProgressMock, SimulatorMock } from "../components/features/FeatureMocks";
import AgeTag from "../components/UI/AgeTag";
import PageHero from "../components/UI/PageHero";
import Reveal from "../components/UI/Reveal";
import SectionHeading from "../components/UI/SectionHeading";
import { EXAMS } from "../config/site";

const features = [
  {
    id: "exam-practice",
    icon: LuTimer,
    eyebrow: "Exam practice",
    title: "Rehearse the real exam before exam day",
    body: "Practise with WAEC, JAMB and NECO-style questions under real conditions — the format, the timer and the pressure. By the time you sit the real thing, it already feels familiar.",
    points: ["Timed like the real exam", "Realistic question styles", "See the right answer straight away"],
    Mock: SimulatorMock,
  },
  {
    id: "competitions",
    icon: LuTrophy,
    eyebrow: "Quizzes & competitions",
    title: "Learning is more fun with friends (and rivals)",
    body: "Join ULO's quiz competitions, climb the leaderboard and earn badges as you go. Keep your daily streak alive and watch your rank rise.",
    points: ["Monthly quiz competitions", "Leaderboards", "Badges & daily streaks"],
    Mock: LeaderboardMock,
  },
  {
    id: "progress",
    icon: LuChartLine,
    eyebrow: "Progress tracker",
    title: "Know exactly what to study next",
    body: "ULO keeps track of the tests you take and shows your strong and weak subjects, so you can spend your study time where it makes the biggest difference.",
    points: ["Scores by subject", "Spot weak areas at a glance", "See your improvement over time"],
    Mock: ProgressMock,
  },
  {
    id: "ai-tutor",
    icon: LuMessageCircle,
    eyebrow: "AI tutor",
    adult: true,
    title: "A patient tutor who's always awake",
    body: "Stuck late at night? Ask ULO's AI tutor by text or voice. It breaks hard topics into small, friendly steps and keeps explaining until it clicks.",
    points: ["Chat or talk out loud", "Step-by-step working, not just answers", "Ask follow-ups in your own words"],
    Mock: ChatMock,
  },
  {
    id: "exam-creator",
    icon: LuFileText,
    eyebrow: "AI exam creator",
    adult: true,
    title: "Turn your notes into a practice exam",
    body: "Upload your notes or a document and ULO creates exam-style questions on exactly what you studied — then lets you test yourself straight away.",
    points: ["Upload notes or documents", "Exam-style questions", "Practise immediately"],
    Mock: GeneratorMock,
  },
];

const extras = [
  {
    icon: LuSmartphone,
    title: "Made for your phone",
    desc: "Everything works from the app — study on the bus, at break or at home.",
  },
  {
    icon: LuFlame,
    title: "Badges & streaks",
    desc: "Earn badges for milestones and keep a daily streak going to stay motivated.",
  },
  {
    icon: LuTrophy,
    title: "Monthly quiz competition",
    desc: "Test yourself against other students and compete for cash prizes.",
    to: "/competition",
  },
  {
    icon: LuLayers,
    title: "Free to download",
    desc: "Get started for free. Premium unlocks extra features and higher limits.",
  },
  {
    icon: LuGraduationCap,
    title: "Built for your exams",
    desc: `Practice for ${EXAMS.join(", ").replace(/, ([^,]*)$/, " and $1")}.`,
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
      description="See everything ULO AI can do: timed WAEC, JAMB and NECO practice exams, quiz competitions with leaderboards, progress tracking, and AI study tools for learners aged 18+."
    />

    <PageHero
      eyebrow="Features"
      icon={LuWandSparkles}
      title={
        <>
          One app. Every tool you need to <span className="highlight">ace your exams.</span>
        </>
      }
      intro="Practise it, rehearse it, compete, track it. ULO brings your question bank, your exam hall and your study coach together in your pocket."
    >
      <nav aria-label="Jump to feature" className="flex flex-wrap justify-center gap-3">
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
    </PageHero>

    {/* Feature deep-dives */}
    {features.map(({ id, icon: Icon, eyebrow, title, body, points, Mock, adult }, i) => (
      <section key={id} id={id} className={`scroll-mt-24 py-16 md:py-24 ${i % 2 ? "bg-white" : "bg-brand-50"}`}>
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className={i % 2 ? "lg:order-2" : ""}>
            <div className="mb-5 flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-1.5 text-sm font-bold text-brand-400">
                <Icon className="h-4 w-4" aria-hidden="true" /> {eyebrow}
              </span>
              {adult && <AgeTag className="py-1.5" />}
            </div>
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
            {adult && (
              <p className="mt-6 text-sm text-ink-500">
                AI features are available to users aged 18 and over, in line with our AI provider's terms.
              </p>
            )}
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
