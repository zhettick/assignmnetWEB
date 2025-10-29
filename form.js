const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

const openBtn = document.getElementById("open-popup");
const sound = document.getElementById("clicking-sound");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  sound.currentTime = 0;
  sound.play();
  document.body.style.overflow = "hidden";
  popup.style.display = "flex";
  popup.classList.add("show");
});

const closePopup = () => {
  popup.style.display = "none";
  popup.classList.remove("show");
  document.body.style.overflow = "auto";
};

closeBtn.addEventListener("click", closePopup);

popup.addEventListener("click", e => {
  if (e.target === popup) closePopup();
});

$(window).on("scroll", function () {
  $(".card-img").each(function () {
    const top = $(this).offset().top;
    const winTop = $(window).scrollTop();
    const winHeight = $(window).height();

    if (!$(this).attr("src") && top < winTop + winHeight) {
      $(this).attr("src", $(this).data("src"));
    }
  });
}).trigger("scroll");

const form = document.querySelector("form.form-custom");

function setErr(id, msg) {
  document.getElementById(id).textContent = msg;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  setErr("err-name", "");
  setErr("err-surname", "");
  setErr("err-email", "");
  setErr("err-catName", "");
  setErr("err-catAge", "");
  setErr("err-gender", "");
  setErr("err-activities", "");

  let check = true;

  const name = document.getElementById("name").value.trim();
  const surname = document.getElementById("surname").value.trim();
  const email = document.getElementById("email").value.trim();
  const catName = document.getElementById("catName").value.trim();
  const catAge = document.getElementById("catAge").value.trim();
  const gender = document.querySelector("input[name='gender']:checked");
  const activities = [
    document.getElementById("play").checked,
    document.getElementById("sleep").checked,
    document.getElementById("walk").checked
  ];

  if (name === "") {
    setErr("err-name", "Please enter your name.");
    check = false;
  }

  if (surname === "") {
    setErr("err-surname", "Please enter your surname.");
    check = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "" || !emailPattern.test(email)) {
    setErr("err-email", "Please enter a valid email address.");
    check = false;
  }

  if (catName === "") {
    setErr("err-catName", "Please enter name for your cat.");
    check = false;
  }

  if (catAge <= 0 || catAge === "") {
    setErr("err-catAge", "Please enter your cats age.");
    check = false;
  }

  if (!gender) {
    setErr("err-gender", "Please select cat gender.");
    check = false;
  }

  if (!activities.some(v => v)) {
    setErr("err-activities", "Please choose at least one activity.");
    check = false;
  }

  if (!check) {
    return;
  }
  $("#form").on("submit", function (e) {
    e.preventDefault();

    const submitBtn = $("#submit-btn");
    const spinner = submitBtn.find(".spinner-border");
    const btnText = submitBtn.find(".submit-btn-text");
    const status = $("#formStatus");

    submitBtn.prop("disabled", true);
    spinner.removeClass("d-none");
    btnText.text("Please wait...");

    fetch("https://httpbin.org/post", {
      method: "POST",
      body: new FormData(this)
    })
      .then(() => {
        setTimeout(() => {
          spinner.addClass("d-none");
          btnText.text("Submit!");
          submitBtn.prop("disabled", false);
          status.text("Form submitted!");
          $("#form")[0].reset();
        }, 500);
      })
      .catch(() => {
        spinner.addClass("d-none");
        btnText.text("Submit!");
        submitBtn.prop("disabled", false);
        status.text("Error sending form.");
      });
  });
});