import elements from './elements'
import Swiper from 'swiper'

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '"></span>'
    },
  },
  navigation: {
    nextEl: '.swiperbutton-next',
    prevEl: '.swiperbutton-prev',
  },
  slidesPerView: 1,
  autoHeight: true,
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 320px
    // when window width is >= 640px
    1048: {
      slidesPerView: 2,
      spaceBetween: 185,
    }
  }
})
