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
  slidesPerView: 2,
  autoHeight: true,
  loop: true,
})
