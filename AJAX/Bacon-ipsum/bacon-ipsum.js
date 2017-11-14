function buildNewParagraph(){
    //Create the request
    var oReq = new XMLHttpRequest();
    oReq.open("GET", "https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text");
    oReq.send();
    oReq.addEventListener("load", function(){
        var newParagraph = document.createElement('p')
        document.querySelector("body").appendChild(newParagraph);
        newParagraph.innerText = this.responseText;
    });
    
}

document.addEventListener("DOMContentLoaded", function(){
    var btn = document.querySelector("#p-adder")
    btn.addEventListener("click", buildNewParagraph);
})

function clicked(){
    console.log("clicked")
}