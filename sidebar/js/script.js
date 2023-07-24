

const ICON_MENU = document.getElementById('js-menu');
const ASIDE = document.getElementById('js-aside');
const BODY = document.getElementById('js-body');

ICON_MENU.addEventListener('click', () => {
    ASIDE.classList.toggle('js-scale-aside');
    BODY.classList.toggle('js-translate-body');
})



// ESCUCHAR EL EVENTO RESIZE
window.addEventListener('resize', () => {
    if (window.innerWidth < 760) {
        ASIDE.classList.add('js-scale-aside');
        BODY.classList.add('js-translate-body');
    } else {
        ASIDE.classList.remove('js-scale-aside');
        BODY.classList.remove('js-translate-body');
    }
})