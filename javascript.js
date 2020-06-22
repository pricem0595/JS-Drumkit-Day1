var map = new Map();
onkeydown = onkeyup = function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (audio){
        map.set(e.keyCode, e.type == 'keydown');
    } else return;
    map.forEach((value, key) => {
        const currentKey = document.querySelector(`.key[data-key="${key}"]`);
        if (value == true) {
            audio.currentTime=0;
            audio.play();
            currentKey.classList.add('playing');
        } else {
            currentKey.classList.remove('playing');
        };
    });
};