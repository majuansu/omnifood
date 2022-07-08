/////// Set the year of footer
const year = document.querySelector(".current-year");
year.textContent = new Date().getFullYear();

/////// Make mbile nav menu button work
const navbutton = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

navbutton.addEventListener("click", () => {
  header.classList.toggle("nav-open");
  console.log("button is clicked");
});

/////// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const targetSection = document.querySelector(href);
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  //////// Close mobile nav menu when window scrolling
  window.addEventListener("scroll", () => {
    header.classList.remove("nav-open");
  });
});
