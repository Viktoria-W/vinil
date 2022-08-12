export function showNote() {
    const note = document.querySelectorAll('.main__note');

    note.forEach(el => {
        if (el.classList.contains('hidden')) {
            el.classList.toggle('hidden');
        }
    });
}

export function moveNote() {
    const note = document.querySelectorAll('.note__img');

    for (let i = 0; i < note.length; i++) {
        note[i].classList.add('dance-scale');
    };
}

export function stopNote() {
    const note = document.querySelectorAll('.note__img');
    
    for (let i = 0; i < note.length; i++) {
        note[i].classList.remove('dance-scale');
    }
}


