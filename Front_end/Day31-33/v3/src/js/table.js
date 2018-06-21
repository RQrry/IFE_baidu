import {sourceData} from "./data.js";

// 获取数据
function getData() {
    var list = [];
    var single = document.querySelectorAll("input[checkbox-type='single']:checked");
    for(let s of single) {
        for(let i of sourceData) {
            if(s.value === i.product || s.value === i.region) {
                list.push(i);
            }
        }
    }
    return Array.from(new Set(list));
    // return [...new Set(list)];
}

// 表格渲染
function displayTable() {
    var tableWrapper = document.getElementById("table-wrapper");
    var regionWrapper = document.getElementById("region-radio-wrapper");
    var productWrapper = document.getElementById("product-radio-wrapper");
    var list = getData();
    var regions = regionWrapper.querySelectorAll("input[checkbox-type='single']:checked");
    var products = productWrapper.querySelectorAll("input[checkbox-type='single']:checked");
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var title = Array.from({length:12}, (v,k) => k+1+"月");
    tableWrapper.innerHTML = "";

    // 地区1列
    if(products.length > 1 && regions.length === 1) {
        title.unshift("商品");
        title.unshift("地区");
        list.sort(compare("region"));
    } else {
        title.unshift("地区");
        title.unshift("商品");
        list.sort(compare("product"));
    }

    // thead
    var tr = document.createElement("tr");
    for(let i of title) {
        var th = document.createElement("th");
        th.innerHTML = i;
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);

    // tbody
    for(let i of list) {
        var tr = document.createElement("tr");
        var regionTd = document.createElement("td");
        var productTd = document.createElement("td");
        regionTd.innerHTML = i.region;
        productTd.innerHTML = i.product;
        
        if(products.length > 1 && regions.length === 1) {
            tr.appendChild(regionTd);
            tr.appendChild(productTd);
        } else {
            tr.appendChild(productTd);
            tr.appendChild(regionTd);
        }

        // sale
        for(let j of i.sale) {
            var td = document.createElement("td");
            td.innerHTML = j;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    tableWrapper.appendChild(table);

    // 对象数组排序
    function compare(property) {
        return function(a,b) {
            var value1 = a[property];
            var value2 = b[property];
            if(value1 > value2) return 1;
            if(value1 < value2) return -1;
            return 0;
        }
    }
}

// 单元格合并
function mergeCell(start) {
    var tbody = document.querySelector("tbody");
    for(let i=start; i<tbody.rows.length; i++) {
        if(tbody.rows[start].cells[0].innerHTML === tbody.rows[i+1].cells[0].innerHTML) {
            tbody.rows[start].cells[0].rowSpan += 1;
            tbody.rows[i+1].cells[0].style.display = "none";
        } else {
            mergeCell(i+1);
        }
    }
}

export {displayTable, mergeCell}