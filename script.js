var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("genbtn")


function randomNumber() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function generateHex() {
    var c1 = randomNumber()
    var c2 = randomNumber()
    return [c1, c2]
}

function setBackgroundStyleClick() {
    var hex1 = generateHex()[0], hex2 = generateHex()[1];
    css.textContent = hex1 + " " + hex2;
    return "linear-gradient(to right," + hex1 + "," + hex2 + ")";
}

function setBackgroundStyle() {
    return "linear-gradient(to right," + color1.value + "," + color2.value + ")";
}

function setGradient() {
    body.style.background = setBackgroundStyle();
    btn.style.background = setBackgroundStyle();
    css.textContent = color1.value + " " + color2.value;
}

function setGradientClick() {
    var stringBackground = setBackgroundStyleClick();
    body.style.background = stringBackground;
    btn.style.background = stringBackground; 
}



window.addEventListener("load", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setGradientClick)