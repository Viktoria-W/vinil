export function startRecordAnimation() {
    const recordBody = document.querySelector('.record__body');

    if (recordBody.classList.contains('record-rotate')) {
        recordBody.classList.remove('record-rotate');
        recordBody.classList.add('record-play');
    };
};

export function stopRecordAnimation() {
    const recordBody = document.querySelector('.record__body');

    if (recordBody.classList.contains('record-play')) {
        recordBody.classList.remove('record-play');
        recordBody.classList.add('record-rotate');
    }
}