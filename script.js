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