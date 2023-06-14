

export const click_button_dropdown = () => {
    let button = document.querySelector('.nav__item--dropdown');

    let dropdown = document.querySelector('.nav__dropdown');
    button.addEventListener('click', () => { 
        dropdown.classList.toggle('nav__dropdown--open');
    })

    button.addEventListener('focusout', () => {
        dropdown.classList.remove('nav__dropdown--open');
    })
}