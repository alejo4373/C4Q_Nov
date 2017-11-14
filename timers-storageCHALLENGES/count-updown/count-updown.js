var count = 0;
var intervalId;
var startingRate = 1;

//To make display avaliable in the global execution context
var display;

function increase(rate) {
    count += rate;
    display.innerText = count;
}

function decrease(rate) {
    count -= rate;
    display.innerText = count;
}

document.addEventListener("DOMContentLoaded", function () {
    //Nodes
    display = document.querySelector("#display")
    var upBtn = document.querySelector("#up-btn")
    var downBtn = document.querySelector("#down-btn")
    var tTwoBtn = document.querySelector("#times-two-btn")

    //Adding event listener
    upBtn.addEventListener("click", function () {
        clearInterval(intervalId)
        intervalId = window.setInterval(function () {
            increase(startingRate)
        }, 500);

    })

    downBtn.addEventListener("click", function () {
        clearInterval(intervalId)
        intervalId = window.setInterval(function () {
            decrease(startingRate)
        }, 500);
    })


    tTwoBtn.addEventListener("click", function () {
        startingRate *=  2 
    })

    //Always start increasing
    intervalId = window.setInterval(function () {
        increase(startingRate);
    }, 500);
    
})