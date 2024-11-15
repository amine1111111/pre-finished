hzScroll();
function hzScroll() {
  const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
