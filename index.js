// Define getComputerChoice function where a computer randomly chooses either rock, paper or scissors

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Define getHumanChoice function where a human enters their choice and program returns it

function getHumanChoice() {
    let enteredChoice = prompt("Rock, Paper or Scissors?");
    let lowerCaseChoice = enteredChoice.toLowerCase();
    return lowerCaseChoice.charAt(0).toUpperCase() + lowerCaseChoice.slice(1)  // Convert string to only have first capital letter
}

// Declare humanScore computerScore variables that keep score of the game

let humanScore = 0;
let computerScore = 0;

// Logic to play a single round of the game

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    if (computerChoice === "Rock" && humanChoice === "Rock") {
        console.log("It's a draw!")
    } else if (computerChoice === "Rock" && humanChoice === "Paper") {
        humanScore += 1;
        console.log("You win! Paper beats Rock!")
    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        computerScore += 1;
        console.log("You lose! Rock beats Scissors!")
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        computerScore += 1;
        console.log("You lose! Paper beats Rock!")
    } else if (computerChoice === "Paper" && humanChoice === "Paper") {
        console.log("It's a draw!")
    } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
        humanScore += 1;
        console.log("You win! Scissors beat Paper!")
    } else if (computerChoice === "Scissors" && humanChoice === "Rock") {
        humanScore += 1;
        console.log("You win! Rock beats Scissors!")
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        computerScore += 1;
        console.log("You lose! Scissors beat Paper!")
    } else if (computerChoice === "Scissors" && humanChoice === "Scissors") {
        console.log("It's a draw!")
    }
}

playRound()

// TODO Step 4: Write logic to play a single round of the game
//  TODO: Define a function playRound
//  TODO: Call functions getComputerChoice and getHumanChoice to get results
//  TODO: Create a case of IF and IF ELSE statements that cover all possible choices
//      TODO: eg. Rock beats scissors, but loses to paper and draws to another rock

// TODO Step 5: Write the logic to pay the game for 5 rounds
//  TODO: Declare a playGame variable, which calls the playRound function and repeat the process 5 times
//  TODO: Output the score after each round and the overall winner after 5 games