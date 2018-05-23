window.onload = function() {
    var buttons = document.getElementsByTagName("button");

    for(var i=0; i<buttons.length; i++) {
        buttons[i].onclick = function() {
            var x = Number(document.getElementById("first-number").value);
            var y = Number(document.getElementById("second-number").value);
            var result = document.getElementById("result");
            switch(this.id) {
                case "add-btn": result.innerHTML = x + y;
                break;
                case "minus-btn": result.innerHTML = x - y;
                break;
                case "times-btn": result.innerHTML = x * y;
                break;
                case "divide-btn": result.innerHTML = x / y;
                break;
            }
        }
    }
}