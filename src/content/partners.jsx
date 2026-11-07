import { Fragment } from "react";
import { LuSparkles } from "react-icons/lu";

/** "Some **highlighted** words" -> text with <span class="highlight"> around the starred part. */
const renderHighlight = (text = "") =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="highlight">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );

/**
 * Combine a page's fixed structure (path, icons, visual, form fields) with its
 * editable text (site_content/partners.<page>) into the config PartnerPage expects.
 * Icons are matched by position; extra items added in the admin get a default icon.
 */
export const buildPartnerConfig = (structure, t) => ({
  path: structure.path,
  faqTitle: t.faqTitle,
  hero: {
    icon: structure.heroIcon,
    visual: structure.visual,
    eyebrow: t.hero.eyebrow,
    title: <>{renderHighlight(t.hero.title)}</>,
    intro: t.hero.intro,
    cta: t.hero.cta,
  },
  benefits: {
    title: t.benefits.title,
    intro: t.benefits.intro,
    items: t.benefits.items.map((item, i) => ({ icon: structure.benefitIcons[i] || LuSparkles, ...item })),
  },
  steps: t.steps,
  models: t.models,
  form: {
    ...structure.form,
    sidebarTitle: t.form.sidebarTitle,
    formTitle: t.form.formTitle,
    submitLabel: t.form.submitLabel,
    sidebarItems: t.form.sidebarItems.map((text, i) => ({ icon: structure.sidebarIcons[i] || LuSparkles, text })),
  },
  faqs: t.faqs,
});
