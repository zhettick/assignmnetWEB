$(document).ready(function () {
    console.log("jQuery is ready! ✅");
});


$("#searchFaq").on("keyup", function () {
  const value = $(this).val().toLowerCase();

  $(".faq h3").each(function () {
    const question = $(this).text().toLowerCase();
    const answer = $(this).next("p").text().toLowerCase();
    const match = question.includes(value) || answer.includes(value);

    $(this).toggle(match);
    $(this).next("p").toggle(match);
  });
});

$(document).ready(function() {

  const questions = [
    "How often does my kitty sleep?",
    "What is her favorite food?"
  ];

  $("#searchFaq").on("keyup", function () {
    const inputText = $(this).val().toLowerCase();
    const suggestionBox = $("#suggestions");
    suggestionBox.empty();

    if (inputText.length === 0) {
      suggestionBox.hide();
      return;
    }

    const matches = questions.filter(q =>
      q.toLowerCase().includes(inputText)
    );

    if (matches.length > 0) {
      suggestionBox.show();
      matches.forEach(match => {
        suggestionBox.append(`<li>${match}</li>`);
      });
    } else {
      suggestionBox.hide();
    }
  });

  $("#suggestions").on("click", "li", function () {
    const selected = $(this).text();
    $("#searchFaq").val(selected);
    $("#suggestions").hide();
    filterFAQ(selected.toLowerCase());
  });

});

$(document).ready(function () {
  let started = false;

  function startCounter() {
    if (!started && $(window).scrollTop() + $(window).height() > $('.stats-section').offset().top) {
      $('.stat-number').each(function () {
        let $this = $(this);
        let target = +$this.attr('data-target');
        let count = 0;

        let interval = setInterval(() => {
          count += Math.ceil(target / 100);
          if (count >= target) {
            count = target;
            clearInterval(interval);
          }
          $this.text(count);
        }, 20);
      });
      started = true;
    }
  }
  
  $(window).on('scroll', startCounter);
});


