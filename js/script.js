document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    perPage: 1,
    arrows: false,
  });
  splide.mount();

  //   var splide_2 = new Splide(".splide_2", {
  //     perPage: 3,
  //     arrows: false,
  //   });
  //   splide_2.mount();

  var splide_3 = new Splide(".splide_3", {
    perPage: 3,
    arrows: false,
    breakpoints: {
      768: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
  });
  splide_3.mount();
});

// function toggleMenu() {
//   const menu = document.getElementById("menu");
//   const body = document.body;
//   menu.classList.toggle("active");
//   body.classList.toggle("menu-open"); // Переключаем класс 'menu-open' на body
// }
