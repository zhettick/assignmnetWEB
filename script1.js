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
    
    function changeColor() {
    const colors = ['#fffaf5', '#ffcbcb', '#ffd6a5', '#caffbf', '#9bf6ff', '#bdb2ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  } 
  // === 🕒 Время по кнопке в header (живое обновление) ===
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
        weekday: 'short', 
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


     
     
// ===  INTERACTIVE JS SECTION ===

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

//  Переключатель Day/Night Theme
const toggleBtn = document.getElementById('toggleTheme');
let darkMode = false;

toggleBtn.addEventListener('click', () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.style.backgroundColor = '#2e2e2e';
    document.body.style.color = '#fff';
    toggleBtn.textContent = '🌚 Switch to Day Mode';
  } else {
    document.body.style.backgroundColor = '#fffaf5';
    document.body.style.color = '#333';
    toggleBtn.textContent = '🌞 Switch to Night Mode';
  }
});




//  Проигрывание звука “мяу”
const meowBtn = document.getElementById('meowBtn');
const meowSound = new Audio('audio/meow.mp3'); // путь к твоему файлу звука

meowBtn.addEventListener('click', () => {
  meowSound.play();
}); 

