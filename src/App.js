import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="text-slate-400 bg-slate-950 body-font">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}