//jquery for toggle dropdown menus
$(document).ready(function() {
    //toggle sub-menus
    $(".sub-btn").click(function() {
        $(this).next(".sub-menu").slideToggle();
    });
});
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
menuBtn.onclick = function() {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');

    }
    //javascript for the navigation bar effects on scroll
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


// navigation scroll

// window.addEventListener('scroll', function() {
//     const header = document.querySelector('header');
//     const toggle = document.querySelector('.toggle');
//     header.classList.toggle("sticky", window.scrollY > 0);
//     toggle.classList.toggle("sticky", window.scrollY > 0);
// });

// media screen navigation

// const navBar = document.querySelector('.navigation');
// const toggleBtn = document.querySelector('.toggle');
// toggleBtn.onclick = function() {
//         toggleBtn.classList.toggle('active');
//         navBar.classList.toggle('active');
//     }
// navBar.onclick = function() {
//     toggleBtn.classList.toggle('active');
//     navBar.classList.toggle('active');
// }