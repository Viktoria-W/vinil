export default function hiddenInactiveButton() {
    const headerButton = document.querySelectorAll('.header__button');

    headerButton.forEach(el => {
        if (el.classList.contains('active-button')) {
            el.classList.remove('active-button')
        }
    });
}