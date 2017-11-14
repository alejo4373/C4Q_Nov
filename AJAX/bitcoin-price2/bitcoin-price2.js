var fetchBtn;
var inputValue;
var outputDiv;

function printPrice(value){
    
}

function makeAvailable(object, print){

}

function fetch(action){
    var request = new XMLHttpRequest();
    request.addEventListener('load', function(){
        var response = JSON.parse(this.responseText);
        var price = Number(response.bpi.USD.rate_float)
        if (action === "toBtc") {
            outputDiv.innerText = inputValue.value * price;
        }
        else if (action === "toUsd") {
            outputDiv.innerText = inputValue.value / price;
        }
        console.log(price)
        console.log("hello" + response.bpi.USD.rate)

    })
    request.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json")
    request.send()
}

// function BtcToUsd(){
//     fetch(false);
//     outputDiv.innerText = inputValue.value * price;
// }

// function UsdToBtc(){

// }

document.addEventListener("DOMContentLoaded", function (){
    //Nodes
    outputDiv = document.querySelector("#output-div")
    fetchBtn = document.querySelector("#fetch-btn")
    toUSDBtn = document.querySelector("#toUSD")
    inputValue = document.querySelector("#input")


    //Adding event listeners
    // fetchBtn.addEventListener("click", function(){
    //     fetch(true);
    // });
    toUSDBtn.addEventListener("click", function(){
        fetch("toUsd")
    });
    
})

        //document.querySelector("#output").innerText = 
