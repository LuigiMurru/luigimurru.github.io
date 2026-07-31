// ===================================================================
// Luigi Murru — personal site behaviour
// 1) IT/EN language toggle (persisted in localStorage)
// 2) scroll-reveal for sections
// ===================================================================

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------------- language toggle ---------------- */
(function () {
  const toggle = document.getElementById("langToggle");
  const itLabel = toggle.querySelector(".lang-it");
  const enLabel = toggle.querySelector(".lang-en");

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-it]").forEach((el) => {
      const value = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-it");
      if (value != null) el.innerHTML = value;
    });
    itLabel.classList.toggle("is-active", lang === "it");
    enLabel.classList.toggle("is-active", lang === "en");
    try { localStorage.setItem("lm-lang", lang); } catch (e) {}
  }

  let saved = "it";
  try { saved = localStorage.getItem("lm-lang") || "it"; } catch (e) {}
  applyLang(saved);

  toggle.addEventListener("click", () => {
    const next = document.documentElement.lang === "en" ? "it" : "en";
    applyLang(next);
  });
})();

/* ---------------- scroll reveal ---------------- */
(function () {
  const targets = document.querySelectorAll(
    ".section > *, .tl-item, .project-card, .cert-card"
  );
  targets.forEach((el) => el.classList.add("reveal"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach((el) => io.observe(el));
})();

