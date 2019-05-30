const SUGGEST = document.querySelectorAll(".suggest");
const result = document.querySelector(".result");

let choice = 0;

const dic = {
  ROCK: 0,
  PAPER: "-240px",
  SCISSORS: "-120px"
};

const score = {
  ROCK: -1,
  PAPER: 0,
  SCISSORS: 1
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
  let difference = myChoice - computerChoice;

  if (difference === 0) {
    result.innerText = "DRAW";
  } else if ([1, -2].includes(difference)) {
    result.innerText = "Wiiiiinn!!";
  } else if ([-1, 2].includes(difference)) {
    result.innerText = "DEFEAT";
  }
};

const init = () => {
  intervalMaker();
  SUGGEST.forEach(function(element) {
    element.addEventListener("click", function() {
      let myChoice = score[this.textContent];
      let computerChoice = score[handleComChoice(choice)];
      handleChoice(myChoice, computerChoice);
      clearInterval(interval);
      setTimeout(intervalMaker, 500);
    });
  });
};

init();
