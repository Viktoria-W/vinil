import * as flsFunctions from "./modules/functions.js";

//функция проверки на Webp
flsFunctions.isWebp();



//Анимация пластинки и нот
const recordBody = document.querySelector('.record__body');
const note = document.querySelectorAll('.note__img');
const noteList = document.querySelector('.note__container');


//нажатие кнопок
document.querySelector('.button-play').addEventListener("click", function () {
    play();
});
document.querySelector(".button-stop").addEventListener("click", function () {
    stop();
});

//функция старт
function play () {
    if (recordBody.classList.contains('record-rotate')) {
        recordBody.classList.remove('record-rotate');
        recordBody.classList.add('record-play');
    }
//анимация нот
    for (let i = 0; i < note.length; i++) {
        note[i].classList.add('dance-scale');
    }
}

//функция стоп
function stop () {
    if (recordBody.classList.contains('record-play')) {
        recordBody.classList.remove('record-play');
        recordBody.classList.add('record-rotate');
    }
//остановка анимации нот
    for (let i = 0; i < note.length; i++) {
        note[i].classList.remove('dance-scale');
    }
}