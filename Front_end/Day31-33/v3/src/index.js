import "./index.css";
import {checkBox} from "./js/checkbox.js";
import {displayTable, mergeCell} from "./js/table.js";

var container = document.querySelector(".container");
var regionWrapper = document.getElementById("region-radio-wrapper");
var productWrapper = document.getElementById("product-radio-wrapper");

container.onclick = function(e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    var list = document.querySelectorAll("input:checked");
    if(target.nodeName.toLowerCase() === "input") {
        displayTable();
        if(list.length > 2) {
            mergeCell(0);
        }
    }
}

checkBox(regionWrapper);
checkBox(productWrapper);
displayTable();