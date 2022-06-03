const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
btnMobileNav.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(btnMobileNav);
  // console.log(header);
  header.classList.toggle("nav-open");
});
