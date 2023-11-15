// Link active navbar
let navlink = document.querySelectorAll(".link");

navlink.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        link.classList.add("active");
    })
})

// Link active when scrolling
let sections = document.querySelectorAll("section");
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlink.forEach(link => {
                link.classList.remove("active");
                document.querySelector('.links a[href*=' + id + ']').classList.add("active");
            })
        }
    })
}

// Sticky navbar
var navbar = document.querySelector('nav');
window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 0);
})

// Scroll reveal using JS library
ScrollReveal({
    reset: true,
    distance: '-60px',
    duration: 800,
})

ScrollReveal().reveal('.heading', { delay: 400 });
ScrollReveal().reveal('.about-content .image', { delay: 400, origin: 'left', distance: '100px' });
ScrollReveal().reveal('.about-content .info', { delay: 400, origin: 'right', distance: '100px' });
ScrollReveal().reveal('.intro h2', { delay: 400, origin: 'right', distance: '100px' });
ScrollReveal().reveal('.intro p', { delay: 500, origin: 'left', distance: '100px' });
ScrollReveal().reveal('.intro .buttons', { delay: 600, origin: 'right', distance: '100px' });
ScrollReveal().reveal('.content .image', { delay: 400, origin: 'right', distance: '150px' });
ScrollReveal().reveal('.projects-content', { delay: 400, origin: 'right', distance: '130px' });
ScrollReveal().reveal('.contact-content', { delay: 400, origin: 'left', distance: '130px' });