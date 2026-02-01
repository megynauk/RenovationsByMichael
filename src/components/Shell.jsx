import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Shell({ children }) {
  return (
    <div className="outer">
      <a className="skip" href="#content">Skip to content</a>
      <Header />
      <div className="column">
        <div className="columnTopPad" />
        <main id="content" className="main">
          {children}
        </main>
        <div className="columnBottomPad" />
      </div>
      <Footer />
    </div>
  );
}
