// JavaScript for mobile menu toggle
document.getElementById("menu-icon").addEventListener("click", function() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
});

var typed = new Typed(".text", {
    strings: ["Frontend Developer", "App Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
