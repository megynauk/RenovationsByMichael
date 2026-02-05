import React from "react";
import { NavLink } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";

export default function Testimonials() {
  const quotes = [
    {
      text:
        "Michael and crew—our sunroom looks terrific. Communication was clear the entire time and the finish work really shows.",
      meta: "Sunroom + shed project"
    },
    {
      text:
        "We’ve worked with Mike and his team several times. Always on schedule, clean job sites, and no surprises.",
      meta: "Repeat customer"
    },
    {
      text:
        "The shed is solid, the trim is perfect, and Joe and Meg added the final touches that made it feel finished.",
      meta: "Shed build + finishing"
    }
  ];

  return (
    <section className="section" style={{ borderTop: "none", paddingTop: 8 }}>
      <Reveal>
        <h1 className="h1">Testimonials</h1>
        <p className="p">
          Real feedback from real projects — no stock quotes, no fluff.
        </p>
      </Reveal>

      <div className="grid3">
        {quotes.map(({ text, meta }, i) => (
          <Reveal key={i} delay={0.06 * i}>
            <div className="card">
              <div
                style={{
                  fontWeight: 900,
                  fontSize: 15,
                  lineHeight: 1.6,
                  marginBottom: 10
                }}
              >
                “{text}”
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  fontWeight: 800
                }}
              >
                — {meta}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="card" style={{ marginTop: 16 }}>
          <h3>Have a project in mind?</h3>
          <p className="p">
            Tell us what you’re working on and we’ll walk you through the next steps.
          </p>
          <NavLink className="btn btnPrimary" to="/contact">
            Request an Estimate
          </NavLink>
        </div>
      </Reveal>
    </section>
  );
}
