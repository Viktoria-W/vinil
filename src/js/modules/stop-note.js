export default function stopNote() {
    const note = document.querySelectorAll('.note__img');
    
    for (let i = 0; i < note.length; i++) {
        note[i].classList.remove('dance-scale');
    }
}