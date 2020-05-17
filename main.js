/* #Mobile menu
======================================================= */

const hamburgerBtn = document.querySelector('.hamburger');
hamburgerBtn.addEventListener('click', (e) => {
  hamburgerBtn.classList.toggle('is-active');
  document.querySelector('body').classList.toggle('no-scroll');
  // Check if menu is oppened
  if (e.currentTarget.classList.contains('is-active')) {
    mobileMenuTl.play();
  } else {
    mobileMenuTl.reverse();
  }
})

// Closing mobile menu with clicking on the backdrop
window.addEventListener('click', (e) => {
  if (e.target.closest('.backdrop')) {
    hamburgerBtn.classList.toggle('is-active');
    document.querySelector('body').classList.toggle('no-scroll');
    mobileMenuTl.reverse();
  }
})

// Mobile menu gsap timeline
const mobileMenuTl = gsap.timeline({
  paused: true
});
mobileMenuTl
  .set('.header-popup', {
    display: 'block'
  })
  .from('.backdrop', {
    duration: .3,
    opacity: 0
  })
  .to('.header-popup .nav', {
    duration: .4,
    ease: 'power1',
    left: 0
  }, "<")
  .from('.header-popup li', {
    duration: .2,
    ease: 'power2',
    x: -25,
    opacity: 0,
    stagger: .1
  }, "-=.2")