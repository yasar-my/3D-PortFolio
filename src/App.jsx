import { useEffect, useState } from "react";
import AmbientBackground from "./components/AmbientBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PortfolioIntro from "./components/PortfolioIntro";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setShowIntro(false);
      return undefined;
    }

    const timer = window.setTimeout(() => setShowIntro(false), 4600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Skills />
        <Projects />
        <Resume />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      {showIntro && <PortfolioIntro onComplete={() => setShowIntro(false)} />}
    </>
  );
}
