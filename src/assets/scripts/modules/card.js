let btnAuth = document.querySelector(".button_auth");
let introWelc = document.querySelector(".intro__welcome");
let introAuth = document.querySelector(".intro__auth");
let btnMain = document.querySelector(".button_main");

btnAuth.addEventListener("click", function(e) {
  introWelc.classList.add("rotate__welc");
  introAuth.classList.add("rotate__auth");
  btnAuth.classList.add("hide");
});
btnMain.addEventListener("click", function(e) {
  introWelc.classList.remove("rotate__welc");
  introAuth.classList.remove("rotate__auth");
  btnAuth.classList.remove("hide");
});
