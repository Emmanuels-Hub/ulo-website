import {
  LuChartColumn,
  LuFileChartColumn,
  LuHeartHandshake,
  LuSmartphone,
  LuTarget,
  LuTrophy,
  LuUsers,
} from "react-icons/lu";
import PartnerPage from "../components/partners/PartnerPage";
import { ProgrammeMock } from "../components/partners/PartnerVisuals";
import { useSiteContent } from "../content/context";
import { buildPartnerConfig } from "../content/partners";

/* Fixed structure only — all text lives in content/partnersDefaults.js (editable in the admin). */
const structure = {
  path: "/ngos",
  heroIcon: LuHeartHandshake,
  visual: ProgrammeMock,
  benefitIcons: [LuSmartphone, LuTarget, LuTrophy, LuUsers, LuFileChartColumn, LuHeartHandshake],
  sidebarIcons: [LuTarget, LuUsers, LuChartColumn],
  form: {
    topic: "NGO",
    fields: [
      { name: "name", label: "Your name", required: true, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      { name: "organization", label: "Organisation", required: true, full: true },
      {
        name: "interest",
        label: "Interested in",
        type: "select",
        required: true,
        options: ["Pilot programme", "Sponsored access", "Competition partnership", "Not sure yet"],
      },
      {
        name: "students",
        label: "Students you support",
        type: "select",
        options: ["Under 100", "100 – 500", "500 – 2,000", "Over 2,000"],
      },
      { name: "location", label: "Where is your programme?", placeholder: "e.g. Kano State", full: true },
      {
        name: "message",
        label: "Tell us about your goals",
        type: "textarea",
        placeholder: "Who you serve, what you'd like to achieve, timelines…",
      },
    ],
  },
};

const NGOs = () => {
  const { partners } = useSiteContent();
  return <PartnerPage config={buildPartnerConfig(structure, partners.ngos)} />;
};

export default NGOs;
