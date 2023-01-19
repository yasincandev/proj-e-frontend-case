const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  direction: 'horizontal',
  grabCursor: true,

  loop: true,
  slidesPerView: 2,
  coverflowEffect: {
    rotate: 0,
    stretch: -30,
    depth: 150,
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
});
