import { LuCheck, LuHeart, LuTimer } from "react-icons/lu";
import Reveal from "../UI/Reveal";
import SectionHeading from "../UI/SectionHeading";

const points = [
  {
    title: "Know the format before exam day",
    desc: "Practise with the same structure, timing and question styles you'll see in the hall.",
  },
  {
    title: "Learn from every mistake",
    desc: "Each wrong answer comes with a clear explanation, so it becomes a lesson — not a worry.",
  },
  {
    title: "See your progress grow",
    desc: "Watching your scores climb topic by topic is the best cure for exam nerves.",
  },
];

const subjects = [
  { name: "Mathematics", score: 78 },
  { name: "English", score: 85 },
  { name: "Biology", score: 64 },
  { name: "Chemistry", score: 52 },
];

const ConfidenceSection = () => (
  <section className="bg-ink-900 py-20 text-white md:py-28">
    <div className="container-page grid items-center gap-14 lg:grid-cols-2">
      <div>
        <SectionHeading
          align="left"
          tone="dark"
          eyebrow="Beat exam anxiety"
          icon={LuHeart}
          title={
            <>
              Exams feel scary when they're <span className="text-brand-400">unfamiliar.</span>
            </>
          }
          intro="Most students lose marks to nerves and time pressure — not because they don't know the work. ULO helps you practise until exam day feels like just another study session."
        />

        <ul className="-mt-4 space-y-5">
          {points.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 100} className="flex gap-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-400 text-ink-900">
                <LuCheck className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-lg font-bold">{p.title}</span>
                <span className="mt-1 block leading-relaxed text-ink-300">{p.desc}</span>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Illustrative progress card */}
      <Reveal delay={150} className="mx-auto w-full max-w-md">
        <div
          className="rounded-[2rem] bg-paper p-6 text-ink-900 shadow-lift md:p-8"
          role="img"
          aria-label="Example progress dashboard showing subject scores and a mock exam timer"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-ink-500">Your progress</p>
              <p className="text-2xl font-extrabold">WAEC prep</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1.5 text-sm font-bold text-brand-400">
              <LuTimer className="h-4 w-4" aria-hidden="true" /> 42:18
            </span>
          </div>

          <div className="space-y-4">
            {subjects.map((s) => (
              <div key={s.name}>
                <div className="mb-1.5 flex justify-between text-sm font-semibold">
                  <span>{s.name}</span>
                  <span className="text-ink-600">{s.score}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-ink-100">
                  <div className="h-full rounded-full bg-brand-400" style={{ width: `${s.score}%` }} />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-2xl bg-brand-100 p-4 text-sm leading-relaxed text-ink-800">
            <b>Tip from ULO:</b> Chemistry needs a little love. Try a 10-question quiz on <i>mole concept</i> today. 💪
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ConfidenceSection;
