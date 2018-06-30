import smoothScroll from "./scroll";
export default function arrowScrollDown() {
  let btnLikn = document.querySelector(".down-btn__link");

  btnLikn.addEventListener("click", scrollTo);

  function scrollTo(e) {
    // убираем стандартное поведение
    e.preventDefault();
    // для текущего якоря берем соответствующий ему элемент ID
    let eID = btnLikn.getAttribute("href");
    smoothScroll(eID);
  }
}
