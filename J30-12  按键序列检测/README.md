## [在线浏览]()  
![当用户输入xingzhi时，出现验证效果](https://upload-images.jianshu.io/upload_images/2195446-bb344e0601e412d8.gif?imageMogr2/auto-orient/strip)


## 所需知识点  
![](https://upload-images.jianshu.io/upload_images/2195446-1167593509b862b1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 笔记流  
![验证字符串.](https://upload-images.jianshu.io/upload_images/2195446-656aea064eef8704.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 知识拓展  
### 用户输入新的key时，如何删除最老的key，保留新的key。并且让数组跟secretCode拥有相同的length，不再增加？  
```
arr.splice(-secretCode.length -1, (arr.length - secretCode.length));
```  
![](https://upload-images.jianshu.io/upload_images/2195446-8aae02372f464acd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




