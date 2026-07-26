import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const projects = [
  {
    name: "Ethics-Aware Sports Betting ML System",
    role: "ML · Reinforcement Learning",
    period: "Aug to Dec 2025",
    tech: "XGBoost · DQN · DeBERTa",
    accent: "#f8d66d",
    num: "01",
    repo: "https://github.com/BettingApp-hcai/betting_edge",
  },
  {
    name: "Smart Grocery Detection & Recommendation",
    role: "Computer Vision",
    period: "Jan to May 2025",
    tech: "YOLOv5 · PyTorch · ONNX",
    accent: "#78dcca",
    num: "02",
    repo: "https://github.com/gautambalgi/SmartGrocerySystem",
  },
  {
    name: "Emotion-Aware Voice Messaging System",
    role: "NLP · Speech",
    period: "Jan to May 2025",
    tech: "GoEmotions · TTS · NLP",
    accent: "#b9a7ff",
    num: "03",
    repo: "https://github.com/gautambalgi/Emotion-Aware-Personalized-Voice-Messaging-System",
  },
  {
    name: "E-Learning Database System",
    role: "Data · BI",
    period: "Aug to Dec 2024",
    tech: "SQL · Power BI",
    accent: "#ff9d77",
    num: "04",
    repo: "https://github.com/gautambalgi/E-Learning-Database-Management-Sysytem",
  },
  {
    name: "South Carolina Energy Analysis",
    role: "Statistics · Analytics",
    period: "Aug to Dec 2024",
    tech: "R · Shiny",
    accent: "#7cc4ff",
    num: "05",
    repo: "https://github.com/gautambalgi/South-Carolina-Weather-Analysis",
  },
];

function inRange(index, length) {
  return Math.min(Math.max(0, index), Math.max(0, length - 1));
}

function GithubIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function CardHeader({ item }) {
  return (
    <div
      className="relative flex aspect-[1.7] w-full overflow-hidden rounded-[1.45rem] border border-black/[0.08]"
      style={{
        background: `radial-gradient(circle at 28% 22%, ${item.accent}, #ffffff 74%)`,
      }}
    >
      <span className="absolute left-5 top-4 font-mono text-[0.7rem] font-semibold tracking-[0.16em] text-zinc-900/70">
        {item.period}
      </span>
      <span
        className="absolute bottom-2 right-5 text-[3.2rem] font-bold leading-none tracking-[-0.04em] text-zinc-950/45"
        style={{ fontFamily: "var(--display)" }}
      >
        {item.num}
      </span>
    </div>
  );
}

export function OrbitCardStack({
  items = projects,
  className,
  cardClassName,
  defaultActiveIndex = 2,
  spread = 168,
  lift = 34,
}) {
  const reduceMotion = useReducedMotion() ?? false;
  const cards = items.length ? items : projects;
  const restingIndex = inRange(defaultActiveIndex, cards.length);
  const [activeIndex, setActiveIndex] = useState(restingIndex);
  const [open, setOpen] = useState(false);
  const stageRef = useRef(null);
  const midpoint = (cards.length - 1) / 2;

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), reduceMotion ? 0 : 350);
    return () => clearTimeout(t);
  }, [reduceMotion]);

  const layouts = useMemo(
    () =>
      cards.map((_, index) => {
        const orbit = index - midpoint;
        const stack = index - restingIndex;
        return {
          open: {
            x: orbit * spread,
            y: Math.abs(orbit) * 30 + Math.max(0, Math.abs(orbit) - 1) * 10,
            rotation: orbit * 8.5,
          },
          closed: {
            x: stack * 3,
            y: -Math.abs(stack) * 7,
            rotation: stack * 3,
          },
        };
      }),
    [cards, midpoint, restingIndex, spread]
  );

  return (
    <div
      className={cn(
        "relative flex min-h-full w-full items-center justify-center p-8",
        className
      )}
    >
      <div
        ref={stageRef}
        className="relative h-[470px] w-full max-w-[1000px]"
        onMouseLeave={() => setActiveIndex(restingIndex)}
        role="list"
        aria-label="Project card stack"
      >
        {cards.map((item, index) => {
          const position = open ? layouts[index].open : layouts[index].closed;
          const active = index === activeIndex;
          const z = open
            ? active
              ? 80
              : 50 - Math.abs(index - activeIndex)
            : 60 - Math.abs(index - restingIndex);
          const scale = open ? (active ? 1 : 0.97) : 0.95;
          const style = {
            zIndex: z,
            transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${
              position.y - (open && active ? lift : 0)
            }px)) rotate(${position.rotation}deg) scale(${scale})`,
            transitionDuration: reduceMotion ? "0ms" : "480ms",
            transitionTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
          };

          return (
            <article
              key={`${item.name}-${index}`}
              role="listitem"
              tabIndex={0}
              aria-current={active ? "true" : undefined}
              className={cn(
                "absolute left-1/2 top-1/2 w-[min(80vw,21rem)] origin-bottom cursor-pointer rounded-[1.9rem] border border-black/10 bg-white p-4 text-[#141414] shadow-[0_20px_60px_rgba(20,22,30,0.16)] outline-none",
                "transition-[transform] focus-visible:ring-2 focus-visible:ring-zinc-950/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                cardClassName
              )}
              style={style}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative">
                <CardHeader item={item} />
                <a
                  href={item.repo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Open ${item.name} on GitHub`}
                  className="group/gh absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-zinc-950 shadow-lg shadow-black/20 transition-transform hover:scale-110"
                >
                  <GithubIcon className="h-1/2 w-1/2" />
                  <span className="pointer-events-none absolute -top-10 left-1/2 origin-bottom -translate-x-1/2 scale-0 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs font-bold text-zinc-900 shadow-md transition-transform duration-200 group-hover/gh:scale-100">
                    GitHub
                  </span>
                </a>
              </div>
              <div className="px-2 pb-2 pt-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {item.role}
                </p>
                <h3
                  className="mt-2 break-words text-[1.5rem] font-semibold leading-[1.1] tracking-[-0.03em] text-zinc-950"
                  style={{ fontFamily: "var(--display)" }}
                >
                  {item.name}
                </h3>
                <p className="mt-4 text-center font-mono text-[0.82rem] tracking-[0.02em] text-zinc-500">
                  {item.tech}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}