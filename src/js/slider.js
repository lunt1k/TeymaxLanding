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
  loopedSlides: 3,
  autoHeight: false,
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    1048: {
      slidesPerView: 2,
      spaceBetween: 185,
    },
  },
});

swiper.on('slideChange', function () {});

const modalTom = document.getElementById('modalTom');
const modalGeoff = document.getElementById('modalGeoff');
const modalDaniel = document.getElementById('modalDaniel');
// const btnTom = document.querySelectorAll('.modal-btn-tom');
// const btnGeoff = document.querySelectorAll('.modal-btn-geoff');
// const btnDaniel = document.querySelectorAll('.modal-btn-daniel');
const imgTom = document.querySelectorAll('.img--tom');
const imgGeoff = document.querySelectorAll('.img--geoff');
const imgDaniel = document.querySelectorAll('.img--daniel');
const span = document.querySelectorAll('.modal__close');
const iframe = document.querySelectorAll('iframe');

// [...btnTom].forEach((el) => {
//   el.addEventListener('click', () => {
//     modalTom.style.transform = 'translateY(0%)';
//   });
// });

// [...btnGeoff].forEach((el) => {
//   el.addEventListener('click', () => {
//     modalGeoff.style.transform = 'translateY(0%)';
//   });
// });

// [...btnDaniel].forEach((el) => {
//   el.addEventListener('click', () => {
//     modalDaniel.style.transform = 'translateY(0%)';
//   });
// });

[...imgTom].forEach((el) => {
  el.addEventListener('click', () => {
    modalTom.style.transform = 'translateY(0%)';
  });
});

[...imgGeoff].forEach((el) => {
  el.addEventListener('click', () => {
    modalGeoff.style.transform = 'translateY(0%)';
  });
});

[...imgDaniel].forEach((el) => {
  el.addEventListener('click', () => {
    modalDaniel.style.transform = 'translateY(0%)';
  });
});

[...span].forEach((element) => {
  element.addEventListener('click', () => {
    modalTom.style.transform = 'translateY(-100%)';
    modalGeoff.style.transform = 'translateY(-100%)';
    modalDaniel.style.transform = 'translateY(-100%)';
    emailModal.style.transform = 'translateY(-100%)';
    [...iframe].forEach((element) => {
      let iframeSrc = element.src;
      element.src = '';
      element.src = iframeSrc;
    });
  });
});

window.onclick = function (event) {
  if (
    event.target == modalTom ||
    event.target == modalGeoff ||
    event.target == modalDaniel
  ) {
    modalTom.style.transform = 'translateY(-100%)';
    modalGeoff.style.transform = 'translateY(-100%)';
    modalDaniel.style.transform = 'translateY(-100%)';
    emailModal.style.transform = 'translateY(-100%)';
  }
};

const emailBtn = document.querySelector('.modal-email-btn');
const emailModal = document.getElementById('modalEmail');
const emailConfirmBtn = document.querySelector('.submit-email-btn');
emailBtn.addEventListener('click', () => {
  emailModal.style.transform = 'translateY(0%)';
});
emailConfirmBtn.addEventListener('click', () => {
  // const userName = document.getElementById('nameInput').value;
  // const userEmail = document.getElementById('emailInput').value;
  // const userMessage = document.getElementById('messageInput').value;
  // console.log(userName, userEmail, userMessage);
});

// const sendmail = require('sendmail')();

// sendmail({
//     from: 'no-reply@yourdomain.com',
//     to: 'test@qq.com, test@sohu.com, test@163.com ',
//     subject: 'test sendmail',
//     html: 'Mail of test sendmail ',
//   }, function(err, reply) {
//     console.log(err && err.stack);
//     console.dir(reply);
// });
// let nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });

// let mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
