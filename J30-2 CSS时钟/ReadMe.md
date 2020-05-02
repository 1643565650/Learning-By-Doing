# 实现效果
![时钟在线效果.gif](https://upload-images.jianshu.io/upload_images/2195446-255c94e7fe6bb82b.gif?imageMogr2/auto-orient/strip)

[在线效果](https://1643565650.github.io/Learning-By-Doing/J30-2%20CSS%E6%97%B6%E9%92%9F/CSS%E6%97%B6%E9%92%9F.html)


# 需要的CSS知识
![CSS部分-核心点.png](https://upload-images.jianshu.io/upload_images/2195446-cb8af42b621d05c0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



# 需要的JS知识
![JS部分.png](https://upload-images.jianshu.io/upload_images/2195446-58c703340aa28083.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




# 实现顺序
1. 调整初始的角度【秒数、分钟数、小时数都是以0为开始的，要让钟表跟时间对应，就需要让指针一开始就指向0点】
2. 找到指针，秒指针，小时指针
3. 创造函数，使用new Date()得到现在的时间，找到对应的分钟、秒、小时
4. 计算找到分钟、秒、小时所代表的角度，用transform:rotate()调整指针的位置
5. 设置判断条件，让指针在90deg时，消除transition效果
6. 设置setInterval(callback, 毫秒为单位的间隔时间)，指定间隔时间执行函数


# 问题

1. 指针不是围绕着钟表的中心转动的
答：需要设置原点，transition-origin:100%
  - 补充
    为什么要设置为100%？
    答：指针只是一条线，所以直接设置为100%，原点就设置为最右边
![Image.png](https://upload-images.jianshu.io/upload_images/2195446-1757d68ddf5eb9cf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![mdn](https://upload-images.jianshu.io/upload_images/2195446-fb1fc0774fabcf95.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



2. 秒数指针到12点时，旋转角度为什么突然变回90deg。
答：秒是从0到59，到了59以后又变成了0，`const secondDegrees = (seconds / 60 * 360) + 90`，当秒数为0时，所以角度就会重新回到90deg


3. 秒针过12点时，时针会突然倒退一下，这是什么问题？
答：我在计算时针的角度时，将秒针和分针所带来的角度都添加到了时针中，而秒针每到12点时，角度会从400多度一下降回90度，所以时针受到影响，就会减少秒针带来的那一部分的角度，后跳了一下。


4. 指针跳转时如何产生微小晃动？
答：设置transition-timing-function，在开发者工具中设置cubic-bzzier手动调整



