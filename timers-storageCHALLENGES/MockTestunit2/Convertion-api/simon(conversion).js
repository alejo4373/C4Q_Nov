document.addEventListener('DOMContentLoaded', function () {
    // API result
    var result;

    //Global Variables
    var originalNumber = document.querySelector('#originNum');
    var text = document.getElementById('input')
    var baseNum = document.querySelector('#base')

    // Events 
    var body = document.querySelector('body')
    var toBinary = document.querySelector('#binary');
    var decimal = document.querySelector('#decimal');
    var hex = document.querySelector('#hex');

    function reqListener() {
        result = JSON.parse(this.responseText);
        console.log(result);
    }

    function printToScreen() {
        originalNumber.innerText = text.value;
        originalNumber.innerText = result
        // base.innerText = result.original.base;

    }

    body.addEventListener('click', function () {
        if (result) {
            printToScreen();
            console.log(result);
        } else {
            // API request
            var oReq = new XMLHttpRequest();
            oReq.addEventListener("load", reqListener);
            oReq.open("GET", "http://codyhess.com:9000/" + text.value) ;
            oReq.send();
        }
    });


});