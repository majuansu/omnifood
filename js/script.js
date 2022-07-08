/////// Set the year of footer
const year = document.querySelector(".current-year");
year.textContent = new Date().getFullYear();

/////// Mobile navigation
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
  // https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

  //////// Close mobile nav menu when window scrolling
  window.addEventListener("scroll", () => {
    header.classList.remove("nav-open");
  });
});

///// Sticky navigation
const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);

/////// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
