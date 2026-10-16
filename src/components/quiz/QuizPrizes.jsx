import { LuCheck, LuGift } from "react-icons/lu";
import { formatNaira, useSiteContent } from "../../content/context";
import Reveal from "../UI/Reveal";
import SectionHeading from "../UI/SectionHeading";
import { prizePool } from "./phase";

const medals = ["🥇", "🥈", "🥉"];

const QuizPrizes = () => {
  const { competition: c } = useSiteContent();
  const prizes = c.prizes || [];
  if (!prizes.length) return null;
  const pool = prizePool(prizes);

  return (
    <section className="bg-ink-900 py-20 text-white md:py-28">
      <div className="container-page">
        <SectionHeading
          tone="dark"
          eyebrow="Prizes"
          icon={LuGift}
          title={
            <>
              <span className="text-brand-400">{formatNaira(pool)}</span> up for grabs
            </>
          }
          intro="Winners are ranked by their combined score across every round."
        />

        <div className="grid items-end gap-6 md:grid-cols-3">
          {prizes.map((p, i) => {
            const first = i === 0;
            return (
              <Reveal
                key={p.place}
                delay={i * 100}
                className={`rounded-[2rem] p-8 ${
                  first
                    ? "border-2 border-brand-400 bg-brand-400 text-ink-900 md:order-2 md:pb-12"
                    : `border border-ink-700 bg-ink-800 ${i === 1 ? "md:order-1" : "md:order-3"}`
                }`}
              >
                <span className="text-4xl" aria-hidden="true">
                  {medals[i] || "🏅"}
                </span>
                <h3 className={`mt-3 font-bold ${first ? "text-ink-800" : "text-ink-300"}`}>{p.place}</h3>
                <p className="mt-1 text-4xl font-extrabold tracking-tight">{formatNaira(p.amount)}</p>
                {p.perks?.length > 0 && (
                  <ul className="mt-6 space-y-2.5">
                    {p.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5">
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            first ? "bg-ink-900 text-brand-400" : "bg-brand-400 text-ink-900"
                          }`}
                        >
                          <LuCheck className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                        </span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuizPrizes;
