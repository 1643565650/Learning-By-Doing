# 实现顺序
1.找到音乐audio
2.audio跟keydown产生的KeyboardEvent相关，通过KeyboardEvent的keyCode找到相应的audio
3.audio.play()发出声音
4.保证用户快速敲击时，声音能够迅速发出
5.用户按下时，改变边框效果。
6.用户松开按键时，消除边框效果。

#发现问题：
1.连续敲击时，声音无法跟着响
答：audio.currentTime = 0

2.index-START.html:66 Uncaught TypeError: Cannot read property 'classList' of null at playSound
答：在removeClassPlaying中的e.target.classList.remove('playing')少了target


# 补充知识
1. target
   - 触发事件的对象 (某个DOM元素) 的引用。

2. transform
   - 定义：CSStransform属性允许你旋转，缩放，倾斜或平移给定元素。这是通过修改CSS视觉格式化模型的坐标空间来实现的。
   - 延展：transform-originCSS属性让你更改一个元素变形的原点
 

3. transition
	-  过渡，不同状态切换时的效果
	-  设置秒数，设置颜色（这个比较酷）
	-  通过:hover或:active实现JavaScript的状态变化
    -  延展 => CSS :active
        - 用户按下按键和松开按键之间的时间
        - 会被其他的伪类覆盖，放在最后
        - 伪类防止的先后顺序:link — :visited — :hover — :active
        - CSS 3 规定 :active 伪类必须只匹配主按键；对于右手操作鼠标来说，就是左键。
        - 例子
            ![image.png](https://upload-images.jianshu.io/upload_images/2195446-7deeb90491c760ee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



4. 键盘事件
	-  主要有三个事件：keydown（按下时触发），keypress(按下有值的键触发，有值的键先出法keydown，再触发它)，keyup(松开键盘时触发该时间)
	-  用户一直不松开，触发顺序为keydown---keypress---keydown---keypress---循环---keyup结束
    -  KeyboardEvent中有很多属性，其中的一个属性为KeyCode
    -  每一个按键所代表的keyCode，从http://keycode.info  查询键码
  



5. WindowOrWorkerGlobalScope.setTimeout
    - WindowOrWorkerGlobalScope 设置一个定时器，定时器到期后执行一个函数或指定的一段代码。
      ```
        var timeoutID;
        function delayedAlert() {
        timeoutID = window.setTimeout(slowAlert, 2000);}

        function slowAlert() {
        alert('That was really slow!');}

        function clearAlert() {
        window.clearTimeout(timeoutID);}
    
6. transitionend
    -   在 CSS transition 结束后触发
    -   当transition完成前移除transition时，移除css的transition-property 属性，事件将不会被触发.
    -   如在transition完成前设置  display 为"none"，事件同样不会被触发。
    -   双向触发
    -   冒泡，事件监听的第三个参数必须为false
    -   延展 => 冒泡与捕获
        ![阮一峰JavaScript教程-事件传播](https://upload-images.jianshu.io/upload_images/2195446-c9c0afc297f24da7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

        ![image.png](https://upload-images.jianshu.io/upload_images/2195446-9fb0f324717e5e0b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



7. 数据属性data-* (attribute)
![数据属性data-_+(attribute).png](https://upload-images.jianshu.io/upload_images/2195446-959aa3763ba2bced.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


        
        











