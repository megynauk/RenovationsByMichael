import React, { useState } from "react";
import Reveal from "../components/Reveal.jsx";

const FACEBOOK_URL = "https://facebook.com/"; // TODO replace
const PHONE = "+1-000-000-0000";              // TODO replace
const EMAIL = "you@example.com";              // TODO replace

export default function Contact() {
  const [note, setNote] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setNote("Saved — connect this form to email/service when ready. For now, use the direct buttons.");
    e.currentTarget.reset();
  }

  return (
    <section className="section" style={{borderTop:"none"}}>
      <Reveal>
        <h1 className="h1">Contact</h1>
        <p className="p">
          Send the basics and we’ll follow up. If you have photos, we’ll ask for them — it speeds up estimating.
        </p>
        <span className="badge">Serving: DE • Coastal MD • South Jersey (NJ)</span>
      </Reveal>

      <div className="tileGrid3" style={{gridTemplateColumns:"1.25fr .75fr .75fr"}}>
        <Reveal>
          <div className="tile">
            <h3>Request an estimate</h3>
            <form onSubmit={onSubmit}>
              <div className="field">
                <div className="label">Name</div>
                <input className="input" required />
              </div>
              <div className="field">
                <div className="label">Phone</div>
                <input className="input" required />
              </div>
              <div className="field">
                <div className="label">Email</div>
                <input className="input" type="email" required />
              </div>
              <div className="field">
                <div className="label">City / State</div>
                <input className="input" required placeholder="e.g., Georgetown, DE" />
              </div>
              <div className="field">
                <div className="label">Project details</div>
                <textarea className="textarea" rows={5} placeholder="What do you need done? Any timeline goals?" />
              </div>

              <button className="btn btnPrimary" type="submit">Send</button>
              <div className="p" style={{margin:"10px 0 0"}} aria-live="polite">{note}</div>
            </form>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="tile">
            <h3>Direct</h3>
            <p className="p">Fastest way to reach us.</p>
            <div style={{display:"grid", gap:10}}>
              <a className="btn btnPrimary" href={`tel:${PHONE}`}>Call</a>
              <a className="btn btnGhost" href={`sms:${PHONE}`}>Text</a>
              <a className="btn btnGhost" href={`mailto:${EMAIL}`}>Email</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="tile">
            <h3>Social</h3>
            <p className="p">Follow recent work and updates.</p>
            <a className="btn btnGhost" href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook ↗</a>
            <div style={{marginTop:12}}>
              <img src="/images/flooring.png" alt="" style={{width:60, height:60, objectFit:"contain", opacity:.9}} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
