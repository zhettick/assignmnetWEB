const btn = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  btn.textContent = "🌞 Switch to Day Mode";
} else {
  btn.textContent = "🌙 Switch to Night Mode";
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  btn.textContent = isDark
    ? "🌞 Switch to Day Mode"
    : "🌙 Switch to Night Mode";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scrollProgress").style.width = scrollPercent + "%";
});