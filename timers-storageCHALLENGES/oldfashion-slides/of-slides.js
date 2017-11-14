var wheel = document.querySelector("#wheel")
var xPosition = 1024;
wheel.style.position = "absolute";    
wheel.style.left = xPosition + "px"

function moveForward(){
    xPosition -= 5;
    wheel.style.left = xPosition + "px"
}

setInterval(function() {
    moveForward()
}, 50)
