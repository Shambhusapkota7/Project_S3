/* ==========================================
   YEAR (FOOTER)
========================================== */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* ==========================================
   SKILL BAR ANIMATION
========================================== */
const skillsSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".skill-bar-fill");

if (skillsSection && skillBars.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillBars.forEach((bar) => {
            bar.style.width = bar.dataset.percent + "%";
          });

          observer.unobserve(skillsSection);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(skillsSection);
}

/* ==========================================
   CONTACT FORM (VALIDATION + REDIRECT)
========================================== */
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("form-msg");

    let errors = [];

    if (name.length < 2) errors.push("Name must be at least 2 characters.");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) errors.push("Please enter a valid email.");

    if (message.length < 5) errors.push("Message must be at least 5 characters.");

    if (errors.length > 0) {
      formMsg.textContent = errors.join(" ");
      formMsg.style.color = "tomato";
      return;
    }

    // SAVE TO LOCAL STORAGE
    localStorage.setItem("formName", name);
    localStorage.setItem("formEmail", email);
    localStorage.setItem("formMessage", message);

    formMsg.textContent = "Form submitted! Redirecting...";
    formMsg.style.color = "lightgreen";

    setTimeout(() => {
      window.location.href = "forms-details.html";
    }, 800);
  });
}

/* ==========================================
   PROJECT CARD CLICK (OPEN LINK)
========================================== */
document.querySelectorAll(".project-link").forEach((card) => {
  card.addEventListener("click", () => {
    const url = card.dataset.url;
    if (url) window.location.href = url;
  });
});

/* ==========================================
   DARK / LIGHT MODE
========================================== */
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark")
      ? "🌞"
      : "🌙";
  });
}

/* ==========================================
   BACK TO TOP BUTTON
========================================== */
const backToTop = document.getElementById("back-to-top");

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==========================================
   IMAGE SLIDER (FIXED + AUTO FIRST IMAGE)
========================================== */
const images = [
  "Images/Screenshot 2025-11-27 205423.png",
  "Images/Screenshot 2025-11-14 085447.png",
  "Images/Screenshot 2025-11-14 085614.png"
];

let index = 0;

const sliderImg = document.getElementById("slider-img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// Load first image on page load
if (sliderImg) {
  sliderImg.src = images[index];
}

function showImage() {
  sliderImg.src = images[index];
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage();
  });
}

/* ==========================================
   CANVAS DRAW (FIXED)
========================================== */
const canvas = document.getElementById("myCanvas");


if (canvas) {
  const ctx = canvas.getContext("2d");

  // Background Rectangle
  ctx.fillStyle = "#1e90ff";
  ctx.fillRect(20, 20, 260, 110);

  // Text
  ctx.fillStyle = "white";
  ctx.font = "16px Arial";
  ctx.fillText("Hello from Canvas!", 60, 90);
}
/* ==========================================
   CANVAS: DRAW WITH MOUSE
========================================== */
const canvas2 = document.getElementById("myCanvas");

if (canvas2) {
  const ctx2 = canvas2.getContext("2d");

  let drawing = false;

  function startDraw(e) {
    drawing = true;
    draw(e);
  }

  function endDraw() {
    drawing = false;
    ctx2.beginPath();
  }

  function draw(e) {
    if (!drawing) return;

    ctx2.lineWidth = 4;           // Brush thickness
    ctx2.lineCap = "round";       // Smooth edges
    ctx2.strokeStyle = "#ffffff"; // Brush color

    ctx2.lineTo(e.offsetX, e.offsetY);
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.moveTo(e.offsetX, e.offsetY);
  }

  // Mouse Events
  canvas2.addEventListener("mousedown", startDraw);
  canvas2.addEventListener("mouseup", endDraw);
  canvas2.addEventListener("mousemove", draw);
}
