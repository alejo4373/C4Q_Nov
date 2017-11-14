let ninjaFacts = document.querySelector("#ninja-facts-list");
let form = document.querySelector("form");
let ninjaFact = document.querySelector("#ninja-fact")


form.addEventListener("submit", function(event){
   let newLi = document.createElement("li");
    newLi.innerText = ninjaFact.value
    newLi.addEventListener("click", function(){
        newLi.style.textTransform = "uppercase"
    })
    ninjaFacts.appendChild(newLi)
    ninjaFact.value = "";
    event.preventDefault();
})

