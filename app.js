// Hamburger Menu Functionality
const menu = document.querySelector('.mobile-menu');
let hamburgerBTN = document.querySelector('.hamburger-icon');
hamburgerBTN.addEventListener('click', () => {
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
