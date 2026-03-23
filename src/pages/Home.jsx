import HeroSection from "../components/sections/HeroSection";
import ProcessSection from "../components/sections/ProcessSection";
import TestimonialBanner from "../components/sections/TestimonialBanner";
import FeaturesGrid from "../components/sections/FeaturesGrid";
import WhyChooseSection from "../components/sections/WhyChooseSection";
import CTASection from "../components/sections/CTASection";
import FeaturesDetailSection from "../components/sections/FeaturesDetailSection";
import JoinMovementSection from "../components/sections/JoinMovementSection";
import ExamAnxietySection from "../components/sections/ExamAnxietySection";
import StudentTestimonials from "../components/sections/StudentTestimonials";
import FAQSection from "../components/sections/FAQSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProcessSection />
      <TestimonialBanner />
      <FeaturesGrid />
      <WhyChooseSection />
      <CTASection />
      <FeaturesDetailSection />
      <JoinMovementSection />
      <ExamAnxietySection />
      <StudentTestimonials />
      <FAQSection />
    </>
  );
};

export default Home;
