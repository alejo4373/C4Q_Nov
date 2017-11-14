var inputField;
var outputDiv;

function printPrice(value){
    
}

function fetch(callback){
    var request = new XMLHttpRequest();
    request.addEventListener('load', function(){
        var response = JSON.parse(this.responseText);
        var price = response.bpi.USD.rate_float
        callback(price, inputField.value);
    })
    request.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json")
    request.send()
}

function toUsd(dollars, btc){
    var result = btc * dollars;
    outputDiv.innerText = btc +"BTC = " + result.toFixed(2) + "USD"
}

function toBtc(btc, dollars){
    var result = dollars / btc;
    outputDiv.innerText = dollars +"USD = " + result.toFixed(6) + "BTC"
}

document.addEventListener("DOMContentLoaded", function (){
    //Nodes
    outputDiv = document.querySelector("#output-div")
    inputField = document.querySelector("#input")
        //-> Buttons
    toUsdBtn = document.querySelector("#toUSD")
    toBtcBtn = document.querySelector("#toBTC")
    
    //Adding evenet listeners
    toUsdBtn.addEventListener("click", function(){
        fetch(toUsd)
    });
    
    toBtcBtn.addEventListener("click", function(){
        fetch(toBtc)
    });
})

