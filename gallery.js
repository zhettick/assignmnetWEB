const items = document.querySelectorAll('.carousel-indicators button');
let currentIndex = 0;
items[currentIndex].click();

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].click();
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    items[currentIndex].click();
  }
});