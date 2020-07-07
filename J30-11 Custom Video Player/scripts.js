const mainBox = document.querySelector('.player');
const toggleBtnIcon = document.querySelector('.player__button');
const video = document.querySelector('.player__video');
const inputRanges = document.querySelectorAll('input');
const skipBtns = document.querySelectorAll('[data-skip]');
const progress = document.querySelector('.progress__filled');
const progressContainer =  document.querySelector('.progress');
const fullShrinkVideo = document.querySelector('[data-fullVideo]')
let mouseDown = false;





function playOrPauseFn(e) {
//    if (video.paused) {
//        video.play();
//    } else {
//        video.pause();
//    }

   video.paused ? video.play() : video.pause();
}


function changePlayBtnIcon(e) { //监控状态
    const icon = this.paused ? '►' : '❚ ❚'
    toggleBtnIcon.textContent = icon;
}


function changeVideoAudioRate(e) {
   console.log(this)
   console.log(this.name)
   console.log(typeof(this.name))
   console.log(this.value)
   video[this.name] = this.value;
}


function skipFn(e) {
    console.log(e);
    console.log(`this => ${this}`)
    console.log(`this.dataset.skip =>  ${this.dataset.skip}`)
    console.log(`video.currentTime =>  ${video.currentTime}`)
    video.currentTime += parseFloat(this.dataset.skip);
}


function progressBar(e) {
    const time =  (video.currentTime / video.duration) * 100;
    progress.style.flexBasis = `${time}%`;
}


function drag(e) {
    const dragTime = (e.offsetX / progressContainer.offsetWidth) * video.duration;
    video.currentTime = dragTime; 
}

function changeFullShrinkFn() {
    if (video.requestFullscreen) {
       video.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        video.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
      }
}

function changeFullShrinkIcon() {
   
}


fullShrinkVideo.addEventListener('click',changeFullShrinkFn)
fullShrinkVideo.addEventListener('click', changeFullShrinkIcon)

toggleBtnIcon.addEventListener('click', playOrPauseFn);
video.addEventListener('click', playOrPauseFn);
video.addEventListener('play', changePlayBtnIcon);
video.addEventListener('pause', changePlayBtnIcon);
video.addEventListener('timeupdate', progressBar);


skipBtns.forEach(e => {e.addEventListener('click', skipFn)});

inputRanges.forEach(e => {e.addEventListener('input', changeVideoAudioRate)});
inputRanges.forEach(e => {e.addEventListener('mousemove', changeVideoAudioRate)});

let mousedown = false;
progressContainer.addEventListener('click', drag);
progressContainer.addEventListener('mousedown',() => mouseDown = true);
progressContainer.addEventListener('mouseup',() => mouseDown = false);
progressContainer.addEventListener('mousemove', mousedown && drag(e));//同时满足这两个条件时执行
// progressContainer.addEventListener('mousemove', function(e) {
//     // return mouseDown && drag(e)
//     if(mouseDown) {
//         console.log(e);//有e，才能算出e.offsetX?
//         drag(e);
//     } else {
//         return;
//     }
// });








//想要在mousedown的情况下，才能够执行；mouseup的情况下，不执行；想要mousemove影响下快速变化
// inputRange.forEach(e => {
//     e.addEventListener('mousemove', changeVideoAudioRate)
// });

// inputRange.forEach(e => {
//     e.addEventListener('mousedown', () => {
//         init = true;
//     })
// });

// inputRange.forEach(e => {
//     e.addEventListener('mousedup', () => {
//         init = false;
//     })
// });



