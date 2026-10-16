import { LuBookOpen, LuCalendarDays, LuFileText, LuMapPin, LuPrinter, LuSparkles, LuUsers } from "react-icons/lu";

/* Illustrative mock-ups built in code (example data, not real figures). */

const Frame = ({ label, children }) => (
  <div className="relative">
    <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-brand-400" />
    <div role="img" aria-label={label} className="relative rounded-[2rem] border-2 border-ink-900 bg-white p-6">
      <span className="absolute -top-3 right-5 rounded-full bg-ink-900 px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-white uppercase">
        Example
      </span>
      {children}
    </div>
  </div>
);

export const SchoolDashboardMock = () => (
  <Frame label="Example school dashboard showing classes, an upcoming exam and average scores">
    <div className="mb-5 flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold text-ink-500">School portal</p>
        <p className="text-lg font-extrabold">Bright Future College</p>
      </div>
      <span className="flex items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-xs font-bold">
        <LuUsers className="h-3.5 w-3.5" aria-hidden="true" /> 3 classes
      </span>
    </div>

    <div className="mb-5 flex items-center gap-3 rounded-2xl bg-ink-900 p-4 text-white">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-400 text-ink-900">
        <LuFileText className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="flex-1 leading-tight">
        <p className="text-sm font-bold">SS3 Mathematics mock</p>
        <p className="text-xs text-ink-300">40 questions · Friday, 9:00 AM</p>
      </div>
      <LuPrinter className="h-5 w-5 text-brand-400" aria-hidden="true" />
    </div>

    <p className="mb-3 text-sm font-bold">Average score by class</p>
    <div className="space-y-3">
      {[
        ["SS1 A", 64],
        ["SS2 B", 71],
        ["SS3 A", 58],
      ].map(([cls, score]) => (
        <div key={cls} className="flex items-center gap-3 text-sm">
          <span className="w-12 font-semibold">{cls}</span>
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-ink-100">
            <div className="h-full rounded-full bg-brand-400" style={{ width: `${score}%` }} />
          </div>
          <span className="w-9 text-right text-ink-500">{score}%</span>
        </div>
      ))}
    </div>
  </Frame>
);

export const ContentMock = () => (
  <Frame label="Example of a textbook chapter turned into an interactive practice set">
    <div className="flex items-center gap-3 rounded-2xl border-2 border-dashed border-ink-300 bg-paper p-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100">
        <LuBookOpen className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="leading-tight">
        <p className="text-sm font-bold">Senior Secondary Chemistry</p>
        <p className="text-xs text-ink-500">Chapter 4 · Your publication</p>
      </div>
    </div>
    <p className="my-4 flex items-center gap-2 text-sm font-bold">
      <LuSparkles className="h-4 w-4" aria-hidden="true" /> Interactive practice set
    </p>
    <div className="grid grid-cols-3 gap-2 text-center">
      {[
        ["25", "Questions"],
        ["8", "Key ideas"],
        ["1", "Mock test"],
      ].map(([n, l]) => (
        <div key={l} className="rounded-2xl bg-brand-50 py-3">
          <p className="text-xl font-extrabold">{n}</p>
          <p className="text-xs font-semibold text-ink-500">{l}</p>
        </div>
      ))}
    </div>
    <div className="mt-4 rounded-xl bg-ink-50 px-3 py-2.5 text-sm">
      <span className="font-extrabold text-ink-500">Q1.</span> What is the mass of one mole of carbon-12?
    </div>
    <p className="mt-4 text-xs font-semibold text-ink-500">
      Credited to your brand, in front of students preparing for exams.
    </p>
  </Frame>
);

const Bars = ({ rows }) => (
  <div className="space-y-3">
    {rows.map(([label, value]) => (
      <div key={label} className="flex items-center gap-3 text-sm">
        <span className="w-28 font-semibold">{label}</span>
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-ink-100">
          <div className="h-full rounded-full bg-brand-400" style={{ width: `${value}%` }} />
        </div>
        <span className="w-9 text-right text-ink-500">{value}%</span>
      </div>
    ))}
  </div>
);

export const ProgrammeMock = () => (
  <Frame label="Example programme summary showing enrolled students, quizzes taken and participation">
    <p className="text-xs font-semibold text-ink-500">Programme</p>
    <p className="mb-5 text-lg font-extrabold">Exam Ready · Community cluster</p>
    <div className="mb-5 grid grid-cols-3 gap-2 text-center">
      {[
        ["120", "Students"],
        ["6", "Schools"],
        ["1,840", "Quizzes"],
      ].map(([n, l]) => (
        <div key={l} className="rounded-2xl bg-brand-50 py-3">
          <p className="text-xl font-extrabold">{n}</p>
          <p className="text-xs font-semibold text-ink-500">{l}</p>
        </div>
      ))}
    </div>
    <p className="mb-3 text-sm font-bold">Weekly participation</p>
    <Bars rows={[["Week 1", 62], ["Week 2", 74], ["Week 3", 81]]} />
  </Frame>
);

export const TeamAssessmentMock = () => (
  <Frame label="Example team assessment showing completion and scores by department">
    <div className="mb-5 flex items-center justify-between">
      <div>
        <p className="text-xs font-semibold text-ink-500">Assessment</p>
        <p className="text-lg font-extrabold">Product knowledge check</p>
      </div>
      <span className="rounded-full bg-ink-900 px-3 py-1 text-xs font-bold text-brand-400">25 questions</span>
    </div>
    <p className="mb-3 text-sm font-bold">Average score by team</p>
    <Bars rows={[["Sales", 78], ["Support", 84], ["Operations", 69]]} />
    <p className="mt-5 rounded-2xl bg-brand-50 p-3 text-sm">
      <b>42 of 50</b> people have completed it · due Friday
    </p>
  </Frame>
);

export const AmbassadorMock = () => (
  <Frame label="Example campus event card for a ULO study session run by an ambassador">
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400 text-xl" aria-hidden="true">
        🎓
      </span>
      <div className="leading-tight">
        <p className="text-xs font-semibold text-ink-500">Campus event</p>
        <p className="text-lg font-extrabold">ULO Study Jam</p>
      </div>
    </div>
    <ul className="mb-5 space-y-2 text-sm text-ink-700">
      <li className="flex items-center gap-2">
        <LuCalendarDays className="h-4 w-4" aria-hidden="true" /> Saturday · 2:00 PM
      </li>
      <li className="flex items-center gap-2">
        <LuMapPin className="h-4 w-4" aria-hidden="true" /> Faculty of Science, Room 2
      </li>
      <li className="flex items-center gap-2">
        <LuUsers className="h-4 w-4" aria-hidden="true" /> 48 students going
      </li>
    </ul>
    <div className="flex items-center justify-between rounded-2xl bg-ink-900 p-4 text-white">
      <span className="text-sm font-bold">Hosted by a ULO Ambassador</span>
      <span className="rounded-full bg-brand-400 px-3 py-1 text-xs font-extrabold text-ink-900">Ambassador</span>
    </div>
  </Frame>
);
