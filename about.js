document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "Cats rule the world.  Ernest Hemingway",
    "Time spent with cats is never wasted.  Sigmund Freud",
    "In ancient times cats were worshipped as gods; they have not forgotten this. Terry Pratchett",
    "A cat has absolute emotional honesty.  Colette",
    "Cats choose us; we do not own them. Kristin Cast",
    "What greater gift than the love of a cat.  Charles Dickens",
    "The smallest feline is a masterpiece.  Leonardo da Vinci"
  ];

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
});

$("#copyQuoteBtn").on("click", function () {
  let text = $("#quoteText").text();
  navigator.clipboard.writeText(text);

  $("#copyAlert").fadeIn(200);
  setTimeout(() => $("#copyAlert").fadeOut(300), 1500);
});
// 🌗 Toggle Day/Night Mode with Local Storage (универсальный вариант)
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('toggleTheme');
  const savedTheme = localStorage.getItem('theme');

  // Применяем сохранённую тему даже если кнопки нет
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }


  if (toggleBtn) {
    toggleBtn.textContent = savedTheme === 'dark'
      ? '🌞 Switch to Day Mode'
      : '🌙 Switch to Night Mode';

    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      toggleBtn.textContent = isDark
        ? '🌞 Switch to Day Mode'
        : '🌙 Switch to Night Mode';
    });
  }
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