import { useState } from "react";

const Privacy = () => {
  const [active, setActive] = useState("privacy");

  const scrollTo = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute w-72 h-72 bg-yellow-400 rounded-full blur-3xl -top-20 -left-20" />
          <div className="absolute w-96 h-96 bg-pink-500 rounded-full blur-3xl bottom-0 right-0" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-white/10">
            Last Updated: January 25, 2024
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Privacy Policy &amp; Terms
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-light">
            We believe in transparency. Here's how we protect your data and the
            rules for using our platform.
          </p>
        </div>
      </section>

      {/* ─── Body ─── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* sticky sidebar */}
          <aside className="hidden lg:block w-1/4">
            <div className="sticky top-28 space-y-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                On this page
              </p>
              <button
                onClick={() => scrollTo("privacy")}
                className={`block w-full text-left p-3 rounded-lg transition font-medium border-l-4 ${
                  active === "privacy"
                    ? "bg-purple-50 text-purple-700 border-purple-700"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-700 border-transparent hover:border-purple-700"
                }`}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollTo("terms")}
                className={`block w-full text-left p-3 rounded-lg transition font-medium border-l-4 ${
                  active === "terms"
                    ? "bg-yellow-50 text-yellow-600 border-yellow-400"
                    : "text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 border-transparent hover:border-yellow-400"
                }`}
              >
                Terms &amp; Conditions
              </button>
              <button
                onClick={() => scrollTo("contact-note")}
                className="block w-full text-left p-3 rounded-lg text-gray-500 hover:text-gray-900 transition text-sm"
              >
                Have questions?
              </button>
            </div>
          </aside>

          <main className="lg:w-3/4 space-y-16">
            {/* ── Privacy Policy ── */}
            <section
              id="privacy"
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                  <i className="fas fa-shield-alt" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Privacy Policy
                </h2>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                We value your trust and are committed to protecting your
                personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your data when you use ULO
                AI.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1. Information We Collect
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may collect personal details such as your name, email
                    address, phone number, and payment information, as well as
                    non-personal data such as device information, browser type,
                    and usage statistics to ensure proper functionality of our
                    apps.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2. How We Use Your Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-2">
                    <li>To provide, operate, and maintain our services.</li>
                    <li>To improve user experience and personalize content.</li>
                    <li>To process transactions and send confirmations.</li>
                    <li>
                      To communicate updates, security alerts, and support
                      messages.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3. Data Protection
                  </h3>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> We implement industry-standard
                      security measures (SSL, Encryption) to protect your data.
                      However, no method of transmission over the Internet is
                      100% secure.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── Terms & Conditions ── */}
            <section
              id="terms"
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 scroll-mt-28"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <i className="fas fa-gavel" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Terms &amp; Conditions
                </h2>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                By accessing or using our services, you agree to be bound by
                these Terms &amp; Conditions. Please read them carefully before
                using our platform.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1. Acceptance of Terms
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    By using ULO AI, you acknowledge that you have read,
                    understood, and agree to comply with these Terms &amp;
                    Conditions. If you do not agree, you should not use our
                    services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2. User Responsibilities
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    {[
                      "You agree not to misuse our services for illegal activities.",
                      "You are responsible for maintaining the confidentiality of your account password.",
                      "You must provide accurate and up-to-date information during registration.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <i className="fas fa-check text-green-500 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3. Limitation of Liability
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We are not responsible for indirect or consequential damages
                    resulting from the use or inability to use our services. Our
                    liability is limited to the maximum extent permitted by
                    applicable law.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4. Changes to Terms
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may update these Terms &amp; Conditions from time to
                    time. Continued use of our services after any changes means
                    you accept the updated terms.
                  </p>
                </div>
              </div>
            </section>

            <div id="contact-note" className="text-center py-8 scroll-mt-28">
              <p className="text-gray-500">
                Still have questions about our policies?
              </p>
              <a
                href="/contact"
                className="text-purple-700 font-semibold hover:underline mt-1 inline-block"
              >
                Contact our Support Team →
              </a>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Privacy;
