// 练习1
var submit_btn_result = document.getElementById("submit-btn-result");

document.getElementById("submit-btn").onclick = function() {
    submit_btn_result.textContent = document.getElementById("name").value;
}

window.onkeydown = function(e) {
    if(e.keyCode === 13) {
        submit_btn_result.textContent = document.getElementById("name").value;
    } else if(e.keyCode === 27) {
        document.getElementById("name").value = "";
        submit_btn_result.textContent = "";
    }
}


// 练习2
var school = document.getElementById("school");
var company = document.getElementById("company");
var school_select = document.getElementById("school-select");
var company_select = document.getElementById("company-select");
var radios = document.getElementsByName("status");

for(var i=0; i<radios.length; i++) {
    radios[i].onclick = function() {
        if(school.checked) {
            school_select.className = "selectActive";
        } else {
            school_select.className = "";
        }
        if(company.checked) {
            company_select.className = "selectActive";
        } else {
            company_select.className = "";
        }
    }
}


// 练习3
// var list = document.querySelectorAll(".palette li");

// for (var i = i = 0, len = list.length; i < len; i++) {
//     list[i].onclick = function(e) {
//         var t = e.target;
//         var c = t.style.backgroundColor;
//         var p = document.getElementsByClassName("color-picker")[0]
//         p.innerHTML = c;
//         p.style.color = c;
//     }
// }

var lists = document.querySelector(".palette");

lists.onclick = function(e) {
    // 兼容IE浏览器
    var e = e || window.event;
    var target = e.target || e.srcElement;
    var p = document.getElementsByClassName("color-picker")[0];

    if(target.nodeName.toLowerCase() === "li") {
        var c = target.style.backgroundColor;
        p.innerHTML = c;
        p.style.color = c;
    }
}


// 练习4
var fadeObj = document.getElementById("fade-obj");
var fadeBtn = document.getElementById("fade-btn");
// Chrom浏览器获取外联样式
var op = Number(getComputedStyle(fadeObj, null).opacity);
// IE浏览器获取外联样式
// var op = Number(fadeObj.currentStyle.opacity);

fadeBtn.onclick = function() {
    if(fadeBtn.textContent === "淡出") {
        fadeOut();
        fadeBtn.textContent = "淡入";
    } else {
        t2 = setInterval(fadeIn, 100);
        fadeBtn.textContent = "淡出";
    }
}

function fadeOut() {
    op -= .1;
    fadeBtn.disabled = true;
    t1 = setTimeout(fadeOut, 100);
    fadeObj.style.opacity = op.toString();
    console.log(op);
    if(op < 0) {
        clearTimeout(t1);
        fadeBtn.disabled =false;
    }
}

function fadeIn() {
    op += .1;
    fadeBtn.disabled = true;
    fadeObj.style.opacity = op.toString();
    console.log(op);
    if(op > 1) {
        clearInterval(t2);
        fadeBtn.disabled = false;
    }
}


// 练习5
var img = document.getElementById("img");
var posY = [-1, -481, -961, -1441, -1921, -2401, -2881, -3361, -3841, -4321, -4801, -5281, -5761, -6241, -6721, -7201, -7681];
var index = 0;

function run() {
    img.style.backgroundPositionY = posY[index] + "px";
    index++;
    if(index >= posY.length) {
        index = 0;
    }
}
setInterval(run, 100);