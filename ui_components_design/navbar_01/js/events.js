

export const open_navbar = () => {
    let icon_menu= document.querySelector('.icon-menu__content')
    let navbar= document.querySelector('.nav')

    icon_menu.addEventListener('click', () => {
        navbar.classList.toggle('nav--open')
    })
}