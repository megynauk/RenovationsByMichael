import React from "react";
import { Routes, Route } from "react-router-dom";

import Shell from "./Shell.jsx";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Services from "../pages/Services.jsx";
import Testimonials from "../pages/Testimonials.jsx";
import Contact from "../pages/Contact.jsx";
import Gallery from "../pages/Gallery.jsx";

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Shell>
  );
}




