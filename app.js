// Grab HTML Elements
const btn = document.querySelector('button.mobile-menu');
const menu = document.querySelector('.mobile-menu');

// Add Event Listeners
btn.addEventListener('click', () => {
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
