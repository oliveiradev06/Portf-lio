document.addEventListener("DOMContentLoaded", () => {
  // Ano atual no rodapé
  document.getElementById("ano").textContent = new Date().getFullYear();

  if (!("IntersectionObserver" in window)) return;

  // Destaca no menu a seção que está no meio da tela
  const links = document.querySelectorAll(".nav-links a");
  const observador = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach(secao => observador.observe(secao));
});
