import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Shell from "../layout/Shell.jsx";
import PageTransition from "../components/PageTransition.jsx";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Services from "../pages/Services.jsx";
import Testimonials from "../pages/Testimonials.jsx";
import Contact from "../pages/Contact.jsx";

export default function App() {
  const location = useLocation();

  return (
    <Shell>
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>
    </Shell>
  );
}
