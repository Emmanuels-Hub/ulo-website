import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import {
  LuArrowRight,
  LuAward,
  LuBookOpen,
  LuCheck,
  LuCircleAlert,
  LuLoaderCircle,
  LuPartyPopper,
  LuTrophy,
  LuUsers,
} from "react-icons/lu";
import { formatNaira, useSiteContent } from "../../content/context";
import Button from "../UI/Button";

const inputClass =
  "w-full rounded-2xl border-2 border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 transition focus:border-ink-900 focus:outline-none aria-[invalid=true]:border-danger-600";

const Field = ({ id, label, required, error, hint, children }) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-bold text-ink-800">
      {label} {required && <span className="text-danger-600">*</span>}
    </label>
    {children}
    {hint && !error && <p className="mt-1.5 text-xs text-ink-500">{hint}</p>}
    {error && (
      <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-danger-600">
        <LuCircleAlert className="h-4 w-4" aria-hidden="true" /> {error}
      </p>
    )}
  </div>
);

const EMPTY = { fullName: "", email: "", phone: "", school: "", subjects: [], agreed: false };

const QuizRegistration = ({ phase }) => {
  const { competition: c, general } = useSiteContent();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const need = c.optionalCount || 2;
  const mandatory = c.mandatorySubjects || [];
  const topPrize = c.prizes?.[0]?.amount;

  const perks = [
    topPrize && { icon: LuTrophy, text: `Win up to ${formatNaira(topPrize)}` },
    { icon: LuUsers, text: "Compete with students across Nigeria" },
    { icon: LuAward, text: "Get recognised on the leaderboard" },
    { icon: LuBookOpen, text: "Sharpen your exam skills while you play" },
  ].filter(Boolean);

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const toggleSubject = (subject) => {
    setForm((f) => {
      const has = f.subjects.includes(subject);
      if (!has && f.subjects.length >= need) return f; // keep to the allowed number
      return { ...f, subjects: has ? f.subjects.filter((s) => s !== subject) : [...f.subjects, subject] };
    });
    setErrors((er) => ({ ...er, subjects: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.fullName.trim()) er.fullName = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = "Please enter a valid email address.";
    if (form.phone.replace(/\D/g, "").length < 10) er.phone = "Please enter a valid phone number.";
    if (form.subjects.length !== need) er.subjects = `Please choose exactly ${need} subjects.`;
    if (!form.agreed) er.agreed = "Please confirm to continue.";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/quiz-registration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          school: form.school.trim(),
          subjects: form.subjects,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="register" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] border-2 border-ink-900 bg-white shadow-press lg:grid-cols-[0.8fr_1.2fr]">
          {/* Sidebar */}
          <aside className="bg-brand-400 p-8 md:p-10">
            <h2 className="text-3xl leading-tight font-extrabold">Join the challenge</h2>
            {c.entryFee > 0 && (
              <p className="mt-3 inline-flex rounded-full bg-ink-900 px-4 py-1.5 text-sm font-bold text-brand-400">
                Entry fee: {formatNaira(c.entryFee)}
              </p>
            )}
            <ul className="mt-8 space-y-5">
              {perks.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-semibold">{text}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Form / states */}
          <div className="p-8 md:p-10">
            {phase !== "open" ? (
              <div className="flex h-full flex-col items-start justify-center py-10">
                <h3 className="text-2xl font-extrabold">
                  {phase === "upcoming" ? "Registration opens soon" : "Registration is closed"}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink-600">
                  Join our WhatsApp channel and we'll let you know the moment registration opens for the next edition.
                </p>
                <Button href={general.whatsappChannel} variant="dark" className="mt-6">
                  <FaWhatsapp className="h-5 w-5" aria-hidden="true" /> Join WhatsApp channel
                </Button>
              </div>
            ) : status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center" role="status">
                <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-400">
                  <LuPartyPopper className="h-10 w-10" aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-extrabold">You're registered! 🎉</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-ink-600">{c.registrationNote}</p>
                <Button href={general.whatsappChannel} variant="dark" className="mt-6">
                  <FaWhatsapp className="h-5 w-5" aria-hidden="true" /> Join WhatsApp channel
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="space-y-5">
                <h3 className="text-2xl font-extrabold">Register now</h3>

                {status === "error" && (
                  <p
                    role="alert"
                    className="flex items-start gap-2 rounded-2xl bg-danger-50 p-4 text-sm font-semibold text-danger-600"
                  >
                    <LuCircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    We couldn't complete your registration. Please check your connection and try again — or message us
                    on WhatsApp if it keeps happening.
                  </p>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="fullName" label="Full name" required error={errors.fullName}>
                    <input
                      id="fullName"
                      name="fullName"
                      autoComplete="name"
                      value={form.fullName}
                      onChange={update}
                      placeholder="e.g. Ada Okafor"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className={inputClass}
                    />
                  </Field>
                  <Field id="email" label="Email address" required error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={update}
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={inputClass}
                    />
                  </Field>
                  <Field id="phone" label="Phone number" required error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={update}
                      placeholder="e.g. 0801 234 5678"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={inputClass}
                    />
                  </Field>
                  <Field id="school" label="School or institution">
                    <input
                      id="school"
                      name="school"
                      autoComplete="organization"
                      value={form.school}
                      onChange={update}
                      placeholder="e.g. Queen's College, Lagos"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <fieldset aria-describedby={errors.subjects ? "subjects-error" : "subjects-hint"}>
                  <legend className="mb-1 text-sm font-bold text-ink-800">
                    Your subjects <span className="text-danger-600">*</span>
                  </legend>
                  <p id="subjects-hint" className="mb-3 text-xs text-ink-500">
                    {mandatory.join(" & ")} {mandatory.length > 1 ? "are" : "is"} compulsory. Choose {need} more (
                    {form.subjects.length}/{need} selected).
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {mandatory.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink-900 bg-ink-900 px-4 py-2 text-sm font-bold text-white"
                      >
                        <LuCheck className="h-4 w-4" aria-hidden="true" /> {s}
                      </span>
                    ))}
                    {(c.optionalSubjects || []).map((s) => {
                      const on = form.subjects.includes(s);
                      const full = !on && form.subjects.length >= need;
                      return (
                        <button
                          key={s}
                          type="button"
                          aria-pressed={on}
                          disabled={full}
                          onClick={() => toggleSubject(s)}
                          className={`inline-flex items-center gap-1.5 rounded-full border-2 px-4 py-2 text-sm font-bold transition ${
                            on
                              ? "border-ink-900 bg-brand-400"
                              : "border-ink-200 bg-white hover:border-ink-900 disabled:cursor-not-allowed disabled:opacity-40"
                          }`}
                        >
                          {on && <LuCheck className="h-4 w-4" aria-hidden="true" />} {s}
                        </button>
                      );
                    })}
                  </div>
                  {errors.subjects && (
                    <p
                      id="subjects-error"
                      className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-danger-600"
                    >
                      <LuCircleAlert className="h-4 w-4" aria-hidden="true" /> {errors.subjects}
                    </p>
                  )}
                </fieldset>

                <div>
                  <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-brand-50 p-4 text-sm text-ink-700">
                    <input
                      type="checkbox"
                      name="agreed"
                      checked={form.agreed}
                      onChange={update}
                      className="mt-0.5 h-5 w-5 shrink-0 accent-ink-900"
                    />
                    I agree to the competition rules and confirm that my details are correct.
                  </label>
                  {errors.agreed && <p className="mt-1.5 text-sm font-semibold text-danger-600">{errors.agreed}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
                  {status === "sending" ? (
                    <>
                      <LuLoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" /> Registering…
                    </>
                  ) : (
                    <>
                      Complete registration <LuArrowRight className="h-5 w-5" aria-hidden="true" />
                    </>
                  )}
                </Button>
                {c.registrationNote && <p className="text-center text-xs text-ink-500">{c.registrationNote}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizRegistration;
