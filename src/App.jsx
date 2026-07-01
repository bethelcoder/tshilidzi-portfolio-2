import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { gsap } from "gsap";
import * as Icons from "./components/Icons";
import { Reveal, SectionTag } from "./components/UI";
import { NAV, STATS, SKILL_GROUPS, EXPERIENCE, PROJECTS, EDUCATION } from "./data/constants";

/* ============================================================
   PAGE
   ============================================================ */
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio-root">

      <div className="bg-noise" />

      {/* NAV */}
      <div className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-pill">
          <div className="nav-logo"><Icons.IconSpark className="dot" /> T.Mphadzha</div>
          <div className="nav-links">
            {NAV.map((n) => (
              <button key={n} onClick={() => goTo(n.toLowerCase())}>{n}</button>
            ))}
          </div>
          <button className="nav-cta" onClick={() => goTo("contact")}>Let's Talk</button>
          <button className="burger" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          </button>
        </div>
      </div>
      <div className={`mobile-panel ${menuOpen ? "open" : ""}`}>
        {NAV.map((n) => (
          <button key={n} onClick={() => goTo(n.toLowerCase())}>{n}</button>
        ))}
      </div>

      {/* HERO */}
      <div className="hero" ref={heroRef}>
        {/* <Icons.IconSpark className="spark s1" />
        <Icons.IconSpark className="spark s2" />
        <Icons.IconSpark className="spark s3" /> */}
        <div className="hero-grid">
          <div>
            <div className="eyebrow"><span className="pulse" />Data Science • Business Intelligence</div>
            <h1>Hi, I am <span className="em">Tshilidzi Mphadzha</span></h1>
            <p className="lede">
              I'm a Data Science, Business Intelligence &amp; Analytics professional who bridges the gap
              between data and business objectives — uncovering opportunity, optimizing performance,
              and helping leadership make informed decisions with confidence.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => goTo("projects")}>
                View My Work <Icons.IconArrowUpRight style={{ width: 16, height: 16 }} />
              </button>
              <button className="btn-ghost" onClick={() => goTo("contact")}>Get In Touch</button>
            </div>
            <div className="hero-stats">
              {STATS.map((s) => (
                <div className="stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb" />
            <div className="photo-frame">
              {/* <Icons.IconSpark className="photo-spark" /> */}
              {/* <div className="photo-ring" /> */}
              <div className="photo-frame-inner">
                <img src="/assets/tshilidzi_profile.jpeg" alt="Portrait" />
              </div>
            </div>
            <div className="float-chip c1"><Icons.IconCert /> 2× Salesforce Certified</div>
            <div className="float-chip c2"><Icons.IconDatabase /> Oracle · Teradata · SAS</div>
          </div>
          {/* <div className="hero-visual">
            <div className="orb" />
            <div className="glass-card">
              <div className="gc-head">
                <span>Quarterly Insight Uplift</span>
                <span className="gc-badge">+80% TAT</span>
              </div>
              <div className="bars">
                {[38, 60, 44, 78, 92, 66, 100].map((h, i) => (
                  <div key={i} className="bar" style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }} />
                ))}
              </div>
              <div className="glass-mini-row">
                <div><b>35%</b><span>Uptake Lift</span></div>
                <div><b>13%</b><span>Churn Drop</span></div>
                <div><b>500+</b><span>Trained</span></div>
              </div>
            </div>
            <div className="float-chip c1"><IconCert /> 2× Salesforce Certified</div>
            <div className="float-chip c2"><IconDatabase /> Oracle · Teradata · SAS</div>
          </div> */}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <Reveal>
          <SectionTag>About</SectionTag>
        </Reveal>
        <Reveal>
          <div className="section-head">
            <h2>I speak fluent spreadsheet, SQL, and stakeholder.</h2>
            <p>Seven years inside a top-tier banking group, moving from graduate trainee to Analytics Manager by consistently turning ambiguous problems into measurable outcomes.</p>
          </div>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-copy">
            <p>
              I work at the intersection of data engineering, business intelligence and stakeholder strategy —
              building the MIS models, dashboards and data products that group-level leadership rely on to make
              calls with real balance-sheet consequences.
            </p>
            <p>
              My path has run through data stewardship, automation, and macroeconomic research, giving me a rare
              end-to-end view: I can trace a boardroom recommendation all the way back to the raw source system
              it came from — and re-engineer the process in between.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="about-list">
              <div className="row"><span className="num">01</span><div><h4>Insight → Action</h4><p>Advisory-grade recommendations backed by rigorous data quality practice.</p></div></div>
              <div className="row"><span className="num">02</span><div><h4>Cross-functional delivery</h4><p>Led PI planning and root-cause squads across Credit, Card, Cash & Payments.</p></div></div>
              <div className="row"><span className="num">03</span><div><h4>Certified & credentialed</h4><p>Salesforce Admin & BA certified, plus a PGP in Data Science from UT Austin.</p></div></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <Reveal><SectionTag>Experience</SectionTag></Reveal>
        <Reveal>
          <div className="section-head">
            <h2>Seven years, one bank, six roles of compounding scope.</h2>
            <p>A steady climb from graduate trainee to Analytics Manager — each role adding a new layer of ownership.</p>
          </div>
        </Reveal>
        <div className="timeline">
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.role} delay={i * 60}>
              <div className="tl-item">
                <div className="tl-dot" />
                <div className="tl-card">
                  <div className="tl-top"><h3>{e.role}</h3><span className="tl-period">{e.period}</span></div>
                  <div className="tl-org">{e.org}</div>
                  <div className="tl-place">{e.place}</div>
                  <p className="tl-blurb">{e.blurb}</p>
                  <ul className="tl-points">
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <Reveal><SectionTag>Toolkit</SectionTag></Reveal>
        <Reveal>
          <div className="section-head">
            <h2>A stack built for the full data lifecycle.</h2>
            <p>From raw warehouse tables to boardroom slides — visualization, engineering, automation and delivery.</p>
          </div>
        </Reveal>
        <div className="skills-grid">
          {SKILL_GROUPS.map((g, i) => {
            const Icon = Icons[g.icon];
            return (
              <Reveal key={g.title} delay={i * 60}>
                <div className="skill-card">
                  <div className="skill-icon"><Icon /></div>
                  <h3>{g.title}</h3>
                  <div className="tag-row">{g.items.map((it) => <span key={it}>{it}</span>)}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <Reveal><SectionTag>Selected Work</SectionTag></Reveal>
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
                  <div className="proj-arrow"><Icons.IconArrowUpRight /></div>
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

      {/* EDUCATION */}
      <section id="education">
        <Reveal><SectionTag>Education & Certifications</SectionTag></Reveal>
        <Reveal>
          <div className="section-head">
            <h2>Formally trained, continuously certified.</h2>
          </div>
        </Reveal>
        <div className="edu-grid">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.title} delay={i * 60}>
              <div className="edu-card">
                <div className="edu-icon"><Icons.IconCert /></div>
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

      {/* CONTACT */}
      <section id="contact">
        <Reveal>
          <div className="contact-wrap">
            <h2>Let's build your next insight.</h2>
            <p>Have a data problem worth solving, a dashboard worth rebuilding, or a strategy worth stress-testing? I'd love to hear about it.</p>
            <div className="contact-actions">
              <button className="btn-primary" onClick={() => (window.location.href = "mailto:hello@example.com")}>
                <Icons.IconMail style={{ width: 16, height: 16 }} /> Email Me
              </button>
              <button className="btn-ghost" onClick={() => goTo("about")}>Back to Top</button>
            </div>
            <div className="social-row">
              <a href="#" aria-label="Email"><Icons.IconMail /></a>
              <a href="#" aria-label="LinkedIn"><Icons.IconLink /></a>
              <a href="#" aria-label="GitHub"><Icons.IconGit /></a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer>© {new Date().getFullYear()} — Crafted with data, coffee, and a lot of Power Query.</footer>
    </div>
  );
}