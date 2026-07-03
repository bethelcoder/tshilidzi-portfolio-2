import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as Icons from "./Icons";
import { STATS } from "../data/constants";

export default function Hero({ goTo }) {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <div className="hero-grid">
        <div>
          <div className="eyebrow">
            <span className="pulse" />
            Data Science • Business Intelligence
          </div>
          <h1>
            Hi, I am <span className="em">Tshilidzi Mphadzha</span>
          </h1>
          <p className="lede">
            I'm a Data Science, Business Intelligence &amp; Analytics professional
            who bridges the gap between data and business objectives — uncovering
            opportunity, optimizing performance, and helping leadership make
            informed decisions with confidence.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => goTo("projects")}>
              View My Work{" "}
              <Icons.IconArrowUpRight style={{ width: 16, height: 16 }} />
            </button>
            <button className="btn-ghost" onClick={() => goTo("contact")}>
              Get In Touch
            </button>
          </div>
          <div className="hero-stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="orb" />
          <div className="photo-frame">
            <div className="photo-frame-inner">
              <img src="/assets/tshilidzi_profile.jpeg" alt="Portrait" />
            </div>
          </div>
          <div className="float-chip c1">
            <Icons.IconCert /> 2× Salesforce Certified
          </div>
          <div className="float-chip c2">
            <Icons.IconDatabase /> Oracle · Teradata · SAS
          </div>
        </div>
      </div>
    </div>
  );
}
