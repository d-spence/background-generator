var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var random = document.querySelector("#random");
var body = document.getElementById("gradient");

// console.log(body);
// console.log(color1);
// console.log(color2);

function setGradient() {
    body.style.background = getGradientCSS();
    css.textContent = getGradientCSS() + ";";
}

function getGradientCSS() {
    // Return the linear gradient css property of current bg
    return "linear-gradient(to right, "+color1.value+", "+ color2.value+")";
}

function randomColor() {
    // Return a random hex color value
    return "#000000".replace(/0/g, function() {
        return (~~(Math.random()*16)).toString(16);
    });
}

function randomGradient() {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomGradient);

document.addEventListener('DOMContentLoaded', () => {
    css.textContent = getGradientCSS() + ";";
})