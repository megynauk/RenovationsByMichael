// =========================
// Renovations by Michael
// main.js
// - back-to-top button
// - mobile nav toggle + close outside
// - active nav based on current page
// =========================

(function () {
    // Back to top button
    const toTop = document.querySelector(".to-top");
    if (toTop) {
      const onScroll = () => {
        if (window.scrollY > 500) toTop.classList.add("show");
        else toTop.classList.remove("show");
      };
  
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
  
      toTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  
    // Mobile nav toggle
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav");
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("mobile-open");
        const expanded = nav.classList.contains("mobile-open");
        toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
      });
  
      // Close when clicking outside
      document.addEventListener("click", (e) => {
        if (!nav.classList.contains("mobile-open")) return;
  
        const clickedInside = nav.contains(e.target) || toggle.contains(e.target);
        if (!clickedInside) {
          nav.classList.remove("mobile-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
  
      // Close when clicking a link (mobile)
      nav.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
          if (nav.classList.contains("mobile-open")) {
            nav.classList.remove("mobile-open");
            toggle.setAttribute("aria-expanded", "false");
          }
        });
      });
    }
  
    // Active nav based on current page
    const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  
    document.querySelectorAll(".nav a[data-page]").forEach((link) => {
      const page = (link.getAttribute("data-page") || "").toLowerCase();
      if (page === current) link.setAttribute("aria-current", "page");
    });
  })();
  