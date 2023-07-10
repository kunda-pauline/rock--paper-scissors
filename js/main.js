function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 3) + 1;
    if (ComputerChoice == 1) {
        return "rock";
    }
    else if (ComputerChoice == 2) {
        return "paper";
    }
    else if (ComputerChoice == 3) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "scissors") {
        return "Computer won! rock beat scissors";
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        return "Player won! paper beat rock";
    }
    else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "Player won!  rock beat scissors";
    }
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "Computer won! scissors beat paper";
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        return "Computer won!  paper beat rock";
    }
    else if (computerSelection == "paper" && playerSelection == "scissors") {
        return "player won! scissors beat paper";
    }
    else {
        return "the game become tie";
    }
}

let pointC = 0;
let pointP = 0;
function game() {
    var comp;
    var user;
    for (let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Enter rock , paper or scissors ").toLowerCase();

        if (playRound(playerSelection, computerSelection).includes('Computer')) {
            pointC = pointC + 1;
        }
        else if (playRound(playerSelection, computerSelection).includes('Player')) {
            pointP = pointP + 1;
        }

        console.log("Computer Choice:", computerSelection);
        console.log("Player Choice: ", playerSelection);

        console.log("Computer Marks:", pointC);
        console.log("Player Marks:", pointP);
        comp = pointC;
        user = pointP;
    }
    console.log("FINAL  Marks of PLAYER:", user);
    console.log("Final Marks of  COMPUTER:", comp);
    


    if (comp > user) {
        console.log("computer won the game!!");
    }
    else if (user > comp) {
        console.log(" Wow Player won the game!!");
    }
    else if (user == comp) {
        console.log("THE GAME BECOMES TIE!");
    }
}
console.log(game());


