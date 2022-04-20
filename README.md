# Vinyl record player
## :open_file_folder: Проект: 
Виниловый проигрыватель с хип-хоп пластинкой в браузере

<img src="https://github.com/Viktoria-W/vinil/blob/master/src/files/img/gif.gif" width="50%" alt="Vinil">


## :computer: Технологии: 
**HTML5, SCSS, JS**
## :package: Сборка: 
<img src="https://github.com/devicons/devicon/blob/master/icons/gulp/gulp-plain.svg" width="35px" alt="Gulp">Gulp
## :paperclip: Link:
https://viktoria-w.github.io/vinil/


Файлы исходники находятся на основной ветке main, дополнительная ветка page cодержит в себе конечные файлы папки dist/ и опубликованный сайт через Git Page.
## :star: Особенности: 
* **Визуальная часть:**


Проигрыватель грампластинок размечен через блоки div содержащие тег span для отрисовки элементов. Элементы проигрывателя делятся на 3 составляющее: корпус, пластинка и игла. Вторичные элементы спозиционированы относительно этих составляющих.
```
	<div class="corpus__right-side">
		<span></span>
	</div>

```
```
&__right-side {
        position: relative;

        & span {
            display: block;
            width: 273px;
            height: 130px;
            background: #4D220E url("../img/wood.svg") center / cover no-repeat;
            transform: skewY(340deg);
            position: absolute;
            top: -50px;
            left: 464px;
        }
        
    }

```
<img src="https://github.com/Viktoria-W/vinil/blob/master/src/files/img/right-side-min.jpg" alt="Side record">


* Используются медиа-запросы для перестройки положений элементов проигрывателя. Основные точки вьпортов:
  * laptop: 1024px;
  * laptop-m: 1280px;
  * tablet: 768px;
  * mobile-l: 425px;
  * mobile-m: 375px;
  * mobile-s: 320px;

* На минимальной ширине 320px проигрыватель выходит за пределы экрана, это допустимая погрешность для того, что бы сайт был более доступен, при полном показе проигрывателя теряется доступность кнопок "play" и "stop".

* **Механика работы проигрывателя:**

При нажатии на кнопку "play" вызывается 2 функции:

Первая функция play() меняет классы на статичных элементах(пластинка, ноты), добавляя им классы анимации прописанной в css, она так же содержит внутри функцию setTimeout которая останавливает работу функции play() через 17 минут 45 секунд, вызывая функцию stop(), которая меняет классы обратно на статичные (время работы функции известно заранее так как массив песен имеет ограниченное количество треков).
```
function play () {
    if (recordBody.classList.contains('record-rotate')) {
        recordBody.classList.remove('record-rotate');
        recordBody.classList.add('record-play');
    };
//анимация нот
    for (let i = 0; i < note.length; i++) {
        note[i].classList.add('dance-scale');
    };

    setTimeout( function() {
        stop();
    }, 53250 * 20);//останавливаем анимацию при остановке песен
};
```

Вторая функция playSound() при нажатии на кнопку, обращается к тегу, создает счетчик и обращается к нулевому элементу массива песен, воспроизводит его и повторяет это со всеми элементами массива в бесконечном цикле. Функция playSound() так же содержит функцию setTimeout которая ставит на паузу массив через указанное время.
```
//Воспроизведение песен по очереди из массива
function playSound() {
    let player = document.getElementById('player');
    let current = 0;
    player.src = audioArray[0];
    player.onended = function() {
        current++;
        if (current >= audioArray.length) current = 0;
        player.src = audioArray[current];
        player.play();
    };

    setTimeout( function() {
        stopSound();
    }, 53250 * 20);//остановка песен после 17 минут 45 секунд
};
```
Функция stop () и stopSound() так же вызываются при нажатии на кнопку "stop".

* **Сайт тестировался с помощью iloveadaptive.com**

<img src="https://github.com/Viktoria-W/vinil/blob/master/src/files/img/adaptive-min.jpg" alt="Adaptive">

* **Проверка на PageSpeed Insights:**


<img src="https://github.com/Viktoria-W/vinil/blob/master/src/files/img/speed-min.jpg" alt="Speed">


* **Архитектура исходных файлов проекта:**

<img src="https://github.com/Viktoria-W/vinil/blob/master/src/files/img/dependencies-min.jpg" alt="Architecture">

***
## :open_file_folder: Project: 
Vinyl player with a hip-hop record in the browser

<img src="https://github.com/Viktoria-W/vinil/blob/master/src/files/img/gif.gif" width="50%" alt="Vinil">


## :computer: Technologies: 
**HTML5, SCSS, JS**
## :package: Assembly: 
<img src="https://github.com/devicons/devicon/blob/master/icons/gulp/gulp-plain.svg" width="35px" alt="Gulp">Gulp

## :paperclip: Link:
https://viktoria-w.github.io/vinil/

## :star: Peculiarities: 
* **The visual part:**

* The record player is marked up through div blocks containing the span tag for drawing elements. The elements of the player are divided into 3 components: the case, the plate and the needle. The secondary elements are positioned relative to these components.

```
	<div class="corpus__right-side">
		<span></span>
	</div>

```
```
&__right-side {
        position: relative;

        & span {
            display: block;
            width: 273px;
            height: 130px;
            background: #4D220E url("../img/wood.svg") center / cover no-repeat;
            transform: skewY(340deg);
            position: absolute;
            top: -50px;
            left: 464px;
        }
        
    }

```

<img src="https://github.com/Viktoria-W/vinil/blob/master/src/files/img/right-side-min.jpg" alt="Side record">


* Media queries are used to rearrange the positions of the player elements. The main points of the ports:
  * laptop: 1024px;
  * laptop-m: 1280px;
  * tablet: 768px;
  * mobile-l: 425px;
  * mobile-m: 375px;
  * mobile-s: 320px;

* At a minimum width of 320px, the player goes beyond the screen, this is an acceptable error in order for the site to be more accessible, when the player is fully displayed, the accessibility of the "play" and "stop" buttons is lost.

* **The mechanics of the player:**

When you click on the "play" button, 2 functions are called:

The first function play() changes classes on static elements (plate, sheet music), adding animation classes written in css to them, it also contains a setTimeout function inside that stops the play() function after 17 minutes 45 seconds, calling the stop() function, which changes classes back to static (function running time it is known in advance since the array of songs has a limited number of tracks).
```
function play () {
    if (recordBody.classList.contains('record-rotate')) {
        recordBody.classList.remove('record-rotate');
        recordBody.classList.add('record-play');
    };
//анимация нот
    for (let i = 0; i < note.length; i++) {
        note[i].classList.add('dance-scale');
    };

    setTimeout( function() {
        stop();
    }, 53250 * 20);//останавливаем анимацию при остановке песен
};
```
The second function PlaySound(), when the button is clicked, accesses the tag, creates a counter and accesses the zero element of the array of songs, plays it and repeats it with all the elements of the array in an infinite loop. The PlaySound() function also contains the setTimeout function, which pauses the array after a specified time.
```
//Воспроизведение песен по очереди из массива
function playSound() {
    let player = document.getElementById('player');
    let current = 0;
    player.src = audioArray[0];
    player.onended = function() {
        current++;
        if (current >= audioArray.length) current = 0;
        player.src = audioArray[current];
        player.play();
    };

    setTimeout( function() {
        stopSound();
    }, 53250 * 20);//остановка песен после 17 минут 45 секунд
};
```
The stop() and stopSound() functions are also called when the "stop" button is pressed.

* **Tested with iloveadaptive.com:**

<img src="https://github.com/Viktoria-W/vinil/blob/master/src/files/img/adaptive-min.jpg" alt="Adaptive">

* **Checking for PageSpeed Insights:**


<img src="https://github.com/Viktoria-W/vinil/blob/master/src/files/img/speed-min.jpg" alt="Speed">

* **Architecture of project source files:**

<img src="https://github.com/Viktoria-W/vinil/blob/master/src/files/img/dependencies-min.jpg" alt="Architecture">

