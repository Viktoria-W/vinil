export default function stopRecordAnimation() {
    const recordBody = document.querySelector('.record__body');

    if (recordBody.classList.contains('record-play')) {
        recordBody.classList.remove('record-play');
        recordBody.classList.add('record-rotate');
    }
}