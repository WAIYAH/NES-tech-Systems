
import React from "react";
import AfricanMotif from "./AfricanMotif";

export default function About() {
  return (
    <section id="about" className="relative pt-20 pb-14 bg-white overflow-x-hidden">
      <div className="absolute left-0 top-0 w-full pointer-events-none z-0 opacity-20">
        <AfricanMotif />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 z-10 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-5">
          About <span className="text-[color:#FFD700]">Nakola</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 mb-8">
          <img
            className="w-40 h-40 object-cover rounded-2xl shadow-card border-[6px] border-[color:#FFD700] mb-4 md:mb-0"
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=320&q=80"
            alt="Lucky Loonkishu Nakola, Founder"
          />
          <div>
            <p className="text-lg text-black/80 mb-2">
              <span className="font-semibold text-blue-900">Founder:</span> Lucky Loonkishu Nakola<br />
              <span className="font-semibold text-blue-900">Based in:</span> Nairobi, Kenya
            </p>
            <p className="text-md text-black/70">
              Established in 2024, Nakola Expert Systems has redefined African tech leadership. Blending global expertise with local insights, Nakola delivers software and AI uniquely tailored to Kenya and the continent, uplifting businesses, institutions, and communities.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-[color:#FFD700] mb-3">Our Journey</h3>
          <ol className="relative border-l-4 border-[color:#0056b3] ml-6 space-y-6">
            <li className="ml-6 animate-slide-up">
              <div className="absolute left-[-25px] top-1 bg-[color:#FFD700] w-6 h-6 rounded-full border-4 border-blue-800 flex items-center justify-center">
                <span className="font-bold text-blue-800">2024</span>
              </div>
              <div>
                <span className="font-bold text-blue-900">Founded</span> in Nairobi by Lucky Nakola with a vision to empower Africa through tech.
              </div>
            </li>
            <li className="ml-6 animate-fade-in">
              <div className="absolute left-[-25px] top-1 bg-[color:#FFD700] w-6 h-6 rounded-full border-4 border-blue-800 flex items-center justify-center"></div>
              <div>
                <span className="font-bold">Expansion:</span> Delivered impactful projects for SMEs & enterprises across Kenya and East Africa.
              </div>
            </li>
            <li className="ml-6 animate-fade-in">
              <div className="absolute left-[-25px] top-1 bg-[color:#FFD700] w-6 h-6 rounded-full border-4 border-blue-800 flex items-center justify-center"></div>
              <div>
                <span className="font-bold">Recognition:</span> Industry leader in culturally relevant, scalable digital transformations.
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
