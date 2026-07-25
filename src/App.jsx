import { Routes, Route } from "react-router-dom";
import Dock from "./components/Dock";

// Each page is blank white for now.
// We'll fill these in one at a time — just add your content inside the matching <Page>.
function Page({ name }) {
  return <main className="page" data-page={name} />;
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page name="home" />} />
        <Route path="/about" element={<Page name="about" />} />
        <Route path="/projects" element={<Page name="projects" />} />
        <Route path="/experience" element={<Page name="experience" />} />
        <Route path="/education" element={<Page name="education" />} />
        <Route path="/contact" element={<Page name="contact" />} />
      </Routes>

      <Dock />
    </>
  );
}