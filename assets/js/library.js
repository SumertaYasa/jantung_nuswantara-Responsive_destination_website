// Mixitup Destinasi
const mixer = mixitup(".destination__container", {
  selectors: {
    target: ".destination__content",
  },
  animation: {
    duration: 400,
  },
});

// Swiper Perjalanan
const swiper = new Swiper('.swiper-container', {
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 12
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 16
    }
  },
});
