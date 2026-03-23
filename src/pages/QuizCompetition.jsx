import QuizHeroSection from "../components/sections/QuizHeroSection";
import QuizAboutSection from "../components/sections/QuizAboutSection";
import QuizHowItWorksSection from "../components/sections/QuizHowItWorksSection";
import QuizScheduleSection from "../components/sections/QuizScheduleSection";
import QuizPrizeSection from "../components/sections/QuizPrizeSection";
import QuizWhatsAppSection from "../components/sections/QuizWhatsAppSection";
import QuizRegistrationForm from "../components/sections/QuizRegistrationForm";
import QuizFAQSection from "../components/sections/QuizFAQSection";

const QuizCompetition = () => {
  return (
    <>
      <QuizHeroSection />
      <QuizAboutSection />
      <QuizHowItWorksSection />
      <QuizScheduleSection />
      <QuizPrizeSection />
      <QuizWhatsAppSection />
      <QuizRegistrationForm />
      <QuizFAQSection />
    </>
  );
};

export default QuizCompetition;
