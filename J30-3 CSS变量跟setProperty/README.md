
## [在线浏览]()
![效果](https://upload-images.jianshu.io/upload_images/2195446-590069226dcf0058.gif?imageMogr2/auto-orient/strip)



## 前置知识
![](https://upload-images.jianshu.io/upload_images/2195446-a771fd997b2b5779.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



## 思路：

1.   对根目录:root设置三个CSS变量，分别对应颜色，内边距和模糊程度；

2.   然后让image的background，padding和filter:blur()，通过var调用上面的这三个CSS变量（延展blur概念，问题：颜色部分是让谁来调用？问题：模糊部分是谁来调用CSS变量）形成了页面的默认渲染。

3.   找到三个input，通过forEach遍历它们，对它们实施'change'和'mousemove'监听（change是为了监听颜色，mousemove是为了监听padding和blur）

4.   设置监听函数，通过document.documentElement.style.setProperty(`--${this.name}`, this.value)，找到根元素中的CSS变量（例如--base），然后将input中的value传递过去改变这个变量（这里需要input中的name跟CSS变量去除--后是相同的，这样才能找到CSS变量）

5.   这时发现没有效果，例如padding:10是没有效果的，比如要有px才行

6.   通过this.dateset.sizing读取input中的数据属性data-sizing，得到px，然后赋值给自定义常量（例如suffix）后，在this.value + suffix，数值后面就跟上了px，image的padding和blur就能够变化（因为image调用了根目录的CSS变量）

7.   发现问题，改变颜色区域的input时，边框消失。这是因为当input的type为color时，它的value是颜色代码，不是数字，这部分input中也没有设置data-sizing，所以找不到suffix，返回undefined，而undefined加上颜色部分的this.value（颜色代码，typeof后发现是字符串），就会生成
    ![image.png](https://upload-images.jianshu.io/upload_images/2195446-77d37f0f9b2e294f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
 导致边框消失

8.   解决这个问题：让suffix = this.dateset.sizing || ''     颜色字符串加上'' 不影响颜色读取



## 问题
1.颜色部分是让谁来调用？  
答：是background。为什么是background？

2.模糊部分是谁来调用CSS变量  
答：![filter](https://upload-images.jianshu.io/upload_images/2195446-bdba717d77356940.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
**延展**：blur()
	* 语法：blur(radius)
![blur](https://upload-images.jianshu.io/upload_images/2195446-8627db845a560e6f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


**延展**：filter
- filter需要设置<filter-function>过滤器函数
- blur()就是过滤器函数之一，模糊图像 `filter:blur(1px) `

![过滤器函数](https://upload-images.jianshu.io/upload_images/2195446-44920e69668226a9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3.input的type为range时，不同的位置的拖动会带来怎样的值？  
答：需要设置最小值min和最大值max，不同位置的值都在min与max之间，同时可以在input中设置value，代表默认的拖动位置
![input的type为range](https://upload-images.jianshu.io/upload_images/2195446-62d69ef20c63f843.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


4.input的type为color/range时，它的value是什么？  
答：input的type为color时，它的值就是颜色代码  
![color](https://upload-images.jianshu.io/upload_images/2195446-035d130c6a42b1da.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

input的type为range时，它的值就是数字  
![image.gif](https://upload-images.jianshu.io/upload_images/2195446-ad71ddbc7ac0b734.gif?imageMogr2/auto-orient/strip)



5.为什么我在设置完颜色之后，还需要让鼠标hover在颜色条上才能变色？  
答：因为我只设置了mousemove监听事件，所以只有放在input的颜色条块上，才会有变化。解决办法是再设置一个监听事件change，只要value一改变，立马就变换颜色



6.用户拖动range或者改变颜色时，是如何修改相应的input的？  
答：拖动range或者选择颜色，都会改变this.value，也就是input的value。我们通过setProperty找到根目录的CSS变量，然后将这个值传递给CSS变量，就会改变image的padding/blur/颜色


7.NodeList和Array的区别  
NodeList可以使用的方法很少，在遍历方面更是只有forEach

![](https://upload-images.jianshu.io/upload_images/2195446-d09b9f249ca4525f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Array有很多方法

![](https://upload-images.jianshu.io/upload_images/2195446-ed2462ca40d96137.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

