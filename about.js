const quoteBtn = document.getElementById('quoteBtn');
  const quoteText = document.getElementById('quoteText');

  quoteBtn.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.style.opacity = 0;
    setTimeout(() => {
      quoteText.textContent = randomQuote;
      quoteText.style.opacity = 1;
    }, 250);
  });


$("#copyQuoteBtn").on("click", function () {
  let text = $("#quoteText").text();
  navigator.clipboard.writeText(text);

  $("#copyAlert").fadeIn(200);
  setTimeout(() => $("#copyAlert").fadeOut(300), 1500);
});

//  Random Background Color (работает на всех страницах)
function changeColor() {
  const colors = [
    '#fffaf5', // светло-бежевый
    '#ffe6e6', // розоватый
    '#fff3cd', // кремовый
    '#cdefff', // голубой
    '#e5ffcc', // салатовый
    '#f3d1ff', // сиреневый
    '#ffd1dc'  // клубничный
  ];

  // Выбираем случайный цвет
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Меняем фон для всех ключевых блоков
  document.body.style.backgroundColor = randomColor;
  document.querySelectorAll('header, footer, section, main, .card, nav')
    .forEach(el => el.style.backgroundColor = randomColor);


}

//  Восстанавливаем цвет при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem('backgroundColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    document.querySelectorAll('header, footer, section, main, .card, nav')
      .forEach(el => el.style.backgroundColor = savedColor);
  }
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scrollProgress").style.width = scrollPercent + "%";
});
// === Random Cat Quote API ===
document.addEventListener("DOMContentLoaded", () => {
  const quoteBtn = document.getElementById("quoteBtn");
  const quoteText = document.getElementById("quoteText");

  if (quoteBtn) {
    quoteBtn.addEventListener("click", async () => {
      try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        quoteText.textContent = "🐾 " + data.fact;
      } catch (error) {
        quoteText.textContent = "😿 Could not fetch a quote right now.";
        console.error(error);
      }
    });
  }
});