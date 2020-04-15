import elements from './elements';

elements.menuBtn.addEventListener('click', () => {
  const scrollY = window.pageYOffset;
  const topValue = elements.body.getBoundingClientRect().top;
  elements.menuBtn.classList.toggle('open');
  elements.navItemsBlock.classList.toggle('display-show');
  if (elements.navItemsBlock.classList.contains('display-show')) {
    setTimeout(() => {
      document.body.style.position = 'fixed';
      document.body.style.top = `${scrollY}px`;
    }, 500);
  } else {
    document.body.style.position = '';
    window.scrollTo(1, topValue);
  }
});

Array.from(elements.navLinks).forEach((element) => {
  element.addEventListener('click', () => {
    elements.menuBtn.classList.remove('open');
    elements.navItemsBlock.classList.remove('display-show');
    elements.body.style.position = '';
    document.body.style.top = ``;
  });
});
