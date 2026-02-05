import React from "react";
import { NavLink } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";

export default function Services() {
  const groups = [
    ["Decks & Outdoor", "images/deck.png", ["Deck rebuilds & repairs", "Railings + steps", "Sheds & structures", "Entry overhangs"]],
    ["Windows & Doors", "images/windowdoor.png", ["Replacement installs", "Weatherproofing", "Trim work", "Hardware + finishing"]],
    ["Interiors", "images/finishing.png", ["Drywall + prep", "Flooring (laminate/LVP)", "Bathrooms", "Finished basements"]],
    ["Additions", "images/addition.png", ["Small additions", "Structural upgrades", "Integration + trim", "Finish carpentry"]],
    ["Structural Repairs & Restoration", "images/repair.png", ["Water damage", "Rot replacement","Framing Repairs","Rebuilds"]],
    ["Renovation Planning + Support", "images/planning.png", ["Project prep & planning", "Demo work","Build readiness","Renovation advisory"]]
  ];

  return (
    <section className="section" style={{ borderTop: "none", paddingTop: 8 }}>
      <Reveal>
        <h1 className="h1">Services</h1>
        <p className="p">Organized, straightforward, and built around quality results.</p>
      </Reveal>

      <div className="grid3">
        {groups.map(([t, icon, items], i) => (
          <Reveal key={t} delay={0.05 * i}>
            <div className="card">
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
                <img src={icon} alt="" style={{ width: 44, height: 44, objectFit: "cover", borderRadius: 2 }} />
                <h3 style={{ margin: 0 }}>{t}</h3>
              </div>
              <ul>
                {items.map(it => <li key={it}>{it}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="card" style={{ marginTop: 12 }}>
          <h3>Not sure what you need?</h3>
          <p className="p">Describe the problem and include a couple photos — we’ll suggest the best path.</p>
          <NavLink className="btn btnPrimary" to="/contact">Request an Estimate</NavLink>
        </div>
      </Reveal>
    </section>
  );
}
