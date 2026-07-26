import { motion, AnimatePresence } from "framer-motion";
import BettingArchitecture from "./BettingArchitecture";

export default function ProjectDetail({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/55 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* liquid-glass panel */}
          <motion.div
            className="relative z-10 max-h-[88vh] w-full max-w-4xl overflow-y-auto overflow-x-hidden rounded-[1.9rem] border border-white/20 p-8 text-center text-white sm:p-9"
            style={{
              background:
                "linear-gradient(160deg, rgba(46,50,64,0.72), rgba(16,18,26,0.82))",
              backdropFilter: "blur(30px) saturate(150%)",
              WebkitBackdropFilter: "blur(30px) saturate(150%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.18), 0 40px 100px rgba(0,0,0,0.55)",
            }}
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-6 top-6 grid size-9 place-items-center rounded-lg border border-white/20 bg-white/10 text-white/75 transition hover:bg-white/20 hover:text-white"
            >
              ✕
            </button>

            <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-yellow-400">
              System Architecture
            </p>
            <h2
              className="mx-auto mt-2 max-w-[85%] text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em]"
              style={{ fontFamily: "var(--display)" }}
            >
              {project.name}
            </h2>

            {project.detail && (
              <p className="mx-auto mt-4 max-w-2xl text-[0.95rem] leading-[1.55] text-white/70">
                {project.detail}
              </p>
            )}

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {project.tech.split(" · ").map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[0.72rem] text-white/75"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.arch ? (
              <BettingArchitecture />
            ) : (
              <p className="mx-auto mt-8 max-w-md rounded-2xl border border-dashed border-white/20 bg-white/[0.04] p-5 text-sm text-white/55">
                Architecture diagram coming soon.
              </p>
            )}

            <div className="mt-8 flex justify-center">
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/25"
              >
                View on GitHub ↗
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}