//Random Pick from Computer

function computerPlay(){
    let computerChoice=Math.floor(Math.random()*3);
    if(computerChoice==0){
        return `rock`;
    }
    else if(computerChoice==1){
        return `paper`;
    }
    else if(computerChoice==2){
        return `scissors`;
    }
    else{
        console.log("Invalid ");
    }
}

let compChoice=computerPlay();
console.log("Computer Choose:-"+compChoice);


//Function to make user choose between Rock, Paper & SCissors
let userChoice=prompt("Please choose between Rock , Paper & Scissors:-");
userChoice=userChoice.toLowerCase();
console.log("You Choose:-"+userChoice);


//Gamplay Function to determine the winner
function gamePlay(choiceUser,choiceComputer){
  if(choiceUser==choiceComputer){
      return `It's a TIE! YOU CHOSE ${choiceUser} and COMPUTER CHOSE ${choiceComputer}`;
  }
  else if(choiceUser=="rock" && choiceComputer=="paper"){
      return `Computer Won! ${choiceComputer} beats ${choiceUser}`;
  }
  else if(choiceUser=="rock" && choiceComputer=="scissors"){
      return `You Won! ${choiceUser} beats ${choiceComputer}`;
  }
  else if(choiceUser=="paper" && choiceComputer=="rock"){
      return `You Won! ${choiceUser} beats ${choiceComputer}`;
  }
  else if(choiceUser=="paper" && choiceComputer=="scissors"){
      return `Computer Won! ${choiceComputer} beats ${choiceUser} `;
  }
  else if(choiceUser=="scissors" && choiceComputer=="rock"){
      return `Computer Won! ${choiceComputer} beats ${choiceUser}`;
  }
  else if(choiceUser=="scissors" && choiceComputer=="paper"){
      return `You Won! ${choiceUser} beats ${choiceComputer}`;
  }else{
      return `Try Again!`;
  }

}

console.log(gamePlay(userChoice,compChoice));