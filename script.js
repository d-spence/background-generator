var css = document.querySelector("#gradientcss");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var random = document.querySelector("#random");
var angle = document.querySelector("#angle");
var body = document.querySelector("#gradient");

// console.log(body);
// console.log(color1);
// console.log(color2);

const ANGLES = ['0deg', '45deg', '90deg', '135deg', '180deg', '225deg', '270deg', '315deg'];
let currentAngleIndex = 0;

function setGradient() {
    body.style.background = getGradientCSS();
    css.textContent = getGradientCSS() + ";";
}

function getGradientCSS() {
    // Return the linear gradient css property of current bg
    let gradientCss = `linear-gradient(${ANGLES[currentAngleIndex]}, ${color1.value}, ${color2.value})`;
    return gradientCss;
}

function randomColor() {
    // Return a random hex color value
    return "#000000".replace(/0/g, function() {
        return (~~(Math.random()*16)).toString(16);
    });
}

function randomGradient() {
    // Set random color values and apply css
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}

function nextAngle() {
    // Return the next angle from ANGLES array
    if (currentAngleIndex === ANGLES.length-1) {
        currentAngleIndex = 0;
    } else {
        currentAngleIndex++;
    }
    // console.log(currentAngleIndex, ANGLES[currentAngleIndex]);
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomGradient);
angle.addEventListener("click", nextAngle);

document.addEventListener('DOMContentLoaded', () => {
    randomGradient();
    css.textContent = getGradientCSS() + ";";
})