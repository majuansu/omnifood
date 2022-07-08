// set the year of footer
const year = document.querySelector(".current-year");
year.textContent = new Date().getFullYear();

// make mobile nav menu work
const navbutton = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

navbutton.addEventListener("click", () => {
  header.classList.toggle("nav-open");
  console.log("button is clicked");
});
