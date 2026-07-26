// Light architecture that sits on the page directly (no surrounding box).
const V = { w: 700, h: 600 };
const boxes = [
  { title: "Live Odds API", sub: "14+ variables", x: 96, y: 20, w: 200, h: 66, border: "#dcdce2" },
  { title: "Historical Events", sub: "2.7M+ records", x: 404, y: 20, w: 200, h: 66, border: "#dcdce2" },
  { title: "Feature Pipeline", sub: "clean · align · encode", x: 248, y: 116, w: 204, h: 66, border: "#dcdce2" },
  { title: "XGBoost Calibration", sub: "alignment +22%", x: 42, y: 214, w: 214, h: 68, border: "#e6b53a", glow: true },
  { title: "DQN Agent · RL", sub: "25K steps · +31% stable", x: 444, y: 214, w: 214, h: 68, border: "#9a7dff", glow: true },
  { title: "Value Estimation", sub: "+EV identification", x: 248, y: 314, w: 204, h: 66, border: "#dcdce2" },
  { title: "DeBERTa Ethics Gate", sub: "unsafe 7% → 0.3%", x: 232, y: 412, w: 236, h: 68, border: "#34c759", glow: true },
  { title: "Bet Decision", sub: "calibrated · responsible", x: 258, y: 512, w: 184, h: 64, border: "#e6b53a", glow: true },
];

function pct(v, total) {
  return `${(v / total) * 100}%`;
}

function Legend({ color, label }) {
  return (
    <span className="flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: color }} />
      {label}
    </span>
  );
}

export default function BettingArchitecture() {
  return (
    <div>
      <p className="mb-4 text-center font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-zinc-400">
        Ranking-to-Decision Pipeline
      </p>

      <div
        className="relative mx-auto w-full max-w-[640px] [container-type:inline-size]"
        style={{ aspectRatio: `${V.w} / ${V.h}` }}
      >
        <svg viewBox={`0 0 ${V.w} ${V.h}`} className="absolute inset-0 h-full w-full">
          <defs>
            <marker id="arwL" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#b6b9c0" />
            </marker>
            <marker id="arwLg" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#34c759" />
            </marker>
          </defs>
          <line x1="196" y1="86" x2="305" y2="110" stroke="#c2c5cc" strokeWidth="1.8" markerEnd="url(#arwL)" />
          <line x1="504" y1="86" x2="395" y2="110" stroke="#c2c5cc" strokeWidth="1.8" markerEnd="url(#arwL)" />
          <line x1="300" y1="182" x2="170" y2="210" stroke="#c2c5cc" strokeWidth="1.8" markerEnd="url(#arwL)" />
          <line x1="400" y1="182" x2="530" y2="210" stroke="#c2c5cc" strokeWidth="1.8" markerEnd="url(#arwL)" />
          <line x1="170" y1="282" x2="305" y2="310" stroke="#c2c5cc" strokeWidth="1.8" markerEnd="url(#arwL)" />
          <line x1="530" y1="282" x2="395" y2="310" stroke="#c2c5cc" strokeWidth="1.8" markerEnd="url(#arwL)" />
          <line x1="350" y1="380" x2="350" y2="408" stroke="#c2c5cc" strokeWidth="1.8" markerEnd="url(#arwL)" />
          <line x1="350" y1="480" x2="350" y2="508" stroke="#34c759" strokeWidth="1.8" markerEnd="url(#arwLg)" />
        </svg>

        {boxes.map((b) => (
          <div
            key={b.title}
            className="absolute flex flex-col items-center justify-center border bg-white text-center"
            style={{
              left: pct(b.x, V.w),
              top: pct(b.y, V.h),
              width: pct(b.w, V.w),
              height: pct(b.h, V.h),
              padding: "0 1.6cqw",
              borderRadius: "1.7cqw",
              borderColor: b.border,
              boxShadow: b.glow
                ? `0 0 0 1px ${b.border}, 0 6px 20px ${b.border}33`
                : "0 4px 14px rgba(20,22,30,0.06)",
            }}
          >
            <div
              className="font-semibold leading-tight text-zinc-900"
              style={{ fontFamily: "var(--display)", fontSize: "2.7cqw" }}
            >
              {b.title}
            </div>
            <div
              className="mt-1 font-mono leading-tight text-zinc-500"
              style={{ fontSize: "1.95cqw" }}
            >
              {b.sub}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-1.5 font-mono text-[0.64rem] text-zinc-500">
        <Legend color="#e6b53a" label="Calibration" />
        <Legend color="#9a7dff" label="RL agent" />
        <Legend color="#34c759" label="Ethics gate" />
        <Legend color="#c2c5cc" label="Data & flow" />
      </div>
    </div>
  );
}