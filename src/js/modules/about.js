import createElement from "./create-element.js";

export default class About {
    #elem

    constructor(object) {
        this.object = object;
        this.template = this.#template();
        this.#elem =  this.render();
    }

    render() {
        const aboutSection = document.querySelector('.about');

        return aboutSection.append(this.template);
    }

    #template() {
        return createElement(
            `
            <h1 class = "about__title">${this.object.title}</h1>s
            `
        );
    }
}