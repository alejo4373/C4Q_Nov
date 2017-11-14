var fetchBtn;

function fetch(){
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json")
    request.send()
    request.addEventListener('load', function(){
        var response = JSON.parse(this.responseText);
        document.querySelector("#output").innerText = response.bpi.USD.rate;
    })
}

document.addEventListener("DOMContentLoaded", function (){
    fetchBtn = document.querySelector("#fetch-btn")
    fetchBtn.addEventListener("click", fetch);
})