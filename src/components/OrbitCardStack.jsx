import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef, useState } from "react";

const projects = [
  {
    name: "Ethics-Aware Sports Betting ML System",
    role: "ML · Reinforcement Learning",
    period: "Aug–Dec 2025",
    description:
      "End-to-end pipeline over 2.7M+ events — XGBoost calibration, a DQN behavior module (+22% alignment, +31% stability), and a DeBERTa ethics classifier that cut unsafe actions from 7% to 0.3%.",
    tech: "XGBoost · DQN · LangChain · DeBERTa",
    accent: "#f8d66d",
    num: "01",
    repo: "https://github.com/BettingApp-hcai/betting_edge",
  },
  {
    name: "Smart Grocery Detection & Recommendation",
    role: "Computer Vision",
    period: "Jan–May 2025",
    description:
      "YOLOv5 object detection trained on 10K+ images across 30+ categories (86% mAP), cutting search time 40% and latency 32%, paired with a top-5 recommendation engine.",
    tech: "YOLOv5 · PyTorch · ONNX",
    accent: "#78dcca",
    num: "02",
    repo: "https://github.com/gautambalgi/SmartGrocerySystem",
  },
  {
    name: "Emotion-Aware Voice Messaging System",
    role: "NLP · Speech",
    period: "Jan–May 2025",
    description:
      "A 27-class GoEmotions classifier driving expressive speech, benchmarking three TTS models across five emotional conditions for a 22% emotion-to-speech alignment lift.",
    tech: "NLP · GoEmotions · TTS",
    accent: "#b9a7ff",
    num: "03",
    repo: "https://github.com/gautambalgi/Emotion-Aware-Personalized-Voice-Messaging-System",
  },
  {
    name: "E-Learning Database Management System",
    role: "Data & BI",
    period: "Aug–Dec 2024",
    description:
      "A normalized relational database (8+ tables, 500+ records) with SQL reporting and interactive Power BI dashboards, reducing manual reporting effort by 30%.",
    tech: "SQL · Azure Data Studio · Power BI",
    accent: "#ff9d77",
    num: "04",
    repo: "https://github.com/gautambalgi/E-Learning-Database-Management-Sysytem",
  },
  {
    name: "South Carolina Energy Demand Analysis",
    role: "Statistics · Analytics",
    period: "Aug–Dec 2024",
    description:
      "Analyzed 5,000+ households, narrowing 140+ variables to 42 significant drivers via regression and hypothesis testing, with Shiny dashboards for peak-demand and blackout-risk scenarios.",
    tech: "R · Statistics · Shiny",
    accent: "#7cc4ff",
    num: "05",
    repo: "https://github.com/gautambalgi/South-Carolina-Weather-Analysis",
  },
];

function inRange(index, length) {
  return Math.min(Math.max(0, index), Math.max(0, length - 1));
}

function CardHeader({ item }) {
  return (
    <div
      className="relative flex aspect-[1.7] w-full overflow-hidden rounded-[1.45rem] border border-black/[0.08]"
      style={{
        background: `radial-gradient(circle at 28% 22%, ${item.accent}, #eeeae2 72%)`,
      }}
    >
      <span className="absolute left-5 top-4 font-mono text-[0.68rem] font-semibold tracking-[0.18em] text-zinc-900/70">
        {item.period}
      </span>
      <span
        className="absolute bottom-1 right-5 text-[3.4rem] font-bold leading-none tracking-[-0.04em] text-zinc-950/80"
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
            x: stack * 10,
            y: Math.abs(stack) * 5,
            rotation: stack * 2.8,
          },
        };
      }),
    [cards, midpoint, restingIndex, spread]
  );

  const activate = (index) => {
    const next = inRange(index, cards.length);
    setOpen(true);
    setActiveIndex(next);
  };
  const close = () => {
    setOpen(false);
    setActiveIndex(restingIndex);
  };

  return (
    <div
      className={cn(
        "relative flex min-h-full w-full items-center justify-center overflow-hidden p-8",
        className
      )}
    >
      <div
        ref={stageRef}
        className="relative h-[470px] w-full max-w-[980px]"
        onMouseLeave={close}
        role="list"
        aria-label="Project card stack"
      >
        {cards.map((item, index) => {
          const position = open ? layouts[index].open : layouts[index].closed;
          const active = index === activeIndex;
          const style = {
            zIndex: active ? 80 : 50 - Math.abs(index - activeIndex),
            transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${
              position.y - (open && active ? lift : 0)
            }px)) rotate(${position.rotation}deg) scale(${open ? 0.985 : 0.97})`,
            transitionDuration: reduceMotion ? "0ms" : "420ms",
          };

          return (
            <article
              key={`${item.name}-${index}`}
              role="listitem"
              tabIndex={0}
              aria-current={active ? "true" : undefined}
              className={cn(
                "absolute left-1/2 top-1/2 w-[min(80vw,21rem)] origin-bottom cursor-pointer rounded-[1.9rem] border border-black/10 bg-[#f1eee7] p-4 text-[#141414] outline-none",
                "transition-[transform] ease-[cubic-bezier(.2,.8,.2,1)] focus-visible:ring-2 focus-visible:ring-zinc-950/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                cardClassName
              )}
              style={style}
              onMouseEnter={() => activate(index)}
              onFocus={() => activate(index)}
              onClick={() => activate(index)}
            >
              <div className="relative">
                <CardHeader item={item} />
                <a
                  href={item.repo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Open ${item.name} on GitHub`}
                  className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-zinc-950 text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
                >
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </div>
              <div className="px-2 pb-2 pt-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {item.role}
                </p>
                <h3
                  className="mt-2 text-[1.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-zinc-950"
                  style={{ fontFamily: "var(--display)" }}
                >
                  {item.name}
                </h3>
                <p className="mt-3 max-w-[19rem] text-[0.9rem] font-medium leading-[1.4] tracking-[-0.01em] text-zinc-700">
                  {item.description}
                </p>
                <p className="mt-3 font-mono text-[0.7rem] text-zinc-500">
                  {item.tech}
                </p>
                <a
                  href={item.repo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-4 flex items-center gap-1.5 border-t border-black/10 pt-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-zinc-950"
                >
                  View on GitHub <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}