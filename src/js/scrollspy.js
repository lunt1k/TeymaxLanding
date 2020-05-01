import SmoothScroll from 'smooth-scroll';
import elements from './elements';

const videosURL = [
  'https://www.youtube.com/embed/T3zaF1BmFT0',
  'https://www.youtube.com/embed/ea5uxRmRe8Y',
];

let addToggle = function () {
  const navbar = document.getElementById('navbar');
  const paddingTopNav = parseInt(
    window.getComputedStyle(navbar, null).getPropertyValue('padding-top')
  );
  const winWidth = window.innerWidth;

  if (winWidth < 1480) {
    navbar.classList.add('toogle-menu');
    if (navbar.style.paddingTop != 0) {
      navbar.style.paddingTop = '0';
    }
  } else {
    navbar.classList.remove('toogle-menu');
    navbar.style.paddingTop = '258px';
  }
};

let contactUsTopPosition =
  elements.contactUsSection.getBoundingClientRect().top + window.pageYOffset;

window.addEventListener('resize', () => {
  addToggle();
  contactUsTopPosition =
    elements.contactUsSection.getBoundingClientRect().top + window.pageYOffset;
});

window.addEventListener('load', () => {
  addToggle();
  setTimeout(() => {
    [...elements.videoBlock].forEach((el, index) => {
      el.src = `${videosURL[index]}`;
    });
  }, 1000);
});

window.onscroll = () => {
  const navbar = document.getElementById('navbar');
  const navbarToggle = document.querySelector('toogle-menu');
  const paddingTopNav = parseInt(
    window.getComputedStyle(navbar, null).getPropertyValue('padding-top')
  );

  if (window.innerWidth > 1480) {
    // if (window.pageYOffset < 223) {
    navbar.style.paddingTop = '258px';
    // } else if (paddingTopNav != 35) {
    //   navbar.style.paddingTop = '35px'
    // }
  } else if (window.innerWidthn < 768) {
    if (window.pageYOffset < 18) {
      navbar.style.paddingTop = 18 - window.pageYOffset + 'px';
    } else if (paddingTopNav != 0) {
      navbar.style.paddingTop = '0';
    }
  } else {
    if (window.pageYOffset < 28) {
      navbar.style.paddingTop = 28 - window.pageYOffset + 'px';
    } else if (paddingTopNav != 0) {
      navbar.style.paddingTop = '0';
    }
  }

  if (window.pageYOffset + 300 >= contactUsTopPosition) {
    elements.navbar.classList.add('display-hide');
  } else {
    elements.navbar.classList.remove('display-hide');
  }
};

new SmoothScroll('[data-scroll]', {
  speed: 1000,
  speedAsDuration: true,
  header: '[data-scroll-header]',
});

const sections = [...elements.sections];

const sectionsTop = Array.prototype.map.call(sections, (section) => {
  return { id: section.id, offsetTop: section.offsetTop };
});

window.addEventListener('scroll', () => {
  const ACTIVE_CLASSNAME = 'navbar-collapse__link--active';
  const currScrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  sectionsTop.forEach(({ id, offsetTop }) => {
    let positionTop = offsetTop - window.innerHeight / 2;
    if (positionTop <= currScrollPosition) {
      document
        .querySelector(`.${ACTIVE_CLASSNAME}`)
        .classList.remove(ACTIVE_CLASSNAME);

      document
        .querySelector(`a[href*='${id}']`)
        .parentElement.classList.add(ACTIVE_CLASSNAME);
    }
  });
});
// const spyScrolling = () => {
//   const sections = document.querySelectorAll('section')

//   window.onscroll = () => {
//     const navbar = document.getElementById('navbar')
//     const navbarToggle = document.querySelector('toogle-menu')
//     const paddingTopNav = parseInt(
//       window.getComputedStyle(navbar, null).getPropertyValue('padding-top')
//     )
//     if (screen.width > 1480) {
//       // if (window.pageYOffset < 223) {
//         navbar.style.paddingTop = '258px'
//       // } else if (paddingTopNav != 35) {
//       //   navbar.style.paddingTop = '35px'
//       // }
//     } else if (screen.width < 768) {
//       if (window.pageYOffset < 18) {
//         navbar.style.paddingTop = 18 - window.pageYOffset + 'px'
//       } else if (paddingTopNav != 0) {
//         navbar.style.paddingTop = '0'
//       }
//     } else {
//       if (window.pageYOffset < 28) {
//         navbar.style.paddingTop = 28 - window.pageYOffset + 'px'
//       } else if (paddingTopNav != 0) {
//         navbar.style.paddingTop = '0'
//       }
//     }

//     const scrollPos =
//       document.documentElement.scrollTop || document.body.scrollTop
//     for (let s in sections)
//       if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
//         const id = sections[s].id
//         if (id === 'about_us' || id === 'technology' || id === 'customers') {
//           document.getElementById('navbar').classList.add('navbar--light')
//         } else {
//           document.getElementById('navbar').classList.remove('navbar--light')
//         }

//         document
//           .querySelector('.navbar-collapse__item--active')
//           .classList.remove('navbar-collapse__item--active')
//         document
//           .querySelector(`a[href*=${id}`)
//           .parentNode.classList.add('navbar-collapse__item--active')
//       }
//   }
// }
