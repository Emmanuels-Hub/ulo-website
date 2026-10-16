import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { LuCircleHelp } from "react-icons/lu";
import Seo from "../components/Seo";
import Accordion from "../components/UI/Accordion";
import Button from "../components/UI/Button";
import SectionHeading from "../components/UI/SectionHeading";
import QuizHero from "../components/quiz/QuizHero";
import QuizHowItWorks from "../components/quiz/QuizHowItWorks";
import QuizTimeline from "../components/quiz/QuizTimeline";
import QuizPrizes from "../components/quiz/QuizPrizes";
import QuizRegistration from "../components/quiz/QuizRegistration";
import { getPhase, prizePool } from "../components/quiz/phase";
import { formatNaira, useSiteContent } from "../content/context";
import { SITE } from "../config/site";

/* Event + FAQ structured data so Google can show dates, price and Q&A. */
const buildJsonLd = (c) => {
  const graph = [];
  if (c.startDate) {
    const last = [...(c.rounds || [])].reverse().find((r) => r.date);
    graph.push({
      "@type": "Event",
      name: `${c.headline}${c.edition ? ` — ${c.edition}` : ""}`,
      description: c.summary,
      startDate: c.startDate,
      ...(last && { endDate: last.date }),
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: { "@type": "VirtualLocation", url: `${SITE.url}/competition` },
      image: `${SITE.url}${SITE.ogImage}`,
      organizer: { "@type": "Organization", name: SITE.name, url: SITE.url },
      offers: {
        "@type": "Offer",
        price: String(c.entryFee || 0),
        priceCurrency: "NGN",
        url: `${SITE.url}/competition#register`,
        availability: "https://schema.org/InStock",
      },
    });
  }
  if (c.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: c.faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }
  return graph.length ? { "@context": "https://schema.org", "@graph": graph } : undefined;
};

const QuizCompetition = () => {
  const { competition: c, general } = useSiteContent();
  const [now] = useState(() => Date.now()); // captured once per visit
  const phase = getPhase(c, now);
  const pool = prizePool(c.prizes);

  return (
    <>
      <Seo
        title={`Quiz Competition${c.edition ? ` — ${c.edition}` : ""}`}
        description={`Join the ULO AI monthly quiz competition. Compete across ${c.rounds?.length || 3} rounds${
          pool ? ` and win from a ${formatNaira(pool)} prize pool` : ""
        }. Open to secondary school and university students in Nigeria.`}
        jsonLd={buildJsonLd(c)}
      />
      <QuizHero phase={phase} />
      <QuizHowItWorks />
      <QuizTimeline />
      <QuizPrizes />
      <QuizRegistration phase={phase} />

      {c.faqs?.length > 0 && (
        <section className="bg-white py-20 md:py-28">
          <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading
                align="left"
                eyebrow="FAQs"
                icon={LuCircleHelp}
                title="Competition questions"
                intro="Still unsure about something? Our team replies fast on WhatsApp."
              />
              <Button href={general.whatsappChannel} variant="soft" className="-mt-6">
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" /> Ask us on WhatsApp
              </Button>
            </div>
            <Accordion items={c.faqs} />
          </div>
        </section>
      )}
    </>
  );
};

export default QuizCompetition;
