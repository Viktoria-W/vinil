import createElement from "./create-element.js";

export default class SoundList {
    #elem

    constructor(list) {
        this.list = list;
        this.template = this.#templateSoundList();
        this.#elem = this.render();
    }

    render() {
        const soundListSection = document.querySelector('.main__sound-list');

        return soundListSection.append(this.template);
    }

    #templateSoundList() {
        return createElement(
            `
            <div class="sound-list__container container">
                <ul class="sound-list__list">
                    <li class="sound-list__item title">Sound-list:</li>
                    ${this.list.map(el => `<li class="sound-list__item">${el}</li>`).join(' ')}
                </ul>
            </div>
        `
        );
    }
}