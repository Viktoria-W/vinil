export default function playSound(array) {
    let player = document.getElementById('player');
    let current = 0;
    player.src = array[0];

    player.onended = function () {
        current++;
        
        if (current >= array.length) current = 0;
            player.src = array[current];
            player.play();

        if (current === 0){
            player.pause();  
        };
    };
};