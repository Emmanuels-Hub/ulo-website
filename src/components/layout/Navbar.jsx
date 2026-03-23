import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const partnerLinks = [
  { to: "/institutional-partners", label: "Institutional Partners" },
  { to: "/content-partners", label: "Content & EdTech Partners" },
  { to: "/ngos", label: "NGOs & Foundations" },
  { to: "/corporate-learning", label: "Corporate Learning Partners" },
  { to: "/campus-ambassadors", label: "Campus Ambassadors" },
];

const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-yellow-400 transition-colors font-semibold"
    : "hover:text-yellow-400 transition-colors font-semibold";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);
  const [partnerMobileOpen, setPartnerMobileOpen] = useState(false);
  const [supportMobileOpen, setSupportMobileOpen] = useState(false);

  const dropdownRef = useRef(null);
  const supportDropdownRef = useRef(null);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (supportDropdownRef.current && !supportDropdownRef.current.contains(e.target)) {
        setSupportDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  // Notice the empty <> fragment wrapping the return
  return (
    <>
      <header className="fixed w-full top-0 left-0 z-30 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
          {/* ── Logo ── */}
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="/img/cropped.png"
              alt="ULO AI"
              className="w-20 object-contain"
            />
          </NavLink>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/features" className={navLinkClass}>
              Features
            </NavLink>

            {/* Partner dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1 py-6 font-semibold hover:text-yellow-400 transition-colors focus:outline-none"
              >
                Partner
                <i
                  className={`fas fa-chevron-down text-xs mt-0.5 ml-1 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                  <div className="py-2">
                    {partnerLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-5 py-3 text-sm text-gray-600 hover:bg-yellow-50 hover:text-purple-700 transition-colors"
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/quiz-competition" className={navLinkClass}>
              Quiz Competition
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

            {/* Support Dropdown */}
            <div className="relative" ref={supportDropdownRef}>
              <button
                onClick={() => setSupportDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1 py-6 font-semibold hover:text-yellow-400 transition-colors focus:outline-none"
              >
                Support
                <i
                  className={`fas fa-chevron-down text-xs mt-0.5 ml-1 transition-transform duration-200 ${
                    supportDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {supportDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                  <div className="py-2">
                    <NavLink
                      to="/help"
                      onClick={() => setSupportDropdownOpen(false)}
                      className="block px-5 py-3 text-sm text-gray-600 hover:bg-yellow-50 hover:text-purple-700 transition-colors"
                    >
                      Help & Support
                    </NavLink>
                    <NavLink
                      to="/privacy"
                      onClick={() => setSupportDropdownOpen(false)}
                      className="block px-5 py-3 text-sm text-gray-600 hover:bg-yellow-50 hover:text-purple-700 transition-colors"
                    >
                      Privacy
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* ── Right Section ── */}
          <div className="flex items-center space-x-6">
            <div className="hidden lg:block text-right">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                For Support
              </p>
              <a
                href="tel:+2349061616524"
                className="text-yellow-500 font-bold hover:text-purple-700 transition"
              >
                +234 906 161 6524
              </a>
            </div>

            <a
                href="https://portal.uloai.tech/portal"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block bg-yellow-400 text-purple-900 px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-purple-800 hover:text-white transition transform hover:-translate-y-0.5"
              >
                Sign up
              </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-gray-800 focus:outline-none p-2"
              aria-label="Open menu"
            >
              <i className="fas fa-bars text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Overlay (Moved Outside Header) ── */}
      {mobileOpen && (
        <div
          onClick={closeMobile}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      {/* ── Mobile Sidebar (Moved Outside Header & Added flex flex-col) ── */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl p-6 transform transition-transform duration-300 md:hidden flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <img src="/img/cropped.png" className="w-16" alt="ULO AI" />
          <button
            onClick={closeMobile}
            className="text-gray-500 hover:text-red-500 transition focus:outline-none"
            aria-label="Close menu"
          >
            <i className="fas fa-times text-2xl" />
          </button>
        </div>

        <nav className="flex flex-col space-y-6 font-semibold text-gray-700 text-lg overflow-y-auto">
          <NavLink
            to="/"
            onClick={closeMobile}
            className="hover:text-yellow-400 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/features"
            onClick={closeMobile}
            className="hover:text-yellow-400 transition"
          >
            Features
          </NavLink>

          {/* Partner accordion */}
          <div>
            <button
              onClick={() => setPartnerMobileOpen((prev) => !prev)}
              className="flex justify-between items-center w-full hover:text-yellow-400 transition"
            >
              Partner
              <i
                className={`fas fa-chevron-down text-sm transition-transform duration-200 ${
                  partnerMobileOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {partnerMobileOpen && (
              <div className="mt-3 ml-2 flex flex-col space-y-3 border-l-2 border-gray-100 pl-4 text-base font-medium text-gray-600">
                {partnerLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={closeMobile}
                    className="hover:text-purple-700 transition"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/about"
            onClick={closeMobile}
            className="hover:text-yellow-400 transition"
          >
            About Us
          </NavLink>
          <NavLink
            to="/quiz-competition"
            onClick={closeMobile}
            className="hover:text-yellow-400 transition"
          >
            Quiz Competition
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMobile}
            className="hover:text-yellow-400 transition"
          >
            Contact
          </NavLink>

          {/* Support accordion */}
          <div>
            <button
              onClick={() => setSupportMobileOpen((prev) => !prev)}
              className="flex justify-between items-center w-full hover:text-yellow-400 transition"
            >
              Support
              <i
                className={`fas fa-chevron-down text-sm transition-transform duration-200 ${
                  supportMobileOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {supportMobileOpen && (
              <div className="mt-3 ml-2 flex flex-col space-y-3 border-l-2 border-gray-100 pl-4 text-base font-medium text-gray-600">
                <NavLink
                  to="/help"
                  onClick={closeMobile}
                  className="hover:text-purple-700 transition"
                >
                  Help & Support
                </NavLink>
                <NavLink
                  to="/privacy"
                  onClick={closeMobile}
                  className="hover:text-purple-700 transition"
                >
                  Privacy
                </NavLink>
              </div>
            )}
          </div>
        </nav>

        <div className="mt-auto pt-6">
          <a
              href="https://portal.uloai.tech/portal"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="block w-full bg-yellow-400 text-purple-900 py-3 rounded-xl font-bold text-center hover:bg-purple-800 hover:text-white transition shadow-md"
            >
              Sign UP
            </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;