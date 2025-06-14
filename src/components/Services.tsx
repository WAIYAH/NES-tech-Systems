
import React from "react";

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
    <section id="services" className="py-24 bg-blue-50 relative animate-fade-in">
      <div className="max-w-6xl mx-auto px-3">
        <h2 className="text-3xl md:text-4xl text-blue-900 font-bold mb-10 text-center">
          Our <span className="text-[color:#FFD700]">Services</span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((srv, i) => (
            <div
              key={srv.title}
              className="relative bg-white rounded-2xl p-7 shadow-card border-2 border-transparent group hover:border-[color:#FFD700] hover:shadow-lg transition-all duration-200 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${i * 80}ms` }}
              tabIndex={0}
            >
              <div className="text-4xl mb-3 flex items-center gap-2">
                <span aria-label="service icon">{srv.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-blue-900 group-hover:text-[color:#FFD700] transition-colors duration-200">{srv.title}</h3>
              <p className="text-md text-black/70 mt-2">{srv.desc}</p>
              {/* Micro-interaction line */}
              <span className="block w-0 group-hover:w-full h-1 bg-[color:#FFD700] transition-all duration-300 mt-4 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
