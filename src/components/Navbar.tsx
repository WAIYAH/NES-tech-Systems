
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "About", href: "/about-us" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              {link.href.startsWith("/") ? (
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
              ) : (
                <a
                  href={link.href}
                  className="font-semibold text-black hover:text-[color:#FFD700] px-2 py-1 transition-colors duration-150"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        {/* Mobile menu coming soon */}
      </div>
    </nav>
  );
}
