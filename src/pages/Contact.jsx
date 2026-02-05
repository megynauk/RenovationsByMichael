import React, { useState } from "react";
import Reveal from "../components/Reveal.jsx";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61559801225031"; 
const PHONE = "+1-717-578-8397";
const EMAIL = "mike@renovationsbymichael.com";

export default function Contact() {
  const [note, setNote] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setNote("Message sent - Thank you for reaching out! We try our best to respond to all contact requests within 48 hours.");
    e.currentTarget.reset();
  }

  return (
    <section className="section" style={{ borderTop: "none", paddingTop: 8 }}>
      <Reveal>
        <h1 className="h1">Contact</h1>
        <p className="p">
          Send the basics and we’ll follow up as soon as possible!
        </p>
      </Reveal>

      <div className="grid3" style={{ gridTemplateColumns: "1.2fr .8fr .8fr" }}>
        <Reveal>
          <div className="card">
            <h3>Request an estimate</h3>
            <form onSubmit={onSubmit}>
              <div style={{ display: "grid", gap: 10 }}>
                <input required placeholder="Name" style={{ padding: 10, borderRadius: 2, border: "1px solid var(--line)" }} />
                <input required placeholder="Phone" style={{ padding: 10, borderRadius: 2, border: "1px solid var(--line)" }} />
                <input required type="email" placeholder="Email" style={{ padding: 10, borderRadius: 2, border: "1px solid var(--line)" }} />
                <input required placeholder="City / State" style={{ padding: 10, borderRadius: 2, border: "1px solid var(--line)" }} />
                <textarea rows={5} placeholder="Project details" style={{ padding: 10, borderRadius: 2, border: "1px solid var(--line)" }} />
                <button className="btn btnPrimary" type="submit">Send</button>
                <div className="p" style={{ margin: 0 }} aria-live="polite">{note}</div>
              </div>
            </form>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="card">
            <h3>Direct</h3>
            <div className="p">Fastest way to reach us.</div>
            <div style={{ display: "grid", gap: 10 }}>
              <a className="btn btnPrimary" href={`tel:${PHONE}`}>Call</a>
              <a className="btn btnGhost" href={`sms:${PHONE}`}>Text</a>
              <a className="btn btnGhost" href={`mailto:${EMAIL}`}>Email</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="card">
            <h3>Social</h3>
            <div className="p">Follow recent work and updates.</div>
            <a className="btn btnGhost" href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook ↗</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
