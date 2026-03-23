import { useState } from "react";

/**
 * PartnerForm — reusable partnership application form.
 *
 * Props:
 *  sidebarTitle    – heading for the left sidebar
 *  sidebarItems    – array of { icon, text } shown in sidebar
 *  formTitle       – heading inside the form card
 *  fields          – array of { name, label, type, placeholder, required, options (for select) }
 *  submitLabel     – button label (default "Submit Application")
 *  accentClass     – Tailwind bg class for the sidebar (default 'bg-purple-900')
 *  onSubmit        – optional custom submit handler (receives formData object)
 */
const PartnerForm = ({
  sidebarTitle = "Why Partner With Us?",
  sidebarItems = [],
  formTitle = "Apply to Partner",
  fields = [],
  submitLabel = "Submit Application",
  accentClass = "bg-purple-900",
  onSubmit,
}) => {
  const [values, setValues] = useState(() =>
    Object.fromEntries(fields.map((f) => [f.name, ""])),
  );
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(values);
      return;
    }
    setStatus("sending");
    // Default: no-op success simulation
    setTimeout(() => setStatus("success"), 900);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          {/* ── Sidebar ── */}
          <aside
            className={`${accentClass} text-white p-10 lg:w-80 flex-shrink-0`}
          >
            <h3 className="text-2xl font-extrabold mb-8">{sidebarTitle}</h3>
            <ul className="space-y-5">
              {sidebarItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <i className={`${item.icon} mt-1 text-yellow-400`} />
                  <span className="text-gray-100 leading-snug">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </aside>

          {/* ── Form ── */}
          <div className="flex-1 p-10">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-8">
              {formTitle}
            </h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-check text-green-600 text-3xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Application Submitted!
                </h4>
                <p className="text-gray-500">
                  We'll review your information and reach out soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* render fields — auto-layout 2-col for non-textarea */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {fields.map((f) => {
                    const base =
                      "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition";
                    const full = f.full ? "sm:col-span-2" : "";

                    return (
                      <div key={f.name} className={full}>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          {f.label}
                          {f.required && (
                            <span className="text-red-500 ml-0.5">*</span>
                          )}
                        </label>

                        {f.type === "select" ? (
                          <select
                            name={f.name}
                            value={values[f.name]}
                            onChange={handleChange}
                            required={f.required}
                            className={base}
                          >
                            <option value="" disabled>
                              Select…
                            </option>
                            {(f.options || []).map((o) => (
                              <option key={o.value ?? o} value={o.value ?? o}>
                                {o.label ?? o}
                              </option>
                            ))}
                          </select>
                        ) : f.type === "textarea" ? (
                          <textarea
                            name={f.name}
                            value={values[f.name]}
                            onChange={handleChange}
                            placeholder={f.placeholder}
                            required={f.required}
                            rows={f.rows ?? 4}
                            className={`${base} resize-none`}
                          />
                        ) : (
                          <input
                            type={f.type ?? "text"}
                            name={f.name}
                            value={values[f.name]}
                            onChange={handleChange}
                            placeholder={f.placeholder}
                            required={f.required}
                            className={base}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-purple-900 text-white py-3.5 rounded-xl font-bold hover:bg-yellow-400 hover:text-purple-900 transition transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === "sending" ? "Submitting…" : submitLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerForm;
