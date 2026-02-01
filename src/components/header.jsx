import React from "react";
import Header from "./header.jsx";
import Footer from "./Footer.jsx";

export default function Shell({ children }) {
  return (
    <div className="outer">
      <a className="skip" href="#content">Skip to content</a>
      <Header />
      <div className="column">
        <div className="columnTopPad" />
        <main id="content" className="main">
        </main>
          {children}
        <div className="columnBottomPad" />
      </div>
      <Footer />
    </div>
  );
}
