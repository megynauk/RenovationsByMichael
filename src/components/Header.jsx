import { NavLink } from "react-router-dom";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61559801225031";

export default function Header() {
  return (
    <header className="topbar">
      <div className="topbarInner">
        <a className="brand" href="#/" aria-label="Home">
          <img className="brandLogo" src="images/roofline.png" alt="Renovations by Michael" />
        </a>

        <nav className="tabs" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "tab active" : "tab")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
            Services
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
          Gallery
          </NavLink>
          <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
            Testimonials
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "tab active" : "tab")}>
            Contact
          </NavLink>

        </nav>
      </div>
    </header>
  );
}
