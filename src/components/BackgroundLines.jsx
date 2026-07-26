import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const colors = [
  "#46A5CA", "#8C2F2F", "#4FAE4D", "#D6590C", "#811010",
  "#247AFB", "#A534A0", "#A8A438", "#D6590C", "#46A5CA",
  "#8C2F2F", "#247AFB", "#A534A0", "#4FAE4D", "#D6590C",
  "#811010", "#46A5CA", "#A8A438",
];

// fan of curved lines rising from the bottom-centre out to the top edge
const paths = Array.from({ length: 18 }, (_, i) => {
  const n = 18;
  const t = i / (n - 1);
  const targetX = Math.round(-160 + t * 1760);
  const wave = Math.sin(t * Math.PI * 4) * 46;
  const c1x = Math.round(720 + (targetX - 720) * 0.3 + wave);
  const c2x = Math.round(720 + (targetX - 720) * 0.68 - wave);
  return `M720 900 C ${c1x} 640 ${c2x} 300 ${targetX} 40`;
});

// stable per-line timing (computed once)
const conf = paths.map((_, i) => ({
  color: colors[i % colors.length],
  delay: Math.floor(Math.random() * 10),
  duration: 8 + Math.random() * 6,
  repeatDelay: 2 + Math.random() * 8,
}));

const pathVariants = {
  initial: { strokeDashoffset: 800, strokeDasharray: "50 800" },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: "20 800",
    opacity: [0, 1, 1, 0],
  },
};

export function BackgroundLines({ children, className }) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke={conf[i].color}
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
            variants={pathVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: conf[i].duration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              delay: conf[i].delay,
              repeatDelay: conf[i].repeatDelay,
            }}
          />
        ))}
      </svg>
      {children}
    </div>
  );
}

export default BackgroundLines;