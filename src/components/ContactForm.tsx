
import React, { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="contact" className="py-24 bg-blue-50 animate-fade-in">
      <div className="max-w-lg mx-auto px-5 rounded-2xl shadow-card bg-white">
        <h2 className="text-3xl font-bold text-blue-900 mb-5 text-center">
          <span className="text-[color:#FFD700]">Contact</span> Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8" autoComplete="off" aria-label="Contact form">
          <div className="relative">
            <input
              name="name"
              id="contact-name"
              type="text"
              required
              className="peer h-12 w-full border-b-2 border-blue-200 text-md placeholder-transparent focus:outline-none focus:border-[color:#FFD700] transition-all"
              placeholder="Your Name"
              autoComplete="off"
              aria-label="Your Name"
            />
            <label
              htmlFor="contact-name"
              className="pointer-events-none absolute left-0 top-3 text-md text-blue-900 opacity-60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-md peer-focus:-top-4 peer-focus:text-sm peer-focus:opacity-100 bg-white px-2"
            >
              Name
            </label>
          </div>
          <div className="relative">
            <input
              name="email"
              id="contact-email"
              type="email"
              required
              className="peer h-12 w-full border-b-2 border-blue-200 text-md placeholder-transparent focus:outline-none focus:border-[color:#FFD700] transition-all"
              placeholder="Your Email"
              autoComplete="off"
              aria-label="Your Email"
            />
            <label
              htmlFor="contact-email"
              className="pointer-events-none absolute left-0 top-3 text-md text-blue-900 opacity-60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-md peer-focus:-top-4 peer-focus:text-sm peer-focus:opacity-100 bg-white px-2"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <textarea
              name="message"
              id="contact-message"
              required
              className="peer h-28 w-full border-b-2 border-blue-200 text-md placeholder-transparent focus:outline-none focus:border-[color:#FFD700] transition-all resize-none"
              placeholder="Your Message"
              aria-label="Your Message"
            />
            <label
              htmlFor="contact-message"
              className="pointer-events-none absolute left-0 top-3 text-md text-blue-900 opacity-60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-md peer-focus:-top-4 peer-focus:text-sm peer-focus:opacity-100 bg-white px-2"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-[color:#FFD700] text-blue-900 font-bold py-3 rounded-xl mt-5 text-lg hover:bg-[color:#0056b3] hover:text-white focus:outline-none shadow-md transition-colors duration-200"
          >
            {sent ? "Thanks! We'll be in touch soon." : "Send Message"}
          </button>
        </form>
        <div className="text-center text-xs text-blue-800 mt-6">
          Nairobi, Kenya &bull; contact@nakola.co.ke
        </div>
      </div>
    </section>
  );
}
