
import React from "react";
// Sections will be filled in next step!
export default function AboutUs() {
  return (
    <section className="min-h-screen bg-white text-black py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">About Nakola Expert Systems</h1>
        {/* Company Journey Timeline */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[color:#FFD700]">Our Day / Factory</h2>
          <div>
            {/* Timeline animation to be added */}
            <p className="text-black/70">[Timeline placeholder]</p>
          </div>
        </div>
        {/* Mission/Vision/Values Cards */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[color:#FFD700]">Mission, Vision, Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Flip cards will go here */}
            <div className="bg-blue-50 h-32 rounded-xl shadow-card flex items-center justify-center">[Card]</div>
            <div className="bg-blue-50 h-32 rounded-xl shadow-card flex items-center justify-center">[Card]</div>
            <div className="bg-blue-50 h-32 rounded-xl shadow-card flex items-center justify-center">[Card]</div>
          </div>
        </div>
        {/* Team/Leadership */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[color:#FFD700]">Our Team & Leadership</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {/* Team grid placeholder */}
            <div className="bg-white rounded-xl border shadow-card h-32 flex items-center justify-center">[Lucky Loonkishu Nakola]</div>
            <div className="bg-blue-50 rounded-xl border shadow-card h-32 flex items-center justify-center">[Member]</div>
            <div className="bg-blue-50 rounded-xl border shadow-card h-32 flex items-center justify-center">[Member]</div>
            <div className="bg-blue-50 rounded-xl border shadow-card h-32 flex items-center justify-center">[Member]</div>
          </div>
        </div>
        {/* Why Choose Us */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[color:#FFD700]">Why Choose Us</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border text-center shadow-card">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Feature</th>
                  <th className="py-2 px-4 border-b">Nakola</th>
                  <th className="py-2 px-4 border-b">Competitor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">Local Insight</td>
                  <td className="text-green-600 font-bold">✓</td>
                  <td>✗</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">AI Focus</td>
                  <td className="text-green-600 font-bold">✓</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Custom Solutions</td>
                  <td className="text-green-600 font-bold">✓</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Awards */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-[color:#FFD700]">Awards & Certifications</h2>
          <div className="bg-blue-50 rounded-xl h-20 flex items-center justify-center">[Awards carousel placeholder]</div>
        </div>
      </div>
    </section>
  );
}
