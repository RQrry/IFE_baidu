### getElementById 和 querySelector
`getElementBy`基于DOM规范，`querySelector`基于CSS选择器规范

* **querySelector用法**

```
document.querySelector(".wrapper p")  //返回class为wrapper节点下的第一个p节点
document.querySelectorAll("li")  //返回TagName为li的所有节点的集合 
```

* **getElementById用法**

```
document.getElementById("banner")  //返回id为banner的节点
document.getElementsByTagName("li")  //返回TagName为li的所有节点的集合
document.getElementsByClassName("content")  //返回class为content的所有节点的集合
```

* **区别**

`getElementBy`获取的是动态集合，`querySelector`获取的是静态集合。

动态就是选出的元素会随文档改变，静态的不会，取出来之后就和文档的改变无关了。
```
<ul>
    <li>aaa</li>
    <li>ddd</li>
    <li>ccc</li>
</ul>
 
//demo1
var ul = document.getElementsByTagName("ul")[0],
    lis = ul.getElementsByTagName("li");
for(var i = 0 ; i < lis.length ; i++) {
    ul.appendChild(document.createElement("li"));
}
console.log(lis.length);  //6
 
//demo2
var ul = document.querySelectorAll("ul"),
    lis = ul.querySelectorAll("li");
for(var i = 0 ; i < lis.length ; i++) {
    ul.appendChild(document.createElement("li"));
}
console.log(lis.length);  //3
```

* **性能**

`getElementBy`性能优于`querySelector`

* **总结**

如果只要一次查找就可得到的元素，首选`getElementBy`

如果需要经过多级查找才能得到的元素，首选`querySelector`

***

### 网页事件
* **事件处理器**

```
var btn = document.querySelector('button');

function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
```

* **addEventListener()和removeEventListener()**

```
var btn = document.querySelector('button');

function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}   

btn.addEventListener('click', bgChange);
```

`addEventListener()`有一个相对应的方法`removeEventListener()`移除事件监听器

`addEventListener()`可以向同一类型的元素添加多个监听器

```
myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);
```

### 事件冒泡

浏览器检查实际点击的元素是否在冒泡阶段中注册了一个`onclick`事件处理程序，如果是，则运行它。

然后它移动到下一个直接的祖先元素，并做同样的事情，然后是下一个，等等，直到它到达`html`元素。

* **阻止事件冒泡stopPropagation()**

```
video.onclick = function(e) {
    e.stopPropagation();
    video.play();
};
```