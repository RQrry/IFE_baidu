### 三栏布局
#### float浮动法
注意清除浮动
```
.clearfix:after {
	content: "";
	display: table;
	clear: both;
}
```
#### position定位法
`position: relative;` 相对定位仍然占据文档流，可改变位置
`position: absolute;` 绝对定位脱离文档流，需要设置宽高
#### flexbox弹性盒子
`display: flex;`

### z-index
层级z-index只对定位元素起作用
`position`设置为`relative`，`absolute`，`fixed`

### display: inline-block
解决inline-block空隙问题
```
<!-- html -->
<ul>
	<li></li>
	<li></li>
	<li></li>
<ul>
```
父元素设置font-size:0，子元素重新设置字体大小
```
// css
ul {
	font-size: 0;
}
li {
	display: inline-block;
	font-size: 16px;
}
```