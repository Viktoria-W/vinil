export default function moveNote() {
    const note = document.querySelectorAll('.note__img');

    for (let i = 0; i < note.length; i++) {
        note[i].classList.add('dance-scale');
    };
}