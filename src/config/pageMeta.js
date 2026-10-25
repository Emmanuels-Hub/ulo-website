/**
 * Title + description for every public page — the single source for SEO.
 *
 * Used in two places:
 *   1. <Seo /> at runtime (falls back to the entry for the current path)
 *   2. scripts/prerender-meta.mjs at build time, which writes a static
 *      dist/<path>/index.html per page so WhatsApp, X, Facebook and LinkedIn
 *      previews show the right title, description and image without running JS.
 *
 * Plain JS only (no JSX) so Node can load it during the build.
 */
import { SITE } from "./site.js";

/** "Features | ULO AI", or the brand + tagline for the home page. */
export const pageTitle = (title) => (title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`);

export const PAGE_META = {
  "/": {
    title: "",
    description:
      "ULO AI helps Nigerian students prepare for WAEC, JAMB and NECO with timed practice exams, quiz competitions and progress tracking — plus AI study tools for learners aged 18+.",
  },
  "/features": {
    title: "Features",
    description:
      "See everything ULO AI can do: timed WAEC, JAMB and NECO practice exams, quiz competitions with leaderboards, progress tracking, and AI study tools for learners aged 18+.",
  },
  "/competition": {
    title: "Quiz Competition",
    description:
      "Join the ULO AI monthly quiz competition. Compete across three rounds, climb the leaderboard and win cash prizes. Open to secondary school and university students in Nigeria.",
  },
  "/about": {
    title: "About us",
    description:
      "ULO AI is on a mission to help every Nigerian student prepare for exams with confidence — with practice exams, quiz competitions and study tools they can actually afford.",
  },
  "/contact": {
    title: "Contact us",
    description:
      "Get in touch with the ULO AI team by WhatsApp, email or phone. We're happy to help with the app, the quiz competition, schools and partnerships.",
  },
  "/help": {
    title: "Help Centre",
    description:
      "Answers to common questions about ULO AI — getting started, accounts, Premium and payments, practice, competitions, privacy and troubleshooting.",
  },
  "/privacy": {
    title: "Privacy Policy & Terms",
    description:
      "How ULO AI collects, uses and protects your information, and the terms for using our app, website and AI features.",
  },
  "/institutional-partners": {
    title: "For Schools & Universities",
    description:
      "Bring ULO AI to your school or university: exam practice and quiz competitions for every student, plus a portal to enrol students, set exams and quizzes, print papers and track results.",
  },
  "/content-partners": {
    title: "Content & EdTech Partners",
    description:
      "Publishers, authors, creators and EdTech teams: partner with ULO AI to bring your learning content to students preparing for WAEC, JAMB and NECO.",
  },
  "/ngos": {
    title: "NGOs & Foundations",
    description:
      "Partner with ULO AI to help the young people you serve prepare for WAEC, JAMB and NECO — with practice exams, quiz competitions and progress you can report on.",
  },
  "/corporate-learning": {
    title: "Corporate Learning",
    description:
      "Use ULO AI to run quizzes, assessments and friendly competitions for your team — set up in a web portal, taken on any phone, with results in one place.",
  },
  "/campus-ambassadors": {
    title: "Campus Ambassadors",
    description:
      "Become a ULO AI Campus Ambassador: lead study sessions and events on your campus, grow your network and build real leadership experience.",
  },
};
