/*
机器人
*/
function Go() {
    console.log("Go");
}

function GoSteps(n=1) {
    if(typeof(n) === "number" && isNaN(n) === false && n>0) {
        n = Math.floor(n);
        while(n--) {
            Go();
        }
    }
    if(n === true) {
        Go();
    }
}

GoSteps(10); // Go 10次
GoSteps(1); // Go 1次
GoSteps(); // Go 1次，认为缺少参数时，默认参数为1
GoSteps(0);  // 0次
GoSteps(-1);  // 0次
GoSteps(1.4);  // Go 1次
GoSteps(1.6);  // Go 1次
GoSteps(-1);  // 0次
GoSteps(true);  // Go 1次
GoSteps(false);  // 0次
GoSteps("Test");  // 0次
GoSteps(NaN);  // 0次
GoSteps(null);  // 0次


/*
时钟
*/
var clock1 = document.getElementById("clock1");
var clock2 = document.getElementById("clock2");

// 返回星期几
function returnWeek(w) {
    var weekDay = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    return weekDay[w];
}
function returnWeek2(w) {
    var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekDay[w];
}
// 位数补齐
function add0(n) {
    if(n < 10) {
        n = "0" + n;
    }
    return n;
}
// AM(00:00-12:00) PM(12:00-24:00)
function AMorPM(h) {
    if(h >=12) {
        return " PM";
    } else {
        return " AM";
    }
}
// 格式为：YYYY 年 MM 月 DD 日 星期 D HH:mm:ss
function showClock1() {
    var d = new Date();
    var Y = d.getFullYear();
    var M = d.getMonth() + 1;
    var D = d.getDate();
    var w = d.getDay();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    M = add0(M);
    D = add0(D);
    h = add0(h);
    m = add0(m);
    s = add0(s);
    w = returnWeek(w);
    clock1.innerHTML = Y + "年" + M + "月" + D + "日 " + w + " " + h + ":" + m + ":" + s;
    setTimeout(showClock1, 100);
}
showClock1();
// 格式为：2008-10-10 Monday 07:10:30 PM
function showClock2() {
    var d = new Date();
    var Y = d.getFullYear();
    var M = d.getMonth() + 1;
    var D = d.getDate();
    var w = d.getDay();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var meridiem = AMorPM(h);
    M = add0(M);
    D = add0(D);
    h = add0(h);
    m = add0(m);
    s = add0(s);
    w = returnWeek2(w);
    clock2.innerHTML = Y + "-" + M + "-" + D + " " + w + " " + h + ":" + m + ":" + s + meridiem;
}
setInterval(showClock2, 100);


/*
日历
*/
var year = document.getElementById("year-select");
var month = document.getElementById("month-select");
var day = document.getElementById("day-select");
var hour = document.getElementById("hour-select");
var minute = document.getElementById("minute-select");
var second = document.getElementById("second-select");
var result = document.getElementById("result-wrapper");

// year
function setYear() {
    for(var i=2000; i<=2032; i++) {
        year.options[i-2000] = new Option(i, i);
    }
}
setYear();
// month
function setMonth() {
    for(var i=1; i<=12; i++) {
        month.options[i-1] = new Option(i, i);
    }
}
setMonth();
// day
function setDay() {
    day.length = 1;
    var y_value = year.value;
    var m_value = month.value;

    if(y_value === "" && m_value === "") {
        return
    } else {
        var dayArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        // 闰年
        if((y_value%4 === 0 && y_value%100 !== 0) || y_value%400 === 0) {
            dayArr[1]++;
        }
        for(var i=1; i<=dayArr[m_value-1]; i++) {
            day.options[i-1] = new Option(i, i);
        }
    }
}
setDay();
// hour
setTime(23, hour);
// minute
setTime(59, minute);
// second
setTime(59, second);
// setTime()
function setTime(n, time) {
    for(var i=0; i<=n; i++) {
        time.options[i] = new Option(add0(i), i);
    }
}
// result change
function resultDisplay() {
    var d = new Date(),
    Y_val = year.value,
    M_val = month.value,
    D_val = day.value,
    h_val = hour.value,
    h_val = add0(h_val),
    m_val = minute.value,
    m_val = add0(m_val),
    s_val = second.value,
    s_val = add0(s_val),
    now = d.getTime(),
    sd = new Date(Y_val,M_val-1,D_val,h_val,m_val,s_val),
    w = sd.getDay(),
    sel = sd.getTime(),
    diffSecond = Math.floor((now-sel)/1000),
    diff = Math.abs(diffSecond),
    dd, dh, dm, ds;

    dd = Math.floor(diff / 86400);
    dh = Math.floor((diff % 86400) / 3600);
    diff = diff % 3600;
    dm = Math.floor((diff % 86400 % 3600) / 60);
    ds = diff % 86400 % 3600 % 60;

    if(diffSecond > 0) {
        result.innerHTML = `现在距离 ${Y_val}年${M_val}月${D_val}日${returnWeek(w)} ${h_val}:${m_val}:${s_val} 已经过去 ${dd}天${dh}小时${dm}分${ds}秒`;
    } else {
        result.innerHTML = `现在距离 ${Y_val}年${M_val}月${D_val}日${returnWeek(w)} ${h_val}:${m_val}:${s_val} 还有 ${dd}天${dh}小时${dm}分${ds}秒`;
    }
}
setInterval(resultDisplay, 500);
// change
document.body.onchange = function (e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    
    switch(target.id) {
        case "year-select":
            setDay();
            resultDisplay();
            break;
        case "month-select":
            setDay();
            resultDisplay();
            break;
        case "day-select":
        case "hour-select":
        case "minute-select":
        case "second-select":
            resultDisplay();
    }
}