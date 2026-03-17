import React, { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Journel from "./pages/Journel";
import { Routes, Route } from "react-router-dom";
import FullscreenMenu from "./components/Navbar";
import Lenis from "@studio-freight/lenis";

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false, // 🔥 keep mobile fast
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <FullscreenMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journel" element={<Journel />} />
      </Routes>
    </div>
  );
};

export default App;