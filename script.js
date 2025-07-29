// Função para rolagem suave ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Efeito de destaque no cabeçalho ao rolar
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  } else {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  }
});

// Função para a barra de pesquisa (pode ser expandida)
document.querySelector(".fa-search").addEventListener("click", function (e) {
  e.preventDefault();
  // Aqui você pode adicionar a lógica para expandir a barra de pesquisa
  alert("Funcionalidade de pesquisa será implementada aqui!");
});

// Função para notificações
document.querySelector(".fa-bell").addEventListener("click", function (e) {
  e.preventDefault();
  alert("Você não tem novas notificações!");
});

// Menu do usuário (pode ser expandido)
document.querySelector(".user-menu").addEventListener("click", function (e) {
  e.preventDefault();
  // Aqui você pode adicionar um dropdown menu
  alert("Menu do usuário será implementado aqui!");
});
