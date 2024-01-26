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
ScrollReveal().reveal('.about-content .image', { delay: 400, origin: 'left', distance: '6%' });
ScrollReveal().reveal('.about-content .about', { delay: 400, origin: 'right', distance: '6%' });
ScrollReveal().reveal('.intro h2', { delay: 400, origin: 'right', distance: '6%' });
ScrollReveal().reveal('.intro p', { delay: 500, origin: 'left', distance: '6%' });
ScrollReveal().reveal('.intro .buttons', { delay: 600, origin: 'right', distance: '6%' });
ScrollReveal().reveal('.content .image', { delay: 400, origin: 'right', distance: '6%' });
ScrollReveal().reveal('.projects-content', { delay: 400, origin: 'right', distance: '6%' });
ScrollReveal().reveal('.contact-content', { delay: 400, origin: 'left', distance: '6%' });


// Hamburger
let hamburger = document.querySelector(".hamburger");
let mobilenav = document.querySelector(".mobilenav")
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobilenav.classList.toggle("active");
})


// Color themes 
let black = document.querySelector(".themes .color.black");
black.addEventListener("click", () => {
    document.documentElement.style.setProperty('--white', '#fff');
    document.documentElement.style.setProperty('--darkblue', '#1f1f1f');
    document.documentElement.style.setProperty('--blue', '#292929');
    document.documentElement.style.setProperty('--stickynav', '#2e2e2e');
    document.documentElement.style.setProperty('--mobilenav', '#383838');
    document.documentElement.style.setProperty('--buttonhover', '#383838');
    document.documentElement.style.setProperty('--button', '#575757');
    document.documentElement.style.setProperty('--button', '#575757');
    document.documentElement.style.setProperty('--overlaybtn', '#292929cb');
})

let blue = document.querySelector(".themes .color.blue");
blue.addEventListener("click", () => {
    document.documentElement.style.setProperty('--white', '#fff');
    document.documentElement.style.setProperty('--darkblue', '#1B1F24');
    document.documentElement.style.setProperty('--blue', '#242B33');
    document.documentElement.style.setProperty('--stickynav', '#21262c');
    document.documentElement.style.setProperty('--mobilenav', '#313b46');
    document.documentElement.style.setProperty('--buttonhover', '#313b46');
    document.documentElement.style.setProperty('--button', '#4f5c6d');
})