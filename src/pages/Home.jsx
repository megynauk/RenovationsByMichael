import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>

      <section className="section" style={{ borderTop: "none", paddingTop: 8 }}>
  <div
    className="heroBanner"
    role="img"
    aria-label="Renovations by Michael featured project"
  >
    <div className="heroBannerInner">
      <div className="heroStars" aria-hidden="true">★ ★ ★</div>

      <h1 className="heroTitle">Veteran &amp; family owned.</h1>
      <p className="heroSub">
        With over 20 years of experience in the home improvement industry.
      </p>

      <div className="heroCtas">
        <NavLink className="btn btnPrimary" to="/contact">Request an Estimate</NavLink>
        <NavLink className="btn btnSecond heroGhost" to="/services">View Services</NavLink>
      </div>
    </div>
  </div>
</section>

      <section className="section">
        <h2 className="h2">Services</h2>

        <div className="grid3">
          {[
            ["Additions", "/images/addition.png", "Full build and finishing for small additions and structural upgrades."],
            ["Basements", "/images/basements.png", "Clean, detail oriented finish work to make your space feel just right."],
            ["Bathrooms", "/images/decks.png", "Entertainment spaces built with structural integrity and curb appeal in mind."]
          ].map(([t, img, d]) => (
            <div className="card" key={t}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <img src={img} alt="" style={{ width: 42, height: 42, objectFit: "contain" }} />
                <div>
                  <h3 style={{ margin: "0 0 4px" }}>{t}</h3>
                  <p className="p" style={{ margin: 0 }}>{d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 12 }}>
          <NavLink className="btn btnPrimary" to="/services">All services →</NavLink>
        </div>
      </section>
    </>
  );
}
