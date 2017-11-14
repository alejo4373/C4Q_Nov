function reqListener() {
    var joke = JSON.parse(this.responseText)
    document.querySelector("#setup").innerText = joke.setup;
    setTimeout(function () {
        document.querySelector("#punchline").innerText = joke.punchline;
    }, 7000)
}

function getJoke() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener); //to wait for the response 
    oReq.open("GET", "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke");
    oReq.send();
    //to erase the previus punch line
    document.querySelector("#punchline").innerText = ""
}

document.addEventListener("DOMContentLoaded", function () {
    var myButton = document.querySelector("#mybutton")
    myButton.addEventListener("click", getJoke);

});