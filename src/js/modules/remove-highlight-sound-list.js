export default function removeHilghlightSoundList() {
    const sounds = document.querySelectorAll('.sound-list__item');

    sounds.forEach(el => {
        if (el.classList.contains('active-sound')) {
            el.classList.remove('active-sound');
        }
    });
}

