$(document).ready(() => {
  $(".slider__slide-list").slick({
    prevArrow: $(".slider__controls-btn--prev"),
    nextArrow: $(".slider__controls-btn--next"),
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false
        }
      }
    ]
  });

  const linksWithPopup = document.querySelectorAll(
    ".nav__link-item[aria-haspopup='true']"
  );
  const sublinksWithPopupSelector = ".nav__sub-link-item[aria-haspopup='true']";

  function closeSubmenus(links) {
    links.forEach(link => {
      link.setAttribute("aria-expanded", "false");

      closeSubmenus(
        link.nextElementSibling.querySelectorAll(sublinksWithPopupSelector)
      );
    });
  }

  function popupHandler(link) {
    link.addEventListener("click", function() {
      const alreadyExpanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", alreadyExpanded ? "false" : "true");

      if (alreadyExpanded) {
        closeSubmenus(
          link.nextElementSibling.querySelectorAll(sublinksWithPopupSelector)
        );
      }
    });
  }

  function attachMenuExpandHandlers(links) {
    links.forEach(link => {
      popupHandler(link);

      attachMenuExpandHandlers(
        link.nextElementSibling.querySelectorAll(sublinksWithPopupSelector)
      );
    });
  }

  attachMenuExpandHandlers(linksWithPopup);
});
