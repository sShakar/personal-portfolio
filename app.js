// Hamburger Menu Functionality
const menu = document.getElementById('mobile-menu');
let hamburgerButton = document.getElementById('hamburger-button');
hamburgerButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Sticky Navbar on Scroll
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

// Toggle Navbar on Click
const hamburgerIcon = document.querySelector('.hamburger-icon');

hamburgerIcon.addEventListener('click', () => {});
