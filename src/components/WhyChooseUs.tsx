
import React from "react";
import { CheckCircle } from "lucide-react";

const REASONS = [
  "Proven expertise in AI and software for African markets",
  "Local, on-the-ground support—real partnerships",
  "Solutions tailored for rapid growth & resilience",
  "Transparent pricing, flexible packages",
  "Trusted by SMEs and enterprises alike",
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center">
          Why <span className="text-[color:#FFD700]">Choose Us?</span>
        </h2>
        <ul className="space-y-4">
          {REASONS.map((reason, i) => (
            <li key={i} className="flex items-center gap-3 text-lg">
              <CheckCircle size={22} className="text-[color:#FFD700] shrink-0" />
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
