import React from "react";
import { Reveal, SectionTag } from "./UI";

export default function About() {
  return (
    <section id="about">
      <Reveal>
        <SectionTag>About</SectionTag>
      </Reveal>
      <Reveal>
        <div className="section-head">
          <h2>I speak fluent spreadsheet, SQL, and stakeholder.</h2>
          <p>
            Seven years inside a top-tier banking group, moving from graduate
            trainee to Analytics Manager by consistently turning ambiguous
            problems into measurable outcomes.
          </p>
        </div>
      </Reveal>
      <div className="about-grid">
        <Reveal className="about-copy">
          <p>
            I work at the intersection of data engineering, business intelligence
            and stakeholder strategy — building the MIS models, dashboards and
            data products that group-level leadership rely on to make calls with
            real balance-sheet consequences.
          </p>
          <p>
            My path has run through data stewardship, automation, and
            macroeconomic research, giving me a rare end-to-end view: I can
            trace a boardroom recommendation all the way back to the raw source
            system it came from — and re-engineer the process in between.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="about-list">
            <div className="row">
              <span className="num">01</span>
              <div>
                <h4>Insight → Action</h4>
                <p>
                  Advisory-grade recommendations backed by rigorous data quality
                  practice.
                </p>
              </div>
            </div>
            <div className="row">
              <span className="num">02</span>
              <div>
                <h4>Cross-functional delivery</h4>
                <p>
                  Led PI planning and root-cause squads across Credit, Card,
                  Cash & Payments.
                </p>
              </div>
            </div>
            <div className="row">
              <span className="num">03</span>
              <div>
                <h4>Certified & credentialed</h4>
                <p>
                  Salesforce Admin & BA certified, plus a PGP in Data Science
                  from UT Austin.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
