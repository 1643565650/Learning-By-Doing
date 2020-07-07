## 知识点  
1. array.slice()  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-d12a61e1d5ec33b9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-dfed22a3bf06ffbe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  
2. array.concat()  
- concat() 方法用于合并两个或多个数组。  
- 此方法不会更改现有数组，而是返回一个新数组。  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-e93c7f7c9afaa23e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3. array.from()  
- Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-75b35e26b8ec19cd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

4. [...Array]  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-2b2291613d83bcf8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

5. {...Object}  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-eef8c6ce9acaee8a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-5d098f7e1908e3ff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



6. Object.assign()  
- Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，它将返回目标对象。  
- 如果有相同的内容，会被覆盖  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-d7ff7e1e0b75cbe6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-2b7ca7e96bb642c8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  
- 复杂情况下，被改变  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-79cfbe8f7d472c11.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


7. JSON.stringify将对象转化为字符串  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-4c4b897eadfc72f5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

8. JSON.parse将字符串转化为对象  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-0f30c2ec4ad5a631.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

9.  浅拷贝  
- 浅拷贝得到则是重新创建了新对象。
- 赋值得到的对象 obj2 同时也会改变原始值 obj1
- 将 B 对象拷贝到 A 对象中，但不包括 B 里面的子对象(相当于是引用的子对象地址，所以一旦改变子对象，B对象中的引用对象也会改变)

10. 深拷贝
- 将 B 对象拷贝到 A 对象中，包括 B 里面的子对象  
![image.png](https://upload-images.jianshu.io/upload_images/2195446-21e772eb5d17be9e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



