export default function blogArticle() {
  window.onscroll = function() {
    let list = document.querySelector(".post__list");
    let items = list.children;
    let blogList = document.querySelector(".blog-menu__list");
    let blogItems = blogList.children;
    const height = document.documentElement.clientHeight / 2;
    for (let i = 0; i < items.length; i++) {
      if (height > items[i].getBoundingClientRect().top) {
        for (let j = 0; j < blogItems.length; j++) {
          blogItems[j].classList.remove("blog-menu__item_active");
        }
        blogItems[i].classList.add("blog-menu__item_active");
      }
    }
  };
}
