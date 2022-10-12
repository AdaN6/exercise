const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("give me something");
  }
};

// console.log(getUserChoice('r'));

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
  }
};

// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "This game is a tie";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry, computer Won!";
    } else {
      return "Congratulation, you won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Sorry, computer won!";
    } else {
      return "you win! ";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Sorry, computer Won!";
    } else {
      return "Congratulation, you won!";
    }
  }

  if (userChoice === "bomb") {
    return "Yay! you won!";
  }
};

//console.log(determineWinner('scissors','rock'));

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
