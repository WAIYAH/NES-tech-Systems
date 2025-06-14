
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2024",
    title: "Founded",
    description: "Nakola Expert Systems is founded by Lucky Loonkishu Nakola in Nairobi, Kenya.",
  },
  {
    year: "2025",
    title: "First Product Launch",
    description: "Released first AI-powered solution, fast-tracking digital transformation in Kenya.",
  },
  {
    year: "2026",
    title: "African Expansion",
    description: "Expanded operations to serve clients across East Africa.",
  },
  {
    year: "2027",
    title: "Industry Awards",
    description: "Recognized as Kenya's leading AI innovation company.",
  },
];

export default function Timeline() {
  return (
    <div className="relative border-l-2 border-[#FFD700] pl-8 py-4">
      {timelineData.map((item, i) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.18, duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="mb-8 last:mb-0 relative"
        >
          <div className="absolute -left-5 top-1.5 w-4 h-4 bg-[#FFD700] rounded-full border-2 border-blue-900" />
          <div>
            <span className="font-bold text-blue-900">{item.year}</span>
            <span className="ml-2 font-semibold">{item.title}</span>
            <p className="text-black/70 text-sm mt-1">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
