import { LuMessageSquareHeart, LuQuote, LuStar } from "react-icons/lu";
import Reveal from "../UI/Reveal";
import SectionHeading from "../UI/SectionHeading";
import { useSiteContent } from "../../content/context";


const initials = (name) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("");

const Testimonials = () => {
  const { testimonials } = useSiteContent();
  const items = (testimonials.items || []).filter((t) => t.quote && t.name);
  // Only real, admin-approved quotes are shown — the section hides until there are some.
  if (!items.length) return null;

  return (
  <section className="bg-brand-50 py-20 md:py-28">
    <div className="container-page">
      <SectionHeading
        eyebrow="Student stories"
        icon={LuMessageSquareHeart}
        title="Students are studying happier"
        intro="Here's what learners say after making ULO part of their routine."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <Reveal
            as="figure"
            key={t.name}
            delay={i * 100}
            className={`flex flex-col rounded-[2rem] border border-brand-200 bg-white p-7 shadow-soft ${
              items.length === 3 && i === 1 ? "md:-translate-y-4" : ""
            }`}
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex gap-0.5" aria-label={`${t.rating || 5} out of 5 stars`}>
                {Array.from({ length: t.rating || 5 }).map((_, s) => (
                  <LuStar key={s} className="h-5 w-5 fill-brand-400 text-brand-600" aria-hidden="true" />
                ))}
              </div>
              <LuQuote className="h-8 w-8 text-brand-300" aria-hidden="true" />
            </div>
            <blockquote className="flex-1 text-lg leading-relaxed text-ink-800">“{t.quote}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-400 font-extrabold text-ink-900">
                {initials(t.name)}
              </span>
              <span>
                <span className="block font-bold">{t.name}</span>
                <span className="block text-sm text-ink-500">{t.role}</span>
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Testimonials;
