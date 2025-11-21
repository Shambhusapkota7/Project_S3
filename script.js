 const skillsSection = document.querySelector('#skills');
    const skillBars = document.querySelectorAll('.skill-bar-fill');

    // Use IntersectionObserver to detect when the section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate each bar to its data-percent value
            skillBars.forEach((bar) => {
              const targetPercent = bar.getAttribute('data-percent');
              bar.style.width = targetPercent + '%';
            });
            // Run only once
            observer.unobserve(skillsSection);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    observer.observe(skillsSection);

// Update footer with current year
document.getElementById("year").textContent =
  new Date().getFullYear();



// CONTACT FORM VALIDATION + localStorage

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Simple validation
      let error = "";

      if (name === "") {
        error = "Name is required.";
      } else if (email === "") {
        error = "Email is required.";
      } else if (!email.includes("@") || !email.includes(".")) {
        error = "Enter a valid email.";
      } else if (message.length < 5) {
        error = "Message must be at least 5 characters.";
      }

      // Show error message
      let msgBox = document.getElementById("form-msg");
      if (!msgBox) {
        msgBox = document.createElement("p");
        msgBox.id = "form-msg";
        msgBox.style.marginTop = "10px";
        form.appendChild(msgBox);
      }

      if (error !== "") {
        msgBox.style.color = "red";
        msgBox.textContent = error;
        return;
      }

      // Save to localStorage
      localStorage.setItem("contactName", name);
      localStorage.setItem("contactEmail", email);
      localStorage.setItem("contactMessage", message);

      msgBox.style.color = "lightgreen";
      msgBox.textContent = "Form submitted successfully! Redirecting...";
\
      setTimeout(() => {
        window.location.href = "form-details.html";
      }, 1000);
    });
  }

  
  if (window.location.pathname.includes("form-details.html")) {
    document.getElementById("display-name").textContent =
      localStorage.getItem("contactName");
    document.getElementById("display-email").textContent =
      localStorage.getItem("contactEmail");
    document.getElementById("display-message").textContent =
      localStorage.getItem("contactMessage");
  }
});
// ----------------------
// STORE FORM DATA
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Save data
      localStorage.setItem("contactName", name);
      localStorage.setItem("contactEmail", email);
      localStorage.setItem("contactMessage", message);

      window.location.href = "form-details.html";
    });
  }

  // ----------------------  
  // SHOW DATA ON NEXT PAGE  
  // ----------------------
  if (document.getElementById("display-name")) {
    document.getElementById("display-name").textContent =
      localStorage.getItem("contactName") || "Not found";

    document.getElementById("display-email").textContent =
      localStorage.getItem("contactEmail") || "Not found";

    document.getElementById("display-message").textContent =
      localStorage.getItem("contactMessage") || "Not found";
  }
});


  