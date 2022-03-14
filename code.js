document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

document.querySelector(".fa-search").addEventListener("click", () => {
  document.querySelector(".search").classList.toggle("mostrar");
});


ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});