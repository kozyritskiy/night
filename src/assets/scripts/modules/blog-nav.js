export default function blogNav() {
  let blogNav = document.querySelector(".blog-column__nav");
  let anchor = document.querySelector(".blog-column__anchor");

  anchor.addEventListener("click", toggleClass);

  function toggleClass(e) {
    e.preventDefault();
    blogNav.classList.toggle("blog-column_nav_active");
  }
}
