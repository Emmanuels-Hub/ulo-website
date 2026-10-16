import { useState } from "react";
import { LuCalendarDays, LuClock3, LuFlag } from "react-icons/lu";
import { formatDate, useSiteContent } from "../../content/context";
import Reveal from "../UI/Reveal";
import SectionHeading from "../UI/SectionHeading";

const QuizTimeline = () => {
  const { competition: c } = useSiteContent();
  const rounds = c.rounds || [];

  const mandatory = c.mandatorySubjects?.join(" & ") || "English Language";
  const [now] = useState(() => Date.now()); // captured once per visit
  if (!rounds.length) return null;
  const nextIndex = rounds.findIndex((r) => r.date && new Date(r.date).getTime() > now);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Schedule"
          icon={LuCalendarDays}
          title="The competition timeline"
          intro={
            c.resultsDate
              ? `Results are announced on ${formatDate(c.resultsDate)}.`
              : "Mark your calendar — every round counts towards your final score."
          }
        />

        <ol className="relative grid gap-6 md:grid-cols-3">
          {rounds.map((r, i) => {
            const isNext = i === nextIndex;
            const isFinal = i === rounds.length - 1;
            return (
              <Reveal
                as="li"
                key={`${r.title}-${i}`}
                delay={i * 100}
                className={`rounded-[2rem] border-2 p-7 ${
                  isFinal ? "border-ink-900 bg-brand-400" : "border-ink-200 bg-paper"
                } ${isNext ? "shadow-press" : ""}`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-extrabold tracking-wide uppercase ${
                      isFinal ? "bg-ink-900 text-brand-400" : "bg-brand-100 text-ink-900"
                    }`}
                  >
                    {r.label || `Round ${i + 1}`}
                  </span>
                  {isNext && <span className="text-xs font-bold text-ink-700">Up next</span>}
                  {isFinal && !isNext && <LuFlag className="h-5 w-5" aria-hidden="true" />}
                </div>
                <h3 className="text-2xl font-extrabold">{r.title}</h3>
                <ul className="mt-4 space-y-2 text-ink-700">
                  <li className="flex items-center gap-2">
                    <LuCalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {r.date ? formatDate(r.date) : "Date to be announced"}
                  </li>
                  {r.time && (
                    <li className="flex items-center gap-2">
                      <LuClock3 className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {r.time} (WAT)
                    </li>
                  )}
                </ul>
                <p className={`mt-5 border-t pt-4 text-sm ${isFinal ? "border-ink-900/20" : "border-ink-200"}`}>
                  <b>{mandatory}</b> + {c.optionalCount || 2} subjects of your choice
                </p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default QuizTimeline;
