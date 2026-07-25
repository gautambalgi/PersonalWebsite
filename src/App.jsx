import { motion } from "framer-motion";
import Dock from "./components/Dock";
import ShaderBackground from "./components/ShaderBackground";
// ⬇ FUTURE COMPONENTS: import them here, e.g.
// import CoolCard from "./components/CoolCard";

// Your projects live here — edit freely, add or remove entries.
const projects = [
  {
    n: "01",
    title: "RAG Document Chatbot",
    desc: "A retrieval-augmented chatbot that answers domain questions from a private document base — grounding GPT-4 responses in vectorized context to cut hallucinations.",
    tags: ["LangChain", "ChromaDB", "GPT-4", "OpenAI Embeddings", "Python"],
    link: "#",
  },
  {
    n: "02",
    title: "BERT vs RoBERTa on Psychological Text",
    desc: "Graduate research fine-tuning and comparing transformer models on psychological-text classification — benchmarking accuracy and calibration.",
    tags: ["PyTorch", "BERT", "RoBERTa", "Hugging Face", "NLP"],
    link: "#",
  },
  {
    n: "03",
    title: "Ethics-Aware Multi-Agent System",
    desc: "A multi-agent decision system for sports-betting scenarios with an ethics-aware layer that flags and constrains risky wagers before they're acted on.",
    tags: ["Multi-Agent", "LLMs", "Decision Systems", "Python"],
    link: "#",
  },
  {
    n: "04",
    title: "Real-Time Object Detection",
    desc: "Trained a lightweight YOLOv8n model for real-time detection, tuning the speed/accuracy trade-off to run on constrained hardware.",
    tags: ["YOLOv8", "Ultralytics", "OpenCV", "Computer Vision"],
    link: "#",
  },
  {
    n: "05",
    title: "SC Residential Energy Analysis",
    desc: "Modeled residential energy use across South Carolina with a Random Forest and shipped an interactive Shiny dashboard.",
    tags: ["R", "Random Forest", "Shiny", "Data Viz"],
    link: "#",
  },
];

const stack = {
  Languages: ["Python", "R", "SQL"],
  "ML / Deep Learning": ["PyTorch", "scikit-learn", "Transformers", "YOLOv8"],
  "LLMs / RAG": ["LangChain", "ChromaDB", "GPT-4", "Embeddings", "Multi-Agent"],
  "Data & Tools": ["Pandas", "NumPy", "Shiny", "Git", "Jupyter"],
};

// small helper: fade-up on scroll
const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <>
      {/* animated background sits behind everything */}
      <ShaderBackground />
      <div className="vignette" />

      <header className="nav">
        <a href="#top" className="mark">GK<span>.</span></a>
        <nav>
          <a href="#about">about</a>
          <a href="#work">work</a>
          <a href="#stack">stack</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <main id="top">
        {/* ===== HERO ===== */}
        <section className="hero wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="eyebrow"
          >
            // applied data scientist — syracuse, ny
          </motion.div>
          <h1>
            <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.9, 0.2, 1] }} className="line">Gautam</motion.span>
            <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.9, 0.2, 1] }} className="line">Krishna</motion.span>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="sub">
            I build <b>AI systems</b> that turn messy data into decisions — <b>RAG pipelines</b>, language models, and computer vision that actually ship.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="cta-row">
            <a href="#work" className="btn primary">View work</a>
            <a href="#contact" className="btn ghost"><span className="dot" />Get in touch</a>
          </motion.div>
        </section>

        {/* ⬇ PASTE A NEW COMPONENT HERE (between hero and about) */}

        {/* ===== ABOUT ===== */}
        <section className="band wrap" id="about">
          <Reveal><div className="sec-head"><span className="eyebrow">// about</span><h2>The short version</h2></div></Reveal>
          <div className="about-grid">
            <div>
              <Reveal><p>I'm a data scientist focused on <b>applied AI</b> — the part where a model stops being a notebook and starts being something people actually use.</p></Reveal>
              <Reveal delay={0.1}><p className="lede">Recently finished my <b>M.S. in Applied Data Science at Syracuse University</b>; before that I was a data analyst at <b>LTI Mindtree</b>. I like problems that mix real data, language models, and a clear result.</p></Reveal>
            </div>
            <Reveal delay={0.15}>
              <div className="facts">
                <div className="fact"><div className="k">focus</div><div className="v">AI/ML · RAG · NLP · CV</div></div>
                <div className="fact"><div className="k">based in</div><div className="v">Syracuse, NY</div></div>
                <div className="fact"><div className="k">open to</div><div className="v">Data Analyst · AI/ML · Applied DS</div></div>
                <div className="fact"><div className="k">status</div><div className="v avail">Available now →</div></div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== WORK ===== */}
        <section className="band wrap" id="work">
          <Reveal><div className="sec-head"><span className="eyebrow">// selected work</span><h2>Things I've built</h2></div></Reveal>
          <div className="projects">
            {projects.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.05}>
                <a className="project" href={p.link}>
                  <div className="idx">{p.n}</div>
                  <div className="body">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="tags">{p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                  </div>
                  <div className="go">view ↗</div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===== STACK ===== */}
        <section className="band wrap" id="stack">
          <Reveal><div className="sec-head"><span className="eyebrow">// toolkit</span><h2>What I work with</h2></div></Reveal>
          <div className="stack">
            {Object.entries(stack).map(([k, items], i) => (
              <Reveal key={k} delay={i * 0.05}>
                <div className="col">
                  <div className="k">{k}</div>
                  <div className="chips">{items.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section className="band wrap" id="contact">
          <Reveal><div className="sec-head"><span className="eyebrow">// contact</span><h2>Let's talk</h2></div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="contact-big">Let's build<br />something<br /><a href="mailto:you@email.com">together →</a></h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="links">
              <a href="mailto:you@email.com"><span className="d" />you@email.com</a>
              <a href="#">LinkedIn ↗</a>
              <a href="#">GitHub ↗</a>
              <a href="#">Resume ↗</a>
            </div>
          </Reveal>
        </section>

        <footer>
          <span>© {new Date().getFullYear()} Gautam Krishna</span>
          <span>Syracuse, NY</span>
          <span>React · Vite · shadergradient</span>
        </footer>
      </main>

      <Dock />
    </>
  );
}