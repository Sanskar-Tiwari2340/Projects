let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScoreVar = document.querySelector('#userScore');
const computerScoreVar = document.querySelector('#computerScore');

choices.forEach((choice) => {                               // 1st step
    // Add an event listener to each choice
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id"); // Get the id of the clicked choice (Rock, Paper, or Scissors)
        playGame(userChoice);
    });
});

const playGame = (userChoice) =>{                          // 2nd step
    console.log("user choice:", userChoice);
    // Generate computer choice
    const computerChoice = genComputerChoice();           // the computer choice is generated here and returned to the variable computerChoice
    // Display computer choice
    console.log("computer choice:", computerChoice);

    // Compare choices
    if(userChoice === computerChoice) {                 // 4th step
        // If both choices are the same, it's a tie
        msg.innerText = "It's a tie.";
        msg.style.color = "blue"; // Change text color to blue for tie
    }
    else{
        let userWin = true;
        if(userChoice === 'Rock' && computerChoice === 'Paper') {
            userWin = false;
        }
        else if(userChoice === 'Paper' && computerChoice === 'Scissors') {
            userWin = false;
        }
        else if(userChoice === 'Scissors' && computerChoice === 'Rock') {
            userWin = false;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}


// Function to generate a random choice for the computer
const genComputerChoice = () => {                          // 3rd step
    // Generate a random choice for the computer
    const options = ['Rock', 'Paper', 'Scissors'];
    const randInd = Math.floor(Math.random() * options.length);    // options.length(means 3) gives us the number of choices
    return options[randInd];
}


 // Function to show the winner
const showWinner = (userWin,userChoice, computerChoice) => {                    // 5th step
    if(userWin) {  // by default userWin is true
        userScore++; // Increment user score
        userScoreVar.innerText = userScore; // Update user score display
        msg.innerText = "You win! Your " + userChoice + " beats " + computerChoice + ".";
        msg.style.color = "green"; // Change text color to green for win
    }
    else {
        computerScore++; // Increment computer score
        computerScoreVar.innerText = computerScore; // Update computer score display
        msg.innerText = "You Loss. " + computerChoice + " beats your " + userChoice + ".";
        msg.style.color = "red";   // Change text color to red for loss
    }
}