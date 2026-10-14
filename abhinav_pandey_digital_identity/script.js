// Lightweight interactions only. The page opens directly without a loading screen.
document.documentElement.classList.add("js-enabled");

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Reveal content as it enters the viewport, with a graceful fallback.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        activeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// If JavaScript is available, reveal elements immediately visible on the first screen.
window.addEventListener("load", () => {
  const firstScreen = document.querySelectorAll(".hero .reveal");
  firstScreen.forEach((item) => item.classList.add("is-visible"));
}, { once: true });
