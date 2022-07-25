export default function showActiveButtonType() {
    const buttons = document.querySelectorAll('.header__button');

    buttons.forEach(el => function(event) {
        const target = el.event.target;

        console.log(target)
    });
}