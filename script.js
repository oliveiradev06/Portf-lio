// script.js

const toggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  // Armazena a preferência no localStorage
  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

// Aplica o tema salvo ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
  }
});
