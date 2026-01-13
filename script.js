// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Mobile menu toggle
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
