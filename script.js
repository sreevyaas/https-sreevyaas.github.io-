// JS Enhancements for Portfolio Site

// Smooth scroll to sections (optional future nav integration)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Future feature: Toggle light/dark theme
// const toggleBtn = document.getElementById('themeToggle');
// toggleBtn?.addEventListener('click', () => {
//   document.body.classList.toggle('light-theme');
// });

console.log("Portfolio loaded successfully");
