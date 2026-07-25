import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
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

function CardHeader({ item }) {
  return (
    <div
      className="relative flex aspect-[1.9] w-full overflow-hidden rounded-[1.4rem] border border-black/[0.08]"
      style={{
        background: `radial-gradient(circle at 28% 22%, ${item.accent}, #eeeae2 74%)`,
      }}
    >
      <span className="absolute left-5 top-4 font-mono text-[0.7rem] font-semibold tracking-[0.16em] text-zinc-900/70">
        {item.period}
      </span>
      <span
        className="absolute bottom-1 right-5 text-[3.6rem] font-bold leading-none tracking-[-0.04em] text-zinc-950/80"
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
  spread = 205,
  lift = 40,
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
            y: Math.abs(orbit) * 16,
            rotation: orbit * 5,
          },
          closed: {
            x: stack * 12,
            y: Math.abs(stack) * 5,
            rotation: stack * 2.6,
          },
        };
      }),
    [cards, midpoint, restingIndex, spread]
  );

  const activate = (index) => {
    setOpen(true);
    setActiveIndex(inRange(index, cards.length));
  };
  const close = () => {
    setOpen(false);
    setActiveIndex(restingIndex);
  };

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center p-4",
        className
      )}
    >
      <div
        ref={stageRef}
        className="relative h-[560px] w-full max-w-[1120px]"
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
            }px)) rotate(${position.rotation}deg) scale(${open ? 1 : 0.97})`,
            transitionDuration: reduceMotion ? "0ms" : "440ms",
          };

          return (
            <article
              key={`${item.name}-${index}`}
              role="listitem"
              tabIndex={0}
              aria-current={active ? "true" : undefined}
              className={cn(
                "absolute left-1/2 top-1/2 w-[min(88vw,24rem)] origin-bottom cursor-pointer rounded-[2rem] border border-black/10 bg-[#f3f0e9] p-5 text-[#141414] shadow-[0_20px_60px_rgba(20,16,10,0.12)] outline-none",
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
                  className="absolute right-3 top-3 grid size-12 place-items-center rounded-full bg-zinc-950 text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
                >
                  <ArrowUpRight className="size-5" aria-hidden />
                </a>
              </div>
              <div className="px-1 pb-1 pt-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  {item.role}
                </p>
                <h3
                  className="mt-2 text-[1.75rem] font-semibold leading-[1.06] tracking-[-0.03em] text-zinc-950"
                  style={{ fontFamily: "var(--display)" }}
                >
                  {item.name}
                </h3>
                <p className="mt-3 text-[0.95rem] font-medium leading-[1.45] tracking-[-0.01em] text-zinc-700">
                  {item.description}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4">
                  <span className="font-mono text-[0.72rem] text-zinc-500">
                    {item.tech}
                  </span>
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 font-mono text-[0.72rem] font-bold uppercase tracking-[0.12em] text-zinc-900 hover:text-zinc-950"
                  >
                    GitHub <ArrowUpRight className="size-3.5" aria-hidden />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}