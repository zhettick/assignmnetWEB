# 🐱 My Virtual Kitty

An interactive, responsive, and fully functional web project where users can **adopt, care for, and play with a virtual cat**.  
Built with **HTML, CSS, Bootstrap, and JavaScript**, this project demonstrates modern front-end techniques — from authentication and theming to animations, localStorage persistence, and responsive UI.

---

## 🌟 Overview
**My Virtual Kitty** combines fun and learning by letting users:
- 🧍‍♀️ Create an account and log in securely  
- 🎨 Customize interface themes and background colors  
- 🐾 Feed, play, and interact with their virtual pet  
- 📖 Explore rich sections like *About*, *Care*, *Gallery*, and *Adoption Form*

---

## 🧩 Key Features

### 🔐 Authentication System
- Sign Up / Log In / Log Out with `localStorage`
- Input validation (name, email, password ≥ 8 chars)
- Inline error messages and redirect protection
- Personalized greetings on `account.html` based on time of day

### 🎨 Theming & Customization
- Dark / Light Mode toggle saved in `localStorage`
- Random background color generator with reset option
- Unified design with `general.css` + `style.css`
- WCAG-friendly accessible color contrast

### 🧭 Navigation & Layout
- Responsive **Bootstrap 5.3** navbar and grid layout  
- Sidebar menu with quick links & theme tools  
- Smooth scroll progress bar on every page  
- Clear navigation between: Home → Care → About → Gallery → Play → Form

### 🐾 Virtual Pet Interaction
- Animated cat actions: 🍣 *Feed*, 💤 *Sleep*, 💃 *Dance*
- Real-time status updates (`#status`)
- Toast-style notifications (`.toast-msg`)
- FAQ autocomplete + keyword highlighting  
- Time-based greetings (via `switch` logic)

### 🧾 Form System
- Popup **Adoption Form** with validation
- Fields: name, surname, email, cat’s name, age, gender, activities  
- Uses `fetch()` to simulate submission (`https://httpbin.org/post`)
- Spinner + success message feedback
- Lazy image loading and FAQ accordion with jQuery

### 🕹 Play Page – *“Catch the Cat!”*
- Cat moves randomly via `setInterval`
- Clicks counted as score
- Instruction popup with sound effect 🎵
- 5-star rating system stored in `localStorage`

### 📸 Gallery & About Pages
- Bootstrap carousel of cat GIFs
- Keyboard navigation (← / →)
- Hover animations + captions
- Random Cat Quotes generator + Copy to clipboard
- Animated counters (“Happy Players”, “Meals Served”, “Daily Meows”)

### 💡 Extra Functionalities
- Live date & time clock (`showTimeHeader`)
- Theme & background persistence after reload
- Keyboard & responsive accessibility
- Optimized media queries for all viewports

---

## ⚙️ Technologies Used

| Category | Tools / Frameworks |
|-----------|--------------------|
| **Frontend** | HTML5, CSS3, Bootstrap 5.3 |
| **Interactivity** | JavaScript (DOM API, fetch, localStorage) |
| **Library** | jQuery 3.7.1 |
| **IDE** | Visual Studio Code |

---

## 🗂 Project Structure
my-virtual-kitty/
│
- index.html           # Homepage with hero, sidebar, theme tools
- care.html            # Cat actions + FAQ
- about.html           # Bio, quotes, counters
- gallery.html         # GIF carousel
- form.html            # Adoption popup form
- play.html            # Mini-game + rating
- settings.html        # Sign Up / Log In page
- account.html         # User account page
- general.css          # Global UI + dark mode
- style.css / diana.css  # Responsive & per-page styling
- script1.js           # Shared scripts of about, care, and index
- sidebar.js           # Sidebar, theme, and color control
- form.js              # Form validation + fetch
- care.js              # FAQ, greeting, notifications
- about.js             # Quotes, counters, copy feature
- play.js              # Game logic
- common.js  # Shared scripts of play, form, and gallery
- jquery.js  # JQuery 
- /cat/                # GIF assets (eating, sleeping, dancing)
---

## 👩‍💻 Team

| Name | Group |
|------ | -------|
| **Diana Sabulla** | SE-2401 |
| **Zumrad Sherbadalova** | SE-2401 |

---

## 🧠 Learning Outcomes
Through this project we practiced:
- DOM manipulation & event-driven programming  
- Form validation and `fetch` API usage  
- UI theming with persistent `localStorage`  
- Responsive design via Bootstrap & media queries  
- Accessibility and semantic HTML