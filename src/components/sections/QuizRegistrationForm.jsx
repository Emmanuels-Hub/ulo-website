import { useState } from "react";

/* ── Quiz Registration Form ────────────────────────────────────────────── */
const QuizRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    school: "",
    subjects: [],
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const subjects = [
    "English Language",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Civic Education",
    "Economics",
    "Government",
    "Literature in English",
    "History",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubjectChange = (subject) => {
    setFormData((prev) => {
      const subs = prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject];
      return { ...prev, subjects: subs };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields");
      return;
    }

    if (formData.subjects.length < 2){
      alert("Please select at least 2 optional subjects");
      return;
    }

    setStatus("sending");

    try {
      // Send data to API endpoint
      const response = await fetch("https://ulo-upgrade.onrender.com/quiz-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          school: formData.school,
          subjects: formData.subjects,
        }),
      });

      if (response.ok) {
        setStatus("success");
        // Redirect to WhatsApp channel after 2 seconds
        setTimeout(() => {
          window.location.href = "https://whatsapp.com/channel/0029Vb7CoKm1t90g7JR9Po2E";
        }, 2000);
      } else {
        setStatus("error");
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      alert("An error occurred. Please check your connection and try again.");
    }
  };

  const sidebarItems = [
    {
      icon: "fas fa-trophy",
      text: "Win prizes up to ₦100,000",
    },
    {
      icon: "fas fa-users",
      text: "Compete with thousands of students",
    },
    {
      icon: "fas fa-certificate",
      text: "Get recognized on the leaderboard",
    },
    {
      icon: "fas fa-book",
      text: "Test yourself across multiple subjects",
    },
  ];

  return (
    <section id="register" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* ── Sidebar ── */}
          <aside className="bg-gradient-to-br from-purple-900 to-purple-800 text-white p-10 lg:w-96 flex-shrink-0">
            <h3 className="text-3xl font-extrabold mb-8">Join the Challenge</h3>
            <ul className="space-y-6">
              {sidebarItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <i className={`${item.icon} text-yellow-400 text-2xl flex-shrink-0 mt-1`}></i>
                  <span className="text-gray-100 leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>


          </aside>

          {/* ── Form ── */}
          <div className="flex-1 p-10">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-8">
              Register Now
            </h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <i className="fas fa-check text-green-600 text-5xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Registration Successful! 🎉
                </h4>
                <p className="text-gray-600 mb-4 max-w-sm">
                  You're all set to compete in the ULO AI Quiz Competition. Redirecting you to WhatsApp channel...
                </p>
                <div className="flex items-center gap-2 justify-center text-purple-600">
                  <i className="fas fa-spinner animate-spin"></i>
                  <span className="text-sm font-medium">Taking you to WhatsApp</span>
                </div>
              </div>
            ) : status === "error" ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-exclamation-circle text-red-600 text-5xl"></i>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Registration Failed
                </h4>
                <p className="text-gray-600 mb-6 max-w-sm">
                  There was an issue submitting your registration. Please try again.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-800 transition"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g., Ayesha Okafor"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g., +234 801 234 5678"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    required
                  />
                </div>

                {/* School */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    School/Institution
                  </label>
                  <input
                    type="text"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    placeholder="e.g., Federal University of Lagos"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  />
                </div>

                {/* Subjects Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Select Your Quiz Subjects <span className="text-red-500">*</span>
                  </label>
                  <p className="text-xs text-gray-600 mb-3">
                    English is mandatory. Choose 2 additional subjects you'd like to be tested on.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {subjects.map((subject) => (
                      <label
                        key={subject}
                        className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition ${
                          subject === "English Language"
                            ? "bg-purple-50 border-purple-400 pointer-events-none"
                            : formData.subjects.includes(subject)
                            ? "bg-yellow-50 border-yellow-400"
                            : "bg-white border-gray-200 hover:border-purple-200"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={
                            subject === "English Language" ||
                            formData.subjects.includes(subject)
                          }
                          onChange={() => handleSubjectChange(subject)}
                          disabled={subject === "English Language"}
                          className="w-4 h-4 text-purple-600 rounded"
                        />
                        <span className="text-sm font-medium text-gray-900">
                          {subject}
                          {subject === "English Language" && (
                            <span className="text-xs text-purple-600 ml-2">(Mandatory)</span>
                          )}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 mt-1 text-blue-600"
                    required
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    I agree to the competition rules and terms. I confirm that the information provided is accurate.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-800 hover:to-purple-700 text-white py-3.5 rounded-xl font-bold transition transform hover:-translate-y-0.5 disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <span>Processing…</span>
                      <i className="fas fa-spinner animate-spin"></i>
                    </>
                  ) : (
                    <>
                      <span>Complete Registration</span>
                      <i className="fas fa-arrow-right"></i>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Complete your registration. You'll be redirected to the App/Portal to complete payment.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizRegistrationForm;
