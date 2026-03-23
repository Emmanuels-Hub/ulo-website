import { useState } from "react";

const infoCards = [
  {
    icon: "fas fa-phone-alt",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
    title: "Phone",
    line1: "+234 9061616524",
    line2: "Mon-Fri from 8am to 5pm",
  },
  {
    icon: "fas fa-envelope",
    bg: "bg-purple-100",
    color: "text-purple-600",
    title: "Email",
    line1: "support@uloai.com",
    line2: "Online support 24/7",
  },
  {
    icon: "fas fa-map-marker-alt",
    bg: "bg-green-100",
    color: "text-green-600",
    title: "Office",
    line1: "Remote/Virtual Office",
    line2: "Lagos State, Nigeria",
  },
];

const initialForm = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("http://127.0.0.1:8080/web/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* ─── Hero / main section ─── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-50 via-purple-50 to-white overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-purple-200/30 rounded-full -top-20 -left-20 blur-3xl animate-pulse" />
          <div className="absolute w-80 h-80 bg-yellow-200/40 rounded-full top-1/2 right-0 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 fade-in-up">
            <span className="text-purple-700 font-semibold tracking-wider uppercase text-sm">
              Get in touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions, feedback, or want to partner with us? We'd love to
              hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* ── Form card ── */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 fade-in-up">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Send us a message
              </h3>

              {status === "success" ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <i className="fas fa-check text-green-600 text-3xl" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-500">
                    We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-purple-700 font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm font-semibold text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-yellow-400 text-gray-900 font-bold py-4 rounded-xl shadow-lg hover:bg-yellow-300 hover:shadow-xl transition transform hover:-translate-y-1 disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* ── Info cards ── */}
            <div className="flex flex-col space-y-6 fade-in-up anim-delay-200">
              {infoCards.map((c) => (
                <div
                  key={c.title}
                  className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition flex items-center space-x-5 border border-gray-50"
                >
                  <div
                    className={`w-14 h-14 ${c.bg} ${c.color} rounded-full flex items-center justify-center text-2xl`}
                  >
                    <i className={c.icon} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {c.title}
                    </h4>
                    <p className="text-gray-600">{c.line1}</p>
                    <p className="text-sm text-gray-400">{c.line2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
