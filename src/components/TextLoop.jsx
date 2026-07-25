import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Words roll UP: the new word rises from below while the old one slides up and out.
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
    <span className={`textloop ${className}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ display: "block" }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}