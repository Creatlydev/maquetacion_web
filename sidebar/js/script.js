

const ICON_MENU = document.getElementById('js-menu');
const ASIDE = document.getElementById('js-aside');
const BODY = document.getElementById('js-body');
const ICON_COLLAPSE = document.getElementById('js-icon-collape-aside');

ICON_MENU.addEventListener('click', () => {
    ASIDE.classList.toggle('c-aside--visible');
})

ICON_COLLAPSE.addEventListener('click', () => {
    ASIDE.classList.toggle('c-aside--expand')
    BODY.classList.toggle('c-body--translate')
})

// ESCUCHAR EL EVENTO RESIZE
window.addEventListener('resize', () => {
    if (window.innerWidth > 760) {
        ASIDE.classList.add('c-aside--visible');
        if (ASIDE.classList.contains('c-aside--expand')) {
            ASIDE.classList.remove('c-aside--expand')
            BODY.classList.remove('c-body--translate');
        }
    } else {
        ASIDE.classList.remove('c-aside--visible');
        BODY.classList.remove('c-body--translate');
    }
})




 