/**
 * Fallback website content.
 *
 * The live values are edited in the admin dashboard (Website → …) and stored
 * in Firestore `site_content/{general|competition|testimonials|faqs}`.
 * These defaults render instantly (good for SEO) and are used whenever
 * Firestore is unreachable or a field hasn't been filled in yet.
 * Keep the shape in sync with ulo-admin's src/types/siteContent.ts.
 */
import { DEFAULT_HELP } from "./helpDefaults";

export const DEFAULT_CONTENT = {
  general: {
    email: "support@uloai.com",
    phone: "+234 906 161 6524",
    whatsappNumber: "2349061616524",
    supportHours: "Mon – Fri, 8am – 5pm (WAT)",
    location: "Lagos, Nigeria (remote-first team)",
    whatsappChannel: "https://whatsapp.com/channel/0029Vb7CoKm1t90g7JR9Po2E",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.axogenesis.ulo_ai",
    appStoreUrl: "",
    portalUrl: "https://portal.uloai.tech/portal",
    socials: { facebook: "", x: "", instagram: "", linkedin: "", tiktok: "", youtube: "" },
    announcement: { enabled: false, text: "", linkLabel: "", linkUrl: "" },
  },

  competition: {
    /** upcoming = dates announced, registration not open yet
     *  open     = registration form is live
     *  closed   = registration closed, competition running
     *  ended    = edition finished, waiting for the next one */
    status: "upcoming",
    edition: "",
    headline: "ULO AI Monthly Quiz Challenge",
    summary:
      "A friendly academic challenge for secondary school and university students. Compete across three rounds, climb the leaderboard and win cash prizes.",
    entryFee: 1000,
    /** Shown under the registration button — tell students what happens next (payment, links…) */
    registrationNote:
      "After you register, join our WhatsApp channel for payment details, round reminders and quiz links.",
    startDate: "",
    registrationDeadline: "",
    resultsDate: "",
    rounds: [
      { title: "Round 1", label: "Kickoff", date: "", time: "8:00 PM – 10:00 PM" },
      { title: "Round 2", label: "Elimination", date: "", time: "8:00 PM – 10:00 PM" },
      { title: "Grand Final", label: "Final battle", date: "", time: "8:00 PM – 10:00 PM" },
    ],
    mandatorySubjects: ["English Language"],
    optionalSubjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Civic Education",
      "Economics",
      "Government",
      "Literature in English",
      "History",
    ],
    optionalCount: 2,
    prizes: [
      {
        place: "1st Place",
        amount: 100000,
        perks: ["Cash reward", "Certificate of excellence", "Leaderboard spotlight", "ULO AI merch"],
      },
      { place: "2nd Place", amount: 50000, perks: ["Cash reward", "Recognition certificate", "Leaderboard feature"] },
      { place: "3rd Place", amount: 20000, perks: ["Cash reward", "Participation certificate", "Leaderboard listing"] },
    ],
    faqs: [
      {
        q: "Who can take part?",
        a: "Any student — secondary school, university, or preparing for entrance exams. All you need is a phone and an internet connection.",
      },
      {
        q: "How are winners chosen?",
        a: "Your scores from every round are added together. The three highest cumulative scores win the cash prizes.",
      },
      {
        q: "What if I miss a round?",
        a: "You can still continue, but a missed round scores zero, so try to make every one.",
      },
      {
        q: "Can I take the quiz on my phone?",
        a: "Yes. The quizzes work on phones, tablets and computers. A stable connection gives the best experience, and your answers are saved as you go.",
      },
      {
        q: "What if I have technical problems during a round?",
        a: "Message us on WhatsApp straight away and we'll help you out.",
      },
    ],
  },

  about: {
    /** Real, verifiable numbers only — the stats strip hides when empty. */
    stats: [],
    /** Founder spotlight — the large profile on the About page. */
    founder: {
      name: "Emmanuel Audu",
      role: "Founder & CEO, ULO AI",
      photo: "/img/emmanuel-audu.jpg",
      bio: "Emmanuel founded ULO AI so that every Nigerian student can prepare for exams with confidence, whatever their background. He leads the product and the team building ULO's practice exams, quiz competitions and AI study tools.",
      quote: "",
      /** Social profiles — only filled ones are shown. */
      socials: {
        linkedin: "https://www.linkedin.com/in/emmanuel-audu-5410a141b",
        x: "",
        threads: "https://www.threads.com/@justinemmanuel_01",
        instagram: "https://www.instagram.com/justinemmanuel_01",
        facebook: "",
        tiktok: "",
        website: "",
      },
    },
    /** Other team members (the founder is shown separately above). */
    team: [],
    hiring: {
      enabled: false,
      text: "We're always happy to meet talented developers, designers and educators.",
      linkUrl: "",
    },
  },

  help: DEFAULT_HELP,

  testimonials: {
    items: [],
  },

  faqs: {
    items: [
      { q: "Is ULO AI free to use?", a: "Yes, it's free to download and you can start practising straight away. Premium unlocks extra features and higher limits — see the details inside the app." },
      { q: "Which exams does ULO AI help with?", a: "WAEC, JAMB and NECO — with timed practice tests and mock exams for each." },
      { q: "Who can use the AI tutor?", a: "The AI features (chat and voice tutor, Image Studio and creating tests from your notes) are for users aged 18 and over, because of our AI provider's terms. Practice exams, quizzes, competitions and progress tracking are open to every student." },
      { q: "Is ULO AI available on iPhone?", a: "ULO AI is available on Android through Google Play today. Join our WhatsApp channel to hear as soon as the iPhone version is ready." },
    ],
  },
};
