function showKitty(action, img, text) {
  let kitty = document.getElementById("kitty");
  kitty.src = img;               
  kitty.style.display = "block"; 
  document.getElementById("status").innerText = text;
}

function feed() {
  showKitty("feed", "cat/eating.gif", "😺 Your kitty is eating!");
}

function sleep() {
  showKitty("sleep", "cat/working.gif", "💤 Your kitty is sleeping...");
}

function dance() { 
  showKitty("dance", "cat/dancing.gif", "🎵 Your kitty is dancing!");
}

function resetKitty() {
  let kitty = document.getElementById("kitty");
  kitty.style.display = "none"; 
  kitty.src = "";               
  document.getElementById("status").innerText = "Your kitty is waiting...";
}

function logout() {
  alert("You have been logged out!");
  window.location.href = "index.html";
}

document.getElementById('openSidebar').addEventListener('click', () => {
  document.getElementById('sidebar').style.display = 'flex';
});

document.getElementById('closeSidebar').addEventListener('click', () => {
  document.getElementById('sidebar').style.display = 'none';
});

   

  
    const sidebar = document.getElementById('sidebar');
    document.getElementById('openSidebar').addEventListener('click', () => {
      sidebar.style.right = '0';
    });
    document.getElementById('closeSidebar').addEventListener('click', () => {
      sidebar.style.right = '-250px';
    });
    
   ;
   //  Функция смены цвета
function changeColor() {
  const colors = [
    '#fffaf5', '#ffe6e6', '#fff3cd', '#cdefff', '#e5ffcc', '#f3d1ff', '#ffd1dc'
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = randomColor;
  document.querySelectorAll('header, footer, section, main, .card, nav')
    .forEach(el => el.style.backgroundColor = randomColor);

  localStorage.setItem('backgroundColor', randomColor);
}

//  Функция сброса цвета
function resetColor() {
  localStorage.removeItem('backgroundColor'); // удаляем сохранённый цвет
  const defaultColor = '#fffaf5'; // стандартный цвет

  document.body.style.backgroundColor = defaultColor;
  document.querySelectorAll('header, footer, section, main, .card, nav')
    .forEach(el => el.style.backgroundColor = '');
}

//  Восстановление цвета при загрузке
document.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem('backgroundColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    document.querySelectorAll('header, footer, section, main, .card, nav')
      .forEach(el => el.style.backgroundColor = savedColor);
  }
});

 
  // ===  Время   ===
const timeHeaderBtn = document.getElementById('showTimeHeader');
const datetimeElement = document.getElementById('datetime');
let timeInterval; 

if (timeHeaderBtn) {
  timeHeaderBtn.addEventListener('click', () => {
    
    datetimeElement.style.display = 'block';
    datetimeElement.style.opacity = '0';
    setTimeout(() => datetimeElement.style.opacity = '1', 100);

    
    timeHeaderBtn.style.display = 'none';

    
    function updateLiveTime() {
      const now = new Date();
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      };
      datetimeElement.textContent = now.toLocaleDateString('en-US', options);
    }

    updateLiveTime();                
    timeInterval = setInterval(updateLiveTime, 1000); 
  });
}


//  Рейтинг (Rate Your Kitty)
const stars = document.querySelectorAll('.star');
const ratingText = document.getElementById('ratingText');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    stars.forEach((s, i) => {
      s.style.color = i <= index ? '#ff9e9e' : '#ccc';
    });
    ratingText.textContent = `You rated your kitty ${index + 1} / 5 ⭐`;
  });
});

// 🌗 Toggle Day/Night Mode with Local Storage
const toggleBtn = document.getElementById('toggleTheme');

// Проверяем сохранённую тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  enableDarkMode();
} else {
  disableDarkMode();
}

// === Переключение темы ===
toggleBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

//  Включаем тёмную тему
function enableDarkMode() {
  document.body.classList.add('dark-mode');

  // Перекрашиваем ВСЁ, кроме sidebar
  document.querySelectorAll('header, footer, section, main, .card, nav')
    .forEach(el => {
      if (!el.closest('.sidebar')) el.classList.add('dark-block');
    });

  toggleBtn.textContent = '🌞 Switch to Day Mode';
  localStorage.setItem('theme', 'dark');
}

//  Возвращаем светлую тему
function disableDarkMode() {
  document.body.classList.remove('dark-mode');

  document.querySelectorAll('header, footer, section, main, .card, nav')
    .forEach(el => el.classList.remove('dark-block'));

  toggleBtn.textContent = '🌙 Switch to Night Mode';
  localStorage.setItem('theme', 'light');
}




function showKitty(action) {
      const gifs = ['eat', 'sleep', 'dance'];
      gifs.forEach(id => document.getElementById(id).style.display = 'none');
      document.getElementById(action).style.display = 'inline';
      const status = document.getElementById('status');
      if (action === 'eat') status.textContent = "😺 Your kitty is eating!";
      if (action === 'sleep') status.textContent = "💤 Your kitty is sleeping...";
      if (action === 'dance') status.textContent = "🎵 Your kitty is dancing!";
    }
    document.querySelectorAll(".question").forEach(q => {
  q.addEventListener("click", () => {
    const a = q.nextElementSibling;
    a.style.display = (a.style.display === "block") ? "none" : "block";
  });
});


window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scrollProgress").style.width = scrollPercent + "%";
});
