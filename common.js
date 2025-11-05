const btn = document.getElementById("theme-toggle");
const statusText = document.getElementById("status");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  statusText.textContent = "You are in dark mode";
} else {
  statusText.textContent = "You are in light mode";
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  statusText.textContent = isDark
    ? "You are in dark mode"
    : "You are in light mode";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});

const clock = document.getElementById("clock");
const greeting = document.getElementById("greeting");


const user = {
    name: "Diana",
    greet: function (message) {
        return `${message}, ${this.name}!`;
    }
};

function updateDateTime() {
    const now = new Date();
    const hour = now.getHours();
    let greetingText = "";
    switch (true) {
        case hour < 6 || hour >= 23:
            greetingText = "Good night"
            break;
        case hour < 12:
            greetingText = "Good morning"
            break;
        case hour < 18:
            greetingText = "Good afternoon"
            break;
        default:
            greetingText = "Good evening"
    }

    greeting.textContent = user.greet(greetingText);

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };
    clock.textContent = now.toLocaleString("en-US", options);
}

updateDateTime();
setInterval(updateDateTime, 1000);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scrollProgress").style.width = scrollPercent + "%";
});