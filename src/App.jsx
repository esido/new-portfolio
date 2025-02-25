import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./routes/home/Home";
import About from "./routes/about/About";
import Skills from "./routes/skills/Skills";
import Projects from "./routes/projects/Projects";
import Preloader from "./components/Preloader/Preloader";

function App() {
  return (
    <>
      <Preloader />
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
