const workingSwiper = new Swiper('.working-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.working-swiper-button-next',
    prevEl: '.working-swiper-button-prev',
  },
});

const workingSwiper2 = new Swiper('.dismantling-working-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.dismantling-working-swiper-button-next',
    prevEl: '.dismantling-working-swiper-button-prev',
  },
});

const recallSwiper = new Swiper('.recall-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.recall-swiper-button-next',
    prevEl: '.recall-swiper-button-prev',
  },
});