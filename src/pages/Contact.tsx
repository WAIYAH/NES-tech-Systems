
import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ContactForm />
      </main>
      <footer className="bg-[color:#0056b3] text-white text-center py-5 text-sm mt-10">
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          <a href="/about-us" className="underline hover:text-[color:#FFD700]">About Us</a>
          <a href="/privacy-policy" className="underline hover:text-[color:#FFD700]">Privacy Policy</a>
          <a href="/terms-of-service" className="underline hover:text-[color:#FFD700]">Terms</a>
          <a href="/cookies-policy" className="underline hover:text-[color:#FFD700]">Cookies</a>
          <a href="/accessibility" className="underline hover:text-[color:#FFD700]">Accessibility</a>
        </div>
        &copy; {new Date().getFullYear()} Nakola Expert Systems · Nairobi, Kenya
      </footer>
    </div>
  );
}
