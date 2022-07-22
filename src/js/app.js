
import * as flsFunctions from "./modules/functions.js";

//функция проверки на Webp
flsFunctions.isWebp();

//класс для создания списка песен
import SoundList from "./modules/sound-list.js";


//sound-list
import { arrayHipHopList } from "./modules/hip-hop-list.js";
import { arrayPopList } from "./modules/pop-list.js";


//импорт массивов песен
import { audioHipHopArray } from "./modules/hip-hop-array.js";
import { audioPopArray } from "./modules/pop-array.js";


//импорт функции воспроизведения
import playSound from "./modules/function-play-sound.js";

//импорт функций нот
import showNote from "./modules/note.js";
import moveNote from "./modules/move-note.js";


//Анимация пластинки и нот
const recordBody = document.querySelector('.record__body');


//воспроизведение по умолчанию (хип-хоп)
document.querySelector('.button-play').addEventListener("click", function () {
    play();
    playSound(audioHipHopArray);
    showNote();
    moveNote();
});

document.querySelector('.button-play').addEventListener("click", function () {
    new SoundList(arrayHipHopList);
}, { once: true });

document.querySelector(".button-stop").addEventListener("click", function () {
    stop();
    stopSound();
});


//хип-хоп лист воспроизведение
document.getElementById('hip-hop').addEventListener('click', ()=> {
    document.querySelector('.button-play').addEventListener('click', () => {
        play();
        playSound(audioHipHopArray);
        showNote();
    });

    document.querySelector('.button-play').addEventListener('click', () => {
        removeSoundList();
        new SoundList(arrayHipHopList);
    });
});



//поп лист воспроизведение
document.getElementById('pop').addEventListener("click", () => {
    document.querySelector('.button-play').addEventListener("click", function () {
        play();
        playSound(audioPopArray);
        showNote();
    });

    document.querySelector('.button-play').addEventListener("click", function () {
        removeSoundList();
        new SoundList(arrayPopList);
    }, { once: true });
});











//функция удаление списка песен при переключении
function removeSoundList() {
    let parentElement = document.querySelector('.sound-list');
    let childElement = document.querySelector('.sound-list__container')

    parentElement.removeChild(childElement);
}



//функция старт анимации
function play() {
    if (recordBody.classList.contains('record-rotate')) {
        recordBody.classList.remove('record-rotate');
        recordBody.classList.add('record-play');
    };

    // setTimeout(function () {
    //     stop();
    // }, 53250 * 20);//останавливаем анимацию при остановке песен
};


function stopSound() {
    let player = document.getElementById('player');
    player.pause();
};

//функция стоп анимации
function stop() {
    if (recordBody.classList.contains('record-play')) {
        recordBody.classList.remove('record-play');
        recordBody.classList.add('record-rotate');
    }
    //остановка анимации нот
    for (let i = 0; i < note.length; i++) {
        note[i].classList.remove('dance-scale');
    }
}
