import React from "react";
import { NavLink } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";

export default function Testimonials() {
  const quotes = [
    "“Michael and crew—our sunroom looks terrific… The shed is big enough… Joe and Meg added the final touches…”",
    "“Nice clean work, dedicated to satisfy. He's definitely the guy to call.”",
    "“Always arrives on schedule and communicates expectations and deadlines throughout the entire project.”"
  ];

  return (
    <section className="section" style={{borderTop:"none"}}>
      <Reveal>
        <h1 className="h1">Testimonials</h1>
        <p className="p">A few highlights — more can be added anytime.</p>
      </Reveal>

      <div className="tileGrid3">
        {quotes.map((q, i) => (
          <Reveal key={q} delay={0.06 * i}>
            <div className="tile">
              <p className="p" style={{margin:0, fontWeight:900}}>{q}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div style={{marginTop:14}}>
          <NavLink className="btn btnPrimary" to="/contact">Get an Estimate</NavLink>
        </div>
      </Reveal>
    </section>
  );
}
