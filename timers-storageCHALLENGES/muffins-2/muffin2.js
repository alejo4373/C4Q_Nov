var muffinKey = "muffinCnt";

function muffinChange(n) {
    var muffinCnt = Math.max(0, Number(window.localStorage.getItem(muffinKey)) + n);
    window.localStorage.setItem(muffinKey, muffinCnt);
    document
        .querySelector("#counter")
        .innerText = window.localStorage.getItem(muffinKey);
}

document
    .querySelector("#eat")
    .addEventListener("click",
    function (event) {
        muffinChange(-1)
    }
    );

document
    .querySelector("#bake").addEventListener("click",
    function (event) {
        muffinChange(5)
    }
    );

if (isNaN(Number(window.localStorage.getItem(muffinKey)))) {
    window.localStorage.setItem(muffinKey, 10);
}

document.addEventListener("DOMContentLoaded", function () {
    //If is not the first page load and we have some muffins then 
    // show the message
    if (Number(window.localStorage.getItem(muffinKey)) !== 0) {
        muffinChange(-1)
        var newP = document.createElement("p")
        newP.innerText = "Someone ate a muffin while you were gone"
        document.body.appendChild(newP);
    }
})
