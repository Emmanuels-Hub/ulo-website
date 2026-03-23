const Button = ({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-bold transition-all duration-200 transform";

  const variants = {
    primary:
      "bg-purple-900 hover:bg-purple-800 text-white px-8 py-3.5 rounded-xl shadow-lg gap-3",
    secondary:
      "text-gray-600 font-semibold hover:text-purple-700 flex items-center gap-2 px-6 py-3",
    yellow:
      "bg-yellow-400 text-purple-900 px-6 py-2.5 rounded-full shadow-md hover:bg-purple-800 hover:text-white hover:-translate-y-0.5",
    dark: "bg-gray-900 text-white px-8 py-3 rounded-full shadow-lg hover:bg-gray-800 hover:-translate-y-1",
    outline:
      "px-8 py-4 rounded-full border border-gray-300 font-semibold hover:border-purple-700 hover:text-purple-700 transition",
  };

  const classes = `${base} ${variants[variant] ?? ""} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
