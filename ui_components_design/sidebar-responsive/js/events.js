let lastClick = null;
// #Elementos
let sidebar = document.getElementById("js-sidebar");
let body = document.querySelector(".js-body");
let sublists = document.querySelectorAll('.c-sidebar__sublist');

// Seleccionar todos los botones de accordion
let btn_accordions = document.querySelectorAll(".js-accordion-btn");
btn_accordions.forEach((accordion_btn) => {
  accordion_btn.addEventListener("click", () => {
    // Seleccionar el icono de dropdown del boton de accordion (Este icono esta como ultimo hijo)
    let icon_dropdown = accordion_btn.lastElementChild;

    // Verificar si hay un último clic en un accordion_btn registrado
    if (lastClick) {
      if (lastClick === accordion_btn) {
        // Si se hizo clic en el mismo accordion botón
        if (lastClick.nextElementSibling.style.height === "0px") {
          icon_dropdown.classList.add("is-expanded");
        } else {
          icon_dropdown.classList.remove("is-expanded");
        }
      } else {
        // Si se hizo clic en un botón diferente
        lastClick.nextElementSibling.style = "height: 0px;";
        lastClick.lastElementChild.classList.remove("is-expanded");
        icon_dropdown.classList.toggle("is-expanded");
      }
    } else {
      // Si no hay un último clic registrado
      icon_dropdown.classList.toggle("is-expanded");
    }
    // Asignar el accordion_btn actul como lastClick
    lastClick = accordion_btn;

    let sublist = accordion_btn.nextElementSibling;
    let height = sublist.clientHeight === 0 ? sublist.scrollHeight : 0;
    let marginTop = sublist.clientHeight === 0 ? 0.25 : 0;

    // Aplicar estilos al sublist
    sublist.style = `height: ${height}px; margin-top: ${marginTop}rem`;

    if (!(sidebar.classList.contains('is-expanded')) && window.innerWidth > 760) {
      sidebar.classList.add('is-expanded')
      body.classList.add('is-translate')
    }
  });
});

// Gestionar estilos al hacer clic en enlaces de la barra lateral
let links = document.querySelectorAll(".c-sidebar__link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("is-active");
  });
  link.addEventListener("focusout", () => {
    link.classList.remove("is-active");
  });
});


// #ESCUCHAR EL EVENTO RESIZE
window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    sidebar.classList.add("is-visible");

    if (sidebar.classList.contains("is-expanded")) {
      sidebar.classList.remove("is-expanded");
      body.classList.remove("is-translate");
    }
  } else {
    sidebar.classList.remove("is-visible");
    body.classList.remove("is-translate");
  }
});

// #Expandir o collapsar Sidebar con el icono controlador
let sidebar_icon_control = document.querySelector(".js-sidebar__icon-control");
sidebar_icon_control.addEventListener("click", () => {
  sidebar.classList.toggle("is-expanded");
  body.classList.toggle("is-translate");

  btn_accordions.forEach((accordion_btn) => {
    let sublist = accordion_btn.nextElementSibling;
    if (sublist.clientHeight !== 0) {
      sublist.style = `height: 0px; margin-top: 0`;

      accordion_btn.lastElementChild.classList.remove('is-expanded')
    }

  })
});

/**
 * ================================
 */
// #Mostrar/ocultar la barra lateral
let menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  document.querySelector(".c-sidebar").classList.toggle("is-visible");
});
