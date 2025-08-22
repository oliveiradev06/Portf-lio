// Animação suave na rolagem
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Efeito glow na foto ao passar o mouse
const profileImg = document.querySelector(".profile-img");
profileImg.addEventListener("mouseenter", () => {
  profileImg.style.boxShadow = "0 0 25px rgba(155, 93, 240, 0.9)";
});
profileImg.addEventListener("mouseleave", () => {
  profileImg.style.boxShadow = "0 0 15px rgba(122, 63, 240, 0.6)";
});
