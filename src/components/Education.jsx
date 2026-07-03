import React from "react";
import { Reveal, SectionTag } from "./UI";
import * as Icons from "./Icons";
import { EDUCATION } from "../data/constants";

export default function Education() {
  return (
    <section id="education">
      <Reveal>
        <SectionTag>Education & Certifications</SectionTag>
      </Reveal>
      <Reveal>
        <div className="section-head">
          <h2>Formally trained, continuously certified.</h2>
        </div>
      </Reveal>
      <div className="edu-grid">
        {EDUCATION.map((e, i) => (
          <Reveal key={e.title} delay={i * 60}>
            <div className="edu-card">
              <div className="edu-icon">
                <Icons.IconCert />
              </div>
              <div>
                <h4>{e.title}</h4>
                <div className="org">{e.org}</div>
                <div className="per">{e.period}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
