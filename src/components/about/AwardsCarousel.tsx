
import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Award } from "lucide-react";

// Sample logos: use Award icon for now, replace with partner/award images later.
const logos = [
  { name: "Top AI Startup Kenya", img: null },
  { name: "African Tech Awards", img: null },
  { name: "Innovator of the Year", img: null },
  { name: "Tech Excellence 2026", img: null },
];

export default function AwardsCarousel() {
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, duration: 10, ease: "linear" },
    });
  }, [controls]);

  return (
    <div className="w-full overflow-x-hidden relative h-20">
      <motion.div
        ref={carouselRef}
        animate={controls}
        initial={{ x: "0%" }}
        className="flex gap-10 items-center absolute left-0 top-0 h-20"
        style={{ width: "200%", minWidth: "max-content" }}
      >
        {[...logos, ...logos].map((l, i) => (
          <div
            key={i}
            className="flex flex-col items-center min-w-[120px] justify-center"
          >
            <Award className="w-10 h-10 text-[#FFD700] mb-1" />
            <span className="text-xs text-blue-900 font-semibold">{l.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
