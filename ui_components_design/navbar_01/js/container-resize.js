export const observer = (element) => {
  function handleResize() {
    const currentWidth = element.offsetWidth;
    let navbar = document.querySelector(".nav");
    let navbar_content = document.querySelector(".nav__content");
    let icon_menu = document.querySelector(".icon-menu");
    if (currentWidth < 960) {
      icon_menu.style.display = "block";

      navbar.style.cssText = `
      width             : 100%;
      max-width         : 250px;
      position          : absolute;
      z-index           : 1;
      top               : 0;
      right             : 0;
      box-shadow        : 0px 25px 80px rgba(0, 0, 0, 0.15);
      background-color  : var(--color-bg);
      border-radius     : .25rem;
      min-height        : 90vh;
      transform         : translateX(102%);
      transition        : transform 200ms;
      `;

      navbar_content.style.cssText = `
      align-items     : flex-start;
      flex-direction  : column;
      padding         : 1.5rem;
      `;
    } else {
      icon_menu.style.display = "none";
      navbar.style.cssText = `
        width             : initial;
        max-width         : initial;
        position          : static;
        min-height        : auto;
        transform         : unset;
        background-color  : transparent;
        box-shadow        : unset;
      `;

      navbar_content.style.cssText = `
        align-items     : center;
        flex-direction  : row;
        padding         : 0;
      `;
    }
  }

  // Agrega un evento de redimensionamiento específicamente para el div
  let resizeObserver;
  if (window.ResizeObserver) {
    resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(element);
  } else {
    window.addEventListener("resize", handleResize);
  }
};

export const event_press = (container) => {
  window.addEventListener("keyup", function (event) {
    let width_container = container.offsetWidth;
    console.log(`width ${width_container}`);
    if (width_container <= 1140 && width_container >= 360) {
      if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
        // Se ha presionado una tecla de flecha
        if (event.code === "ArrowLeft") {
          if (width_container > 360) {
            container.style.width =
              width_container !== 960
                ? width_container - 180 + "px"
                : width_container - 240 + "px";
          }
        } else {
          container.style.width =
            width_container !== 720
              ? width_container + 180 + "px"
              : width_container + 240 + "px";
        }
      }
    }
  });
};
