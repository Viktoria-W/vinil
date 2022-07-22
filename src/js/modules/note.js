export default function showNote() {
    const note = document.querySelectorAll('.main__note');

    note.forEach(el => {
        if (el.classList.contains('hidden')) {
            el.classList.toggle('hidden');
        }
    });
}




