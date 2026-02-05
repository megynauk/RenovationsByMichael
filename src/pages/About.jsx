import React from "react";
import { NavLink } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";

export default function Home() {
  return (
    <>
      <div className="StarsRed" aria-hidden="true">★ ★ ★</div>

      <section className="section" style={{ borderTop: "none", paddingTop: 14 }}>

        <div className="hero">
          <Reveal delay={0.06}>
            <div className="heroMedia">
              <img src="images/bay2.png" alt="Featured work" />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="heroSide">
              <h2 className="h2">What you get</h2>

              <div style={{ display: "grid", gap: 10 }}>
                {[
                  ["Clear scope + timeline", "You will always know what's happening and when."],
                  ["Clean work habits", "Respectful crew, tidy site, and details finished properly."],
                  ["Finish work that lasts", "A focus on the details that complete your space."]
                ].map(([t, d]) => (
                  <div className="card" key={t} style={{ background: "#fff" }}>
                    <h3 style={{ margin: "0 0 6px", fontSize: 15 }}>{t}</h3>
                    <div className="p" style={{ margin: 0 }}>{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
     <section className="section" style={{ borderTop: "none", paddingTop: 8 }}>

      <Reveal>
        <h1 className="h1">About Renovations by Michael</h1>
      </Reveal>

      <div className="aboutGrid">

        {/* Overview Card */}
        <Reveal>
          <div className="card aboutCard">
            <h2 className="cardTitle">Built on experience. Known for dependable work.</h2>
            <p className="cardMeta">
              With over 20 years of experience in the home improvement and construction
              industry, Michael has built a reputation for projects that are thoughtfully
              planned, professionally executed, and finished with attention to the
              details that truly matter.
            </p>
          </div>
        </Reveal>

        {/* Story Card */}
        <Reveal delay={0.05}>
          <div className="card aboutCard">
            <h2 className="cardTitle">Michael’s Background</h2>
            <p className="cardMeta">
              Michael’s career has been built through hands-on experience across
              multiple trades, giving him a practical understanding of how homes
              function structurally, visually, and long-term.
            </p>
            <p className="cardMeta">
              As a veteran, he brings a disciplined, detail-driven approach to every
              project. Organization, communication, and follow-through guide how
              every job is managed from start to finish.
            </p>
          </div>
        </Reveal>

        {/* Philosophy Card */}
        <Reveal delay={0.1}>
          <div className="card aboutCard">
            <h2 className="cardTitle">Our Work Philosophy</h2>

            <ul className="aboutList">
              <li>
                <strong>Quality Without Shortcuts</strong> — Work is completed with
                durability and long-term performance in mind.
              </li>

              <li>
                <strong>Communication That Keeps Projects Moving</strong> — Clear
                expectations and consistent updates keep homeowners confident.
              </li>

              <li>
                <strong>Respect for Your Home</strong> — Clean job sites and
                professional conduct are standard.
              </li>

              <li>
                <strong>Family-Focused Business</strong> — Relationships matter and
                referrals are our highest compliment.
              </li>
            </ul>
          </div>
        </Reveal>

        {/* CTA Card */}
        <Reveal delay={0.15}>
          <div className="card aboutCard aboutCta">
            <h2 className="cardTitle">Planning a project?</h2>
            <p className="cardMeta">
              Whether the project is a small upgrade or a full renovation, our goal
              is to deliver quality craftsmanship, honest guidance, and results you
              can trust long after completion.
            </p>
                <br></br>
            <NavLink className="btn btnPrimary" to="/contact">
              Request an Estimate
            </NavLink>
          </div>
        </Reveal>

      </div>
    </section>
    </>
  );
}
