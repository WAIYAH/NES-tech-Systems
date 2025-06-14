
import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";

const features = [
  { feature: "Local Insight", nes: "✓", comp: "✗" },
  { feature: "AI Focus", nes: "✓", comp: "Limited" },
  { feature: "Custom Solutions", nes: "✓", comp: "No" },
  { feature: "Partnerships", nes: <Star className="inline w-4 h-4 text-[#FFD700]" />, comp: <StarHalf className="inline w-4 h-4 text-gray-400" /> },
];

export default function ComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
      viewport={{ once: true }}
      className="overflow-x-auto rounded-xl shadow-card"
    >
      <table className="min-w-full bg-white border text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Feature</th>
            <th className="py-2 px-4 border-b">Nakola</th>
            <th className="py-2 px-4 border-b">Competitor</th>
          </tr>
        </thead>
        <tbody>
          {features.map(f => (
            <tr key={f.feature}>
              <td className="py-2 px-4 border-b">{f.feature}</td>
              <td className="py-2 px-4 border-b font-bold text-green-700">{f.nes}</td>
              <td className="py-2 px-4 border-b">{f.comp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
