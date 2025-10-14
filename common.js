const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        btn.textContent = "Switch to light theme";
    } else {
        btn.textContent = "Switch to dark theme";
    }
});

const dateTimeBlock = document.getElementById("datetime");

function updateDateTime() {
    const now = new Date();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };
    dateTimeBlock.textContent = now.toLocaleString("en-US", options);
}

updateDateTime();
setInterval(updateDateTime, 1000);