import React from "react";
import { Reveal, SectionTag } from "./UI";
import * as Icons from "./Icons";
import { PROJECTS } from "../data/constants";

export default function Projects() {
  return (
    <section id="projects">
      <Reveal>
        <SectionTag>Selected Work</SectionTag>
      </Reveal>
      <Reveal>
        <div className="section-head">
          <h2>Projects that moved the metrics that mattered.</h2>
          <p>A handful of the initiatives behind those numbers up top.</p>
        </div>
      </Reveal>
      <div className="proj-grid">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 70}>
            <div className="proj-card">
              <div className="proj-top">
                <div className="tools">{p.tools}</div>
                <div className="proj-arrow">
                  <Icons.IconArrowUpRight />
                </div>
              </div>
              <div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
