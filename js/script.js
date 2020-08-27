const dropBtn = document.querySelector('#dropBtn');
const dropContent = document.querySelectorAll('.dropContent');
const body = document.querySelector('body');
const ocean = document.querySelector('#ocean');
const rain = document.querySelector('#rain');
const forest = document.querySelector('#forest');


// /PLAY AUDIO/
const rainSound = new Audio('./audio/rain.ogg');
const oceanSound = new Audio('./audio/oceansgull.mp3');
const forestSound = new Audio('./audio/night2.mp3');
const playButton = document.querySelector('#playButton');
var isPlaying = false;

playButton.addEventListener('click', () => {
if(body.className === 'rain'){
        isPlaying ? rainSound.pause() : rainSound.play();
    rainSound.onplaying = function() {
    isPlaying = true;
    };
    rainSound.onpause = function() {
    rainSound.currentTime = 0;  
    isPlaying = false;
};
}
else if(body.className === 'ocean'){
        isPlaying ? oceanSound.pause() : oceanSound.play();
    oceanSound.onplaying = function() {
    isPlaying = true;
    };
    oceanSound.onpause = function() {
    oceanSound.currentTime = 0;  
    isPlaying = false;
};
}else {
        isPlaying ? forestSound.pause() : forestSound.play();
    forestSound.onplaying = function() {
    isPlaying = true;
    };
    forestSound.onpause = function() {
    forestSound.currentTime = 0;  
    isPlaying = false;
};
}

})


// DROP BUTTON
dropBtn.addEventListener('click', function() {
    document.querySelector('.dropContent').classList.toggle('show');
})

ocean.addEventListener('click', function() {
	body.className = 'ocean';
    rainSound.pause();
    forestSound.pause();
}
)

rain.addEventListener('click', function() {
	body.className = 'rain';
    oceanSound.pause();
    forestSound.pause();
}
)

forest.addEventListener('click', function() {
	body.className = 'forest';
    oceanSound.pause();
    rainSound.pause();
}
)


window.onclick = function(event) {
    if (!event.target.matches('#dropBtn')) {
        dropContent.forEach(e => {
            if (e.classList.contains('show')) {
                e.classList.remove('show');
            }
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