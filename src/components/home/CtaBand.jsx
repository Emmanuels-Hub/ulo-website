import { LuArrowRight, LuHandshake } from "react-icons/lu";
import Button from "../UI/Button";
import StoreButtons from "../UI/StoreButtons";
import Reveal from "../UI/Reveal";

/** Closing call-to-action: students download, organisations partner. */
const CtaBand = () => (
  <section className="py-20 md:py-24">
    <div className="container-page grid gap-6 lg:grid-cols-[1.5fr_1fr]">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] border-2 border-ink-900 bg-brand-400 p-8 shadow-press md:p-14">
        <div aria-hidden="true" className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-brand-300" />
        <div className="relative">
          <h2 className="max-w-lg text-3xl leading-tight font-extrabold tracking-tight text-balance md:text-5xl">
            Your next exam is your best one yet.
          </h2>
          <p className="mt-4 max-w-md text-lg text-ink-800">
            Download ULO AI for free and start practising in minutes.
          </p>
          <StoreButtons className="mt-8" />
        </div>
      </Reveal>

      <Reveal delay={120} className="flex flex-col rounded-[2.5rem] bg-ink-900 p-8 text-white md:p-10">
        <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400 text-ink-900">
          <LuHandshake className="h-7 w-7" aria-hidden="true" />
        </span>
        <h2 className="text-2xl font-extrabold">Schools, NGOs & organisations</h2>
        <p className="mt-3 flex-1 leading-relaxed text-ink-300">
          Bring ULO AI to your students, beneficiaries or team. Let's build smarter learning together.
        </p>
        <Button to="/institutional-partners" className="mt-8 self-start">
          Partner with us
          <LuArrowRight className="h-5 w-5" aria-hidden="true" />
        </Button>
      </Reveal>
    </div>
  </section>
);

export default CtaBand;
