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
  spaceBetween: 185,
  slidesPerView: 1,
  autoHeight: true,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    // when window width is >= 640px
    1048: {
      slidesPerView: 2,
    }
  }
})
