### 事件冒泡和捕获
* **事件捕获**

浏览器检查元素的最外层祖先`html`，是否在捕获阶段中注册了一个`onclick`事件处理程序，如果是，则运行它。

然后，它移动到`html`中的下一个元素，并执行相同的操作，然后是下一个元素，依此类推，直到到达实际点击的元素。

* **事件冒泡**

浏览器检查实际点击的元素是否在冒泡阶段中注册了一个`onclick`事件处理程序，如果是，则运行它

然后它移动到下一个直接的祖先元素，并做同样的事情，然后是下一个，等等，直到它到达`html`元素。


### 事件委托/事件代理
事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。降低`DOM`操作次数。

适合用事件委托的事件：`click`，`mousedown`，`mouseup`，`keydown`，`keyup`，`keypress`。

* **事件委托的原理**

事件委托是利用事件的冒泡原理来实现的，何为事件冒泡呢？就是事件从最深的节点开始，然后逐步向上传播事件，举个例子：页面上有这么一个节点树，`div>ul>li>a`;比如给最里面的`a`加一个`click`点击事件，那么这个事件就会一层一层的往外执行，执行顺序`a>li>ul>div`，有这样一个机制，那么我们给最外面的`div`加点击事件，那么里面的`ul`，`li`，`a`做点击事件的时候，都会冒泡到最外层的`div`上，所以都会触发，这就是事件委托，委托它们父级代为执行事件。

* **事件委托实现**

`for`循环，为每个`li`添加点击事件。需要多次操作`DOM`，且动态添加`li`时，新添加的`li`是没有被绑定事件的
```
var list = document.querySelectorAll(".palette li");
for (var i = i = 0, len = list.length; i < len; i++) {
    list[i].onclick = function(e) {
        var t = e.target;
        var c = t.style.backgroundColor;
        var p = document.getElementsByClassName("color-picker")[0]
        p.innerHTML = c;
        p.style.color = c;
    }
}
```
事件委托
```
var lists = document.querySelector(".palette");
lists.onclick = function(e) {
    // 兼容IE浏览器
    var e = e || window.event;
    var target = e.target || e.srcElement;
    var p = document.getElementsByClassName("color-picker")[0];
    if(target.nodeName.toLowerCase() === "li") {
        var c = target.style.backgroundColor;
        p.innerHTML = c;
        p.style.color = c;
    }
}
```

***

### 定时
* **setTimeout**

```
t = setTimeout(function, time);  // 不会重复
clearTimeout(t);  // 清除定时
```

* **setInterval**

```
t = setInterval(function, time);  // 自动重复
clearInterval(t);
```
ES5新增，第三个参数可作为参数传递给第一个函数参数

第一个参数可以是函数对象，也可是字符串。作为字符串时，需要注意作用域问题，为全局作用域。当函数定义在window.onload事件处理函数内时，会报错。
```
setInterval(function, time, 参数);
setInterval("function()", time, 参数);
```

***

### js获取样式
* **行内样式**

```
obj.style.attr;
```

* **外联样式**

```
// Chrom浏览器
getComputedStyle(obj, null).attr;  
// 第二个参数是要选择的伪类，若没有则为null

// IE浏览器
obj.currentStyle.attr;
```
兼容写法
```
function getStyle(obj, attr){
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null).attr;
    } else{
        return obj.currentStyle.attr;
    }
}
```