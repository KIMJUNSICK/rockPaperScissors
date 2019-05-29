const SUGGEST = document.querySelectorAll(".suggest");

let choice = 0;

const dic = {
  ROCK: 0,
  PAPER: "-240px",
  SCISSORS: "-120px"
};

let interval;
const intervalMaker = () => {
  interval = setInterval(() => {
    if (choice === dic.ROCK) {
      choice = dic.SCISSORS;
    } else if (choice === dic.SCISSORS) {
      choice = dic.PAPER;
    } else {
      choice = dic.ROCK;
    }
    document.querySelector("#rockPaperScissors__com").style.background =
      "url(file:///C:/Users/user/Documents/project/rockPaperScissors/images/rockPaperScissors.jpg)" +
      choice +
      " 0";
  }, 100);
};

const handleComChoice = choice => {
  return Object.entries(dic).find(function(x) {
    return x[1] === choice;
  })[0];
};

const handleChoice = (myChoice, computerChoice) => {
  if (myChoice === "ROCK") {
    if (computerChoice === "ROCK") {
      console.log("DRAW");
    } else if (computerChoice === "PAPER") {
      console.log("DEFEAT");
    } else if (computerChoice === "SCISSORS") {
      console.log("WIN!!");
    }
  } else if (myChoice === "PAPER") {
    if (computerChoice === "PAPER") {
      console.log("DRAW");
    } else if (computerChoice === "SCISSORS") {
      console.log("DEFEAT");
    } else if (computerChoice === "ROCK") {
      console.log("WIN!!");
    }
  } else if (myChoice === "SCISSORS") {
    if (computerChoice === "SCISSORS") {
      console.log("DRAW");
    } else if (computerChoice === "ROCK") {
      console.log("DEFEAT");
    } else if (computerChoice === "PAPER") {
      console.log("WIN!!");
    }
  }
};

const init = () => {
  intervalMaker();
  SUGGEST.forEach(function(element) {
    element.addEventListener("click", function() {
      let myChoice = this.textContent;
      let computerChoice = handleComChoice(choice);
      handleChoice(myChoice, computerChoice);
      clearInterval(interval);
      setTimeout(intervalMaker, 1000);
    });
  });
};

init();
