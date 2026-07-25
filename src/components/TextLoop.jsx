import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// New word enters from BELOW and rises up; old word slides up and out the top.
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
          initial={{ y: "110%" }}      /* start below the line */
          animate={{ y: "0%" }}        /* rise into place */
          exit={{ y: "-110%" }}        /* slide up and out the top */
          transition={{ duration: 0.55, ease: [0.22, 0.9, 0.24, 1] }}
          style={{ display: "block" }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}