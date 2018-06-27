import smoothScroll from "./scroll";
export default function arrowScrollUp() {
  let btnLikn = document.querySelector(".up-btn__link");

  btnLikn.addEventListener("click", scrollTo);

  function scrollTo(e) {
    // убираем стандартное поведение
    e.preventDefault();
    // для текущего якоря берем соответствующий ему элемент ID
    let eID = btnLikn.getAttribute("href");
    smoothScroll(eID);
  }
}
