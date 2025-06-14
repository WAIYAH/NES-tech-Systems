
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[color:#0056b3] text-white text-center py-5 text-sm mt-10">
      <div className="flex flex-wrap justify-center gap-4 mb-2">
        <Link to="/about-us" className="underline hover:text-[color:#FFD700]">About Us</Link>
        <Link to="/services" className="underline hover:text-[color:#FFD700]">Services</Link>
        <Link to="/portfolio" className="underline hover:text-[color:#FFD700]">Portfolio</Link>
        <Link to="/contact" className="underline hover:text-[color:#FFD700]">Contact</Link>
        <Link to="/privacy-policy" className="underline hover:text-[color:#FFD700]">Privacy Policy</Link>
        <Link to="/terms-of-service" className="underline hover:text-[color:#FFD700]">Terms</Link>
        <Link to="/cookies-policy" className="underline hover:text-[color:#FFD700]">Cookies</Link>
        <Link to="/accessibility" className="underline hover:text-[color:#FFD700]">Accessibility</Link>
      </div>
      &copy; {new Date().getFullYear()} Nakola Expert Systems · Nairobi, Kenya
    </footer>
  );
}
