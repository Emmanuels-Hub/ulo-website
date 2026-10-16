import { LuCamera, LuFileText, LuSparkles, LuTimer } from "react-icons/lu";

/* Small illustrative app screens built in code — on-brand, crisp, no stock images. */

const Card = ({ children, label, className = "" }) => (
  <div
    role="img"
    aria-label={label}
    className={`w-full max-w-md rounded-[2rem] border-2 border-ink-900 bg-white p-6 shadow-press ${className}`}
  >
    {children}
  </div>
);

export const ChatMock = () => (
  <Card label="AI tutor explaining quadratic equations step by step">
    <div className="space-y-3 text-sm">
      <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-ink-900 px-4 py-3 text-white">
        How do I solve x² − 5x + 6 = 0?
      </div>
      <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-md bg-brand-50 px-4 py-3 text-ink-800">
        <p className="mb-2 font-bold">Let's factorise it together 👇</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Find two numbers that multiply to 6 and add to −5</li>
          <li>Those are −2 and −3</li>
          <li>(x − 2)(x − 3) = 0, so x = 2 or x = 3 ✅</li>
        </ol>
      </div>
      <div className="flex flex-wrap gap-2 pt-1">
        {["Explain again", "Give me a similar one", "Why factorise?"].map((t) => (
          <span key={t} className="rounded-full border border-ink-200 px-3 py-1.5 text-xs font-semibold text-ink-700">
            {t}
          </span>
        ))}
      </div>
    </div>
  </Card>
);

export const GeneratorMock = () => (
  <Card label="Notes being turned into practice questions">
    <div className="flex items-center gap-3 rounded-2xl border-2 border-dashed border-ink-300 bg-paper p-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
        <LuFileText className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="flex-1 leading-tight">
        <p className="text-sm font-bold">Biology – Cell Division.pdf</p>
        <p className="text-xs text-ink-500">12 pages · uploaded</p>
      </div>
      <LuCamera className="h-5 w-5 text-ink-400" aria-hidden="true" />
    </div>
    <p className="my-4 flex items-center gap-2 text-sm font-bold">
      <LuSparkles className="h-4 w-4" aria-hidden="true" /> 20 questions ready
    </p>
    <div className="space-y-2">
      {[
        "What is the main purpose of mitosis?",
        "Name the four stages of mitosis in order.",
        "How does meiosis differ from mitosis?",
      ].map((q, i) => (
        <div key={q} className="flex gap-3 rounded-xl bg-ink-50 px-3 py-2.5 text-sm">
          <span className="font-extrabold text-ink-500">{i + 1}.</span>
          {q}
        </div>
      ))}
    </div>
  </Card>
);

export const SimulatorMock = () => (
  <Card label="Timed JAMB mock exam question">
    <div className="mb-5 flex items-center justify-between">
      <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold">JAMB · Physics</span>
      <span className="flex items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1 text-sm font-bold text-brand-400">
        <LuTimer className="h-4 w-4" aria-hidden="true" /> 18:42
      </span>
    </div>
    <p className="text-xs font-semibold text-ink-500">Question 14 of 40</p>
    <div className="mt-2 mb-4 h-2 overflow-hidden rounded-full bg-ink-100">
      <div className="h-full w-[35%] rounded-full bg-brand-400" />
    </div>
    <p className="mb-4 font-bold">A body moving with uniform velocity has…</p>
    <div className="space-y-2 text-sm">
      {["A. zero acceleration", "B. increasing speed", "C. changing direction", "D. zero momentum"].map((o, i) => (
        <div
          key={o}
          className={`rounded-xl border-2 px-4 py-2.5 font-semibold ${
            i === 0 ? "border-ink-900 bg-brand-400" : "border-ink-200"
          }`}
        >
          {o}
        </div>
      ))}
    </div>
  </Card>
);

export const ProgressMock = () => (
  <Card label="Progress dashboard showing topic scores">
    <p className="text-sm font-semibold text-ink-500">This week</p>
    <p className="mb-5 text-2xl font-extrabold">Great progress, Ada! 🎉</p>
    <div className="mb-5 grid grid-cols-3 gap-2 text-center">
      {[
        ["12", "Tests"],
        ["340", "Questions"],
        ["5🔥", "Day streak"],
      ].map(([v, l]) => (
        <div key={l} className="rounded-2xl bg-brand-50 py-3">
          <p className="text-xl font-extrabold">{v}</p>
          <p className="text-xs font-semibold text-ink-500">{l}</p>
        </div>
      ))}
    </div>
    <div className="space-y-3">
      {[
        ["Algebra", 82],
        ["Geometry", 61],
        ["Statistics", 45],
      ].map(([t, s]) => (
        <div key={t}>
          <div className="mb-1 flex justify-between text-sm font-semibold">
            <span>{t}</span>
            <span className="text-ink-500">{s}%</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-ink-100">
            <div className="h-full rounded-full bg-brand-400" style={{ width: `${s}%` }} />
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export const LeaderboardMock = () => (
  <Card label="Illustration of a quiz leaderboard with badges and a daily streak">
    <div className="mb-5 flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-ink-500">Quiz challenge</p>
        <p className="text-xl font-extrabold">Leaderboard</p>
      </div>
      <span className="rounded-full bg-ink-900 px-3 py-1 text-sm font-bold text-brand-400">🔥 6-day streak</span>
    </div>
    <ol className="space-y-2">
      {[
        ["1", "Tobi A.", "980"],
        ["2", "Ngozi E.", "940"],
        ["3", "You", "915"],
        ["4", "Musa K.", "870"],
      ].map(([rank, name, pts]) => {
        const you = name === "You";
        return (
          <li
            key={rank}
            className={`flex items-center gap-3 rounded-2xl px-4 py-2.5 ${
              you ? "border-2 border-ink-900 bg-brand-400" : "bg-ink-50"
            }`}
          >
            <span className="w-5 font-extrabold">{rank}</span>
            <span className="flex-1 font-semibold">{name}</span>
            <span className="text-sm font-bold">{pts} pts</span>
          </li>
        );
      })}
    </ol>
    <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold">
      {["🏅 First quiz", "⚡ Speedy", "🎯 90% club"].map((b) => (
        <span key={b} className="rounded-full bg-brand-100 px-3 py-1.5">
          {b}
        </span>
      ))}
    </div>
  </Card>
);
