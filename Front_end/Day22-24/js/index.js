/*
数字
*/
var buttons = document.getElementsByTagName("button");
var radioA = document.getElementById("radio-a");
var radioB = document.getElementById("radio-b");
var numA = document.getElementById("num-a");
var numB = document.getElementById("num-b");
var resultNum = document.getElementById("resultNum");
var errorNum = document.getElementById("errorNum");
/*
字符串
*/
var radioA1 = document.getElementById("radio-a1");
var radioB1 = document.getElementById("radio-b1");
var strA1 = document.getElementById("str-a");
var strB1 = document.getElementById("str-b");
var numA1 = document.getElementById("num-a1");
var numB1 = document.getElementById("num-b1");
var resultStr = document.getElementById("resultStr");

for(var i=0; i<buttons.length; i++) {
    /*
    数字
    */
    // 判断当前选中的输入框输入内容是否为数字
    buttons[0].onclick = function() {
        if(radioA.checked) {
            isNumber(numA.value);
        } else if(radioB.checked) {
            isNumber(numB.value);
        }
        function isNumber(txt) {
            if(txt === "") {
                resultNum.textContent = "输入为空";
            } else if(isNaN(txt)) {
                resultNum.textContent = "不是数字";
            } else {
                resultNum.textContent = "是数字";
            }
        }
    }
    // 把 A 四舍五入为 B 个小数位数的数字
    buttons[1].onclick = function() {
        var a = Number(numA.value);
        var b = Number(numB.value);
        if(isNum(numA.value) && isNum(numB.value)) {
            resultNum.textContent = a.toFixed(b);
        } else {
            resultNum.textContent = "";
        }
    }
    // 当前选中数字的绝对值
    buttons[2].onclick = function() {
        var a = Number(numA.value);
        var b = Number(numB.value);
        if(radioA.checked && isNum(numA.value)) {
            resultNum.textContent = Math.abs(a);
        } else if(radioB.checked && isNum(numB.value)) {
            resultNum.textContent = Math.abs(b);
        } else {
            resultNum.textContent = "";
        }
    }
    // 对当前选中的数字进行上舍入
    buttons[3].onclick = function() {
        var a = Number(numA.value);
        var b = Number(numB.value);
        if(radioA.checked && isNum(numA.value)) {
            resultNum.textContent = Math.ceil(a);
        } else if(radioB.checked && isNum(numB.value)) {
            resultNum.textContent = Math.ceil(b);
        } else {
            resultNum.textContent = "";
        }
    }
    // 对当前选中的数字进行下舍入
    buttons[4].onclick = function() {
        var a = Number(numA.value);
        var b = Number(numB.value);
        if(radioA.checked && isNum(numA.value)) {
            resultNum.textContent = Math.floor(a);
        } else if(radioB.checked && isNum(numB.value)) {
            resultNum.textContent = Math.floor(b);
        } else {
            resultNum.textContent = "";
        }
    }
    // 把当前选中的数字四舍五入为最接近的整数
    buttons[5].onclick = function() {
        var a = Number(numA.value);
        var b = Number(numB.value);
        if(radioA.checked && isNum(numA.value)) {
            resultNum.textContent = Math.round(a);
        } else if(radioB.checked && isNum(numB.value)) {
            resultNum.textContent = Math.round(b);
        } else {
            resultNum.textContent = "";
        }
    }
    // 返回 A 和 B 中的最高值
    buttons[6].onclick = function() {
        var a = Number(numA.value);
        var b = Number(numB.value);
        if(isNum(numA.value) && isNum(numB.value)) {
            resultNum.textContent = Math.max(a, b);
        } else {
            resultNum.textContent = "";
        }
    }
    // 返回 A 和 B 中的最低值
    buttons[7].onclick = function() {
        var a = Number(numA.value);
        var b = Number(numB.value);
        if(isNum(numA.value) && isNum(numB.value)) {
            resultNum.textContent = Math.min(a, b);
        } else {
            resultNum.textContent = "";
        }
    }

    function isNum(txt) {
        if(txt === "") {
            errorNum.textContent = "请输入数字";
            return false;
        } else if(isNaN(txt)) {
            errorNum.textContent = "请输入数字";
            return false;
        } else {
            errorNum.textContent = "";
            return true;
        }
    }

    /*
    字符串
    */
    // 获取当前选中输入的内容长度
    buttons[8].onclick = function() {
        var s1 = strA1.value;
        var s2 = strB1.value;
        if(radioA1.checked) {
            resultStr.textContent = s1.length;
        } else if(radioB1.checked) {
            resultStr.textContent = s2.length;
        }
    }
    // 当前选中输入中的第3个字符
    buttons[9].onclick = function() {
        var s1 = strA1.value;
        var s2 = strB1.value;
        if(radioA1.checked) {
            resultStr.textContent = s1.slice(2,3);
        } else if(radioB1.checked) {
            resultStr.textContent = s2.slice(2,3);
        }
    }
    // 把两个输入框的文字连接在一起输出（concat）
    buttons[10].onclick = function() {
        var s1 = strA1.value;
        var s2 = strB1.value;
        resultStr.textContent = s1.concat(s2);
    }
    // 输入B中的内容，在输入A的内容中第一次出现的位置（indexOf）
    buttons[11].onclick = function() {
        var s1 = strA1.value;
        var s2 = strB1.value;
        resultStr.textContent = s1.indexOf(s2);
    }
    // 输入A中的内容，在输入B的内容中最后一次出现的位置（lastIndexOf）
    buttons[12].onclick = function() {
        var s1 = strA1.value;
        var s2 = strB1.value;
        resultStr.textContent = s2.lastIndexOf(s1);
    }
    // 使用slice获取选中输入框内容的部分内容，参数为num-a及num-b
    buttons[13].onclick = function() {
        var s1 = strA1.value;
        var s2 = strB1.value;
        var n1 = numA1.value;
        var n2 = numB1.value;
        if(radioA1.checked) {
            resultStr.textContent = s1.slice(n1, n2);
        } else if(radioB1.checked) {
            resultStr.textContent = s2.slice(n1, n2);
        }
    }
    // 当前选中输入框的行数
    buttons[14].onclick = function() {
        var s1 = strA1.value;
        var s2 = strB1.value;
        if(radioA1.checked) {
            resultStr.textContent = s1.split("\n").length;
        } else if(radioB1.checked) {
            resultStr.textContent = s2.split("\n").length;
        }
    }
    // 使用substr获取选中输入框内容的子字符串，参数为num-a及num-b
    buttons[15].onclick = function() {
        var s1 = strA1.value;
        var s2 = strB1.value;
        var n1 = numA1.value;
        var n2 = numB1.value;
        if(radioA1.checked) {
            resultStr.textContent = s1.substr(n1, n2);
        } else if(radioB1.checked) {
            resultStr.textContent = s2.substr(n1, n2);
        }
    }
    // 把所选输入框中的内容全部转为大写
    buttons[16].onclick = function() {
        var s1 = strA1.value;
        var s2 = strB1.value;
        if(radioA1.checked) {
            resultStr.textContent = s1.toUpperCase();
        } else if(radioB1.checked) {
            resultStr.textContent = s2.toUpperCase();
        }
    }
    // 把所选输入框中的内容全部转为小写
    buttons[17].onclick = function() {
        var s1 = strA1.value;
        var s2 = strB1.value;
        if(radioA1.checked) {
            resultStr.textContent = s1.toLowerCase();
        } else if(radioB1.checked) {
            resultStr.textContent = s2.toLowerCase();
        }
    }
    // 把所选输入框中内容的半角空格全部去除
    buttons[18].onclick = function() {
        var s1 = strA1.value;
        var s2 = strB1.value;
        if(radioA1.checked) {
            resultStr.textContent = s1.replace(/ /g, "");
        } else if(radioB1.checked) {
            resultStr.textContent = s2.replace(/ /g, "");
        }
    }
    // 把所选输入框中内容的a全部替换成另外一个输入框中的内容
    buttons[19].onclick = function() {
        var s1 = strA1.value;
        var s2 = strB1.value;
        if(radioA1.checked) {
            resultStr.textContent = s1.replace(/a/g, s2);
        } else if(radioB1.checked) {
            resultStr.textContent = s2.replace(/a/g, s1);
        }
    }
}


/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/
function diyTrim(str) {
    var result = str;
    while(result) {
        if(result.slice(0,1) === " " || result.slice(0,1) ===  "　") {
            result = result.slice(1);
        } else if(result.slice(-1) === " " || result.slice(-1) ===  "　") {
            result = result.slice(0,-1);
        } else {
            break;
        }
    }

    return result
}

// 测试用例
console.log("去除字符串中的首尾空格：");
console.log(" a f b    ->" + diyTrim(' a f b    ')); // ->a f b
console.log("    ffdaf    ->" + diyTrim('    ffdaf    ')); // ->ffdaf
console.log("1    ->" + diyTrim('1    ')); // ->1
console.log("　　f->" + diyTrim('　　f')); // ->f
console.log("  　  a f b 　　 ->" + diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(" ->" + diyTrim(' ')); // ->
console.log("　->" + diyTrim('　')); // ->
console.log("->" + diyTrim('')); // ->


/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    var result = "";

    for(var i=0; i<str.length; i++) {
        if(str[i] !== str[i+1]) {
            result += str[i];
        }
    }

    return result;
}

// 测试用例
console.log("去除字符串中连续重复的地方：");
console.log("aaa->" + removeRepetition("aaa")); // ->a
console.log("abbba->" + removeRepetition("abbba")); // ->aba
console.log("aabbaabb->" + removeRepetition("aabbaabb")); // ->abab
console.log("->" + removeRepetition("")); // ->
console.log("abc->" + removeRepetition("abc")); // ->abc


/*
对象
*/
var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(obj, name) {
    if(obj.name === name) {
        console.log(obj.id);
    }
    if(obj.left) {
        findIdByName(obj.left, name);
    }
    if(obj.right) {
        findIdByName(obj.right, name);
    }
}
console.log("根据输入name找到对应的id：")
findIdByName(tree, "Kai");

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(obj, id) {
    if(obj.id === id) {
        console.log(obj.name);
    }
    if(obj.left) {
        findIdByName(obj.left, id);
    } 
    if(obj.right) {
        findNameById(obj.right, id);
    }
}
console.log("根据输入id找到对应的name：")
findNameById(tree, 2);

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR(obj) {
    if(obj) {
        console.log(obj.id);
        getListWithDLR(obj.left);
        getListWithDLR(obj.right);
    }
}
console.log("前序遍历：")
getListWithDLR(tree)

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR(obj) {
    if(obj) {
        getListWithLDR(obj.left);
        console.log(obj.id);
        getListWithLDR(obj.right);
    }
}
console.log("中序遍历：")
getListWithLDR(tree)

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD(obj) {
    if(obj) {
        getListWithLRD(obj.left);
        getListWithLRD(obj.right);
        console.log(obj.id);
    }
}
console.log("后序遍历：")
getListWithLRD(tree)


/*
队列
*/
// 队头对应数组中最后一个元素，即队头在右侧
var queueInput = document.getElementById("queue-input");
var queueCont = document.getElementById("queue-cont");
var inBtn = document.getElementById("in-btn");
var outBtn = document.getElementById("out-btn");
var queueFontBtn = document.getElementById("queue-font-btn");
var queueEmptyBtn = document.getElementById("queue-empty-btn");
var queue = ["apple", "pear"];
// 队头对应数组中第一个元素，即队头在左侧
var queueInput1 = document.getElementById("queue-input1");
var queueCont1 = document.getElementById("queue-cont1");
var inBtn1 = document.getElementById("in-btn1");
var outBtn1 = document.getElementById("out-btn1");
var queueFontBtn1 = document.getElementById("queue-font-btn1");
var queueEmptyBtn1 = document.getElementById("queue-empty-btn1");
var queue1 = ["apple", "pear"];

// 队头对应数组中最后一个元素，即队头在右侧
// 入队
inBtn.onclick = function() {
    var x = queueInput.value; 
    queue.unshift(x);
    queueCont.textContent = "队列内容：" + queue.join("->");
    queueInput.value = "";
    queueInput.focus();
}
// 出队
outBtn.onclick = function() {
    if(queue.length) {
        queue.pop();
        queueCont.textContent = "队列内容：" + queue.join("->");
    } else {
        queueCont.textContent = "队列为空";
    }
}
// 打印队头元素内容
queueFontBtn.onclick = function() {
    if(queue.length) {
        alert("队头：" + queue[queue.length - 1]);
    } else {
        alert("队列为空");
    }
}
// 判断队列是否为空
queueEmptyBtn.onclick = function() {
    if(queue.length) {
        alert("队列不为空");
    } else {
        alert("队列为空");
    }
}

// 队头对应数组中第一个元素，即队头在左侧
// 入队
inBtn1.onclick = function() {
    var x = queueInput1.value; 
    queue1.push(x);
    queueCont1.textContent = "队列内容：" + queue1.join("<-");
    queueInput1.value = "";
    queueInput1.focus();
}
// 出队
outBtn1.onclick = function() {
    if(queue1.length) {
        queue1.shift();
        queueCont1.textContent = "队列内容：" + queue1.join("<-");
    } else {
        queueCont1.textContent = "队列为空";
    }
}
// 打印队头元素内容
queueFontBtn1.onclick = function() {
    if(queue1.length) {
        alert("队头：" + queue1[0]);
    } else {
        alert("队列为空");
    }
}
// 判断队列是否为空
queueEmptyBtn1.onclick = function() {
    if(queue1.length) {
        alert("队列不为空");
    } else {
        alert("队列为空");
    }
}


/*
堆栈
*/
// 栈顶对应数组中最后一个元素，即栈顶在最右侧
var stackInput = document.getElementById("stack-input");
var stackCont = document.getElementById("stack-cont");
var pushBtn = document.getElementById("push-btn");
var popBtn = document.getElementById("pop-btn");
var stackFontBtn = document.getElementById("stack-font-btn");
var stackEmptyBtn = document.getElementById("stack-empty-btn");
var stack = ["apple", "pear"];
// 栈顶对应数组中第一个元素，即栈顶在最左侧
var stackInput1 = document.getElementById("stack-input1");
var stackCont1 = document.getElementById("stack-cont1");
var pushBtn1 = document.getElementById("push-btn1");
var popBtn1 = document.getElementById("pop-btn1");
var stackFontBtn1 = document.getElementById("stack-font-btn1");
var stackEmptyBtn1 = document.getElementById("stack-empty-btn1");
var stack1 = ["apple", "pear"];

// 栈顶对应数组中最后一个元素，即栈顶在最右侧
// 进栈
pushBtn.onclick = function() {
    var x = stackInput.value;
    stack.push(x);
    stackCont.textContent = "栈内容：" + stack.join("->");
    stackInput.value = "";
    stackInput.focus();
}
// 退栈
popBtn.onclick = function() {
    if(stack.length) {
        stack.pop();
        stackCont.textContent = "栈内容：" + stack.join("->");
    } else {
        stackCont.textContent = "栈为空";
    }
}
// 打印栈顶元素内容
stackFontBtn.onclick = function() {
    if(stack.length) {
        alert("栈顶：" + stack[stack.length - 1]);
    } else {
        alert("栈为空");
    }
}
// 判断栈是否为空
stackEmptyBtn.onclick = function() {
    if(stack.length) {
        alert("栈不为空");
    } else {
        alert("栈为空");
    }
}
// 栈顶对应数组中第一个元素，即栈顶在最左侧
// 进栈
pushBtn1.onclick = function() {
    var x = stackInput1.value;
    stack1.unshift(x);
    stackCont1.textContent = "栈内容：" + stack1.join("<-");
    stackInput1.value = "";
    stackInput1.focus();
}
// 退栈
popBtn1.onclick = function() {
    if(stack1.length) {
        stack1.shift();
        stackCont1.textContent = "栈内容：" + stack1.join("<-");
    } else {
        stackCont1.textContent = "栈为空";
    }
}
// 打印栈顶元素内容
stackFontBtn1.onclick = function() {
    if(stack1.length) {
        alert("栈顶：" + stack1[0]);
    } else {
        alert("栈为空");
    }
}
// 判断栈是否为空
stackEmptyBtn1.onclick = function() {
    if(stack1.length) {
        alert("栈不为空");
    } else {
        alert("栈为空");
    }
}


/*
排序
*/
// 数字排序
var resultArr1 = document.getElementById("result-arr1");
var arr1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
var arr11 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
var arr12 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
arr11.sort((a, b) => a - b);
arr12.sort((a, b) => b - a);
resultArr1.innerHTML = "原始数组：" + arr1 + "<br>" + "升序：" + arr11 + "<br>" + "降序：" + arr12;
// 字符串排序
var resultArr2 = document.getElementById("result-arr2");
var arr2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
var arr21 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
var arr22 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
arr21.sort(function(a, b) {
    if(a < b) {
        return -1;
    }
    if(a > b) {
        return 1;
    }
    return 0;
});
arr22.sort(function(a, b) {
    if(a > b) {
        return -1;
    }
    if(a < b) {
        return 1;
    }
    return 0;
});
resultArr2.innerHTML = "原始数组：" + arr2 + "<br>" + "a-z：" + arr21 + "<br>" + "z-a：" + arr22;
// 二维数组排序
var resultArr3 = document.getElementById("result-arr3");
var arr3 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
var arr31 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
arr31.sort((a, b) => b[1] - a[1]);
resultArr3.innerHTML = "原始数组：" + arr3.join(" ") + "<br>" + "第二个元素降序：" + arr31.join(" ");
// 对象排序
var resultArr4 = document.getElementById("result-arr4");
var arr4 = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];
var arr41 = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];
var arr42 = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];
arr41.sort(function(a, b) {
    var nameA = a.name.toLowerCase();
    var nameB = b.name.toLowerCase();
    if(nameA < nameB) {
        return -1;
    }
    if(nameA > nameB) {
        return 1;
    }
    return 0;
});
arr42.sort((a, b) => a.value - b.value)
console.log("排序：");
console.log("原始数组：");
console.log(arr4);
console.log("name升序：");
console.log(arr41);
console.log("value升序：");
console.log(arr42);


/*
对象转数组
*/
var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    }, 
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    }, 
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}
// var scoreArray = [];
// for(var i in scoreObject) {
//     scoreArray.push([i, scoreObject[i].Math, scoreObject[i].English, scoreObject[i].Music,]);
// }
// console.log("对象转数组：");
var scoreArray = [];
for(var i in scoreObject) {
    var arr = [i];
    for(var j in scoreObject[i]) {
        arr.push(scoreObject[i][j]);
    }
    scoreArray.push(arr);
}
console.log(scoreArray);


/*
数组转对象
*/
var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];
var menuObject = {0:{}};
for(var i=0; i<menuArr.length; i++) {
    menuObject[menuArr[i][0]] = {'name': menuArr[i][1]};
    if(menuArr[i][2] == -1) {
        menuObject[0][menuArr[i][0]] = menuObject[menuArr[i][0]];
    } else {
        if(menuObject[menuArr[i][2]]['subMenu']) {
            menuObject[menuArr[i][2]]['subMenu'][menuArr[i][0]] = menuObject[menuArr[i][0]]; 
        } else {
            menuObject[menuArr[i][2]]['subMenu'] = {};
            menuObject[menuArr[i][2]]['subMenu'][menuArr[i][0]] = menuObject[menuArr[i][0]];
        }                   
    }
}
console.log("数组转对象：");
console.log(menuObject[0]);