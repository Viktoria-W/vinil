export default function startRecordAnimation() {
    const recordBody = document.querySelector('.record__body');

    if (recordBody.classList.contains('record-rotate')) {
        recordBody.classList.remove('record-rotate');
        recordBody.classList.add('record-play');
    };
};