import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { useSiteContent } from "../../content/context";

const StoreButton = ({ href, Icon, small, big, styles }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-3 rounded-2xl px-5 py-2.5 transition duration-200 hover:-translate-y-0.5 ${styles}`}
  >
    <Icon className="h-6 w-6" aria-hidden="true" />
    <span className="text-left leading-tight">
      <span className="block text-[11px] font-medium opacity-80">{small}</span>
      <span className="block text-lg font-bold">{big}</span>
    </span>
  </a>
);

/**
 * App store download buttons. Google Play always shows; the App Store button
 * appears automatically once an App Store link is added in the admin dashboard.
 * tone="dark" on light surfaces, "light" on ink.
 */
const StoreButtons = ({ tone = "dark", className = "" }) => {
  const { general } = useSiteContent();
  const styles = tone === "dark" ? "bg-ink-900 text-white hover:bg-ink-800" : "bg-white text-ink-900 hover:bg-brand-50";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <StoreButton
        href={general.playStoreUrl}
        Icon={FaGooglePlay}
        small="Get it on"
        big="Google Play"
        styles={styles}
      />
      {general.appStoreUrl && (
        <StoreButton
          href={general.appStoreUrl}
          Icon={FaApple}
          small="Download on the"
          big="App Store"
          styles={styles}
        />
      )}
    </div>
  );
};

export default StoreButtons;
