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

      // определяет текущее положение скрола
      function currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
          return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) return document.body.scrollTop;
        return 0;
      }

      // определяет положение элемента
      function elmYPosition(eID) {
        let elm = document.getElementById(eID);
        let y = elm.offsetTop;
        let node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
          node = node.offsetParent;
          y += node.offsetTop;
        }
        return y;
      }

      // функция скролла
      function smoothScroll(eID) {
        let startY = currentYPosition();
        let stopY = elmYPosition(eID);
        let distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
          scrollTo(0, stopY);
          return;
        }
        let speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        let step = Math.round(distance / 25);
        let leapY = stopY > startY ? startY + step : startY - step;
        let timer = 0;
        if (stopY > startY) {
          for (let i = startY; i < stopY; i += step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY += step;
            if (leapY > stopY) leapY = stopY;
            timer++;
          }
          return;
        }
        for (let i = startY; i > stopY; i -= step) {
          setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
          leapY -= step;
          if (leapY < stopY) leapY = stopY;
          timer++;
        }
      }
      smoothScroll(eID);
    }
  }
}
