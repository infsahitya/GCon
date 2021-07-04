var body = document.getElementsByTagName("body")[0];
window.onscroll = function () { headerscrollfunction() };

var sidemenu_open_btn = document.getElementById("nav-menu-open-btn");
var sidemenu_close_btn = document.getElementById("nav-menu-close-btn");
var sidemenu = document.getElementById("sidemenu");
var blackcover = document.getElementById("black-cover");
sidemenu_open_btn.addEventListener('click', function () {
    sidemenu.style.transform = "translateX(0)";
    blackcover.className += " active";
    body.style.overflowY = "hidden";
});
sidemenu_close_btn.addEventListener('click', function () {
    sidemenu.style.transform = "translateX(100%)";
    blackcover.className = "black-cover";
    body.style.overflowY = "scroll";
});


var header = document.getElementById("header");
var navbar = document.getElementById("navbar");
function headerscrollfunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.style.transform = "translateY(-2.5em)";
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }
    else {
        header.style.transform = "translateY(0)";
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    }
}

var about_txtcontainer = document.getElementById("about-txt-container");
var about_imgcontainer = document.getElementById("about-img-container");
about_imgcontainer.style.height = about_txtcontainer.offsetHeight + "px";


document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        perPage: 1,
        perMove: 1,
    }).mount();
});
