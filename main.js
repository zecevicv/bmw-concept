window.onunload = function () {
  gsap.to('body', {opacity: 0});
  window.scrollTo(0, 0);
}

// Codument loaded
window.addEventListener('load', (event) => {
  /* #Loader Icon
  ======================================================= */
  const loaderTl = gsap.timeline();
  loaderTl.to('.loader', {
      duration: .5,
      ease: 'power2',
      opacity: 0,
      delay: 1
    })
    .set('.loader', {
      display: 'none'
    });
  // loaderTl.set('.loader', {display: 'none'})

  /* #Sitewide Animations
  ======================================================= */

  // Show animaitons only on desktop
  if (window.innerWidth > 992) {
    // Header Animation
    gsap.set('.m8-top .img-reveal span', {display: "block"});
    const header = gsap.timeline({paused: true});
    header
    .from('.header', {duration: 1, ease: 'power1.inOut', opacity: 0, delay: 1.5})
    .from('.m8', {duration: 1, ease: 'power1.inOut', opacity: 0}, "<")
    .from('.m8-top .img', {duration:1, ease: 'power1.inOut', opacity: 0}, "<")
    .to('.m8-top .img span', {duration:1, ease: 'power1.inOut', x: "-100%"}, "<")
    .from('.m8-top .img img', {duration:1, ease: 'power1.inOut', scale: 1.4}, "<")
    .from('.m8 h1 span', {duration: .8, ease: 'power1.inOut', opacity: 0, y: "100%", stagger: .2}, "<")
    .from('.m8-bottom .blue-line span', {duration:.9, ease: 'power1.inOut', x: "100%"}, "-=.8")
    const headerWaypoint = new Waypoint({
      element: document.querySelector('.header'),
      handler: () => {
        header.play();
        headerWaypoint.destroy();
      },
      offset: '75%'
    })
  
    // iVision Animation
    const iVisionAnimation = gsap.timeline({paused: true});
    iVisionAnimation
    .from('.i-vision h2 div > span', {duration: .8, ease: 'power1.inOut', opacity: 0, y: "100%", stagger: .2}, "<")
    .from('.i-vision .img--1 img', {duration: 1.1, ease: 'power1.out', x: "-100%", opacity: .5}, "-=.9")
    .from('.i-vision .img--2 img', {duration: 1.1, ease: 'power1.out', x: "100%", opacity: .5}, "-=.9")
    const iVisionWaypoint = new Waypoint({
      element: document.querySelector('.i-vision'),
      handler: () => {
        iVisionAnimation.play();
        iVisionWaypoint.destroy();
      },
      offset: '75%'
    })
  
    // X7 Animation
    gsap.set('.x7 .img-reveal span', {display: "block"});
    const x7 = gsap.timeline({paused: true});
    x7.from('.x7 h2 span', {duration: 1, ease: 'power1.inOut', opacity: 0, y: "100%", stagger: .2}, "<")
    x7.from('.x7 .img--1', {duration: 1, ease: 'power1.inOut', opacity: 0}, "-=.7")
    x7.to('.x7 .img--1 span', {duration: 1, ease: 'power1.inOut', x: "-100%"}, "<")
    x7.from('.x7 .img--1 img', {duration: 1, ease: 'power1.inOut', scale: 1.2}, "<")
    x7.from('.x7 .img--2', {duration: 1, ease: 'power1.inOut', opacity: 0}, "<")
    x7.to('.x7 .img--2 span', {duration: 1, ease: 'power1.inOut', top: "100%"}, "<")
    x7.from('.x7 .img--2 img', {duration: 1, ease: 'power1.inOut', scale: 1.2}, "<")
    x7.from('.x7 .img--3', {duration: 1, ease: 'power1.inOut', opacity: 0}, "<")
    x7.to('.x7 .img--3 span', {duration: 1, ease: 'power1.inOut', x: "100%"}, "<")
    x7.from('.x7 .img--3 img', {duration: 1, ease: 'power1.inOut', scale: 1.2}, "<")
    const x7Waypoint = new Waypoint({
      element: document.querySelector('.x7'),
      handler: () => {
        x7.play();
        x7Waypoint.destroy();
      },
      offset: '75%'
    })
  
    // S8 Animation
    gsap.set('.s8 .img-reveal span', {display: "block"});
    const s8 = gsap.timeline({paused: true});
    s8.from('.s8 h2 span', {duration: 1, ease: 'power1.inOut', opacity: 0, y: "100%", stagger: .2}, "<")
    .from('.s8 .img-gallery .img', {duration: 1, ease: 'power1.inOut', opacity: 0}, "<")
    .to('.s8 .img-gallery .img span', {duration: 1, ease: 'power1.inOut', x: "-100%"}, "<")
    .from('.s8 .img-gallery .img img', {duration: 1, ease: 'power1.inOut', scale: 1.4}, "<")
    .from('.s8 .img-thumbs .img', {duration:1.1, ease: 'power1.inOut', opacity: 0, stagger: {from: "end", each: .1}}, "-=.9")
    .to('.s8 .img-thumbs .img span', {duration:1.1, ease: 'power1.inOut', top: "100%", stagger: {from: "end", each: .1}}, "<")
    .from('.s8 .img-thumbs .img img', {duration:1.1, ease: 'power1.inOut', scale: 1.4, stagger: {from: "end", each: .1}}, "<");
    const s8Waypoint = new Waypoint({
      element: document.querySelector('.s8'),
      handler: () => {
        s8.play();
        s8Waypoint.destroy();
      },
      offset: '75%'
    });
  
    // Z4 Animation
    gsap.set('.z4 .images .img-reveal span', {display: 'none'})
    const z4 = gsap.timeline({paused: true});
    z4.from('.z4 h2 span', {duration: 1, ease: 'power1.inOut', opacity: 0, y: "100%", stagger: .2}, "<")
    z4.from('.z4 .img--2 img', {duration: 1, ease: 'power1.out', x: "100%", opacity: .5}, "-=.8")
    z4.from('.z4 .img--1 img', {duration: 1, ease: 'power1.out', x: "100%", opacity: .5}, "-=.8")
    const z4Waypoint = new Waypoint({
      element: document.querySelector('.z4'),
      handler: () => {
        z4.play();
        z4Waypoint.destroy();
      },
      offset: '75%'
    });
  
    // Footer Animation
    const footer = gsap.timeline({paused: true});
    footer.from('.footer .container-lg > *', {duration: .8, ease: 'power1.inOut', opacity: 0, y: "100%", stagger: .15});
    const footerWaypoint = new Waypoint({
      element: document.querySelector('.footer'),
      handler: () => {
        footer.play();
        footerWaypoint.destroy();
      },
      offset: '70%'
    });

  } else {
    gsap.timeline()
    .from('.header', {duration: 1, ease: 'power1.inOut', opacity: 0, delay: 1.5})
    .from('.page-wrapper', {duration: 1, ease: 'power1.inOut', opacity: 0}, "<");
  }

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
    }, "-=.2");
});