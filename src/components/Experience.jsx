import React from "react";
import { Reveal, SectionTag } from "./UI";
import { EXPERIENCE } from "../data/constants";

export default function Experience() {
  return (
    <section id="experience">
      <Reveal>
        <SectionTag>Experience</SectionTag>
      </Reveal>
      <Reveal>
        <div className="section-head">
          <h2>Seven years, one bank, six roles of compounding scope.</h2>
          <p>
            A steady climb from graduate trainee to Analytics Manager — each
            role adding a new layer of ownership.
          </p>
        </div>
      </Reveal>
      <div className="timeline">
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.role} delay={i * 60}>
            <div className="tl-item">
              <div className="tl-dot" />
              <div className="tl-card">
                <div className="tl-top">
                  <h3>{e.role}</h3>
                  <span className="tl-period">{e.period}</span>
                </div>
                <div className="tl-org">{e.org}</div>
                <div className="tl-place">{e.place}</div>
                <p className="tl-blurb">{e.blurb}</p>
                <ul className="tl-points">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
