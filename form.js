const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

const button = document.getElementById("open-popup");
const sound = document.getElementById("clicking-sound");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-btn");

button.addEventListener("click", () => {
  sound.currentTime = 0;
  sound.play();
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

const form = document.querySelector("form.form-custom");

function setErr(id, msg) {
  document.getElementById(id).textContent = msg;
}

form.addEventListener("submit", (e) => {
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
    e.preventDefault();
    return;
  }

  const status = document.getElementById('formStatus');

  e.preventDefault();

  fetch('https://httpbin.org/post', {
    method: 'POST',
    body: new FormData(form)
  })
  .then(() => {
    status.textContent = "Form sent!";
    form.reset();
  })
  .catch(() => {
    status.textContent = "Error sending form.";
  });

  form.reset();
});