/**
 * Static brand facts used for SEO and routing.
 * Contact details, app links, socials, the announcement bar, competition
 * details, testimonials and FAQs are edited in the admin dashboard — see
 * src/content/ (useSiteContent) for those.
 */
export const SITE = {
  name: "ULO AI",
  url: "https://uloai.org", // canonical domain — canonical URLs, sitemap & social tags
  tagline: "Your AI study buddy for WAEC, JAMB & NECO",
  description:
    "ULO AI is a friendly AI study companion for Nigerian students. Chat with an AI tutor, turn your notes into practice questions and sit realistic WAEC, JAMB and NECO mock exams.",
  ogImage: "/img/og-image.png",
};

export const EXAMS = ["WAEC", "JAMB", "NECO", "Post-UTME", "University exams"];

export const PARTNER_LINKS = [
  { to: "/institutional-partners", label: "Institutional Partners", blurb: "Schools & universities" },
  { to: "/content-partners", label: "Content & EdTech", blurb: "Publishers & creators" },
  { to: "/ngos", label: "NGOs & Foundations", blurb: "Impact programmes" },
  { to: "/corporate-learning", label: "Corporate Learning", blurb: "Teams & L&D" },
  { to: "/campus-ambassadors", label: "Campus Ambassadors", blurb: "Students who lead" },
];
