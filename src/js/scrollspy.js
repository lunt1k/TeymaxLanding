const makeNavLinksSmooth = () => {
  const navLinks = document.querySelectorAll('.navbar-collapse__link')

  for (let n in navLinks) {
    if (navLinks.hasOwnProperty(n)) {
      navLinks[n].addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector(navLinks[n].hash).scrollIntoView({
          behavior: 'smooth',
        })
      })
    }
  }
}

let addToggle = function () {
  const navbar = document.getElementById('navbar')
  const paddingTopNav = parseInt(
    window.getComputedStyle(navbar, null).getPropertyValue('padding-top')
  )
  if (screen.width < 1480) {
    navbar.classList.add('toogle-menu')
    if (paddingTopNav != 0) {
      navbar.style.paddingTop = '0'
    }
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
    const paddingTopNav = parseInt(
      window.getComputedStyle(navbar, null).getPropertyValue('padding-top')
    )
    if (screen.width > 1480) {
      if (window.pageYOffset < 223) {
        navbar.style.paddingTop = 258 - window.pageYOffset + 'px'
      } else if (paddingTopNav != 35) {
        navbar.style.paddingTop = '35px'
      }
    } else if (screen.width < 768) {
      if (window.pageYOffset < 18) {
        navbar.style.paddingTop = 18 - window.pageYOffset + 'px'
      } else if (paddingTopNav != 0) {
        navbar.style.paddingTop = '0'
      }
    } else {
      if (window.pageYOffset < 28) {
        navbar.style.paddingTop = 28 - window.pageYOffset + 'px'
      } else if (paddingTopNav != 0) {
        navbar.style.paddingTop = '0'
      }
    }

    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop
    for (let s in sections)
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
        const id = sections[s].id
        if (id === 'about_us' || id === 'technology' || id === 'customers') {
          document.getElementById('navbar').classList.add('navbar--light')
        } else {
          document.getElementById('navbar').classList.remove('navbar--light')
        }

        document
          .querySelector('.navbar-collapse__item--active')
          .classList.remove('navbar-collapse__item--active')
        document
          .querySelector(`a[href*=${id}`)
          .parentNode.classList.add('navbar-collapse__item--active')
      }
  }
}

makeNavLinksSmooth()
spyScrolling()
