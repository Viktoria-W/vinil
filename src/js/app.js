import * as flsFunctions from "./modules/functions.js";

//функция проверки на Webp
flsFunctions.isWebp();

//класс для создания списка песен
import SoundList from "./modules/sound-list.js";


//sound-list
import { arrayHipHopList } from "./modules/hip-hop-list.js";
import { arrayPopList } from "./modules/pop-list.js";



//Анимация пластинки и нот

const recordBody = document.querySelector('.record__body');
const note = document.querySelectorAll('.note__img');
const noteList = document.querySelector('.note__container');
let audioArray = [
    '../files/sound/hip-hop/0-vinyl-record.mp3',
    '../files/sound/hip-hop/1-hip-hop-n-jazz.mp3',
    '../files/sound/hip-hop/3-session-joda-mstr.mp3',
    '../files/sound/hip-hop/4-all-i-need.mp3',
    '../files/sound/hip-hop/5-day-dreaming-andi-remix.mp3',
    '../files/sound/hip-hop/6-gone-get-it-n89man-remix.mp3',
    '../files/sound/hip-hop/7-wataboi-wake-up-ft-romy-dya.mp3',
];

//нажатие кнопок при клике и при касании с телефона
document.querySelector('.button-play').addEventListener("click", function () {
    play();
    playSound();
    showNote();
});

document.querySelector('.button-play').addEventListener("click", function () {
    new SoundList(arrayHipHopList);
}, { once: true });

document.querySelector(".button-stop").addEventListener("click", function () {
    stop();
    stopSound();
});

document.querySelector('.button-play').addEventListener("touchend", function () {
    play();
    playSound();
});

document.querySelector(".button-stop").addEventListener("touchend", function () {
    stop();
    stopSound();
});


document.getElementById('pop').addEventListener("click", () => {
    document.querySelector('.button-play').addEventListener("click", function () {
        play();
        playSound();
        showNote();
    });

    document.querySelector('.button-play').addEventListener("click", function () {
        new SoundList(arrayPopList);
    }, { once: true });
});




//функция появления нот

function showNote() {
    const note = document.querySelectorAll('.main__note');

    note.forEach(el => {
        if (el.classList.contains('hidden')) {
            el.classList.toggle('hidden');
        }
    });
}


//функция старт анимации
function play() {
    if (recordBody.classList.contains('record-rotate')) {
        recordBody.classList.remove('record-rotate');
        recordBody.classList.add('record-play');
    };

    //анимация нот
    for (let i = 0; i < note.length; i++) {
        note[i].classList.add('dance-scale');
    };

    setTimeout(function () {
        stop();
    }, 53250 * 20);//останавливаем анимацию при остановке песен
};

//Воспроизведение песен по очереди из массива
function playSound() {
    let player = document.getElementById('player');
    let current = 0;
    player.src = audioArray[0];
    player.onended = function () {
        current++;
        if (current >= audioArray.length) current = 0;
        player.src = audioArray[current];
        player.play();
    };

    setTimeout(function () {
        stopSound();
    }, 53250 * 20);//остановка песен после 17 минут 45 секунд
};


//функция остановки песен
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
