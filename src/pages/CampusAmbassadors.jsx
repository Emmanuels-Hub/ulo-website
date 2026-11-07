import { LuCalendarDays, LuMegaphone, LuMessageCircle, LuRocket, LuSparkles, LuStar, LuUsers } from "react-icons/lu";
import PartnerPage from "../components/partners/PartnerPage";
import { AmbassadorMock } from "../components/partners/PartnerVisuals";
import { useSiteContent } from "../content/context";
import { buildPartnerConfig } from "../content/partners";

const thisYear = new Date().getFullYear();
const gradYears = Array.from({ length: 6 }, (_, i) => String(thisYear + i));

/* Fixed structure only — all text lives in content/partnersDefaults.js (editable in the admin). */
const structure = {
  path: "/campus-ambassadors",
  heroIcon: LuMegaphone,
  visual: AmbassadorMock,
  benefitIcons: [LuCalendarDays, LuUsers, LuRocket, LuStar, LuMessageCircle, LuSparkles],
  sidebarIcons: [LuCalendarDays, LuUsers, LuRocket],
  form: {
    topic: "Campus Ambassador",
    fields: [
      { name: "fullName", label: "Full name", required: true, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      { name: "university", label: "University / college", required: true, autoComplete: "organization" },
      { name: "course", label: "Course of study", required: true },
      { name: "phone", label: "Phone number (WhatsApp)", type: "tel", required: true, autoComplete: "tel" },
      { name: "gradYear", label: "Graduation year", type: "select", required: true, options: gradYears },
      {
        name: "motivation",
        label: "Why do you want to be a ULO Ambassador?",
        type: "textarea",
        required: true,
        placeholder: "Tell us about yourself and the ideas you'd bring to your campus…",
      },
    ],
  },
};

const CampusAmbassadors = () => {
  const { partners } = useSiteContent();
  return <PartnerPage config={buildPartnerConfig(structure, partners.ambassadors)} />;
};

export default CampusAmbassadors;
