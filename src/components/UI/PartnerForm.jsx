import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { LuArrowRight, LuCircleAlert, LuCircleCheck, LuLoaderCircle, LuMail } from "react-icons/lu";
import { useSiteContent } from "../../content/context";
import Button from "./Button";

const inputClass =
  "w-full rounded-2xl border-2 border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 transition focus:border-ink-900 focus:outline-none aria-[invalid=true]:border-danger-600";

/* Applications are delivered through the same endpoint as the Contact form,
   with every answer included in the message body. */
const buildPayload = (topic, fields, values) => {
  const name =
    values.name || values.fullName || [values.firstName, values.lastName].filter(Boolean).join(" ") || "Unknown";
  const emailField = fields.find((f) => f.type === "email");
  const org = values.institution || values.organization || values.company || values.university || "";
  const lines = fields.filter((f) => values[f.name]).map((f) => `${f.label}: ${values[f.name]}`);
  return {
    name,
    email: emailField ? values[emailField.name] : "",
    subject: `[Partnership · ${topic}]${org ? ` ${org}` : ""}`,
    message: lines.join("\n"),
  };
};

/**
 * PartnerForm — partnership application form.
 *   topic        – short label used in the email subject, e.g. "Institution"
 *   fields       – [{ name, label, type, placeholder, required, options, full }]
 *   sidebarTitle / sidebarItems ([{ icon, text }]) – reasons to apply, shown beside the form
 */
const PartnerForm = ({
  topic = "Partner",
  sidebarTitle = "Why partner with us?",
  sidebarItems = [],
  formTitle = "Tell us about you",
  fields = [],
  submitLabel = "Send application",
}) => {
  const { general } = useSiteContent();
  const [values, setValues] = useState(() => Object.fromEntries(fields.map((f) => [f.name, ""])));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const update = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const validate = () => {
    const er = {};
    fields.forEach((f) => {
      const v = (values[f.name] || "").trim();
      if (f.required && !v) er[f.name] = "This field is required.";
      else if (f.type === "email" && v && !/^\S+@\S+\.\S+$/.test(v)) er[f.name] = "Please enter a valid email.";
    });
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/web/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload(topic, fields, values)),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] border-2 border-ink-900 bg-white shadow-press lg:grid-cols-[0.75fr_1.25fr]">
      {/* Sidebar */}
      <aside className="flex flex-col bg-brand-400 p-8 md:p-10">
        <h2 className="text-3xl leading-tight font-extrabold">{sidebarTitle}</h2>
        <ul className="mt-8 space-y-4">
          {sidebarItems.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white">
                {typeof Icon === "string" ? (
                  <i className={Icon} aria-hidden="true" />
                ) : (
                  Icon && <Icon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
              <span className="pt-1.5 leading-snug font-semibold">{text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-2 border-t border-ink-900/15 pt-6 text-sm">
          <p className="font-bold">Prefer to talk first?</p>
          <a href={`mailto:${general.email}`} className="flex items-center gap-2 hover:underline">
            <LuMail className="h-4 w-4" aria-hidden="true" /> {general.email}
          </a>
          <a
            href={`https://wa.me/${general.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaWhatsapp className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
          </a>
        </div>
      </aside>

      {/* Form */}
      <div className="p-8 md:p-10">
        {status === "success" ? (
          <div className="flex h-full flex-col items-center justify-center py-12 text-center" role="status">
            <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-400">
              <LuCircleCheck className="h-10 w-10" aria-hidden="true" />
            </span>
            <h3 className="text-2xl font-extrabold">Thank you — we've got it! 🎉</h3>
            <p className="mt-3 max-w-sm leading-relaxed text-ink-600">
              Someone from our partnerships team will reply by email. We're excited to work with you.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="space-y-5">
            <h3 className="text-2xl font-extrabold">{formTitle}</h3>

            {status === "error" && (
              <p
                role="alert"
                className="flex items-start gap-2 rounded-2xl bg-danger-50 p-4 text-sm font-semibold text-danger-600"
              >
                <LuCircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                Sorry, that didn't go through. Please try again, or email us at {general.email}.
              </p>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((f) => {
                const id = `pf-${f.name}`;
                const common = {
                  id,
                  name: f.name,
                  value: values[f.name],
                  onChange: update,
                  "aria-invalid": !!errors[f.name],
                  "aria-describedby": errors[f.name] ? `${id}-error` : undefined,
                };
                return (
                  <div key={f.name} className={f.full || f.type === "textarea" ? "sm:col-span-2" : ""}>
                    <label htmlFor={id} className="mb-2 block text-sm font-bold text-ink-800">
                      {f.label} {f.required && <span className="text-danger-600">*</span>}
                    </label>
                    {f.type === "select" ? (
                      <select {...common} className={inputClass}>
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
                        {...common}
                        rows={f.rows ?? 4}
                        placeholder={f.placeholder}
                        className={`${inputClass} resize-y`}
                      />
                    ) : (
                      <input
                        {...common}
                        type={f.type ?? "text"}
                        placeholder={f.placeholder}
                        autoComplete={f.autoComplete}
                        className={inputClass}
                      />
                    )}
                    {errors[f.name] && (
                      <p id={`${id}-error`} className="mt-1.5 text-sm font-semibold text-danger-600">
                        {errors[f.name]}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "sending"}>
              {status === "sending" ? (
                <>
                  <LuLoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…
                </>
              ) : (
                <>
                  {submitLabel} <LuArrowRight className="h-5 w-5" aria-hidden="true" />
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PartnerForm;
