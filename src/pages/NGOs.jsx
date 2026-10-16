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

const config = {
  path: "/ngos",
  seo: {
    title: "NGOs & Foundations",
    description:
      "Partner with ULO AI to help the young people you serve prepare for WAEC, JAMB and NECO — with practice exams, quiz competitions and progress you can report on.",
  },
  hero: {
    icon: LuHeartHandshake,
    eyebrow: "For NGOs & foundations",
    title: (
      <>
        Help more young people pass the exams that <span className="highlight">open doors.</span>
      </>
    ),
    intro:
      "Partner with ULO AI to give the students you support exam practice, motivating quiz competitions and clear progress tracking — all on the phones they already have.",
    cta: "Start a conversation",
    visual: ProgrammeMock,
  },
  benefits: {
    title: "Built for real impact",
    intro: "Simple to roll out, motivating for students, and easy to report on.",
    items: [
      {
        icon: LuSmartphone,
        title: "Works on a phone",
        desc: "No computer lab needed — students practise in the ULO app on an Android phone with an internet connection.",
      },
      {
        icon: LuTarget,
        title: "Focused on exams",
        desc: "WAEC, JAMB and NECO-style practice and timed mock exams that build skill and confidence.",
      },
      {
        icon: LuTrophy,
        title: "Motivation built in",
        desc: "Quiz competitions, leaderboards, badges and streaks keep students coming back.",
      },
      {
        icon: LuUsers,
        title: "Easy to manage",
        desc: "Enrol your students and follow their activity from one web portal.",
      },
      {
        icon: LuFileChartColumn,
        title: "Results you can share",
        desc: "Track participation and scores to report back to your board and funders.",
      },
      {
        icon: LuHeartHandshake,
        title: "A committed partner",
        desc: "We plan with you, help onboard your team, and stay in touch throughout the programme.",
      },
    ],
  },
  steps: {
    title: "How we work together",
    items: [
      { title: "Talk to us", desc: "Tell us about your programme, the students you serve and your goals." },
      { title: "Plan the programme", desc: "Agree who takes part, for how long, and how success will be measured." },
      { title: "Launch & onboard", desc: "We help set up accounts and get facilitators and students started." },
      { title: "Track & report", desc: "Follow progress through the portal and share results with your funders." },
    ],
  },
  models: {
    title: "Flexible ways to partner",
    intro: "Start small or go big — every programme is shaped around your goals and funding.",
    items: [
      {
        title: "Pilot programme",
        desc: "Try ULO with one community or a small group of schools before scaling.",
        points: ["Small, focused start", "Clear success measures", "Learn before you scale"],
      },
      {
        title: "Sponsored access",
        desc: "Fund ULO access for a group of students in your programme.",
        points: ["You choose who benefits", "Progress tracked in one place", "Report-ready results"],
      },
      {
        title: "Competition partnership",
        desc: "Sponsor or co-host a quiz competition for the students you serve.",
        points: ["Exciting for students", "Visibility for your organisation", "Planned together"],
      },
    ],
  },
  form: {
    topic: "NGO",
    sidebarTitle: "Let's make a difference together",
    sidebarItems: [
      { icon: LuTarget, text: "A programme shaped around your goals" },
      { icon: LuUsers, text: "Help onboarding your team and students" },
      { icon: LuChartColumn, text: "Progress you can report on" },
    ],
    formTitle: "Tell us about your programme",
    submitLabel: "Start the conversation",
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
  faqs: [
    {
      q: "Do students need a computer?",
      a: "No. Students use the ULO AI app on an Android phone. They do need an internet connection to practise and take part in quizzes.",
    },
    {
      q: "Can younger students use the AI tutor?",
      a: "The AI features (AI tutor, Image Studio and AI test creation) are for users aged 18 and over. Practice exams, quizzes, competitions and progress tracking are open to students of every age.",
    },
    {
      q: "How do we measure impact?",
      a: "Through the web portal you can follow participation and scores for the students in your programme, which you can use in reports to your funders.",
    },
    {
      q: "What does a partnership cost?",
      a: "It depends on the number of students and the kind of programme. Tell us about your plans and we'll suggest options that fit your budget.",
    },
  ],
};

const NGOs = () => <PartnerPage config={config} />;

export default NGOs;
