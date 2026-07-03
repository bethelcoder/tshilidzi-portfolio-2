import React from "react";
import { Reveal, SectionTag } from "./UI";
import * as Icons from "./Icons";
import { SKILL_GROUPS } from "../data/constants";

export default function Skills() {
  return (
    <section id="skills">
      <Reveal>
        <SectionTag>Toolkit</SectionTag>
      </Reveal>
      <Reveal>
        <div className="section-head">
          <h2>A stack built for the full data lifecycle.</h2>
          <p>
            From raw warehouse tables to boardroom slides — visualization,
            engineering, automation and delivery.
          </p>
        </div>
      </Reveal>
      <div className="skills-grid">
        {SKILL_GROUPS.map((g, i) => {
          const Icon = Icons[g.icon];
          return (
            <Reveal key={g.title} delay={i * 60}>
              <div className="skill-card">
                <div className="skill-icon">
                  <Icon />
                </div>
                <h3>{g.title}</h3>
                <div className="tag-row">
                  {g.items.map((it) => (
                    <span key={it}>{it}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
