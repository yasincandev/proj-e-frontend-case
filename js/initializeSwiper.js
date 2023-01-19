const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  spaceBetween: 20,
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
});
