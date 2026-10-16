import { LuCalendarDays, LuMegaphone, LuMessageCircle, LuRocket, LuSparkles, LuStar, LuUsers } from "react-icons/lu";
import PartnerPage from "../components/partners/PartnerPage";
import { AmbassadorMock } from "../components/partners/PartnerVisuals";

const thisYear = new Date().getFullYear();
const gradYears = Array.from({ length: 6 }, (_, i) => String(thisYear + i));

const config = {
  path: "/campus-ambassadors",
  faqTitle: "Questions applicants ask",
  seo: {
    title: "Campus Ambassadors",
    description:
      "Become a ULO AI Campus Ambassador: lead study sessions and events on your campus, grow your network and build real leadership experience.",
  },
  hero: {
    icon: LuMegaphone,
    eyebrow: "For university students",
    title: (
      <>
        Lead the change on <span className="highlight">your campus.</span>
      </>
    ),
    intro:
      "Join the ULO AI Campus Ambassadors programme. Run study sessions and events, help fellow students prepare smarter, and build leadership experience you can be proud of.",
    cta: "Apply now",
    visual: AmbassadorMock,
  },
  benefits: {
    title: "Why become an ambassador?",
    intro: "More than a title — a chance to make a difference and grow while you study.",
    items: [
      {
        icon: LuCalendarDays,
        title: "Lead real initiatives",
        desc: "Organise study sessions, demos and events, and be the face of ULO on your campus.",
      },
      {
        icon: LuUsers,
        title: "Grow your network",
        desc: "Meet ambitious students across Nigeria and work directly with the ULO team.",
      },
      {
        icon: LuRocket,
        title: "Build your CV",
        desc: "Gain hands-on experience in leadership, communication and community building.",
      },
      {
        icon: LuStar,
        title: "Perks for active ambassadors",
        desc: "Perks such as ULO Premium access and merch are confirmed with each cohort when you join.",
      },
      {
        icon: LuMessageCircle,
        title: "Shape the product",
        desc: "Share what students on your campus need and help us make ULO better.",
      },
      {
        icon: LuSparkles,
        title: "Flexible around studies",
        desc: "Fit ambassador activities around your timetable.",
      },
    ],
  },
  steps: {
    title: "Your journey starts here",
    items: [
      { title: "Apply", desc: "Fill in the form below and tell us why you'd be a great ambassador." },
      { title: "Get selected", desc: "We review applications and reach out to selected students." },
      { title: "Get onboarded", desc: "Meet the team, learn about ULO and plan your first activity." },
      { title: "Make an impact", desc: "Run sessions and events and help students on your campus." },
    ],
  },
  form: {
    topic: "Campus Ambassador",
    sidebarTitle: "Ready to lead?",
    sidebarItems: [
      { icon: LuCalendarDays, text: "Run events and study sessions" },
      { icon: LuUsers, text: "Join a community of student leaders" },
      { icon: LuRocket, text: "Build real leadership experience" },
    ],
    formTitle: "Apply to be an ambassador",
    submitLabel: "Submit application",
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
  faqs: [
    {
      q: "How much time does it take?",
      a: "It's flexible and fits around your studies. We'll agree expectations with you when you join.",
    },
    {
      q: "Do I need to be a tech expert?",
      a: "Not at all! We look for passion, leadership and good communication. Whatever you study, if you love helping others learn, you're a great fit.",
    },
    {
      q: "Is this a paid role?",
      a: "It's a volunteer leadership programme. Any perks or rewards are confirmed with each cohort when you join.",
    },
    {
      q: "Who can apply?",
      a: "Students currently enrolled at a university, polytechnic or college of education in Nigeria.",
    },
  ],
};

const CampusAmbassadors = () => <PartnerPage config={config} />;

export default CampusAmbassadors;
