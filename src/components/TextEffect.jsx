import { motion } from "framer-motion";

// Fades in one character at a time when it mounts.
export default function TextEffect({
  text,
  className = "",
  perCharDelay = 0.045,
  startDelay = 0.15,
}) {
  const chars = Array.from(text);
  return (
    <span className={className} aria-label={text}>
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          initial={{ opacity: 0, filter: "blur(6px)", y: "0.15em" }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.45,
            delay: startDelay + i * perCharDelay,
            ease: "easeOut",
          }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}