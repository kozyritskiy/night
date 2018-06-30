export default function fullMenu() {
  let hamBtn = document.querySelector(".hamburger");
  let menu = document.querySelector(".full-menu");
  let main = document.querySelector(".maincontent");

  hamBtn.addEventListener("click", showMenu);

  function showMenu() {
    menu.classList.toggle("full-menu_active");
    main.classList.toggle("static");
    hamBtn.classList.toggle("open");
  }
}
