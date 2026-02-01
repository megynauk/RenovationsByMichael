import React from "react";
import { NavLink } from "react-router-dom";

const FACEBOOK_URL = "https://facebook.com/"; // TODO replace with real page

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footerInner">
        <div>
          <div style={{display:"flex", gap:12, alignItems:"center"}}>
            <img src="/images/typo.png" alt="Renovations by Michael" style={{height:26, width:"auto"}} />
          </div>
          <div className="small" style={{marginTop:10}}>
            Serving Delaware • Coastal Maryland • South Jersey (NJ)
          </div>
          <div className="small" style={{marginTop:6}}>© {year} Renovations by Michael</div>
        </div>

        <nav className="footerNav" aria-label="Footer">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/testimonials">Testimonials</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook ↗</a>
        </nav>
      </div>
    </footer>
  );
}
