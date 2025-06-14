
import React from "react";
import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 animate-fade-in">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-blue-900 text-center">
            Our <span className="text-[color:#FFD700]">Services</span>
          </h1>
          <p className="mb-8 text-center text-lg text-black/80">
            At Nakola Expert Systems, we provide a wide array of tech and software solutions tailored for the African market.<br />
            Here are some of the services we offer:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl shadow-card border border-blue-50 p-7 hover-scale bg-blue-50/30 transition">
              <h2 className="text-xl font-bold text-blue-900 mb-2">Custom Software Development</h2>
              <p>
                Bespoke web, mobile, and desktop solutions crafted for your business goals—with a focus on scalability, security, and modern tech.
              </p>
            </div>
            <div className="rounded-xl shadow-card border border-blue-50 p-7 hover-scale bg-blue-50/30 transition">
              <h2 className="text-xl font-bold text-blue-900 mb-2">AI Integration & Automation</h2>
              <p>
                Boost efficiency with intelligent chatbots, process automation, data analytics, and tailor-made AI tools.
              </p>
            </div>
            <div className="rounded-xl shadow-card border border-blue-50 p-7 hover-scale bg-blue-50/30 transition">
              <h2 className="text-xl font-bold text-blue-900 mb-2">Cloud & Infrastructure</h2>
              <p>
                Migrate, modernize, or scale your business with our cloud services, infrastructure set-up, and DevOps expertise.
              </p>
            </div>
            <div className="rounded-xl shadow-card border border-blue-50 p-7 hover-scale bg-blue-50/30 transition">
              <h2 className="text-xl font-bold text-blue-900 mb-2">Consulting & Training</h2>
              <p>
                Strategy, implementation, and upskilling sessions for organizations, delivered by expert local engineers.
              </p>
            </div>
          </div>
        </div>
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
