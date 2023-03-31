const getUserChoice  = function (userInput) {
  userInput.toLowerCase()
  if(userInput === 'rock' ||userInput === 'paper'||userInput === 'scissors' )
{
  return userInput;
} else {
  console.log('error');
}
}

const getUserChoice = userInput => {
  userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'  ){
    return userInput
  }else {
    console.log('error')
  }
}
//console.log(getUserChoice('rock'))

//random num
const getComputerChoice = () => {
const num =Math.floor(Math.random() * 3)
switch (num) {
  case 0 :
  return 'rock'
  break;

  case 1 :
  return 'paper'
  break;

  case 2:
  return 'scissors'
  break 

}
}

console.log(getComputerChoice())

const determineWinner = function (userChoice, computerChoice ){
  if (userChoice === computerChoice) {
  return 'The game is a tie!';
}
if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
}
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('paper', 'rock'));
