//Player name node;
let playerNode = document.querySelector("#player")

//Board Nodes
let userChoice = document.querySelector("#user-chooses")
let computerChoice = document.querySelector("#computer-chooses")
let result = document.querySelector("#result")

let playerWins = document.querySelector("#tWin")
let playerLoses = document.querySelector("#tLose")
let ties = document.querySelector("#tTie")

Array.from(document.querySelectorAll("button")).map(function(elem){
    elem.addEventListener("click", function(){
        let move = elem.dataset.move;
        let player = playerNode.value;
        fetch("http://codyhess.com:9001/" + move + "/" + player)
            .then(function(response){
                return response.json()
            })
            .then(function(responseObj){
                userChoice.innerText = responseObj.user
                computerChoice.innerText = responseObj.ai
                result.innerText = responseObj.result;
                if(player) {
                    playerWins.innerText = "Total Wins:" + responseObj.stats.win
                    playerLoses.innerText = "Total Losses:" + responseObj.stats.lose
                    ties.innerText = "Total Ties: " +responseObj.stats.tie
                } else {
                    playerWins.innerText = ""
                    playerLoses.innerText = ""
                    ties.innerText = "";
                }
            })
    })
});

