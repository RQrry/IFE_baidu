var hour = new Date().getHours();
var btn = document.getElementById("btn");

document.getElementById("btn").onclick = function() {
    document.getElementById("button").style.display = "none";
    document.getElementById("name").style.display = "block";
}

if(hour < 10) {
    btn.textContent = "Good morning! Click me";
} else if(hour < 14) {
    btn.textContent = "Good day! Click me";
} else if(hour < 20) {
    btn.textContent = "Good afternoon! Click me"
} else {
    btn.textContent = "Good evening! Click me";
}