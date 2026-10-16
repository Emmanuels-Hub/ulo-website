import { LuSendHorizontal, LuSparkles } from "react-icons/lu";

/**
 * PhoneMockup — an illustrative ULO AI chat screen built in code
 * (no stock or third-party images, crisp at any size, on-brand).
 * Swap for a real app screenshot later if you prefer.
 */
const PhoneMockup = ({ className = "" }) => (
  <div
    className={`relative w-[17rem] rounded-[2.75rem] border-[10px] border-ink-900 bg-ink-900 shadow-lift sm:w-[19rem] ${className}`}
    role="img"
    aria-label="ULO AI app showing an AI tutor explaining photosynthesis"
  >
    {/* notch */}
    <div className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-ink-900" />

    <div className="overflow-hidden rounded-[2.1rem] bg-paper">
      {/* app bar */}
      <div className="flex items-center gap-3 bg-brand-400 px-4 pt-8 pb-4">
        <img
          src="/img/cropped.png"
          alt=""
          className="h-9 w-9 rounded-xl border-2 border-ink-900 bg-paper object-contain p-1"
        />
        <div className="leading-tight">
          <p className="text-sm font-extrabold text-ink-900">ULO Tutor</p>
          <p className="text-[11px] font-medium text-ink-700">Online · Biology</p>
        </div>
      </div>

      {/* chat */}
      <div className="space-y-3 px-3.5 py-4 text-[12.5px] leading-snug">
        <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-md bg-ink-900 px-3.5 py-2.5 text-white">
          Explain photosynthesis like I'm in SS2 🌱
        </div>
        <div className="w-fit max-w-[88%] rounded-2xl rounded-bl-md border border-ink-200 bg-white px-3.5 py-2.5 text-ink-800">
          Plants are like tiny kitchens! They take in <b>sunlight</b>, <b>water</b> and <b>CO₂</b>, then cook up glucose
          for energy — and give us oxygen as a bonus. ☀️
        </div>
        <div className="w-fit max-w-[88%] rounded-2xl rounded-bl-md border border-brand-300 bg-brand-50 px-3.5 py-2.5 text-ink-800">
          <p className="mb-2 flex items-center gap-1.5 font-bold">
            <LuSparkles className="h-3.5 w-3.5" aria-hidden="true" /> Quick check
          </p>
          <p className="mb-2">Which gas do plants release?</p>
          <div className="grid grid-cols-2 gap-1.5 text-[11.5px] font-semibold">
            <span className="rounded-lg border border-ink-200 bg-white px-2 py-1.5">A. Nitrogen</span>
            <span className="rounded-lg border-2 border-ink-900 bg-brand-400 px-2 py-1.5">B. Oxygen ✓</span>
          </div>
        </div>
      </div>

      {/* input */}
      <div className="flex items-center gap-2 border-t border-ink-100 px-3.5 py-3">
        <div className="flex-1 rounded-full bg-ink-100 px-4 py-2 text-[12px] text-ink-500">Ask anything…</div>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-400 text-ink-900">
          <LuSendHorizontal className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </div>
  </div>
);

export default PhoneMockup;
