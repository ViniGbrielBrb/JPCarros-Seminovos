document.addEventListener("DOMContentLoaded", () => {
  // Rolagem suave ao clicar nos links do menu
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  if (smoothLinks.length) {
    smoothLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Exemplo de alerta ao clicar em "Detalhes"
  const detailButtons = document.querySelectorAll(".card button");
  if (detailButtons.length) {
    detailButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        alert("Mais detalhes em breve!");
      });
    });
  }
});
