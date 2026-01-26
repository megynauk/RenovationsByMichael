(function () {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav-toggle");

  // Mobile nav
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
    });

    // Close menu on link click
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  // Active link highlight
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // Contact form mailto helper (static-safe)
  const form = document.querySelector("[data-mailto-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("[name='name']")?.value?.trim() || "";
      const email = form.querySelector("[name='email']")?.value?.trim() || "";
      const message = form.querySelector("[name='message']")?.value?.trim() || "";

      // TODO: put the real email here:
      const to = "renovationsbymichael@example.com";

      const subject = encodeURIComponent(`Website Inquiry - ${name || "New Lead"}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
      );

      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
})();
