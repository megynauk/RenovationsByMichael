(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when clicking a link (mobile)
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active section highlighting (IntersectionObserver)
  const links = Array.from(document.querySelectorAll(".nav-link"));
  const sections = links
    .map(l => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
  };

  const io = new IntersectionObserver((entries) => {
    // choose the most visible intersecting section
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible && visible.target && visible.target.id) setActive(visible.target.id);
  }, { threshold: [0.25, 0.5, 0.75] });

  sections.forEach(s => io.observe(s));

  // Fake form submit (so it doesn't "break" on GitHub Pages)
  const form = document.getElementById("estimateForm");
  const note = document.getElementById("formNote");
  if (form && note) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      note.textContent = "Thanks — your request is ready. Next step: connect this form to email or a form service.";
      form.reset();
    });
  }
})();
