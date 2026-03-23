/**
 * SectionLabel — small uppercase label used as section eyebrow text
 * Accepts `color` prop: 'purple' (default) | 'yellow' | 'white'
 */
const SectionLabel = ({ children, color = "purple", className = "" }) => {
  const colors = {
    purple: "text-purple-600",
    yellow: "text-yellow-400",
    white: "text-white",
  };

  return (
    <span
      className={`font-bold tracking-wider uppercase text-sm block ${colors[color] ?? colors.purple} ${className}`}
    >
      {children}
    </span>
  );
};

export default SectionLabel;
