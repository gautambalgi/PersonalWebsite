import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef, useState } from "react";

const projects = [
  {
    name: "Ethics-Aware Sports Betting ML System",
    role: "ML · Reinforcement Learning",
    period: "Aug to Dec 2025",
    description:
      "An end to end pipeline over 2.7M+ events that cut unsafe actions from 7% to 0.3%.",
    tech: "XGBoost · DQN · DeBERTa",
    accent: "#f8d66d",
    num: "01",
    repo: "https://github.com/BettingApp-hcai/betting_edge",
  },
  {
    name: "Smart Grocery Detection & Recommendation",
    role: "Computer Vision",
    period: "Jan to May 2025",
    description:
      "YOLOv5 detection across 30+ categories at 86% mAP, plus a top 5 recommender.",
    tech: "YOLOv5 · PyTorch · ONNX",
    accent: "#78dcca",
    num: "02",
    repo: "https://github.com/gautambalgi/SmartGrocerySystem",
  },
  {
    name: "Emotion-Aware Voice Messaging System",
    role: "NLP · Speech",
    period: "Jan to May 2025",
    description:
      "A 27 class emotion classifier driving expressive, emotion matched speech.",
    tech: "NLP · GoEmotions · TTS",
    accent: "#b9a7ff",
    num: "03",
    repo: "https://github.com/gautambalgi/Emotion-Aware-Personalized-Voice-Messaging-System",
  },
  {
    name: "E-Learning Database System",
    role: "Data · BI",
    period: "Aug to Dec 2024",
    description:
      "A normalized SQL database with Power BI dashboards that cut reporting effort by 30%.",
    tech: "SQL · Azure · Power BI",
    accent: "#ff9d77",
    num: "04",
    repo: "https://github.com/gautambalgi/E-Learning-Database-Management-Sysytem",
  },
  {
    name: "South Carolina Energy Analysis",
    role: "Statistics · Analytics",
    period: "Aug to Dec 2024",
    description:
      "Narrowed 140+ variables to 42 key drivers with interactive Shiny dashboards.",
    tech: "R · Statistics · Shiny",
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

function GithubDot({ repo, name }) {
  return (
    <a
      href={repo}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      aria-label={`Open ${name} on GitHub`}
      className="group/gh absolute right-4 top-4 z-20 grid size-12 place-items-center rounded-full bg-zinc-950 shadow-lg shadow-black/25 transition-transform duration-300 hover:scale-110"
    >
      <GithubIcon className="h-1/2 w-1/2" />
      <span className="pointer-events-none absolute -top-10 left-1/2 origin-bottom -translate-x-1/2 scale-0 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs font-bold text-zinc-900 shadow-md transition-transform duration-200 group-hover/gh:scale-100">
        GitHub
      </span>
    </a>
  );
}

export function OrbitCardStack({
  items = projects,
  className,
  defaultActiveIndex = 2,
  spread = 238,
  lift = 44,
}) {
  const reduceMotion = useReducedMotion() ?? false;
  const cards = items.length ? items : projects;
  const restingIndex = inRange(defaultActiveIndex, cards.length);
  const [activeIndex, setActiveIndex] = useState(restingIndex);
  const stageRef = useRef(null);
  const midpoint = (cards.length - 1) / 2;

  const layouts = useMemo(
    () =>
      cards.map((_, index) => {
        const orbit = index - midpoint;
        return { x: orbit * spread, y: Math.abs(orbit) * 14, rotation: orbit * 5 };
      }),
    [cards, midpoint, spread]
  );

  const dur = reduceMotion ? "0ms" : "540ms";

  return (
    <div className={cn("relative flex w-full items-center justify-center p-4", className)}>
      <div
        ref={stageRef}
        className="relative h-[600px] w-full max-w-[1240px]"
        onMouseLeave={() => setActiveIndex(restingIndex)}
        role="list"
        aria-label="Project card stack"
      >
        {cards.map((item, index) => {
          const pos = layouts[index];
          const active = index === activeIndex;
          const style = {
            zIndex: active ? 90 : 50 - Math.abs(index - activeIndex),
            transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${
              pos.y - (active ? lift : 0)
            }px)) rotate(${active ? 0 : pos.rotation}deg) scale(${active ? 1.03 : 1})`,
            transitionProperty: "transform",
            transitionDuration: dur,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "transform",
          };

          return (
            <article
              key={`${item.name}-${index}`}
              role="listitem"
              tabIndex={0}
              aria-current={active ? "true" : undefined}
              className="absolute left-1/2 top-1/2 w-[min(88vw,23rem)] origin-bottom cursor-pointer rounded-[1.9rem] border border-black/10 bg-[#ece5d6] p-3 text-[#141414] shadow-[0_24px_70px_rgba(20,16,10,0.18)] outline-none focus-visible:ring-2 focus-visible:ring-zinc-950/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              style={style}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <GithubDot repo={item.repo} name={item.name} />

              {/* colored tile — holds the project name, always visible */}
              <div
                className="relative flex aspect-[1.22] w-full flex-col justify-between overflow-hidden rounded-[1.45rem] border border-black/10 p-5"
                style={{
                  background: `radial-gradient(circle at 30% 18%, ${item.accent}, #efe9de 78%)`,
                }}
              >
                {/* bottom scrim so dark text always reads on the accent */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-white/60 to-transparent" />

                <span className="relative font-mono text-[0.7rem] font-semibold tracking-[0.16em] text-zinc-900/70">
                  {item.period}
                </span>

                <div className="relative flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-zinc-700">
                      {item.role}
                    </p>
                    <h3
                      className="mt-1.5 text-[1.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-zinc-950"
                      style={{ fontFamily: "var(--display)" }}
                    >
                      {item.name}
                    </h3>
                  </div>
                  <span
                    className="shrink-0 text-[1.6rem] font-bold leading-none tracking-[-0.04em] text-zinc-950/45"
                    style={{ fontFamily: "var(--display)" }}
                  >
                    {item.num}
                  </span>
                </div>
              </div>

              {/* description + tech — revealed on the active card */}
              <div
                className="grid transition-all ease-out"
                style={{
                  gridTemplateRows: active ? "1fr" : "0fr",
                  opacity: active ? 1 : 0,
                  transitionDuration: dur,
                }}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="px-3 pb-1 pt-4">
                    <p className="text-[0.95rem] font-medium leading-[1.45] tracking-[-0.01em] text-zinc-700">
                      {item.description}
                    </p>
                    <p className="mt-4 border-t border-black/10 pt-3 font-mono text-[0.72rem] text-zinc-500">
                      {item.tech}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}