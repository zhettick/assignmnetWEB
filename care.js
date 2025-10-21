// Greeting based on time of day (using switch)
document.getElementById("greetBtn").addEventListener("click", greetByTime);

function greetByTime() {
  const hour = new Date().getHours();
  let greeting;

  switch (true) {
    case (hour < 12): 
      greeting = "☀️ Good morning, kitty lover! Your cat just woke up too!";
      break;
    case (hour < 18):
      greeting = "😺 Good afternoon! Time to play with your kitty!";
      break;
    default:
      greeting = "🌙 Good evening! Your kitty is getting sleepy...";
  }

  // Покажем приветствие на странице
  const status = document.getElementById("status");
  status.textContent = greeting;
  status.style.color = "#ff6b6b";
  status.style.fontWeight = "bold";
}

// ===  FAQ Toggle ===
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");

  questions.forEach(question => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      
      
      if (answer.style.display === "block") {
        answer.style.display = "none";
        question.style.color = "#333"; 
      } else {
        answer.style.display = "block";
        question.style.color = "#ff6b6b"; 
      }
    });
  });
});

