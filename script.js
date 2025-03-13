// Sticky navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// ScrollReveal
ScrollReveal().reveal('.hero .image.top, .hero .circle, #skills .skill', {
    delay: 300,
    duration: 800,
    origin: 'top',
    distance: '80px',
    interval: 200,
    easing: 'ease-in-out'
});
ScrollReveal().reveal('.hero .image.bottom, .section-heading', {
    delay: 300,
    duration: 800,
    origin: 'bottom',
    distance: '80px',
    interval: 200,
    easing: 'ease-in-out',
});
ScrollReveal().reveal('.hero .content img, .hero h1, .hero .buttons, #about img', {
    delay: 300,
    duration: 800,
    origin: 'left',
    distance: '80px',
    interval: 200,
    easing: 'ease-in-out',
});
ScrollReveal().reveal('.hero h2, .hero p, .hero .image.right, #about .wrapper, #about .btn', {
    delay: 300,
    duration: 800,
    origin: 'right',
    distance: '80px',
    interval: 200,
    easing: 'ease-in-out',
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
const menuCheckbox = document.querySelector("#menu_checkbox");
const nav = document.querySelector("nav");

menuCheckbox.addEventListener("change", () => {
    if (menuCheckbox.checked) {
        nav.classList.add("active");
        document.querySelector(".overlay").classList.add("active");
    } else {
        nav.classList.remove("active");
        document.querySelector(".overlay").classList.remove("active");
    }
});

// Closing mobile navbar when link clicked
const links = document.querySelectorAll("header nav a");
links.forEach(link => {
    link.addEventListener("click", () => {
        openNavBtn.style.display = "block";
        closeNavBtn.style.display = "none"
        navbar.classList.remove("active");
    })
})

// Skill bars
document.querySelectorAll('.skill').forEach(function(skill) {
    const percentage = skill.getAttribute('data-percentage');
    const color = skill.getAttribute('data-color');

    const filledBar = skill.querySelector('.filled-bar');
    filledBar.style.width = percentage + '%';
    filledBar.style.backgroundColor = color;
    
    const skillInfo = skill.querySelector('.skill-info h3');
    skillInfo.style.color = color;
});