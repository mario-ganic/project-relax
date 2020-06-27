const dropBtn = document.querySelector('#dropBtn');
const dropContent = document.querySelectorAll('.dropContent');

dropBtn.addEventListener('click', function() {
    document.querySelector('.dropContent').classList.toggle('show');
})



window.onclick = function(event) {
    if (!event.target.matches('#dropBtn')) {
        dropContent.forEach(e => {
            if (e.classList.contains('show')) {
                e.classList.remove('show');
            }
        })
		}
}


// window.onclick = function(event) {
//   if (event.target.matches('#dropBtn')) {
//     dropContent.classList.toggle('show');
//   }
//   else{
//   	dropContent.classList.remove('show');
//   }

// } 
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