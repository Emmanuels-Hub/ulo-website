import { LuDownload, LuRocket, LuRoute, LuUserRound } from "react-icons/lu";
import Reveal from "../UI/Reveal";
import SectionHeading from "../UI/SectionHeading";

const steps = [
  {
    icon: LuDownload,
    title: "Download ULO AI",
    desc: "Grab the free app from Google Play. It takes less than a minute.",
  },
  {
    icon: LuUserRound,
    title: "Tell us about you",
    desc: "Pick your class, subjects and the exam you're preparing for.",
  },
  {
    icon: LuRocket,
    title: "Start learning",
    desc: "Chat with your tutor, generate questions from notes, or jump into a mock exam.",
  },
];

const HowItWorks = () => (
  <section className="py-20 md:py-28">
    <div className="container-page">
      <SectionHeading eyebrow="How it works" icon={LuRoute} title="Up and running in 3 easy steps" />

      <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
        {/* dashed connector */}
        <div
          aria-hidden="true"
          className="absolute top-10 right-[16%] left-[16%] hidden border-t-2 border-dashed border-ink-300 md:block"
        />
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <Reveal as="li" key={title} delay={i * 120} className="relative text-center">
            <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-ink-900 bg-brand-400 shadow-press">
              <Icon className="h-8 w-8" aria-hidden="true" />
              <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-ink-900 text-sm font-extrabold text-white">
                {i + 1}
              </span>
            </div>
            <h3 className="text-xl font-extrabold">{title}</h3>
            <p className="mx-auto mt-2 max-w-xs leading-relaxed text-ink-600">{desc}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorks;
