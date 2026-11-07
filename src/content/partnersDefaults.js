/**
 * Default text for the partner pages (used until edited in Admin → Website → Partner pages).
 * Stored in Firestore `site_content/partners`, one object per page.
 *
 * Text only — icons, visuals, form fields and layout stay in the page files.
 *  - hero.title: wrap the highlighted words in **double asterisks**.
 *  - Icons are matched by position (benefits.items[i], form.sidebarItems[i]).
 * Keep the shape in sync with ulo-admin's src/types/siteContent.ts and helpers.
 */
export const DEFAULT_PARTNERS = {
  institutional: {
    faqTitle: "Questions partners ask",
    hero: {
      eyebrow: "For schools & universities",
      title: "Better exam results for students. **More time** for teachers.",
      intro:
        "ULO AI helps your students practise and prepare for WAEC, JAMB and NECO — while your school portal makes setting exams, running quizzes and tracking results simple.",
      cta: "Partner with us",
    },
    benefits: {
      title: "Everything your school needs in one place",
      intro: "Tools for students, teachers and administrators — built for the way Nigerian schools work.",
      items: [
        {
          title: "Practice for every student",
          desc: "Students practise WAEC, JAMB and NECO-style questions and sit timed mock exams on their phones. Learners can also use the AI tutor.",
        },
        {
          title: "Exams & quizzes in minutes",
          desc: "Build tests from your own questions or the ULO question bank, schedule them and let ULO do the marking.",
        },
        {
          title: "Print-ready papers",
          desc: "Prefer paper? Export professionally formatted exam papers to print for your classrooms.",
        },
        {
          title: "Students & teachers, organised",
          desc: "Enrol students, invite teachers and manage who sees what — all from your school portal.",
        },
        {
          title: "Clear results",
          desc: "See performance by student, class and subject, so teachers know exactly who needs extra help.",
        },
        {
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
      sidebarTitle: "Let's bring ULO to your school",
      sidebarItems: [
        "A friendly onboarding call for your team",
        "Help enrolling teachers and students",
        "A plan that fits your school's size",
      ],
      formTitle: "Tell us about your institution",
      submitLabel: "Request a call",
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
  },

  corporate: {
    faqTitle: "Questions partners ask",
    hero: {
      eyebrow: "For companies & teams",
      title: "Quick assessments your team will **actually enjoy.**",
      intro:
        "Check knowledge, run training quizzes and host friendly competitions for your staff — set up in minutes, taken on any phone, with results in one place.",
      cta: "Talk to us",
    },
    benefits: {
      title: "Simple tools for learning at work",
      intro: "Everything you need to test, train and engage your people — without a heavy LMS.",
      items: [
        {
          title: "Assessments in minutes",
          desc: "Create quizzes and tests from your own questions, set a time limit and let ULO do the marking.",
        },
        {
          title: "Taken on any phone",
          desc: "Staff join from the ULO app — no laptops or special equipment needed.",
        },
        {
          title: "Clear results",
          desc: "See scores by person and team so you know where extra training will help most.",
        },
        {
          title: "Friendly competitions",
          desc: "Turn training into a game with quiz competitions and leaderboards.",
        },
        {
          title: "People in one place",
          desc: "Add your team, organise them into groups and manage access from the web portal.",
        },
        {
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
      sidebarTitle: "Let's upskill your team",
      sidebarItems: [
        "Help setting up your first assessment",
        "Onboarding for your admins",
        "A plan that fits your team size",
      ],
      formTitle: "Tell us about your team",
      submitLabel: "Request a call",
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
  },

  ngos: {
    faqTitle: "Questions partners ask",
    hero: {
      eyebrow: "For NGOs & foundations",
      title: "Help more young people pass the exams that **open doors.**",
      intro:
        "Partner with ULO AI to give the students you support exam practice, motivating quiz competitions and clear progress tracking — all on the phones they already have.",
      cta: "Start a conversation",
    },
    benefits: {
      title: "Built for real impact",
      intro: "Simple to roll out, motivating for students, and easy to report on.",
      items: [
        {
          title: "Works on a phone",
          desc: "No computer lab needed — students practise in the ULO app on an Android phone with an internet connection.",
        },
        {
          title: "Focused on exams",
          desc: "WAEC, JAMB and NECO-style practice and timed mock exams that build skill and confidence.",
        },
        {
          title: "Motivation built in",
          desc: "Quiz competitions, leaderboards, badges and streaks keep students coming back.",
        },
        {
          title: "Easy to manage",
          desc: "Enrol your students and follow their activity from one web portal.",
        },
        {
          title: "Results you can share",
          desc: "Track participation and scores to report back to your board and funders.",
        },
        {
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
      sidebarTitle: "Let's make a difference together",
      sidebarItems: [
        "A programme shaped around your goals",
        "Help onboarding your team and students",
        "Progress you can report on",
      ],
      formTitle: "Tell us about your programme",
      submitLabel: "Start the conversation",
    },
    faqs: [
      {
        q: "Do students need a computer?",
        a: "No. Students use the ULO AI app on an Android phone. They do need an internet connection to practise and take part in quizzes.",
      },
      {
        q: "Can younger students use the AI tutor?",
        a: "The AI features (AI tutor, Image Studio and AI test creation) are available to signed-in learners, next to practice exams, quizzes, competitions and progress tracking.",
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
  },

  content: {
    faqTitle: "Questions partners ask",
    hero: {
      eyebrow: "For publishers, creators & EdTech",
      title: "Your great content, in more **students' hands.**",
      intro:
        "Partner with ULO AI to turn your textbooks, question banks and lessons into interactive practice — and reach students when they're actually studying.",
      cta: "Become a content partner",
    },
    benefits: {
      title: "Why creators work with ULO",
      intro: "We handle the technology, so your expertise can do what it does best: help students learn.",
      items: [
        {
          title: "Reach motivated learners",
          desc: "Put your content in front of students who are actively preparing for exams.",
        },
        {
          title: "Make it interactive",
          desc: "Your material becomes practice questions, quick checks and mock tests that students actually use.",
        },
        {
          title: "Credit where it's due",
          desc: "Your brand and authorship stay visible on the content you share.",
        },
        {
          title: "Grow your audience",
          desc: "Introduce your brand to students who may not have discovered you yet.",
        },
        {
          title: "Terms that fit you",
          desc: "Licensing, co-creation or integration — we agree the commercial terms with every partner.",
        },
        {
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
      sidebarTitle: "Let's create something great",
      sidebarItems: ["Terms agreed in writing", "Your brand stays visible", "A real person to work with"],
      formTitle: "Tell us about your content",
      submitLabel: "Send proposal",
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
  },

  ambassadors: {
    faqTitle: "Questions applicants ask",
    hero: {
      eyebrow: "For university students",
      title: "Lead the change on **your campus.**",
      intro:
        "Join the ULO AI Campus Ambassadors programme. Run study sessions and events, help fellow students prepare smarter, and build leadership experience you can be proud of.",
      cta: "Apply now",
    },
    benefits: {
      title: "Why become an ambassador?",
      intro: "More than a title — a chance to make a difference and grow while you study.",
      items: [
        {
          title: "Lead real initiatives",
          desc: "Organise study sessions, demos and events, and be the face of ULO on your campus.",
        },
        {
          title: "Grow your network",
          desc: "Meet ambitious students across Nigeria and work directly with the ULO team.",
        },
        {
          title: "Build your CV",
          desc: "Gain hands-on experience in leadership, communication and community building.",
        },
        {
          title: "Perks for active ambassadors",
          desc: "Perks such as ULO Premium access and merch are confirmed with each cohort when you join.",
        },
        {
          title: "Shape the product",
          desc: "Share what students on your campus need and help us make ULO better.",
        },
        {
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
      sidebarTitle: "Ready to lead?",
      sidebarItems: [
        "Run events and study sessions",
        "Join a community of student leaders",
        "Build real leadership experience",
      ],
      formTitle: "Apply to be an ambassador",
      submitLabel: "Submit application",
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
  },
};
