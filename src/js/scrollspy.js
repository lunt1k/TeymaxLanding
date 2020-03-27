const makeNavLinksSmooth = () => {
  const navLinks = document.querySelectorAll('.nav-link')

  for (let n in navLinks) {
    if (navLinks.hasOwnProperty(n)) {
      navLinks[n].addEventListener('click', e => {
        e.preventDefault()
        document.querySelector(navLinks[n].hash).scrollIntoView({
          behavior: 'smooth',
        })
      })
    }
  }
}

let addToggle = function() {
  const navbar = document.getElementById('navbar')
  if (screen.width < 1480) {
    navbar.classList.add('toogle-menu')
  } else {
    navbar.classList.remove('toogle-menu')
  }
}

window.addEventListener('resize', addToggle)

const spyScrolling = () => {
  const sections = document.querySelectorAll('section')

  window.onscroll = () => {
    const navbar = document.getElementById('navbar')
    const navbarToggle = document.querySelector('toogle-menu')
    if (screen.width > 1480) {
      if (window.pageYOffset < 250) {
        navbar.style.paddingTop = 250 - window.pageYOffset + 'px'
      } else if (
        parseInt(
          window.getComputedStyle(navbar, null).getPropertyValue('padding-top')
        ) != 35
      ) {
        navbar.style.paddingTop = '35px'
      }
    }else{
      navbar.style.paddingTop = '0'
    }

    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop
    for (let s in sections)
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
        const id = sections[s].id
        if (id === 'about_us' || id === 'technology' || id === 'customers') {
          document.getElementById('navbar').classList.add('navbar-light')
        } else {
          document.getElementById('navbar').classList.remove('navbar-light')
        }

        document
          .querySelector('.active-sidebar-nav')
          .classList.remove('active-sidebar-nav')
        document
          .querySelector(`a[href*=${id}`)
          .parentNode.classList.add('active-sidebar-nav')
      }
  }
}

makeNavLinksSmooth()
spyScrolling()
