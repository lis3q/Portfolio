// Sticky navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// ScrollReveal
ScrollReveal().reveal('.hero h1, .hero h2, #about .text h2', {
    delay: 300,
    duration: 700,
    origin: 'top',
    distance: '20px',
    interval: 200,
    easing: 'ease-in-out'
});
ScrollReveal().reveal('.hero p, .hero .buttons, #about .text p, #about .text a', {
    delay: 300,
    duration: 700,
    origin: 'bottom',
    distance: '20px',
    interval: 200,
    easing: 'ease-in-out',
});
ScrollReveal().reveal('.section-heading', {
    delay: 300,
    duration: 500,
    origin: 'top',
    distance: '20px',
    easing: 'ease-in-out',
    interval: 200,
});
ScrollReveal().reveal('.about-container .left-img, .skill.html, .skill.bootstrap, .skill.js, .skill.figma', {
    delay: 300,
    duration: 700,
    origin: 'left',
    distance: '20px',
    interval: 200,
    easing: 'ease-in-out',
});
ScrollReveal().reveal('.about-container .center-img', {
    delay: 300,
    duration: 700,
    origin: 'top',
    distance: '20px',
    interval: 200,
    easing: 'ease-in-out',
});
ScrollReveal().reveal('.about-container .right-img, .skill.css, .skill.tailwind, .skill.react', {
    delay: 300,
    duration: 700,
    origin: 'right',
    distance: '20px',
    interval: 200,
    easing: 'ease-in-out',
});
ScrollReveal().reveal('#projects .project, #contact .form', {
    delay: 300,
    duration: 1000,
    origin: 'bottom',
    distance: '20px',
    opacity: 0,
    interval: 200,
});


// Link active when scrolling
const navlink = document.querySelectorAll("header nav a");
const sections = document.querySelectorAll("section");
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 200;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlink.forEach(link => {
                link.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
            })
        }
    })
}


// EmailJS
emailjs.init("L1nGhYYZjrJsFZz2s");
document.querySelector('#contact .form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_kthim4f', 'template_xk6yhpl', '#contact .form').then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            document.querySelector(".username").value = "";
            document.querySelector(".useremail").value = "";
            document.querySelector(".usermessage").value = "";

            document.querySelector(".submit-btn").value = "Message sent! Thank you"
            document.querySelector(".submit-btn").style.background = "var(--primary)";
            document.querySelector(".submit-btn").style.color = "var(--white)";
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
});


// Mobile navbar
const openNavBtn = document.querySelector(".open-nav");
const closeNavBtn = document.querySelector(".close-nav");
const navbar = document.querySelector("header nav")

openNavBtn.addEventListener("click", () => {
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "block"
    navbar.classList.add("active");
})

closeNavBtn.addEventListener("click", () => {
    openNavBtn.style.display = "block";
    closeNavBtn.style.display = "none"
    navbar.classList.remove("active");
})

// Closing mobile navbar when link clicked
const links = document.querySelectorAll("header nav a");
links.forEach(link => {
    link.addEventListener("click", () => {
        openNavBtn.style.display = "block";
        closeNavBtn.style.display = "none"
        navbar.classList.remove("active");
    })
})