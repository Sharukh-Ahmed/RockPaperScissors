let userscore = 0;
let compscore = 0;
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#user-score"); 
let compScore = document.querySelector("#comp-score");
let msgContainer = document.querySelector(".msg-container");
let reset = document.querySelector("button");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"]
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}
let i = 0;
let j = 0;

const userCounter = (userChoice, compChoice) => {
    i++;
    userScore.innerText = i;
    msgContainer.style.backgroundColor = "Green";
    msg.innerText = `${userChoice} beats ${compChoice}`;
}


const compCounter = (compChoice, userChoice) => {
    j++;
    compScore.innerText = j;
    msgContainer.style.backgroundColor = "Red";
    msg.innerText = compChoice+" beats "+userChoice;

}

const draw = () => {
    msg.innerText = "Draw!";
    msgContainer.style.backgroundColor = "Grey";
}

const resetGame = () => {
    i = 0;
    j = 0;
    userScore.innerText = i;
    compScore.innerText = j;
    msg.innerText = "Start Again!";
    msgContainer.style.backgroundColor = "black";
}

const showWinner = (userWinner, userChoice, compChoice) => {
    if(userWinner) {
        console.log("You win");
        userCounter(userChoice, compChoice);
    }
    else{
        console.log("You lose");
        compCounter(compChoice, userChoice);
    }
};

function playGame (userChoice) {

    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if (userChoice === compChoice) {
        draw();
    } else {
        let userWinner = true;
        if (userChoice === "Rock") {
            userWinner = compChoice === "Paper" ? false : true;
        }
        
        else if (userChoice === "Paper") {
            userWinner = compChoice === "Rock" ? true : false;
        }

        else if (userChoice === "Scissors") {
            userWinner = compChoice === "Rock" ? false : true;
        }

        showWinner(userWinner,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        playGame(userChoice);// this is passing information from one block to other block function
        
    })
});

reset.addEventListener("click", resetGame);