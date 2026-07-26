import { useParams, useNavigate } from "react-router-dom";
import { getProject } from "../data/projects";
import BettingArchitecture from "../components/BettingArchitecture";

export default function ProjectPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProject(slug);

  if (!project) {
    return (
      <main className="page flex flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="text-lg text-zinc-600">That project doesn't exist.</p>
        <button
          onClick={() => navigate("/projects")}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 font-mono text-[0.78rem] text-zinc-700"
        >
          ← Back to projects
        </button>
      </main>
    );
  }

  return (
    <main className="page flex w-full justify-center px-6 pb-32 pt-24 sm:px-10">
      <div className="w-full max-w-6xl">
        <button
          onClick={() => navigate("/projects")}
          className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 font-mono text-[0.78rem] text-zinc-700 backdrop-blur transition hover:border-black/25 hover:text-zinc-950"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          Back to projects
        </button>

        <div className="mt-12 flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-16">
          {/* details (left) */}
          <div className="w-full min-w-0 lg:flex-1">
            <p className="font-mono text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              {project.role} · {project.period}
            </p>
            <h1
              className="mt-3 text-[clamp(32px,4.2vw,50px)] font-semibold leading-[1.05] tracking-[-0.03em] text-zinc-950"
              style={{ fontFamily: "var(--display)" }}
            >
              {project.name}
            </h1>

            <p className="mt-5 text-[1.05rem] leading-[1.65] text-zinc-600">
              {project.detail}
            </p>

            {project.highlights && (
              <>
                <p className="mt-8 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  Highlights
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[0.96rem] leading-[1.5] text-zinc-700">
                      <span
                        className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: project.accent }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.split(" · ").map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 bg-white/70 px-3 py-1 font-mono text-[0.72rem] text-zinc-600"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.03]"
            >
              View on GitHub ↗
            </a>
          </div>

          {/* architecture (right) */}
          <div className="w-full min-w-0 lg:flex-1">
            {project.arch === "betting" ? (
              <BettingArchitecture />
            ) : (
              <p className="rounded-2xl border border-dashed border-black/15 bg-white/50 p-10 text-center text-sm text-zinc-500">
                Architecture diagram coming soon.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}