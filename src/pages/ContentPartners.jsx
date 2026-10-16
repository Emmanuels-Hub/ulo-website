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

const config = {
  path: "/content-partners",
  seo: {
    title: "Content & EdTech Partners",
    description:
      "Publishers, authors, creators and EdTech teams: partner with ULO AI to bring your learning content to students preparing for WAEC, JAMB and NECO.",
  },
  hero: {
    icon: LuBookOpen,
    eyebrow: "For publishers, creators & EdTech",
    title: (
      <>
        Your great content, in more <span className="highlight">students' hands.</span>
      </>
    ),
    intro:
      "Partner with ULO AI to turn your textbooks, question banks and lessons into interactive practice — and reach students when they're actually studying.",
    cta: "Become a content partner",
    visual: ContentMock,
  },
  benefits: {
    title: "Why creators work with ULO",
    intro: "We handle the technology, so your expertise can do what it does best: help students learn.",
    items: [
      {
        icon: LuUsers,
        title: "Reach motivated learners",
        desc: "Put your content in front of students who are actively preparing for exams.",
      },
      {
        icon: LuWandSparkles,
        title: "Make it interactive",
        desc: "Your material becomes practice questions, quick checks and mock tests that students actually use.",
      },
      {
        icon: LuBadgeCheck,
        title: "Credit where it's due",
        desc: "Your brand and authorship stay visible on the content you share.",
      },
      {
        icon: LuLightbulb,
        title: "Grow your audience",
        desc: "Introduce your brand to students who may not have discovered you yet.",
      },
      {
        icon: LuHandshake,
        title: "Terms that fit you",
        desc: "Licensing, co-creation or integration — we agree the commercial terms with every partner.",
      },
      {
        icon: LuSparkles,
        title: "A friendly team",
        desc: "Work directly with the people building ULO. No faceless process.",
      },
    ],
  },
  steps: {
    title: "From first chat to live content",
    items: [
      { title: "Introduce yourself", desc: "Tell us about your content and your audience using the form below." },
      { title: "Agree the plan", desc: "We'll suggest the right model and put the terms in writing." },
      {
        title: "Bring it to ULO",
        desc: "We turn your material into interactive practice, with you reviewing along the way.",
      },
      { title: "Launch & improve", desc: "Go live for students, then keep refining together." },
    ],
  },
  models: {
    title: "Pick the partnership that suits you",
    intro: "Every partnership is tailored — these are the most common starting points.",
    items: [
      {
        title: "Content licensing",
        desc: "For publishers and authors with existing books, notes or question banks.",
        points: ["Bring what you already have", "Your brand stays on your content", "Clear, written licensing terms"],
      },
      {
        title: "Co-creation",
        desc: "Build new exam-prep content together, designed for how students study on ULO.",
        points: ["Shared planning from day one", "Your expertise, our technology", "Launch and promote together"],
      },
      {
        title: "Platform integration",
        desc: "For EdTech teams who want to connect products or share learners.",
        points: [
          "Explore a technical integration",
          "Joint offers for students & schools",
          "Scoped together with our engineers",
        ],
      },
    ],
  },
  form: {
    topic: "Content",
    sidebarTitle: "Let's create something great",
    sidebarItems: [
      { icon: LuHandshake, text: "Terms agreed in writing" },
      { icon: LuBadgeCheck, text: "Your brand stays visible" },
      { icon: LuUsers, text: "A real person to work with" },
    ],
    formTitle: "Tell us about your content",
    submitLabel: "Send proposal",
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
  faqs: [
    {
      q: "What kind of content can we share?",
      a: "Textbooks, revision notes, question banks and past-question style material all work well — especially for WAEC, JAMB and NECO subjects. Tell us what you have and we'll suggest the best fit.",
    },
    {
      q: "Who owns the content?",
      a: "Ownership and usage rights are agreed in writing with every partner before anything goes live.",
    },
    {
      q: "How do partners benefit commercially?",
      a: "It depends on the partnership — for example licensing, revenue sharing or a co-branded offer. We agree the terms together up front.",
    },
    {
      q: "Do you work with individual teachers and creators?",
      a: "Yes. Great content can come from anywhere — individual teachers and creators are very welcome to apply.",
    },
  ],
};

const ContentPartners = () => <PartnerPage config={config} />;

export default ContentPartners;
