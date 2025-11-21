// ========== YEAR ==========
document.getElementById("year").textContent = new Date().getFullYear();


// ========== SKILL ANIMATION ==========
const skillsSection = document.querySelector('#skills');
const skillBars = document.querySelectorAll('.skill-bar-fill');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(bar => {
        bar.style.width = bar.dataset.percent + "%";
      });
      observer.unobserve(skillsSection);
    }
  });
}, { threshold: 0.3 });

observer.observe(skillsSection);


// ========== CONTACT FORM ==========
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("message").value.trim();
    let output = document.getElementById("form-msg");

    if (name === "" || email === "" || msg === "") {
      output.textContent = "Please fill all fields!";
      output.style.color = "red";
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", msg);

    output.textContent = "Success! Redirecting...";
    output.style.color = "green";

    setTimeout(() => {
      window.location.href = "form-details.html";
    }, 800);
  });
}


// ========== DISPLAY SUBMITTED DATA ==========
if (window.location.pathname.includes("form-details.html")) {
  document.getElementById("display-name").textContent = localStorage.getItem("name");
  document.getElementById("display-email").textContent = localStorage.getItem("email");
  document.getElementById("display-message").textContent = localStorage.getItem("message");
}


// ========== PROJECT CLICK HANDLING ==========
document.querySelectorAll(".project-link").forEach(card => {
  card.addEventListener("click", () => {
    window.location.href = card.dataset.url;
  });
});


// ========== DARK / LIGHT MODE ==========
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  let mode = document.body.classList.contains("dark") ? "🌞" : "🌙";
  document.getElementById("theme-toggle").textContent = mode;
});


// ========== BACK TO TOP BUTTON ==========
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// ========== IMAGE SLIDER ==========
const images = [
  "Images/slide1.jpg",
  "Images/slide2.jpg",
  "Images/slide3.jpg"
];

let index = 0;
const sliderImg = document.getElementById("slider-img");

document.getElementById("next").onclick = () => {
  index = (index + 1) % images.length;
  sliderImg.src = images[index];
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + images.length) % images.length;
  sliderImg.src = images[index];
};


// ========== CANVAS DRAW ==========
const canvas = document.getElementById("myCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#1e90ff";
  ctx.fillRect(20, 20, 120, 80);
}
