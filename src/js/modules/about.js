import createElement from "./create-element.js";

export default class About {
    #elem

    constructor(object) {
        this.object = object;
        this.template = this.#template();
        this.#elem = this.render();
    }

    render() {
        const aboutSection = document.querySelector('.about');

        return aboutSection.append(this.template);
    }

    translate(object) {
        const aboutTitle = document.querySelector('.about__title');
        const vinylTitle = document.querySelector('.vinyl__title');
        const vinylText = document.querySelector('.vinyl__text');
        const optionsTitle = document.querySelector('.options__title');
        const optionsText = document.querySelector('.options__text');
        const styleTitle = document.querySelector('.style__title');
        const styleText = document.querySelector('.style__text');
        const resultTitle = document.querySelector('.result__title');
        const resultText = document.querySelector('.result__text');
        const prototypeTitle = document.querySelector('.prototype__title');
        const prototypeText = document.querySelector('.prototype__text');

        aboutTitle.innerHTML = object.titleAbout;
        vinylTitle.innerHTML = object.titleVinyl;
        vinylText.innerHTML = object.textVinyl;
        optionsTitle.innerHTML = object.titleOptions;
        optionsText.innerHTML = object.textOptions;
        styleTitle.innerHTML = object.titleStyle;
        styleText.innerHTML = object.textStyle;
        resultTitle.innerHTML = object.titleResult;
        resultText.innerHTML = object.textResult;
        prototypeTitle.innerHTML = object.titlePrototype;
        prototypeText.innerHTML = object.textPrototype;
    }

    #template() {
        return createElement(
            `
            <div class="about__wrapper">
                <div class = "about__title title">${this.object.titleAbout}</div>
                <div class ="about__button-block">
                    <button type ="button" class ="about__button" id ="en">En</button>
                    <button type ="button" class ="about__button" id ="ru">Ru</button>
                </div>
                <div class="about__vinyl vinyl">
                    <div class ="vinyl__container container">
                        <h3 class="vinyl__title title">${this.object.titleVinyl}</h3>
                        <div class="vinyl__text-container">
                            <p class="vinyl__text text">${this.object.textVinyl}</p>
                        </div>
                    </div>
                </div>
                <div class="about__options options">
                    <div class ="options__img-block"></div>
                    <div class ="options__container container">
                        <h3 class="options__title title">${this.object.titleOptions}</h3>
                        <div class="options__text-container">
                            <p class="options__text text">${this.object.textOptions}</p>
                        </div>
                    </div>
                </div>
                <div class="about__style style">
                    <div class ="style__img-block"></div>
                    <div class ="style__container container">
                        <h3 class="style__title title">${this.object.titleStyle}</h3>
                            <div class ="style__text-wrapper">
                                <p class="style__text text">${this.object.textStyle}</p>
                            </div>
                    </div>
                </div>
                <div class="about__result result">
                    <div class ="result__container container">
                        <h3 class="result__title title">${this.object.titleResult}</h3>
                        <div class="result__text-container">
                            <div class ="result__text-wrapper">
                                <p class="result__text text">${this.object.textResult}</p>
                            </div>
                            <div class ="result__img-block">
                                <img src="../../img/vinyl-result.jpg" alt="Vinyl record" class = "result__img">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about__prototype prototype">
                    <div class ="prototype__container container">
                        <h3 class="prototype__title title">${this.object.titlePrototype}</h3>
                        <div class="prototype__text-container">
                            <p class="prototype__text text">${this.object.textPrototype}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
        );
    }
}