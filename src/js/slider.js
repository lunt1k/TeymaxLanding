import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
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
    1048: {
      slidesPerView: 2,
      spaceBetween: 185,
    },
  },
});

const modalGeoff = document.getElementById('modalGeoff');
const modalJosh = document.getElementById('modalJosh');
const modalMike = document.getElementById('modalMike');
const btnGeoff = document.getElementById('modal-btn-geoff');
const btnJosh = document.getElementById('modal-btn-josh');
const btnMike = document.getElementById('modal-btn-mike');
const span = document.getElementsByClassName('close');
const iframe = document.querySelector('iframe');

btnJosh.addEventListener('click', () => {
  modalJosh.style.display = 'flex';
});

btnGeoff.addEventListener('click', () => {
  modalGeoff.style.display = 'flex';
});

btnMike.addEventListener('click', () => {
  modalMike.style.display = 'flex';
});

[...span].forEach(element => {
  element.addEventListener('click', () => {
    modalGeoff.style.display = 'none';
    modalJosh.style.display = 'none';
    modalMike.style.display = 'none';
  })
});

window.onclick = function (event) {
  if (
    event.target == modalGeoff ||
    event.target == modalJosh ||
    event.target == modalMike
  ) {
    modalGeoff.style.display = 'none';
    modalJosh.style.display = 'none';
    modalMike.style.display = 'none';
  }
};
