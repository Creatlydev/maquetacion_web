const MENU = document.getElementById("js-menu-content");
const ICON_MENU = document.getElementById("js-menu");
const ASIDE = document.getElementById("js-aside");
const BODY = document.getElementById("js-body");
const ICON_COLLAPSE = document.getElementById("js-icon-collape-aside");

ICON_MENU.addEventListener("click", () => {
  ASIDE.classList.toggle("c-aside--visible");
  // Agregar clase a al container del menu__icon para agregar transicion
  MENU.classList.toggle('c-menu--is-open');
});

ICON_COLLAPSE.addEventListener("click", () => {
  ASIDE.classList.toggle("c-aside--expand");
  BODY.classList.toggle("c-body--translate");

  if (ICON_COLLAPSE.classList.contains("bx-expand-horizontal")) {
    ICON_COLLAPSE.classList.replace(
      "bx-expand-horizontal",
      "bx-collapse-horizontal"
    );
  } else {
    ICON_COLLAPSE.classList.replace(
      "bx-collapse-horizontal",
      "bx-expand-horizontal"
    );
  }
});

// ESCUCHAR EL EVENTO RESIZE
window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    ASIDE.classList.add("c-aside--visible");

    if (ASIDE.classList.contains("c-aside--expand")) {
      ASIDE.classList.remove("c-aside--expand");
      BODY.classList.remove("c-body--translate");
      ICON_COLLAPSE.classList.replace(
        "bx-collapse-horizontal",
        "bx-expand-horizontal"
      );
    }
  } else {
    ASIDE.classList.remove("c-aside--visible");
    BODY.classList.remove("c-body--translate");
    MENU.classList.remove('c-menu--is-open')
  }
});
