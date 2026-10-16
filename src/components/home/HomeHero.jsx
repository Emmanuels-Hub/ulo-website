import { LuArrowRight, LuTrophy, LuClock3, LuSparkles } from "react-icons/lu";
import { EXAMS } from "../../config/site";
import Button from "../UI/Button";
import PhoneMockup from "../UI/PhoneMockup";
import StoreButtons from "../UI/StoreButtons";

const HomeHero = () => (
  <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 lg:pb-28">
    {/* soft sun behind the phone */}
    <div
      aria-hidden="true"
      className="absolute top-16 -right-24 h-[30rem] w-[30rem] rounded-full bg-brand-100 md:right-[-6rem] lg:right-[2%]"
    />

    <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-50 px-4 py-1.5 text-sm font-semibold text-ink-800">
          <LuSparkles className="h-4 w-4" aria-hidden="true" />
          Your study buddy — free to download
        </p>

        <h1 className="text-[2.6rem] leading-[1.08] font-extrabold tracking-tight text-balance text-ink-900 sm:text-6xl lg:text-[4.25rem]">
          Study smarter.
          <br />
          Walk into exams <span className="highlight">confident.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-600 md:text-xl">
          Practise WAEC, JAMB and NECO-style questions, sit timed mock exams and compete in friendly quizzes — right
          from your phone. Learners aged 18+ also get a patient AI tutor.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <StoreButtons />
          <Button to="/features" variant="ghost" size="lg">
            See what it can do
            <LuArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-10 border-t border-ink-200 pt-6">
          <p className="mb-3 text-sm font-semibold text-ink-500">Built for the exams that matter:</p>
          <ul className="flex flex-wrap gap-2">
            {EXAMS.map((exam) => (
              <li
                key={exam}
                className="rounded-full border border-ink-200 bg-white px-3.5 py-1.5 text-sm font-bold text-ink-800"
              >
                {exam}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Visual */}
      <div className="relative mx-auto">
        <PhoneMockup className="animate-float-slow" />

        <div className="absolute top-24 -left-32 hidden rotate-[-4deg] items-center gap-3 rounded-2xl border border-ink-200 bg-white p-3 pr-5 shadow-soft md:flex">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-400">
            <LuClock3 className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold">JAMB mock</span>
            <span className="block text-xs text-ink-500">40 questions · timed</span>
          </span>
        </div>

        <div className="absolute -right-32 bottom-24 hidden rotate-[3deg] items-center gap-3 rounded-2xl bg-ink-900 p-3 pr-5 text-white shadow-lift md:flex">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-400 text-ink-900">
            <LuTrophy className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold">Quiz challenge</span>
            <span className="block text-xs text-ink-300">Climb the leaderboard</span>
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default HomeHero;
