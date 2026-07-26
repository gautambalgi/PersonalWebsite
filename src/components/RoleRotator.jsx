import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Engineer",
  "Data Analyst",
  "Business Analyst",
  "Software Developer",
];

export default function RoleRotator({ interval = 2200 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      interval
    );
    return () => clearInterval(id);
  }, [interval]);

  return (
    <div className="relative mt-6 flex h-12 items-center justify-center overflow-visible">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute flex items-center gap-2.5"
          style={{ fontFamily: "var(--display)" }}
        >
          <span className="h-2 w-2 rounded-full bg-zinc-400" />
          <span className="text-[clamp(15px,2.4vw,22px)] font-medium tracking-[-0.01em] text-zinc-400">
            {roles[index]}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}