// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed
window.onscroll = function () {
  const navbar = document.querySelector("#navbar");
  const fixedNav = navbar.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    navbar.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
  } else {
    navbar.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
  }
};


// Click outside hamburger
window.addEventListener('click', function (e) {
  if (e.target != navMenu && e.target != hamburger) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.toggle('hidden');
  }
});

// Dark Mode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
})