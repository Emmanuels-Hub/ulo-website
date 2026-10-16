import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import {
  LuArrowRight,
  LuEye,
  LuHeartHandshake,
  LuLightbulb,
  LuRocket,
  LuShieldCheck,
  LuSmile,
  LuSparkles,
  LuUsers,
  LuWifiOff,
} from "react-icons/lu";
import Seo from "../components/Seo";
import FounderSpotlight from "../components/about/FounderSpotlight";
import CtaBand from "../components/home/CtaBand";
import Button from "../components/UI/Button";
import PageHero from "../components/UI/PageHero";
import Reveal from "../components/UI/Reveal";
import SectionHeading from "../components/UI/SectionHeading";
import { useSiteContent } from "../content/context";
import { SITE } from "../config/site";

const problems = [
  {
    title: "Private lessons are expensive",
    desc: "Good tutors cost more than most families can afford every week.",
  },
  {
    title: "Help isn't there at midnight",
    desc: "Questions pop up when you're studying alone — not during office hours.",
  },
  {
    title: "Exam day feels unfamiliar",
    desc: "Many students sit WAEC or JAMB without ever practising under real conditions.",
  },
];

const values = [
  {
    icon: LuLightbulb,
    title: "Curiosity first",
    desc: "We build tools that make students want to ask “why?” — understanding beats memorising.",
  },
  {
    icon: LuWifiOff,
    title: "Built for everyone",
    desc: "Affordable and simple to use, so where you live never limits how well you learn.",
  },
  {
    icon: LuShieldCheck,
    title: "Honest learning",
    desc: "We protect students' data and help them truly learn — not just chase answers.",
  },
  {
    icon: LuSmile,
    title: "Kind by default",
    desc: "No question is too basic. ULO is patient, encouraging and always on your side.",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

const About = () => {
  const { about } = useSiteContent();
  const stats = (about.stats || []).filter((s) => s.value && s.label);
  const founder = about.founder?.name ? about.founder : null;
  const team = (about.team || []).filter((m) => m.name && m.name !== founder?.name);
  const showTeam = team.length > 0 || about.hiring?.enabled;

  return (
    <>
      <Seo
        title="About us"
        description="ULO AI is on a mission to help every Nigerian student prepare for exams with confidence — with practice exams, quiz competitions and study tools they can actually afford."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `About ${SITE.name}`,
          url: `${SITE.url}/about`,
          mainEntity: {
            "@type": "Organization",
            name: SITE.name,
            url: SITE.url,
            ...(founder && {
              founder: {
                "@type": "Person",
                name: founder.name,
                jobTitle: founder.role,
                ...(founder.photo && { image: new URL(founder.photo, SITE.url).href }),
                sameAs: Object.values(founder.socials || {}).filter(Boolean),
              },
            }),
          },
        }}
      />

      <PageHero
        eyebrow="Our story"
        icon={LuHeartHandshake}
        title={
          <>
            We're building the study buddy we <span className="highlight">wish we had.</span>
          </>
        }
        intro="ULO AI gives every student a friendly way to practise, compete and prepare for exams — so where you live or what you can afford never decides how well you do."
      />

      {/* The problem */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-balance md:text-[2.75rem]">
              Brilliant students shouldn't be held back by circumstance.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-600">
              <p>
                Across Nigeria, millions of students prepare for life-changing exams like WAEC, JAMB and NECO. Many of
                them work incredibly hard — but too often, the difference between a good result and a great one comes
                down to who could afford extra help.
              </p>
              <p>
                We started ULO to change that. By combining AI with a deep respect for how students actually learn,
                we're making world-class study support friendly, affordable and available any time of day.
              </p>
            </div>
          </Reveal>

          <ul className="space-y-4">
            {problems.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 100}
                className="flex gap-4 rounded-[2rem] border border-ink-200 bg-paper p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 text-sm font-extrabold text-brand-400">
                  {i + 1}
                </span>
                <span>
                  <span className="block text-lg font-extrabold">{p.title}</span>
                  <span className="mt-1 block leading-relaxed text-ink-600">{p.desc}</span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {founder && <FounderSpotlight founder={founder} />}

      {/* Mission & vision */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-[2.5rem] border-2 border-ink-900 bg-brand-400 p-8 shadow-press md:p-12">
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-brand-400">
              <LuRocket className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="text-sm font-extrabold tracking-wider uppercase">Our mission</h2>
            <p className="mt-3 text-2xl leading-snug font-extrabold md:text-3xl">
              To make learning simpler and exam success reachable for every student, with intelligent tools they can
              actually afford.
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-[2.5rem] bg-ink-900 p-8 text-white md:p-12">
            <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400 text-ink-900">
              <LuEye className="h-7 w-7" aria-hidden="true" />
            </span>
            <h2 className="text-sm font-extrabold tracking-wider text-brand-400 uppercase">Our vision</h2>
            <p className="mt-3 text-2xl leading-snug font-extrabold md:text-3xl">
              An Africa where geography and income never decide a student's academic potential.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats — admin-managed, hidden until real numbers are added */}
      {stats.length > 0 && (
        <section className="border-y-2 border-ink-900 bg-brand-400 py-12">
          <dl className="container-page grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="text-4xl font-extrabold tracking-tight md:text-5xl">{s.value}</dd>
                <dt className="mt-1 font-semibold text-ink-800">{s.label}</dt>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="What we believe" icon={LuSparkles} title="The values behind everything we build" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <Reveal
                key={title}
                delay={i * 80}
                className="group rounded-[2rem] border border-ink-200 bg-white p-7 transition hover:-translate-y-1 hover:border-ink-900"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400 transition-transform group-hover:-rotate-6">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-extrabold">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink-600">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {showTeam && (
        <section className="bg-brand-50 py-20 md:py-28">
          <div className="container-page">
            <SectionHeading
              eyebrow="The team"
              icon={LuUsers}
              title="The people behind ULO"
              intro="A small, passionate team of builders and educators who believe every student deserves great support."
            />
            <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-6">
              {team.map((m, i) => (
                <Reveal
                  as="figure"
                  key={m.name}
                  delay={i * 100}
                  className="w-full max-w-[17rem] overflow-hidden rounded-[2rem] border-2 border-ink-900 bg-white shadow-press"
                >
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={`${m.name}, ${m.role}`}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex aspect-[4/5] w-full items-center justify-center bg-brand-400 text-6xl font-extrabold">
                      {initials(m.name)}
                    </div>
                  )}
                  <figcaption className="flex items-center justify-between gap-3 p-5">
                    <span>
                      <span className="block text-lg font-extrabold">{m.name}</span>
                      <span className="block text-sm font-semibold text-ink-500">{m.role}</span>
                    </span>
                    <span className="flex gap-1.5">
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${m.name} on LinkedIn`}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 hover:bg-brand-400"
                        >
                          <FaLinkedinIn className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )}
                      {m.x && (
                        <a
                          href={m.x}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${m.name} on X`}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 hover:bg-brand-400"
                        >
                          <FaXTwitter className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )}
                    </span>
                  </figcaption>
                </Reveal>
              ))}

              {about.hiring?.enabled && (
                <Reveal
                  delay={team.length * 100}
                  className="flex w-full max-w-[17rem] flex-col items-start justify-center rounded-[2rem] border-2 border-dashed border-ink-300 bg-white p-7"
                >
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100">
                    <LuSparkles className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-extrabold">Join the team</h3>
                  <p className="mt-2 leading-relaxed text-ink-600">{about.hiring.text}</p>
                  <Button
                    {...(about.hiring.linkUrl ? { href: about.hiring.linkUrl } : { to: "/contact?topic=careers" })}
                    variant="soft"
                    size="sm"
                    className="mt-5"
                  >
                    Get in touch <LuArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
};

export default About;
