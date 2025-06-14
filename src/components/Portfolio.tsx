
import React, { useState } from "react";
import ParallaxImage from "./ParallaxImage";

const CASES = [
  {
    title: "SME Digital Upgrade",
    before: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&w=400",
    after: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=400",
    description: "Transformed local retailer’s online presence and sales via robust e-commerce system.",
    sector: "Retail Tech",
  },
  {
    title: "AI Chatbot for Financial Services",
    before: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&w=400",
    after: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&w=400",
    description: "Deployed intelligent customer support for a pan-African financial app.",
    sector: "Fintech",
  },
  {
    title: "Campus IT Revamp",
    before: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&w=400",
    after: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&w=400",
    description: "Modernized ICT infrastructure for a Nairobi-based institution.",
    sector: "Education",
  },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white relative animate-fade-in">
      <div className="max-w-6xl mx-auto px-3">
        <h2 className="text-3xl md:text-4xl text-blue-900 font-bold mb-10 text-center">
          Our <span className="text-[color:#FFD700]">Portfolio</span>
        </h2>
        <div className="grid gap-9 md:grid-cols-3">
          {CASES.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-blue-100 shadow-card group cursor-pointer overflow-hidden animate-slide-up"
              tabIndex={0}
              onMouseEnter={() => setHovered(c.title)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <ParallaxImage
                  src={hovered === c.title ? c.after : c.before}
                  alt={c.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  style={{
                    transition: "transform 0.7s cubic-bezier(0.2,0,0.2,1)",
                  }}
                />
                {/* Before/after label */}
                <span className="absolute top-2 right-3 text-xs uppercase font-bold text-white bg-black/70 px-2 py-1 rounded">
                  {hovered === c.title ? "After" : "Before"}
                </span>
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-lg font-bold text-blue-900 mb-1 group-hover:text-[color:#FFD700] transition-colors">
                  {c.title}
                </h3>
                <p className="text-md text-black/70 mb-2">{c.description}</p>
                <span className="inline-block px-3 py-1 text-xs bg-[color:#FFD700] text-blue-900 rounded-full font-semibold mt-1">
                  {c.sector}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
