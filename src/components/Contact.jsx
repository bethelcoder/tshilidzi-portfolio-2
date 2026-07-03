import React from "react";
import { Reveal } from "./UI";
import * as Icons from "./Icons";

export default function Contact({ goTo }) {
  return (
    <section id="contact">
      <Reveal>
        <div className="contact-wrap">
          <h2>Let's build your next insight.</h2>
          <p>
            Have a data problem worth solving, a dashboard worth rebuilding, or
            a strategy worth stress-testing? I'd love to hear about it.
          </p>
          <div className="contact-actions">
            <button
              className="btn-primary"
              onClick={() => (window.location.href = "mailto:hello@example.com")}
            >
              <Icons.IconMail style={{ width: 16, height: 16 }} /> Email Me
            </button>
            <button className="btn-ghost" onClick={() => goTo("about")}>
              Back to Top
            </button>
          </div>
          <div className="social-row">
            <a href="#" aria-label="Email">
              <Icons.IconMail />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Icons.IconLink />
            </a>
            <a href="#" aria-label="GitHub">
              <Icons.IconGit />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
