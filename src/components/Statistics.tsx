
import React from "react";

const STATS = [
  { label: "Satisfied Clients", value: "80+" },
  { label: "Projects Delivered", value: "120+" },
  { label: "Avg Uptime", value: "99.99%" },
  { label: "Team Members", value: "15+" },
];

export default function Statistics() {
  return (
    <section className="w-full bg-white/80 py-12">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center m-3 min-w-[120px]">
            <div className="text-3xl md:text-5xl font-bold text-[color:#0056b3] mb-2">{stat.value}</div>
            <div className="text-base md:text-lg text-blue-900/80 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
