import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal.jsx";

export default function Home() {
  return (
    <>
      <section className="section" style={{borderTop:"none"}}>
        <Reveal>
          <h1 className="h1">High-quality home improvement — without the chaos.</h1>
          <p className="p">
            Clear scopes. Clean job sites. Strong finish work. One team from start to finish.
          </p>

          <div style={{display:"flex", gap:10, flexWrap:"wrap", margin:"10px 0 14px"}}>
            <motion.div whileHover={{ y: -1 }} whileTap={{ y: 0 }}>
              <NavLink className="btn btnPrimary" to="/contact">Request an Estimate</NavLink>
            </motion.div>
            <NavLink className="btn btnGhost" to="/services">View Services</NavLink>
            <span className="badge">Serving: DE • Coastal MD • South Jersey (NJ)</span>
          </div>
        </Reveal>

        <div className="hero" style={{marginTop:12}}>
          <Reveal delay={0.05}>
            <div className="media">
              <img src="/images/house.png" alt="Renovation work example" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel">
              <h2 className="h2">What you get</h2>
              <p className="p" style={{marginBottom:10}}>
                Professional execution with communication you can count on.
              </p>

              <div className="tileGrid3" style={{gridTemplateColumns:"1fr", gap:10}}>
                <div className="tile">
                  <h3>Clear scope + timeline</h3>
                  <p className="p" style={{margin:0}}>No vague “we’ll see.” You know what’s happening and when.</p>
                </div>
                <div className="tile">
                  <h3>Clean work habits</h3>
                  <p className="p" style={{margin:0}}>Respectful crew, tidy site, and details finished properly.</p>
                </div>
                <div className="tile">
                  <h3>Finish work that lasts</h3>
                  <p className="p" style={{margin:0}}>Trim, sealing, alignment — the stuff that makes it look premium.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <h2 className="h2">Services</h2>
          <p className="p">A few of our most requested project types.</p>
        </Reveal>

        <div className="tileGrid3">
          {[
            { t: "Additions", img: "/images/addition.png", p: "Small additions and structural upgrades with clean integration." },
            { t: "Basements", img: "/images/basements.png", p: "Finishing work that feels intentional, not like an afterthought." },
            { t: "Bathrooms", img: "/images/bathroom.png", p: "Refreshes and rebuilds with crisp lines and proper detailing." }
          ].map((s, i) => (
            <Reveal key={s.t} delay={0.06 * i}>
              <div className="tile">
                <div style={{display:"flex", gap:12, alignItems:"center"}}>
                  <img src={s.img} alt="" style={{width:44, height:44, objectFit:"contain"}} />
                  <div>
                    <h3 style={{margin:"0 0 4px"}}>{s.t}</h3>
                    <p className="p" style={{margin:0}}>{s.p}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{marginTop:14}}>
          <NavLink className="btn btnPrimary" to="/services">All services →</NavLink>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <h2 className="h2">Recent Work</h2>
          <p className="p">A few examples — these can be reused across pages.</p>
        </Reveal>

        <div className="gallery">
          {[
            { img: "/images/baywindow.png", cap: "Bay window project" },
            { img: "/images/deck.png", cap: "Deck work" },
            { img: "/images/windowdoor.png", cap: "Window / door replacement" }
          ].map((g, i) => (
            <Reveal key={g.cap} delay={0.06 * i}>
              <div className="cardPhoto">
                <img src={g.img} alt={g.cap} />
                <div className="cardCap">{g.cap}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <h2 className="h2">Process</h2>
          <p className="p">Simple, professional, predictable.</p>
        </Reveal>

        <div className="tileGrid3">
          {[
            { t: "1) Quick call / message", p: "Tell us what you need and where you're located." },
            { t: "2) Estimate + scope", p: "Clear scope and realistic timeline. Options if budget matters." },
            { t: "3) Build + finish", p: "Consistent communication and clean finish work until it's done right." }
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

      <section className="section">
        <Reveal>
          <h2 className="h2">Testimonials</h2>
          <p className="p">Real feedback from real jobs.</p>
        </Reveal>

        <Reveal>
          <div className="tile">
            <p className="p" style={{marginBottom:10, fontWeight:900}}>
              “Michael and crew—our sunroom looks terrific… The shed is big enough… Joe and Meg added the final touches…”
            </p>
            <NavLink className="btn btnGhost" to="/testimonials">Read more →</NavLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
