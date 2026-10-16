import { useEffect, useRef, useState } from "react";

/**
 * Reveal — fades children up once they scroll into view.
 * `delay` is in ms, handy for staggering cards.
 */
const Reveal = ({ as: Tag = "div", delay = 0, className = "", children, ...props }) => {
  const ref = useRef(null);
  // Browsers without IntersectionObserver just show content immediately
  const [visible, setVisible] = useState(() => !("IntersectionObserver" in window));

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
