## 页面演示1
 [固定瀑布流](https://jokren.github.io/Javascript/固定列数瀑布流/固定列数瀑布流cype.html)

## 页面演示2
[带有定时器的轮播图](https://jokren.github.io/Javascript/带有定时器的轮播图/简单焦点图%20js.html)

## 页面演示3
[无限瀑布流](https://jokren.github.io/Javascript/无限流瀑布/Infinite.html)



## 如何修改github上仓库的项目的语言类型

### 问题
在把项目上传到github仓库上时语言会显示错误语言
比如我刚写的python程序显示的语言是html

#### 原理
github 是采用 Linguist来自动识别你的代码判断归为哪一类

#### 解决办法
我们在仓库的根目录下添加.gitattributes文件:并写入
```file
   *.js linguist-language=python
   *.css linguist-language=python
   *.html linguist-language=python
```
意思是将.js、css、html当作java语言来统计

