export const observer = (element) => {
  function handleResize() {
    const currentWidth = element.offsetWidth;
    if (currentWidth < 960) {
      document.getElementById("nav").style.display = "none";
      document.querySelector(".icon").style.display = "block";
    } else {
      document.getElementById("nav").style.display = "block";
      document.querySelector(".icon").style.display = "none";
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
