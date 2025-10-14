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
  
   function updateDateTime() {
    const now = new Date();
    const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit'
    };
    document.getElementById("datetime").textContent = now.toLocaleDateString('en-US', options);
  }

  
  updateDateTime();
  setInterval(updateDateTime, 60000);

