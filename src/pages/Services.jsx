import React from "react";
import { NavLink } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";

export default function Services() {
  const groups = [
    {
      title: "Additions & Structural",
      icon: "/images/addition.png",
      items: ["Small additions", "Framing adjustments", "Exterior integration", "Finish carpentry"]
    },
    {
      title: "Basements & Finishing",
      icon: "/images/basements.png",
      items: ["Drywall + finish", "Trim + doors", "Flooring", "Final detailing"]
    },
    {
      title: "Bathrooms",
      icon: "/images/bathroom.png",
      items: ["Refresh / remodel", "Finish work", "Fixtures + trim", "Clean edges"]
    },
    {
      title: "Windows & Doors",
      icon: "/images/windowdoor.png",
      items: ["Replacement installs", "Weatherproofing", "Trim work", "Hardware"]
    },
    {
      title: "Decks & Outdoor",
      icon: "/images/deck.png",
      items: ["Repairs/rebuilds", "Railings + steps", "Sheds", "Entry overhangs"]
    },
    {
      title: "Drywall / Flooring",
      icon: "/images/finishing.png",
      items: ["Patch & prep", "Laminate/LVP", "Transitions", "Touch-ups"]
    }
  ];

  return (
    <section className="section" style={{borderTop:"none"}}>
      <Reveal>
        <h1 className="h1">Services</h1>
        <p className="p">Organized, straightforward, and built around quality results.</p>
      </Reveal>

      <div className="tileGrid3">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={0.04 * i}>
            <div className="tile">
              <div style={{display:"flex", gap:12, alignItems:"center", marginBottom:10}}>
                <img src={g.icon} alt="" style={{width:44, height:44, objectFit:"contain"}} />
                <h3 style={{margin:0}}>{g.title}</h3>
              </div>
              <ul>
                {g.items.map(it => <li key={it}>{it}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="tile" style={{marginTop:14}}>
          <h3>Not sure what you need?</h3>
          <p className="p">Describe the problem, share a couple photos, and we’ll suggest the best path.</p>
          <NavLink className="btn btnPrimary" to="/contact">Request an Estimate</NavLink>
        </div>
      </Reveal>
    </section>
  );
}
