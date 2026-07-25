import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Cycles through `items` (an array of strings), one at a time.
export default function TextLoop({ items, className = "", interval = 2200 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % items.length),
      interval
    );
    return () => clearInterval(id);
  }, [items.length, interval]);

  return (
    <span className={className} style={{ display: "inline-block" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          style={{ display: "inline-block" }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}