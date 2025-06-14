
import React from "react";
import Navbar from "../components/Navbar";

const PROJECTS = [
  {
    title: "SME Digital Upgrade",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&w=600",
    description: "Transformed a local retailer’s online presence and sales via a robust e-commerce system.",
    sector: "Retail Tech",
  },
  {
    title: "AI Chatbot for Financial Services",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&w=600",
    description: "Deployed intelligent customer support for a pan-African financial app.",
    sector: "Fintech",
  },
  {
    title: "Campus IT Revamp",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&w=600",
    description: "Modernized ICT infrastructure for a Nairobi-based institution.",
    sector: "Education",
  },
  {
    title: "Healthcare Data Platform",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=600",
    description: "Built an analytics dashboard to improve patient outcomes across hospitals.",
    sector: "Healthtech",
  },
  {
    title: "Logistics Optimization Suite",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&w=600",
    description: "Reduced delivery times for a logistics company by 40% with intelligent routing.",
    sector: "Logistics",
  },
  {
    title: "Smart Agriculture Platform",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&w=600",
    description: "Empowered farmers with precision data for better yields and sustainability.",
    sector: "AgriTech",
  },
  {
    title: "Energy Usage Analytics",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&w=600",
    description: "Developed real-time analytics tools for power and water utilities.",
    sector: "Utilities",
  },
  {
    title: "Public Safety Dashboard",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=600",
    description: "An early alert system for emergencies adopted by a major city’s authorities.",
    sector: "GovTech",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 animate-fade-in">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-10 text-blue-900 text-center">
            Our <span className="text-[color:#FFD700]">Portfolio</span>
          </h1>
          <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, idx) => (
              <div
                key={p.title}
                className="rounded-2xl border border-blue-100 shadow-card group cursor-pointer overflow-hidden bg-white animate-slide-up transition-transform hover-scale"
                tabIndex={0}
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                    style={{ transition: "transform 0.7s cubic-bezier(0.2,0,0.2,1)" }}
                  />
                </div>
                <div className="p-5 bg-white">
                  <h3 className="text-lg font-bold text-blue-900 mb-1 group-hover:text-[color:#FFD700] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-md text-black/70 mb-2">{p.description}</p>
                  <span className="inline-block px-3 py-1 text-xs bg-[color:#FFD700] text-blue-900 rounded-full font-semibold mt-1">
                    {p.sector}
                  </span>
                </div>
              </div>
            ))}
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
