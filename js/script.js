const bg = document.querySelector('.page-outer')
let lastKnownScrollPosition = 0;
let ticking = false;

function scrollBg(scrollPos) {
    bg.setAttribute('style', `background-position: center ${scrollPos}px;`)
};

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = Math.round(window.scrollY);

  if (!ticking) {
    window.requestAnimationFrame(function() {
        scrollBg(lastKnownScrollPosition);
        ticking = false;
    });

    ticking = true;
  }
});

const burgerButton = document.querySelector('.burger-inner')
const menu = document.querySelector('.main-menu')
const body = document.querySelector('body')
let current = 0
burgerButton.addEventListener('click', () => {
  if (current == 0) {
    current++
    menu.classList.add('active')
    body.setAttribute('style', 'overflow-y: hidden;')
  }else if (current == 1){
    current--
    menu.classList.remove('active')
    body.setAttribute('style', 'overflow-y: visible;')
  }
})


const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

