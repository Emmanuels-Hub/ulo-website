import { LuChartColumnIncreasing, LuListChecks, LuPencilLine, LuSignpost, LuTrophy } from "react-icons/lu";
import { formatNaira, useSiteContent } from "../../content/context";
import Reveal from "../UI/Reveal";
import SectionHeading from "../UI/SectionHeading";

const QuizHowItWorks = () => {
  const { competition: c } = useSiteContent();
  const rounds = c.rounds?.length || 3;
  const mandatory = c.mandatorySubjects?.join(" & ") || "English Language";
  const prizeLine = (c.prizes || []).map((p) => `${p.place} ${formatNaira(p.amount)}`).join(" · ");

  const steps = [
    {
      icon: LuPencilLine,
      title: "Register",
      desc: `Fill in the short form below and pick ${c.optionalCount || 2} subjects on top of ${mandatory}.`,
    },
    {
      icon: LuListChecks,
      title: `Play ${rounds} rounds`,
      desc: `Each round has a ${mandatory} quiz plus your chosen subjects. Answer as many as you can before time runs out.`,
    },
    {
      icon: LuChartColumnIncreasing,
      title: "Build your score",
      desc: "Every round adds to your total. Watch yourself climb the leaderboard as you go.",
    },
    {
      icon: LuTrophy,
      title: "Win prizes",
      desc: prizeLine ? `The top scorers win: ${prizeLine}.` : "The top scorers win cash prizes and certificates.",
    },
  ];

  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          icon={LuSignpost}
          title="Four easy steps to the podium"
          intro="Simple, fair and fun — designed so every student can give it a go."
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 90}
              className="relative rounded-[2rem] border border-ink-200 bg-white p-7 pt-9 transition hover:-translate-y-1 hover:border-ink-900"
            >
              <span className="absolute -top-4 left-7 flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 text-sm font-extrabold text-white">
                {i + 1}
              </span>
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-extrabold">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink-600">{desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default QuizHowItWorks;
