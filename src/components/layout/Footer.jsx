import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white pt-20 pb-10 overflow-hidden font-sans">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400" />

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900 rounded-full mix-blend-screen blur-[100px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* ── Top row: Brand + Newsletter ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-b border-gray-800 pb-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                U
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                ULO AI
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Building powerful educational tools with simplicity and elegance.
              We empower students to achieve academic success through AI
              technology.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-pink-600   hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-sky-500     hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-yellow-500  hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600   hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2 flex flex-col justify-center lg:items-end">
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 w-full max-w-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                Subscribe to our Newsletter
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest study tips, AI updates, and exam strategies
                delivered to your inbox.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-lg whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ── Links Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-yellow-400 font-bold uppercase tracking-wider text-sm mb-6">
              Product
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link
                  to="/features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Exam Simulator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Question Generator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  Download App{" "}
                  <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">
                    Free
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-400 font-bold uppercase tracking-wider text-sm mb-6">
              Company
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog / News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-400 font-bold uppercase tracking-wider text-sm mb-6">
              Support
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <Link
                  to="/help"
                  className="hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  System Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-400 font-bold uppercase tracking-wider text-sm mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-purple-500" />
                <span>
                  123 Innovation Dr,
                  <br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-purple-500" />
                <a
                  href="mailto:hello@uloai.com"
                  className="hover:text-white transition-colors"
                >
                  hello@uloai.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-purple-500" />
                <a
                  href="tel:+2349061616524"
                  className="hover:text-white transition-colors"
                >
                  +234 906 161 6524
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center">
            &copy; {year} ULO AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
