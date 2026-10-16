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

const config = {
  path: "/institutional-partners",
  seo: {
    title: "For Schools & Universities",
    description:
      "Bring ULO AI to your school or university: an AI study companion for every student, plus a portal to enrol students, set exams and quizzes, print papers and track results.",
  },
  hero: {
    icon: LuSchool,
    eyebrow: "For schools & universities",
    title: (
      <>
        Better exam results for students. <span className="highlight">More time</span> for teachers.
      </>
    ),
    intro:
      "ULO AI helps your students practise and prepare for WAEC, JAMB and NECO — while your school portal makes setting exams, running quizzes and tracking results simple.",
    cta: "Partner with us",
    visual: SchoolDashboardMock,
  },
  benefits: {
    title: "Everything your school needs in one place",
    intro: "Tools for students, teachers and administrators — built for the way Nigerian schools work.",
    items: [
      {
        icon: LuGraduationCap,
        title: "Practice for every student",
        desc: "Students practise WAEC, JAMB and NECO-style questions and sit timed mock exams on their phones. Learners aged 18+ can also use the AI tutor.",
      },
      {
        icon: LuClipboardList,
        title: "Exams & quizzes in minutes",
        desc: "Build tests from your own questions or the ULO question bank, schedule them and let ULO do the marking.",
      },
      {
        icon: LuPrinter,
        title: "Print-ready papers",
        desc: "Prefer paper? Export professionally formatted exam papers to print for your classrooms.",
      },
      {
        icon: LuUsers,
        title: "Students & teachers, organised",
        desc: "Enrol students, invite teachers and manage who sees what — all from your school portal.",
      },
      {
        icon: LuChartColumn,
        title: "Clear results",
        desc: "See performance by student, class and subject, so teachers know exactly who needs extra help.",
      },
      {
        icon: LuTrophy,
        title: "School competitions",
        desc: "Run friendly quiz competitions that get students excited about learning.",
      },
    ],
  },
  steps: {
    title: "Up and running in four steps",
    items: [
      { title: "Say hello", desc: "Tell us about your school using the form below — we'll set up a short call." },
      {
        title: "Set up your portal",
        desc: "Add your school details, student numbers and the people we should contact.",
      },
      {
        title: "Bring everyone in",
        desc: "Invite your teachers and enrol your students. We help you every step of the way.",
      },
      { title: "Teach, test & track", desc: "Create exams and quizzes, follow results and watch confidence grow." },
    ],
  },
  form: {
    topic: "Institution",
    sidebarTitle: "Let's bring ULO to your school",
    sidebarItems: [
      { icon: LuHeadset, text: "A friendly onboarding call for your team" },
      { icon: LuUsers, text: "Help enrolling teachers and students" },
      { icon: LuChartColumn, text: "A plan that fits your school's size" },
    ],
    formTitle: "Tell us about your institution",
    submitLabel: "Request a call",
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
  faqs: [
    {
      q: "Do students need a computer?",
      a: "No. Students use the ULO AI app on their phones, and teachers and administrators manage everything from the web portal.",
    },
    {
      q: "Can teachers use their own questions?",
      a: "Yes. Teachers can add their own questions, use the ULO question bank, or mix both — then run tests online or print them.",
    },
    {
      q: "How much does a school partnership cost?",
      a: "It depends on the number of students and what you need. Fill in the form and we'll put together a plan that fits your school.",
    },
    {
      q: "Do you help us get started?",
      a: "Yes. Every school gets onboarding support so teachers and administrators feel confident from day one.",
    },
  ],
};

const InstitutionalPartners = () => <PartnerPage config={config} />;

export default InstitutionalPartners;
