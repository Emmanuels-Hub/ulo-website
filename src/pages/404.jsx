import { Link, useNavigate } from "react-router-dom";
import { LuArrowLeft, LuCircleHelp, LuHouse, LuSparkles, LuTrophy } from "react-icons/lu";
import Seo from "../components/Seo";
import Button from "../components/UI/Button";

const suggestions = [
  { to: "/features", icon: LuSparkles, label: "See what ULO can do" },
  { to: "/competition", icon: LuTrophy, label: "Quiz competition" },
  { to: "/help", icon: LuCircleHelp, label: "Help centre" },
];

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Seo title="Page not found" noindex />
      <section className="relative overflow-hidden py-20 md:py-28">
        <div aria-hidden="true" className="absolute -top-24 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-brand-100" />
        <div className="container-page relative text-center">
          <p
            aria-hidden="true"
            className="mx-auto mb-6 inline-flex h-28 w-48 items-center justify-center rounded-[2rem] border-2 border-ink-900 bg-brand-400 text-6xl font-extrabold shadow-press"
          >
            404
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-balance md:text-6xl">
            Oops! This page skipped class. 🙈
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-ink-600">
            We couldn't find the page you were looking for. It may have moved, or the link might be mistyped.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="outline" onClick={() => navigate(-1)}>
              <LuArrowLeft className="h-5 w-5" aria-hidden="true" /> Go back
            </Button>
            <Button to="/">
              <LuHouse className="h-5 w-5" aria-hidden="true" /> Take me home
            </Button>
          </div>

          <div className="mx-auto mt-14 max-w-2xl">
            <p className="mb-4 text-sm font-bold text-ink-500">Or try one of these:</p>
            <ul className="grid gap-3 sm:grid-cols-3">
              {suggestions.map(({ to, icon: Icon, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex h-full items-center gap-3 rounded-2xl border border-ink-200 bg-white p-4 text-left font-bold transition hover:-translate-y-0.5 hover:border-ink-900"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
