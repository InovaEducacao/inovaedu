//===============Script_do_scroll,rolagem===============//

window.addEventListener("scroll", function () {
  let header = document.querySelector("#header");
  header.classList.toggle("rolagem", window.scrollY > 0);
});

//===============Script carroseel===============//

// var swiper = new Swiper(".mySwiper", {
//   speed: 600,
//   parallax: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".banner-button-next",
//     prevEl: ".banner-button-prev",
//   },
// });
var swiper = new Swiper(".BannerSwiper", {
  spaceBetween: 10,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   effect: "fade",
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
var swiper = new Swiper(".GaleriaInternaSwiper", {
  navigation: {
    nextEl: ".GaleriaInterna-button-next",
    prevEl: ".GaleriaInterna-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  slidesPerView: 1,
  initialSlide: 0,
  loopedSlides: 3,
  visibilityFullFit: true,
  autoResize: true,
  spaceBetween: 10,
});

//===============Back to top===============//
// Mostra ou oculta o botão baseado na posição de rolagem
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  var button = document.getElementById("back-to-top");
  var conteudoTopo = document
    .getElementById("bl-sobre")
    .getBoundingClientRect().top;

  if (conteudoTopo < 0) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
// Faz a página rolar para o topo quando o botão é clicado
function scrollToTop() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

//===============Fancybox===============//
/* Galeria */
Fancybox.bind('[data-fancybox="gallery"]', {
  selector: ".original",
  Thumbs: {
    showOnStart: false,
  },
});
