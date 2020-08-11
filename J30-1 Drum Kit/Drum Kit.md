[TOC]



### 思路

1.找到音乐audio
2.audio跟keydown产生的KeyboardEvent相关，通过KeyboardEvent的keyCode找到相应的audio
3.audio.play()发出声音
4.保证用户快速敲击时，声音能够迅速发出
5.用户按下时，改变边框效果。
6.用户松开按键时，消除边框效果。

### 问题：

1. 连续敲击时，声音无法跟着响
   答：audio.currentTime = 0

2. index-START.html:66 Uncaught TypeError: Cannot read property 'classList' of null at playSound
   答：在removeClassPlaying中的e.target.classList.remove('playing')少了target


### CSS知识
#### target

> target 事件属性可返回事件的目标节点（**触发该事件的元素**），如生成事件的元素、文档或窗口

#### transform

> 定义：transform属性允许你**旋转，缩放，倾斜或平移给定元素**。这是通过修改CSS视觉格式化模型的坐标空间来实现的。

##### transform-translate：在水平和/或垂直方向上重新定位元素。

![坐标系](https://upload-images.jianshu.io/upload_images/2195446-a406caa62dcf3014.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![例子](https://upload-images.jianshu.io/upload_images/2195446-0bcc27796e111b75.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

应用：通过相对定位和绝对定位和clearfix规则，创造一个圆心

![](https://upload-images.jianshu.io/upload_images/2195446-d9daffb570e7ab84.gif?imageMogr2/auto-orient/strip)



##### transform-origin：属性让你更改一个元素变形的原点

![](https://upload-images.jianshu.io/upload_images/2195446-2d0e42dd3466d26a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### transform:scale(x, y):对元素进行水平方向或垂直方向的缩放

1. scale(x,y) 对元素进行缩放

   X表示水平方向缩放的倍数 | Y表示垂直方向的缩放倍数
   Y是一个可选参数，没有设置的话，则表示X，Y两个方向的缩放倍数是一样的。并以X为准。
   transform:scale(2,2.5); 

2. scaleX(<number>) 元素只在X轴（水平方向）缩放元素。

   默认值是1，基点一样在元素的中心位置。可以通过transform-origin来改变基点
   transform:scaleX(2); 

3. scaleY(<number>) 元素只在Y轴（垂直方向）缩放元素。

   基点一样在元素的中心位置。可以通过transform-origin来改变基点。
   transform:scaleY(2); 

#### transition

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





### JS知识

#### 键盘事件(keyboardEvent)

1. 主要有三个事件：keydown（按下时触发），keypress(按下有值的键触发，有值的键先出法keydown，再触发它)，keyup(松开键盘时触发该时间)
2. 用户一直不松开，触发顺序为keydown---keypress---keydown---keypress---循环---keyup结束
3. KeyboardEvent中有很多属性，其中的一个属性为KeyCode
4. 每一个按键所代表的keyCode，从http://keycode.info  查询键码



#### WindowOrWorkerGlobalScope.setTimeout

设置一个定时器，定时器到期后执行一个函数或指定的一段代码。
```js
function slowAlert() {
       alert('That was really slow!');
}

setTimeout(slowAlert, 1000);//延迟一秒后执行slowAlert
```

#### transitionend

1. 在 CSS transition 结束后触发
2. 当transition完成前，移除transition时，移除css的transition-property 属性，事件将不会被触发.
3. 如在transition完成前设置  display 为"none"，事件同样不会被触发。
4. 双向触发：完成转换状态的过度，以及完全恢复到默认或非转换状态时，都会触发





冒泡，事件监听的第三个参数必须为false

延展 => 冒泡与捕获
![阮一峰JavaScript教程-事件传播](https://upload-images.jianshu.io/upload_images/2195446-c9c0afc297f24da7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/2195446-9fb0f324717e5e0b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



#### 自定义属性data-* (attribute)

- 让我们在**HTML元素上嵌入自定义属性**

```js
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
//上方的data-columns就是自定义属性
```

- 通过JavaScript与HTML进行数据交换

  ```
  <article
    id="electriccars"
    data-columns="3"
    data-index-number="12314"
    data-parent="cars">
  ...
  </article>
  
  
  var article = document.querySelector('#electriccars');
  article.dataset.columns // "3"
  article.dataset.indexNumber // "12314"
  article.dataset.parent // "cars"
  ```

- 通过HTML接口访问，通过HTMLElement.dataset.textValue属性访问它们，也可以通过、HTMLElement.dataset['textValue']访问

  - 可以被读取，不能直接写入，写入必须是它的属性

  - HTML中的data.dataset和DOM中的data.property相似但不同，一个是驼峰，一个是【字母、数字和- : . _】

  - DOMStringMap键值和自定义data属性名称的相互转化原则

    ```
    上方代码中的自定义属性data-index-number转化成indexNumber
    
    自定义data属性名称 data-abc-def 与DOMStringMap键值 abcDef 相对应
    ```

![转化](https://upload-images.jianshu.io/upload_images/2195446-72822ed2820336bf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 遵循xml名称生产规则（不能以xml开头；不能包含任何分号；不能有A到Z的大写字母）

##### JavaScript访问自定义属性

- 用getAttribute()配合完整的HTML名称读取（不用转换）

  - 如果属性不存在，返回null或者空字符串
  - 返回元素师指定的属性值

  ![](https://upload-images.jianshu.io/upload_images/2195446-c9abc0078deca462.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- DOMStringMap()的dataset读取数据

  ![](https://upload-images.jianshu.io/upload_images/2195446-fcb853ab5beab102.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### CSS访问自定义属性

1. 数据值必须是字符串
2. 必须在选择器中引用数据才能使数据生效
3. 属性选择器可以根据data改变样式

![](https://upload-images.jianshu.io/upload_images/2195446-1fff6421b5ef048d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)