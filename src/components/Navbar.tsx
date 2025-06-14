
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg bg-white/95 backdrop-blur" : "bg-transparent"
      }`}
      aria-label="Main Navigation"
    >
      <div className="flex justify-between items-center px-6 h-20 max-w-[1400px] mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo-nakola.svg" alt="Nakola Expert Systems Logo" className="w-12 h-12" />
          <span className="font-bold text-xl tracking-wide text-blue-900">Nakola Expert Systems</span>
        </Link>
        <ul className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`font-semibold px-2 py-1 transition-colors duration-150 ${
                  location.pathname === link.href
                    ? "text-[color:#FFD700] underline"
                    : "text-black hover:text-[color:#FFD700]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 text-blue-900 hover:text-[color:#FFD700] transition-colors"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <Menu size={28} />
        </button>
      </div>
      {/* MOBILE MENU DRAWER */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" onClick={() => setMenuOpen(false)}>
          <nav
            className="absolute right-0 top-20 w-3/4 max-w-xs bg-white shadow-xl rounded-l-2xl h-[90vh] p-8 flex flex-col gap-5 animate-slide-in-right"
            onClick={e => e.stopPropagation()}
          >
            <ul className="flex flex-col space-y-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`block font-semibold text-lg py-2 px-4 rounded hover:bg-blue-50 transition-colors duration-150 ${
                      location.pathname === link.href
                        ? "text-[color:#FFD700] underline"
                        : "text-blue-900 hover:text-[color:#FFD700]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/"
                  className="block mt-6 font-bold text-center text-blue-900 hover:text-[color:#FFD700]"
                >
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </nav>
  );
}
