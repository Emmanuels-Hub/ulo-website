/**
 * Default Help Centre articles (used until edited in Admin → Website → Help Centre).
 * Only describe features that exist in the app. Icon keys: rocket, account, billing,
 * learning, analytics, technical, competition, privacy, help.
 */
export const DEFAULT_HELP = {
  categories: [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: "rocket",
      faqs: [
        {
          q: "How do I create an account?",
          a: "Download ULO AI from Google Play, then sign up with your email address or your Google account and follow the steps on screen.",
        },
        {
          q: "Is ULO free to use?",
          a: "Yes. ULO AI is free to download and you can start practising straight away. Premium unlocks extra features and higher limits — you'll find the details and current price inside the app.",
        },
        {
          q: "Which exams does ULO help with?",
          a: "ULO helps you prepare for WAEC, NECO and JAMB.",
        },
        {
          q: "Is ULO available on iPhone?",
          a: "ULO AI is available on Android through Google Play today. Join our WhatsApp channel to hear as soon as the iPhone version is ready.",
        },
        {
          q: "Who can use the AI features?",
          a: "The AI tutor (chat and voice), Image Studio and AI exam creation are for users aged 18 and over, because of our AI provider's terms. Everything else — practice exams, quizzes, competitions and progress tracking — is open to all students.",
        },
      ],
    },
    {
      id: "account-and-sign-in",
      title: "Account & Sign-in",
      icon: "account",
      faqs: [
        {
          q: "How do I reset my password?",
          a: "On the sign-in screen, tap “Forgot password”, enter your email address and follow the link we send you.",
        },
        {
          q: "I can't sign in. What should I do?",
          a: "Check your email and password, or use “Forgot password”. If you signed up with Google, use the Google sign-in button instead. Still stuck? Message us on WhatsApp.",
        },
        {
          q: "Can I delete my account?",
          a: "Yes. You can delete your account from your account settings in the app. This can't be undone, so please be sure before you continue.",
        },
      ],
    },
    {
      id: "premium-and-payments",
      title: "Premium & Payments",
      icon: "billing",
      faqs: [
        {
          q: "What do I get with Premium?",
          a: "Premium unlocks extra features and higher daily limits. The Premium screen in the app shows exactly what's included and the current price.",
        },
        {
          q: "How do I pay?",
          a: "In the Android app, purchases go through Google Play. Some payments can also be made with Paystack.",
        },
        {
          q: "How do I cancel my subscription?",
          a: "Subscriptions bought on Google Play are managed in the Play Store: open Google Play, go to Payments & subscriptions, then Subscriptions, and choose ULO AI.",
        },
        {
          q: "Can I get a refund?",
          a: "Purchases made through Google Play follow Google Play's refund policy. For anything else, contact our support team and we'll look into it.",
        },
      ],
    },
    {
      id: "practice-and-learning",
      title: "Practice & Learning",
      icon: "learning",
      faqs: [
        {
          q: "How do I start practising?",
          a: "Open the app, pick your exam and subject, and start a practice test.",
        },
        {
          q: "Are the mock exams timed?",
          a: "Yes. Mock exams are timed like the real thing, so you can practise managing your time under pressure.",
        },
        {
          q: "How does the AI tutor work?",
          a: "Type or speak your question and the AI tutor explains it step by step. It's available to users aged 18 and over. AI answers can sometimes be wrong, so double-check anything important.",
        },
        {
          q: "Can ULO create a test from my notes?",
          a: "Yes — users aged 18 and over can upload notes or a document and ULO will create practice questions from it.",
        },
      ],
    },
    {
      id: "progress-and-rewards",
      title: "Progress & Rewards",
      icon: "analytics",
      faqs: [
        {
          q: "How do I see my progress?",
          a: "Your results are saved after each test, so you can follow how you're doing in each subject over time.",
        },
        {
          q: "How does the leaderboard work?",
          a: "You earn points for activities such as quizzes and competitions, and the leaderboard ranks students by their points.",
        },
        {
          q: "What are badges and streaks?",
          a: "Badges celebrate milestones as you learn, and your streak counts how many days in a row you've studied. Try to keep it going!",
        },
      ],
    },
    {
      id: "technical-help",
      title: "Technical Help",
      icon: "technical",
      faqs: [
        {
          q: "The app isn't working properly. What can I do?",
          a: "Make sure you have the latest version from Google Play and a stable internet connection, then close and reopen the app. If it keeps happening, message us on WhatsApp with a screenshot.",
        },
        {
          q: "Do I need an internet connection?",
          a: "Yes. ULO needs an internet connection for practice tests, quizzes, competitions and the AI features.",
        },
        {
          q: "How do I report a bug?",
          a: "Send us a message on WhatsApp or by email describing what happened, your phone model, and a screenshot if you can.",
        },
      ],
    },
    {
      id: "competitions",
      title: "Competitions",
      icon: "competition",
      faqs: [
        {
          q: "How do I join a quiz competition?",
          a: "Visit the Quiz Competition page on our website for the current edition, its dates and how to register.",
        },
        {
          q: "How are winners chosen?",
          a: "Your scores from every round are added together and the highest totals win. The rules for each edition are on the Quiz Competition page.",
        },
      ],
    },
    {
      id: "privacy-and-safety",
      title: "Privacy & Safety",
      icon: "privacy",
      faqs: [
        {
          q: "What data does ULO collect?",
          a: "We collect what we need to run ULO, such as your name, email address and learning progress. Our Privacy Policy explains this in full.",
        },
        {
          q: "Is my data safe?",
          a: "We use secure, industry-standard services to store your data and protect your account. No system is 100% secure, so please keep your password private.",
        },
        {
          q: "What happens to what I send the AI?",
          a: "The AI features are powered by Google's Gemini models through Google Firebase, so what you type, say or upload to them is sent to Google to produce a response. Please don't share personal or sensitive information with the AI.",
        },
      ],
    },
  ],
};
