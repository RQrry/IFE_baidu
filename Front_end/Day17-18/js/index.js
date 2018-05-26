var buttons = document.getElementsByTagName("button");
var resultCal = document.getElementById("resultCal");
var resultBin = document.getElementById("resultBin");
var resultPass3 = document.getElementById("resultPass3");
var resultMul = document.getElementById("resultMul");

for(var i=0; i<buttons.length; i++) {
    buttons[i].onclick = btnOnclick;
}

function btnOnclick() {
    var first = Number(document.getElementById("first-number").value);
    var second = Number(document.getElementById("second-number").value);
    var dec = Number(document.getElementById("dec-number").value);
    var bit = Number(document.getElementById("bin-bit").value);

    switch(this.id) {
        case "add-btn": 
            resultCal.innerHTML = first + second;
            break;
        case "minus-btn": 
            resultCal.innerHTML = first - second;
            break;
        case "times-btn": 
            resultCal.innerHTML = first * second;
            break;
        case "divide-btn": 
            if(second === 0) {
                resultCal.innerHTML = "除数为0，请重新输入";
            } else {
                resultCal.innerHTML = first / second;
            }
            break;
        case "trans-btn":
            resultBin.innerHTML = dec2bin(dec, bit);
            break;
    }
}

// 十进制转二进制
function dec2bin(dec, bit) {
    var bin = [];
    if(dec < 0) {
        return "输入一个十进制非负整数";
    } else if(dec === 0) {
        return "0";
    } else {
        while(dec) {
            res = dec % 2;
            dec = Math.floor(dec / 2);
            bin.unshift(res);
        }
        var num = bin.join("");
        if(bin.length < bit) {
            return add0(num, bit);
        } else {
            console.log("位数小");
            return num;
        }
    }
}

// 位数不够前面补零
function add0(num, n) {
    return (Array(n).join(0) + num).slice(-n);
}

// 3的小游戏
var numPass3 = [];
for(var i=1; i<=100; i++) {
    if(i%3 === 0 || i%10 === 3 || Math.floor(i/10) === 3) {
        numPass3[i-1] = "PA";
    } else {
        numPass3[i-1] = i;
    }
    resultPass3.innerHTML = numPass3;
}

// 九九乘法表
for(var i=1; i<=9; i++) {
    var tr = document.createElement("tr");
    resultMul.appendChild(tr);
    for(var j=1; j<=9; j++) {
        var td = document.createElement("td");
        td.textContent = i + " x " + j + " = " +  i * j;
        tr.appendChild(td);
    }
}