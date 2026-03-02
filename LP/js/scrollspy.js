// js/scrollspy.js
const links = Array.from(document.querySelectorAll(".menu a"));
const sections = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);

function setActive(id) {
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
}

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries.filter(e => e.isIntersecting);
    if (!visible.length) return;
    visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    setActive(visible[0].target.id);
  },
  { threshold: [0.25, 0.5, 0.75] }
);

sections.forEach(sec => observer.observe(sec));
