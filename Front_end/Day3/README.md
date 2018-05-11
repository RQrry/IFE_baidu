### css实现水平垂直居中
html
```
<div class="wrap">
	<div class="content"></div>
</div>
```

* **定位**

```
.wrap {
	width: 500px;
	height: 500px;
	background: green;
	position: relative;
}
.content {
	width: 200px;
	height: 200px;
	background: yellow;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
}
```

* **定位+transform**

```
.wrap {
	width: 500px;
	height: 500px;
	background: green;
	position: relative;
}
.content {
	width: 200px;
	height: 200px;
	background: yellow;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}
```

**css弹性盒子**

```
.wrap {
	width: 500px;
	height: 500px;
	background: green;
	display: flex;
	justify-content: center;
	align-items: center;
}
.content {
	width: 200px;
	height: 200px;
	background: yellow;
}
```

* **table-cell布局**

```
<!-- html -->
<div class="wrap">
	<div class="content">
		<div class="inner"></div>
	</div>
</div>
```
```
// css
.wrap {
	width: 500px;
	height: 500px;
	background: green;
	display: table;
}
.content {
	display: table-cell;
	text-align: center;
	vertical-align: middle;
}
.inner {
	display: inline-block;
	width: 200px;
	height: 200px;
	background: yellow;
}
```