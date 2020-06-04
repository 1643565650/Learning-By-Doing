# 笔记流
![flex1.jpg](https://upload-images.jianshu.io/upload_images/2195446-01457b8342678cca.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![flex2.jpg](https://upload-images.jianshu.io/upload_images/2195446-7c9af1a0ab51c44d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 前置知识  
![flex轴线.png](https://upload-images.jianshu.io/upload_images/2195446-661c92d7348dacc6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![flex gallery](https://upload-images.jianshu.io/upload_images/2195446-4664b7d8416f2321.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  


# flex-box  父容器内容  

### flex-wrap    
![flex-wrap.png](https://upload-images.jianshu.io/upload_images/2195446-69a29e36ed03d35c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![flex-wrap.jpg](https://upload-images.jianshu.io/upload_images/2195446-2627d12522df4270.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### flex-direction  
![flex-direction.png](https://upload-images.jianshu.io/upload_images/2195446-284a685aee7e7380.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### justify-content（左右排列的走向）
![](https://upload-images.jianshu.io/upload_images/2195446-d2052eb253bc8950.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

 ###  align-items（上下排列的走向）  
 “ as the justify-content version for the cross-axis”  
 - stretch (default): stretch to fill the container
 - flex-start / start / self-start
 - flex-end / end / self-end
 - center
 - baseline  
 ![](https://upload-images.jianshu.io/upload_images/2195446-fa7f36459fc97126.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


### align-content（相当于这个内容盒子的纵向排列）  
- flex-start：与纵轴的起点(cross start)对齐。
- flex-end：与纵轴的终点对齐。
- center：与纵轴的中点对齐。
- space-between：与纵轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个纵轴。  
![](https://upload-images.jianshu.io/upload_images/2195446-3bfafe4d646988ad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



#  flex-box 子容器内容


### align-self属性  
- 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性
- 默认值为auto，表示继承父元素的align-items属性
- 如果没有父元素，则等同于stretch
- 该属性可取6个值，除了auto，其他都与align-items属性完全一致  
![align-self.png](https://upload-images.jianshu.io/upload_images/2195446-53d3420173af8435.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



### order属性  
- 定义项目排列顺序
- 数组越小越靠前
- 默认为0  
![order.png](https://upload-images.jianshu.io/upload_images/2195446-d5f9f485cd7273bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  


### flex-grow  
- 剩余空间，按照比例添加给各个item
- 剩余空间：flex容器大小 - 所有flex项目大小
- 所有项目都有相同系数，获得相同的剩余空间
- 否则根据flex-grow决定的比例分配剩余空间
- 例子  
![flex-grow](https://upload-images.jianshu.io/upload_images/2195446-b5707c95aa771f59.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-3bd788d9adfef6dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/2195446-fb738775ce91c976.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### flex-shrink  
- 超出空间 = 各个item的宽度之和 - 父容器的宽度
- 超出空间，让各个item按照比例减去相应的部分
- 所以item的默认宽度相加时，大于容器时收缩
- 收缩比例是根据flex-shrink的值，初始值为1
- 参数为0时，表示未压缩  
![shrink为0](https://upload-images.jianshu.io/upload_images/2195446-d797d110aa030535.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 参数不可为负  
![flex-shrink.jpg](https://upload-images.jianshu.io/upload_images/2195446-cf99ac1564d117e0.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![shrink例子.png](https://upload-images.jianshu.io/upload_images/2195446-fa68239ea3cb09b0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



### flex-basis  
- 设置每一个item（flex元素）的初始值大小
- 默认值为auto，项目本来的大小  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-7352a6f984472f1c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/2195446-1aa8c356b3a51cfe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  
- 统一设置过了flex-basis，后面再设置不起作用  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-5da9008387bfcde5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### flex属性  
- flex-grow, flex-shrink 和 flex-basis的简写
- 默认值为0 1 auto
- flex：1;就只使用了flex-grow:1;  
- 后两个属性可选
- 两个快捷值:auto (1 1 auto) 和 none (0 0 auto)
- 优先使用这个属性


