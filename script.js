// ========== YEAR ==========
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ========== SKILL ANIMATION ==========
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

// ========== CONTACT FORM (VALIDATION + LOCALSTORAGE + REDIRECT) ==========
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const formMsg = document.getElementById("form-msg");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let errors = [];

    if (name.length < 2) {
      errors.push("Name must be at least 2 characters.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.push("Please enter a valid email address.");
    }

    if (message.length < 5) {
      errors.push("Message must be at least 5 characters.");
    }

    if (errors.length > 0) {
      formMsg.textContent = errors.join(" ");
      formMsg.style.color = "tomato";
      return;
    }

    // SAVE TO LOCAL STORAGE
    localStorage.setItem("formName", name);
    localStorage.setItem("formEmail", email);
    localStorage.setItem("formMessage", message);

    formMsg.textContent = "Form submitted successfully! Redirecting...";
    formMsg.style.color = "lightgreen";

    setTimeout(() => {
      window.location.href = "forms-details.html";
    }, 800);
  });
}

// ========== PROJECT CARD CLICK ==========
document.querySelectorAll(".project-link").forEach((card) => {
  card.addEventListener("click", () => {
    const url = card.dataset.url;
    if (url) {
      window.location.href = url;
    }
  });
});

// ========== DARK / LIGHT MODE ==========
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";
  });
}

// ========== BACK TO TOP ==========
const backToTop = document.getElementById("back-to-top");

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ========== IMAGE SLIDER ==========
const images = ["Images/slide1.jpg", "Images/slide2.jpg", "Images/slide3.jpg"];
let index = 0;

const sliderImg = document.getElementById("slider-img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

if (sliderImg && nextBtn && prevBtn) {
  nextBtn.onclick = () => {
    index = (index + 1) % images.length;
    sliderImg.src = images[index];
  };

  prevBtn.onclick = () => {
    index = (index - 1 + images.length) % images.length;
    sliderImg.src = images[index];
  };
}

// ========== CANVAS DRAW ==========
const canvas = document.getElementById("myCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#1e90ff";
  ctx.fillRect(20, 20, 260, 110);

  ctx.fillStyle = "white";
  ctx.font = "16px Arial";
  ctx.fillText("Hello from Canvas!", 60, 90);
}
