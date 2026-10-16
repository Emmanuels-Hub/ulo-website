/**
 * Fallback website content.
 *
 * The live values are edited in the admin dashboard (Website → …) and stored
 * in Firestore `site_content/{general|competition|testimonials|faqs}`.
 * These defaults render instantly (good for SEO) and are used whenever
 * Firestore is unreachable or a field hasn't been filled in yet.
 * Keep the shape in sync with ulo-admin's src/types/siteContent.ts.
 */
export const DEFAULT_CONTENT = {
  general: {
    email: "support@uloai.com",
    phone: "+234 906 161 6524",
    whatsappNumber: "2349061616524",
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

  testimonials: {
    items: [],
  },

  faqs: {
    items: [
      {
        q: "Is ULO AI free to use?",
        a: "Yes! The free plan gives you the Exam Simulator and the AI chat tutor. Premium unlocks unlimited question generation and deeper performance analytics.",
      },
      {
        q: "Which exams does ULO AI help with?",
        a: "WAEC, JAMB and NECO, plus Post-UTME and general university entrance tests. We're adding more all the time.",
      },
      {
        q: "Can I use the app offline?",
        a: "The AI features need an internet connection, but practice exams you've downloaded can be taken offline and will sync when you're back online.",
      },
      {
        q: "How do I turn my notes into questions?",
        a: "Take a photo of your notebook or upload a PDF or Word document in the app. ULO reads it and creates practice questions for you in seconds.",
      },
    ],
  },
};
