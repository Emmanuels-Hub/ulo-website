import {
  LuBadgeCheck,
  LuBookOpen,
  LuHandshake,
  LuLightbulb,
  LuSparkles,
  LuUsers,
  LuWandSparkles,
} from "react-icons/lu";
import PartnerPage from "../components/partners/PartnerPage";
import { ContentMock } from "../components/partners/PartnerVisuals";
import { useSiteContent } from "../content/context";
import { buildPartnerConfig } from "../content/partners";

/* Fixed structure only — all text lives in content/partnersDefaults.js (editable in the admin). */
const structure = {
  path: "/content-partners",
  heroIcon: LuBookOpen,
  visual: ContentMock,
  benefitIcons: [LuUsers, LuWandSparkles, LuBadgeCheck, LuLightbulb, LuHandshake, LuSparkles],
  sidebarIcons: [LuHandshake, LuBadgeCheck, LuUsers],
  form: {
    topic: "Content",
    fields: [
      { name: "name", label: "Your name", required: true, autoComplete: "name" },
      { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
      { name: "organization", label: "Organisation / brand", required: true, full: true },
      {
        name: "type",
        label: "You are a…",
        type: "select",
        required: true,
        options: ["Publisher", "Author / teacher", "Content creator", "EdTech company", "Other"],
      },
      {
        name: "model",
        label: "Interested in",
        type: "select",
        options: ["Content licensing", "Co-creation", "Platform integration", "Not sure yet"],
      },
      {
        name: "message",
        label: "Tell us about your content",
        type: "textarea",
        placeholder: "Subjects, levels, formats, and a link if you have one…",
      },
    ],
  },
};

const ContentPartners = () => {
  const { partners } = useSiteContent();
  return <PartnerPage config={buildPartnerConfig(structure, partners.content)} />;
};

export default ContentPartners;
