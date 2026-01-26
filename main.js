(function () {
  // Back to top
  const toTop = document.querySelector(".to-top");
  if (toTop) {
    const onScroll = () => {
      if (window.scrollY > 500) toTop.classList.add("show");
      else toTop.classList.remove("show");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("mobile-open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("mobile-open") ? "true" : "false");
    });

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("mobile-open")) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      nav.classList.remove("mobile-open");
      toggle.setAttribute("aria-expanded", "false");
    });

    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("mobile-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active nav
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a[data-page]").forEach((a) => {
    if ((a.getAttribute("data-page") || "").toLowerCase() === current) {
      a.setAttribute("aria-current", "page");
    }
  });
})();
