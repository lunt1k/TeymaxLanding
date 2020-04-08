import elements from './elements'

elements.menuBtn.addEventListener('click', () => {
    elements.menuBtn.classList.toggle('open')
    elements.navItemsBlock.classList.toggle('display-show')
    // elements.navContactLinks.classList.toggle('display-show')
})

Array.from(elements.navItems).forEach(element => {
    element.addEventListener('click', () => {
        elements.menuBtn.classList.remove('open')
        elements.navItemsBlock.classList.remove('display-show')
    })
});
