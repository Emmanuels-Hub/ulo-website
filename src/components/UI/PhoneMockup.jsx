import { LuCheck, LuClock3, LuFlag } from "react-icons/lu";

/**
 * PhoneMockup — an illustrative ULO practice-exam screen built in code
 * (no stock or third-party images, crisp at any size, on-brand).
 * Example content only. Swap for a real app screenshot later if you prefer.
 */
const PhoneMockup = ({ className = "" }) => (
  <div
    className={`relative w-[17rem] rounded-[2.75rem] border-[10px] border-ink-900 bg-ink-900 shadow-lift sm:w-[19rem] ${className}`}
    role="img"
    aria-label="Illustration of the ULO AI app showing a timed WAEC Biology practice question"
  >
    {/* notch */}
    <div className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-ink-900" />

    <div className="overflow-hidden rounded-[2.1rem] bg-paper">
      {/* app bar */}
      <div className="bg-brand-400 px-4 pt-8 pb-4">
        <div className="flex items-center gap-3">
          <img
            src="/img/cropped.png"
            alt=""
            className="h-9 w-9 rounded-xl border-2 border-ink-900 bg-paper object-contain p-1"
          />
          <div className="flex-1 leading-tight">
            <p className="text-sm font-extrabold text-ink-900">WAEC · Biology</p>
            <p className="text-[11px] font-medium text-ink-700">Practice test</p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-ink-900 px-2.5 py-1 text-[11px] font-bold text-brand-400">
            <LuClock3 className="h-3 w-3" aria-hidden="true" /> 24:10
          </span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/60">
          <div className="h-full w-[30%] rounded-full bg-ink-900" />
        </div>
      </div>

      {/* question */}
      <div className="space-y-3 px-3.5 py-4 text-[12.5px] leading-snug">
        <p className="text-[11px] font-semibold text-ink-500">Question 12 of 40</p>
        <p className="font-bold text-ink-900">Which gas do green plants give off during photosynthesis?</p>
        <div className="space-y-1.5 font-semibold">
          {["A. Nitrogen", "B. Oxygen", "C. Carbon dioxide", "D. Hydrogen"].map((o, i) => (
            <div
              key={o}
              className={`flex items-center justify-between rounded-xl border-2 px-3 py-2 ${
                i === 1 ? "border-ink-900 bg-brand-400" : "border-ink-200 bg-white"
              }`}
            >
              {o}
              {i === 1 && <LuCheck className="h-4 w-4" strokeWidth={3} aria-hidden="true" />}
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-brand-50 px-3 py-2.5 text-ink-800">
          <b>Correct!</b> Plants use sunlight, water and CO₂ to make food — and release oxygen. 🌱
        </div>
      </div>

      {/* footer */}
      <div className="flex items-center justify-between border-t border-ink-100 px-3.5 py-3 text-[12px] font-bold">
        <span className="flex items-center gap-1.5 text-ink-500">
          <LuFlag className="h-3.5 w-3.5" aria-hidden="true" /> Review later
        </span>
        <span className="rounded-full bg-ink-900 px-4 py-1.5 text-white">Next →</span>
      </div>
    </div>
  </div>
);

export default PhoneMockup;
