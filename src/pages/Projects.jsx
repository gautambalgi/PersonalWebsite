import { OrbitCardStack } from "../components/OrbitCardStack";

export default function Projects() {
  return (
    <main className="page flex flex-col items-center justify-center px-4 pb-24 pt-24">
      <h1
        className="text-center uppercase text-zinc-950"
        style={{
          fontFamily: "var(--display)",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          fontSize: "clamp(34px, 6vw, 62px)",
          lineHeight: 0.5,
        }}
      >
        Projects
      </h1>
      <div className="mt-12 flex justify-center">
        <OrbitCardStack className="min-h-0" />
      </div>
    </main>
  );
}