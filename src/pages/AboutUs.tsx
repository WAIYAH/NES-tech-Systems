
import React from "react";
import Timeline from "../components/about/Timeline";
import FlipCard from "../components/about/FlipCard";
import TeamGrid from "../components/about/TeamGrid";
import ComparisonTable from "../components/about/ComparisonTable";
import AwardsCarousel from "../components/about/AwardsCarousel";
import BackToTop from "@/components/BackToTop";

export default function AboutUs() {
  return (
    <section className="min-h-screen bg-white text-black py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">About Nakola Expert Systems</h1>
        {/* Company Journey Timeline */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#FFD700]">Our Day / Factory</h2>
          <Timeline />
        </div>
        {/* Mission/Vision/Values Cards */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#FFD700]">Mission, Vision, Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FlipCard
              front={<div>
                <div className="font-bold text-blue-900 text-lg mb-2">Mission</div>
                <span>Deliver intelligent software & AI-powered tools for real-world impact in Africa.</span>
              </div>}
              back={<div>
                <span className="text-sm">We empower businesses with practical, local solutions for growth, efficiency, and progress.</span>
              </div>}
            />
            <FlipCard
              front={<div>
                <div className="font-bold text-blue-900 text-lg mb-2">Vision</div>
                <span>Become Africa’s leading tech solutions provider through innovation.</span>
              </div>}
              back={<div>
                <span className="text-sm">Setting global standards with carefully tailored African systems.</span>
              </div>}
            />
            <FlipCard
              front={<div>
                <div className="font-bold text-blue-900 text-lg mb-2">Values</div>
                <span>Innovation, Partnership, Local Insight, Integrity.</span>
              </div>}
              back={<div>
                <span className="text-sm">We operate with transparency and passion for African progress.</span>
              </div>}
            />
          </div>
        </div>
        {/* Team/Leadership */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#FFD700]">Our Team & Leadership</h2>
          <TeamGrid />
        </div>
        {/* Why Choose Us */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#FFD700]">Why Choose Us</h2>
          <ComparisonTable />
        </div>
        {/* Awards */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#FFD700]">Awards & Certifications</h2>
          <AwardsCarousel />
        </div>
      </div>
      <BackToTop />
    </section>
  );
}
