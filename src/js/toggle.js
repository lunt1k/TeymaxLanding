import elements from './elements'

elements.menuBtn.addEventListener('click', () => {
    elements.menuBtn.classList.toggle('open')
    elements.navbarItems.classList.toggle('display-show')
})

