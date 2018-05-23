### onclick
使用一个纯 JavaScript 结构允许你使用一个指令来选取所有的按钮
```
var buttons = document.getElementsByTagName("button");
for(var i=0; i<buttons.length; i++) {
	buttons[i].onclick = function() {
	}
}
```