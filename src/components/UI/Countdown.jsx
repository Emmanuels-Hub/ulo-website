import { useEffect, useState } from "react";

const split = (ms) => {
  const s = Math.max(0, Math.floor(ms / 1000));
  return [
    { label: "Days", value: Math.floor(s / 86400) },
    { label: "Hours", value: Math.floor((s % 86400) / 3600) },
    { label: "Mins", value: Math.floor((s % 3600) / 60) },
    { label: "Secs", value: s % 60 },
  ];
};

/** Live countdown tiles to an ISO date. Renders nothing once the date has passed. */
const Countdown = ({ to, label }) => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const remaining = new Date(to).getTime() - now;
  if (!to || Number.isNaN(remaining) || remaining <= 0) return null;

  return (
    <div>
      {label && <p className="mb-2 text-sm font-semibold text-ink-700">{label}</p>}
      <div className="flex gap-2" role="timer" aria-live="off">
        {split(remaining).map(({ label: unit, value }) => (
          <div key={unit} className="w-16 rounded-2xl border-2 border-ink-900 bg-white py-2 text-center shadow-press">
            <span className="block text-2xl font-extrabold tabular-nums">{String(value).padStart(2, "0")}</span>
            <span className="block text-[11px] font-bold tracking-wide text-ink-500 uppercase">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
