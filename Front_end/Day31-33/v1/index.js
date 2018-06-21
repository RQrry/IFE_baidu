var regionSelect = document.getElementById("region-select");
var productSelect = document.getElementById("product-select");
var tableWrapper = document.getElementById("table-wrapper");

regionSelect.onchange = function() {
    displayTable();
}

productSelect.onchange = function() {
    displayTable();
}

function getData() {
    let list = [];
    let regionValue = regionSelect.value;
    let productValue = productSelect.value;
    for(let i in sourceData) {
        if(sourceData[i].region === regionValue && sourceData[i].product === productValue) {
            list.push(sourceData[i]);
        }
    }
    return list;
}

function displayTable() {
    let list = getData();
    let thead = `<tr><th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th></tr>`;
    let tbody = "";
    for(let i in list) {
        tbody += `<tr><td>${list[i].product}</td><td>${list[i].region}</td>`;
        for(let j in list[i].sale) {
            tbody += `<td>${list[i].sale[j]}</td>`;
        }
        tbody += `</tr>`;
    }
    tableWrapper.innerHTML = `<table border="1">${thead}${tbody}</table>`;
}
displayTable();