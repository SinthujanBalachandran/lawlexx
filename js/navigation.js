// navigation scroll

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const toggle = document.querySelector('.toggle');
    header.classList.toggle("sticky", window.scrollY > 0);
    toggle.classList.toggle("sticky", window.scrollY > 0);
});

// media screen navigation

const navBar = document.querySelector('.navigation');
const toggleBtn = document.querySelector('.toggle');
toggleBtn.onclick = function() {
        toggleBtn.classList.toggle('active');
        navBar.classList.toggle('active');
    }
    // navBar.onclick = function() {
    //     toggleBtn.classList.toggle('active');
    //     navBar.classList.toggle('active');
    // }