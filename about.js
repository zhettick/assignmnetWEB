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
