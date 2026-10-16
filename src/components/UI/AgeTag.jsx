/**
 * AgeTag — marks AI features, which are for users aged 18+ (Google Gemini terms).
 * Use it wherever AI chat, voice, Image Studio or AI exam creation is promoted.
 */
const AgeTag = ({ className = "" }) => (
  <span
    title="AI features are available to users aged 18 and over"
    className={`inline-flex items-center rounded-full bg-ink-900 px-2.5 py-0.5 text-xs font-extrabold tracking-wide text-brand-400 ${className}`}
  >
    18+
  </span>
);

export default AgeTag;
