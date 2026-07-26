import { Routes, Route } from "react-router-dom";
import Dock from "./components/Dock";
import Social from "./components/Social";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

// Blank pages for the routes we haven't built yet.
function Page({ name }) {
  return <main className="page" data-page={name} />;
}

export default function App() {
  return (
    <>
      <Social />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Page name="about" />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Page name="experience" />} />
        <Route path="/education" element={<Page name="education" />} />
        <Route path="/contact" element={<Page name="contact" />} />
      </Routes>

      <Dock />
    </>
  );
}