import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Shell({ children }) {
  return (
    <div className="appBg">
      <a className="skip" href="#content">Skip to content</a>

      <div className="column">
        <Header />
        <main id="content" className="content">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}