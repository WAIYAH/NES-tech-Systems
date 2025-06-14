
import { motion } from "framer-motion";
import React, { useState } from "react";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  accentColor?: string;
}

export default function FlipCard({ front, back, accentColor="#FFD700"}: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective-[1000px] w-full h-48 cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      tabIndex={0}
      aria-label="Card"
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={`absolute w-full h-full bg-white rounded-xl shadow-card flex items-center justify-center backface-hidden border-2`}
          style={{ borderColor: accentColor }}
        >
          <div className="text-center px-4">{front}</div>
        </div>
        <div
          className={`absolute w-full h-full bg-[color:#0056b3] text-white rounded-xl shadow-card flex items-center justify-center rotate-y-180 backface-hidden border-2`}
          style={{ borderColor: accentColor }}
        >
          <div className="text-center px-4">{back}</div>
        </div>
      </motion.div>
    </div>
  );
}
