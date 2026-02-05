const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61559801225031"; // TODO replace

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footerInner">
        <img className="footerLogo" src="images/typo.png" alt="Renovations by Michael" />
        <div className="footerMeta">
          <div>Delaware • Pennsylvania • New Jersey</div>
            <button className="btn btnPrimary" type="submit"><a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Follow us on Facebook ↗</a></button>
          <div>© {year} • Renovations by Michael</div>
        </div>
      </div>
    </footer>
  );
}
