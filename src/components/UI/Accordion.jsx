import { useId, useState } from "react";
import { LuPlus } from "react-icons/lu";

/**
 * Accordion — accessible FAQ list. items: [{ q, a }]
 * Only one panel open at a time.
 */
const Accordion = ({ items, defaultOpen = 0 }) => {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div
            key={item.q}
            className={`rounded-2xl border bg-white transition-colors ${
              isOpen ? "border-ink-900 shadow-soft" : "border-ink-200 hover:border-ink-300"
            }`}
          >
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left font-bold text-ink-900 md:px-6"
              >
                {item.q}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                    isOpen ? "rotate-45 bg-brand-400" : "bg-ink-100"
                  }`}
                >
                  <LuPlus className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 leading-relaxed text-ink-600 md:px-6">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
