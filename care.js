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

function filterFAQ(searchText) {
  $(".faq .question, .faq .answer").each(function () {
    const text = $(this).text();
    if (text.toLowerCase().includes(searchText)) {
      const highlighted = text.replace(
        new RegExp(searchText, "gi"),
        match => `<mark>${match}</mark>`
      );
      $(this).html(highlighted).show();
    } else {
      $(this).html(text).hide();
    }
  });
}

$("#searchFaq").on("keyup", function () {
  filterFAQ($(this).val().toLowerCase());
});


function showNotification(message) {
  const toast = $("#notification");
  
  toast.stop(true, true); 

  toast.text(message).fadeIn(300);

  setTimeout(() => {
    toast.fadeOut(400);
  }, 1800);
}

function showKitty(action) {
  const gifs = ['eat', 'sleep', 'dance'];
  gifs.forEach(id => document.getElementById(id).style.display = 'none');
  document.getElementById(action).style.display = 'inline';

  const status = document.getElementById('status');

  if (action === 'eat') {
    status.textContent = "😺 Your kitty is eating!";
    showNotification("🍽️ Kitty is eating!");
  }

  if (action === 'sleep') {
    status.textContent = "💤 Your kitty is sleeping...";
    showNotification("😴 Kitty is sleeping...");
  }

  if (action === 'dance') {
    status.textContent = "🎵 Your kitty is dancing!";
    showNotification("💃 Kitty is dancing!");
  }
}
