import removeHilghlightSoundList from "./remove-highlight-sound-list.js";
import stopRecordAnimation from "./record-animation.js";

export default function playSound(array) {
    let player = document.getElementById('player');
    let current = 0;
    player.src = array[0];


    player.onended = function () {
        const sounds = document.querySelectorAll('.sound-list__item');
        current++;
        if (current >= array.length) current = 0;
        player.src = array[current];
        player.play();
        removeHilghlightSoundList();

        //подсвечивать песни в листе
        switch (current) {
            case 1: sounds[1].classList.add('active-sound'); break;
            case 2: sounds[2].classList.add('active-sound'); break;
            case 3: sounds[3].classList.add('active-sound'); break;
            case 4: sounds[4].classList.add('active-sound'); break;
            case 5: sounds[5].classList.add('active-sound'); break;
            case 6: sounds[6].classList.add('active-sound'); break;
            case 7: sounds[7].classList.add('active-sound'); break;
        }

        if (current === 0) {
            player.pause();
            stopRecordAnimation();

            //остановить движение нот в конце массива
            const note = document.querySelectorAll('.note__img');
            note.forEach(el => {
                el.classList.remove('dance-scale')
            });
        };
    };
};