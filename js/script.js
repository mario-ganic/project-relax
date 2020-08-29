const dropBtn = document.querySelector('#dropBtn');
const dropContent = document.querySelectorAll('.dropContent');
const body = document.querySelector('body');
const ocean = document.querySelector('#ocean');
const rain = document.querySelector('#rain');
const forest = document.querySelector('#forest');






// ADD QUOTES








// /PLAY AUDIO/
const rainSound = new Audio('./audio/rain.ogg');
const oceanSound = new Audio('./audio/oceansgull.mp3');
const forestSound = new Audio('./audio/night2.mp3');
const playButton = document.querySelector('#playButton');
var isPlaying = false;


const audioPlay = (sound) => {
    isPlaying ? sound.pause() : sound.play();
    sound.onplaying = function() {
        isPlaying = true;
        playButton.innerHTML = '<i class="fa fas fa-pause fa-4x"></i>';

    };
    sound.onpause = function() {
        sound.currentTime = 0;
        playButton.innerHTML = '<i class="fa fas fa-play fa-4x"></i>';
        isPlaying = false;
    }
};


playButton.addEventListener('click', () => {
    if (body.className === 'rain') {
        audioPlay(rainSound);
    } else if (body.className === 'ocean') {
        audioPlay(oceanSound);
    } else {
        audioPlay(forestSound);
    }
})


// DROP BUTTON
dropBtn.addEventListener('click', function() {
    document.querySelector('.dropContent').classList.toggle('show');
})



function stopSound(...args) {
    for (var i = 0; i < args.length; i++) {
        args[i].pause();
    }
}

ocean.addEventListener('click', function() {
    body.className = 'ocean';
    stopSound(rainSound, forestSound);
})

rain.addEventListener('click', function() {
    body.className = 'rain';
    stopSound(oceanSound, forestSound);
})

forest.addEventListener('click', function() {
    body.className = 'forest';
    stopSound(oceanSound, rainSound);
})




window.onclick = function(event) {
    if (!event.target.matches('#dropBtn')) {
        dropContent.forEach(e => {
            e.classList.remove('show')

        })
    }
}



// const container = document.querySelector('.container');
// const text = document.querySelector('#text');

// const totalTime = 7500;
// const breatheTime = (totalTime / 5) * 2;
// const holdTime = totalTime / 5;


// breathAnimation();


// function breathAnimation () {
//     text.innerHTML = 'Breathe In';
//     container.className = 'container grow';

//     setTimeout(() => {
//         text.innerText = 'Hold in';

//         setTimeout(() => {
//             text.innerText = 'Breathe Out'
//             container.className = 'container shrink';
//         }, holdTime);

//     }, breatheTime)
// }


// setInterval(breathAnimation, totalTime);