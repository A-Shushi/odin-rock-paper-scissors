// Define getComputerChoice function where a computer randomly chooses either rock, paper or scissors

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

console.log(getComputerChoice())

// TODO Step 2: Define getHumanChoice function where a human enters their choice and program records it
//  TODO: Use prompt to get user input
//  TODO: Convert text into uniform format with capital first letter
//  TODO: If string does not equal "Rock" or "Paper" or "Scissors" throw an error and restart the function
//  TODO: IF 0 THEN rock ELSE IF paper ELSE scissors

// TODO Step 3: Declare humanScore computerScore variables that keep score of the game

// TODO Step 4: Write logic to play a single round of the game
//  TODO: Define a function playRound
//  TODO: Call functions getComputerChoice and getHumanChoice to get results
//  TODO: Create a case of IF and IF ELSE statements that cover all possible choices
//      TODO: eg. Rock beats scissors, but loses to paper and draws to another rock

// TODO Step 5: Write the logic to pay the game for 5 rounds
//  TODO: Declare a playGame variable, which calls the playRound function and repeat the process 5 times
//  TODO: Output the score after each round and the overall winner after 5 games