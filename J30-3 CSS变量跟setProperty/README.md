## [在线浏览](https://1643565650.github.io/Pure-JavaScript-Learning-JavaScript30/J30-3%20CSS%E5%8F%98%E9%87%8F%E8%B7%9FsetProperty/%E6%95%88%E6%9E%9C.html)
![效果](https://upload-images.jianshu.io/upload_images/2195446-590069226dcf0058.gif?imageMogr2/auto-orient/strip)



## 前置知识
![](https://upload-images.jianshu.io/upload_images/2195446-a771fd997b2b5779.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



## 思路：

![](https://upload-images.jianshu.io/upload_images/2195446-503dd3db58ad8878.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



## 问题
1.颜色部分是让谁来调用？  
答：是background。
2.模糊部分是谁来调用CSS变量  
答：![filter](https://upload-images.jianshu.io/upload_images/2195446-bdba717d77356940.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


**延展**：blur()
- 语法：blur(radius)  
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

