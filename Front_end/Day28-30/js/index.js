var input = document.getElementById("email-input");
var wrapper = document.getElementById("email-sug-wrapper");
var lis = document.getElementsByTagName("li");
var postfixList = ["163.com", "gmail.com", "126.com", "qq.com", "263.net"];
var nowSelectTipIndex = 0;
input.focus();

// onclick
wrapper.onclick = function(e) {
    var e = e.event || window.event;
    var target = e.target || e.srcElement;
    if(target.nodeName.toLowerCase() === "li") {
        let content = target.innerHTML;
        input.value = HtmlUtil.htmlDecode(content);
        hideWrap();
    }
    input.focus();
}

// oninput
input.oninput = function() {
    add2wrap();
    toggleWrap();
}

// onkeydown
input.onkeydown = function (e) {
    // 上键
    if(e.keyCode === 38) {
        if(nowSelectTipIndex === 0) {
            nowSelectTipIndex = lis.length - 1;
        } else {
            nowSelectTipIndex--;
        }
    }
    // 下键
    if(e.keyCode === 40) {
        if(nowSelectTipIndex === lis.length - 1) {
            nowSelectTipIndex = 0;
        } else {
            nowSelectTipIndex++;
        }
    }
    // 回车
    if(e.keyCode === 13) {
        let content = lis[nowSelectTipIndex].innerHTML;
        input.value = HtmlUtil.htmlDecode(content);
        hideWrap();
    }
    // ESC
    if(e.keyCode === 27) {
        input.select();
    }
    // 重置
    if(e.keyCode !== 13 && e.keyCode !== 38 && e.keyCode !== 40 && e.keyCode !== 27) {
        nowSelectTipIndex = 0;
    }
    add2wrap();
}

// 获取输入框的输入内容trim后返回
function getInput() {
    let str = input.value;
    return trim(str);
}

function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

// 生成提示框中的提示内容
function generation() {
    let str = getInput();
    let prefix = getInput();
    let postfix = "";
    let content = "";
    let contentAll = "";

    if(str.indexOf("@") !== -1) {
        prefix = str.split("@")[0];
        postfix = str.split("@")[1];
    }
    
    for(let i=0; i<postfixList.length; i++) {
        if(postfix) {
            if(postfixList[i].indexOf(postfix) === 0) {
                let email = prefix + "@" + postfixList[i];
                email = HtmlUtil.htmlEncode(email);
                content += "<li>" + email + "</li>";
            }
        }

        let email = prefix + "@" + postfixList[i];
        email = HtmlUtil.htmlEncode(email);
        contentAll += "<li>" + email + "</li>";
    }
    return content.length > 0  ? content : contentAll;
}

// 将内容添加到wrapper中
function add2wrap() {
    wrapper.innerHTML = generation();
    lis[nowSelectTipIndex].className = "active";
}

// 控制wrapper的显示和隐藏
function toggleWrap() {
    if (!getInput()) {
        hideWrap();
    } else {
        showWrap();
    }
}

function hideWrap() {
    wrapper.style.display = "none";
}

function showWrap() {
    wrapper.style.display = "block";
}

var HtmlUtil = {
    // 实现html转码
    htmlEncode:function(html) {
        var temp = document.createElement("div");
        (temp.textContent != undefined ) ? (temp.textContent = html) : (temp.innerText = html);
        var output = temp.innerHTML;
        temp = null;
        return output;
    },
    // 实现html解码
    htmlDecode:function(text) {
        var temp = document.createElement("div");
        temp.innerHTML = text;
        var output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    }
};