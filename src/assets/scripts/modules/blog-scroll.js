import smoothScroll from "./scroll";
export default function blogScroll() {
  let linkList = document.querySelector(".blog-menu__list");

  linkList.addEventListener("click", scrollTo);

  function scrollTo(e) {
    // убираем стандартное поведение
    e.preventDefault();
    if (e.target.classList.contains("blog-menu__link")) {
      let current = e.target;
      // для текущего якоря берем соответствующий ему элемент ID
      let eID = current.getAttribute("href");
      smoothScroll(eID);
    }
  }
}
