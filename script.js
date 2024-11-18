// Variables for the DOM elements

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

let countDown;
let randomWord;
let timeInterval = 1000;

const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const wordElement = document.getElementById("word");
const inputElement = document.querySelector("input");
const settingsElement = document.getElementById("settings-form");
const toggleSettingsBtn = document.getElementById("settings-btn");

function addWordToDOM() {
  const random = Math.floor(Math.random() * words.length);
  randomWord = words[random];
  wordElement.textContent = randomWord;
}
addWordToDOM();
updateTime();

function updateScore() {
  const score = parseInt(scoreElement.textContent);
  scoreElement.textContent = score + 1;
}

function incrementTime() {
  const iTime = parseInt(timeElement.textContent);
  timeElement.textContent = iTime + 5;
}

function decrementTime() {
  const dTime = parseInt(timeElement.textContent);

  if (dTime > 0) {
    timeElement.textContent = dTime - 1;
  } else {
    gameOver();
  }
}

function updateTime() {
  clearInterval(countDown);
  countDown = setInterval(decrementTime, timeInterval);
}

function gameOver() {
  clearInterval(countDown);

  const gameOverMsg = prompt(
    "GAME OVER! Choose an option: \n 1.) PLAY AGAIN \n 2.) QUIT GAME"
  );

  if (gameOverMsg === "1") {
    let difficultyLevel;
    let validDifficulty = false;

    while (!validDifficulty) {
      difficultyLevel = prompt(
        "Choose the difficulty: \n 1.) Easy \n 2.) Medium \n 3.) Hard \n"
      );

      if (difficultyLevel === "1") {
        timeElement.textContent = "10";
        validDifficulty = true;
      } else if (difficultyLevel === "2") {
        timeElement.textContent = "7";
        validDifficulty = true;
      } else if (difficultyLevel === "3") {
        timeElement.textContent = "5";
        validDifficulty = true;
      } else {
        alert("Invalid difficulty level. Please type in: 1, 2 or 3.");
      }
    }
    resetGame();
    updateTime();
    return;
  } else if (gameOverMsg === "2") {
    alert("Thanks for playing!");
    scoreElement.textContent = "0";
    return;
  } else {
    alert("Invalid input. Please type in: 1 or 2.");
    return gameOver();
  }
}

function resetGame() {
  scoreElement.textContent = "0";
  addWordToDOM();
  updateTime();
}

inputElement.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userInput = inputElement.value.toLowerCase();
    randomWord = wordElement.textContent.toLowerCase();

    if (userInput === randomWord) {
      updateScore();
      addWordToDOM();
      incrementTime();
      inputElement.value = "";
    }
  }
});

settingsElement.addEventListener("change", function (e) {
  if (e.target.id === "difficulty") {
    const selectedDifficulty = e.target.value;

    switch (selectedDifficulty) {
      case "easy":
        timeElement.textContent = "10";
        break;
      case "medium":
        timeElement.textContent = "7";
        break;
      case "hard":
        timeElement.textContent = "5";
        break;
      default:
        alert("Invalid difficulty level");
        return;
    }
    updateTime();
  }
});

settingsElement.style.display = "none";

toggleSettingsBtn.addEventListener("click", function () {
  settingsElement.style.display =
    settingsElement.style.display === "none" ? "block" : "none";
});
