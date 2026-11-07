import {
  LuBriefcase,
  LuChartColumn,
  LuClipboardCheck,
  LuPrinter,
  LuSmartphone,
  LuTrophy,
  LuUsers,
} from "react-icons/lu";
import PartnerPage from "../components/partners/PartnerPage";
import { TeamAssessmentMock } from "../components/partners/PartnerVisuals";
import { useSiteContent } from "../content/context";
import { buildPartnerConfig } from "../content/partners";

/* Fixed structure only — all text lives in content/partnersDefaults.js (editable in the admin). */
const structure = {
  path: "/corporate-learning",
  heroIcon: LuBriefcase,
  visual: TeamAssessmentMock,
  benefitIcons: [LuClipboardCheck, LuSmartphone, LuChartColumn, LuTrophy, LuUsers, LuPrinter],
  sidebarIcons: [LuClipboardCheck, LuUsers, LuChartColumn],
  form: {
    topic: "Corporate",
    fields: [
      { name: "firstName", label: "First name", required: true, autoComplete: "given-name" },
      { name: "lastName", label: "Last name", required: true, autoComplete: "family-name" },
      { name: "company", label: "Company name", required: true, full: true, autoComplete: "organization" },
      {
        name: "size",
        label: "Team size",
        type: "select",
        required: true,
        options: ["1 – 25", "26 – 100", "101 – 500", "Over 500"],
      },
      { name: "email", label: "Work email", type: "email", required: true, autoComplete: "email" },
      {
        name: "message",
        label: "What would you like to use ULO for?",
        type: "textarea",
        placeholder: "e.g. onboarding quizzes, product knowledge checks, recruitment tests…",
      },
    ],
  },
};

const CorporateLearning = () => {
  const { partners } = useSiteContent();
  return <PartnerPage config={buildPartnerConfig(structure, partners.corporate)} />;
};

export default CorporateLearning;
