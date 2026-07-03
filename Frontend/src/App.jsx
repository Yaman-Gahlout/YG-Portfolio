import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { PortfolioContext } from "./store/PortfolioContext";
import { useEffect, useState } from "react";

export default function App() {
  const [tab, setTab] = useState("Home");
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <PortfolioContext.Provider value={{ tab, setTab }}>
      <div className="w-full min-h-screen bg-[#050816] overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </PortfolioContext.Provider>
  );
}
