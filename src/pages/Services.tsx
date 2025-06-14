
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// 10 Service Offerings (source of truth)
const SERVICES = [
  {
    title: "AI-Powered Solutions",
    desc: "Advanced chatbots, automation, analytics platforms for data-driven success.",
    icon: "🤖",
  },
  {
    title: "Mobile App Development",
    desc: "Intuitive cross-platform apps for iOS, Android & everywhere your users are.",
    icon: "📱",
  },
  {
    title: "Full-Stack Web Development",
    desc: "Crafting robust, stunning web apps from frontend to scalable backend.",
    icon: "💻",
  },
  {
    title: "API Dev & Integration",
    desc: "Connecting systems with custom APIs & seamless third-party integration.",
    icon: "🔗",
  },
  {
    title: "ICT Support Systems",
    desc: "Reliable IT infrastructure & digital helpdesk for organizations.",
    icon: "🛰️",
  },
  {
    title: "Consulting & Training",
    desc: "Expert guidance & upskilling in AI, ML & software technologies.",
    icon: "👨‍🏫",
  },
  {
    title: "Digital Transformation for SMEs",
    desc: "Modernizing small business IT to scale and thrive in digital Africa.",
    icon: "🚀",
  },
  {
    title: "Database Design & Optimization",
    desc: "Designing & tuning data systems for speed, scale, security.",
    icon: "🗄️",
  },
  {
    title: "Cybersecurity Solutions",
    desc: "Defending your data and infrastructure from evolving threats.",
    icon: "🛡️",
  },
  {
    title: "Cloud & DevOps",
    desc: "Streamlined cloud architecture & rapid DevOps for business agility.",
    icon: "☁️",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 px-2 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-blue-900 text-center">
            Our <span className="text-[color:#FFD700]">Services</span>
          </h1>
          <p className="mb-12 text-center text-lg text-black/80">
            Nakola Expert Systems delivers truly modern technology for African teams.<br />
            Explore our core offerings:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv, i) => (
              <div
                key={srv.title}
                className="bg-white rounded-2xl shadow-card border border-blue-100 flex flex-col items-start p-7 transition hover:shadow-lg hover:-translate-y-1 group"
                style={{
                  animation: "fade-in 0.6s cubic-bezier(0.4,0,0.6,1) forwards",
                  animationDelay: `${i * 50}ms`
                }}
                tabIndex={0}
              >
                <div className="text-4xl mb-4 ml-1">{srv.icon}</div>
                <h2 className="text-lg font-bold mb-2 text-blue-900 group-hover:text-[color:#FFD700] transition-colors">{srv.title}</h2>
                <p className="text-[15px] text-black/70 mb-1">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
