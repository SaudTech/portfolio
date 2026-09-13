import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";
import Skills from "./Sections/Skills";
import SpeedometerNav from "./Sections/SpeedometerNav";
import { SECTIONS } from "./Sections/content";
import { useTheme } from "./Sections/useTheme";

const Home: React.FC = () => {
  const [active, setActive] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const { hash } = useLocation();

  // Section snapping is only for this page, so the case study pages scroll freely.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("snap-page");
    document.title = "Saud | Developer Portfolio";
    return () => root.classList.remove("snap-page");
  }, []);

  // Links like "/#projects" from a case study land on that section.
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  useEffect(() => {
    const update = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(SECTIONS.length - 1);
        return;
      }
      const mark = window.innerHeight * 0.4;
      let index = 0;
      SECTIONS.forEach((section, i) => {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= mark) index = i;
      });
      setActive(index);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const select = (index: number) => {
    setActive(index);
    document.getElementById(SECTIONS[index].id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-ink transition-colors duration-300">
      <SpeedometerNav active={active} onSelect={select} theme={theme} onToggleTheme={toggleTheme} />
      <main className="mx-auto max-w-[1280px]">
        <About />
        <Projects />
        <Experience />
        <Skills />
      </main>
    </div>
  );
};

export default Home;
