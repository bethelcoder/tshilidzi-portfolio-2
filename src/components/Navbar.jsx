import React, { useState, useEffect } from "react";
import * as Icons from "./Icons";
import { NAV } from "../data/constants";

export default function Navbar({ goTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleGoTo = (id) => {
    setMenuOpen(false);
    goTo(id);
  };

  return (
    <>
      <div className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-pill">
          <div className="nav-logo">
            <Icons.IconSpark className="dot" /> T.Mphadzha
          </div>
          <div className="nav-links">
            {NAV.map((n) => (
              <button key={n} onClick={() => handleGoTo(n.toLowerCase())}>
                {n}
              </button>
            ))}
          </div>
          <button className="nav-cta" onClick={() => handleGoTo("contact")}>
            Let's Talk
          </button>
          <button
            className="burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`mobile-panel ${menuOpen ? "open" : ""}`}>
        {NAV.map((n) => (
          <button key={n} onClick={() => handleGoTo(n.toLowerCase())}>
            {n}
          </button>
        ))}
      </div>
    </>
  );
}
