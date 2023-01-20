const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  spaceBetween: 20,
  loopFillGroupWithBlank: false,
  slidesPerView: 2,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 800,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',

    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const bestSwiper = new Swiper('.mySwiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 5,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-best-button-next',
    prevEl: '.swiper-best-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});
