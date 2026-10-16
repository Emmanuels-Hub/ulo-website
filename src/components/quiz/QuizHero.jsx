import { FaWhatsapp } from "react-icons/fa6";
import { LuArrowDown, LuCalendarDays, LuMedal, LuTicket, LuTrophy } from "react-icons/lu";
import { formatDate, formatNaira, useSiteContent } from "../../content/context";
import Button from "../UI/Button";
import Countdown from "../UI/Countdown";
import { PHASE_COPY, prizePool } from "./phase";

const badgeTone = {
  live: "bg-ink-900 text-brand-400",
  dark: "bg-ink-900 text-white",
  soft: "bg-white text-ink-900 border-2 border-ink-900",
};

const QuizHero = ({ phase }) => {
  const { competition: c, general } = useSiteContent();
  const pool = prizePool(c.prizes);
  const top = c.prizes?.[0];
  const copy = PHASE_COPY[phase];

  const facts = [
    c.startDate && { icon: LuCalendarDays, label: "Starts", value: formatDate(c.startDate, { year: undefined }) },
    pool > 0 && { icon: LuTrophy, label: "Prize pool", value: formatNaira(pool) },
    c.entryFee > 0 && { icon: LuTicket, label: "Entry fee", value: formatNaira(c.entryFee) },
  ].filter(Boolean);

  return (
    <section className="relative overflow-hidden border-b-2 border-ink-900 bg-brand-400">
      <div aria-hidden="true" className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-300" />
      <div aria-hidden="true" className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-brand-300" />

      <div className="container-page relative grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span
            className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold ${badgeTone[copy.tone]}`}
          >
            {phase === "open" && (
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" aria-hidden="true" />
            )}
            {copy.badge}
            {c.edition && <span className="opacity-70">· {c.edition}</span>}
          </span>

          <h1 className="text-[2.5rem] leading-[1.08] font-extrabold tracking-tight text-balance sm:text-6xl">
            {c.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-800 md:text-xl">{c.summary}</p>

          {facts.length > 0 && (
            <dl className="mt-8 flex flex-wrap gap-3">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-2.5">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <div className="leading-tight">
                    <dt className="text-xs font-semibold text-ink-600">{label}</dt>
                    <dd className="font-extrabold">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {phase === "open" ? (
              <Button href="#register" variant="dark" size="lg">
                Register now
                <LuArrowDown className="h-5 w-5" aria-hidden="true" />
              </Button>
            ) : (
              <Button href={general.whatsappChannel} variant="dark" size="lg">
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                Get notified on WhatsApp
              </Button>
            )}
            <Button href="#how-it-works" variant="outline" size="lg">
              How it works
            </Button>
          </div>
        </div>

        {/* Right: prize + countdown card */}
        <div className="mx-auto w-full max-w-sm rotate-1 rounded-[2rem] border-2 border-ink-900 bg-paper p-7 shadow-press">
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-brand-400">
              <LuMedal className="h-7 w-7" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink-500">Top prize</p>
              <p className="text-3xl font-extrabold">{top ? formatNaira(top.amount) : "Cash prizes"}</p>
            </div>
          </div>

          {phase === "open" && c.registrationDeadline ? (
            <Countdown to={c.registrationDeadline} label="Registration closes in" />
          ) : phase === "upcoming" && c.startDate ? (
            <Countdown to={c.startDate} label="Competition starts in" />
          ) : (
            <p className="rounded-2xl bg-brand-100 p-4 text-sm leading-relaxed text-ink-800">
              {phase === "upcoming"
                ? "Dates for the next edition are coming soon. Join our WhatsApp channel to be first to know."
                : phase === "closed"
                  ? "Registration is closed for this edition. Good luck to everyone competing!"
                  : "This edition has ended. Join our WhatsApp channel to hear when the next one opens."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizHero;
