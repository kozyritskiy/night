export default function preloader() {
  let images = document.images,
    imagesTotalCount = images.length,
    imagesLoadedCount = 0,
    preloader = document.querySelector(".preloader"),
    percDispay = document.querySelector(".loader__text");

  for (let i = 0; i < imagesTotalCount; i++) {
    let imageClone = new Image();
    imageClone.onload = imageLoaded;
    imageClone.onerror = imageLoaded;
    imageClone.src = images[i].src;
  }

  function imageLoaded() {
    imagesLoadedCount++;
    percDispay.innerHTML = (100 / imagesTotalCount) * imagesLoadedCount;

    if (imagesLoadedCount >= imagesTotalCount) {
      setTimeout(() => {
        if (!preloader.classList.contains("done")) {
          preloader.classList.add("done");
        }
      }, 1000);
    }
  }
}
