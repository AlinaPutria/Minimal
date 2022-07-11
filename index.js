// PRELOADER
let maskL = document.querySelector('.maskL');
window.addEventListener('load', () => {
    maskL.classList.add('hide');
    setTimeout(() => {
        maskL.remove();
    }, 6000)
});
// NAV ANIMATION AFTER
let links = document.querySelectorAll('.link'),
    ind = document.querySelector('.indicator');
let target;

links.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
        target = e.target;
        ind.style.width = `${target.offsetWidth}px`;
        ind.style.left = `${target.offsetLeft}px`;
    });
});

window.addEventListener('resize', (e) => {
    ind.style.width = `${target.offsetWidth}px`;
    ind.style.left = `${target.offsetLeft}px`;
});
// ANIMATION
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});
// Burger
const burgerMenu = document.querySelector('.burgerMenu');
const burgerNav = document.querySelector('.header-menu-list');

burgerMenu.addEventListener('click', function(){
  burgerMenu.classList.toggle('open');
  burgerNav.classList.toggle('active');
})


