const user = JSON.parse(localStorage.getItem("kittyUser"));
    const loggedIn = localStorage.getItem("loggedIn");

    if (!user || loggedIn !== "true") {
      window.location.href = "settings.html";
    } else {
      document.getElementById("username").textContent = user.name;
      document.getElementById("email").textContent = user.email;

      const hour = new Date().getHours();
      let greeting;
      if (hour < 12) greeting = `☀️ Good morning, ${user.name}!`;
      else if (hour < 18) greeting = `😺 Good afternoon, ${user.name}!`;
      else greeting = `🌙 Good evening, ${user.name}!`;
      document.getElementById("greeting").textContent = greeting;
    }

    function logout() {
      localStorage.removeItem("loggedIn");
      window.location.href = "settings.html";
    }
   
  
  // === Apply saved theme from localStorage ===
  const savedTheme = localStorage.getItem("theme");

  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    document.querySelectorAll('header, footer, section, main, .card, nav, .box, .account-container')
      .forEach(el => el.classList.add('dark-block'));
  }

  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    document.querySelectorAll('header, footer, section, main, .card, nav, .box, .account-container')
      .forEach(el => el.classList.remove('dark-block'));
  }

  if (savedTheme === "dark") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
