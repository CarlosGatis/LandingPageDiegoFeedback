const track = document.getElementById("carouselTrack");
const btnPrev = document.querySelector(".carousel-btn--left");
const btnNext = document.querySelector(".carousel-btn--right");

let position = 0;

function getMetrics() {
  const items = track.querySelectorAll("img");
  if (!items.length) return null;

  const style = getComputedStyle(track);
  const gap = parseFloat(style.gap) || 0;

  const itemWidth = items[0].getBoundingClientRect().width;
  const viewportWidth = track.parentElement.getBoundingClientRect().width;

  const visibleItems = Math.max(
    1,
    Math.floor((viewportWidth + gap) / (itemWidth + gap))
  );

  const maxPosition = Math.max(0, items.length - visibleItems);

  return { itemWidth, gap, maxPosition };
}

function updateCarousel() {
  const m = getMetrics();
  if (!m) return;
  const step = m.itemWidth + m.gap;
  track.style.transform = `translateX(-${position * step}px)`;
}

btnNext.addEventListener("click", () => {
  const m = getMetrics();
  if (!m) return;
  position = Math.min(m.maxPosition, position + 1);
  updateCarousel();
});

btnPrev.addEventListener("click", () => {
  position = Math.max(0, position - 1);
  updateCarousel();
});

window.addEventListener("resize", () => {
  const m = getMetrics();
  if (!m) return;
  position = Math.min(m.maxPosition, position);
  updateCarousel();
});

updateCarousel();
