### input
input去除选中时的焦点边框
```
outline: none;
```
input修改placeholder
```
input::-webkit-input-placeholder {
	color: #eee;
}
input:-ms-input-placeholder {
	color: #eee;
}
input:-moz-placeholder {
	color: #eee;
}
input::-moz-placeholder {
	color: #eee;
}
```
* **html5 新增type属性**

`color` - 从拾色器中选择一个颜色

`date` - 从日期选择器中选择一个日期

`datetime` - 选择一个日期（UTC时间）

`datetime-local` - 选择一个日期和时间（无时区）

`email` - 包含e-mail地址的输入域

`month` - 选择一个月份

`number` - 包含数值的输入域

`range` - 包含一定范围内数字值的输入域，显示为滑动条

`search` - 搜索域

`tel` - 输入电话好吗字段

`time` - 选择一个时间

`url` - 包含URL地址的输入域

`week` - 选择周和年
