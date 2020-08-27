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


const audioPlay = (sound) => {
    isPlaying ? sound.pause() : sound.play();
    sound.onplaying = function() {
    isPlaying = true;
    playButton.innerHTML = '<i class="fa fas fa-pause fa-2x"></i>'; 

    };
    sound.onpause = function() {
    sound.currentTime = 0;
    playButton.innerHTML = '<i class="fa fas fa-play fa-2x"></i>'; 
    isPlaying = false;
}};    


playButton.addEventListener('click', () => {
if(body.className === 'rain'){
audioPlay(rainSound);
}
else if(body.className === 'ocean'){
audioPlay(oceanSound);
}else {
audioPlay(forestSound);
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


