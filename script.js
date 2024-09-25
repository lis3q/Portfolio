// Sticky navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// ScrollReveal
ScrollReveal().reveal('.hero h1, #about .text h2', {
    delay: 300,
    duration: 700,
    origin: 'top',
    distance: '50px',
    interval: 200,
    easing: 'ease-in-out'
});
ScrollReveal().reveal('.hero p, .hero .buttons, #about .text p, #about .text a', {
    delay: 300,
    duration: 700,
    origin: 'bottom',
    distance: '50px',
    interval: 200,
    easing: 'ease-in-out',
});
ScrollReveal().reveal('.section-heading', {
    delay: 300,
    duration: 500,
    origin: 'top',
    distance: '50px',
    easing: 'ease-in-out',
    interval: 200,
});
ScrollReveal().reveal('.about-container .left-img, .skill.html, .skill.bootstrap, .skill.js, .skill.figma', {
    delay: 300,
    duration: 700,
    origin: 'left',
    distance: '90px',
    interval: 200,
    easing: 'ease-in-out',
});
ScrollReveal().reveal('.about-container .center-img', {
    delay: 300,
    duration: 700,
    origin: 'top',
    distance: '90px',
    interval: 200,
    easing: 'ease-in-out',
});
ScrollReveal().reveal('.about-container .right-img, .skill.css, .skill.tailwind, .skill.react', {
    delay: 300,
    duration: 700,
    origin: 'right',
    distance: '90px',
    interval: 200,
    easing: 'ease-in-out',
});
ScrollReveal().reveal('#projects .project, #contact .form', {
    delay: 300,
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    opacity: 0,
    interval: 200,
});
