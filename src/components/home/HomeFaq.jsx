import { Link } from "react-router-dom";
import { LuCircleHelp } from "react-icons/lu";
import Accordion from "../UI/Accordion";
import SectionHeading from "../UI/SectionHeading";
import { useSiteContent } from "../../content/context";

const HomeFaq = () => {
  const { faqs } = useSiteContent();
  if (!faqs.items?.length) return null;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="FAQs"
            icon={LuCircleHelp}
            title="Questions? We've got answers."
            intro="Can't find what you're looking for? Our team is always happy to help."
          />
          <Link
            to="/help"
            className="-mt-6 inline-flex font-bold underline decoration-brand-400 decoration-4 underline-offset-8 hover:decoration-ink-900"
          >
            Visit the help centre
          </Link>
        </div>
        <Accordion items={faqs.items} />
      </div>
    </section>
  );
};

export default HomeFaq;
