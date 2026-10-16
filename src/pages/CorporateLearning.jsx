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

const config = {
  path: "/corporate-learning",
  seo: {
    title: "Corporate Learning",
    description:
      "Use ULO AI to run quizzes, assessments and friendly competitions for your team — set up in a web portal, taken on any phone, with results in one place.",
  },
  hero: {
    icon: LuBriefcase,
    eyebrow: "For companies & teams",
    title: (
      <>
        Quick assessments your team will <span className="highlight">actually enjoy.</span>
      </>
    ),
    intro:
      "Check knowledge, run training quizzes and host friendly competitions for your staff — set up in minutes, taken on any phone, with results in one place.",
    cta: "Talk to us",
    visual: TeamAssessmentMock,
  },
  benefits: {
    title: "Simple tools for learning at work",
    intro: "Everything you need to test, train and engage your people — without a heavy LMS.",
    items: [
      {
        icon: LuClipboardCheck,
        title: "Assessments in minutes",
        desc: "Create quizzes and tests from your own questions, set a time limit and let ULO do the marking.",
      },
      {
        icon: LuSmartphone,
        title: "Taken on any phone",
        desc: "Staff join from the ULO app — no laptops or special equipment needed.",
      },
      {
        icon: LuChartColumn,
        title: "Clear results",
        desc: "See scores by person and team so you know where extra training will help most.",
      },
      {
        icon: LuTrophy,
        title: "Friendly competitions",
        desc: "Turn training into a game with quiz competitions and leaderboards.",
      },
      {
        icon: LuUsers,
        title: "People in one place",
        desc: "Add your team, organise them into groups and manage access from the web portal.",
      },
      {
        icon: LuPrinter,
        title: "Online or on paper",
        desc: "Run assessments in the app, or export formatted papers to print.",
      },
    ],
  },
  steps: {
    title: "From first call to first quiz",
    items: [
      { title: "Tell us your goals", desc: "Onboarding, product knowledge, recruitment tests — share what you need." },
      { title: "Set up your portal", desc: "We help you create your organisation account and add your team." },
      { title: "Create & share", desc: "Build your first assessment and invite your people to take it." },
      { title: "Review & improve", desc: "Check the results and plan the next round of training." },
    ],
  },
  models: {
    title: "Ways companies use ULO",
    intro: "A few popular starting points — we'll tailor the setup to you.",
    items: [
      {
        title: "Team assessments",
        desc: "Regular knowledge checks for onboarding, products, policies or skills.",
        points: ["Your own questions", "Timed tests", "Results by team"],
      },
      {
        title: "Training competitions",
        desc: "Make learning stick with friendly quiz competitions between teams.",
        points: ["Leaderboards", "Great for engagement", "Easy to run"],
      },
      {
        title: "Education & CSR",
        desc: "Support students in your community through sponsored access or a quiz competition.",
        points: ["Meaningful impact", "Visible brand support", "Planned with our team"],
      },
    ],
  },
  form: {
    topic: "Corporate",
    sidebarTitle: "Let's upskill your team",
    sidebarItems: [
      { icon: LuClipboardCheck, text: "Help setting up your first assessment" },
      { icon: LuUsers, text: "Onboarding for your admins" },
      { icon: LuChartColumn, text: "A plan that fits your team size" },
    ],
    formTitle: "Tell us about your team",
    submitLabel: "Request a call",
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
  faqs: [
    {
      q: "Can we use our own questions?",
      a: "Yes. You can create assessments from your own questions and run them in the app or print them.",
    },
    {
      q: "What do employees need?",
      a: "Just the ULO AI app on an Android phone and an internet connection. Admins manage everything from the web portal.",
    },
    {
      q: "Do you support single sign-on (SSO)?",
      a: "Not at the moment. Staff sign in with their email address or Google account.",
    },
    {
      q: "How much does it cost?",
      a: "It depends on your team size and what you need. Fill in the form and we'll suggest a plan.",
    },
  ],
};

const CorporateLearning = () => <PartnerPage config={config} />;

export default CorporateLearning;
