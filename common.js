const btn = document.getElementById("theme-toggle");
const btnStatus = document.getElementById('status');

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        btnStatus.textContent = 'You are in dark mode';
    } else {
        btnStatus.textContent = 'You are in light mode';
    }
});

const clock = document.getElementById("clock");
const greeting = document.getElementById("greeting");


const user = {
    name: "Diana",
    greet: function(message) {
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