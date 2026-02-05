import React, { useEffect, useState } from "react";
import Reveal from "../components/Reveal.jsx";

export default function Gallery() {
  const projects = [
    { img: "/images/baywindow.png" },
    { img: "/images/deck.png" },
    { img: "/images/house.png" },
    { img: "/images/windowdoor.png" },
    { img: "/images/door.png" },
    { img: "/images/add1.png" },
    { img: "/images/shed.jpg" },
  ];

  const total = projects.length;
  const [index, setIndex] = useState(0);

  // keep index valid if you add/remove images
  useEffect(() => {
    if (!total) return;
    if (index > total - 1) setIndex(0);
  }, [total, index]);

  const prev = () => {
    if (!total) return;
    setIndex((n) => (n - 1 + total) % total);
  };

  const next = () => {
    if (!total) return;
    setIndex((n) => (n + 1) % total);
  };

  // keyboard arrows (safe)
  useEffect(() => {
    if (!total) return;

    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  const active = total ? projects[index] : null;

  return (
    <section className="section" style={{ borderTop: "none", paddingTop: 8 }}>
      <Reveal>
        <h1 className="h1">Gallery</h1>
        <p className="p">A few examples of recent work.</p>
      </Reveal>

      <Reveal delay={0.05}>
        {!total ? (
          <div className="card" style={{ marginTop: 12 }}>
            <h3 style={{ margin: 0 }}>No photos yet</h3>
            <p className="p" style={{ marginTop: 8 }}>
              Add images to <code>/public/images</code> and update the gallery array.
            </p>
          </div>
        ) : (
          <>
            <div className="slider">
              <button type="button" className="sliderArrow" onClick={prev} aria-label="Previous photo">
                ‹
              </button>

              <div className="sliderFrame">
                <img className="sliderImg" src={active.img} alt="Project photo" />
              </div>

              <button type="button" className="sliderArrow" onClick={next} aria-label="Next photo">
                ›
              </button>
            </div>

            <div className="filmstrip" aria-label="Photo thumbnails">
              {projects.map((p, i) => (
                <button
                  key={p.img}
                  type="button"
                  className={i === index ? "thumb active" : "thumb"}
                  onClick={() => setIndex(i)}
                  aria-label={`View photo ${i + 1}`}
                >
                  <img src={p.img} alt="" />
                </button>
              ))}
            </div>
          </>
        )}
      </Reveal>
    </section>
  );
}
