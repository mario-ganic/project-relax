const dropBtn = document.querySelector('#dropBtn');
const dropContent = document.querySelectorAll('.dropContent');
const body = document.querySelector('body');
const ocean = document.querySelector('#ocean');
const rain = document.querySelector('#rain');
const forest = document.querySelector('#forest');


// /PLAY AUDIO/
const rainSound = new Audio('./audio/rain.ogg');
const playButton = document.querySelector('#playButton');
var isPlaying = false;

playButton.addEventListener('click', () => {
    isPlaying ? rainSound.pause() : rainSound.play();
    rainSound.onplaying = function() {
  isPlaying = true;
};
rainSound.onpause = function() {
  rainSound.currentTime = 0;  
  isPlaying = false;
};
})


// DROP BUTTON
dropBtn.addEventListener('click', function() {
    document.querySelector('.dropContent').classList.toggle('show');
})

ocean.addEventListener('click', function() {
	body.className = 'ocean';
}
)

rain.addEventListener('click', function() {
	body.className = 'rain';
}
)

forest.addEventListener('click', function() {
	body.className = 'forest';
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