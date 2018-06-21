### JavaScript对象

* **点表示法**

点表示法只能接受字面量的成员的名字，不接受变量作为名字。
```
person.name;
```

* **括号表示法**

括号表示法可以接收变量作为名字
```
var myDataName = 'height'
var myDataValue = '1.75m'
person[myDataName] = myDataValue;

person.height;  // 1.75m
person["height];  // 1.75m
```

* **"this"的含义**

关键字"this"指向了当前代码运行时的对象

"this"是非常有用的——它保证了当代码的上下文(context)改变时变量的值的正确性
```
var person1 = {
    name : 'Chris',
    greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
    }
}

var person2 = {
    name : 'Brian',
    greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
    }
}
```

***

### 二叉树

* **前序遍历**

首先访问根节点，然后访问根节点的左子树，再访问根节点的右子树。
```
function DLR(tree){
    if(tree) {
        console.log(tree.name);
        DLR(tree.left);
        DLR(tree.right);
    }
}
```

* **中序遍历**

首先访问根节点的左子树，然后访问根节点，再访问根节点的右子树。
```
function LDR(tree){
    if(tree){
        LDR(tree.left);
        console.log(tree.name);
        LDR(tree.right);
    }
}
```

* **后序遍历**

首先访问根节点的左子树，然后访问根节点的右子树，再访问根节点。
```
function LRD(tree){
    if(tree){
        LRD(tree.left);
        LRD(tree.right);
        console.log(tree.name);
    }
}
```

***

### 队列和堆栈

* **队列**

先入先出

队列是一种特殊的线性表，特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作，和栈一样，队列是一种操作受限制的线性表。进行插入操作的端称为队尾，进行删除操作的端称为队头。队列中没有元素时，称为空队列。

队列的数据元素又称为队列元素。在队列中插入一个队列元素称为入队，从队列中删除一个队列元素称为出队。因为队列只允许在一端插入，在另一端删除，所以只有最早进入队列的元素才能最先从队列中删除，故队列又称为先进先出（FIFO—first in first out）线性表。

* **堆栈**

后入先出

栈（stack）又名堆栈，它是一种运算受限的线性表。其限制是仅允许在表的一端进行插入和删除运算。这一端被称为栈顶，相对地，把另一端称为栈底。向一个栈插入新元素又称作进栈、入栈或压栈（PUSH），它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；从一个栈删除元素又称作出栈或退栈（POP），它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。

***

### sort()排序
```
arr.sort() 

arr.sort(compareFunction)
```

比较函数
```
function compare(a, b) {
    // 按某种排序标准进行比较, a 小于 b
    if (a < b ) {           
        return -1;
    }
    // a 大于 b
    if (a > b ) {
        return 1;
    }
    // a must be equal to b
    return 0;
}
```
```
// 数字升序排序
function compareNumbers(a, b) {
  return a - b;
}

sort((a,b) => a - b);
```
对象数组排序
```
function compare(property) {
    return function(a,b) {
        var value1 = a[property];
        var value2 = b[property];
        if(value1 > value2) return 1;
        if(value1 < value2) return -1;
        return 0;
    }
}
```