import elements from './elements'

let navTopPositions = []
let sectionsTopPositions = []

let getPositions = function () {
  ;[...elements.navLinks].forEach((element) => {
    navTopPositions.push(element.getBoundingClientRect().top)
  })
  ;[...elements.sections].forEach((element) => {
    sectionsTopPositions.push(element.getBoundingClientRect().top)
  })
  console.table(navTopPositions)
  console.table(sectionsTopPositions)
}

setTimeout(getPositions, 500)


