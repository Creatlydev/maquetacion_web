export const observer = (element) => {
  function handleResize() {
    const currentWidth = element.offsetWidth;
    if (currentWidth < 960) {
      document.getElementById('nav').style.display = 'none';
      document.querySelector('.icon').style.display = 'block';
    } else {
      document.getElementById('nav').style.display = 'block';
      document.querySelector('.icon').style.display = 'none';
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
