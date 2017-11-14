var plant = document.querySelector("#plant")


var id = setInterval(function(){
    var newWidth = plant.width;
    plant.width = newWidth + 1
}, 59)

//     50 -> 100
//    +25
//    +25
//    =100
//To check width when 
setTimeout(function(){
    clearInterval(id)
},3000)