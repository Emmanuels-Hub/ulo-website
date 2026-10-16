import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold whitespace-nowrap transition duration-200 ease-out disabled:pointer-events-none disabled:opacity-50";

const variants = {
  /* Brand yellow with a playful pressed edge — the main action */
  primary:
    "bg-brand-400 text-ink-900 shadow-press hover:-translate-y-0.5 hover:bg-brand-300 active:translate-y-0.5 active:shadow-none",
  /* Ink — strong action on yellow or light surfaces */
  dark: "bg-ink-900 text-white hover:-translate-y-0.5 hover:bg-ink-800 active:translate-y-0",
  /* Outline — secondary action */
  outline:
    "border-2 border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white",
  /* Soft — quiet secondary on light backgrounds */
  soft: "bg-brand-100 text-ink-900 hover:bg-brand-200",
  /* Ghost — text-like */
  ghost: "text-ink-700 hover:bg-ink-100 hover:text-ink-900",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-4 text-base",
};

/**
 * Button — renders <Link> for internal `to`, <a> for `href`, else <button>.
 * External hrefs (http…) open in a new tab automatically.
 */
const Button = ({ variant = "primary", size = "md", to, href, className = "", children, ...props }) => {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
