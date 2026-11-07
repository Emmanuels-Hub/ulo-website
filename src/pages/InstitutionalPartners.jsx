import {
  LuChartColumn,
  LuClipboardList,
  LuGraduationCap,
  LuHeadset,
  LuPrinter,
  LuSchool,
  LuTrophy,
  LuUsers,
} from "react-icons/lu";
import PartnerPage from "../components/partners/PartnerPage";
import { SchoolDashboardMock } from "../components/partners/PartnerVisuals";
import { useSiteContent } from "../content/context";
import { buildPartnerConfig } from "../content/partners";

/* Fixed structure only — all text lives in content/partnersDefaults.js (editable in the admin). */
const structure = {
  path: "/institutional-partners",
  heroIcon: LuSchool,
  visual: SchoolDashboardMock,
  benefitIcons: [LuGraduationCap, LuClipboardList, LuPrinter, LuUsers, LuChartColumn, LuTrophy],
  sidebarIcons: [LuHeadset, LuUsers, LuChartColumn],
  form: {
    topic: "Institution",
    fields: [
      { name: "firstName", label: "First name", required: true, autoComplete: "given-name" },
      { name: "lastName", label: "Last name", required: true, autoComplete: "family-name" },
      {
        name: "institution",
        label: "School or university name",
        required: true,
        full: true,
        placeholder: "e.g. Bright Future College",
      },
      {
        name: "role",
        label: "Your role",
        type: "select",
        required: true,
        options: [
          "Proprietor / Owner",
          "Principal / Head teacher",
          "Administrator",
          "Teacher / Lecturer",
          "IT",
          "Other",
        ],
      },
      {
        name: "students",
        label: "Number of students",
        type: "select",
        options: ["Under 200", "200 – 500", "500 – 1,000", "1,000 – 5,000", "Over 5,000"],
      },
      { name: "email", label: "Work email", type: "email", required: true, autoComplete: "email" },
      { name: "phone", label: "Phone / WhatsApp", type: "tel", autoComplete: "tel" },
      {
        name: "message",
        label: "What would you like ULO to help with?",
        type: "textarea",
        placeholder: "e.g. WAEC prep for SS3, termly exams, quiz competitions…",
      },
    ],
  },
};

const InstitutionalPartners = () => {
  const { partners } = useSiteContent();
  return <PartnerPage config={buildPartnerConfig(structure, partners.institutional)} />;
};

export default InstitutionalPartners;
