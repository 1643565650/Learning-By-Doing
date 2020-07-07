const video = document.querySelector('video');
const togglePlayBtn = document.querySelector('.toggle');
const inputs = document.querySelectorAll('input');
const btns = document.querySelectorAll('button');
const progressContainer = document.querySelector('.progress')
const progress = document.querySelector('.progress__filled');
const fullScreenBtn = document.querySelector('[data-fullVideo]');



//播放与切换播放暂停图标
function videoPlayFn() {
    // if (video.paused) {
    //     video.play();
    // } else {
    //     video.pause();
    // }
    const method = video.paused ? 'play' : 'pause';
    video[method]();//字符串读取属性方法
    changeIcon = video.paused ? '►' : '❚ ❚';
    togglePlayBtn.textContent = changeIcon;
}

video.addEventListener('click', videoPlayFn)
togglePlayBtn.addEventListener('click', videoPlayFn)


//skip button设置,数据属性的两种读取方法读取     
function skipFn(e) {
    console.log(e);
    console.log(this);//<button data-skip="25" class="player__button">25s »</button>
    console.log(`this.dataset.skip =>  ${this.dataset.skip}`);
    console.log(`video.currentTime =>  ${video.currentTime}`);
    video.currentTime += parseFloat(this.getAttribute('data-skip'))
    // video.currentTime +=  parseFloat(this.dataset.skip);//注意不要重复在写video.currentTime  这里为什么是skip
}

btns.forEach(btn => {btn.addEventListener('click', skipFn)})





//播放速度与音量调节  1.this.value随着range调节而改变  2.属性的字符串使用
function volumnAbdRateFn() {
    video[this.name] = this.value;
    
}

inputs.forEach(input => {input.addEventListener('mousemove', volumnAbdRateFn)})
inputs.forEach(input => {input.addEventListener('change', volumnAbdRateFn)})



//进度条变化.当前时间与总时间的比例，来刻画占比   1.对video监听'timeupdate' 2.对flexBasis需要进一步学习
function progressChange() {
//    const proportion = ( video.currentTime / video.duration) * 100;
//    progress.style.flexBasis = `${proportion}%`

const time =  (video.currentTime / video.duration) * 100;
progress.style.flexBasis = `${time}%`;
}

video.addEventListener('timeupdate', progressChange)




//拖拽进度条  1.video.duration代表视频一共持续的时间  2.offsetWidth返回一个元素的布局宽度  3.如何随着拖拽及时变化，&&的短路特性
function dragFn(e) {
    const clickPlaceWidth = e.offsetX;
    const barWidth = progressContainer.offsetWidth;
    video.currentTime = (clickPlaceWidth / barWidth) * video.duration;
}

let mousedown = false;
progressContainer.addEventListener('click', dragFn);
progressContainer.addEventListener('mousedown', () => {mousedown = true;});
progressContainer.addEventListener('mouseup', () => {mousedown = false;});
progressContainer.addEventListener('mousemove', (e) => mousedown && dragFn(e));
// progressContainer.addEventListener('mousemove', (e) => {
//     console.log(e)
//     if (mousedown == true) {
//         dragFn(e);
//     } 
// });





//全屏设置  1.找到数据属性的方法  2.全屏模式，兼容不同浏览器
function fullVideoFn() {
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

fullScreenBtn.addEventListener('click', fullVideoFn);


