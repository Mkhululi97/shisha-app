const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
btnMobileNav.addEventListener("click", function (e) {
  e.preventDefault();
  header.classList.toggle("nav-open");
});

// STICKY NAVIGATION
const sectionHeroEl = document.querySelector(".hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    //In the viewport
    root: null,
    threshold: 0,
    // matches the height of nav-sticky
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
// SMOOTH SCROLLING ANIMATION
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});
