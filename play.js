const button = document.getElementById("show-instructions");
const sound = document.getElementById("clicking-sound")
const instructions = document.getElementById("instructions");
const cat = document.getElementById("cat");
const scoreDisplay = document.getElementById("score");
var score = 0;

button.addEventListener("click", () => {
  sound.currentTime = 0;
  sound.play();
  const isHidden = instructions.style.display === "none";
  instructions.style.display = isHidden ? "block" : "none";
  button.textContent = isHidden ? "Hide Instructions" : "Show Instructions";
});

cat.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
});

setInterval(() => {
  const playArea = document.getElementById("play-area");
  const areaWidth = playArea.clientWidth;
  const areaHeight = playArea.clientHeight;
  const catWidth = cat.clientWidth;
  const catHeight = cat.clientHeight;
  const maxX = areaWidth - catWidth;
  const maxY = areaHeight - catHeight;

  cat.style.left = Math.random() * maxX + "px";
  cat.style.top = Math.random() * maxY + "px";
}, 1500);

const stars = document.querySelectorAll('.star');
let saved = +localStorage.getItem('rating') || 0;

function updateStars(r) {
  stars.forEach((s, i) => s.style.color = i < r ? 'orange' : 'pink');
}

updateStars(saved);

stars.forEach((star, i) => {
  star.addEventListener('click', () => {
    saved = i + 1;
    localStorage.setItem('rating', saved);
    updateStars(saved);
  });
});