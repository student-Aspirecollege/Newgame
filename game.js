let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let userScorePara = document.querySelector("#user-score")
let compScorePara = document.querySelector("#comp-score")
let msg = document.querySelector("#msg");

 choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
 });

 const playGame = (userChoice) =>{
  const compChoice = genCompChoice();
//   console.log("comp choice was", compChoice)

  if (userChoice === compChoice){
      drawGame();
  }else{
    let userWin = true;
    if (userChoice === "rock"){
      //  scissors, paper
        userWin = compChoice === "paper" ? false :true ;
    } else if(userChoice === "paper") {
        // rock , scissors
        userWin = compChoice === "scissors" ? false :true;
    }else{
        userWin = compChoice === "rock" ? false: true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
 }

 const genCompChoice = (compChoice) => {
    let options = ["rock","paper","scissors"];
    let randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

 const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
 }

 const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin){
       userScore++;
       userScorePara.innerText = userScore;
       msg.innerText = `You your ${compChoice} beats  ${userChoice}`;
       msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
 }
