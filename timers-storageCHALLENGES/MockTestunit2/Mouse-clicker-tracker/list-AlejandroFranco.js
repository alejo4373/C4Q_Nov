var list = document.querySelector(".main-list")
var btn = document.querySelector(".clear")

document.addEventListener("click", function (event) {
    //Check that if we click the button we dont want to append those coordinates
    if (!event.target.classList.contains("clear")) {
        var newLi = document.createElement("li")
        newLi.innerText = "X: " + event.clientX + " Y: " + event.clientY;
        list.appendChild(newLi);
    }
})

btn.addEventListener("click", function () {
    list.innerHTML = "";
})