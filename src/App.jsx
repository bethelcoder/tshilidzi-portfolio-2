import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio-root">
      <div className="bg-noise" />

      <Navbar goTo={goTo} />

      <Hero goTo={goTo} />

      <About />

      <Experience />

      <Skills />

      <Projects />

      <Education />

      <Contact goTo={goTo} />

      <Footer />
    </div>
  );
}