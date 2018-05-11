### 盒模型
* #### box-sizing
`box-sizing: content-box` - 默认盒子`width`和`height`为内容`content`的宽和高
`box-sizing: border-box` - 盒子的`width`和`height`取值为`content`+`padding`+`border`

* #### 响应式
`max-width`和`min-width`
```
// 父元素
width: 70%;
max-width: 1280px;
min-width: 480px;
```
```
// 子内容
margin: 0 auto;
```
图片适应父容器
```
display: block;
margin: 0 auto;
max-width: 100%;
```

### 清除浮动
* #### 伪元素
```
.clearfix:after {
	content: "";
	display: block;
	height: 0;
	clear: both;
}
```