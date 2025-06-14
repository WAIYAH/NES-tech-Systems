
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 160);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          aria-label="Back to Top"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          onClick={handleClick}
          className="fixed z-50 bottom-5 right-5 rounded-full bg-[color:#FFD700] hover:bg-[color:#0056b3] text-blue-900 shadow-lg p-3 group transition-all"
        >
          <ArrowUp className="w-6 h-6 group-hover:text-white transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
