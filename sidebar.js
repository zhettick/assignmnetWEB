let user = null;
try {
    const raw = localStorage.getItem("kittyUser");
    user = raw ? JSON.parse(raw) : null;
} catch {
    user = null;
}

const loggedIn = localStorage.getItem("loggedIn");
const page = window.location.pathname.split("/").pop();

if (page === "account.html") {
    if (!user || loggedIn !== "true") {
        window.location.href = "settings.html";
    } else {
        document.getElementById("username").textContent = user.name;
        document.getElementById("email").textContent = user.email;

        const hour = new Date().getHours();
        const greeting =
            hour < 12
                ? `☀️ Good morning, ${user.name}!`
                : hour < 18
                    ? `😺 Good afternoon, ${user.name}!`
                    : `🌙 Good evening, ${user.name}!`;

        document.getElementById("greeting").textContent = greeting;
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "settings.html";
}
window.logout = logout;

function showSignup() {
    document.getElementById("signupBox")?.classList.remove("hidden");
    document.getElementById("loginBox")?.classList.add("hidden");
}
window.showSignup = showSignup;

function showLogin() {
    document.getElementById("loginBox")?.classList.remove("hidden");
    document.getElementById("signupBox")?.classList.add("hidden");
}
window.showLogin = showLogin;

function setErr(id, msg) {
    document.getElementById(id).textContent = msg;
}

function signUp() {
    setErr("err-su-name", "");
    setErr("err-su-email", "");
    setErr("err-su-pass", "");

    let check = true;

    const name = document.getElementById("signupName")?.value.trim();
    const email = document.getElementById("signupEmail")?.value.trim();
    const pass = document.getElementById("signupPass")?.value.trim();
    if (name === "") {
        setErr("err-su-name", "Please enter your name.");
        check = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        setErr("err-su-email", "Please enter a valid email address.");
        check = false;
    }

    if (!pass || pass.length < 8) {
        setErr("err-su-pass", "Please enter your password.");
        check = false;
    }

    if (!check) {
        return;
    }

    const newUser = { name, email, pass };
    localStorage.setItem("kittyUser", JSON.stringify(newUser));
    alert("✅ Account created successfully!");
    showLogin();
}

function logIn() {
    setErr("err-li-email", "");
    setErr("err-li-pass", "");

    let check = true;

    const email = document.getElementById("loginEmail")?.value.trim();
    const pass = document.getElementById("loginPass")?.value.trim();
    const stored = localStorage.getItem("kittyUser");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        setErr("err-li-email", "Please enter a valid email address.");
        check = false;
    }

    if (!pass || pass.length < 8) {
        setErr("err-li-pass", "Password must be at least 8 characters.");
        check = false;
    }

    if (!check) return;

    let storedUser = null;
    try {
        storedUser = stored ? JSON.parse(stored) : null;
    } catch {
        storedUser = null;
    }

    if (storedUser && email === storedUser.email && pass === storedUser.pass) {
        localStorage.setItem("loggedIn", "true");
        alert(`🐾 Welcome back, ${storedUser.name}!`);
        setTimeout(() => {
            window.location.href = "account.html";
        }, 500);
    } else {
        alert("⚠️ Incorrect email or password!");
    }
}
window.logIn = logIn;