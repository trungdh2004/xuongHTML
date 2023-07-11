const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const loading = $(".loading-web");
const header = $(".header");
const headerIcon = $(".header-icon");
const xmarkIcon = $(".icon-xmark");
// const product
const hero7Product = $$(".hero-7-content-box-list")
console.log(hero7Product);



// header menu active
headerIcon.addEventListener("click", () => {
  header.classList.add("active");
});
xmarkIcon.addEventListener("click", () => {
  header.classList.remove("active");
});

//   <!-- scroll bar style header -->
window.addEventListener("scroll", function (e) {
  this.scrollY > 50
    ? (header.style.backgroundColor = "#49bbbd")
    : (header.style.backgroundColor = "transparent");
});

// window loading page
loading.classList.add("active");

window.addEventListener("load", () => {
  loading.classList.remove("active");
});
