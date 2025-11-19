const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  //  Autoplay 
   autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    loop: true,
  },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
        768: {
        slidesPerView: 2,
      },
        1024: {
        slidesPerView: 3,
      },
    }
  });
function showSidebar() {
  document.querySelector('.mobile-nav-links').style.display = 'flex';
}
function hideSidebar() {
  document.querySelector('.mobile-nav-links').style.display = 'none';
}
