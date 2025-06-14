
import React from "react";

function ParticleBg() {
  // Canvas-free, SVG lightweight "confetti" of dots + zigzag for African flair
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <svg width="100%" height="100%" className="w-full h-full absolute" style={{ minHeight: 520 }}>
        <g>
          {/* Subtle gold dots */}
          {[...Array(48)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1400}
              cy={Math.random() * 500}
              r={Math.random() * 3 + 2}
              fill={i % 7 === 0 ? "#0056b3" : "#FFD700"}
              opacity={i % 7 === 0 ? 0.12 : 0.17}
            />
          ))}
          {/* African zigzag motif */}
          <polyline points="0,400 100,390 200,410 300,385 400,415 500,390 600,410 700,395"
                    stroke="#FFD700" strokeWidth="6" fill="none" opacity="0.1" />
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-[88vh] pt-24 md:pt-28 overflow-hidden bg-gradient-to-br from-white to-blue-50 shadow-hero">
      <ParticleBg />
      <div className="relative z-10 flex flex-col items-center text-center px-3 md:px-0 animate-fade-in">
        <img src="/logo-nakola.svg" aria-hidden className="w-24 h-24 mb-4 drop-shadow-lg" />
        <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4 leading-tight drop-shadow-xl animate-scale-in"
            style={{ letterSpacing: "0.01em" }}>
          Africa’s Future, <span className="text-[color:#FFD700]">Powered by AI</span>
        </h1>
        <p className="text-lg md:text-2xl text-blue-900 max-w-2xl mb-7 font-medium">
          Unlocking intelligent, scalable software and automation for the continent's boldest businesses.
        </p>
        <a href="#why-choose-us" className="inline-flex items-center group font-semibold bg-[color:#0056b3] hover:bg-[color:#FFD700] text-white hover:text-blue-900 px-7 py-3 rounded-xl text-lg shadow-card transition-colors duration-200 hover:scale-105 focus:outline-blue-800 animate-slide-up">
          Why Choose Us?
          <span className="ml-3 animate-bounce">
            <svg viewBox="0 0 18 18" width="24" height="24" fill="none" aria-hidden>
              <path d="M9 2v14M9 16l5-5m-5 5l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
        </a>
      </div>
      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <div className="w-8 h-8 flex flex-col items-center justify-center animate-bounce">
          <svg width="28" height="28" fill="none">
            <circle cx="14" cy="14" r="14" fill="#FFD700" opacity="0.22"/>
            <path d="M14 8v8M14 16l4-4m-4 4l-4-4" stroke="#0056b3" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

