import React from "react";
import Reveal from "../components/Reveal.jsx";

export default function About() {
  return (
    <section className="section" style={{borderTop:"none"}}>
      <Reveal>
        <h1 className="h1">About</h1>
        <p className="p">
          Renovations by Michael focuses on clean execution, clear communication, and finish work that looks right and lasts.
          You should feel confident letting a crew into your home — that trust is earned.
        </p>
        <span className="badge">Serving: Delaware • Coastal Maryland • South Jersey (NJ)</span>
      </Reveal>

      <div className="tileGrid3" style={{marginTop:14}}>
        {[
          { t: "Communication first", p: "Clear scope, honest timeline, steady updates — no guessing." },
          { t: "Clean job sites", p: "Respectful crew. Protect surfaces. Keep spaces tidy." },
          { t: "Finish work matters", p: "Trim, alignment, sealing, edges — the details that read ‘premium.’" }
        ].map((x, i) => (
          <Reveal key={x.t} delay={0.06 * i}>
            <div className="tile">
              <h3>{x.t}</h3>
              <p className="p" style={{margin:0}}>{x.p}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
