let parallaxContainer = document.querySelector(".welcome");
let layer = parallaxContainer.firstElementChild;
let parallaxImg = document.querySelector(".parallax__img");

let moveLayers = function(e) {
  let initX = window.innerWidth / 2 - e.pageX;
  let initY = window.innerHeight / 2 - e.pageY;

  let index = parallaxImg.dataset.parallax;

  let posX = initX * index;
  let posY = initY * index;

  let botPos = (window.innerHeight / 2) * index;
  let leftPos = (window.innerWidth / 2) * index;

  parallaxImg.style.bottom = `-${botPos}px`;
  //parallaxImg.style.left = `-${leftPos}px`;
  parallaxImg.style.right = `${leftPos}px`;
  layer.style.transform = `translate(${posX}px, ${posY}px)`;
};

window.addEventListener("mousemove", moveLayers);
