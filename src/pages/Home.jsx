import Seo from "../components/Seo";
import HomeHero from "../components/home/HomeHero";
import FeatureCards from "../components/home/FeatureCards";
import HowItWorks from "../components/home/HowItWorks";
import ConfidenceSection from "../components/home/ConfidenceSection";
import Testimonials from "../components/home/Testimonials";
import HomeFaq from "../components/home/HomeFaq";
import CtaBand from "../components/home/CtaBand";
import { useSiteContent } from "../content/context";

const faqJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

const Home = () => {
  const { faqs } = useSiteContent();

  return (
  <>
    <Seo jsonLd={faqs.items?.length ? faqJsonLd(faqs.items) : undefined} />
    <HomeHero />
    <FeatureCards />
    <HowItWorks />
    <ConfidenceSection />
    <Testimonials />
    <HomeFaq />
    <CtaBand />
  </>
  );
};

export default Home;
