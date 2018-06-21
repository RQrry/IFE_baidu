function checkBox(wrapper) {
    wrapper.onclick = function(e) {
        var e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.type === "checkbox") {
            let type = target.getAttribute("checkbox-type");
            // 全选
            if(type === "all") {
                if(!target.checked) {
                    target.checked = true;
                } else {
                    let single = wrapper.querySelectorAll("input[checkbox-type='single']");
                    for(let s of single) {
                        s.checked = true;
                    }
                }
            } 
            // 子选项
            else {
                let all = wrapper.querySelector("input[checkbox-type='all']");
                let single = wrapper.querySelectorAll("input[checkbox-type='single']:checked");
                if(single.length === 0) {
                    target.checked = true;
                }
                if(single.length === 3) {
                    all.checked = true;
                } else {
                    all.checked = false;
                }
            }
        }
    }
}