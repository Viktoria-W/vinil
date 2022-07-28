export default function removeSoundList() {
    let parentElement = document.querySelector('.sound-list');
    let childElement = document.querySelector('.sound-list__container')
    parentElement.removeChild(childElement);
}