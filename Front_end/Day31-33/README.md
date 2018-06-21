### 数组去重

* **ES6**

```
Array.from(new Set(arr));
// or
[...new Set(arr)];
```

* **indexOf**

```
Array.prototype.unique = function() {
    // 创建一个新的临时数组，用于保存输出结果
    var n = []; 
    // 遍历当前数组
    for (var i = 0; i < this.length; i++) {
        // 如果当前数组的第i个元素已经保存进了临时数组，那么跳过，否则把当前项push到临时数组里面
        if (n.indexOf(this[i]) == -1) n.push(this[i]);
    }
    return n;
}
```
```
Array.prototype.unique = function() {
    // 创建一个新的临时数组，并且把当前数组的第一元素存入到数组中
    var n = [this[0]]; 
    // 从第二项开始遍历
    for (var i = 1; i < this.length; i++) 
    {
        // 如果当前数组的第i项在当前数组中第一次出现的位置不是i，那么表示第i项是重复的，忽略掉，否则存入结果数组
        if (this.indexOf(this[i]) == i) n.push(this[i]);
    }
    return n;
}
```
```
// ES6改
Array.prototype.unique = function() {
    return this.filter((v, i) => this.indexOf(v) === i)
}
```
JS引擎在实现indexOf()的时候会遍历数组直到找到目标为止，此函数会浪费掉很多时间。

* **对象属性去重**

```
// 哈希算法
Array.prototype.unique = function() {
    // n为hash表，r为临时数组
    var n = {}, r = [];
    for (var i = 0; i < this.length; i++) {
        // 如果hash表中没有当前项
        if (!n[this[i]]) {
            // 存入hash表
            n[this[i]] = true;
            // 把当前数组的当前项push到临时数组里面
            r.push(this[i]); 
        }
    }
    return r;
}
```
从耗时的角度来讲，这是最优的一种解决方式。但是从内存占用角度来说，这并不是最优的，因为多了一个hash表。

* **先排序后去重**

```
Array.prototype.unique = function() {
    this.sort();
    var re = [this[0]];
    for (var i = 1; i < this.length; i++) {
        if (this[i] !== re[re.length - 1]) {
            re.push(this[i]);
        }
    }
    return re;
}
```
这种方式比使用indexOf()的方法要快，比使用hash表的方法要慢，但是占用内存要少。