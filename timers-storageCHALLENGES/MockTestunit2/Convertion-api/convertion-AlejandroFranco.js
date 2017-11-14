//Button Nodes
var fromBin = document.querySelector(".from-bin")
var fromDec = document.querySelector(".from-dec")
var fromHex = document.querySelector(".from-hex")

//Output Nodes
var originalNum = document.querySelector("#original-num")
var originalBase = document.querySelector("#original-base")
var asBin = document.querySelector("#as-bin")
var asDec = document.querySelector("#as-dec")
var asHex = document.querySelector("#as-hex")

//input Node
var inputField = document.querySelector(".user-input")


//Utilitarian function
function printInfo(){
    var obj = JSON.parse(this.responseText)
    console.dir(obj)
    console.log("Printing...")
    originalNum.innerText = obj.original.value;
    originalBase.innerText = obj.original.base;
    asBin.innerText = obj.conversions.binary;
    asDec.innerText = obj.conversions.decimal;
    asHex.innerText = obj.conversions.hex;

}

//Adding event listeners
fromBin.addEventListener("click", function (){
    var binUrl = "http://codyhess.com:9000/" + inputField.value + "/bin"
    var request = new XMLHttpRequest();
    request.addEventListener("load", printInfo)
    request.open ("GET", binUrl)
    request.send();
    
})

fromDec.addEventListener("click", function (){
    var decUrl = "http://codyhess.com:9000/" + inputField.value
    var request = new XMLHttpRequest();
    request.addEventListener("load", printInfo)
    request.open ("GET", decUrl)
    request.send();
    
})

fromHex.addEventListener("click", function (){
    var hexUrl = "http://codyhess.com:9000/" + inputField.value + "/hex"
    var request = new XMLHttpRequest();
    request.addEventListener("load", printInfo);
    request.open ("GET", hexUrl)
    request.send();
    
})